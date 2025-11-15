import { Sparkles, TrendingUp, Award, Globe } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Sparkles,
      number: '12K+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
    },
    {
      icon: TrendingUp,
      number: '4.98',
      label: 'Average Rating',
      description: 'Out of 5 stars across all platforms',
    },
    {
      icon: Award,
      number: '47',
      label: 'Industry Awards',
      description: 'Recognized for excellence',
    },
    {
      icon: Globe,
      number: '18',
      label: 'Countries Served',
      description: 'Global client base',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-charcoal to-charcoal/95">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-white/80">
            Trusted by thousands of clients worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="mb-4 inline-block p-4 bg-gold/20 rounded-xl group-hover:bg-gold/30 transition-colors">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <p className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                  {stat.number}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-white/70">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
