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
      <div className="fixed bottom-4 hidden right-4 z-50 bg-[linear-gradient(91deg,rgba(250,204,21,0.8)_38%,rgba(245,158,11,0.8)_89%)] backdrop-blur-xl text-gray-900 rounded-lg shadow-2xl p-6 max-w-sm border border-white/20">
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
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden w-full">
          {/* Background Image */}
        <div className="absolute inset-0">
          {/* Image */}
          <div className="absolute inset-0 bg-[url('/hero2.jpeg')] bg-cover bg-center max-md:bg-right bg-no-repeat"></div>

          {/* WordPress Gradient Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(91deg,rgba(0,55,127,0.68)_38%,rgba(242,41,91,0)_89%)]"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8 py-20">

          {/* Hero Banner */}
          <div className="text-left mb-16 max-w-3xl">
            <h1 className="text-3xl text-secondary max-md:pt-16 font-bold  md:mb-6 font-sans drop-shadow-lg">
              {t('title')}
            </h1>

            <div className="relative mb-12 w-fit ">
              <h1 className="text-5xl md:text-7xl max-md:pt-10 font-bold text-white mb-6 font-sans drop-shadow-lg">
               &ldquo;{t('quote')}&rdquo;
              </h1>
              <div className="absolute -bottom-7 right-5 text-lg md:text-xl text-gray-100 drop-shadow-md">
                ({t('reference')})
              </div>
            </div>

            <p className="text-lg  text-gray-100 mb-8 max-w-4xl drop-shadow-md leading-relaxed">
              {t('firstParagraph')}
            </p>

            <p className="text-lg text-gray-100 mb-12 max-w-4xl drop-shadow-md leading-relaxed">
              {t('secondParagraph')}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button size="lg" className="text-white hover:opacity-90 px-10 py-7 font-open-sans font-bold text-lg bg-primary">
                {t('ctaButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
