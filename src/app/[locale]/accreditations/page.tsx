'use client'

import { useTranslations } from 'next-intl'
import { Download, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useLocale } from 'next-intl'

export default function AccreditationsPage() {
  const t = useTranslations('accreditations')
  const locale = useLocale()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      // Select the appropriate file based on locale
      const fileName = locale === 'fr' 
        ? 'accreditation_fr-actualisé-1.pdf'
        : 'accreditation_en-actualisé.pdf'
      
      const response = await fetch(`/downloads/${fileName}`)
      
      if (!response.ok) {
        throw new Error('Download failed')
      }
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Download error:', error)
      // You could show a toast notification here
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <section className="relative bg-[#eff2f8] py-24 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-crimson-text mb-6">
            {t('title')}
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {t('intro1')}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {t('intro2')}
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary font-crimson-text mb-4">
              {t('downloadTitle')}
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between bg-primary/5 border-2 border-primary/20 rounded-xl p-8">
              <div className="mb-6 md:mb-0 md:mr-8">
                <p className="text-gray-700">
                  {t('downloadText')}
                </p>
                <p className="text-gray-700 mt-4">
                  {t('instructions')}
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-open-sans font-bold"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Download className="mr-2 h-5 w-5" />
                )}
                {isDownloading ? 'Downloading...' : t('downloadButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
