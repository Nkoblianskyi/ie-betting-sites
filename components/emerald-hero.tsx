"use client"

import { useState } from "react"
import { ExternalLink, TrendingUp, Award } from "lucide-react"
import { topBookmakers } from "@/data/bookmakers"
import Image from "next/image"

export function EmeraldHero() {
  const [todaysOffer] = useState(topBookmakers[0]) // BoyleSports as today's offer

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-green via-forest-green to-deep-graphite overflow-hidden">
      {/* Emerald Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-glow rounded-full blur-3xl animate-emerald-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-glow rounded-full blur-3xl animate-emerald-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image src={"/ireland.png"} alt="Ireland Flag" width={32} height={32} />
                <span className="font-semibold text-white">Ireland's Most Trusted Betting Platform</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Find Your Perfect
                <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text">
                  Betting Site
                </span>
              </h1>

              <p className="text-xl text-white leading-relaxed max-w-lg">
                Independent reviews. Verified bonuses.
                <span className="text-yellow-300 font-semibold">
                  {" "}
                  Rankings updated {new Date().toLocaleDateString("en-IE", { month: "2-digit", year: "numeric" })}.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                🍀 Gamble Responsibly
              </button>
              <a
                href="#rankings"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("rankings")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-12 py-6 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-block text-center"
              >
                View Full List
              </a>
            </div>

            <div className="flex items-center space-x-6 text-white">
              <div className="flex items-center space-x-2">
                <TrendingUp size={20} className="text-yellow-300" />
                <span className="font-medium">Updated Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={20} className="text-yellow-300" />
                <span className="font-medium">Expert Verified</span>
              </div>
            </div>
          </div>

          {/* Right Side - Today's Best Offer */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-30 animate-pulse" />

              <a
                href={todaysOffer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative bg-gray-900/95 backdrop-blur-sm border-2 border-yellow-400/50 rounded-2xl p-8 max-w-md hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-4">
                    <span className="text-2xl animate-bounce">⭐</span>
                    <span className="font-bold text-lg">Today's Best Offer</span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <Image
                        src={todaysOffer.logo || "/placeholder.svg"}
                        alt={todaysOffer.name}
                        width={140}
                        height={70}
                        className="mx-auto filter brightness-110"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white">{todaysOffer.name}</h3>

                    <div className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-6 rounded-xl shadow-lg border-2 border-yellow-400">
                      <p className="text-xl font-bold leading-tight text-center">{todaysOffer.bonus}</p>
                    </div>

                    <div className="bg-gray-800/80 backdrop-blur-sm border-2 border-yellow-400/60 rounded-xl p-6 hover:shadow-lg transition-all">
                      <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full shadow-lg font-bold">
                        #1 Ranked
                      </div>

                      <div className="flex items-center justify-center space-x-2 mb-3">
                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span
                              key={i}
                              className={`text-3xl transition-all duration-300 ${i < Math.floor(todaysOffer.rating) ? "text-yellow-400 animate-pulse" : "text-gray-600"
                                }`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-yellow-400 font-bold text-2xl text-center">
                        {todaysOffer.rating}/5 <span className="text-white text-lg">Rating</span>
                      </p>
                    </div>

                    <div className="text-center space-y-3">
                      <p className="text-yellow-400 font-bold text-xl">
                        📞 <span className="text-white">{todaysOffer.calls.toLocaleString()}</span> Irish Players
                      </p>
                      <p className="text-green-400 font-semibold">🛡️ Fully Licensed in Ireland</p>
                    </div>

                    <div className="w-full bg-green-600 hover:bg-green-500 text-white px-8 py-5 rounded-xl font-bold text-xl transition-all shadow-lg inline-flex items-center justify-center group border-2 border-green-400">
                      👉 Claim Bonus
                      <ExternalLink
                        size={24}
                        className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-xs text-gray-300">
                    18+ |{" "}
                    <span className="underline text-orange-400 hover:text-yellow-400 transition-colors">
                      Terms Apply
                    </span>{" "}
                    |
                    <span className="underline text-green-400 hover:text-yellow-400 transition-colors ml-1">
                      GambleAware.org
                    </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
