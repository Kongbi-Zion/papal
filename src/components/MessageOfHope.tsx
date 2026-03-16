'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Globe, Users, Heart } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function MessageOfHope() {
  const t = useTranslations('messageOfHope')
  const tCommon = useTranslations('common')
  const params = useParams()
  const locale = params.locale as string
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const videoPath = locale === 'fr' 
    ? '/message/message_fr.mp4'
    : '/message/message_en.mp4'

  const cards = [
    {
      id: 1,
      icon: Heart,
      title: t('cards.pilgrimage.title'),
      description: t('cards.pilgrimage.description')
    },
    {
      id: 2,
      icon: Globe,
      title: t('cards.globalCommunion.title'),
      description: t('cards.globalCommunion.description')
    },
    {
      id: 3,
      icon: Users,
      title: t('cards.pastoralEncounter.title'),
      description: t('cards.pastoralEncounter.description')
    }
  ]

  return (
    <section className="relative bg-[#eff2f8] py-24 px-6 lg:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <div className="flex justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary font-crimson-text max-w-3xl mb-6">
              {t('title')}
            </h2>
          </div>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
        </div>


        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white p-4 rounded-2xl shadow">
            <div className="aspect-video">
              <video
                src={videoPath}
                poster="/profile.jpeg"
                controls
                className="w-full h-full rounded-lg"
                title={locale === 'fr' ? 'Message du Pape' : "Pope's Message"}
              >
                {tCommon('videoNotSupported')}
              </video>
            </div>
          </div>
        </div>


        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card) => {
            const Icon = card.icon

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group p-8 rounded-2xl bg-white shadow-lg border-t-4 border-secondary transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  activeCard === card.id ? '-translate-y-2' : ''
                }`}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-secondary/10 text-secondary mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-primary font-crimson-text mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
