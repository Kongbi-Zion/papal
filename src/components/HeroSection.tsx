'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('hero')


  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://www.papalvisit.ca/wp-content/uploads/2022/05/PopeExtendedBIG-lightermobile.jpg')] bg-cover bg-center bg-no-repeat"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Banner */}
        <div className="text-left mb-16 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading drop-shadow-lg">
            Welcome Pope Leo XIV to Cameroon
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl drop-shadow-md">
            A historic visit of faith, peace and unity to the heart of Africa.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-12">
            <div className="flex gap-4 md:gap-8">
              {[
                { value: '04', label: 'Days' },
                { value: '06', label: 'Hours' },
                { value: '11', label: 'Minutes' },
                { value: '20', label: 'Seconds' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-600 font-sans">
                      {item.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-200 mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 px-8 py-3">
              {t('cta.primary')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 hover:border-yellow-500 px-8 py-3">
              {t('cta.secondary')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
