"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function SiteNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isArabic = pathname.startsWith("/ar");

  function getLanguageSwitchPath() {
    if (isArabic) {
      const englishPath = pathname.replace(/^\/ar/, "");
      return englishPath === "" ? "/" : englishPath;
    }

    return pathname === "/" ? "/ar" : `/ar${pathname}`;
  }

  const navLinks = isArabic
    ? [
        { label: "طريقة العمل", href: "/ar#how-it-works" },
        { label: "لماذا حصّالة", href: "/ar/why-hassaleh" },
        { label: "المنتج", href: "/ar/product" },
        { label: "من نحن", href: "/ar/about" },
        { label: "الأسئلة الشائعة", href: "/ar/faq" },
      ]
    : [
        { label: "How it works", href: "/#how-it-works" },
        { label: "Why Hassaleh", href: "/why-hassaleh" },
        { label: "Product", href: "/product" },
        { label: "About", href: "/about" },
        { label: "FAQ", href: "/faq" },
      ];

  return (
    <header className="relative border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href={isArabic ? "/ar" : "/"} className="flex items-center gap-3">
          <LogoMark />
          <span className="font-semibold tracking-[0.35em]">HASSALEH</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-green-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={getLanguageSwitchPath()}
            className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-black transition hover:border-green-200 hover:text-green-600"
          >
            {isArabic ? "EN" : "AR"}
          </a>

          <a
            href={isArabic ? "/ar#waitlist" : "/#waitlist"}
            className="rounded-2xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-green-100 transition hover:bg-green-700"
          >
            {isArabic ? "انضم للقائمة" : "Join the waitlist"}
            <ArrowUpRight className="ml-2 inline h-4 w-4" />
          </a>
        </div>

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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 transition hover:bg-green-50 hover:text-green-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href={getLanguageSwitchPath()}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-2xl border border-gray-200 px-4 py-3 text-center transition hover:border-green-200 hover:text-green-600"
            >
              {isArabic ? "EN" : "AR"}
            </a>

            <a
              href={isArabic ? "/ar#waitlist" : "/#waitlist"}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center rounded-2xl bg-green-600 px-5 py-4 font-semibold text-white"
            >
              {isArabic ? "انضم للقائمة" : "Join the waitlist"}
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