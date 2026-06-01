"use client";

import { useEffect, useState } from "react";
import SiteNavbar from "@/components/SiteNavbar";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
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

      <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-14 md:grid-cols-2 md:px-10 md:pb-28 md:pt-24">
        <div className="absolute left-1/2 top-20 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-green-100/50 blur-3xl" />

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
            Launching soon
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-6xl font-semibold leading-[0.92] tracking-[-0.075em] text-black md:text-8xl"
          >
            Spare change.{" "}
            <span className="text-green-600">Digital assets.</span> Automatic
            momentum.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-7 max-w-xl text-xl leading-9 text-gray-600"
          >
            Hassaleh turns everyday purchases into automatic digital savings,
            helping users across MENA start small and build financial momentum.
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
              Early access only. Hassaleh is preparing for launch with a focus
              on trust, simplicity, and the MENA region.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 34 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative flex justify-center"
        >
          <div className="absolute right-0 top-10 h-[430px] w-[430px] rounded-full bg-green-100 blur-3xl" />
          <PhoneMockup />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 top-16 z-20 hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl shadow-gray-200 md:block"
          >
            <p className="text-xs font-medium text-gray-500">Round-up saved</p>
            <p className="mt-1 text-2xl font-bold text-black">+$0.40</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-24 z-20 hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl shadow-gray-200 md:block"
          >
            <p className="text-xs font-medium text-gray-500">Saved in USDT</p>
            <p className="mt-1 text-2xl font-bold text-green-600">2.45 ₮</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-20 top-0 z-20 hidden rounded-3xl border border-green-100 bg-green-50 p-4 shadow-xl shadow-green-100 md:block"
          >
            <p className="text-xs font-semibold text-green-700">
              Portfolio momentum
            </p>
            <p className="mt-1 text-xl font-bold text-black">▲ 12.5%</p>
          </motion.div>
        </motion.div>
      </section>

      <BeliefSection />
      <HowItWorks />
      <ProductPreviewSection />
      <FinalCTA />
    </main>
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

function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 w-[310px] rotate-3 rounded-[3rem] border-[10px] border-black bg-white p-4 shadow-2xl md:w-[360px]"
    >
      <div className="mx-auto mb-5 h-6 w-28 rounded-full bg-black" />

      <p className="text-sm text-gray-500">Total balance</p>
      <h3 className="mt-1 text-3xl font-bold">$1,234.56</h3>
      <p className="mt-1 text-sm font-medium text-green-600">
        ▲ 12.5% this month
      </p>

      <div className="mt-7 rounded-3xl border border-gray-100 bg-gray-50 p-5">
        <p className="font-semibold">Round-Ups</p>
        <p className="text-xs text-gray-500">This month</p>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <h4 className="text-2xl font-bold">$23.45</h4>
            <p className="mt-1 text-xs font-medium text-green-600">
              2.45 USDT
            </p>
          </div>

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white shadow-lg shadow-green-200">
            ₮
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {[
          ["Coffee Shop", "$3.60", "+ $0.40"],
          ["Uber", "$12.30", "+ $0.70"],
          ["Grocery Store", "$45.80", "+ $0.20"],
          ["Pharmacy", "$18.90", "+ $0.50"],
        ].map(([name, price, round]) => (
          <div key={name} className="flex items-center justify-between text-sm">
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-xs text-gray-500">{price}</p>
            </div>
            <p className="font-semibold text-green-600">{round}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function BeliefSection() {
  return (
    <section className="bg-black px-6 py-20 text-white md:px-10 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-green-400">
          Our belief
        </p>

        <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl">
          The next generation of saving in MENA will start with small,
          automatic actions.
        </h2>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
          Hassaleh is designed around a simple idea: make the first step into
          digital assets feel effortless, familiar, and built for everyday
          people.
        </p>
      </motion.div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Connect your card",
      text: "Securely link your debit or credit cards in seconds.",
      icon: CreditCard,
    },
    {
      title: "We round up",
      text: "Every purchase is rounded up to the nearest dollar.",
      icon: Sparkles,
    },
    {
      title: "You save in crypto",
      text: "Spare change is converted into USDT and saved for you.",
      icon: Wallet,
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-wide text-green-600">
            How it works
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-tight tracking-[-0.06em] text-black md:text-6xl">
            Effortless crypto savings in 3 simple steps.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-100"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductPreviewSection() {
  return (
    <section className="bg-[#fbfcfb] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-wide text-green-600">
            Product vision
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-tight tracking-[-0.06em] text-black md:text-6xl">
            Built to make digital saving feel simple.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Hassaleh combines round-ups, USDT savings, portfolio visibility, and
            clean financial habits into one simple experience.
          </p>

          <a
            href="/product"
            className="mt-8 inline-flex items-center font-semibold text-green-700 transition hover:text-green-800"
          >
            Explore the product
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-100"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] bg-black p-6 text-white">
              <p className="text-sm text-gray-400">Digital savings</p>
              <h3 className="mt-3 text-4xl font-bold">$1,234.56</h3>
              <p className="mt-3 text-sm text-green-400">▲ 12.5% this month</p>
            </div>

            <div className="rounded-[2rem] bg-green-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Auto round-ups</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Save spare change from everyday spending automatically.
              </p>
            </div>

            <div className="rounded-[2rem] border border-gray-100 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">USDT balance</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Build a stable digital savings balance over time.
              </p>
            </div>

            <div className="rounded-[2rem] border border-gray-100 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Track momentum</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                See balances, savings activity, and progress clearly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7 }}
        className="rounded-[2.5rem] bg-green-600 p-8 text-white shadow-2xl shadow-green-100 md:p-12"
      >
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
              Ready to grow your spare change?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-green-50">
              Join the waitlist and be the first to know when Hassaleh opens
              early access.
            </p>
          </div>

          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-900"
          >
            Join the waitlist
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function LogoMark({ light = false }: { light?: boolean }) {
  const color = light ? "bg-white" : "bg-green-600";

  return (
    <div className="grid h-8 w-8 grid-cols-3 gap-1">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className={`rounded-full ${color}`} />
      ))}
    </div>
  );
}