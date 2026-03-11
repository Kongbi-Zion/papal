'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Calendar, ArrowRight } from 'lucide-react'

export default function CatholicChurchCameroon() {
  const t = useTranslations('catholicChurch')
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const newsItems = [
    {
      id: 1,
      date: 'January 2026',
      title: 'Official Announcement',
      description: 'Welcoming the invitations of the respective Heads of State and Ecclesiastical Authorities, His Holiness Pope Leo XIV will make an Apostolic Journey to Algeria, Cameroon, Angola and Equatorial Guinea from 13 to 23 April. His Holiness will visit Algiers and Annaba from 13 to 15 April; Yaoundé, Bamenda and Douala from 15 to 18 April; Luanda, Muxima and Saurimo from 18 to 21 April; and Malabo, Mongomo and Bata from 21 to 23 April.',
      linkText: 'Read More'
    },
    {
      id: 2,
      date: 'January 2026',
      title: 'Pastoral Themes for Cameroon',
      description: 'During his visit, Pope Leo XIV will focus on key spiritual themes for the nation: peace, reconciliation, and evangelization. In a country striving for unity amid challenges, the Holy Father\'s message calls all Cameroonians to heal divisions, strengthen faith, and live the Gospel through love, dialogue, and hope.',
      linkText: 'Read More'
    },
    {
      id: 3,
      date: 'January 2026',
      title: 'Preparations Underway',
      description: 'Communities across Cameroon are coming together in joy and anticipation to welcome Pope Leo XIV from April 15–18, 2026. Churches, schools, Government, and local organizations are preparing celebrations, prayers, and events to ensure that this historic visit becomes a moment of faith, hope, and unity for the nation.',
      linkText: 'Read More'
    }
  ]

  return (
    <section className="relative bg-white py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            Latest News & Updates
          </h2>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Stay informed about the preparations and developments for the 2026 Apostolic Journey
          </p>
        </div>


        {/* News Cards */}
        <div className="space-y-8 mb-20">
          {newsItems.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
              className={`group bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary transition-all duration-300 hover:shadow-xl cursor-pointer ${
                activeCard === item.id ? '-translate-y-2' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 font-medium mb-4 md:mb-0">
                  <Calendar className="w-5 h-5" />
                  <span>{item.date}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary font-crimson-text mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all duration-300">
                    {item.linkText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 md:gap-3 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="text-sm md:text-base">View All News</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
