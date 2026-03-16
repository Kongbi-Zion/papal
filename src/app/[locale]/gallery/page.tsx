'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function GalleryPage() {
  const t = useTranslations('photoGallery')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Array of gallery categories with their images
  const galleryCategories = [
    {
      id: 'cameroon',
      name: 'Cameroon and the Vatican ',
      copyright: '© Vatican Media',
      images: [
        { src: '/image_gallery/cameroon/PH_059.jpeg', alt: 'Church celebration', copyright: '© SOPECAM'},
        { src: '/image_gallery/cameroon/img1.jpeg', alt: 'Papal visit preparation', copyright: '© Vatican Media' },
        { src: '/image_gallery/cameroon/img15.jpeg', alt: 'Papal benediction', copyright: '© Vatican Media' },
        { src: '/image_gallery/cameroon/img2.jpeg', alt: 'Pope with faithful', copyright: '© Vatican Media' },
        { src: '/image_gallery/cameroon/img3.jpeg', alt: 'Church ceremony', copyright: '© Vatican Media' },
        { src: '/image_gallery/cameroon/img8.jpeg', alt: 'Traditional ceremony', copyright: '© Vatican Media' },
        { src: '/image_gallery/cameroon/le_couple_Présidentiel_avec_le_pape.jpeg', alt: 'Presidential couple with Pope', copyright: '© SOPECAM' },
      ]
    },
    {
      id: 'pontifical',
      name: 'Pontifical Moments ',
      copyright: '© Vatican Media',
      images: [
        { src: '/image_gallery/pontifical/img4.jpeg', alt: 'Vatican proceedings', copyright: '© Vatican Media' },
        { src: '/image_gallery/pontifical/img5.jpeg', alt: 'Papal audience', copyright: '© Vatican Media' },
        { src: '/image_gallery/pontifical/img6.jpeg', alt: 'Religious celebration', copyright: '© Vatican Media' },
         { src: '/image_gallery/pontifical/img9.jpeg', alt: 'Papal blessing ceremony', copyright: '© Vatican Media' },
        { src: '/image_gallery/pontifical/img13.jpeg', alt: 'Papal address to crowd', copyright: '© Vatican Media' },
        { src: '/image_gallery/pontifical/img7.jpeg', alt: 'Cameroonian welcome', copyright: '© Vatican Media' },
      ]
    },
    {
      id: 'ben16',
      name: 'Pope Benedict XVI ',
      copyright: '© SOPECAM',
      images: [
        { src: '/image_gallery/ben16/Eldick_018.jpeg', alt: 'Cardinal Eldick ceremony', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/PH_473.jpeg', alt: 'Papal audience', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/PH_595.jpeg', alt: 'Blessing ceremony', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Ph_080.jpeg', alt: 'Traditional ceremony', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_152.jpeg', alt: 'Papal welcome ceremony', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_168.jpeg', alt: 'Vatican proceedings', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_172.jpeg', alt: 'Religious celebration', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_229.jpeg', alt: 'Historic procession', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_300.jpeg', alt: 'Traditional welcome', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_306.jpeg', alt: 'Cultural ceremony', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_312.jpeg', alt: 'Faithful gathering', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_346.jpeg', alt: 'Vatican ceremony', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_359.jpeg', alt: 'Procession ceremony', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_383.jpeg', alt: 'Blessing moment', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_387.jpeg', alt: 'Church ceremony', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/Photo_396.jpeg', alt: 'Papal audience', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/accueil_par_le_cardinal_Tumi.jpeg', alt: 'Welcome by Cardinal Tumi', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/avec_les_Evêques.jpg', alt: 'With the Bishops', copyright: '© SOPECAM' },
        { src: '/image_gallery/ben16/ph_365.jpeg', alt: 'Papal ceremony', copyright: '© SOPECAM' },
      ]
    },
    {
      id: 'jp2',
      name: 'Pope St. John Paul II ',
      copyright: '© SOPECAM',
      images: [
        { src: '/image_gallery/jp2/papal_gallery-60.jpg', alt: 'Papal visit moment', copyright: '© SOPECAM' },
        { src: '/image_gallery/jp2/papal_gallery-61.jpg', alt: 'Papal ceremony', copyright: '© SOPECAM' },
        { src: '/image_gallery/jp2/papal_gallery-62.jpg', alt: 'Church celebration', copyright: '© SOPECAM' },
        { src: '/image_gallery/jp2/papal_gallery-63.jpg', alt: 'Papal blessing', copyright: '© SOPECAM' },
        { src: '/image_gallery/jp2/papal_gallery-64.jpg', alt: 'Cultural ceremony', copyright: '© SOPECAM' },
        { src: '/image_gallery/jp2/papal_gallery-65.jpg', alt: 'Welcome ceremony', copyright: '© SOPECAM' },
        { src: '/image_gallery/jp2/papal_gallery-66.jpg', alt: 'Faithful gathering', copyright: '© SOPECAM' },
        { src: '/image_gallery/jp2/papal_gallery-67.jpg', alt: 'Vatican proceedings', copyright: '© SOPECAM' },
      ]
    }
  ]

  // Get unique categories
  const categories = ['all', ...galleryCategories.map(cat => cat.id)]

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryCategories.flatMap(cat => cat.images)
    : galleryCategories.find(cat => cat.id === selectedCategory)?.images || []

  return (
    <section className="relative bg-gradient-to-br from-[#eff2f8] to-[#e8eef5] min-h-screen py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2H6zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/svg%3E")`,
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
            Explore Cameroon - Vatican Historic Visits.
            {/* {t('subtitle')} */}
          </p>
        </div>

        {/* Category Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="px-4 py-2 hover:cursor-pointer rounded-full text-sm font-medium transition-all duration-200"
            >
              {category === 'all' ? 'All' : galleryCategories.find(cat => cat.id === category)?.name || category}
            </Button>
          ))}
        </div>

        {/* Modern Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {filteredImages.map((image, index) => (
            <div key={index}> 
              <div  className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image 
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110" 
                  src={image.src} 
                  alt={image.alt}
                  width={400}
                  height={300}
                  loading="lazy"
                />
                {/* Copyright Watermark */}
                <div className="absolute bottom-3 right-3 text-white/30 text-xs font-medium pointer-events-none select-none">
                  {image.copyright}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
