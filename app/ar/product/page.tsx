import SiteNavbar from "@/components/SiteNavbar";
import {
  ArrowUpRight,
  BarChart3,
  CreditCard,
  LockKeyhole,
  Wallet,
  Zap,
} from "lucide-react";

export default function ArabicProductPage() {
  const productPillars = [
    {
      title: "تقريب يعمل بهدوء",
      text: "حصّالة مصممة لتحويل الإنفاق اليومي إلى ادخار رقمي تلقائي بدون أن يحتاج المستخدم للتفكير في كل عملية شراء.",
      icon: Zap,
    },
    {
      title: "طبقة ادخار مستقرة",
      text: "الباقي من المشتريات مصمم ليتم تحويله إلى USDT، مما يساعد المستخدم على بناء رصيد رقمي قبل الدخول إلى مزايا كريبتو أوسع.",
      icon: Wallet,
    },
    {
      title: "وضوح في تتبع المحفظة",
      text: "يجب أن يفهم المستخدم دائماً ماذا ادخر، أين ذهب المبلغ، وكيف ينمو ادخاره الرقمي مع الوقت.",
      icon: BarChart3,
    },
    {
      title: "مبني حول الثقة",
      text: "تجربة المنتج يتم بناؤها مع التركيز على الأمان، البساطة، وثقة المستخدم من البداية.",
      icon: LockKeyhole,
    },
  ];

  const productFlow = [
    {
      step: "01",
      title: "اربط",
      text: "يربط المستخدم البطاقات المؤهلة ويختار كيف يريد من حصّالة التعامل مع مبالغ التقريب.",
    },
    {
      step: "02",
      title: "قرّب",
      text: "المشتريات اليومية تنشئ مبالغ صغيرة من الباقي بشكل تلقائي.",
    },
    {
      step: "03",
      title: "ادّخر",
      text: "عندما تصل مبالغ التقريب إلى الحد المطلوب، يتم تصميم الرصيد للانتقال إلى ادخار USDT.",
    },
    {
      step: "04",
      title: "تتبع",
      text: "يرى المستخدم ادخاره، نشاطه، وزخم محفظته في واجهة واحدة بسيطة.",
    },
  ];

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="absolute left-1/2 top-24 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-green-100/50 blur-3xl" />

        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-green-600">
              المنتج
            </p>

            <h1 className="mt-8 max-w-4xl text-6xl font-semibold leading-[1.02] tracking-[-0.06em] text-black md:text-8xl">
              ادخار رقمي يبدأ من إنفاقك اليومي.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
              يتم بناء حصّالة لمساعدة المستخدمين على ربط البطاقات، تقريب
              المشتريات، الادخار بـ USDT، وتتبع الادخار الرقمي من خلال تجربة
              بسيطة ومناسبة للمبتدئين.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/ar#waitlist"
                className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-7 py-4 font-semibold text-white shadow-lg shadow-green-100 transition hover:-translate-y-0.5 hover:bg-green-700"
              >
                انضم إلى قائمة الانتظار
                <ArrowUpRight className="mr-2 h-5 w-5" />
              </a>

              <a
                href="#product-flow"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-7 py-4 font-semibold text-black transition hover:border-green-200 hover:text-green-600"
              >
                شاهد طريقة العمل
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-8 top-8 h-80 w-80 rounded-full bg-green-100 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-gray-200 bg-white p-5 shadow-2xl shadow-gray-100">
              <div dir="ltr" className="rounded-[2rem] bg-black p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Digital savings</p>
                    <h2 className="mt-2 text-4xl font-bold">$1,234.56</h2>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600">
                    ₮
                  </div>
                </div>

                <div className="mt-8 h-36 rounded-[1.5rem] bg-white/5 p-4">
                  <div className="flex h-full items-end gap-3">
                    {[42, 58, 51, 75, 66, 96, 84, 120].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="w-full rounded-full bg-green-500"
                          style={{ height }}
                        />
                      )
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm font-medium text-green-400">
                  ▲ 12.5% this month
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-green-50 p-5">
                  <p className="text-sm text-gray-500">مبالغ التقريب هذا الشهر</p>
                  <h3 className="mt-2 text-3xl font-bold">$23.45</h3>
                  <p className="mt-2 text-sm font-semibold text-green-700">
                    تم ادخار 2.45 USDT
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5">
                  <p className="text-sm text-gray-500">التحويل القادم</p>
                  <h3 className="mt-2 text-3xl font-bold">$5.00</h3>
                  <p className="mt-2 text-sm font-semibold text-green-700">
                    ادخار حسب حد التحويل
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3 rounded-[1.5rem] border border-gray-100 bg-white p-5">
                {[
                  ["Coffee Shop", "$3.60", "+ $0.40"],
                  ["Ride share", "$12.30", "+ $0.70"],
                  ["Grocery Store", "$45.80", "+ $0.20"],
                ].map(([merchant, amount, roundUp]) => (
                  <div
                    key={merchant}
                    dir="ltr"
                    className="flex items-center justify-between text-sm"
                  >
                    <div>
                      <p className="font-medium text-black">{merchant}</p>
                      <p className="text-xs text-gray-500">{amount}</p>
                    </div>

                    <p className="font-semibold text-green-600">{roundUp}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-4 top-10 hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl shadow-gray-200 md:block">
              <p className="text-xs font-medium text-gray-500">تقريب تلقائي</p>
              <p className="mt-1 text-2xl font-bold text-black">+$0.70</p>
            </div>

            <div className="absolute -left-4 bottom-20 hidden rounded-3xl border border-green-100 bg-green-50 p-4 shadow-xl shadow-green-100 md:block">
              <p className="text-xs font-semibold text-green-700">
                ادخار مستقر
              </p>
              <p className="mt-1 text-xl font-bold text-black">USDT جاهز</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="product-flow"
        className="border-y border-gray-100 bg-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.45fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-green-600">
                مسار المنتج
              </p>

              <h2 className="mt-5 max-w-md text-5xl font-semibold leading-tight tracking-[-0.05em] text-black md:text-6xl">
                مبني ليجعل أول خطوة بسيطة.
              </h2>
            </div>

            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {productFlow.map((item) => (
                <div
                  key={item.step}
                  className="grid grid-cols-1 gap-5 py-8 md:grid-cols-[80px_0.5fr_1fr]"
                >
                  <p className="text-xl font-semibold text-green-600">
                    {item.step}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-black">
                    {item.title}
                  </h3>

                  <p className="text-base leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-green-600">
              التجربة الأساسية
            </p>

            <h2 className="mt-5 max-w-md text-5xl font-semibold leading-tight tracking-[-0.05em] text-black md:text-6xl">
              كل شيء يجب أن يكون واضحاً، تلقائياً، وموثوقاً.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {productPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="group rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-100"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.04em] text-black">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-wide text-green-400">
            لماذا يهم المنتج
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] md:text-7xl">
            معظم الناس لا يحتاجون إلى منصة كريبتو أكثر تعقيداً. يحتاجون إلى
            طريقة بسيطة للبدء.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
            حصّالة مصممة لتبدأ من مكان المستخدم الطبيعي: الإنفاق اليومي،
            الادخار التلقائي، وبناء الثقة خطوة صغيرة في كل مرة.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="rounded-[2.5rem] bg-green-600 p-8 text-white shadow-2xl shadow-green-100 md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                كن من أوائل من يجربون حصّالة.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-green-50">
                انضم إلى قائمة الانتظار ليصلك إشعار عند فتح الوصول المبكر.
              </p>
            </div>

            <a
              href="/ar#waitlist"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-900"
            >
              انضم إلى قائمة الانتظار
              <ArrowUpRight className="mr-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}