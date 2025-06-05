import { Shield, Award, Smartphone, Clock, Headphones } from "lucide-react"

export function RankingMethodology() {
  const criteria = [
    {
      icon: Shield,
      title: "Security & Licensing",
      description: "Licensed by Irish authorities with SSL encryption",
    },
    {
      icon: Award,
      title: "Bonus Fairness",
      description: "Reasonable wagering requirements and clear terms",
    },
    {
      icon: Smartphone,
      title: "Mobile UX",
      description: "Optimized mobile apps and responsive design",
    },
    {
      icon: Clock,
      title: "Withdrawal Speed",
      description: "Fast payouts with multiple payment methods",
    },
    {
      icon: Headphones,
      title: "Support Quality",
      description: "24/7 customer support in English and Irish",
    },
  ]

  return (
    <section className="py-16 bg-light-mint/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Rank Bookmakers</h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Our comprehensive evaluation process ensures you get the most trusted recommendations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {criteria.map((criterion, index) => {
            const IconComponent = criterion.icon
            return (
              <div
                key={index}
                className="bg-deep-black/50 border border-neon-glow-green/20 rounded-xl p-6 hover:border-neon-glow-green/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{criterion.title}</h3>
                <p className="text-gray-text text-sm">{criterion.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
