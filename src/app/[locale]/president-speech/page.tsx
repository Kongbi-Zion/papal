'use client'

import { useTranslations } from 'next-intl'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PresidentSpeechPage() {
  const t = useTranslations('presidentSpeech')

  return (
    <section className="relative bg-linear-to-br from-[#eff2f8] to-[#e8eef5] min-h-screen py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2H6zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
       

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-crimson-text mb-6">
            {/* {t('title')} */}
              A Word from the President of National Episcopal Conference of Cameroon
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
         
        </div>

        {/* Speech Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
                Regarding the Apostolic Journey of His Holiness Pope Leo XIV
              </h2>
              
              <p className="text-center text-lg font-semibold text-gray-600">
                April 15-18, 2026
              </p>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  We give thanks to God for this Apostolic Journey of Pope Leo XIV, which is of great spiritual importance for the entire Church and for the Cameroonian nation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Above all, it is an expression of the concern of the Successor of the Apostle Peter for all the Churches. Pope Leo XIV comes as a Shepherd to strengthen faith, encourage hope, and promote peace.
                </p>
                
                <p className="text-lg leading-relaxed">
                  His presence is an eloquent sign of the closeness of the universal Church to our country and to the whole of Africa.
                </p>
                
                <p className="text-lg leading-relaxed">
                  This Apostolic Visit also reflects the Pope&apos;s deep concern for the dignity of every human person, especially the poor, the vulnerable, young people, families, and all those affected by hardship. It is an invitation to renew our commitment to unity, dialogue, justice, and the common good.
                </p>
                
                <p className="text-lg leading-relaxed">
                  I invite all the People of God to pray and act through reconciliation and concrete acts of charity, so that Pope Leo XIV&apos;s visit may have an impact on our lives.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Let us also pray that this visit may be a time of grace for our country, Cameroon, strengthening our faith and our determination to walk together in peace and hope.
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-4">
                  Done at Yaoundé, March 11, 2026
                </p>
                
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-800">
                    † Archbishop Andrew NKEA
                  </p>
                  <p className="text-md text-gray-600">
                    Archbishop of Bamenda
                  </p>
                  <p className="text-md text-gray-600">
                    President of the National Episcopal Conference of Cameroon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
