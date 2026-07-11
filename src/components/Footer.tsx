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
                f
              </a>
              <a
                href="https://www.instagram.com/bakuiscalling/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white"
              >
                in
              </a>
              <a
                href="https://www.linkedin.com/company/bakuiscalling/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white"
              >
                Li
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
