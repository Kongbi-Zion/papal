'use client'

import { Heart, Users, Globe, Shield, Home } from 'lucide-react'

export default function SpiritualResources() {
  const spiritualReferences = [
    {
      id: 1,
      title: "Unity in Christ",
      verse: "That they may all be one, as you, Father, are in me and I in you.",
      reference: "John 17:21",
      description: "This verse, chosen as the motto of the visit, calls the Church and the nation of Cameroon to deepen unity—across cultures, languages, and communities—through faith in Christ.",
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: "Hope for a Nation Seeking Peace",
      verse: "May the God of hope fill you with all joy and peace in believing.",
      reference: "Romans 15:13",
      description: "In a time when parts of Cameroonian society face tensions and uncertainty, the Pope's visit is a call to renew hope rooted in faith and trust in God's promise of peace.",
      icon: Heart,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      title: "Reconciliation and Healing",
      verse: "God… has given us the ministry of reconciliation.",
      reference: "2 Corinthians 5:18–19",
      description: "The visit encourages all people—Christians and people of goodwill—to become agents of reconciliation and healing in their communities.",
      icon: Shield,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 4,
      title: "Missionary Witness",
      verse: "Go therefore and make disciples of all nations.",
      reference: "Matthew 28:19–20",
      description: "Cameroon, often described as 'Africa in miniature,' reflects the richness of cultures and traditions. The Church is called to bear witness to the Gospel in every corner of society.",
      icon: Globe,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 5,
      title: "Solidarity with the Poor and Vulnerable",
      verse: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me.",
      reference: "Matthew 25:40",
      description: "The Pope's visit highlights the Church's mission of compassion, justice, and service, especially toward the poor, displaced persons, and those affected by conflict.",
      icon: Users,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 6,
      title: "The Church as a Family",
      verse: "Make every effort to keep the unity of the Spirit through the bond of peace.",
      reference: "Ephesians 4:3–6",
      description: "Inspired by the vision of the Church as the Family of God in Africa, this message calls Cameroonians to live fraternity, solidarity, and mutual respect.",
      icon: Home,
      color: 'bg-indigo-100 text-indigo-600'
    }
  ]

  return (
    <div className="min-h-screen bg-[#eff2f8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            Spiritual References
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Spiritual References Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {spiritualReferences.map((reference) => {
            const Icon = reference.icon
            return (
              <div
                key={reference.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${reference.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary font-crimson-text mb-4 text-center">
                    {reference.title}
                  </h3>

                  {/* Verse */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 text-center">
                    <p className="text-lg font-medium text-gray-900 italic">
                      "{reference.verse}"
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {reference.reference}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-center">
                    {reference.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
