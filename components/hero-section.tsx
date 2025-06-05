"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Phone, ExternalLink } from "lucide-react"
import { topBookmakers } from "@/data/bookmakers"
import { TopBookmakersModal } from "./top-bookmakers-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const currentDate = new Date().toLocaleDateString("en-IE", {
    year: "numeric",
    month: "long",
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? "fill-orange-accent text-orange-accent" : "text-gray-400"}
      />
    ))
  }

  return (
    <section className="bg-gradient-to-b from-deep-black to-deep-black/95 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Top Irish Bookmakers</h1>
          <p className="text-xl text-neon-glow-green mb-2">Updated {currentDate}</p>
          <p className="text-lg text-gray-text mb-6 max-w-2xl mx-auto">
            We've tested and ranked the most trusted betting sites in Ireland. Here are our top 3 picks!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-accent hover:bg-orange-accent/80 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              18+ | Gamble Responsibly
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-neon-glow-green text-neon-glow-green hover:bg-neon-glow-green hover:text-deep-black px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Terms & Conditions apply
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topBookmakers.map((bookmaker, index) => (
            <div
              key={bookmaker.id}
              className="bg-light-mint/10 border border-neon-glow-green/30 rounded-xl p-6 hover:shadow-neon-green transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="mb-4">
                  <Image
                    src={bookmaker.logo || "/placeholder.svg"}
                    alt={bookmaker.name}
                    width={120}
                    height={60}
                    className="mx-auto"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{bookmaker.name}</h3>

                <div className="bg-orange-accent text-white px-3 py-2 rounded-lg mb-4 animate-glow">
                  <p className="text-sm font-semibold">{bookmaker.bonus}</p>
                </div>

                <div className="flex justify-center mb-2">
                  {renderStars(bookmaker.rating)}
                  <span className="ml-2 text-white font-semibold">{bookmaker.rating}</span>
                </div>

                <div className="flex items-center justify-center text-gray-text text-sm mb-4">
                  <Phone size={14} className="mr-1" />
                  <span>{bookmaker.calls.toLocaleString()} calls</span>
                </div>

                <a
                  href={bookmaker.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-green hover:bg-primary-green/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Claim Bonus
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-text text-sm">
            Gambling can be addictive. Please play responsibly. Visit{" "}
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-glow-green hover:underline"
            >
              begambleaware.org
            </a>{" "}
            for help and support.
          </p>
        </div>
      </div>

      <TopBookmakersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
