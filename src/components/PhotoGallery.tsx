'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PhotoGallery() {
  const t = useTranslations('photoGallery')

  return (
    <section className="relative bg-[#eff2f8]  py-24 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
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

        {/* Gallery Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Video Section - Left */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
              <div className="relative aspect-[4/3]">
                {/* YouTube Video */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/03pYP2Nmreo"
                  title={t('videoTitle')}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Image Section - Right */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
              <div className="relative aspect-[4/3]">
                {/* Vatican/Pope Image */}
                <img 
                  src="/hero.webp"
                  alt={t('imageTitle')}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* View Galleries Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="text-white hover:opacity-90 px-10 py-7 font-open-sans font-bold text-lg bg-primary">
            {t('viewGalleries')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
