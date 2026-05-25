import { BarChart3, CreditCard, Wallet, Zap } from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export default function ArabicProductPage() {
  const features = [
    {
      title: "التقريب التلقائي",
      text: "يتم تقريب مشترياتك اليومية بحيث يتم ادخار الباقي بدون أي مجهود إضافي.",
      icon: Zap,
    },
    {
      title: "ربط البطاقات",
      text: "سيتمكن المستخدمون من ربط بطاقات الخصم أو الائتمان لتتبع مبالغ التقريب المؤهلة.",
      icon: CreditCard,
    },
    {
      title: "رصيد ادخار بـ USDT",
      text: "تم تصميم حصّالة لتحويل الباقي إلى رصيد ادخار رقمي مستقر باستخدام USDT.",
      icon: Wallet,
    },
    {
      title: "تتبع المحفظة",
      text: "يمكن للمستخدمين تتبع الرصيد والنمو ونشاط الادخار الرقمي من خلال تجربة بسيطة وواضحة.",
      icon: BarChart3,
    },
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-green-600">
            المنتج
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-black md:text-7xl">
            باقي مشترياتك، التقريب التلقائي، والادخار الرقمي في تطبيق واحد.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            يتم بناء حصّالة لجعل الادخار الرقمي بسيطاً وتلقائياً ومتاحاً
            للمستخدمين في حياتهم اليومية.
          </p>

          <a
            href="/ar#waitlist"
            className="mt-8 inline-flex rounded-2xl bg-green-600 px-7 py-4 font-semibold text-white shadow-lg shadow-green-100 transition hover:bg-green-700"
          >
            انضم إلى قائمة الانتظار
          </a>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-green-100 blur-3xl" />

          <div
            dir="ltr"
            className="relative z-10 w-full max-w-md rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-100"
          >
            <div className="rounded-3xl bg-gray-50 p-6">
              <p className="text-sm text-gray-500">Portfolio value</p>
              <h2 className="mt-2 text-4xl font-bold">$1,234.56</h2>
              <p className="mt-2 text-sm font-semibold text-green-600">
                ▲ 12.5% this month
              </p>

              <div className="mt-8 h-40 rounded-3xl bg-gradient-to-t from-green-100 to-white p-5">
                <div className="flex h-full items-end gap-3">
                  {[35, 52, 46, 70, 62, 90, 82, 110].map((height, index) => (
                    <div
                      key={index}
                      className="w-full rounded-full bg-green-500"
                      style={{ height }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-gray-100 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Auto Round-Ups</p>
                  <p className="text-sm text-gray-500">This month</p>
                </div>

                <p className="text-2xl font-bold">$23.45</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-700">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-7 text-xl font-semibold">{feature.title}</h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}