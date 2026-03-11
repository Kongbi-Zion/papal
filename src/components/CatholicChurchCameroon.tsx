'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CatholicChurchCameroon() {
  const t = useTranslations('catholicChurch')
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const newsItems = [
    {
      id: 1,
      date: t('newsItems.official.date'),
      title: t('newsItems.official.title'),
      description: t('newsItems.official.description'),
      linkText: t('newsItems.official.readMore')
    },
    {
      id: 2,
      date: t('newsItems.themes.date'),
      title: t('newsItems.themes.title'),
      description: t('newsItems.themes.description'),
      linkText: t('newsItems.themes.readMore')
    },
    {
      id: 3,
      date: t('newsItems.preparations.date'),
      title: t('newsItems.preparations.title'),
      description: t('newsItems.preparations.description'),
      linkText: t('newsItems.preparations.readMore')
    }
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
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            {t('title')}
          </h2>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            {t('subtitle')}
          </p>
        </div>


        {/* News Cards */}
        <div className="space-y-8 mb-20">
          {newsItems.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
              className={`group bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary transition-all duration-300 hover:shadow-xl cursor-pointer ${
                activeCard === item.id ? '-translate-y-2' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 font-medium mb-4 md:mb-0">
                  <Calendar className="w-5 h-5" />
                  <span>{item.date}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary font-crimson-text mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all duration-300">
                    {item.linkText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Button size="lg" className="text-white hover:opacity-90 px-10 py-7 font-open-sans font-bold text-lg bg-primary">
            {t('viewAllNews')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
