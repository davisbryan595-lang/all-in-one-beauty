import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, User, ArrowRight } from 'lucide-react'

const articles = [
  {
    title: '10 Essential Hair Care Tips for Healthy, Gorgeous Hair',
    excerpt: 'Learn the professional secrets to maintaining beautiful hair at home. From deep conditioning to protective styling.',
    category: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1560066169-b279ca0d4ff3?w=500&h=300&fit=crop',
    author: 'Jasmine Williams',
    date: 'January 2025',
    readTime: '5 min read',
  },
  {
    title: 'Natural Hair Journey: Transitioning & Maintenance Guide',
    excerpt: 'Everything you need to know about transitioning to natural hair and keeping your curls healthy and vibrant.',
    category: 'Natural Hair',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=300&fit=crop',
    author: 'Amara Johnson',
    date: 'January 2025',
    readTime: '7 min read',
  },
  {
    title: 'The Ultimate Guide to Hair Colors That Complement Your Skin Tone',
    excerpt: 'Discover which hair colors work best with your complexion. Professional color matching tips from our master colorist.',
    category: 'Coloring',
    image: 'https://images.unsplash.com/photo-1516981143236-7cbab60d87f2?w=500&h=300&fit=crop',
    author: 'Zara Chen',
    date: 'December 2024',
    readTime: '6 min read',
  },
  {
    title: 'Bridal Hair: Planning Your Wedding Day Look',
    excerpt: 'Pro tips for planning the perfect bridal hairstyle. Timeline, consultation, and maintenance advice for your big day.',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
    author: 'Maria Rodriguez',
    date: 'December 2024',
    readTime: '5 min read',
  },
  {
    title: 'Protective Styling 101: Keep Your Hair Healthy',
    excerpt: 'Master the art of protective styling to strengthen your hair and reduce breakage. Expert techniques explained.',
    category: 'Styling Tips',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=300&fit=crop',
    author: 'Jasmine Williams',
    date: 'December 2024',
    readTime: '6 min read',
  },
  {
    title: 'Hair Extension Care: Making Them Last Longer',
    excerpt: 'Complete guide to caring for your extensions. Washing, styling, and storage tips to maximize their lifespan.',
    category: 'Extensions',
    image: 'https://images.unsplash.com/photo-1560066169-b279ca0d4ff3?w=500&h=300&fit=crop',
    author: 'Amara Johnson',
    date: 'November 2024',
    readTime: '5 min read',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            Beauty & Hair Tips
          </h2>
          <p className="text-lg text-gray-600">
            Expert advice and professional tips from our certified stylists
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden border border-peach/20 hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gold font-semibold text-sm">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="border-t border-peach/20 pt-4 mb-4">
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {article.date}
                    </div>
                  </div>
                  <p className="text-xs text-gold font-semibold mt-2">{article.readTime}</p>
                </div>

                {/* CTA */}
                <Button className="cta-button w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold group">
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="cta-button bg-peach hover:bg-peach/90 text-charcoal font-semibold px-8 py-6">
            View All Articles →
          </Button>
        </div>
      </div>
    </section>
  )
}
