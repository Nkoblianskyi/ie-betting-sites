import { FloatingHeader } from "@/components/floating-header"
import { Footer } from "@/components/footer"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen irish-emerald-gradient">
      <FloatingHeader />

      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto bg-rich-graphite/60 backdrop-blur-sm border-2 border-emerald-green/30 rounded-2xl p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-soft-white mb-8 text-center">Cookie Policy</h1>

          <div className="space-y-6 text-clover-mint">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-green mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you browse websites.
                They are widely used in order to make websites work more efficiently and provide information to the
                owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-green mb-4">How We Use Cookies</h2>
              <p>
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no
                industry standard options for disabling cookies without completely disabling the functionality and
                features they add to this site.
              </p>
              <p className="mt-2">
                We recommend that you leave on all cookies if you are not sure whether you need them or not, in case
                they are used to provide a service that you use.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-green mb-4">The Cookies We Set</h2>
              <ul className="list-disc pl-6 mt-2 space-y-4">
                <li>
                  <h3 className="font-semibold text-soft-white">Account related cookies</h3>
                  <p>
                    If you create an account with us then we will use cookies for the management of the signup process
                    and general administration. These cookies will usually be deleted when you log out however in some
                    cases they may remain afterwards to remember your site preferences when logged out.
                  </p>
                </li>

                <li>
                  <h3 className="font-semibold text-soft-white">Site preferences cookies</h3>
                  <p>
                    In order to provide you with a great experience on this site we provide the functionality to set
                    your preferences for how this site runs when you use it. In order to remember your preferences we
                    need to set cookies so that this information can be called whenever you interact with a page is
                    affected by your preferences.
                  </p>
                </li>

                <li>
                  <h3 className="font-semibold text-soft-white">Third Party Cookies</h3>
                  <p>
                    In some special cases we also use cookies provided by trusted third parties. The following section
                    details which third party cookies you might encounter through this site.
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      This site uses Google Analytics which is one of the most widespread and trusted analytics
                      solutions on the web for helping us to understand how you use the site and ways that we can
                      improve your experience.
                    </li>
                    <li>
                      We also use social media buttons and/or plugins on this site that allow you to connect with your
                      social network in various ways. For these to work, social media sites will set cookies through our
                      site which may be used to enhance your profile on their site or contribute to the data they hold.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-green mb-4">Managing Cookies</h2>
              <p>
                You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that
                disabling cookies will affect the functionality of this and many other websites that you visit.
              </p>
              <p className="mt-2">
                Disabling cookies will usually result in also disabling certain functionality and features of this site.
                Therefore it is recommended that you do not disable cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-green mb-4">More Information</h2>
              <p>
                Hopefully that has clarified things for you and as was previously mentioned if there is something that
                you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does
                interact with one of the features you use on our site.
              </p>
              <p className="mt-2">
                If you are still looking for more information then you can contact us through one of our preferred
                contact methods:
              </p>
              <p className="mt-2">
                <span className="text-emerald-green font-semibold">Email:</span> cookies@ietopbettingsites.com
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
