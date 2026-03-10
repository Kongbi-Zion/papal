'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function HeroSection() {
  const t = useTranslations('hero')

  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Calculate next Friday at 12:00 PM (noon)
  const getNextFridayNoon = () => {
    const now = new Date()
    const friday = 5
    const daysUntilFriday = (friday - now.getDay() + 7) % 7 || 7

    const nextFriday = new Date(now)
    nextFriday.setDate(now.getDate() + daysUntilFriday)
    nextFriday.setHours(12, 0, 0, 0)
    nextFriday.setMilliseconds(0)

    return nextFriday.getTime()
  }

  const targetDate = getNextFridayNoon()
  const [isCountdownActive, setIsCountdownActive] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
        setIsCountdownActive(true)
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsCountdownActive(false)
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <>
      {/* Floating Timer Section */}
      <div className="fixed bottom-4 left-4 z-50 bg-[linear-gradient(91deg,rgba(250,204,21,0.8)_38%,rgba(245,158,11,0.8)_89%)] backdrop-blur-xl text-gray-900 rounded-lg shadow-2xl p-6 max-w-sm border border-white/20">
        <div className="text-center">
          <div className="text-lg font-bold mb-3 font-sans text-white">
            Pope Leo XIV&apos;s Arrival
          </div>
          {isCountdownActive ? (
            <div className="flex justify-center gap-2 md:gap-3">
              {[
                { value: countdown.days, label: 'D' },
                { value: countdown.hours, label: 'H' },
                { value: countdown.minutes, label: 'M' },
                { value: countdown.seconds, label: 'S' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-md shadow-md p-2 min-w-12 min-h-12 flex justify-center items-center border border-white/30">
                    <div className="text-lg md:text-xl font-bold text-white font-sans">
                      {String(item.value).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-xs font-medium mt-1 uppercase tracking-wider text-white/90">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/20 backdrop-blur-md rounded-md shadow-md p-3 border border-white/30">
              <div className="text-sm font-bold text-white font-sans">
                Arrived!
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden w-full">

        {/* Background Image */}
      <div className="absolute inset-0">
  {/* Image */}
  <div className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center max-md:bg-right bg-no-repeat"></div>

  {/* WordPress Gradient Overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(91deg,rgba(0,55,127,0.68)_38%,rgba(242,41,91,0)_89%)]"></div>
</div>
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8 py-20">

          {/* Hero Banner */}
          <div className="text-left mb-16 max-w-3xl">
            <h1 className="text-4xl md:text-7xl max-md:pt-16 font-normal text-white mb-6 font-sans drop-shadow-lg">
              Pope Leo XIV Visits Cameroon 
            </h1>

            <div className="text-xl md:text-2xl text-gray-100 mb-6 max-w-3xl drop-shadow-md italic">
              &ldquo;May they all be One&rdquo;
            </div>
            
            <div className="text-lg md:text-xl text-gray-100 mb-4 max-w-3xl drop-shadow-md">
              – John 17:21
            </div>

            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl drop-shadow-md leading-relaxed">
              Cameroon welcomes Pope Leo XIV on a historic Apostolic Visit from April 15–18, 2026. This momentous pilgrimage invites all Catholics across the country to come together in prayer, reflection, and celebration, as the Holy Father shares his message of peace, hope, and spiritual renewal.
            </p>

            <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl drop-shadow-md leading-relaxed">
              Experience the joy of faith as communities across Cameroon gather to celebrate their Catholic heritage, strengthen unity, and embrace the teachings of the universal Church. Join this extraordinary journey and be part of a historic encounter that will inspire generations.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button size="lg" className="text-white hover:opacity-90 px-10 py-7 font-serif font-bold text-lg" style={{backgroundColor: '#017a5e', fontFamily: 'Crimson Text, serif'}}>
                Learn About the Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

// 'use client'

// import { useState, useEffect } from 'react'
// import { useTranslations } from 'next-intl'
// import { Button } from '@/components/ui/button'
// import { ArrowRight } from 'lucide-react'

// interface CountdownTime {
//   days: number
//   hours: number
//   minutes: number
//   seconds: number
// }

// export default function HeroSection() {
//   const t = useTranslations('hero')
//   const [countdown, setCountdown] = useState<CountdownTime>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   })

//   // Calculate next Friday at 12:00 PM (noon)
//   const getNextFridayNoon = () => {
//     const now = new Date()
//     const friday = 5 // Friday is day 5 (0 = Sunday, 1 = Monday, ...)
//     const daysUntilFriday = (friday - now.getDay() + 7) % 7 || 7 // If today is Friday, get next Friday
    
//     const nextFriday = new Date(now)
//     nextFriday.setDate(now.getDate() + daysUntilFriday)
//     nextFriday.setHours(12, 0, 0, 0) // Set to 12:00 PM (noon)
//     nextFriday.setMilliseconds(0)
    
//     return nextFriday.getTime()
//   }

//   const targetDate = getNextFridayNoon()
//   const [isCountdownActive, setIsCountdownActive] = useState(true)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime()
//       const distance = targetDate - now

//       if (distance > 0) {
//         setCountdown({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000)
//         })
//         setIsCountdownActive(true)
//       } else {
//         // Countdown finished - stop at zeros
//         setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//         setIsCountdownActive(false)
//         clearInterval(interval)
//       }
//     }, 1000)

//     return () => clearInterval(interval)
//   }, [targetDate])


//   return (
//     <>
//       {/* Hero Section */}
//       <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden w-full">
//         {/* Background Image */}
//         <div className="absolute inset-0 bg-[url('https://237papaleoxiv.com/wp-content/uploads/2026/03/Home-hero.webp')] bg-cover bg-center max-md:bg-right bg-no-repeat"></div>
        
//         <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8 py-20">
//           {/* Hero Banner */}
//           <div className="text-left mb-16 max-w-4xl">
//             <h1 className="text-4xl md:text-7xl max-md:pt-16 font-normal text-white mb-6 font-sans drop-shadow-lg">
//               {t('welcome')}
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl drop-shadow-md">
//               {t('subtitle')}
//             </p>
            
//             {/* Countdown Timer */}
//             <div className="mb-12">
//               {isCountdownActive ? (
//                 <div className="flex justify-start gap-4 md:gap-8">
//                   {[
//                     { value: countdown.days, label: t('countdown.days') },
//                     { value: countdown.hours, label: t('countdown.hours') },
//                     { value: countdown.minutes, label: t('countdown.minutes') },
//                     { value: countdown.seconds, label: t('countdown.seconds') }
//                   ].map((item, index) => (
//                     <div key={index} className="text-center group">
//                       <div className="relative">
//                         <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
//                         <div className="relative bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 md:p-8 min-h-15 min-w-15 md:min-h-28 md:min-w-28 flex justify-center items-center border border-yellow-200">
//                           <div className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-br from-yellow-600 to-yellow-800 font-sans">
//                             {String(item.value).padStart(2, '0')}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="text-sm md:text-base font-medium text-white/90 mt-3 md:mt-4 uppercase tracking-wider drop-shadow">{item.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center">
//                   <div className="relative inline-block">
//                     <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-lg transform rotate-1"></div>
//                     <div className="relative bg-linear-to-br from-yellow-500 to-yellow-600 text-gray-900 rounded-lg shadow-xl p-8 md:p-12 max-w-md mx-auto border border-yellow-300">
//                       <div className="text-3xl md:text-4xl font-bold font-sans">
//                         {t('countdown.eventLive')}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-start">
//               <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 px-8 py-3">
//                 {t('cta.primary')}
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button variant="outline" size="lg" className="border-gray-300 hover:border-yellow-500 px-8 py-3">
//                 {t('cta.secondary')}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       </>
//   )
// }
