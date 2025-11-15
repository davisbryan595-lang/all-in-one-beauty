import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const pricingTiers = [
  {
    title: 'Hair Services',
    icon: '✨',
    items: [
      { name: 'Silk Press', price: '$85' },
      { name: 'Braids (Starting)', price: '$150' },
      { name: 'Full Weave Install', price: '$250' },
      { name: 'Color Treatment', price: '$60+' },
    ],
  },
  {
    title: 'Premium Packages',
    icon: '👑',
    items: [
      { name: 'Bridal Glow-Up', price: '$450' },
      { name: 'Transformation Session', price: '$350' },
      { name: 'Monthly Maintenance', price: '$280/mo' },
      { name: 'VIP Booking', price: 'Contact' },
    ],
    featured: true,
  },
  {
    title: 'Add-On Services',
    icon: '💎',
    items: [
      { name: 'Deep Conditioning', price: '$25' },
      { name: 'Scalp Treatment', price: '$35' },
      { name: 'Protective Styling', price: '+$50' },
      { name: 'Same-Day Rush Fee', price: '+$40' },
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

        <div className="grid md:grid-cols-3 gap-8">
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
                className={`cta-button w-full py-6 font-semibold rounded-lg transition-all ${
                  tier.featured
                    ? 'bg-gold hover:bg-gold/90 text-charcoal'
                    : 'bg-peach hover:bg-peach/90 text-charcoal'
                }`}
              >
                Book This Service
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
