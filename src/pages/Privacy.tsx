import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-900 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Privacy Policy
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
                  Baku is Calling ("we," "us," or "our") is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our tour services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Information We Collect</h2>
                <p>We may collect information about you in a variety of ways:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide when making enquiries or bookings.</li>
                  <li><strong>Booking Information:</strong> Tour preferences, travel dates, number of guests, and any special requirements.</li>
                  <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and other diagnostic data.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Use of Your Information</h2>
                <p>Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Process and manage your tour bookings</li>
                  <li>Send you confirmation and travel-related communications</li>
                  <li>Respond to your enquiries and provide customer support</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Improve our website and services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Disclosure of Your Information</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to outside parties
                  except to trusted third parties who assist us in operating our website, conducting our
                  business, or servicing you, so long as those parties agree to keep this information
                  confidential.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your
                  personal information. However, no method of transmission over the Internet or electronic
                  storage is 100% secure, and while we strive to use commercially acceptable means to protect
                  your personal data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
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
