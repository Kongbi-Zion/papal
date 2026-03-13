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

  // Array of gallery images from public/image_gallery folder with categories
  const galleryImages = [
    { src: '/image_gallery/img1.jpeg', alt: 'Papal visit preparation', category: 'ceremony' },
    { src: '/image_gallery/img2.jpeg', alt: 'Pope Leo XIV with faithful', category: 'Pontifical moments' },
    { src: '/image_gallery/img5.jpeg', alt: 'Papal audience', category: 'papal' },
    { src: '/image_gallery/img6.jpeg', alt: 'Religious celebration', category: 'ceremony' },
    { src: '/image_gallery/img7.jpeg', alt: 'Cameroonian welcome', category: 'welcome' },
    { src: '/image_gallery/img8.jpeg', alt: 'Traditional ceremony', category: 'culture' },
    { src: '/image_gallery/img3.jpeg', alt: 'Church ceremony', category: 'ceremony' },
    { src: '/image_gallery/img4.jpeg', alt: 'Vatican proceedings', category: 'vatican' },
    { src: '/image_gallery/img9.jpeg', alt: 'Papal blessing ceremony', category: 'blessing' },
    { src: '/image_gallery/img10.jpeg', alt: 'Historic procession', category: 'procession' },
    { src: '/image_gallery/img11.jpeg', alt: 'Faithful gathering', category: 'gathering' },
    { src: '/image_gallery/img12.jpeg', alt: 'Sacred celebration', category: 'celebration' },
    { src: '/image_gallery/img13.jpeg', alt: 'Papal address to crowd', category: 'address' },
    { src: '/image_gallery/img14.jpeg', alt: 'Traditional Cameroonian ceremony', category: 'culture' },
    { src: '/image_gallery/img15.jpeg', alt: 'Papal benediction', category: 'blessing' },
  ]

  // Get unique categories
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))]

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

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
            Explore moments from the historic papal visits and encounters through the years
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
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Modern Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
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

             
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                
                </div>
              </div>
            </div>

             <div className="p-2">
                <p className="text-black text-[10px] mt-1 opacity-75">Credit: Vatican Media</p>
              </div>
        
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}
