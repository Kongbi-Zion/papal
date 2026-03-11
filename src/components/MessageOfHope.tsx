'use client'

import { useState } from 'react'
import { Globe, Users, Heart } from 'lucide-react'

export default function MessageOfHope() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const cards = [
    {
      id: 1,
      icon: Heart,
      title: 'A Pilgrimage of Hope',
      description: 'Pope Leo XIV comes to Cameroon as a pilgrim of hope, bringing the peace of Christ to every community and inspiring unity, faith, and renewal across the nation. In a time when Cameroon faces challenges of conflict, division, and uncertainty, Pope Leo XIV arrives as a pilgrim of hope, bringing the peace of Christ to every community.\n\nLet us welcome Pope Leo XIV with open hearts and join him in a shared commitment to faith, hope, and peace for all of Cameroon.'
    },
    {
      id: 2,
      icon: Globe,
      title: 'Global Communion',
      description: 'Strengthening the universal Church through pastoral presence and spiritual unity.'
    },
    {
      id: 3,
      icon: Users,
      title: 'Pastoral Encounter',
      description: 'Meeting with Cameroonian Catholics and Christians of other denominations to listen, pray, and strengthen the faith.'
    }
  ]

  return (
    <section className="relative bg-[#eff2f8] py-24 px-6 lg:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            A Message of Peace
          </h2>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
        </div>


        {/* Quote */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white p-8 shadow border-l-4 border-secondary">
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              &ldquo;My dear brothers and sisters in Cameroon, it is with great joy that I look forward to visiting your beloved country from April 15 to 18, 2026. I come to you as a pilgrim of hope, to share the peace of Christ, to walk with you in faith, and to be inspired by the vibrant witness of the Cameroonian Church.&rdquo;
            </blockquote>

            <p className="mt-6 text-gray-500 text-center font-medium">
              — His Holiness Pope Leo XIV
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

// 'use client'

// import { useState } from 'react'
// import { useTranslations } from 'next-intl'
// import { Heart, Users, Globe, Sparkles } from 'lucide-react'

// export default function MessageOfHope() {
//   const t = useTranslations('messageOfHope')
//   const [activeCard, setActiveCard] = useState<number | null>(null)

//   const messages = [
//     {
//       id: 1,
//       icon: Globe,
//       title: 'Historic Visit',
//       description: 'The historic visit of His Holiness Pope Leo XIV to Cameroon marks a pivotal moment for both the nation and the African continent. As a "Message of Hope," this journey seeks to strengthen the bonds of faith and provide spiritual guidance in a rapidly changing world.',
//       featured: true
//     },
//     {
//       id: 2,
//       icon: Heart,
//       title: 'Unity & Harmony',
//       description: 'For Cameroonians, the presence of the Holy Father is a testament to the country\'s vibrant Catholic heritage and its role as a beacon of religious harmony. This visit transcends religious boundaries, offering a call for peace, reconciliation, and social justice across the region.',
//       featured: false
//     },
//     {
//       id: 3,
//       icon: Users,
//       title: 'Community Engagement',
//       description: 'Throughout his stay, the Pope will engage with diverse communities, emphasizing the importance of youth empowerment, environmental stewardship, and the preservation of cultural dignity.',
//       featured: false
//     },
//     {
//       id: 4,
//       icon: Sparkles,
//       title: 'Lasting Legacy',
//       description: 'His words are expected to resonate deeply within the hearts of millions, inspiring a renewed commitment to the common good and the spiritual upliftment of all Africans. This pilgrimage is not just a visit, but a transformative spiritual encounter that unites us in a shared vision of brotherhood and compassion.',
//       featured: true
//     }
//   ]

//   return (
//     <>
//       <section className="relative bg-linear-to-b from-gray-50 to-white py-24 px-6 lg:px-8 overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div 
//             className="absolute inset-0" 
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//             }}
//           ></div>
//         </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-8 relative">
//             <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse opacity-20"></div>
//             <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center relative z-10">
//               <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//               </svg>
//             </div>
//           </div>
//           <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6 font-sans">
//             A Message of Hope
//           </h2>
//           <div className="w-32 h-1.5 bg-linear-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
//           <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             Join us in witnessing this historic pilgrimage bringing faith, hope, and unity to Cameroon
//           </p>
//         </div>

//         {/* Message Cards Grid */}
//         <div className="grid md:grid-cols-2 gap-8 mb-16">
//           {messages.map((message) => {
//             const Icon = message.icon
//             return (
//               <div
//                 key={message.id}
//                 className={`group relative p-1 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer ${
//                   message.featured 
//                     ? 'bg-linear-to-br from-yellow-200 via-yellow-100 to-orange-100' 
//                     : 'bg-white'
//                 }`}
//                 onMouseEnter={() => setActiveCard(message.id)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 <div className={`h-full p-8 rounded-3xl transition-all duration-300 ${
//                   message.featured 
//                     ? 'bg-white/80 backdrop-blur-sm shadow-2xl border border-yellow-200' 
//                     : 'bg-white shadow-lg border border-gray-100 hover:shadow-xl'
//                 } ${activeCard === message.id ? 'transform -translate-y-2' : ''}`}>
//                   {/* Icon */}
//                   <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
//                     message.featured 
//                       ? 'bg-yellow-500 text-white shadow-lg' 
//                       : 'bg-yellow-100 text-yellow-600'
//                   } ${activeCard === message.id ? 'scale-110' : ''}`}>
//                     <Icon className="w-8 h-8" />
//                   </div>

//                   {/* Content */}
//                   <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-4 font-sans">
//                     {message.title}
//                   </h3>
//                   <p className="text-base md:text-lg text-gray-700 leading-relaxed line-clamp-4 md:line-clamp-none">
//                     {message.description}
//                   </p>

//                   {/* Hover Effect */}
//                   {message.featured && (
//                     <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
//                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Bottom Call to Action */}
//         <div className="text-center">
//           <div className="inline-flex items-center gap-2 md:gap-3 bg-yellow-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
//             <span className="text-sm md:text-base">Join us in this momentous occasion</span>
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </div>
//           <p className="mt-6 text-gray-600">
//             Together in faith, united in hope
//           </p>
//         </div>
//       </div>
//     </section>
//     </>
//   )
// }
