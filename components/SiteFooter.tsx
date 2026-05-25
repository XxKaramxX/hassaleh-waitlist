"use client";

import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="border-t border-gray-100 bg-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-3 text-black">
          <LogoMark />
          <span className="font-semibold tracking-[0.35em]">HASSALEH</span>
        </div>

        <p className="text-sm text-gray-500">
          {isArabic
            ? "© 2026 Hassaleh. جميع الحقوق محفوظة."
            : "© 2026 Hassaleh. All rights reserved."}
        </p>

        <div className="flex flex-col items-start gap-3 md:items-center">
          <p className="text-xs font-semibold text-gray-500">
            {isArabic ? "تابعنا" : "Follow us"}
          </p>

          <div className="flex items-center gap-5 text-gray-500">
            <a
              href="#"
              className="text-lg font-semibold transition hover:text-black"
            >
              𝕏
            </a>

            <a
              href="#"
              className="text-sm font-semibold transition hover:text-green-600"
            >
              IG
            </a>

            <a
              href="#"
              className="text-sm font-semibold transition hover:text-green-600"
            >
              in
            </a>

            <a
              href="#"
              className="text-sm font-semibold transition hover:text-green-600"
            >
              ▶
            </a>
          </div>
        </div>

        <div className="flex gap-6 text-sm text-gray-500">
          <a
            href={isArabic ? "/ar/privacy" : "/privacy"}
            className="transition hover:text-green-600"
          >
            {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
          </a>

          <a
            href={isArabic ? "/ar/terms" : "/terms"}
            className="transition hover:text-green-600"
          >
            {isArabic ? "شروط الاستخدام" : "Terms of Service"}
          </a>
        </div>
      </div>
    </footer>
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