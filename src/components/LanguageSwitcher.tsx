'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  const getFlag = (locale: string) => {
    switch(locale) {
      case 'en':
         return '🇫🇷'
      case 'fr':
         return '🇺🇸'
      default:
        return '🌐'
    }
  }

  return (
    <div 
      onClick={toggleLanguage}
      className="cursor-pointer text-4xl"
      title={locale === 'en' ? 'Switch to French' : 'Switch to English'}
    >
      {getFlag(locale)}
    </div>
  )
}
