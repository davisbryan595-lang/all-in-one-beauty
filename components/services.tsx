import { Card } from '@/components/ui/card'
import { Sparkles, Leaf, Heart, Zap, Crown, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Sparkles,
    title: 'Hair Styling',
    description: 'Expert styling for every occasion with premium results.',
    features: ['Silk Press & Straightening', 'Protective Braids', 'Custom Weaves', 'Blowouts & Waves', 'Styling & Curling'],
    color: 'bg-gold/10',
  },
  {
    icon: Leaf,
    title: 'Natural Hair Care',
    description: 'Specialized treatment for healthy, beautiful natural hair.',
    features: ['Natural Hair Treatments', 'Protective Styling', 'Loc Maintenance', 'Curl Definition', 'Deep Conditioning'],
    color: 'bg-peach/10',
  },
  {
    icon: Palette,
    title: 'Color Services',
    description: 'Professional coloring that brings out your best self.',
    features: ['Full Color & Highlights', 'Balayage & Ombre', 'Color Correction', 'Toning & Gloss', 'Trending Colors'],
    color: 'bg-gold/5',
  },
  {
    icon: Crown,
    title: 'Extensions',
    description: 'Premium hair extensions for length, volume, and style.',
    features: ['Hand-Tied Extensions', 'Tape-In Extensions', 'Sew-In Weaves', 'Clip-In Extensions', 'Extension Care'],
    color: 'bg-peach/5',
  },
  {
    icon: Heart,
    title: 'Bridal & Events',
    description: 'Make your special day unforgettable with stunning styling.',
    features: ['Bridal Hair Design', 'Bridesmaids Styling', 'Photoshoot Styling', 'Event Preparation', 'Makeup Coordination'],
    color: 'bg-gold/10',
  },
  {
    icon: Zap,
    title: 'Add-On Services',
    description: 'Enhance your service with premium treatments.',
    features: ['Scalp Treatment', 'Deep Conditioning', 'Protein Treatment', 'Keratin Treatment', 'Hair Strengthening'],
    color: 'bg-peach/10',
  },
]

export default function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-pink">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            Our Expert Services
          </h2>
          <p className="text-lg text-gray-600">
            World-class beauty solutions tailored to your unique needs and style
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`p-8 rounded-2xl ${service.color} border border-border hover:shadow-2xl transition-all duration-300 group overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="inline-block p-3 bg-gold/20 rounded-lg group-hover:scale-110 transition-transform group-hover:bg-gold/30">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features List */}
                  <div className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => scrollToSection('pricing')}
                    className="cta-button w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold px-4 py-2"
                  >
                    See Pricing →
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl p-12 text-center border border-peach/20">
          <h3 className="text-2xl font-bold text-charcoal mb-4">
            Didn't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-6">
            We offer custom services and packages. Contact us for personalized consultations.
          </p>
          <Button
            onClick={() => scrollToSection('booking')}
            className="cta-button bg-peach hover:bg-peach/90 text-charcoal font-semibold px-8 py-6"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
