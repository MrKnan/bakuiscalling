import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Phone, MapPin, Users, Star, ChevronRight,
  Shield, Clock, Heart, Award, ArrowRight
} from 'lucide-react'
import { tours, testimonials, stats } from '@/lib/data'

export default function Home() {
  const featuredTours = tours.filter(t => t.featured).slice(0, 6)

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Tours */}
      <FeaturedToursSection tours={featuredTours} />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* About Preview */}
      <AboutPreviewSection />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
        <img
          src="src/img/Blog/bulvar.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Azerbaijan landscape"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-2 bg-accent-500 text-white text-sm font-semibold rounded-full mb-6">
            #1 Rated Tour Operator in Azerbaijan
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Discover the Magic of{' '}
            <span className="text-gradient">Azerbaijan</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-xl">
            From the ancient streets of Baku to the peaks of the Caucasus Mountains,
            experience unforgettable journeys tailored just for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/tours" className="btn-primary">
              Explore Tours
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/994517838333"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              Book Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="bg-primary-600 py-12 -mt-1 relative z-30">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-primary-100 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedToursSection({ tours }: { tours: typeof import('@/lib/data').tours }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-accent-600 font-semibold mb-2 block">Explore with Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Featured Tours
            </h2>
          </div>
          <Link
            to="/tours"
            className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All Tours
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TourCard({ tour }: { tour: typeof import('@/lib/data').tours[0] }) {
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

function WhyChooseUsSection() {
  const features = [
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description: 'Licensed tour operator with years of experience and thousands of satisfied travelers.'
    },
    {
      icon: Users,
      title: 'Expert Local Guides',
      description: 'Knowledgeable guides who bring Azerbaijani history and culture to life.'
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'Custom itineraries tailored to your interests, pace, and preferences.'
    },
    {
      icon: Award,
      title: 'Best Value',
      description: 'Competitive pricing with no hidden fees. Quality experiences guaranteed.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-600 font-semibold mb-2 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Your Journey, Our Priority
          </h2>
          <p className="text-slate-600">
            We're dedicated to creating unforgettable experiences with local expertise and personalized attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-primary-50 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutPreviewSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="src/img/Blog/Carpet.jpg"
                alt="Azerbaijan culture"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent-400/20 rounded-2xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary-400/20 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-600 font-semibold mb-2 block">About Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Your Gateway to Azerbaijan's Wonders
            </h2>
            <p className="text-slate-600 mb-6 text-lg">
              Baku is Calling is your trusted partner for exploring the rich tapestry of
              Azerbaijani culture, history, and natural beauty. From the UNESCO World Heritage
              sites of Old Baku to the pristine peaks of the Caucasus Mountains.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'All-inclusive packages with accommodation, transportation, and guides',
                'Custom itineraries tailored to your interests and schedule',
                'Professional service with years of experience',
                'Competitive pricing with no hidden costs'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ChevronRight className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection({ testimonials }: { testimonials: typeof import('@/lib/data').testimonials }) {
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-400 font-semibold mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-primary-200">
            Don't just take our word for it. Here's what travelers from around the world
            experienced with Baku is Calling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'fill-accent-400 text-accent-400' : 'text-slate-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-primary-100 mb-6 text-lg italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center">
                  <span className="text-xl font-bold text-accent-400">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-primary-300">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Explore Azerbaijan?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Let us craft your perfect journey. Contact us today and start planning
            an unforgettable adventure through the Land of Fire.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/994517838333"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent bg-white text-primary-800 hover:bg-slate-100"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Us Now
            </a>
            <Link to="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
              Send an Enquiry
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
