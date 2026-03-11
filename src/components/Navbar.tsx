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
    <nav className="relative top-0 left-0 right-0 z-50 transition-all duration-300 mx-4 max-w-[calc(100vw-2rem)]">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between h-auto bg-white/95 backdrop-blur-sm rounded-lg px-6 py-4">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center">
              <div className="flex items-center space-x-3">
                <Image 
                  src={logoSrc} 
                  alt={tCommon('logoAlt')} 
                  width={100} 
                  height={100}
                  className="rounded-full object-cover w-30 h-30 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link href={`/${locale}`} className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href={`/${locale}/about`} className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              The Holy Father
            </Link>
            <Link href={`/${locale}/services`} className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              Apostolic Journey
            </Link>
          
            <Link href={`/${locale}/news`} className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              News & Updates
            </Link>
            <Link href={`/${locale}/resources`} className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              Spiritual Resources
            </Link>
            <Link href={`/${locale}/pilgrim`} className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              Pilgrim Info
            </Link>
              <Link href={`/${locale}/contact`} className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-yellow-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
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
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t transform transition-all duration-300 ease-in-out"
               style={{
                 transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)'
               }}>
            <Link href={`/${locale}`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50">
              Home
            </Link>
            <Link href={`/${locale}/about`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50">
              The Holy Father
            </Link>
            <Link href={`/${locale}/services`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50">
              Apostolic Journey
            </Link>
            <Link href={`/${locale}/contact`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50">
              Contact
            </Link>
            <Link href={`/${locale}/news`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50">
              News & Updates
            </Link>
            <Link href={`/${locale}/resources`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50">
              Spiritual Resources
            </Link>
            <Link href={`/${locale}/pilgrim`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50">
              Pilgrim Info
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
