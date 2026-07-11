import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Clock, MapPin, Star, Users, Calendar, Check, X,
  ChevronLeft, ChevronRight, Phone, ArrowLeft
} from 'lucide-react'
import { tours } from '@/lib/data'

export default function TourDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    message: ''
  })

  const tour = tours.find(t => t.slug === slug)

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Tour Not Found</h1>
          <p className="text-slate-600 mb-6">The tour you're looking for doesn't exist.</p>
          <Link to="/tours" className="btn-primary">
            Browse All Tours
          </Link>
        </div>
      </div>
    )
  }

  const relatedTours = tours
    .filter(t => t.category === tour.category && t.id !== tour.id)
    .slice(0, 3)

  const gallery = tour.gallery && tour.gallery.length > 0 ? tour.gallery : [tour.image_url]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `New booking inquiry for "${tour.name}"

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Date: ${formData.date}
Number of Guests: ${formData.guests}
Message: ${formData.message}`

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/994517838333?text=${encoded}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Gallery */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={gallery[currentImageIndex]}
            alt={tour.name}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30" />
        </div>

        <div className="absolute top-4 left-4 z-20">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-slate-700 hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        {gallery.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-3 mb-4"
            >
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-semibold text-primary-700 capitalize">
                {tour.category}
              </span>
              <span className="px-3 py-1 bg-primary-600/90 backdrop-blur-sm rounded-lg text-sm font-semibold text-white">
                {tour.difficulty}
              </span>
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              {tour.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {tour.duration}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {tour.region}
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
                {tour.rating} ({tour.review_count} reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                  About This Tour
                </h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {tour.description}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">
                  Tour Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent-600" />
                      </div>
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Included
                    </h3>
                    <ul className="space-y-3">
                      {tour.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <span className="text-green-500 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                      <X className="w-5 h-5" />
                      Not Included
                    </h3>
                    <ul className="space-y-3">
                      {tour.not_included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <span className="text-red-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-28 space-y-6"
              >
                {/* Price Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-baseline gap-2 mb-6">
                    {tour.price > 0 ? (
                      <>
                        <span className="text-4xl font-bold text-slate-900">€{tour.price}</span>
                        <span className="text-slate-500">per person</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-primary-600">Contact for Price</span>
                    )}
                  </div>
                  <button
                    onClick={() => setShowBookingForm(true)}
                    className="btn-primary w-full justify-center mb-3"
                  >
                    <Calendar className="w-5 h-5" />
                    Book This Tour
                  </button>
                  <a
                    href={`https://wa.me/994517838333?text=${encodeURIComponent(`Hi! I'm interested in the "${tour.name}" tour. Could you provide more information?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary bg-green-600 text-white border-green-600 hover:bg-green-700 w-full justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    WhatsApp Enquiry
                  </a>
                </div>

                {/* Quick Info */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Duration</div>
                        <div className="font-medium text-slate-900">{tour.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Region</div>
                        <div className="font-medium text-slate-900">{tour.region}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Difficulty</div>
                        <div className="font-medium text-slate-900 capitalize">{tour.difficulty}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="py-16 bg-slate-50 border-t">
          <div className="container-custom">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">
              Similar Tours You May Like
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedTours.map((relatedTour) => (
                <Link
                  key={relatedTour.id}
                  to={`/tours/${relatedTour.slug}`}
                  className="card group block"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedTour.image_url}
                      alt={relatedTour.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {relatedTour.name}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>{relatedTour.duration}</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
                        {relatedTour.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setShowBookingForm(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">Book This Tour</h3>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-slate-600 mt-1">{tour.name}</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Number of Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Additional Message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                  placeholder="Any special requests or questions..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary justify-center"
                >
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
