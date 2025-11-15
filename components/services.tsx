import { Card } from '@/components/ui/card'
import { Sparkles, Leaf, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Sparkles,
    title: 'Hair Styling',
    description: 'Braids, weaves, silk press, professional coloring, and custom styling for any occasion.',
    color: 'bg-gold/10',
  },
  {
    icon: Leaf,
    title: 'Natural Hair Care',
    description: 'Specializing in natural hair treatments, expert trims, loc maintenance, and moisture therapy.',
    color: 'bg-peach/10',
  },
  {
    icon: Heart,
    title: 'Special Occasion',
    description: 'Bridal glamour, photoshoot styling, event preparation, and bespoke transformations.',
    color: 'bg-gold/5',
  },
]

export default function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Professional beauty solutions tailored to your unique style
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`p-8 rounded-2xl ${service.color} border border-border hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="mb-4">
                  <div className="inline-block p-3 bg-gold/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Button
                  onClick={() => scrollToSection('pricing')}
                  variant="ghost"
                  className="text-gold hover:text-gold/80 font-semibold"
                >
                  See Pricing →
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
