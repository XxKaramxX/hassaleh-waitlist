import SiteNavbar from "@/components/SiteNavbar";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm font-bold uppercase tracking-wide text-green-600">
          Terms of Service
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-black md:text-7xl">
          Terms of Service
        </h1>

        <p className="mt-6 text-gray-600">Last updated: 2026</p>

        <div className="mt-12 space-y-8 text-lg leading-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black">1. Overview</h2>
            <p className="mt-3">
              These Terms of Service apply to your use of the Hassaleh website
              and waitlist. By joining the waitlist, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              2. Waitlist Only
            </h2>
            <p className="mt-3">
              Hassaleh is currently in a pre-launch stage. Joining the waitlist
              does not guarantee access to the product, financial services, or
              any specific launch date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              3. No Financial Advice
            </h2>
            <p className="mt-3">
              Information on this website is for general informational purposes
              only and should not be considered financial, investment, legal, or
              tax advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              4. Product Availability
            </h2>
            <p className="mt-3">
              Hassaleh may not be available in all countries or regions. Product
              features, supported assets, and availability may change before
              launch.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              5. User Information
            </h2>
            <p className="mt-3">
              You agree to provide accurate information when joining the
              waitlist. We may contact you using the email address you provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              6. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these terms from time to time. Updates will be
              posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">7. Contact</h2>
            <p className="mt-3">
              If you have questions about these Terms, contact us at:{" "}
              <span className="font-semibold text-black">
                hello@hassaleh.com
              </span>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}