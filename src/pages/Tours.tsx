import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, MapPin, Clock, Star, ChevronRight, X } from 'lucide-react'
import { tours, categories } from '@/lib/data'

export default function Tours() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<'rating' | 'price-low' | 'price-high' | 'duration'>('rating')

  const filteredTours = useMemo(() => {
    let result = [...tours]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(tour =>
        tour.name.toLowerCase().includes(query) ||
        tour.region.toLowerCase().includes(query) ||
        tour.short_description.toLowerCase().includes(query)
      )
    }

    if (selectedCategory) {
      result = result.filter(tour => tour.category === selectedCategory)
    }

    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'duration':
        result.sort((a, b) => {
          const getDays = (d: string) => parseInt(d.match(/\d+/)?.[0] || '1')
          return getDays(a.duration) - getDays(b.duration)
        })
        break
    }

    return result
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />

      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  !selectedCategory
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Tours
              </button>
              {categories.map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full font-medium transition-all capitalize ${
                    selectedCategory === cat.slug
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search tours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
              >
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          {filteredTours.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">No tours found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory(null)
                }}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-slate-600">
                  Showing <span className="font-semibold text-slate-900">{filteredTours.length}</span> tours
                  {selectedCategory && (
                    <span className="ml-2 px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-sm capitalize">
                      {selectedCategory}
                    </span>
                  )}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.map((tour, idx) => (
                  <motion.div
                    key={tour.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <TourCard tour={tour} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[40vh] min-h-[320px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/50 z-10" />
        <img
          src="https://images.pexels.com/photos/1684065/pexels-photo-1684065.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Azerbaijan tours"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Explore Our Tours
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Discover the beauty of Azerbaijan with our carefully curated tours,
            from ancient cities to mountain adventures.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function TourCard({ tour }: { tour: typeof tours[0] }) {
  return (
    <Link to={`/tours/${tour.slug}`} className="card group block">
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.image_url}
          alt={tour.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-semibold text-primary-700 capitalize">
            {tour.category}
          </span>
        </div>
        {tour.price > 0 && (
          <div className="absolute bottom-4 right-4">
            <div className="px-3 py-1.5 bg-accent-500 rounded-lg text-white font-bold">
              €{tour.price}
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {tour.region}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
          {tour.name}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{tour.short_description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
            <span className="font-semibold">{tour.rating}</span>
            <span className="text-slate-400 text-sm">({tour.review_count})</span>
          </div>
          <span className="text-primary-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Details
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
