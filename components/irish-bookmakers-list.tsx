import Image from "next/image"
import { Star, Phone, ExternalLink, Shield, Award } from "lucide-react"
import { bookmakers } from "@/data/bookmakers"

export function IrishBookmakersList() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className={i < Math.floor(rating) ? "fill-warm-gold text-warm-gold" : "text-gray-400"} />
    ))
  }

  return (
    <section id="rankings" className="py-20 bg-gradient-to-b from-deep-graphite to-forest-green/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-forest-green/50 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-emerald-glow/30">
              <span className="text-emerald-glow font-semibold flex items-center">
                <span className="mr-2">🍀</span>
                Complete Irish Rankings
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-celtic font-bold text-pure-white mb-6">
            All Trusted Irish
            <span className="block text-transparent bg-gradient-to-r from-shamrock-green to-emerald-glow bg-clip-text">
              Betting Sites
            </span>
          </h2>

          <p className="text-xl text-pale-mint max-w-3xl mx-auto leading-relaxed">
            Comprehensive rankings of all licensed betting platforms available to Irish players,
            <span className="text-emerald-glow font-semibold"> tested and verified by our experts</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookmakers.map((bookmaker, index) => (
            <div
              key={bookmaker.id}
              className="group relative bg-forest-green/40 backdrop-blur-sm border-2 border-emerald-glow/30 rounded-2xl p-6 hover:shadow-shamrock transition-all duration-500 hover:scale-105 irish-glow"
            >
              {/* Rank Number */}
              <div className="absolute -top-3 -left-3 bg-irish-orange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-irish-orange">
                #{index + 1}
              </div>

              {/* Top Pick Badge */}
              {bookmaker.isTopPick && (
                <div className="absolute -top-3 right-4 bg-warm-gold text-deep-graphite px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  🏆 CERTIFIED
                </div>
              )}

              <div className="pt-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-pure-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <Image
                      src={bookmaker.logo || "/placeholder.svg"}
                      alt={bookmaker.name}
                      width={100}
                      height={50}
                      className="filter brightness-110"
                    />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-emerald-glow text-sm mb-1">
                      <Shield size={14} className="mr-1" />
                      <span className="font-semibold">Licensed</span>
                    </div>
                    <div className="flex items-center text-warm-gold text-sm">
                      <Award size={14} className="mr-1" />
                      <span className="font-semibold">Verified</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-celtic font-bold text-pure-white mb-4">{bookmaker.name}</h3>

                <div className="bg-gradient-to-r from-irish-orange/20 to-warm-gold/20 border-2 border-irish-orange/30 text-irish-orange px-4 py-3 rounded-xl mb-6 backdrop-blur-sm">
                  <p className="font-bold text-sm leading-tight">{bookmaker.bonus}</p>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {renderStars(bookmaker.rating)}
                    <span className="ml-2 text-pure-white font-bold">{bookmaker.rating}</span>
                  </div>

                  <div className="flex items-center text-pale-mint text-sm">
                    <Phone size={14} className="mr-1 text-emerald-glow" />
                    <span className="font-semibold">{bookmaker.calls.toLocaleString()}</span>
                  </div>
                </div>

                <a
                  href={bookmaker.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-shamrock-green hover:bg-emerald-glow text-white px-4 py-4 rounded-xl font-bold transition-all shadow-shamrock hover:shadow-emerald group-hover:animate-irish-pulse inline-flex items-center justify-center"
                >
                  Claim Irish Bonus
                  <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-forest-green/30 backdrop-blur-sm border-2 border-emerald-glow/30 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-pale-mint text-sm leading-relaxed">
              <span className="text-emerald-glow font-semibold">🇮🇪 All sites are licensed for Irish players</span> and
              have been thoroughly tested by our team. Rankings are based on bonus value, user experience, withdrawal
              speed, and customer support quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
