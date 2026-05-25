import { Globe2, PiggyBank, ShieldCheck, Sparkles } from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export default function WhyHassalehPage() {
  const points = [
    {
      title: "Built for MENA",
      text: "Hassaleh is designed around the needs, habits, and currencies of users across the Middle East.",
      icon: Globe2,
    },
    {
      title: "Small money, real habits",
      text: "Instead of forcing people to invest large amounts, Hassaleh starts with spare change from everyday spending.",
      icon: PiggyBank,
    },
    {
      title: "Beginner-friendly crypto",
      text: "Crypto should not feel intimidating. Hassaleh makes digital savings simple, visual, and easy to understand.",
      icon: Sparkles,
    },
    {
      title: "Trust-first design",
      text: "The product is being built with security, clarity, and user confidence at the center.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-green-600">
            Why Hassaleh
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-black md:text-7xl">
            Built for the next generation of MENA investors.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Hassaleh helps people build better saving habits by turning everyday
            spare change into digital savings automatically.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-700">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-8 text-2xl font-semibold">{point.title}</h2>

                <p className="mt-3 leading-7 text-gray-600">{point.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-green-100 bg-gradient-to-r from-green-50 to-white p-8 md:p-12">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Hassaleh is not trying to make crypto complicated. It is trying to
            make saving automatic.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            The long-term vision is to become the easiest way for people in the
            region to save, invest, and access digital assets through small
            everyday actions.
          </p>
        </div>
      </section>
    </main>
  );
}