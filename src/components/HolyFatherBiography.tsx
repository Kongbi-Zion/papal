'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function HolyFatherBiography() {
  const t = useTranslations('holyFather')

  return (
    <div className="min-h-screen bg-[#eff2f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Biography Content */}
        <div className="relative">
          {/* Image - Floated Left */}
          <div className="float-left mr-8 mb-4 lg:mb-0">
            <div className="relative w-64 lg:w-80">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/20">
                <Image
                  src="/profile.jpeg"
                  alt={t('imageAlt')}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Image Caption */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 italic">
                  {t('imageCaption')}
                </p>
              </div>
            </div>
          </div>

          {/* Text Content - All as Paragraphs */}
          <div className="space-y-6">
            <p className="text-primary font-bold text-xl md:text-2xl leading-relaxed">
              {t('biographyTitle')}
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              {t('introduction')}
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              {t('earlyLife.content')}
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              {t('priestlyMinistry.content')}
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              {t('papacy.content')}
            </p>

            <p className="text-gray-700 leading-relaxed text-lg italic">
              {t('vision.content')}
            </p>
          </div>
          
          {/* Clearfix to ensure proper flow after floated content */}
          <div className="clear-both"></div>
        </div>
      </div>
    </div>
  )
}
