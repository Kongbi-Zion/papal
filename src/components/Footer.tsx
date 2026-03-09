import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <Card className="bg-transparent border-none shadow-none">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <CardTitle className="font-sans text-xl font-bold text-white">
                    Pope Leo XIV in Cameroon
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  Join us in welcoming Pope Leo XIV to Cameroon. This historic apostolic journey 
                  celebrates faith, unity, and the vibrant Catholic community across the nation.
                </p>
              </CardContent>
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
                  <Link href="/about" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    About the Visit
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    Event Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/media" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    Media Center
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    Get Involved
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-sans text-lg font-semibold text-white">Contact</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <strong>Media Inquiries:</strong><br />
                  media@papalvisit-cm.org
                </li>
                <li>
                  <strong>Volunteer Info:</strong><br />
                  volunteers@papalvisit-cm.org
                </li>
                <li>
                  <strong>General:</strong><br />
                  info@papalvisit-cm.org
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Papal Visit to Cameroon. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
