"use client";

import { useEffect, useState } from "react";
import SiteNavbar from "@/components/SiteNavbar";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  Menu,
  ShieldCheck,
  Sparkles,
  Wallet,
  X,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-12 md:grid-cols-2 md:px-10 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
            Launching soon
          </div>

          <h1 className="max-w-xl text-6xl font-semibold tracking-[-0.06em] text-black md:text-7xl">
            Turn spare change into{" "}
            <span className="text-green-600">crypto.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-gray-600">
            Hassaleh automatically rounds up your daily purchases and converts
            spare change into digital savings.
          </p>

          <WaitlistCard />

          <div className="mt-8 flex max-w-md items-start gap-3 text-sm text-gray-600">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-green-600" />
            <p>
              Secure, simple, and built for the next generation of MENA
              investors.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative flex justify-center"
        >
          <div className="absolute right-10 top-20 h-96 w-96 rounded-full bg-green-100 blur-3xl" />
          <PhoneMockup />
        </motion.div>
      </section>

      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="/" className="flex items-center gap-3">
          <LogoMark />
          <span className="font-semibold tracking-[0.35em]">HASSALEH</span>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          <a href="#how-it-works" className="transition hover:text-green-600">
            How it works
          </a>

          <a
            href="/why-hassaleh"
            className="transition hover:text-green-600"
          >
            Why Hassaleh
          </a>

          <a href="/product" className="transition hover:text-green-600">
            Product
          </a>

          <a href="/faq" className="transition hover:text-green-600">
            FAQ
          </a>
        </nav>

        <a
          href="#waitlist"
          className="hidden rounded-2xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-green-100 transition hover:bg-green-700 md:flex"
        >
          Join the waitlist
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-black md:hidden"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-gray-100 bg-white px-6 py-5 shadow-xl shadow-gray-100 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold">
            <a
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-2xl px-4 py-3 transition hover:bg-green-50 hover:text-green-600"
            >
              How it works
            </a>

            <a
              href="/why-hassaleh"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-2xl px-4 py-3 transition hover:bg-green-50 hover:text-green-600"
            >
              Why Hassaleh
            </a>

            <a
              href="/product"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-2xl px-4 py-3 transition hover:bg-green-50 hover:text-green-600"
            >
              Product
            </a>

            <a
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-2xl px-4 py-3 transition hover:bg-green-50 hover:text-green-600"
            >
              FAQ
            </a>

            <a
              href="/#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center rounded-2xl bg-green-600 px-5 py-4 font-semibold text-white"
            >
              Join the waitlist
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
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
      <div
        id="waitlist"
        className="mt-8 max-w-md rounded-[1.75rem] border border-green-100 bg-white p-8 shadow-xl shadow-green-100"
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
      </div>
    );
  }

  return (
    <form
      id="waitlist"
      onSubmit={handleSubmit}
      className="mt-8 max-w-md rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-xl shadow-gray-100"
    >
      <h3 className="text-xl font-semibold">Join the waitlist</h3>

      <p className="mt-1 text-sm text-gray-500">
        Be the first to start saving effortlessly.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Full name"
          className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-500"
        />

        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          type="email"
          className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-500"
        />
      </div>

      <select
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        className="mt-3 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-500 outline-none focus:border-green-500"
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
        className="mt-4 flex w-full items-center justify-center rounded-xl bg-green-600 px-5 py-4 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
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
    <div className="relative z-10 w-[310px] rotate-3 rounded-[3rem] border-[10px] border-black bg-white p-4 shadow-2xl md:w-[360px]">
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
    </div>
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
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-green-600">
            How it works
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Effortless crypto savings in 3 simple steps.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-[1.75rem] border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-700">
                    <Icon className="h-7 w-7" />
                  </div>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
      <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-green-100 bg-gradient-to-r from-green-50 to-white p-8 md:flex-row md:items-center md:p-12">
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-green-600 text-white">
            <LogoMark light />
          </div>

          <h2 className="max-w-sm text-3xl font-semibold tracking-tight">
            Ready to grow your spare change?
          </h2>
        </div>

        <p className="max-w-xs text-gray-600">
          Join the waitlist and be the first to know when we launch.
        </p>

        <a
          href="#waitlist"
          className="rounded-2xl bg-green-600 px-7 py-4 font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-700"
        >
          Join the waitlist
        </a>
      </div>
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