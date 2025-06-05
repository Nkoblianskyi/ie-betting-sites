"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ExternalLink, Star } from "lucide-react"
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}
      />
    ))
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,127,95,0.8) 0%, rgba(16,17,18,0.9) 100%)`,
      }}
    >
      <div
        className="relative w-full max-w-5xl rounded-xl sm:rounded-2xl shadow-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(0,80,60,0.95) 0%, rgba(10,15,10,0.98) 100%)",
          border: "3px solid #00C853",
          boxShadow: "0 0 50px rgba(0, 200, 83, 0.5)",
          maxHeight: "calc(100vh - 16px)", // Mobile: fit in viewport
        }}
      >
        {/* Irish Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 20c-8 0-15 7-15 15s7 15 15 15c8 0 15-7 15-15s-7-15-15-15zm-15 30c-8 0-15 7-15 15s7 15 15 15c8 0 15-7 15-15s-7-15-15-15zm30 0c-8 0-15 7-15 15s7 15 15 15c8 0 15-7 15-15s-7-15-15-15zm-15 15v20' stroke='%23009A44' strokeWidth='2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-white bg-black/50 hover:bg-red-600/80 rounded-full p-1.5 md:p-3 z-10 transition-all border border-gray-600"
        >
          <X size={18} className="md:hidden" />
          <X size={24} className="hidden md:block" />
        </button>

        {/* Header */}
        <div
          className="relative text-center p-3 md:p-6 lg:p-8"
          style={{
            background: "linear-gradient(90deg, #00C853 0%, #00A550 50%, #FF9800 100%)",
            borderBottom: "3px solid rgba(255, 215, 0, 0.5)",
          }}
        >
          <div className="flex justify-center items-center mb-1 md:mb-4">
            <span className="text-xl md:text-3xl lg:text-4xl mr-2 md:mr-3">🍀</span>
            <h2 className="text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
              Ireland's Top Betting Sites
            </h2>
          </div>
          <p className="text-white/90 text-xs md:text-base lg:text-lg">Exclusive bonuses for Irish players only</p>
        </div>

        {/* Content */}
        <div className="relative p-2 md:p-6 lg:p-8">
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 md:gap-6">
            {topThreeSites.map((site, index) => (
              <div
                key={site.id}
                className="relative rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-6 transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgba(0,100,70,0.8) 0%, rgba(0,60,40,0.9) 100%)",
                  border: "2px solid rgba(0, 200, 83, 0.4)",
                  boxShadow: "0 0 30px rgba(0, 200, 83, 0.3)",
                }}
              >
                {/* Rank badge */}
                <div
                  className="absolute -top-1 -left-1 md:-top-2 md:-left-2 lg:-top-3 lg:-left-3 w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg text-xs md:text-sm lg:text-base"
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(135deg, #FFD700 0%, #FFA000 100%)"
                        : "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)",
                    border: "3px solid white",
                  }}
                >
                  #{index + 1}
                </div>

                {/* Top Pick Badge */}
                {index === 0 && (
                  <div
                    className="absolute -top-1 right-1 md:-top-2 md:right-2 lg:-top-3 lg:right-4 px-1.5 py-0.5 md:px-2 md:py-1 lg:px-3 lg:py-1 rounded-full text-[10px] md:text-xs lg:text-sm font-bold text-white shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #FFD700 0%, #FFA000 100%)",
                      border: "2px solid white",
                    }}
                  >
                    🏆 <span className="hidden md:inline">TOP PICK</span>
                  </div>
                )}

                <div className="text-center space-y-1.5 md:space-y-3 lg:space-y-4 xl:space-y-6 pt-1 md:pt-2 lg:pt-4">
                  {/* Logo */}
                  <div
                    className="rounded-md md:rounded-lg lg:rounded-xl p-1.5 md:p-3 lg:p-4 mx-auto w-fit"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={site.name}
                      width={70}
                      height={35}
                      className="filter brightness-110 md:w-[100px] md:h-[50px] lg:w-[120px] lg:h-[60px] xl:w-[140px] xl:h-[70px]"
                    />
                  </div>

                  <h3 className="text-xs md:text-lg lg:text-xl xl:text-2xl font-bold text-white truncate md:whitespace-normal">
                    {site.name}
                  </h3>

                  {/* Bonus */}
                  <div
                    className="px-1.5 py-1 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-md md:rounded-lg lg:rounded-xl shadow-lg"
                    style={{
                      background: "linear-gradient(90deg, #FF9800 0%, #FFD700 100%)",
                      boxShadow: "0 0 20px rgba(255, 152, 0, 0.5)",
                      border: "2px solid rgba(255, 215, 0, 0.3)",
                    }}
                  >
                    <p className="font-bold text-black leading-tight text-[10px] md:text-sm lg:text-base truncate md:whitespace-normal">
                      {site.bonus}
                    </p>
                  </div>

                  {/* Rating and Stats */}
                  <div className="space-y-1 md:space-y-2 lg:space-y-3">
                    <div className="flex items-center justify-center">
                      <div className="flex mr-1 md:mr-2 lg:mr-3">{renderStars(site.rating)}</div>
                      <span className="text-white font-bold text-xs md:text-base lg:text-lg">{site.rating}/5</span>
                    </div>
                    <div className="text-gray-300 text-[10px] md:text-sm lg:text-base">
                      📞 <span className="text-green-400 font-semibold">{site.calls.toLocaleString()}</span>{" "}
                      <span className="hidden md:inline">Irish </span>Players
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-2 py-1.5 md:px-4 md:py-3 lg:px-6 lg:py-4 rounded-md md:rounded-lg lg:rounded-xl font-bold text-[10px] md:text-sm lg:text-base xl:text-lg text-white transition-all shadow-lg hover:scale-105"
                    style={{
                      background: "linear-gradient(90deg, #00C853 0%, #00A550 100%)",
                      boxShadow: "0 0 25px rgba(0, 200, 83, 0.5)",
                      border: "2px solid rgba(0, 255, 127, 0.3)",
                    }}
                  >
                    👉 <span className="hidden md:inline">Claim Irish </span>Bonus
                    <ExternalLink size={10} className="ml-1 md:hidden" />
                    <ExternalLink size={16} className="ml-2 hidden md:block lg:hidden" />
                    <ExternalLink size={20} className="ml-2 hidden lg:block" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-2 md:mt-4 lg:mt-6 xl:mt-8 text-center">
            <div
              className="rounded-md md:rounded-lg lg:rounded-xl p-2 md:p-4 lg:p-6 max-w-4xl mx-auto"
              style={{
                background: "rgba(0, 80, 60, 0.4)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 200, 83, 0.3)",
              }}
            >
              <p className="text-gray-300 leading-tight md:leading-relaxed text-[10px] md:text-xs lg:text-sm xl:text-base">
                <span className="text-orange-400 font-bold">⚠️ 18+ Only</span> |{" "}
                <span className="hidden md:inline">Terms & Conditions Apply</span>
                <span className="md:hidden">T&Cs Apply</span> |
                <span className="text-green-400 font-semibold"> Licensed for Irish Players</span> | Please gamble
                responsibly - visit{" "}
                <a
                  href="https://www.begambleaware.org"
                  className="text-yellow-400 hover:text-orange-400 underline font-semibold"
                >
                  <span className="hidden md:inline">BeGambleAware.org</span>
                  <span className="md:hidden">BeGambleAware</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
