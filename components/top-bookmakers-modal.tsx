"use client"

import { X } from "lucide-react"
import { topBookmakers } from "@/data/bookmakers"
import Image from "next/image"

interface TopBookmakersModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TopBookmakersModal({ isOpen, onClose }: TopBookmakersModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-deep-black border border-neon-glow-green rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-neon-glow-green/30">
          <h2 className="text-2xl font-bold text-white">Top 3 Irish Bookmakers</h2>
          <button onClick={onClose} className="text-gray-text hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {topBookmakers.map((bookmaker) => (
              <div
                key={bookmaker.id}
                className="bg-light-mint/5 border border-neon-glow-green/20 rounded-lg p-4 text-center"
              >
                <Image
                  src={bookmaker.logo || "/placeholder.svg"}
                  alt={bookmaker.name}
                  width={100}
                  height={50}
                  className="mx-auto mb-3"
                />
                <h3 className="text-lg font-semibold text-white mb-2">{bookmaker.name}</h3>
                <p className="text-orange-accent text-sm font-medium mb-3">{bookmaker.bonus}</p>
                <a
                  href={bookmaker.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-green hover:bg-primary-green/80 text-white px-4 py-2 rounded text-sm font-semibold transition-colors inline-block"
                >
                  Visit Site
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-text text-sm">18+ only. Terms and conditions apply. Please gamble responsibly.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
