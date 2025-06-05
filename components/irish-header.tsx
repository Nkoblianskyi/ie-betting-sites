"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Shield } from "lucide-react"

export function IrishHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-forest-green/95 backdrop-blur-md border-b-2 border-emerald-glow/30 sticky top-0 z-50 shadow-shamrock">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-shamrock-green rounded-full flex items-center justify-center shadow-shamrock group-hover:animate-shamrock-glow">
                <span className="text-2xl">🍀</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-irish-orange rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">IE</span>
              </div>
            </div>
            <div>
              <span className="text-pure-white font-celtic font-bold text-xl block">IrishBetting</span>
              <span className="text-emerald-glow text-sm font-medium">Top Sites</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#bonuses"
              className="text-pale-mint hover:text-emerald-glow transition-colors font-medium flex items-center"
            >
              <span className="mr-2">🍀</span>
              Bonuses
            </Link>
            <Link href="#rankings" className="text-pale-mint hover:text-emerald-glow transition-colors font-medium">
              Rankings
            </Link>
            <Link href="/privacy" className="text-pale-mint hover:text-emerald-glow transition-colors font-medium">
              Privacy
            </Link>
            <Link href="/responsible" className="text-pale-mint hover:text-emerald-glow transition-colors font-medium">
              Safe Gaming
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="bg-irish-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-irish-orange animate-irish-pulse">
              18+ Only
            </div>
            <div className="hidden md:flex items-center space-x-2 text-pale-mint">
              <Shield size={16} className="text-emerald-glow" />
              <span className="text-sm font-medium">Licensed & Secure</span>
            </div>
            <button className="md:hidden text-pure-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-emerald-glow/20">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#bonuses"
                className="text-pale-mint hover:text-emerald-glow transition-colors font-medium flex items-center"
              >
                <span className="mr-2">🍀</span>
                Best Bonuses
              </Link>
              <Link href="#rankings" className="text-pale-mint hover:text-emerald-glow transition-colors font-medium">
                Site Rankings
              </Link>
              <Link href="/privacy" className="text-pale-mint hover:text-emerald-glow transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link
                href="/responsible"
                className="text-pale-mint hover:text-emerald-glow transition-colors font-medium"
              >
                Responsible Gaming
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
