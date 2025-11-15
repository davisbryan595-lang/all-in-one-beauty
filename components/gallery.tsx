'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

const galleryImages = [
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitube_gtLUWlbG8x_2025_11_15_05_22_22-nQStzpIK6OqE7p4WPcQfNEC3gTRQlj.jpg',
    title: 'Straight & Sleek',
    category: 'Straightening',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitube_Gv90fXh7b9_2025_11_15_05_23_09-5jyJCdVNz5Sg4LSE3bK63jurKb10Wl.jpg',
    title: 'Voluminous Waves',
    category: 'Waves',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitube_hj5jzYsmMm_2025_11_15_05_22_20-yLPTvrHcMFRuEDNrd30a2f79TP8dCA.jpg',
    title: 'Honey Highlights',
    category: 'Color',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitube_XWTuW4Z68H_2025_11_15_05_22_16-nvd1fjyBwSe9nYiv9Wlb5xVRFUj69s.jpg',
    title: 'Radiant Glow',
    category: 'Color',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitube_hweCP7okAx_2025_11_15_05_23_11-F3C8OQdS6VpvZ9Y8WXCyY1t4ygLZ1x.jpg',
    title: 'Silky Shine',
    category: 'Straightening',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitube_LGQhChBptC_2025_11_15_05_23_08-Fw8hjBWJUusT1QbmcQO0wEPbzRrtUl.jpg',
    title: 'Blonde Perfection',
    category: 'Color',
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2Facb96db4de86414b9a6eaa6daf501ed8?format=webp&width=800',
    title: 'Silky Straight',
    category: 'Straightening',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitube_KTSEsxuLDC_2025_11_15_05_22_18-jaUiR91wbc1p1HcoqIMikYXOuE5u1q.jpg',
    title: 'Long & Luxe',
    category: 'Straightening',
  },
]

const categories = ['All', 'Straightening', 'Waves', 'Color']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [previewImage, setPreviewImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages =
    selectedCategory === 'All' ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-pink">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            Gallery of Transformations
          </h2>
          <p className="text-lg text-gray-600">
            See the stunning results our clients love
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cta-button px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gold text-charcoal'
                  : 'bg-peach/10 text-charcoal hover:bg-peach/20'
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
                <p className="text-white text-sm font-semibold">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
