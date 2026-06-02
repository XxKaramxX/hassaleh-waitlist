iimport SiteNavbar from "@/components/SiteNavbar";
import {
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      number: "01",
      title: "Customer trust first",
      text: "Trust is hard earned and easily lost. We are building Hassaleh with security, clarity, and user confidence at the center of every decision.",
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "Participation is power",
      text: "Small amounts matter. We believe everyday users deserve access to digital assets without needing large upfront investments.",
      icon: Users,
    },
    {
      number: "03",
      title: "Built for the region",
      text: "Hassaleh is not a Western product copied into MENA. It is being built with the region’s currencies, habits, and financial realities in mind.",
      icon: Globe2,
    },
    {
      number: "04",
      title: "First-principles thinking",
      text: "We do not assume crypto has to stay complicated. We rethink the entry point from the ground up: daily spending, automatic saving, and simple education.",
      icon: Sparkles,
    },
    {
      number: "05",
      title: "Lean and disciplined",
      text: "We build with focus. The goal is not to add noise, but to deliver a product people can understand, trust, and use every day.",
      icon: Target,
    },
    {
      number: "06",
      title: "High performance",
      text: "We move with urgency, ownership, and a bias for action. If something is confusing, slow, or broken, we fix it.",
      icon: Zap,
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 border-b border-gray-200 pb-20 md:grid-cols-[1.35fr_0.65fr] md:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-green-600">
              About us
            </p>

            <h1 className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.07em] text-black md:text-8xl">
              We’re on a mission to make digital saving effortless for MENA.
            </h1>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-xl leading-9 text-gray-700">
              Hassaleh is building the easiest way for everyday people to turn
              spare change into digital assets.
            </p>

            <p className="mt-8 text-xl leading-9 text-gray-700">
              We believe access to modern finance should not be limited to
              people who already understand exchanges, wallets, charts, and
              market timing.
            </p>

            <a
              href="/#waitlist"
              className="mt-10 inline-flex items-center text-base font-semibold text-green-700 transition hover:text-green-800"
            >
              Join the waitlist
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-green-600">
              Our values
            </p>

            <h2 className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.05em] text-black md:text-5xl">
              The principles that guide everything we build.
            </h2>

            <p className="mt-6 max-w-xs text-base leading-7 text-gray-600">
              At Hassaleh, our values are in service of everyday users.
            </p>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="grid grid-cols-1 gap-6 py-9 md:grid-cols-[80px_0.7fr_1fr]"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-semibold text-green-600">
                      {value.number}
                    </span>
                    <Icon className="h-6 w-6 text-green-600 md:hidden" />
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon className="hidden h-7 w-7 text-green-600 md:block" />
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-black">
                      {value.title}
                    </h3>
                  </div>

                  <p className="text-base leading-7 text-gray-700">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.25fr_1fr]">
          <p className="text-sm font-bold uppercase tracking-wide text-green-600">
            Our belief
          </p>

          <h2 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-black md:text-7xl">
            We believe crypto can help power the next generation of saving,
            investing, and economic growth across the Middle East.
          </h2>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-green-600">
              Our team
            </p>

            <h2 className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.05em] text-black md:text-5xl">
              Built by operators. Shaped by crypto conviction.
            </h2>
          </div>

          <div className="max-w-4xl space-y-10 text-lg leading-8 text-gray-700">
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-black">
                Karam Alrafati
              </h3>
              <p className="mt-1 font-semibold text-green-700">
                Founder
              </p>

              <p className="mt-5">
                Karam founded Hassaleh after years of working in technology and
                investing in crypto. With 8 years of experience leading digital
                platforms and cross-functional projects, an MBA from DePaul
                University, and active crypto experience since 2017, Karam has
                seen both sides of the market: the opportunity digital assets
                create, and the barriers that keep everyday people out.
              </p>

              <p className="mt-5">
                That experience shaped the core idea behind Hassaleh: crypto
                should not only be accessible to people who already understand
                exchanges, wallets, charts, and timing. It should be simple
                enough to start with spare change.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-black">
                Mahmoud Joudeh
              </h3>
              <p className="mt-1 font-semibold text-green-700">
                Co-Founder & VP of Product
              </p>

              <p className="mt-5">
                Mahmoud brings 10 years of product sales experience, giving
                Hassaleh a deep understanding of how users evaluate, adopt, and
                trust new products. His background strengthens the product
                strategy, user experience, and go-to-market execution behind
                Hassaleh.
              </p>

              <p className="mt-5">
                As an active crypto investor, Mahmoud understands why digital
                assets matter and why the next wave of adoption depends on
                products that feel simple, trustworthy, and built for real
                everyday behavior.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-black">
                Rama Abu Diab
              </h3>
              <p className="mt-1 font-semibold text-green-700">
                Head of Marketing
              </p>

              <p className="mt-5">
                Rama leads marketing and brand growth for Hassaleh. With an MBA
                from DePaul University and a strong business background, Rama is
                focused on building the trust, clarity, and regional brand
                presence needed to bring Hassaleh to everyday users.
              </p>

              <p className="mt-5">
                As a serious crypto investor, Rama understands the importance of
                digital assets and the need to communicate them in a way that is
                clear, approachable, and credible for users across the region.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-2xl font-semibold leading-9 tracking-[-0.04em] text-black">
                Different backgrounds. Same mission: build Hassaleh into a
                trusted digital savings platform that helps improve financial
                access, crypto adoption, and long-term economic opportunity
                across the Middle East.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-green-600">
              Where we’re building
            </p>

            <h2 className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.05em] text-black md:text-5xl">
              Built between Chicago and Amman. Focused on MENA.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                Chicago, USA
              </h3>
              <p className="mt-4 max-w-sm text-base leading-7 text-gray-700">
                Where our journey began. Home to our early team, partners, and
                global network.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                Amman, Jordan
              </h3>
              <p className="mt-4 max-w-sm text-base leading-7 text-gray-700">
                Where we’re growing. Amman is planned as our regional
                headquarters as we scale across MENA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="rounded-[2rem] bg-black p-8 text-white md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                Be part of the future of saving in MENA.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-300">
                Join the waitlist and be the first to know when Hassaleh
                launches.
              </p>
            </div>

            <a
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Join the waitlist
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}