'use client'

import { useTranslations } from 'next-intl'
import { Play, Image } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
                
                {/* Overlay Button */}
                <div className="absolute bottom-4 right-4 flex items-center justify-center">
                  <Link href="/videos">
                    <Button size="lg" className="text-white hover:opacity-90 hover:cursor-pointer px-6 py-6 font-open-sans font-bold bg-secondary/90 backdrop-blur-sm shadow-lg">
                      <Play className="mr-2 h-5 w-5" />
                      {t('viewVideos')}
                    </Button>
                  </Link>
                </div>
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
                
                {/* Overlay Button */}
                <div className="absolute bottom-4 right-4 flex items-center justify-center">
                  <Link href="/gallery">
                    <Button size="lg" className="text-white hover:opacity-90 hover:cursor-pointer  px-6 py-6 font-open-sans font-bold bg-secondary/90 backdrop-blur-sm shadow-lg">
                      <Image className="mr-2 h-5 w-5" />
                      {t('viewImages')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
