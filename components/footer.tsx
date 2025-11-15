import { Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">
              All in One Beauty Studio
            </h3>
            <p className="text-white text-sm">
              Professional styling, stunning results, and premium care for your hair transformation journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Pricing</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#booking" className="hover:text-gold transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>📱 (555) 123-4567</li>
              <li>📧 hello@beautyalliance.com</li>
              <li className="pt-2 text-xs">Available for bookings daily 9AM-6PM</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 bg-gold/20 hover:bg-gold hover:text-charcoal rounded-lg transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gold/20 hover:bg-gold hover:text-charcoal rounded-lg transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gold/20 hover:bg-gold hover:text-charcoal rounded-lg transition-all"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
            <p>© 2025 All in One Beauty Studio. Proudly serving our community.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
