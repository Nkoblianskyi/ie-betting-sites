"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-deep-black/95 backdrop-blur-sm border-t border-neon-glow-green/30 p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-white text-sm">
              We use cookies to improve your experience. Learn more in our{" "}
              <Link href="/cookie-policy" className="text-neon-glow-green hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleAccept}
              className="bg-primary-green hover:bg-primary-green/80 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
