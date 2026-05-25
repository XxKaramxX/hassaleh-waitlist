import SiteNavbar from "@/components/SiteNavbar";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm font-bold uppercase tracking-wide text-green-600">
          Privacy Policy
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-black md:text-7xl">
          Privacy Policy
        </h1>

        <p className="mt-6 text-gray-600">Last updated: 2026</p>

        <div className="mt-12 space-y-8 text-lg leading-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black">1. Overview</h2>
            <p className="mt-3">
              Hassaleh is currently collecting waitlist signups for early access.
              This Privacy Policy explains what information we collect, how we
              use it, and how we protect it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              When you join the waitlist, we may collect your name, email
              address, country, and the date you joined.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">
              We use your information to manage the waitlist, contact you about
              Hassaleh updates, notify you about early access, and understand
              interest in different markets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              4. Sharing Your Information
            </h2>
            <p className="mt-3">
              We do not sell your personal information. We may use trusted
              service providers to host the website, store waitlist information,
              and operate the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              5. Data Security
            </h2>
            <p className="mt-3">
              We use reasonable technical and organizational measures to protect
              waitlist information. However, no online system can be guaranteed
              to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              6. Your Choices
            </h2>
            <p className="mt-3">
              You may request to update or remove your waitlist information by
              contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">7. Contact</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, you can contact
              us at:{" "}
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