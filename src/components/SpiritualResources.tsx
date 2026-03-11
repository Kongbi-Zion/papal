'use client'

import { useTranslations } from 'next-intl'
import { Heart, Users, Globe, Shield, Home } from 'lucide-react'

export default function SpiritualResources() {
  const t = useTranslations('spiritualResources')

  const spiritualReferences = [
    {
      id: 1,
      title: t('unity.title'),
      verse: t('unity.verse'),
      reference: t('unity.reference'),
      description: t('unity.description'),
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: t('hope.title'),
      verse: t('hope.verse'),
      reference: t('hope.reference'),
      description: t('hope.description'),
      icon: Heart,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      title: t('reconciliation.title'),
      verse: t('reconciliation.verse'),
      reference: t('reconciliation.reference'),
      description: t('reconciliation.description'),
      icon: Shield,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 4,
      title: t('missionary.title'),
      verse: t('missionary.verse'),
      reference: t('missionary.reference'),
      description: t('missionary.description'),
      icon: Globe,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 5,
      title: t('solidarity.title'),
      verse: t('solidarity.verse'),
      reference: t('solidarity.reference'),
      description: t('solidarity.description'),
      icon: Users,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 6,
      title: t('church.title'),
      verse: t('church.verse'),
      reference: t('church.reference'),
      description: t('church.description'),
      icon: Home,
      color: 'bg-indigo-100 text-indigo-600'
    }
  ]

  return (
    <div className="min-h-screen bg-[#eff2f8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            {t('title')}
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Spiritual References Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {spiritualReferences.map((reference) => {
            const Icon = reference.icon
            return (
              <div
                key={reference.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${reference.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary font-crimson-text mb-4 text-center">
                    {reference.title}
                  </h3>

                  {/* Verse */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 text-center">
                    <p className="text-lg font-medium text-gray-900 italic">
                      "{reference.verse}"
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {reference.reference}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-center">
                    {reference.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
