'use client'

import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 bg-light-pink"
    >
      {/* Animated background sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-peach/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6 z-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gold">
              <Sparkles size={20} />
              <span className="text-sm font-semibold tracking-widest">PROFESSIONAL STYLING</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal leading-tight text-balance">
              ALL IN ONE BEAUTY STUDIO
            </h1>
            <p className="text-xl text-peach font-display italic">
              Where Every Look Tells a Story
            </p>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed text-balance">
            Professional styling • Stunning results • Book today and transform your beauty journey with expert care and premium services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={() => scrollToSection('gallery')}
              className="cta-button bg-gold hover:bg-gold/90 text-charcoal font-semibold text-base px-8 py-6"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('booking')}
              className="cta-button bg-peach hover:bg-peach/90 text-charcoal font-semibold text-base px-8 py-6"
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitube_TjA8qluXg5_2025_11_15_05_23_06-nD9kSqpGvgzLMR98dZQaVFr6vI2a9b.jpg"
            alt="Transformation showcase"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}
