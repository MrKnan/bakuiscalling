import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-900 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-primary-200">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <div className="space-y-8 text-slate-600">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Introduction</h2>
                <p>
                  Welcome to Baku is Calling. By accessing or using our website and services, you agree
                  to be bound by these Terms of Service. If you do not agree to these terms, please do
                  not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Services</h2>
                <p>
                  Baku is Calling provides tour services and travel experiences in Azerbaijan. Our services
                  include guided tours, transportation, accommodation arrangements, and custom itinerary
                  planning. All tours are subject to availability and may be modified or cancelled due to
                  weather, safety concerns, or other circumstances beyond our control.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Bookings and Payments</h2>
                <ul className="list-disc pl-6 my-2 space-y-2">
                  <li>All bookings require a deposit or full payment as specified at the time of booking.</li>
                  <li>Prices are quoted in Euro (EUR) or Azerbaijani Manat (AZN) unless otherwise indicated.</li>
                  <li>Payment methods include bank transfer, credit card, or cash (for last-minute bookings).</li>
                  <li>A confirmation will be sent upon receipt of payment.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Cancellation Policy</h2>
                <ul className="list-disc pl-6 my-2 space-y-2">
                  <li><strong>More than 48 hours before tour:</strong> Full refund available.</li>
                  <li><strong>24-48 hours before tour:</strong> 50% refund or rescheduling option.</li>
                  <li><strong>Less than 24 hours:</strong> No refund available.</li>
                  <li><strong>Weather-related cancellations:</strong> Full refund or rescheduling offered.</li>
                </ul>
                <p className="mt-2">
                  For multi-day tours and custom packages, specific cancellation terms will be outlined
                  in your booking confirmation.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Health and Safety</h2>
                <p>
                  Participants must inform us of any medical conditions, disabilities, or dietary requirements
                  that may affect their ability to participate in tours. We reserve the right to refuse
                  participation if we believe it would pose a safety risk.
                </p>
                <p className="mt-2">
                  Travel insurance is strongly recommended for all tours, especially for adventure activities
                  and multi-day trips.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Liability</h2>
                <p>
                  Baku is Calling acts as an agent for various service providers and is not liable for
                  accidents, delays, or injuries that may occur during tours. Participants are responsible
                  for their own safety and belongings. We maintain appropriate liability insurance for
                  our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Intellectual Property</h2>
                <p>
                  All content on this website, including text, images, logos, and design elements, is the
                  property of Baku is Calling and protected by copyright laws. You may not reproduce,
                  distribute, or use our content without written permission.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">User Conduct</h2>
                <p>When using our website and services, you agree not to:</p>
                <ul className="list-disc pl-6 my-2 space-y-2">
                  <li>Provide false or misleading information</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with other users' experience</li>
                  <li>Engage in any illegal or fraudulent activity</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Modifications</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will be
                  effective immediately upon posting on our website. Continued use of our services
                  constitutes acceptance of these changes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws
                  of the Republic of Azerbaijan. Any disputes shall be resolved in the courts of Baku, Azerbaijan.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Contact</h2>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                  <p className="font-semibold">Baku is Calling</p>
                  <p>Email: orders@bakuiscalling.com</p>
                  <p>Phone: +994 51 783 8333</p>
                  <p>Location: Baku, Azerbaijan</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
