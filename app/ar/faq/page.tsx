import SiteNavbar from "@/components/SiteNavbar";

const faqs = [
  {
    question: "متى سيتم إطلاق حصّالة؟",
    answer:
      "حصّالة حالياً في مرحلة التحضير للوصول المبكر. انضم إلى قائمة الانتظار ليصلك إشعار عند فتح النسخة التجريبية.",
  },
  {
    question: "ما هي الدول التي ستدعمها حصّالة؟",
    answer:
      "حصّالة يتم بناؤها مع التركيز على الشرق الأوسط، وستكون الأردن من الأسواق الأساسية في البداية.",
  },
  {
    question: "كيف تعمل ميزة تقريب المشتريات؟",
    answer:
      "عند قيام المستخدم بعملية شراء، تقوم حصّالة بتقريب المبلغ وحفظ الباقي تلقائياً ضمن رصيد ادخار رقمي.",
  },
  {
    question: "هل ستدعم حصّالة USDT؟",
    answer:
      "الخطة هي دعم USDT كخيار ادخار رقمي مستقر، مع إضافة مزايا عملات رقمية أخرى لاحقاً.",
  },
  {
    question: "هل حصّالة بنك؟",
    answer:
      "لا. حصّالة يتم تطويرها كمنتج تقني مالي يركز على الادخار الرقمي والوصول السهل إلى العملات الرقمية.",
  },
  {
    question: "هل ستكون هناك رسوم؟",
    answer:
      "سيتم توضيح تفاصيل الرسوم قبل الإطلاق. الهدف هو أن تكون الرسوم بسيطة وواضحة ومناسبة للمستخدمين الجدد.",
  },
];

export default function ArabicFAQPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm font-bold uppercase tracking-wide text-green-600">
          الأسئلة الشائعة
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-black md:text-7xl">
          إجابات بسيطة على أهم الأسئلة.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          نظرة واضحة على فكرة حصّالة، طريقة عملها، وما يمكن للمستخدمين توقعه
          قبل الإطلاق.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <p className="mt-3 leading-7 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-green-100 bg-green-50 p-8">
          <h2 className="text-2xl font-semibold">
            مهتم بالحصول على وصول مبكر؟
          </h2>

          <p className="mt-3 text-gray-600">
            انضم إلى قائمة الانتظار وكن من أوائل من يعرفون عند فتح النسخة
            التجريبية من حصّالة.
          </p>

          <a
            href="/ar#waitlist"
            className="mt-6 inline-flex rounded-2xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            انضم إلى قائمة الانتظار
          </a>
        </div>
      </section>
    </main>
  );
}