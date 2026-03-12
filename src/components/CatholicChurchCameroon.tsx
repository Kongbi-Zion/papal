'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CatholicChurchCameroon() {
  const t = useTranslations('catholicChurch')
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const newsItems = [
    {
      id: 1,
      date: t('newsItems.official.date'),
      title: t('newsItems.official.title'),
      description: t('newsItems.official.description'),
      fullContent: t('newsItems.official.fullContent'),
      linkText: t('newsItems.official.readMore')
    },
    {
      id: 2,
      date: t('newsItems.themes.date'),
      title: t('newsItems.themes.title'),
      description: t('newsItems.themes.description'),
      fullContent: t('newsItems.themes.fullContent'),
      linkText: t('newsItems.themes.readMore')
    },
    {
      id: 3,
      date: t('newsItems.preparations.date'),
      title: t('newsItems.preparations.title'),
      description: t('newsItems.preparations.description'),
      fullContent: t('newsItems.preparations.fullContent'),
      linkText: t('newsItems.preparations.readMore')
    }
  ]

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

        {/* View All News Button */}
        <div className="text-center">
          <Link href="/news">
            <Button size="lg" className="text-white hover:cursor-pointer hover:opacity-90 px-10 py-7 font-open-sans font-bold text-lg bg-primary">
              {t('viewAllNews')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
