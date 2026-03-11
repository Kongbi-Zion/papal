'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function AlternateHero() {
  const t = useTranslations('hero')
  return (
       <div className="rounded-2xl bg-indigo-50 md:py-10 overflow-hidden m-0 2xl:py-16 xl:py-8">
            {/* Full-width image for mobile */}
            <div className="lg:hidden w-full h-screen">
                <Image 
                    src="/hero2.jpeg" 
                    alt="Dashboard image" 
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                    priority
                />
            </div>
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:gap-0 items-center lg:grid-cols-12">
                    {/* Desktop image - hidden on mobile */}
                    <div className="hidden lg:block lg:col-span-7 lg:order-last">
                        <div className="lg:w-243.25 xl:ml-16">
                        <Image 
                            src="/hero2.jpeg" 
                            alt="Desktop Dashboard image" 
                            className="rounded-l-3xl w-full lg:h-auto object-cover"
                            width={800}
                            height={600}
                            priority
                        />
                        </div>
                    </div>
                    <div className="w-full xl:col-span-5 lg:col-span-8 2xl:-mx-5 xl:mx-0 lg:order-first">
                    
                    <div className="text-left mb-16 max-w-3xl">
                    <h1 className="text-3xl text-secondary max-md:pt-16 font-bold  md:mb-6 font-sans">
                        {t('title')}
                    </h1>

                    <div className="relative mb-12 w-fit ">
                        <h1 className="text-5xl md:text-7xl max-md:pt-10 font-bold text-gray-600 mb-6 font-sans">
                            &ldquo;{t('quote')}&rdquo;
                        </h1>
                        <div className="text-2xl font-bold text-gray-600">
                            ({t('reference')})
                        </div>
                    </div>

                    <p className="text-lg  text-gray-600 mb-8 max-w-4xl leading-relaxed">
                        {t('firstParagraph')}
                    </p>

                    <p className="text-lg text-gray-600 mb-12 max-w-4xl leading-relaxed">
                        {t('secondParagraph')}
                    </p>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <Button size="lg" className="text-white hover:opacity-90 px-10 py-7 font-open-sans font-bold text-lg bg-primary">
                            {t('ctaButton')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    </div>

                    </div>
                </div>
            </div>
        </div>
  )
}