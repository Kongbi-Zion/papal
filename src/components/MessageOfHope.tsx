'use client'

export default function MessageOfHope() {
  return (
    <section className="relative bg-linear-to-b from-gray-50 to-white py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
            A Message of Hope
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans">
                Historic Visit
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The historic visit of His Holiness Pope Leo XIV to Cameroon marks a pivotal moment for both the nation and the African continent. As a &quot;Message of Hope,&quot; this journey seeks to strengthen the bonds of faith and provide spiritual guidance in a rapidly changing world.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-yellow-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans">
                Unity & Harmony
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                For Cameroonians, the presence of the Holy Father is a testament to the country&apos;s vibrant Catholic heritage and its role as a beacon of religious harmony. This visit transcends religious boundaries, offering a call for peace, reconciliation, and social justice across the region.
              </p>
            </div>
          </div>

          {/* Right Column - Impact & Future */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans">
                Community Engagement
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Throughout his stay, the Pope will engage with diverse communities, emphasizing the importance of youth empowerment, environmental stewardship, and the preservation of cultural dignity.
              </p>
            </div>
            
            <div className="bg-linear-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans">
                Lasting Legacy
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                His words are expected to resonate deeply within the hearts of millions, inspiring a renewed commitment to the common good and the spiritual upliftment of all Africans. This pilgrimage is not just a visit, but a transformative spiritual encounter that unites us in a shared vision of brotherhood and compassion.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-yellow-600 font-medium text-lg">
            <span>Join us in this momentous occasion</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
