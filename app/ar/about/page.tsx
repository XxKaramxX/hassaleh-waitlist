import SiteNavbar from "@/components/SiteNavbar";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

export default function ArabicAboutPage() {
  const values = [
    {
      number: "01",
      title: "ثقة المستخدم أولاً",
      text: "الثقة تُبنى بصعوبة ويمكن خسارتها بسرعة. لذلك يتم بناء حصّالة مع التركيز على الأمان، الوضوح، وثقة المستخدم في كل قرار.",
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "المشاركة قوة",
      text: "المبالغ الصغيرة مهمة. نؤمن أن المستخدمين يستحقون الوصول إلى الأصول الرقمية بدون الحاجة إلى مبالغ كبيرة في البداية.",
      icon: Users,
    },
    {
      number: "03",
      title: "مصممة للمنطقة",
      text: "حصّالة ليست منتجاً غربياً يتم نسخه إلى الشرق الأوسط. يتم بناؤها بناءً على عملات المنطقة، عادات المستخدمين، وواقعهم المالي.",
      icon: Globe2,
    },
    {
      number: "04",
      title: "تفكير من المبادئ الأولى",
      text: "لا نفترض أن الكريبتو يجب أن يبقى معقداً. نعيد التفكير في نقطة البداية: الإنفاق اليومي، الادخار التلقائي، والتعليم البسيط.",
      icon: Sparkles,
    },
    {
      number: "05",
      title: "تركيز وانضباط",
      text: "نبني بتركيز. الهدف ليس إضافة المزيد من التعقيد، بل تقديم منتج يستطيع الناس فهمه، الوثوق به، واستخدامه يومياً.",
      icon: Target,
    },
    {
      number: "06",
      title: "أداء عالٍ",
      text: "نتحرك بسرعة، بملكية، وبتركيز على التنفيذ. إذا كان هناك شيء مربك، بطيء، أو غير واضح، نقوم بإصلاحه.",
      icon: Zap,
    },
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 border-b border-gray-200 pb-20 md:grid-cols-[1.35fr_0.65fr] md:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-green-600">
              من نحن
            </p>

            <h1 className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.07em] text-black md:text-8xl">
              مهمتنا أن نجعل الادخار الرقمي سهلاً وتلقائياً للشرق الأوسط.
            </h1>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-xl leading-9 text-gray-700">
              حصّالة تبني أسهل طريقة للمستخدمين لتحويل باقي مشترياتهم اليومية
              إلى أصول رقمية.
            </p>

            <p className="mt-8 text-xl leading-9 text-gray-700">
              نؤمن أن الوصول إلى التمويل الحديث يجب ألا يكون محصوراً بمن يفهم
              المنصات، المحافظ، الرسوم البيانية، وتوقيت السوق.
            </p>

            <a
              href="/ar#waitlist"
              className="mt-10 inline-flex items-center text-base font-semibold text-green-700 transition hover:text-green-800"
            >
              انضم إلى قائمة الانتظار
              <ArrowUpRight className="mr-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-green-600">
              قيمنا
            </p>

            <h2 className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.05em] text-black md:text-5xl">
              المبادئ التي توجه كل ما نبنيه.
            </h2>

            <p className="mt-6 max-w-xs text-base leading-7 text-gray-600">
              في حصّالة، قيمنا موجودة لخدمة المستخدمين أولاً.
            </p>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
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
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-black">
                      {value.title}
                    </h3>
                  </div>

                  <p className="text-base leading-7 text-gray-700">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.25fr_1fr]">
          <p className="text-sm font-bold uppercase tracking-wide text-green-600">
            إيماننا
          </p>

          <h2 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-black md:text-7xl">
            نؤمن أن الادخار يجب أن يبدأ صغيراً، يكون تلقائياً، ويفتح الباب
            للوصول إلى الأصول الرقمية.
          </h2>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-green-600">
              المؤسسون
            </p>

            <h2 className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.05em] text-black md:text-5xl">
              نبني بخبرة تنفيذية وتجربة حقيقية في السوق.
            </h2>
          </div>

          <div className="max-w-3xl space-y-8 text-lg leading-8 text-gray-700">
            <p>
              <span className="font-semibold text-green-700">
                كرم الرفاتي
              </span>{" "}
              أسس حصّالة بعد سنوات من العمل في التكنولوجيا والاستثمار في
              الكريبتو. مع 8 سنوات من الخبرة في قيادة المنصات الرقمية والمشاريع
              متعددة الفرق، وماجستير إدارة أعمال من جامعة DePaul، وخبرة نشطة في
              الكريبتو منذ 2017، رأى كرم الجانبين: الفرصة التي تخلقها الأصول
              الرقمية، والحواجز التي تمنع المستخدم العادي من الدخول.
            </p>

            <p>
              <span className="font-semibold text-green-700">
                راما أبو دياب
              </span>{" "}
              تقود التسويق ونمو العلامة التجارية في حصّالة. مع ماجستير إدارة
              أعمال من جامعة DePaul وخلفية قوية في الأعمال، تركّز راما على بناء
              الثقة، الوضوح، والحضور الإقليمي المطلوب لإيصال حصّالة للمستخدمين.
            </p>

            <p className="font-semibold text-black">
              خلفيات مختلفة. مهمة واحدة: جعل الادخار الرقمي بسيطاً، موثوقاً،
              ومتاحاً للمنطقة.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-green-600">
              أين نبني
            </p>

            <h2 className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.05em] text-black md:text-5xl">
              نبني بين شيكاغو وعمّان. وتركيزنا على الشرق الأوسط.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                شيكاغو، الولايات المتحدة
              </h3>
              <p className="mt-4 max-w-sm text-base leading-7 text-gray-700">
                حيث بدأت الرحلة. موطن شبكتنا وفريقنا وشركائنا الأوائل.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                عمّان، الأردن
              </h3>
              <p className="mt-4 max-w-sm text-base leading-7 text-gray-700">
                حيث ننمو. عمّان مخططة كمقرنا الإقليمي مع التوسع في منطقة الشرق
                الأوسط وشمال أفريقيا.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="rounded-[2rem] bg-black p-8 text-white md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                كن جزءاً من مستقبل الادخار في الشرق الأوسط.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-300">
                انضم إلى قائمة الانتظار وكن من أوائل من يعرفون عند إطلاق
                حصّالة.
              </p>
            </div>

            <a
              href="/ar#waitlist"
              className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
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