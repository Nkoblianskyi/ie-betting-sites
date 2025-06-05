"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { bookmakers } from "@/data/bookmakers"

export function DelayedModal() {
  const [isVisible, setIsVisible] = useState(false)
  const topThreeSites = bookmakers.slice(0, 3)

  useEffect(() => {
    // Show modal after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Prevent background scrolling when modal is open
      document.body.style.overflow = "hidden"
    }, 8000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    setIsVisible(false)
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = "auto"
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md md:max-w-2xl rounded-xl overflow-hidden border-2 border-yellow-400">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 md:p-6">
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl mr-2">🍀</span>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold text-black">Ireland's TopBetting Sites</h2>
              <p className="text-black/80 text-sm md:text-base">Exclusive bonuses for Irish players</p>
            </div>
            <button onClick={closeModal} className="bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all">
              <X size={20} className="text-white md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Content - Dark green background */}
        <div className="bg-green-900 p-3 md:p-6">
          <div className="grid grid-cols-3 gap-2 md:gap-4 items-stretch">
            {topThreeSites.map((site, index) => (
              <div
                key={site.id}
                className="bg-green-800 border border-green-700 rounded-lg overflow-hidden flex flex-col h-full"
              >
                {/* Top section with badge and logo */}
                <div className="relative">
                  {/* Rank badge - positioned outside the logo area */}
                  <div
                    className={`absolute -top-1 -left-1 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-bold text-white text-xs md:text-sm z-10 rounded-full ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-yellow-500" : "bg-orange-500"
                      }`}
                  >
                    #{index + 1}
                  </div>

                  {/* Logo container */}
                  <div className="bg-gray-800 p-3 md:p-4 h-16 md:h-20 flex items-center justify-center">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={site.name}
                      width={70}
                      height={35}
                      className="max-w-full max-h-full object-contain md:w-24 md:h-12"
                    />
                  </div>
                </div>

                {/* Site name */}
                <div className="px-2 py-1 md:px-3 md:py-2 text-center">
                  <h3 className="text-sm md:text-base font-bold text-white">{site.name}</h3>
                </div>

                {/* Bonus - фіксована висота для всіх карток */}
                <div className="bg-green-600 text-white p-2 md:p-3 text-xs md:text-sm font-bold text-center h-16 md:h-20 flex items-center justify-center">
                  {site.id === 1 && (
                    <div className="leading-tight">
                      Bet €10 Get €30 +<br />
                      €10 Casino Bonus
                    </div>
                  )}
                  {site.id === 2 && (
                    <div className="leading-tight">
                      Bet €10 Get €20 + 50
                      <br />
                      Free Spins
                    </div>
                  )}
                  {site.id === 3 && (
                    <div className="leading-tight">
                      Bet €10
                      <br />
                      Get €50
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="px-2 py-1 md:px-3 md:py-2 flex justify-center">
                  <div className="flex items-center">
                    {[1, 2, 3, 4].map((star) => (
                      <span key={star} className="text-yellow-400 text-sm md:text-base">
                        ★
                      </span>
                    ))}
                    <span className="text-gray-400 text-sm md:text-base">★</span>
                    <span className="text-white text-xs md:text-sm font-bold ml-1">4.9</span>
                  </div>
                </div>

                {/* CTA Button - завжди внизу картки */}
                <div className="p-2 md:p-3 mt-auto">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-500 text-white py-2 md:py-3 rounded text-sm md:text-base font-bold transition-all text-center"
                  >
                    Claim Bonus
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-3 md:mt-5 bg-green-900 border border-green-700 rounded-lg p-3 md:p-4">
            <p className="text-center text-xs md:text-sm text-white">
              <span className="text-orange-400 font-bold">⚠️ 18+ Only</span> | T&Cs Apply |{" "}
              <span className="text-green-400">Licensed for Irish Players</span>
            </p>
            <p className="text-center text-xs md:text-sm text-white mt-1 md:mt-2">
              Please gamble responsibly - visit{" "}
              <a href="https://www.begambleaware.org" className="text-yellow-400 underline">
                BeGambleAware.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
