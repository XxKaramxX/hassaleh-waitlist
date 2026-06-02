"use client";

import { useEffect, useState } from "react";
import SiteNavbar from "@/components/SiteNavbar";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
  GraduationCap,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <HeroSection />
      <RoundUpsSection />
      <USDTSavingsSection />
      <CryptoAccessSection />
      <ProtectionSection />
      <EducationSection />
      <MENASection />
      <FinalCTA />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:gap-16 md:px-10 md:pb-28 md:pt-24">
      <div className="absolute left-1/2 top-20 -z-10 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-green-100/60 blur-3xl" />

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-green-600" />
          Early access is opening soon
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-black sm:text-6xl md:text-8xl"
        >
          The easiest way to turn spare change into digital assets.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mt-7 max-w-xl text-xl leading-9 text-gray-600"
        >
          Hassaleh helps users across MENA save automatically from everyday
          purchases, build a USDT savings balance, and take a simple first step
          into crypto.
        </motion.p>

        <motion.div variants={fadeUp} transition={{ duration: 0.8 }}>
          <WaitlistCard />
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mt-8 flex max-w-md items-start gap-3 text-sm text-gray-600"
        >
          <ShieldCheck className="mt-0.5 h-5 w-5 text-green-600" />
          <p>
            Early access only. Hassaleh is preparing for launch with a focus on
            trust, simplicity, and the MENA region.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 34 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="relative flex justify-center"
      >
        <HeroProductVisual />
      </motion.div>
    </section>
  );
}

function WaitlistCard() {
  const BASE_WAITLIST_COUNT = 250;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(BASE_WAITLIST_COUNT);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchWaitlistCount() {
      const { data, error } = await supabase.rpc("get_waitlist_count");

      if (!error && typeof data === "number") {
        setWaitlistCount(BASE_WAITLIST_COUNT + data);
      }
    }

    fetchWaitlistCount();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!fullName.trim() || !email.trim() || !country.trim()) {
      setStatus("error");
      setMessage("Please fill out your name, email, and country.");
      return;
    }

    const { error } = await supabase.from("waitlist").insert([
      {
        full_name: fullName.trim(),
        email: email.trim().toLowerCase(),
        country,
      },
    ]);

    if (error) {
      console.error("Supabase waitlist error:", error);
      setStatus("error");

      if (error.code === "23505") {
        setMessage("This email is already on the waitlist.");
      } else {
        setMessage(error.message || "Something went wrong. Please try again.");
      }

      return;
    }

    setStatus("success");
    setMessage("");
    setFullName("");
    setEmail("");
    setCountry("");
    setWaitlistCount((currentCount) => currentCount + 1);
  }

  if (status === "success") {
    return (
      <motion.div
        id="waitlist"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="mt-9 max-w-md rounded-[2rem] border border-green-100 bg-white p-8 shadow-2xl shadow-green-100"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckCircle2 className="h-9 w-9" />
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-black">
          You’re on the waitlist.
        </h3>

        <p className="mt-3 text-base leading-7 text-gray-600">
          Welcome to Hassaleh. We’ll let you know when early access opens.
        </p>

        <div className="mt-6 rounded-2xl bg-green-50 p-4 text-sm font-medium text-green-700">
          Your spot has been saved successfully.
        </div>

        <p className="mt-5 text-sm text-gray-500">
          <span className="font-semibold text-green-600">
            {waitlistCount.toLocaleString()}+
          </span>{" "}
          people joined the waitlist
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 w-full rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-700 transition hover:border-green-200 hover:text-green-600"
        >
          Add another person
        </button>
      </motion.div>
    );
  }

  return (
    <form
      id="waitlist"
      onSubmit={handleSubmit}
      className="mt-9 max-w-md rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-100"
    >
      <h3 className="text-xl font-semibold">Join the waitlist</h3>

      <p className="mt-1 text-sm text-gray-500">
        Be first to access Hassaleh before launch.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Full name"
          className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-50"
        />

        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          type="email"
          className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-50"
        />
      </div>

      <select
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        className="mt-3 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-500 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-50"
      >
        <option value="">Select your country</option>
        <option>Jordan</option>
        <option>Saudi Arabia</option>
        <option>UAE</option>
        <option>Qatar</option>
        <option>Kuwait</option>
        <option>United States</option>
      </select>

      <button
        disabled={status === "loading"}
        className="mt-4 flex w-full items-center justify-center rounded-xl bg-green-600 px-5 py-4 font-semibold text-white shadow-lg shadow-green-100 transition hover:-translate-y-0.5 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Joining..." : "Join the waitlist"}
        <ArrowUpRight className="ml-2 h-5 w-5" />
      </button>

      {message ? (
        <p className="mt-4 text-sm font-medium text-red-500">{message}</p>
      ) : null}

      <p className="mt-5 text-sm text-gray-500">
        <span className="font-semibold text-green-600">
          {waitlistCount.toLocaleString()}+
        </span>{" "}
        people joined the waitlist
      </p>
    </form>
  );
}

function HeroProductVisual() {
  return (
    <div className="relative w-full max-w-[460px]">
      <div className="absolute left-6 top-8 h-[420px] w-[420px] rounded-full bg-green-100 blur-3xl" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 rounded-[2.75rem] border border-gray-200 bg-white p-5 shadow-2xl shadow-gray-200"
      >
        <div className="rounded-[2.25rem] bg-black p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Total digital savings</p>
              <h2 className="mt-2 text-4xl font-bold">$1,234.56</h2>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold">
              ₮
            </div>
          </div>

          <div className="mt-8 h-44 rounded-[1.75rem] bg-white/5 p-5">
            <div className="flex h-full items-end gap-3">
              {[48, 72, 62, 98, 82, 128, 104, 150].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                  className="w-full rounded-full bg-green-500"
                />
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm font-medium text-green-400">
            ▲ 12.5% this month
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] bg-green-50 p-5">
            <p className="text-sm text-gray-500">Round-ups</p>
            <h3 className="mt-2 text-3xl font-bold">$23.45</h3>
            <p className="mt-2 text-sm font-semibold text-green-700">
              2.45 USDT saved
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-gray-100 bg-white p-5">
            <p className="text-sm text-gray-500">Next conversion</p>
            <h3 className="mt-2 text-3xl font-bold">$5.00</h3>
            <p className="mt-2 text-sm font-semibold text-green-700">
              Threshold saving
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-16 z-20 hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl shadow-gray-200 md:block"
      >
        <p className="text-xs font-medium text-gray-500">Auto round-up</p>
        <p className="mt-1 text-2xl font-bold text-black">+$0.40</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 bottom-24 z-20 hidden rounded-3xl border border-green-100 bg-green-50 p-4 shadow-xl shadow-green-100 md:block"
      >
        <p className="text-xs font-semibold text-green-700">USDT balance</p>
        <p className="mt-1 text-xl font-bold text-black">Growing</p>
      </motion.div>
    </div>
  );
}

function RoundUpsSection() {
  return (
    <FeatureSection
      eyebrow="Round-ups"
      title="Save automatically every time you spend."
      text="Hassaleh is designed to round up everyday purchases and move the spare change into your digital savings flow. Small amounts become a habit without forcing you to think about every transaction."
      ctaText="See how it works"
      ctaHref="/product"
      dark={false}
      visual={<RoundUpVisual />}
    />
  );
}

function USDTSavingsSection() {
  return (
    <FeatureSection
      eyebrow="USDT savings"
      title="Build a stable digital savings balance."
      text="Once your round-ups reach the savings threshold, Hassaleh is designed to convert them into USDT, giving users a simple way to begin building a digital balance."
      ctaText="Explore the product"
      ctaHref="/product"
      dark
      reverse
      visual={<USDTVisual />}
    />
  );
}

function CryptoAccessSection() {
  return (
    <FeatureSection
      eyebrow="Crypto access"
      title="Start small. Learn. Grow into crypto."
      text="Crypto should not feel like a wall of charts, wallets, and confusion. Hassaleh creates a simple first step so everyday users can build confidence before going deeper."
      ctaText="Why Hassaleh"
      ctaHref="/why-hassaleh"
      dark={false}
      visual={<CryptoAccessVisual />}
    />
  );
}

function FeatureSection({
  eyebrow,
  title,
  text,
  ctaText,
  ctaHref,
  visual,
  dark,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  ctaText: string;
  ctaHref: string;
  visual: React.ReactNode;
  dark: boolean;
  reverse?: boolean;
}) {
  return (
    <section
      className={`px-6 py-20 md:px-10 md:py-28 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className={`text-sm font-bold uppercase tracking-wide ${
              dark ? "text-green-400" : "text-green-600"
            }`}
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-5 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className={`mt-7 max-w-xl text-xl leading-9 ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {text}
          </motion.p>

          <motion.a
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            href={ctaHref}
            className={`mt-9 inline-flex items-center rounded-2xl px-7 py-4 font-semibold transition ${
              dark
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            {ctaText}
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          {visual}
        </motion.div>
      </div>
    </section>
  );
}

function RoundUpVisual() {
  return (
    <div className="rounded-[2.5rem] border border-gray-200 bg-[#fbfcfb] p-6 shadow-2xl shadow-gray-100">
      <div className="rounded-[2rem] bg-white p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-[-0.04em]">
            Today’s spending
          </h3>
          <CreditCard className="h-6 w-6 text-green-600" />
        </div>

        <div className="mt-8 space-y-5">
          {[
            ["Coffee Shop", "$3.60", "+$0.40"],
            ["Ride share", "$12.30", "+$0.70"],
            ["Grocery Store", "$45.80", "+$0.20"],
            ["Pharmacy", "$18.90", "+$0.10"],
          ].map(([merchant, amount, roundUp], index) => (
            <motion.div
              key={merchant}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div>
                <p className="font-semibold">{merchant}</p>
                <p className="mt-1 text-sm text-gray-500">{amount}</p>
              </div>

              <p className="font-bold text-green-600">{roundUp}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-green-50 p-5">
          <p className="text-sm text-gray-500">Saved from round-ups</p>
          <p className="mt-2 text-4xl font-bold">$1.40</p>
        </div>
      </div>
    </div>
  );
}

function USDTVisual() {
  return (
    <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
      <div className="rounded-[2rem] bg-white p-6 text-black">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">USDT savings</p>
            <h3 className="mt-2 text-5xl font-bold">$258.00</h3>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
            ₮
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] bg-black p-5 text-white">
          <p className="text-sm text-gray-400">Next conversion threshold</p>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "68%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-green-500"
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span>$3.40 saved</span>
            <span>$5.00 threshold</span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-green-50 p-4">
            <p className="text-sm text-gray-500">This month</p>
            <p className="mt-2 text-2xl font-bold">$23.45</p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Momentum</p>
            <p className="mt-2 text-2xl font-bold text-green-600">+12.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CryptoAccessVisual() {
  return (
    <div className="rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-100">
      <div className="grid grid-cols-1 gap-4">
        {[
          {
            title: "Start with spare change",
            text: "No big upfront investment required.",
            icon: Sparkles,
          },
          {
            title: "Build a digital balance",
            text: "Let small savings compound into a habit.",
            icon: Wallet,
          },
          {
            title: "Understand before going deeper",
            text: "A calmer way to enter digital assets.",
            icon: GraduationCap,
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex gap-5 rounded-[1.75rem] border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                <Icon className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ProtectionSection() {
  const protections = [
    {
      title: "Built with privacy in mind",
      text: "We collect only what is needed for early access and product communication.",
      icon: LockKeyhole,
    },
    {
      title: "Clarity before complexity",
      text: "Users should understand what is happening before they take action.",
      icon: Sparkles,
    },
    {
      title: "Security-first foundation",
      text: "Hassaleh is being built with user confidence at the center.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[#fbfcfb] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-sm font-bold uppercase tracking-wide text-green-600"
          >
            Trust
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-black md:text-7xl"
          >
            Built with trust at the center.
          </motion.h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {protections.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-100"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-700">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
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
            Learn
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-black md:text-7xl"
          >
            Become more confident with digital assets.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-7 max-w-xl text-xl leading-9 text-gray-600"
          >
            Hassaleh is not just about saving. It is about helping users build a
            calmer, clearer relationship with digital finance.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] bg-black p-6 text-white shadow-2xl shadow-gray-200"
        >
          <div className="rounded-[2rem] bg-white/5 p-6">
            <p className="text-sm text-green-400">Coming later</p>
            <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em]">
              Simple education for first-time crypto savers.
            </h3>

            <div className="mt-8 space-y-4">
              {[
                "What is USDT?",
                "How do round-ups work?",
                "What does saving in digital assets mean?",
              ].map((lesson) => (
                <div
                  key={lesson}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-200"
                >
                  {lesson}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MENASection() {
  return (
    <section className="bg-green-600 px-6 py-20 text-white md:px-10 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        transition={{ staggerChildren: 0.1 }}
        className="mx-auto max-w-7xl"
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-sm font-bold uppercase tracking-wide text-green-100"
        >
          Built for MENA
        </motion.p>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mt-6 max-w-6xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl"
        >
          Built for the region, not copied into it.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mt-8 max-w-3xl text-xl leading-9 text-green-50"
        >
          Hassaleh is being built with MENA users, currencies, habits, and
          financial realities in mind — starting with Jordan and expanding from
          there.
        </motion.p>
      </motion.div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-black px-6 py-20 text-white md:px-10 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl text-center"
      >
        <h2 className="mx-auto max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-8xl">
          Join the next generation of digital savers.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-xl leading-9 text-gray-300">
          Get early access to Hassaleh and be part of building a new savings
          habit for MENA.
        </p>

        <a
          href="#waitlist"
          className="mt-10 inline-flex items-center justify-center rounded-2xl bg-green-600 px-8 py-5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-700"
        >
          Join the waitlist
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
}