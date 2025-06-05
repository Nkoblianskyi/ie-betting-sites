import Image from "next/image"
import { ExternalLink, Zap } from "lucide-react"
import { bookmakers } from "@/data/bookmakers"

export function TodaysTopOffer() {
  const topOffer = bookmakers[0] // BoyleSports as today's top offer

  return (
    <section className="py-16 bg-deep-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <Zap size={32} className="text-orange-accent mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Today's Top Offer</h2>
            </div>
            <p className="text-lg text-gray-text">Don't miss out on this exclusive limited-time bonus</p>
          </div>

          <div className="bg-gradient-to-r from-primary-green/20 to-neon-glow-green/20 border-2 border-neon-glow-green rounded-2xl p-8 text-center animate-glow">
            <div className="mb-6">
              <Image
                src={topOffer.logo || "/placeholder.svg"}
                alt={topOffer.name}
                width={200}
                height={100}
                className="mx-auto"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{topOffer.name}</h3>

            <div className="bg-orange-accent text-white px-6 py-4 rounded-xl mb-6 inline-block">
              <p className="text-lg md:text-xl font-bold">{topOffer.bonus}</p>
            </div>

            <p className="text-gray-text mb-6">
              Rated {topOffer.rating}/5 stars • {topOffer.calls.toLocaleString()} satisfied customers
            </p>

            <a
              href={topOffer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-green hover:bg-primary-green/80 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors inline-flex items-center"
            >
              Claim This Offer Now
              <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
