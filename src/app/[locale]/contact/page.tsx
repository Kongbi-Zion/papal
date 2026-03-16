'use client'

import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ContactPage() {

  return (
    <section className="relative bg-gradient-to-br from-[#eff2f8] to-[#e8eef5] min-h-screen py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2H6zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">

        {/* Enhanced Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-crimson-text mb-6">
            Contact Us
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="bg-white rounded-2xl p-8 flex flex-col">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 text-center">
              <p className="text-gray-600 leading-relaxed">
                BP 1667, Yaoundé, Cameroon<br />
                Central Africa
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-green-50 rounded-2xl  p-8 flex flex-col">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 text-center">
              <p className="text-gray-600 leading-relaxed">
                +237 222 22 34 56<br />
                +237 222 22 34 57
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl  p-8 flex flex-col">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 text-center">
              <p className="text-gray-600 leading-relaxed">
                info@cenc.cm<br />
                papalvisit@cenc.cm
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="max-w-md flex justify-center mx-auto mt-12">
          <Link href="https://wa.me/237222223456" target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-primary hover:cursor-pointer w-fit hover:bg-green-600 text-white font-semibold py-5 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp Us</span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
