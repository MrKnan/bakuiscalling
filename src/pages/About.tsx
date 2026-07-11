import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Users, Heart, Shield, Globe,
  Star, Phone, ArrowRight, Check
} from 'lucide-react'
import { stats } from '@/lib/data'

export default function About() {
  const team = [
    {
      name: 'Kanan',
      role: 'Founder & CEO',
      image: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/upstream_13.png?auto=compress&cs=tinysrgb&w=400',
      bio: 'Passionate about sharing Azerbaijani culture with the world.'
    },
    {
      name: 'Raul',
      role: 'Head of Operations',
      image: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/upstream_16.png?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ensuring every tour runs smoothly and exceeds expectations.'
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'Every detail matters. We pour our hearts into creating perfect experiences for our guests.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Licensed and insured with the highest safety standards for worry-free travel.'
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Our team of local guides brings authentic knowledge and insider access to hidden gems.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Committed to responsible tourism that preserves Azerbaijani heritage and nature.'
    }
  ]

  const milestones = [
    { year: '2015', title: 'Founded', description: 'Baku is Calling was established with a vision to showcase Azerbaijan.' },
    { year: '2017', title: 'First Award', description: 'Recognized as Best Local Tour Operator by Tourism Excellence Awards.' },
    { year: '2019', title: '10,000 Guests', description: 'Welcomed our 10,000th satisfied traveler from around the world.' },
    { year: '2022', title: 'Expanded Services', description: 'Added mountain expeditions and cultural immersion experiences.' },
    { year: '2024', title: 'Certified Excellence', description: 'Achieved international tourism quality certification.' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10" />
          <img
            src="src/img/Blog/bulvar.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Baku skyline"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 bg-accent-500 text-white text-sm font-semibold rounded-full mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Your Trusted Partner for{' '}
              <span className="text-gradient">Azerbaijan Adventures</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-xl">
              We're passionate about sharing the wonders of Azerbaijan with travelers from around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-600 py-12 relative z-30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-600 font-semibold mb-2 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                From a Vision to Reality
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Baku is Calling was born from a simple belief: that Azerbaijan deserves to be discovered.
                  Founded in 2015 by a group of passionate travelers, we set out to create authentic,
                  memorable experiences that go beyond typical tourism.
                </p>
                <p>
                  What started as a small team guiding visitors through Old Baku has grown into a
                  full-service tour operator offering everything from city walks to mountain expeditions.
                  Our commitment to quality, safety, and authentic experiences has earned us recognition
                  as one of Azerbaijan's premier tour operators.
                </p>
                <p>
                  Today, we're proud to have welcomed over 10,000 guests from 50+ countries, each one
                  leaving with memories that last a lifetime. Our team of expert guides, drivers, and
                  support staff work together to ensure every journey is seamless and unforgettable.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184413/pexels-photo-3184413.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our team"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-400/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-primary-400/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-600 font-semibold mb-2 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Growing Stronger Every Year
            </h2>
            <p className="text-slate-600">
              From humble beginnings to becoming Azerbaijan's trusted tour operator.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-20">
                  <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-slate-200 pl-6 relative">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-600" />
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-400 font-semibold mb-2 block">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-primary-200">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-primary-200">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-600 font-semibold mb-2 block">Meet the Team</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Passionate About What We Do
            </h2>
            <p className="text-slate-600">
              Our dedicated team of travel enthusiasts and local experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-3">{member.role}</div>
                <p className="text-slate-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-600 font-semibold mb-2 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                The Baku is Calling Difference
              </h2>

              <div className="space-y-6">
                {[
                  'Licensed and insured tour operator with international certification',
                  'Expert local guides with deep cultural knowledge',
                  'Flexible itineraries tailored to your preferences',
                  '24/7 support throughout your journey',
                  'Competitive pricing with no hidden fees',
                  'Sustainable tourism practices'
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2977515/pexels-photo-2977515.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Azerbaijan landscape"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              Browse our tours or contact us to create a custom itinerary just for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/tours" className="btn-accent bg-white text-primary-800 hover:bg-slate-100">
                Explore Our Tours
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/994517838333"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-transparent border-white text-white hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
