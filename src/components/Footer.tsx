import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLocale } from 'next-intl'

export default function Footer() {
  const locale = useLocale()
  const logoSrc = locale === 'fr' ? '/logo_fr.jpeg' : '/logo_en.jpeg'
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <Card className="bg-transparent border-none shadow-none">
              <CardHeader className="p-0">
                <div className="flex items-center">
                  <Image 
                    src={logoSrc} 
                    alt="Pope Leo XIV Logo" 
                    width={100} 
                    height={100}
                    className="rounded-full object-cover w-30 h-30 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
                  />
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Quick Links */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-sans text-lg font-semibold text-white">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2">
                <li>
                  <Link href={`/${locale}/about`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    About the Visit
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/services`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    Pope&apos;s Schedule
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/news`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/resources`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    Spiritual Resources
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/accreditations`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    Accreditations
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Recommended Websites */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-sans text-lg font-semibold text-white">Recommended Websites</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="https://www.vatican.va" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Vatican.va
                  </a>
                </li>
                <li>
                  <a href="https://www.aciafrica.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    ACI Africa
                  </a>
                </li>
                <li>
                  <a href="https://ewtnafrica.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    EWTN Africa
                  </a>
                </li>
                <li>
                  <a href="https://www.catholicnewsagency.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Catholic News Agency
                  </a>
                </li>
                <li>
                  <a href="https://www.vatican237.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Vatican237.org
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-sans text-lg font-semibold text-white">Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} National Episcopal Conference of Cameroon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
