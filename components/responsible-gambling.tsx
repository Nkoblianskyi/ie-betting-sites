import { AlertTriangle, ExternalLink } from "lucide-react"

export function ResponsibleGambling() {
  const supportLinks = [
    { name: "GambleAware", url: "https://www.gambleaware.org" },
    { name: "GamCare", url: "https://www.gamcare.org.uk" },
    { name: "Be Gamble Aware", url: "https://www.begambleaware.org" },
    { name: "Gambling Therapy", url: "https://www.gamblingtherapy.org" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-deep-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-orange-accent rounded-full flex items-center justify-center">
              <AlertTriangle size={32} className="text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Gamble Responsibly</h2>

          <p className="text-lg text-gray-text mb-8 max-w-2xl mx-auto">
            Gambling should be fun and entertaining. If you feel like you're losing control, please seek help from one
            of these professional organizations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {supportLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light-mint/10 border border-neon-glow-green/30 rounded-lg p-4 hover:border-neon-glow-green/50 transition-colors group"
              >
                <span className="text-white font-semibold group-hover:text-neon-glow-green transition-colors">
                  {link.name}
                </span>
                <ExternalLink
                  size={16}
                  className="inline ml-2 text-gray-text group-hover:text-neon-glow-green transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
