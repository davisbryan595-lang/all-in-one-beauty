import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const features = [
  {
    publication: 'Vogue Beauty',
    title: 'The Future of Beauty: Meet the Stylists Changing the Industry',
    date: 'January 2025',
    image: 'https://images.unsplash.com/photo-1516981143236-7cbab60d87f2?w=400&h=250&fit=crop',
  },
  {
    publication: 'Harper\'s Bazaar',
    title: 'Award-Winning Beauty Studio Celebrates 12,000+ Happy Clients',
    date: 'December 2024',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=250&fit=crop',
  },
  {
    publication: 'Elle Magazine',
    title: 'Transformative Beauty: Why Clients Travel Worldwide for These Services',
    date: 'November 2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
  },
  {
    publication: 'Forbes Wellness',
    title: 'Building a Beauty Empire: The Success Story of All in One Studio',
    date: 'November 2024',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=250&fit=crop',
  },
  {
    publication: 'GQ Style',
    title: 'The Best Hair Transformation Specialists in the World',
    date: 'October 2024',
    image: 'https://images.unsplash.com/photo-1560066169-b279ca0d4ff3?w=400&h=250&fit=crop',
  },
  {
    publication: 'Glamour',
    title: 'Industry Leaders: Inside the Studio Changing Beauty Standards',
    date: 'October 2024',
    image: 'https://images.unsplash.com/photo-1516981143236-7cbab60d87f2?w=400&h=250&fit=crop',
  },
]

const awards = [
  { year: '2024', title: 'Best Beauty Studio - Global Awards' },
  { year: '2024', title: 'Top 10 Hair Stylists Worldwide' },
  { year: '2023', title: 'Innovation in Beauty Services' },
  { year: '2023', title: 'Client Choice Award' },
  { year: '2022', title: 'Best Hair Transformation Expert' },
  { year: '2022', title: 'Excellence in Customer Service' },
]

export default function Press() {
  return (
    <section id="press" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-pink">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            Press & Recognition
          </h2>
          <p className="text-lg text-gray-600">
            Featured in leading publications and awarded for excellence
          </p>
        </div>

        {/* Featured Press */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-charcoal mb-8">Featured In</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden border border-peach/20 hover:shadow-lg transition-all duration-300 group">
                <div className="h-40 overflow-hidden bg-gray-200">
                  <img
                    src={feature.image}
                    alt={feature.publication}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gold font-semibold text-sm mb-2">{feature.publication}</p>
                  <h4 className="text-lg font-bold text-charcoal mb-3">{feature.title}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">{feature.date}</p>
                    <ExternalLink size={16} className="text-gold hover:text-gold/80 cursor-pointer" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="bg-white rounded-2xl p-12 border border-peach/20">
          <h3 className="text-2xl font-bold text-charcoal mb-8">Awards & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gold/20">
                    <span className="text-gold font-bold text-lg">{award.year}</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{award.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 to-peach/10 rounded-2xl p-8 text-center border border-gold/20">
          <h3 className="text-2xl font-bold text-charcoal mb-3">For Press Inquiries</h3>
          <p className="text-gray-600 mb-6">Contact our media team for interviews, features, and partnership opportunities.</p>
          <Button className="cta-button bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8 py-6">
            press@beautyalliance.com
          </Button>
        </div>
      </div>
    </section>
  )
}
