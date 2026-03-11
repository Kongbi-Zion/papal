'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Facebook, Twitter, Instagram, Music } from 'lucide-react'
import Link from 'next/link'

export default function StayConnected() {
  const t = useTranslations('stayConnected')
  const locale = useLocale()

  const socials = [
    {
      key: 'facebook',
      icon: Facebook,
      url: 'https://facebook.com/237papaleoxiv',
    },
    {
      key: 'twitter',
      icon: Twitter,
      url: 'https://twitter.com/237papaleoxiv',
    },
    {
      key: 'instagram',
      icon: Instagram,
      url: 'https://instagram.com/237papaleoxiv',
    },
    {
      key: 'tiktok',
      icon: Music,
      url: 'https://tiktok.com/@237papaleoxiv',
    },
  ]

  return (
    <div className="bg-[#2b5894] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-6xl font-bold font-serif mb-4">
            {t('title')}
          </h2>

          <p className="text-lg max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Social Media Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto">
          {socials.map((social) => {
            const Icon = social.icon

            return (
              <div
                key={social.key}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 w-full max-w-sm"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-semibold font-crimson-text text-gray-900 mb-2">
                  {t(`${social.key}.title`)}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {t(`${social.key}.description`)}
                </p>

                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  {t(`${social.key}.follow`)}
                  <span className="ml-2">→</span>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <p className="text-white/80">
            {t('contactInfo')}
          </p>
        </div>

      </div>
    </div>
  )
}