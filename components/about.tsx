'use client'

import { Button } from '@/components/ui/button'
import { Award, Users, Heart, Sparkles } from 'lucide-react'

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const values = [
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We deliver premium results with meticulous attention to detail in every service.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with our clients and celebrating their transformations.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Staying ahead with latest techniques, products, and industry certifications.',
    },
    {
      icon: Sparkles,
      title: 'Empowerment',
      description: 'Helping our clients feel confident, beautiful, and celebrated every single day.',
    },
  ]

  const team = [
    {
      name: 'Jasmine Williams',
      role: 'Founder & Lead Stylist',
      bio: 'Award-winning stylist with 15+ years of experience in luxury hair transformations.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    },
    {
      name: 'Amara Johnson',
      role: 'Specialist - Natural Hair',
      bio: 'Certified natural hair expert specializing in protective styling and hair health.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    },
    {
      name: 'Zara Chen',
      role: 'Master Colorist',
      bio: 'Professional color specialist with international training in advanced coloring techniques.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Bridal & Event Styling',
      bio: 'Expert in special occasion styling with 12+ years of bridal experience.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Brand Story */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 2012, All in One Beauty Studio began with a simple vision: to create a comprehensive beauty sanctuary where clients can access everything they need for total transformation. What started as a boutique salon has evolved into a full-service beauty and aesthetic clinic, recognized internationally for our expertise and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we offer over 20 premium services—from luxury hair care and styling to cutting-edge aesthetic treatments and body contouring. Our team of certified professionals is dedicated to providing exceptional results while creating a welcoming, judgment-free environment. Every client deserves to feel beautiful, confident, and celebrated.
              </p>
              <Button
                onClick={() => scrollToSection('booking')}
                className="px-8 py-6 btn-gradient-premium"
              >
                Book Your Transformation
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7750101/pexels-photo-7750101.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="Luxury beauty studio salon interior with contemporary design"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-2xl shadow-lg">
                <p className="text-charcoal font-display text-3xl font-bold">12K+</p>
                <p className="text-charcoal font-semibold">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-4xl font-display font-bold text-charcoal text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-light-pink p-8 rounded-2xl border border-peach/20">
                  <div className="inline-block p-3 bg-gold/20 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-4xl font-display font-bold text-charcoal text-center mb-12">
            Meet Our Expert Team
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="overflow-hidden rounded-2xl mb-4 h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-1">{member.name}</h4>
                <p className="text-gold font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
