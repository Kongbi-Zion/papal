'use client'

import { useTranslations } from 'next-intl'
import { Heart, Users, Globe, Shield, Home } from 'lucide-react'
import Image from 'next/image'

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
    },
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

        {/* Prayer for Apostolic Journey */}

        <div className='flex justify-center items-center'>
             <div className="md:w-20 md:h-20 h-16 w-16 rounded-full flex bg-green-100 text-green-600 items-center justify-center mx-auto mb-6">
            
            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 md:w-10' viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="m17 9l-4.25 4.5h-.25l-1.5-6h-.5a3 3 0 0 0-3 3V17c5.5 0 9 2.5 9 3.5H7m6-10.882L15 7.5m-15 16h24m-12.445-18s1.81-.557 2.135-1.776a1.77 1.77 0 0 0-1.242-2.163a1.75 1.75 0 0 0-2.145 1.25c-.325 1.219.961 2.61.961 2.61z"/></svg>
             </div>
        </div>
        <div className="bg-white hover:bg-blue-200 rounded-2xl shadow-lg md:py-16 p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Image 
                src="/spiritual_reference_logo2.png" 
                alt="National Episcopal Conference of Cameroon Logo"
                width={700}
                height={700}
                className="mx-auto mb-8"
              />
              <h2 className="text-3xl font-bold font-crimson-text mb-4 text-black underline">
                {t('prayer.title')}
              </h2>
            </div>

            {/* Prayer Content */}
            <div className="text-start space-y-4 mb-8">
              <p className="text-lg leading-relaxed text-gray-800">
                {t('prayer.opening')}
              </p>
              <p className="text-lg leading-relaxed text-gray-800">
                {t('prayer.thanksgiving')}
              </p>
              <p className="text-lg leading-relaxed text-gray-800">
                {t('prayer.petition')}
              </p>

              <p className="text-lg leading-relaxed text-gray-800">
               {t('prayer.intercession')}
              </p>
              
              {/* Prayer Points */}
              <div className="max-w-2xl mx-auto text-left">
                <ul className="space-y-3">
                  <li className="text-gray-700">• <span className="font-bold">{t('prayer.points.strengthen')}</span></li>
                  <li className="text-gray-700">• <span className="font-bold">{t('prayer.points.comfort')}</span></li>
                  <li className="text-gray-700">• <span className="font-bold">{t('prayer.points.faith')}</span></li>
                  <li className="text-gray-700">• <span className="font-bold">{t('prayer.points.fruits')}</span></li>
                </ul>
              </div>
            </div>

            {/* Closing Prayer */}
            <div className="text-start space-y-4">
              <p className="text-lg leading-relaxed text-gray-800">
                {t('prayer.closing.mary')}
              </p>
              <p className="text-lg text-gray-800">
                {t('prayer.closing.blessed')}
              </p>
              <p className="text-lg text-gray-800">
                {t('prayer.closing.amen')}
              </p>
            </div>
          </div>
        </div>

        {/* Main Theme and Sub-Themes */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 font-crimson-text">
            {t('mainTheme.title')}
          </h2>
          <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-6 mb-8">
            <p className="text-lg font-medium text-gray-800 mb-3">
              {t('mainTheme.description')}
            </p>
            <blockquote className="text-xl font-bold text-red-600 italic mb-3">
              {t('mainTheme.verse')}
            </blockquote>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">{t('mainTheme.english')}</p>
              <p className="font-medium">{t('mainTheme.latin')}</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-primary mb-4 font-crimson-text">
            {t('subThemes.title')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('subThemes.description')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50 rounded-r-lg">
              <h4 className="font-bold text-red-700 mb-1">{t('subThemes.bamenda.title')}</h4>
              <p className="text-gray-700 italic">
                {t('subThemes.bamenda.verse')}
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
              <h4 className="font-bold text-blue-700 mb-1">{t('subThemes.douala.title')}</h4>
              <p className="text-gray-700 italic">
                {t('subThemes.douala.verse')}
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg">
              <h4 className="font-bold text-green-700 mb-1">{t('subThemes.garoua.title')}</h4>
              <p className="text-gray-700 italic">
                {t('subThemes.garoua.verse')}
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4 py-3 bg-yellow-50 rounded-r-lg">
              <h4 className="font-bold text-yellow-700 mb-1">{t('subThemes.yaounde.title')}</h4>
              <p className="text-gray-700 italic">
                {t('subThemes.yaounde.verse')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spiritualReferences.map((reference) => {
            const Icon = reference.icon
            return (
              <div
                key={reference.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:bg-amber-400 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
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
                      &quot;{reference.verse}&quot;
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
<div>
  
</div>

      </div>
    </div>
  )
}
