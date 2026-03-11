'use client'

import { ArrowRight } from 'lucide-react'

export default function PhotoGallery() {

  return (
    <section className="relative bg-[#eff2f8]  py-24 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            Photo Gallery
          </h2>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Images from recent papal activities and preparations
          </p>
        </div>

        {/* Gallery Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Video Section - Left */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
              <div className="relative aspect-[4/3]">
                {/* YouTube Video */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/03pYP2Nmreo"
                  title="Papal Visit Preparations"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Image Section - Right */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
              <div className="relative aspect-[4/3]">
                {/* Vatican/Pope Image */}
                <img 
                  src="/hero.webp"
                  alt="Papal Activities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* View Galleries Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 md:gap-3 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="text-sm md:text-base">View Galleries</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
