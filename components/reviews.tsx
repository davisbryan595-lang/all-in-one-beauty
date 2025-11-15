'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Tasha J.',
    text: 'She gave me the BEST silk press of my life! The results are absolutely gorgeous and my hair feels so healthy. 10/10 would recommend!',
    rating: 5,
  },
  {
    name: 'Maya L.',
    text: 'Professional, talented, and so welcoming. I got the most beautiful braids done and they lasted forever. Already booked my next appointment!',
    rating: 5,
  },
  {
    name: 'Zara M.',
    text: 'The color treatment was flawless. She understood exactly what I wanted and executed it perfectly. Love my new look!',
    rating: 5,
  },
  {
    name: 'Amara K.',
    text: 'Best decision ever. The natural hair care routine she recommended has transformed my curls. Highly skilled and genuinely cares about her clients.',
    rating: 5,
  },
  {
    name: 'Simone R.',
    text: 'My bridal look was absolutely stunning. She made me feel beautiful and confident on my special day. Thank you!',
    rating: 5,
  },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-pink">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            Client Love
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our happy clients
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <Card className="p-12 border border-gold/30 bg-white rounded-2xl min-h-80 flex flex-col justify-center">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-2xl text-charcoal mb-6 italic leading-relaxed">
              "{testimonials[current].text}"
            </p>
            <p className="text-xl font-bold text-gold">{testimonials[current].name}</p>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="cta-button absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 p-3 rounded-full bg-gold hover:bg-gold/90 text-charcoal transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="cta-button absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 p-3 rounded-full bg-gold hover:bg-gold/90 text-charcoal transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? 'bg-gold w-8'
                    : 'bg-gold/30 w-2 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
