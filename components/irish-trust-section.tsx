import { Shield, Zap, FileText, Smartphone } from "lucide-react"

export function IrishTrustSection() {
  const trustFactors = [
    {
      icon: Shield,
      title: "Local-licensed",
      description: "All sites are fully licensed and regulated for Irish players",
      irishSymbol: "🍀",
      color: "emerald-green",
    },
    {
      icon: Zap,
      title: "Fast Payouts",
      description: "Quick withdrawals to Irish banks and e-wallets",
      irishSymbol: "🎵",
      color: "sunset-orange",
    },
    {
      icon: FileText,
      title: "Clear T&Cs",
      description: "Transparent terms with no hidden conditions",
      irishSymbol: "💰",
      color: "gold-glow",
    },
    {
      icon: Smartphone,
      title: "Best for Mobile",
      description: "Optimized apps for betting on the go",
      irishSymbol: "📱",
      color: "emerald-green",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-rich-graphite/95 to-rich-graphite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-green/20 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-green/30">
              <span className="text-emerald-green font-semibold">Made for Ireland</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-soft-white mb-6">
            Why Irish Bettors
            <span className="block text-transparent bg-gradient-to-r from-emerald-green to-gold-glow bg-clip-text">
              Trust These Sites
            </span>
          </h2>

          <p className="text-xl text-clover-mint max-w-3xl mx-auto leading-relaxed">
            We understand what Irish players need. Here's why these bookmakers stand out from the crowd.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => {
            const IconComponent = factor.icon
            return (
              <div
                key={index}
                className="group relative bg-rich-graphite/60 backdrop-blur-sm border-2 border-emerald-green/20 rounded-2xl p-8 text-center hover:border-emerald-green/50 hover:shadow-emerald transition-all duration-500 hover:scale-105"
              >
                {/* Irish Symbol Background */}
                <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {factor.irishSymbol}
                </div>

                <div className="relative z-10 space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-${factor.color}/20 flex items-center justify-center group-hover:shadow-${factor.color.replace("-", "")} transition-all`}
                  >
                    <IconComponent size={32} className={`text-${factor.color}`} />
                  </div>

                  <h3 className="text-xl font-bold text-soft-white group-hover:text-emerald-green transition-colors">
                    {factor.title}
                  </h3>

                  <p className="text-clover-mint text-sm leading-relaxed">{factor.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-emerald-green/10 backdrop-blur-sm border border-emerald-green/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-clover-mint text-sm leading-relaxed">
              <span className="text-emerald-green font-semibold">🛡️ All recommended sites</span> are fully compliant with
              Irish gambling regulations and have been personally tested by our team of Irish betting experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
