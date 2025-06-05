"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-deep-black border-b border-neon-glow-green/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">IE</span>
            </div>
            <span className="text-white font-bold text-xl">IETopBettingSites</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#bonuses" className="text-gray-text hover:text-neon-glow-green transition-colors">
              Bonuses
            </Link>
            <Link href="#rankings" className="text-gray-text hover:text-neon-glow-green transition-colors">
              Rankings
            </Link>
            <Link href="/privacy" className="text-gray-text hover:text-neon-glow-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/responsible-gambling" className="text-gray-text hover:text-neon-glow-green transition-colors">
              Responsible Gambling
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <span className="bg-orange-accent text-white px-3 py-1 rounded-full text-sm font-semibold">18+</span>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neon-glow-green/20">
            <nav className="flex flex-col space-y-4">
              <Link href="#bonuses" className="text-gray-text hover:text-neon-glow-green transition-colors">
                Bonuses
              </Link>
              <Link href="#rankings" className="text-gray-text hover:text-neon-glow-green transition-colors">
                Rankings
              </Link>
              <Link href="/privacy" className="text-gray-text hover:text-neon-glow-green transition-colors">
                Privacy Policy
              </Link>
              <Link
                href="/responsible-gambling"
                className="text-gray-text hover:text-neon-glow-green transition-colors"
              >
                Responsible Gambling
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
