"use client"

import { X, ExternalLink } from "lucide-react"
import { topBookmakers } from "@/data/bookmakers"
import Image from "next/image"

interface IrishModalProps {
  isOpen: boolean
  onClose: () => void
}

export function IrishModal({ isOpen, onClose }: IrishModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-deep-graphite/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="irish-gradient border-2 celtic-border rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-shamrock">
        <div className="flex justify-between items-center p-8 border-b border-emerald-glow/30">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🍀</span>
            <h2 className="text-3xl font-celtic font-bold text-pure-white">Ireland's Top Certified Sites</h2>
          </div>
          <button
            onClick={onClose}
            className="text-pale-mint hover:text-pure-white transition-colors p-2 hover:bg-forest-green/50 rounded-full"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {topBookmakers.map((bookmaker, index) => (
              <div
                key={bookmaker.id}
                className="bg-forest-green/40 backdrop-blur-sm border celtic-border rounded-xl p-6 text-center hover:shadow-shamrock transition-all"
              >
                <div className="relative mb-4">
                  <div className="bg-pure-white/10 rounded-lg p-4">
                    <Image
                      src={bookmaker.logo || "/placeholder.svg"}
                      alt={bookmaker.name}
                      width={120}
                      height={60}
                      className="mx-auto"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-irish-orange text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-celtic font-bold text-pure-white mb-3">{bookmaker.name}</h3>

                <div className="bg-gradient-to-r from-irish-orange to-warm-gold text-white px-3 py-2 rounded-lg mb-4">
                  <p className="text-sm font-bold">{bookmaker.bonus}</p>
                </div>

                <div className="text-pale-mint text-sm mb-4">⭐ {bookmaker.rating}/5 • 🇮🇪 Irish Licensed</div>

                <a
                  href={bookmaker.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-shamrock-green hover:bg-emerald-glow text-white px-4 py-3 rounded-lg font-bold transition-all shadow-shamrock inline-flex items-center"
                >
                  Visit Site
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-forest-green/30 border celtic-border rounded-xl p-6">
              <p className="text-pale-mint text-sm">
                <span className="text-irish-orange font-bold">⚠️ Important:</span> 18+ only. Terms and conditions apply.
                Licensed operators only. Please gamble responsibly -
                <span className="text-emerald-glow font-semibold"> gambling can be addictive</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
