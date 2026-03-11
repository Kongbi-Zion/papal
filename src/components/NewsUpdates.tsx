'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar } from 'lucide-react'

export default function NewsUpdates() {
  const t = useTranslations('newsUpdates')
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const toggleExpanded = (id: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen bg-[#eff2f8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            {t('title')}
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-[url('/hero2.jpeg')] bg-cover bg-center"></div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary">
                    {t('featured')}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {t('featuredDate')}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-crimson-text">
                  {t('featuredTitle')}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('featuredExcerpt')}
                </p>
                <Button size="lg" className="text-white hover:opacity-90 px-8 py-6 font-open-sans font-bold bg-primary">
                  {t('readMore')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Latest News Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary font-crimson-text mb-8 text-center">
            {t('latestNews')}
          </h2>
          <div className="space-y-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 font-medium mb-4 md:mb-0">
                    <Calendar className="w-5 h-5" />
                    <span>{t('date')}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-primary font-crimson-text mb-4">
                      {t(`news${item}.title`)}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {expandedCards.has(item) ? t(`news${item}.fullContent`) : t(`news${item}.excerpt`)}
                    </p>
                    <button 
                      onClick={() => toggleExpanded(item)}
                      className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all duration-300"
                    >
                      {expandedCards.has(item) ? 'Show Less' : t('readMore')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
