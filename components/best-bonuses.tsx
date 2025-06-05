import { Gift, Zap, Coins } from "lucide-react"

export function BestBonuses() {
  const bonusTypes = [
    {
      icon: Gift,
      title: "Welcome Bonuses",
      description: "Get matched deposits up to €500",
      color: "from-primary-green to-neon-glow-green",
    },
    {
      icon: Zap,
      title: "Free Spins",
      description: "Up to 200 free spins on slots",
      color: "from-orange-accent to-yellow-500",
    },
    {
      icon: Coins,
      title: "Casino Bonuses",
      description: "Extra casino credits included",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="bonuses" className="py-16 bg-gradient-to-b from-deep-black to-deep-black/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Best Bonuses in Ireland</h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Discover the most generous welcome offers and ongoing promotions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {bonusTypes.map((bonus, index) => {
            const IconComponent = bonus.icon
            return (
              <div
                key={index}
                className="relative bg-light-mint/5 border border-neon-glow-green/20 rounded-xl p-8 text-center hover:border-neon-glow-green/50 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${bonus.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{bonus.title}</h3>
                <p className="text-gray-text">{bonus.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
