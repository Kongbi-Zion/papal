'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const newLocale = locale === 'en' ? 'fr' : 'en'

  const toggleLanguage = () => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  const flag = locale === 'en' ? '🇫🇷' : '🇬🇧'
  const label = locale === 'en' ? 'FR' : 'ENG'

  return (
    <button
      onClick={toggleLanguage}
      className="
        flex items-center gap-2
        px-3 py-2
        rounded-lg
        text-sm font-medium
        text-gray-800
        hover:bg-gray-100
        transition-colors
        hover:cursor-pointer
      "
      title={locale === 'en' ? 'Switch to French' : 'Switch to English'}
      aria-label="Switch language"
    >
      <span className="text-lg">{flag}</span>
      <span>{label}</span>
    </button>
  )
}