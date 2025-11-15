'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Stats from '@/components/stats'
import About from '@/components/about'
import Pricing from '@/components/pricing'
import Gallery from '@/components/gallery'
import Reviews from '@/components/reviews'
import Blog from '@/components/blog'
import Newsletter from '@/components/newsletter'
import Booking from '@/components/booking'
import Footer from '@/components/footer'
import SparklePreloader from '@/components/sparkle-preloader'

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (showPreloader) {
    return <SparklePreloader />
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Pricing />
      <Gallery />
      <Reviews />
      <Blog />
      <Newsletter />
      <Booking />
      <Footer />
    </main>
  )
}
