'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function PresidentSpeechPage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('presidentSpeech')
  
  const documentPath = locale === 'fr' 
    ? '/docs/MOT_DU_PDT_DE_LA_CENC_SIGNE_FR.pdf'
    : '/docs/MOT_DU_PDT_DE_LA_CENC_SIGNE_ENG.pdf'
    
  const documentTitle = locale === 'fr'
    ? 'Message du Président de la Conférence Episcopale Nationale du Cameroun'
    : 'Message from the President of the National Episcopal Conference of Cameroon'

  return (
    <section className="relative bg-linear-to-br from-[#eff2f8] to-[#e8eef5] min-h-screen py-24 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2H6zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-crimson-text mb-6">
            {documentTitle}
            
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
         
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
         

            
            <div className="flex justify-center">
              <iframe
                src={`${documentPath}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                className="w-full max-w-4xl border border-gray-200 rounded-lg"
                title={documentTitle}
                style={{ height: '974px', width:'90%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
