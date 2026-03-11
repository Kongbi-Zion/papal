'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CameroonFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" viewBox="0 0 64 64">
    <path fill="#ffce31" d="M62 32c0-13.1-8.3-24.2-20-28.3v56.6C53.7 56.2 62 45.1 62 32"/>
    <path fill="#83bf4f" d="M2 32c0 13.1 8.4 24.2 20 28.3V3.7C10.4 7.8 2 18.9 2 32"/>
    <path fill="#c94747" d="M42 3.7C38.9 2.6 35.5 2 32 2s-6.9.6-10 1.7v56.6c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7z"/>
    <path fill="#ffce31" d="m32 36.2l5.3 3.8l-2-6.1l5.2-3.8H34L32 24l-2 6.1h-6.5l5.2 3.8l-2 6.1z"/>
  </svg>
)

const VaticanFlag = () => (
  <Image 
    src="/vatican-flag.webp" 
    alt="Vatican Flag" 
    width={32} 
    height={32}
    className="rounded-full border border-gray-200 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
  />
)

export default function FloatingTimer() {
  const t = useTranslations('floatingTimer')
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Set target date for Pope Leo VI arrival - April 15th at 2:30 PM
  const getTargetDate = () => {
    const targetDate = new Date()
    targetDate.setMonth(3, 15) // April is month 3 (0-indexed)
    targetDate.setHours(14, 30, 0, 0) // 2:30 PM is 14:30 in 24-hour format
    
    // If April 15th has already passed this year, set it for next year
    const now = new Date()
    if (targetDate < now) {
      targetDate.setFullYear(targetDate.getFullYear() + 1)
    }
    
    return targetDate.getTime()
  }

  const targetDate = getTargetDate()
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
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsCountdownActive(false)
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-gray-200 max-w-xs sm:max-w-sm md:max-w-lg">
      <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
        <CameroonFlag />
        <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 px-2 sm:px-3 md:px-4">{t('title')}</span>
        <VaticanFlag />
      </div>
      
      <div className="text-center">
        {isCountdownActive ? (
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 text-center">
            <div className="bg-gray-100 rounded p-2 sm:p-3 md:p-4">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{countdown.days}</div>
            </div>
            <div className="bg-gray-100 rounded p-2 sm:p-3 md:p-4">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{countdown.hours}</div>
            </div>
            <div className="bg-gray-100 rounded p-2 sm:p-3 md:p-4">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{countdown.minutes}</div>
            </div>
            <div className="bg-gray-100 rounded p-2 sm:p-3 md:p-4">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{countdown.seconds}</div>
            </div>
          </div>
        ) : (
          <div className="text-green-600 font-semibold text-sm">{t('eventStarted')}</div>
        )}
        
        {isCountdownActive && (
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 text-center mt-2">
            <div className="text-xs sm:text-sm md:text-base text-gray-600">{t('days')}</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600">{t('hours')}</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600">{t('minutes')}</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600">{t('seconds')}</div>
          </div>
        )}
      </div>
    </div>
  )
}
