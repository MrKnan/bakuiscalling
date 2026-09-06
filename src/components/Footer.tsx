import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/img/apple-touch-icon.png"
                alt="Baku is Calling"
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <span className="text-xl font-display font-bold">Baku is Calling</span>
                <p className="text-sm text-slate-400">Discover Azerbaijan</p>
              </div>
            </Link>
            <p className="text-slate-400 mb-6">
              Your trusted partner for unforgettable journeys through Azerbaijan.
              From the historic streets of Baku to the peaks of the Caucasus Mountains.
            </p>
            <div className="flex gap-4">
            <a
  href="https://www.facebook.com/Bakuiscalling/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white"
>
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M22 12.06C22 6.53 17.52 2.04 12 2.04S2 6.53 2 12.06c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.89h-2.34v6.99C18.34 21.19 22 17.06 22 12.06z" />
  </svg>
  <span className="sr-only">Facebook</span>
</a>
<a
  href="https://www.instagram.com/bakuiscalling/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white"
>
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
  </svg>
  <span className="sr-only">Instagram</span>
</a>
<a
  href="https://www.linkedin.com/company/108197788/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white"
>
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.84-3.03-1.85 0-2.13 1.44-2.13 2.94v5.66H9.38V9h3.41v1.56h.05c.48-.9 1.63-1.84 3.36-1.84 3.59 0 4.25 2.36 4.25 5.44v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
  <span className="sr-only">LinkedIn</span>
</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'All Tours', path: '/tours' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Popular Tours</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/tours/baku-old-city" className="hover:text-accent-400 transition-colors">Baku Old City Walk</Link></li>
              <li><Link to="/tours/gobustan-mud-volcanoes" className="hover:text-accent-400 transition-colors">Gobustan & Mud Volcanoes</Link></li>
              <li><Link to="/tours/sheki-cultural" className="hover:text-accent-400 transition-colors">Sheki Cultural Journey</Link></li>
              <li><Link to="/tours/gabala-mountain" className="hover:text-accent-400 transition-colors">Gabala Mountain Escape</Link></li>
              <li><Link to="/tours/mountain-hiking" className="hover:text-accent-400 transition-colors">Mountain Hiking</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">Baku, Azerbaijan</span>
              </li>
              <li>
                <a
                  href="mailto:orders@bakuiscalling.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-accent-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  orders@bakuiscalling.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/994517838333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-accent-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  +994 51 783 8333
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            {currentYear} Baku is Calling. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-400 hover:text-accent-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-accent-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
