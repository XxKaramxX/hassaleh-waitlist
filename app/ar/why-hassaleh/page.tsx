import { Globe2, PiggyBank, ShieldCheck, Sparkles } from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";

export default function ArabicWhyHassalehPage() {
  const points = [
    {
      title: "مصممة للشرق الأوسط",
      text: "حصّالة مبنية لتناسب احتياجات وعادات المستخدمين في المنطقة، مع التركيز على تجربة بسيطة وواضحة.",
      icon: Globe2,
    },
    {
      title: "مبالغ صغيرة، عادة كبيرة",
      text: "بدلاً من الحاجة إلى مبالغ كبيرة للاستثمار، تبدأ حصّالة من باقي مشترياتك اليومية.",
      icon: PiggyBank,
    },
    {
      title: "كريبتو بطريقة أبسط",
      text: "الدخول إلى عالم العملات الرقمية لا يجب أن يكون معقداً. حصّالة تجعل الادخار الرقمي أسهل وأكثر وضوحاً.",
      icon: Sparkles,
    },
    {
      title: "الثقة أولاً",
      text: "يتم بناء المنتج مع التركيز على الأمان، الشفافية، وتجربة مستخدم تبني الثقة من البداية.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-green-600">
            لماذا حصّالة
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-black md:text-7xl">
            مصممة للجيل القادم من المستثمرين في الشرق الأوسط.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            حصّالة تساعد المستخدمين على بناء عادة ادخار أفضل من خلال تحويل باقي
            مشترياتهم اليومية إلى ادخار رقمي تلقائياً.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-700">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-8 text-2xl font-semibold">{point.title}</h2>

                <p className="mt-3 leading-7 text-gray-600">{point.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-green-100 bg-gradient-to-r from-green-50 to-white p-8 md:p-12">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            حصّالة لا تحاول جعل العملات الرقمية أكثر تعقيداً. بل تجعل الادخار
            أسهل وتلقائياً.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            الرؤية طويلة المدى هي أن تصبح حصّالة أسهل طريقة للمستخدمين في
            المنطقة للادخار، الاستثمار، والوصول إلى الأصول الرقمية من خلال
            خطوات يومية بسيطة.
          </p>
        </div>
      </section>
    </main>
  );
}