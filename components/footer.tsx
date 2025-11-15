import { Facebook, Instagram, MessageCircle, Linkedin, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gold mb-4 font-display">
              All in One Beauty Studio
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Award-winning beauty destination serving thousands of happy clients worldwide. Excellence, innovation, and care in every service.
            </p>
            <p className="text-white/60 text-xs">🏆 47+ Industry Awards | ⭐ 4.98/5 Rating</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#services" className="hover:text-gold transition-colors">Hair Styling</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Natural Hair Care</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Special Occasion</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Extensions</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Color Treatment</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Bridal Package</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Reviews</a></li>
              <li><a href="#blog" className="hover:text-gold transition-colors">Blog</a></li>
              <li><a href="#press" className="hover:text-gold transition-colors">Press</a></li>
              <li><a href="#booking" className="hover:text-gold transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-gold mb-6">Hours</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <Clock size={16} className="flex-shrink-0 text-gold" />
                <span>
                  <p>Monday - Friday</p>
                  <p className="text-white/60">9:00 AM - 6:00 PM</p>
                </span>
              </li>
              <li className="flex gap-2">
                <Clock size={16} className="flex-shrink-0 text-gold" />
                <span>
                  <p>Saturday - Sunday</p>
                  <p className="text-white/60">10:00 AM - 5:00 PM</p>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex gap-3 items-start">
                <Phone size={18} className="flex-shrink-0 text-gold mt-0.5" />
                <span>
                  <p className="text-white/60 text-xs mb-1">Phone</p>
                  <a href="tel:+1555123-4567" className="hover:text-gold transition-colors">(555) 123-4567</a>
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={18} className="flex-shrink-0 text-gold mt-0.5" />
                <span>
                  <p className="text-white/60 text-xs mb-1">Email</p>
                  <a href="mailto:hello@beautyalliance.com" className="hover:text-gold transition-colors">hello@beautyalliance.com</a>
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="flex-shrink-0 text-gold mt-0.5" />
                <span>
                  <p className="text-white/60 text-xs mb-1">Location</p>
                  <a href="#" className="hover:text-gold transition-colors">123 Luxury Blvd, Suite 100, New York, NY 10001</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-white/60">
              © 2025 All in One Beauty Studio. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gold/20 hover:bg-gold hover:text-charcoal rounded-lg transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gold/20 hover:bg-gold hover:text-charcoal rounded-lg transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gold/20 hover:bg-gold hover:text-charcoal rounded-lg transition-all"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gold/20 hover:bg-gold hover:text-charcoal rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
