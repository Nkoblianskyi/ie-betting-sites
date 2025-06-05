import { FloatingHeader } from "@/components/floating-header"
import { Footer } from "@/components/footer"
import { AlertTriangle, Shield, Clock, Lock, HeartHandshake } from "lucide-react"
import Link from "next/link"

export default function ResponsibleGambling() {
  const supportOrganizations = [
    {
      name: "GambleAware",
      url: "https://www.gambleaware.org",
      description: "Free, confidential help for anyone affected by problem gambling",
      phone: "0808 8020 133",
    },
    {
      name: "GamCare",
      url: "https://www.gamcare.org.uk",
      description: "Information, advice and support for anyone affected by gambling problems",
      phone: "0808 8020 133",
    },
    {
      name: "Gambling Therapy",
      url: "https://www.gamblingtherapy.org",
      description: "Free online support and practical advice to people affected by gambling problems",
      phone: null,
    },
    {
      name: "BeGambleAware",
      url: "https://www.begambleaware.org",
      description: "Advice and guidance for those who gamble and their friends and family",
      phone: "0808 8020 133",
    },
  ]

  const guidelines = [
    {
      icon: Clock,
      title: "Set Time Limits",
      description: "Decide how long you want to play before you start and stick to it.",
    },
    {
      icon: Shield,
      title: "Set Deposit Limits",
      description: "Only gamble what you can afford to lose and set strict deposit limits.",
    },
    {
      icon: Lock,
      title: "Take Regular Breaks",
      description: "Step away regularly to maintain perspective and clear thinking.",
    },
    {
      icon: HeartHandshake,
      title: "Seek Support Early",
      description: "If gambling feels like a problem, reach out for help immediately.",
    },
  ]

  return (
    <div className="min-h-screen irish-emerald-gradient">
      <FloatingHeader />

      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-accent rounded-full mb-6">
              <AlertTriangle size={32} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-soft-white mb-6">Responsible Gambling</h1>
            <p className="text-xl text-clover-mint max-w-3xl mx-auto">
              Gambling should be entertaining and not seen as a way to make money. Always gamble responsibly and within
              your means.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {guidelines.map((guideline, index) => {
              const IconComponent = guideline.icon
              return (
                <div
                  key={index}
                  className="bg-rich-graphite/60 backdrop-blur-sm border-2 border-emerald-green/30 rounded-2xl p-6 hover:border-emerald-green/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-soft-white mb-2">{guideline.title}</h3>
                      <p className="text-clover-mint">{guideline.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-rich-graphite/60 backdrop-blur-sm border-2 border-emerald-green/30 rounded-2xl p-6 md:p-10 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-soft-white mb-6">Signs of Problem Gambling</h2>
            <div className="space-y-4 text-clover-mint">
              <p>
                It's important to recognize the signs of problem gambling. If you experience any of the following, we
                encourage you to seek help from one of the support organizations listed below:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gambling more than you can afford to lose</li>
                <li>Borrowing money or selling possessions to gamble</li>
                <li>Lying to family members or friends about gambling habits</li>
                <li>Feeling the need to bet more money more frequently</li>
                <li>Becoming restless or irritable when trying to stop gambling</li>
                <li>Gambling to escape problems or relieve feelings of helplessness, guilt, anxiety or depression</li>
                <li>Trying to win back gambling losses</li>
                <li>Gambling causing work or relationship problems</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-soft-white mb-8 text-center">Support Organizations</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {supportOrganizations.map((org, index) => (
              <div
                key={index}
                className="bg-rich-graphite/60 backdrop-blur-sm border-2 border-emerald-green/30 rounded-2xl p-6 hover:border-emerald-green/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-emerald-green mb-3">{org.name}</h3>
                <p className="text-clover-mint mb-4">{org.description}</p>
                {org.phone && (
                  <p className="text-soft-white mb-4">
                    <span className="font-semibold">Phone:</span> {org.phone}
                  </p>
                )}
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-green hover:text-gold-glow transition-colors font-semibold"
                >
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="bg-orange-accent/20 border-2 border-orange-accent/40 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-16 h-16 bg-orange-accent rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-soft-white mb-3 text-center md:text-left">
                  Need Immediate Help?
                </h3>
                <p className="text-clover-mint mb-4">
                  If you're concerned about your gambling or that of someone close to you, support is available 24/7.
                  Trained counselors can provide free, confidential support and information.
                </p>
                <div className="text-center md:text-left">
                  <Link
                    href="https://www.gambleaware.org"
                    target="_blank"
                    className="bg-orange-accent hover:bg-orange-accent/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                  >
                    Get Help Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
