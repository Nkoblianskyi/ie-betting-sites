"use client"

import { useEffect } from "react"
import { FloatingHeader } from "@/components/floating-header"
import { EmeraldHero } from "@/components/emerald-hero"
import { BookmakerSlider } from "@/components/bookmaker-slider"
import { IrishTrustSection } from "@/components/irish-trust-section"
import { BestBonuses } from "@/components/best-bonuses"
import { RankingMethodology } from "@/components/ranking-methodology"
import { ResponsibleGambling } from "@/components/responsible-gambling"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { DelayedModal } from "@/components/delayed-modal"

export default function Home() {
  useEffect(() => {
    // Check if it's a mobile device and scroll to rankings
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      setTimeout(() => {
        const element = document.getElementById("rankings")
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 1) // Small delay to ensure page is loaded
    }
  }, [])

  return (
    <div className="min-h-screen irish-emerald-gradient">
      <FloatingHeader />
      <EmeraldHero />
      <BookmakerSlider />
      <IrishTrustSection />
      <BestBonuses />
      <RankingMethodology />
      <ResponsibleGambling />
      <Footer />
      <CookieConsent />
      <DelayedModal />
    </div>
  )
}
