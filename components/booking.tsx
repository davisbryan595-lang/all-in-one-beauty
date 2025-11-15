'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AlertCircle, CheckCircle } from 'lucide-react'

const services = [
  'Hair Styling',
  'Japanese Hair Straightening',
  'Weft Extensions & Tape-In Extensions',
  'Hair Coloring',
  'Wax Services',
  'Threading',
  'Lash Services',
  'Manicure & Pedicure',
  'Professional Facials',
  'Lip Fillers',
  'Ultrasound Cavitation',
  'Radio Frequency Therapy',
  'Lipo-Laser Treatment',
  'Liquid Lipo Shots',
  'Fat Dissolver Injections',
  'Vacuum Therapy',
  'Vacuum Lymphatic Drainage',
  'Cellulite Treatment',
]

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-pink">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            BOOK YOUR APPOINTMENT
          </h2>
          <p className="text-lg text-gray-600">
            Schedule your service and experience world-class beauty and aesthetic treatments
          </p>
        </div>

        <Card className="p-8 md:p-12 border border-gold/30 bg-white rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="your@email.com"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Additional Notes
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="Tell us about your hair goals or any special requests..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={submitted}
              className="w-full font-semibold text-base py-6 rounded-lg transition-all disabled:opacity-50 btn-gradient-premium"
            >
              {submitted ? 'Booking Confirmed!' : 'Confirm My Booking'}
            </Button>

            {/* Success Message */}
            {submitted && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="text-green-600" size={20} />
                <div>
                  <p className="font-semibold text-green-900">Booking Confirmed!</p>
                  <p className="text-sm text-green-700">We'll text you to confirm. Text for same-day appts!</p>
                </div>
              </div>
            )}
          </form>
        </Card>
      </div>
    </section>
  )
}
