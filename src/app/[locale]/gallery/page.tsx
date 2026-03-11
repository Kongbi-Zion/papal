'use client'

import { useTranslations } from 'next-intl'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GalleryPage() {
  const t = useTranslations('photoGallery')

  // Array of gallery images from public/image_gallery folder
  const galleryImages = [
    { src: '/image_gallery/img1.jpeg', alt: 'Papal visit preparation' },
    { src: '/image_gallery/img2.jpeg', alt: 'Pope Leo XIV with faithful' },
    { src: '/image_gallery/img3.jpeg', alt: 'Church ceremony' },
    { src: '/image_gallery/img4.jpeg', alt: 'Vatican proceedings' },
    { src: '/image_gallery/img5.jpeg', alt: 'Papal audience' },
    { src: '/image_gallery/img6.jpeg', alt: 'Religious celebration' },
    { src: '/image_gallery/img7.jpeg', alt: 'Cameroonian welcome' },
    { src: '/image_gallery/img8.jpeg', alt: 'Traditional ceremony' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#eff2f8] to-[#e8eef5] min-h-screen py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8 max-md:-mt-16">
          <Link href="/">
            <Button variant="ghost" className="text-primary hover:bg-primary/10 font-open-sans font-semibold backdrop-blur-sm bg-white/50 px-4 py-2 rounded-full shadow-sm">
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t('backToHome')}
            </Button>
          </Link>
        </div>

        {/* Enhanced Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-crimson-text mb-6">
            {t('viewImages')}
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* Modern Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img 
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110" 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
