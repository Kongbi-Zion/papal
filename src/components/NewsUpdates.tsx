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

        {/* News Cards */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-[url('https://www.aciafrica.org/images/aci-africa-photo-edit-2026-02-25t113139_1772015854.jpg')]  bg-left"></div>
              </div>
              <div className="p-8 lg:p-12">
            
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-crimson-text">
                  Vatican Announces Pope Leo XIV&apos;s 11-Day Pastoral Visit to Four African Countries in April
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The Vatican has announced that Pope Leo XIV will make his first pastoral visit to Africa from April 13–23. The 11-day Apostolic Journey will include Algeria, Cameroon, Angola, and Equatorial Guinea.
                </p>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                He will visit Algiers and Annaba (Apr 13–15), Yaoundé, Bamenda, and Douala (Apr 15–18), Luanda, Muxima, and Saurimo (Apr 18–21), and Malabo, Mongomo, and Bata (Apr 21–23).
                </p>
                <Button 
                size="lg" 
                className="text-white hover:cursor-pointer hover:opacity-90 px-8 py-6 font-open-sans font-bold bg-primary"
                onClick={() => window.open('https://www.aciafrica.org/news/20373/breaking-news-vatican-announces-pope-leo-xivs-11-day-pastoral-visit-to-four-african-countries-in-april', '_blank')}
              >
                Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Latest News Grid */}
        <div className="mb-16">
          {/* <h2 className="text-3xl font-bold text-primary font-crimson-text mb-8 text-center">
            {t('latestNews')}
          </h2> */}
 
        </div>
      </div>
    </div>
  )
}
