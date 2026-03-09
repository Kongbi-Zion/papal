import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="font-sans text-xl font-bold">
                Pope Leo XIV in Cameroon
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Join us in welcoming Pope Leo XIV to Cameroon. This historic apostolic journey 
              celebrates faith, unity, and the vibrant Catholic community across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4">Quick Links</h3>
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
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4">Contact</h3>
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
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-sans text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Subscribe to receive the latest news and updates about Pope Leo XIV&apos;s visit to Cameroon.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
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
