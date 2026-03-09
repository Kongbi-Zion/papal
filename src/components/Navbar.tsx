'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const locale = useLocale()
  const t = useTranslations('navigation')
  const tCommon = useTranslations('common')

  const logoSrc = locale === 'fr' ? '/logo_fr.jpeg' : '/logo_en.jpeg'

  return (
    <nav className="absolute top-3 md:top-4 left-0 right-0 z-50 transition-all duration-300 mx-4 max-w-[calc(100vw-2rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center">
              <div className="flex items-center space-x-3">
                <Image 
                  src={logoSrc} 
                  alt={tCommon('logoAlt')} 
                  width={60} 
                  height={60}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-white hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('home')}
            </Link>
            <Link href={`/${locale}/about`} className="text-white hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('about')}
            </Link>
            <Link href={`/${locale}/services`} className="text-white hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('services')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-white hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('contact')}
            </Link>
            <LanguageSwitcher />
            <Button className="ml-4 bg-yellow-500 text-gray-900 hover:bg-yellow-400">
              {t('donate')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-600 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href={`/${locale}`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50">
              {t('home')}
            </Link>
            <Link href={`/${locale}/about`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50">
              {t('about')}
            </Link>
            <Link href={`/${locale}/services`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50">
              {t('services')}
            </Link>
            <Link href={`/${locale}/contact`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50">
              {t('contact')}
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
            <Button className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400">
              {t('donate')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
