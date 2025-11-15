import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const pricingTiers = [
  {
    title: 'Hair & Styling',
    icon: '💆',
    items: [
      { name: 'Hair Styling', price: '$75+' },
      { name: 'Weft Extensions Install', price: '$250+' },
      { name: 'Tape-In Extensions', price: '$200+' },
      { name: 'Japanese Hair Straightening', price: '$300+' },
      { name: 'Professional Coloring', price: '$100+' },
    ],
  },
  {
    title: 'Beauty Services',
    icon: '✨',
    items: [
      { name: 'Wax Services', price: '$30+' },
      { name: 'Threading', price: '$15+' },
      { name: 'Lash Services', price: '$80+' },
      { name: 'Manicure & Pedicure', price: '$50+' },
      { name: 'Professional Facials', price: '$120+' },
    ],
    featured: true,
  },
  {
    title: 'Advanced Aesthetic',
    icon: '🔮',
    items: [
      { name: 'Lip Fillers', price: '$400+' },
      { name: 'Liquid Lipo Shots', price: '$350+' },
      { name: 'Ultrasound Cavitation', price: '$200+' },
      { name: 'Radio Frequency Therapy', price: '$250+' },
      { name: 'Lipo-Laser Treatment', price: '$300+' },
    ],
  },
  {
    title: 'Body Treatments',
    icon: '💎',
    items: [
      { name: 'Vacuum Therapy', price: '$180+' },
      { name: 'Vacuum Lymphatic Drainage', price: '$150+' },
      { name: 'Cellulite Treatment', price: '$200+' },
      { name: 'Body Contouring', price: 'Contact' },
      { name: 'Custom Packages', price: 'Contact' },
    ],
  },
]

export default function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-pink">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Invest in your beauty with our affordable, premium services
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                tier.featured
                  ? 'border-gold bg-gold/5 shadow-xl scale-105'
                  : 'border-peach bg-white hover:shadow-lg'
              }`}
            >
              <div className="text-4xl mb-3">{tier.icon}</div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">{tier.title}</h3>

              <div className="space-y-4 mb-8">
                {tier.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{item.name}</span>
                    <span className="text-gold font-bold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => scrollToSection('booking')}
                className={`w-full py-6 rounded-lg ${
                  tier.featured
                    ? 'btn-gradient-premium'
                    : 'btn-gradient-gold'
                }`}
              >
                Book Service
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
