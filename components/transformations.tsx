'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'

const transformations = [
  {
    title: 'Silk Press Perfection',
    category: 'Hair Straightening',
    beforeImage: 'https://images.pexels.com/photos/9475715/pexels-photo-9475715.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    afterImage: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    title: 'Bold Color Transformation',
    category: 'Hair Coloring',
    beforeImage: 'https://images.pexels.com/photos/6626519/pexels-photo-6626519.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    afterImage: 'https://images.pexels.com/photos/8468036/pexels-photo-8468036.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    title: 'Luxe Weave Installation',
    category: 'Extensions',
    beforeImage: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    afterImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    title: 'Bridal Glow-Up',
    category: 'Special Occasion',
    beforeImage: 'https://images.pexels.com/photos/1542280/pexels-photo-1542280.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    afterImage: 'https://images.pexels.com/photos/11813839/pexels-photo-11813839.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    title: 'Honey Blonde Highlights',
    category: 'Coloring',
    beforeImage: 'https://images.pexels.com/photos/6626522/pexels-photo-6626522.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    afterImage: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    title: 'Natural Curl Definition',
    category: 'Natural Hair',
    beforeImage: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    afterImage: 'https://images.pexels.com/photos/9475715/pexels-photo-9475715.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
]

export default function Transformations() {
  const [sliders, setSliders] = useState<Record<number, number>>(
    Object.fromEntries(transformations.map((_, i) => [i, 50]))
  )

  const handleSlide = (index: number, value: number) => {
    setSliders((prev) => ({ ...prev, [index]: value }))
  }

  return (
    <section id="transformations" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-pink">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            Stunning Transformations
          </h2>
          <p className="text-lg text-gray-600">
            Witness the power of expert styling with our before and after gallery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((transform, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl border border-peach/20 shadow-lg">
              <div className="relative w-full h-80 overflow-hidden bg-gray-200">
                {/* After Image */}
                <img
                  src={transform.afterImage}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image Overlay */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  style={{
                    width: `${sliders[index] || 50}%`,
                  }}
                >
                  <img
                    src={transform.beforeImage}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      width: `${(100 / (sliders[index] || 50)) * 100}%`,
                    }}
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-gold cursor-col-resize"
                  style={{
                    left: `${sliders[index] || 50}%`,
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold rounded-full p-3 shadow-lg">
                    <div className="flex gap-1">
                      <div className="w-0.5 h-4 bg-charcoal" />
                      <div className="w-0.5 h-4 bg-charcoal" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-charcoal/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                  After
                </div>

                {/* Slider Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliders[index] || 50}
                  onChange={(e) => handleSlide(index, parseFloat(e.target.value))}
                  className="absolute inset-0 w-full h-full cursor-col-resize opacity-0"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">{transform.title}</h3>
                <p className="text-gold font-semibold">{transform.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
