"use client";

import SiteNavbar from "@/components/SiteNavbar";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

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

  const team = [
    {
      name: "Karam Alrafati",
      role: "Founder & CEO",
      text: [
        "Karam founded Hassaleh after years of working in technology and investing in crypto. With 8 years of experience leading digital platforms and cross-functional projects, an MBA from DePaul University, and active crypto experience since 2017, Karam has seen both sides of the market: the opportunity digital assets create, and the barriers that keep everyday people out.",
        "That experience shaped the core idea behind Hassaleh: crypto should not only be accessible to people who already understand exchanges, wallets, charts, and timing. It should be simple enough to start with spare change.",
      ],
    },
    {
      name: "Rama Abu Diab",
      role: "Co-Founder & CMO",
      text: [
        "Rama leads marketing, brand strategy, and growth for Hassaleh. With an MBA from DePaul University and a strong business background, she is focused on building the trust, clarity, and regional brand presence needed to bring Hassaleh to everyday users.",
        "As an active crypto investor, Rama understands the importance of digital assets and the need to communicate them in a way that feels clear, approachable, and credible across the region.",
      ],
    },
    {
      name: "Mahmoud Joudeh",
      role: "Co-Founder & VP of Product",
      text: [
        "Mahmoud brings 10 years of product sales experience, giving Hassaleh a deep understanding of how users evaluate, adopt, and trust new products. His background strengthens the product strategy, user experience, and go-to-market execution behind Hassaleh.",
        "As an active crypto investor, Mahmoud understands why digital assets matter and why the next wave of adoption depends on products that feel simple, trustworthy, and built for real everyday behavior.",
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="absolute left-1/2 top-20 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-green-100/50 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 gap-14 border-b border-gray-200 pb-20 md:grid-cols-[1.35fr_0.65fr] md:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-sm font-bold uppercase tracking-wide text-green-600"
            >
              About us
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.85 }}
              className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.075em] text-black md:text-8xl"
            >
              We’re building the digital savings layer for MENA.
            </motion.h1>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.85 }}
            className="flex flex-col justify-end"
          >
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
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-sm font-bold uppercase tracking-wide text-green-600"
            >
              Our values
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.75 }}
              className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.055em] text-black md:text-5xl"
            >
              The principles that guide everything we build.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.75 }}
              className="mt-6 max-w-xs text-base leading-7 text-gray-600"
            >
              At Hassaleh, our values are in service of everyday users.
            </motion.p>
          </motion.div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
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
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-black">
                      {value.title}
                    </h3>
                  </div>

                  <p className="text-base leading-7 text-gray-700">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-black px-6 py-20 text-white md:px-10 md:py-28">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ staggerChildren: 0.12 }}
          className="relative mx-auto max-w-7xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-sm font-bold uppercase tracking-wide text-green-400"
          >
            Our conviction
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-6 max-w-6xl text-5xl font-semibold leading-[1.02] tracking-[-0.065em] md:text-7xl"
          >
            Crypto is not just another asset class. We believe it can become a
            new financial rail for the Middle East.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-8 max-w-3xl text-xl leading-9 text-gray-300"
          >
            Hassaleh exists to make that future easier to access. We want to
            help everyday users start small, build confidence, and participate
            in the next generation of digital finance.
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-sm font-bold uppercase tracking-wide text-green-600"
            >
              Our team
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.75 }}
              className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.055em] text-black md:text-5xl"
            >
              Built by operators. Shaped by crypto conviction.
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-100"
                >
                  <p className="text-sm font-bold uppercase tracking-wide text-green-600">
                    {member.role}
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-black">
                    {member.name}
                  </h3>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
              {team.map((member, index) => (
                <motion.div
                  key={`${member.name}-story`}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[0.35fr_1fr]"
                >
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-black">
                      {member.name}
                    </h3>
                    <p className="mt-2 font-semibold text-green-700">
                      {member.role}
                    </p>
                  </div>

                  <div className="space-y-5 text-lg leading-8 text-gray-700">
                    {member.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mt-10 rounded-[2rem] bg-green-50 p-8"
            >
              <p className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-black md:text-4xl">
                Different backgrounds. Same mission: build Hassaleh into a
                trusted digital savings platform that helps improve financial
                access, crypto adoption, and long-term economic opportunity
                across the Middle East.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-sm font-bold uppercase tracking-wide text-green-600"
            >
              Where we’re building
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.75 }}
              className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.055em] text-black md:text-5xl"
            >
              Built between Chicago and Amman. Focused on MENA.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                city: "Chicago, USA",
                text: "Where our journey began. Home to our early team, partners, and global network.",
              },
              {
                city: "Amman, Jordan",
                text: "Where we’re growing. Amman is planned as our regional headquarters as we scale across MENA.",
              },
            ].map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-gray-200 pt-8"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                  {location.city}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-7 text-gray-700">
                  {location.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] bg-green-600 p-8 text-white shadow-2xl shadow-green-100 md:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                Be part of the future of saving in MENA.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-green-50">
                Join the waitlist and be the first to know when Hassaleh opens
                early access.
              </p>
            </div>

            <a
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-900"
            >
              Join the waitlist
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}