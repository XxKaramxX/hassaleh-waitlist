import { ArrowLeft } from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";

const faqs = [
  {
    question: "When is Hassaleh launching?",
    answer:
      "Hassaleh is currently preparing for early access. Join the waitlist to be notified when beta access opens.",
  },
  {
    question: "Which countries will Hassaleh support?",
    answer:
      "Hassaleh is being built with the Middle East in mind, with Jordan as the initial focus.",
  },
  {
    question: "How does the round-up feature work?",
    answer:
      "When a user makes a purchase, Hassaleh is designed to round the transaction up and save the spare change toward a digital savings balance.",
  },
  {
    question: "Will Hassaleh support USDT?",
    answer:
      "The plan is to support USDT as a stable digital savings option, with additional crypto features added over time.",
  },
  {
    question: "Is Hassaleh a bank?",
    answer:
      "No. Hassaleh is being developed as a fintech product focused on digital savings and crypto access.",
  },
  {
    question: "Will there be fees?",
    answer:
      "Fee details will be shared closer to launch. The goal is to keep pricing simple, transparent, and beginner-friendly.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm font-bold uppercase tracking-wide text-green-600">
          FAQ
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-black md:text-7xl">
          Questions, answered simply.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          A simple overview of how Hassaleh is being built and what users can
          expect before launch.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <p className="mt-3 leading-7 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-green-100 bg-green-50 p-8">
          <h2 className="text-2xl font-semibold">
            Still interested in early access?
          </h2>
          <p className="mt-3 text-gray-600">
            Join the waitlist and be one of the first to know when Hassaleh
            opens beta access.
          </p>
          <a
            href="/#waitlist"
            className="mt-6 inline-flex rounded-2xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            Join the waitlist
          </a>
        </div>
      </section>
    </main>
  );
}

function LogoMark() {
  return (
    <div className="grid h-8 w-8 grid-cols-3 gap-1">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className="rounded-full bg-green-600" />
      ))}
    </div>
  );
}