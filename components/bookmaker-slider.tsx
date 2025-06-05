"use client"

import Image from "next/image"
import { Star, Phone, ExternalLink } from "lucide-react"
import { bookmakers } from "@/data/bookmakers"

export function BookmakerSlider() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={14} className={i < Math.floor(rating) ? "fill-gold-glow text-gold-glow" : "text-gray-400"} />
    ))
  }

  return (
    <section id="rankings" className="py-16 bg-gradient-to-b from-rich-graphite to-rich-graphite/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-green/20 backdrop-blur-sm px-6 py-2 rounded-full border border-emerald-green/30">
              <span className="text-emerald-green font-semibold shamrock-icon">Top Irish Bookmakers</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">
            Complete Bookmaker
            <span className="text-transparent bg-gradient-to-r from-emerald-green to-sunset-orange bg-clip-text">
              {" "}
              List
            </span>
          </h2>
          <p className="text-clover-mint max-w-2xl mx-auto">
            Browse our carefully curated selection of Ireland's most trusted betting platforms
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {bookmakers.map((bookmaker, index) => (
            <a
              key={bookmaker.id}
              href={bookmaker.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-rich-graphite/60 backdrop-blur-sm border-2 border-emerald-green/30 rounded-2xl p-4 md:p-6 hover:border-emerald-green/60 hover:shadow-emerald transition-all duration-500 w-full block hover:scale-105 cursor-pointer"
            >
              {/* Rank Badge */}
              <div
                className={`absolute -top-3 -left-3 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold shadow-lg border-2 border-white text-sm md:text-base ${
                  index === 0
                    ? "bg-yellow-600 text-white"
                    : index === 1
                      ? "bg-gray-500 text-white"
                      : index === 2
                        ? "bg-orange-700 text-white"
                        : "bg-gray-700 text-white"
                }`}
              >
                #{index + 1}
              </div>

              {/* Featured Badge */}
              {index === 0 && (
                <div className="absolute -top-3 right-4 bg-yellow-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg border-2 border-yellow-700">
                  🏆 TOP PICK
                </div>
              )}

              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="text-center space-y-3 pt-4">
                  <div className="bg-clover-mint/10 rounded-xl p-3 backdrop-blur-sm mx-auto w-fit">
                    <Image
                      src={bookmaker.logo || "/placeholder.svg"}
                      alt={bookmaker.name}
                      width={100}
                      height={50}
                      className="filter brightness-110"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-soft-white">{bookmaker.name}</h3>

                  <div className="bg-gradient-to-r from-green-700 to-yellow-600 text-white px-4 py-3 rounded-xl shadow-lg border-2 border-green-600">
                    <p className="font-bold text-sm leading-tight text-center">
                      🎁 <span className="text-yellow-300 font-bold">Bet €10</span> →
                      <span className="text-white font-bold">Get €30</span>
                      <span className="text-yellow-300"> + €10 Casino</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="bg-rich-graphite/60 border border-emerald-green/40 rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {renderStars(bookmaker.rating).map((star, i) => (
                            <span
                              key={i}
                              className="text-lg text-gold-glow animate-pulse"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                        <span className="text-emerald-green font-bold text-base">{bookmaker.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center text-clover-mint font-semibold text-sm">
                    <Phone size={14} className="mr-2 text-emerald-green" />
                    <span className="text-gold-glow">{bookmaker.calls.toLocaleString()}</span>
                    <span className="ml-1">Irish Players</span>
                  </div>

                  <div
                    className="w-full bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold text-base transition-all inline-flex items-center justify-center group border-2 border-green-500 shadow-lg"
                    style={{
                      backgroundColor: "#059669",
                      boxShadow: "0 0 15px #059669",
                    }}
                  >
                    👉 Claim Bonus
                    <ExternalLink
                      size={16}
                      className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop/Tablet Layout */}
              <div className="hidden md:flex items-center gap-6">
                <div className="bg-clover-mint/10 rounded-xl p-4 backdrop-blur-sm flex-shrink-0">
                  <Image
                    src={bookmaker.logo || "/placeholder.svg"}
                    alt={bookmaker.name}
                    width={120}
                    height={60}
                    className="filter brightness-110"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-soft-white">{bookmaker.name}</h3>

                  <div className="bg-gradient-to-r from-green-700 to-yellow-600 text-white px-6 py-4 rounded-xl shadow-lg border-2 border-green-600">
                    <p className="font-bold text-lg leading-tight text-center">
                      🎁 <span className="text-yellow-300 font-bold">Bet €10</span> →
                      <span className="text-white font-bold">Get €30</span>
                      <span className="text-yellow-300"> + €10 Casino Bonus</span>
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-rich-graphite/60 border border-emerald-green/40 rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {renderStars(bookmaker.rating).map((star, i) => (
                            <span
                              key={i}
                              className="text-xl text-gold-glow animate-pulse"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                        <span className="text-emerald-green font-bold text-lg">{bookmaker.rating}/5</span>
                      </div>
                    </div>

                    <div className="flex items-center text-clover-mint font-semibold">
                      <Phone size={16} className="mr-2 text-emerald-green" />
                      <span className="text-gold-glow">{bookmaker.calls.toLocaleString()}</span>
                      <span className="ml-1">Irish Players</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div
                    className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all inline-flex items-center group border-2 border-green-500 shadow-lg"
                    style={{
                      backgroundColor: "#059669",
                      boxShadow: "0 0 15px #059669",
                    }}
                  >
                    👉 Claim Bonus
                    <ExternalLink
                      size={18}
                      className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
