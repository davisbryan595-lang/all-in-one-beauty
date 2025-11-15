'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-charcoal via-charcoal to-charcoal/95">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-block p-3 bg-gold/20 rounded-lg mb-6">
          <Mail className="w-8 h-8 text-gold" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Get Beauty Tips & Exclusive Offers
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Subscribe to our newsletter for expert styling advice, special promotions, and first access to new services.
        </p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-3 rounded-lg bg-white/90 text-charcoal placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <Button
            type="submit"
            className="cta-button bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8 py-3 rounded-lg whitespace-nowrap"
          >
            Subscribe
          </Button>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <div className="flex items-center justify-center gap-2 text-gold font-semibold animate-pulse">
            <Check size={20} />
            Thanks for subscribing! Check your email soon.
          </div>
        )}

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: '💎', title: 'Exclusive Deals', desc: 'Member-only discounts up to 30% off' },
            { icon: '📱', title: 'Expert Tips', desc: 'Weekly beauty and hair care advice' },
            { icon: '⭐', title: 'Early Access', desc: 'First to know about new services' },
          ].map((benefit, i) => (
            <div key={i} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <p className="text-3xl mb-2">{benefit.icon}</p>
              <h4 className="text-white font-bold mb-2">{benefit.title}</h4>
              <p className="text-white/70 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
