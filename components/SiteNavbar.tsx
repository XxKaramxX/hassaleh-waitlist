"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function SiteNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="/" className="flex items-center gap-3">
          <LogoMark />
          <span className="font-semibold tracking-[0.35em]">HASSALEH</span>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          <a href="/#how-it-works" className="transition hover:text-green-600">
            How it works
          </a>

          <a href="/why-hassaleh" className="transition hover:text-green-600">
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
          href="/#waitlist"
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

function LogoMark() {
  return (
    <div className="grid h-8 w-8 grid-cols-3 gap-1">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className="rounded-full bg-green-600" />
      ))}
    </div>
  );
}