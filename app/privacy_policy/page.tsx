import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Edafe Oke",
  description: "Privacy policy for Edafe Oke's portfolio website",
}

export default function PrivacyPolicyPage() {
  return (
      <main className="max-w-4xl mx-auto px-4 py-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy describes how I collect, use, and protect your information when you visit my
                portfolio website. I am committed to protecting your privacy and being transparent about my data
                practices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information I Collect</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Contact information (name, email address) when you reach out through contact forms</li>
                  <li>Any messages or inquiries you send to me</li>
                  <li>Professional information you choose to share during our communications</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Basic analytics data (page views, session duration, referral sources)</li>
                  <li>Device and browser information</li>
                  <li>IP address and general location data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How I Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To respond to your inquiries and communicate with you</li>
                <li>To improve my website and user experience</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To prevent spam and protect against security threats</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed">
                I do not sell, trade, or rent your personal information to third parties. I may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect my rights, property, or safety, or that of others</li>
                <li>With service providers who assist in website operations (analytics, hosting)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                This website uses cookies and similar technologies to enhance your browsing experience and analyze
                website traffic. You can control cookie settings through your browser preferences.
              </p>
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Types of Cookies Used:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help me understand how visitors use the site
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings and preferences
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                I implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access the personal information I have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to the processing of your personal information</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                This website may use third-party services such as Google Analytics, hosting providers, and email
                services. These services have their own privacy policies governing the use of your information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Children&#39;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                This website is not intended for children under 13 years of age. I do not knowingly collect personal
                information from children under 13.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                I may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                updated revision date. I encourage you to review this policy periodically.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or how I handle your personal information, please
                contact me at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> greatedafeoke@gmail.com
                  <br />
                  <strong>Website:</strong> edafeoke.dev
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

  )
}
