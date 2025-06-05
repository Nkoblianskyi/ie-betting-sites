import { FloatingHeader } from "@/components/floating-header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen irish-emerald-gradient">
      <FloatingHeader />

      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto bg-rich-graphite/60 backdrop-blur-sm border-2 border-emerald-green/30 rounded-2xl p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-soft-white mb-8 text-center">Privacy Policy</h1>

          <div className="space-y-6 text-clover-mint">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-green mb-4">Introduction</h2>
              <p>
                Welcome to IETopBettingSites. We respect your privacy and are committed to protecting your personal
                data. This privacy policy will inform you about how we look after your personal data when you visit our
                website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-green mb-4">The Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                together as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Identity Data: includes first name, last name, username or similar identifier.</li>
                <li>Contact Data: includes email address and telephone numbers.</li>
                <li>
                  Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting
                  and location, browser plug-in types and versions, operating system and platform, and other technology
                  on the devices you use to access this website.
                </li>
                <li>Usage Data: includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-green mb-4">How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>
                  Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                  fundamental rights do not override those interests.
                </li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-green mb-4">Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors and other third parties who have a business
                need to know.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-green mb-4">Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-green mb-4">Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <p className="mt-2">
                <span className="text-emerald-green font-semibold">Email:</span> privacy@ietopbettingsites.com
              </p>
            </section>

            <div className="border-t border-emerald-green/30 pt-6 mt-8">
              <p className="text-sm text-center">Last updated: June 2025</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
