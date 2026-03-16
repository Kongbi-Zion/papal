'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CatholicChurchCameroon() {
  const t = useTranslations('catholicChurch')

  return (
    <section className="relative bg-white py-24 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            {t('title')}
          </h2>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-[url('https://www.aciafrica.org/images/aci-africa-photo-edit-2026-02-25t113139_1772015854.jpg')]  bg-left"></div>
              </div>
              <div className="p-8 lg:p-12">
            
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-crimson-text">
                  {t('mainNews.title')}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('mainNews.description')}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('mainNews.dates')}
                </p>
                <Button 
                  size="lg" 
                  className="text-white hover:cursor-pointer hover:opacity-90 px-8 py-6 font-open-sans font-bold bg-primary"
                  onClick={() => window.open('https://www.aciafrica.org/news/20373/breaking-news-vatican-announces-pope-leo-xivs-11-day-pastoral-visit-to-four-african-countries-in-april', '_blank')}
                >
                  {t('mainNews.readMore')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

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
