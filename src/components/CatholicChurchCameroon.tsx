'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Church, Heart, Users, Clock, Award, HandHeart } from 'lucide-react'

export default function CatholicChurchCameroon() {
  const t = useTranslations('catholicChurch')
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const features = [
    {
      id: 1,
      icon: Clock,
      title: 'Rich Heritage',
      description: 'From the first missionaries to the vibrant local parishes of today, the Church in Cameroon has grown into a cornerstone of national identity and spiritual life.',
      featured: true
    },
    {
      id: 2,
      icon: Heart,
      title: 'Healing Mission',
      description: 'The Church operates hundreds of schools, hospitals, and clinics, serving the most vulnerable populations with compassion and dignity throughout the country.',
      featured: false
    },
    {
      id: 3,
      icon: Users,
      title: 'Cultural Unity',
      description: 'Integrating diverse Cameroonian traditions with universal Catholic rites, the Church stands as a model of cultural harmony and national reconciliation.',
      featured: true
    }
  ]

  const stats = [
    { number: '100+', label: '100+ Years of Faith', icon: Church },
    { number: '500+', label: '500+ Parishes', icon: Award },
    { number: '1M+', label: '1M+ Faithful', icon: Users },
    { number: '200+', label: '200+ Schools & Hospitals', icon: HandHeart }
  ]

  return (
    <section className="relative bg-white py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-8 relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse opacity-20"></div>
            <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center relative z-10">
              <Church className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4 md:mb-6 font-sans">
            Discover the Catholic Church in Cameroon
          </h2>
          <div className="w-32 h-1.5 bg-linear-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-8"></div>
      
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
           A CENTURY OF FAITH AND MISSION
          </p>
        </div>


        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className={`group relative transition-all duration-500 cursor-pointer ${
                  feature.featured 
                    ? 'transform hover:-translate-y-4' 
                    : 'transform hover:-translate-y-2'
                }`}
                onMouseEnter={() => setActiveCard(feature.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Container */}
                <div className={`relative h-full overflow-hidden rounded-2xl transition-all duration-500 ${
                  feature.featured 
                    ? 'bg-linear-to-br from-yellow-50 to-orange-50 shadow-2xl border border-yellow-200' 
                    : 'bg-white shadow-xl border border-gray-100'
                } ${activeCard === feature.id ? 'shadow-3xl scale-105' : ''}`}>
                  
                  {/* Top Accent Bar */}
                  <div className={`h-2 transition-all duration-500 ${
                    feature.featured 
                      ? 'bg-linear-to-r from-yellow-400 to-orange-400' 
                      : 'bg-linear-to-r from-gray-300 to-gray-400'
                  } ${activeCard === feature.id ? 'h-3' : ''}`}></div>

                  {/* Card Content */}
                  <div className="p-8">
                    {/* Icon with Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500 ${
                        feature.featured 
                          ? 'bg-yellow-500 text-white shadow-lg scale-110' 
                          : 'bg-gray-100 text-gray-600'
                      } ${activeCard === feature.id ? 'rotate-12 scale-125' : ''}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      
                      {/* Card Number */}
                      <div className={`text-4xl font-bold transition-all duration-500 ${
                        feature.featured 
                          ? 'text-yellow-600' 
                          : 'text-gray-300'
                      } ${activeCard === feature.id ? 'text-5xl' : ''}`}>
                        {String(feature.id).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className={`text-xl md:text-2xl font-medium font-sans transition-colors duration-300 ${
                        feature.featured 
                          ? 'text-gray-900' 
                          : 'text-gray-800'
                      }`}>
                        {feature.title}
                      </h3>
                      
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed line-clamp-4 md:line-clamp-none">
                        {feature.description}
                      </p>
                    </div>

                    {/* Bottom Decorative Line */}
                    <div className={`mt-8 h-1 rounded-full transition-all duration-500 ${
                      feature.featured 
                        ? 'bg-yellow-400 w-full' 
                        : 'bg-gray-200 w-1/2'
                    } ${activeCard === feature.id ? 'w-full' : ''}`}></div>
                  </div>

                  {/* Hover Overlay Pattern */}
                  <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                    activeCard === feature.id 
                      ? 'opacity-10' 
                      : 'opacity-0'
                  }`}>
                    <div 
                      className="h-full w-full" 
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
                      }}
                    ></div>
                  </div>

                  {/* Featured Badge */}
                  {feature.featured && (
                    <div className={`absolute top-4 right-4 transition-all duration-500 ${
                      activeCard === feature.id 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-75'
                    }`}>
                      <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        FEATURED
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Shadow */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-500 -z-10 ${
                  feature.featured 
                    ? 'bg-yellow-300/30 blur-2xl transform translate-y-8' 
                    : 'bg-gray-300/20 blur-xl transform translate-y-4'
                } ${activeCard === feature.id ? 'blur-3xl translate-y-12' : ''}`}></div>
              </div>
            )
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-yellow-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="text-sm md:text-base">Explore Our Faith Community</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <p className="mt-4 md:mt-6 text-gray-600 text-sm md:text-base">
            Join us in celebrating a century of spiritual growth and community service
          </p>
        </div>
      </div>
    </section>
  )
}
