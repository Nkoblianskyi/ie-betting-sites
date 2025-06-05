"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Shield } from "lucide-react"
import Image from "next/image"

export function FloatingHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-rich-graphite/95 backdrop-blur-md shadow-emerald" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-emerald-green rounded-full flex items-center justify-center shadow-emerald group-hover:animate-emerald-pulse">
                <span className="text-lg">🍀</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-soft-white font-bold text-lg">IeTopBettingSites</span>

            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#rankings"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById("rankings")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="text-clover-mint hover:text-emerald-green transition-colors font-medium cursor-pointer"
            >
              Rankings
            </a>
            <a
              href="#bonuses"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById("bonuses")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="text-clover-mint hover:text-emerald-green transition-colors font-medium cursor-pointer"
            >
              Bonuses
            </a>
            <Link href="/privacy" className="text-clover-mint hover:text-emerald-green transition-colors font-medium">
              Privacy
            </Link>
            <Link
              href="/responsible-gambling"
              className="text-clover-mint hover:text-emerald-green transition-colors font-medium"
            >
              Safe Gaming
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <div className="bg-sunset-orange text-soft-white px-3 py-1 rounded-full text-sm font-bold shadow-sunset-glow animate-neon-flicker">
              18+
            </div>
            <div className="hidden md:flex items-center space-x-1 text-clover-mint text-sm">
              <Shield size={14} className="text-emerald-green" />
              
              <span>Licensed</span>
              <Image src="/ireland.png" alt="IE" width={14} height={14} />
            </div>
            <button className="md:hidden text-soft-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-green/20">
            <nav className="flex flex-col space-y-3">
              <a
                href="#rankings"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("rankings")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                  setIsMenuOpen(false)
                }}
                className="text-clover-mint hover:text-emerald-green transition-colors cursor-pointer"
              >
                Rankings
              </a>
              <a
                href="#bonuses"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("bonuses")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                  setIsMenuOpen(false)
                }}
                className="text-clover-mint hover:text-emerald-green transition-colors cursor-pointer"
              >
                Bonuses
              </a>
              <Link href="/privacy" className="text-clover-mint hover:text-emerald-green transition-colors">
                Privacy
              </Link>
              <Link
                href="/responsible-gambling"
                className="text-clover-mint hover:text-emerald-green transition-colors"
              >
                Safe Gaming
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
