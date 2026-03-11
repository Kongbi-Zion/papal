'use client'

import { useTranslations } from 'next-intl'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GalleryPage() {
  const t = useTranslations('photoGallery')

  return (
    <section className="relative bg-[#eff2f8] py-24 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8 max-md:-mt-16">
          <Link href="/">
            <Button variant="ghost" className="text-primary hover:bg-primary/10 font-open-sans font-semibold">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-crimson-text mb-6">
            {t('viewImages')}
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Papal visit preparation" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Pope Leo XIV with faithful" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Church ceremony" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Vatican proceedings" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Papal audience" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Religious celebration" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Cameroonian welcome" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Traditional ceremony" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Community gathering" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Papal blessing" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Historic moment" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/hero.webp" alt="Faith in action" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
