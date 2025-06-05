import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-deep-black border-t border-neon-glow-green/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-emerald-green rounded-full flex items-center justify-center shadow-emerald group-hover:animate-emerald-pulse">
                  <span className="text-lg">🍀</span>
                </div>
              </div>
              <div className="hidden md:block">
                <span className="text-soft-white font-bold text-lg">IeTopBettingSites</span>
              </div>
            </Link>

            <p className="text-gray-text text-sm">Ireland's most trusted betting comparison site</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#bonuses" className="text-gray-text hover:text-neon-glow-green transition-colors text-sm">
                  Best Bonuses
                </Link>
              </li>
              <li>
                <Link href="#rankings" className="text-gray-text hover:text-neon-glow-green transition-colors text-sm">
                  Bookmaker Rankings
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-text hover:text-neon-glow-green transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-text hover:text-neon-glow-green transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/responsible-gambling"
                  className="text-gray-text hover:text-neon-glow-green transition-colors text-sm"
                >
                  Responsible Gambling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support Organizations</h4>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://www.gambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-text hover:text-neon-glow-green transition-colors text-sm"
              >
                GambleAware
              </a>
              <a
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-text hover:text-neon-glow-green transition-colors text-sm"
              >
                GamCare
              </a>
              <a
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-text hover:text-neon-glow-green transition-colors text-sm"
              >
                Be Gamble Aware
              </a>
              <a
                href="https://www.gamblingtherapy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-text hover:text-neon-glow-green transition-colors text-sm"
              >
                Gambling Therapy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neon-glow-green/20 pt-8 mb-8">
          <div className="text-center mb-6">
            <h4 className="text-white font-semibold mb-4">Responsible Gambling Partners</h4>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              <img
                src="/gamble.webp"
                alt="GambleAware"
                className="h-12 bg-white p-2 rounded-lg"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              <img
                src="/gamecare.svg"
                alt="GamCare"
                className="h-12 bg-white p-2 rounded-lg"
              />
            </a>
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              <img
                src="/bgambleaware.svg"
                alt="BeGambleAware"
                className="h-12 p-2 rounded-lg"
              />
            </a>
            <a
              href="https://www.gamblingtherapy.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              <img
                src="/gamblingcare.png"
                alt="Gambling Therapy"
                className="h-12 p-2 rounded-lg"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-neon-glow-green/20 pt-8">
          <div className="text-center">
            <p className="text-gray-text text-sm mb-4">
              ietopbettingsites.com may receive compensation when you click links and register at partner sites. This
              does not affect our independent rankings, based on in-depth testing.
            </p>
            <p className="text-gray-text text-sm">
              Gambling can be addictive. Play responsibly. Contact{" "}
              <a href="https://www.gambleaware.org" className="text-neon-glow-green hover:underline">
                GambleAware
              </a>{" "}
              or{" "}
              <a href="https://www.gamcare.org.uk" className="text-neon-glow-green hover:underline">
                GamCare
              </a>{" "}
              for help.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
