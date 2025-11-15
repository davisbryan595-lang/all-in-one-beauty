import { Card } from '@/components/ui/card'
import { Sparkles, Scissors, Wand2, Eye, Droplet, Zap, Heart, Radio } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Sparkles,
    title: 'Hair Services',
    description: 'Complete hair care and styling solutions.',
    features: ['Hair Styling of Any Kind', 'Japanese Hair Straightening', '100% Human Hair Weft Extensions', 'Tape-In Extensions', 'Professional Coloring'],
    color: 'bg-gold/10',
  },
  {
    icon: Scissors,
    title: 'Skin & Hair Removal',
    description: 'Professional waxing, threading, and hair removal.',
    features: ['Wax Services', 'Threading', 'Full Body Waxing', 'Facial Waxing', 'Precision Hair Removal'],
    color: 'bg-peach/10',
  },
  {
    icon: Eye,
    title: 'Lashes',
    description: 'Beautiful, voluminous lashes for any occasion.',
    features: ['Lash Extensions', 'Lash Lifting', 'Lash Tinting', 'Lash Perming', 'Natural Lash Care'],
    color: 'bg-gold/5',
  },
  {
    icon: Heart,
    title: 'Nails & Manicure',
    description: 'Premium nail care and manicure services.',
    features: ['Manicure Services', 'Pedicure Services', 'Gel Nails', 'Nail Art', 'Nail Extensions'],
    color: 'bg-peach/5',
  },
  {
    icon: Droplet,
    title: 'Facials & Treatments',
    description: 'Professional skincare and facial treatments.',
    features: ['Professional Facials', 'Lip Fillers', 'Skin Rejuvenation', 'Acne Treatment', 'Anti-Aging Facials'],
    color: 'bg-gold/10',
  },
  {
    icon: Radio,
    title: 'Body & Aesthetic',
    description: 'Advanced body contouring and rejuvenation.',
    features: ['Ultrasound Cavitation', 'Radio Frequency Therapy', 'Lipo-Laser Treatment', 'Vacuum Therapy', 'Cellulite Treatment'],
    color: 'bg-peach/10',
  },
  {
    icon: Zap,
    title: 'Advanced Treatments',
    description: 'Cutting-edge aesthetic and wellness solutions.',
    features: ['Liquid Lipo Shots', 'Fat Dissolver Injections', 'Vacuum Lymphatic Drainage', 'Body Contouring', 'Face & Body Rejuvenation'],
    color: 'bg-gold/5',
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
