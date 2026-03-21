'use client'

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import dynamic from 'next/dynamic';

const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), { ssr: false })
const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), { ssr: false })

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();
  const [isClient, setIsClient] = useState(false);
  const [pdfWidth, setPdfWidth] = useState(800);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => Math.min(Math.max(1, prevPageNumber + offset), numPages || 1))
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  useEffect(() => {
    const wednesdaySection = document.getElementById('wednesday-15-april-2026');
    if (wednesdaySection) {
      setTimeout(() => {
        wednesdaySection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, []);

  useEffect(() => {
    setIsClient(true)
    import('react-pdf').then((pdfjs) => {
      pdfjs.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
      ).toString()
    })
    
    const updateWidth = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 640) {
        setPdfWidth(screenWidth - 32) // Small screens
      } else if (screenWidth < 768) {
        setPdfWidth(screenWidth - 48) // Medium screens
      } else if (screenWidth < 1024) {
        setPdfWidth(Math.min(800, screenWidth - 64)) // Large screens
      } else {
        setPdfWidth(800) // Extra large screens
      }
    }
    
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="text-center mb-8">
        <img 
          src="/codeofarms.png" 
          alt="Code of Arms" 
          className="mx-auto h-32 md:h-40 object-contain"
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-2xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            {t('title')}
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-2xl text-gray-700 font-semibold">
            {t('dateRange')}
          </p>
        </div>

        <div className='flex justify-center pb-10'>
          <img src="/image.jpeg" className='h-67 md:h-96' alt="Service image" />
        </div>

        {/* Document Viewer Section */}
        <div className="mt-12">
       
          <div className="flex justify-center">
            {isClient && (
              <div className="w-full max-w-4xl">
                <Document
                  file={`/schedule/${locale === 'fr' ? 'OFFICIEL_STATEMENT_OF_NECC_PROGRAM_CACHET_FR_0001.pdf' : 'OFFICIEL_STATEMENT_OF_NECC_PROGRAM_CACHET_ENG_0001.pdf'}`}
                  className="flex justify-center"
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page 
                    pageNumber={pageNumber} 
                    className="border border-gray-300 mx-auto p-3 rounded-lg"
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    width={pdfWidth}
                  />
                </Document>
                
                  {numPages && numPages > 1 && (
                    <div className="flex justify-center mt-6">
                      <nav aria-label="Page navigation">
                        <div className="inline-flex rounded-lg shadow-sm -space-x-px" role="group">
                          <button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                            className="inline-flex items-center justify-center text-gray-600 bg-gray-100 rounded-l-lg border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 leading-5 w-9 h-9 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7"/>
                            </svg>
                          </button>
                          
                          <button 
                            type="button" 
                            className="inline-flex shrink-0 text-sm items-center justify-center text-gray-600 bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:text-gray-900 leading-5 px-3 h-9 focus:outline-none"
                            disabled
                          >
                            {pageNumber} {locale === 'fr' ? 'sur' : 'of'} {numPages}
                          </button>
                          
                          <button
                            type="button"
                            disabled={pageNumber >= (numPages || 1)}
                            onClick={nextPage}
                            className="inline-flex items-center justify-center text-gray-600 bg-gray-100 rounded-r-lg border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 leading-5 w-9 h-9 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7"/>
                            </svg>
                          </button>
                        </div>
                      </nav>
                    </div>
                  )}
              </div>
            )}
            {!isClient && (
              <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 w-full max-w-4xl">
                <div className="text-center text-gray-600">Loading PDF...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
