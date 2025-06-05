"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Phone, ExternalLink, Award, TrendingUp } from "lucide-react"
import { topBookmakers } from "@/data/bookmakers"
import { IrishModal } from "./irish-modal"

export function IrishHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const currentDate = new Date().toLocaleDateString("en-IE", {
    year: "numeric",
    month: "long",
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={18} className={i < Math.floor(rating) ? "fill-warm-gold text-warm-gold" : "text-gray-400"} />
    ))
  }

  return (
    <section className="relative min-h-screen irish-gradient overflow-hidden">
      {/* Irish Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("/hero.jpg")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Shamrock Glow Effects */}
      <div className="absolute top-20 left-10 w-32 h-32 shamrock-glow rounded-full blur-3xl animate-shamrock-glow" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 shamrock-glow rounded-full blur-3xl animate-shamrock-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          {/* Irish Flag Accent */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-forest-green/50 backdrop-blur-sm px-6 py-3 rounded-full border celtic-border">
              <span className="text-2xl">🇮🇪</span>
              <span className="text-emerald-glow font-semibold">Trusted in Ireland</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-celtic font-bold text-pure-white mb-6 leading-tight">
            Ireland's Premier
            <span className="block text-transparent bg-gradient-to-r from-shamrock-green to-emerald-glow bg-clip-text">
              Betting Sites
            </span>
          </h1>

          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2 text-warm-gold">
              <TrendingUp size={20} />
              <span className="font-semibold">Updated {currentDate}</span>
            </div>
            <div className="w-2 h-2 bg-irish-orange rounded-full animate-irish-pulse" />
            <div className="flex items-center space-x-2 text-pale-mint">
              <Award size={20} className="text-emerald-glow" />
              <span className="font-semibold">Expert Tested</span>
            </div>
          </div>

          <p className="text-xl text-pale-mint mb-8 max-w-3xl mx-auto leading-relaxed">
            We've rigorously tested Ireland's most trusted betting platforms.
            <span className="text-emerald-glow font-semibold"> Here are our top 3 certified picks</span>
            for Irish punters in 2025.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-irish-orange hover:bg-irish-orange/80 text-white px-6 py-3 rounded-full font-bold shadow-irish-orange hover:shadow-lg transition-all shamrock-icon"
            >
              18+ Gamble Responsibly
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="border-2 border-emerald-glow text-emerald-glow hover:bg-emerald-glow hover:text-deep-graphite px-6 py-3 rounded-full font-bold transition-all"
            >
              Terms & Conditions Apply
            </button>
          </div>
        </div>

        {/* Top 3 Irish Bookmakers */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {topBookmakers.map((bookmaker, index) => (
            <div
              key={bookmaker.id}
              className="group relative bg-forest-green/60 backdrop-blur-sm border-2 celtic-border rounded-2xl p-8 hover:shadow-shamrock transition-all duration-500 hover:scale-105 irish-glow"
            >
              {/* Rank Badge */}
              <div className="absolute -top-4 left-6 bg-irish-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-irish-orange">
                #{index + 1}
              </div>

              {/* Top Pick Badge */}
              {index === 0 && (
                <div className="absolute -top-4 right-6 bg-warm-gold text-deep-graphite px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  🏆 TOP PICK
                </div>
              )}

              <div className="text-center">
                <div className="mb-6 p-4 bg-pure-white/10 rounded-xl backdrop-blur-sm">
                  <Image
                    src={bookmaker.logo || "/placeholder.svg"}
                    alt={bookmaker.name}
                    width={140}
                    height={70}
                    className="mx-auto filter brightness-110"
                  />
                </div>

                <h3 className="text-2xl font-celtic font-bold text-pure-white mb-4">{bookmaker.name}</h3>

                <div className="bg-gradient-to-r from-irish-orange to-warm-gold text-white px-4 py-3 rounded-xl mb-6 shadow-irish-orange animate-shamrock-glow">
                  <p className="font-bold text-sm leading-tight">{bookmaker.bonus}</p>
                </div>

                <div className="flex justify-center items-center mb-3">
                  {renderStars(bookmaker.rating)}
                  <span className="ml-3 text-pure-white font-bold text-lg">{bookmaker.rating}</span>
                </div>

                <div className="flex items-center justify-center text-pale-mint text-sm mb-6">
                  <Phone size={16} className="mr-2 text-emerald-glow" />
                  <span className="font-semibold">{bookmaker.calls.toLocaleString()} Irish customers</span>
                </div>

                <a
                  href={bookmaker.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-shamrock-green hover:bg-emerald-glow text-white px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-shamrock hover:shadow-emerald group-hover:animate-irish-pulse inline-flex items-center justify-center"
                >
                  Claim Irish Bonus
                  <ExternalLink size={20} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-forest-green/40 backdrop-blur-sm border celtic-border rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-pale-mint text-sm leading-relaxed">
              <span className="text-emerald-glow font-semibold">🛡️ Licensed & Regulated:</span> All recommended sites are
              fully licensed for Irish players. Gambling can be addictive - please play responsibly. Visit{" "}
              <a
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gold hover:text-irish-orange font-semibold underline transition-colors"
              >
                BeGambleAware.org
              </a>{" "}
              for support.
            </p>
          </div>
        </div>
      </div>

      <IrishModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
