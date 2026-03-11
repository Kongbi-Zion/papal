'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Globe, Users, Heart } from 'lucide-react'

export default function MessageOfHope() {
  const t = useTranslations('messageOfHope')
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const cards = [
    {
      id: 1,
      icon: Heart,
      title: 'A Pilgrimage of Hope',
      description: 'Pope Leo XIV comes to Cameroon as a pilgrim of hope, bringing the peace of Christ to every community and inspiring unity, faith, and renewal across the nation. In a time when Cameroon faces challenges of conflict, division, and uncertainty, his visit invites the faithful to rediscover hope and trust in God\'s presence. Together, we welcome him with open hearts and a shared commitment to peace, reconciliation, and solidarity.'
    },
    {
      id: 2,
      icon: Globe,
      title: 'Global Communion',
      description: 'The visit of Pope Leo XIV highlights the deep communion that unites the Catholic Church across the world. As successor of Saint Peter, he strengthens the bonds between local churches and the universal Church. His presence in Cameroon reminds the faithful that they are part of a global community of believers, called to live the Gospel, support one another, and witness to Christ through unity, charity, and mission.'
    },
    {
      id: 3,
      icon: Users,
      title: 'Pastoral Encounter',
      description: 'During his visit, Pope Leo XIV will meet with Catholics from across Cameroon, Christians of other denominations as well as men and women from other faith groups. These encounters offer moments of prayer, dialogue, and spiritual encouragement. By listening to the people and sharing in their joys and challenges, the Holy Father seeks to strengthen faith, promote fraternity among peoples, and inspire a renewed commitment to the Gospel in daily life.'
    }
  ]

  return (
    <section className="relative bg-[#eff2f8] py-24 px-6 lg:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            {t('title')}
          </h2>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
        </div>


        {/* Quote */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white p-8 shadow border-l-4 border-secondary">
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              &ldquo;{t('quote')}&rdquo;
            </blockquote>

            <p className="mt-6 text-gray-500 text-center font-medium">
              — {t('quoteAuthor')}
            </p>
          </div>
        </div>


        {/* Cards */}
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
