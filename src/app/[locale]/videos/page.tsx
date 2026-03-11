'use client'

import { useTranslations } from 'next-intl'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const videos = [
  {
    id: 1,
    title: 'Papal Visit Preparations',
    youtubeId: '03pYP2Nmreo',
  },
  {
    id: 2,
    title: "Pope Leo XIV's Message",
    youtubeId: '03pYP2Nmreo',
  },
  {
    id: 3,
    title: 'Historic Arrival',
    youtubeId: '03pYP2Nmreo',
  },
  {
    id: 4,
    title: 'Mass Celebration',
    youtubeId: '03pYP2Nmreo',
  },
  {
    id: 5,
    title: 'Blessing Ceremony',
    youtubeId: '03pYP2Nmreo',
  },
  {
    id: 6,
    title: 'Community Gathering',
    youtubeId: '03pYP2Nmreo',
  },
]

export default function VideosPage() {
  const t = useTranslations('photoGallery')

  return (
    <section className="relative bg-[#eff2f8] py-24 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Back Navigation */}
        <div className="mb-8 max-md:-mt-16">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-primary hover:bg-primary/10 font-open-sans font-semibold"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-crimson-text mb-6">
            {t('viewVideos')}
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Video Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-2xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary font-crimson-text">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}