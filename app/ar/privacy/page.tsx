import SiteNavbar from "@/components/SiteNavbar";

export default function ArabicPrivacyPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm font-bold uppercase tracking-wide text-green-600">
          سياسة الخصوصية
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-black md:text-7xl">
          سياسة الخصوصية
        </h1>

        <p className="mt-6 text-gray-600">آخر تحديث: 2026</p>

        <div className="mt-12 space-y-8 text-lg leading-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black">1. نظرة عامة</h2>
            <p className="mt-3">
              تقوم حصّالة حالياً بجمع بيانات قائمة الانتظار للوصول المبكر. توضح
              هذه السياسة نوع المعلومات التي نجمعها وكيف نستخدمها ونحميها.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              2. المعلومات التي نجمعها
            </h2>
            <p className="mt-3">
              عند الانضمام إلى قائمة الانتظار، قد نجمع الاسم، البريد
              الإلكتروني، الدولة، وتاريخ التسجيل.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              3. كيف نستخدم المعلومات
            </h2>
            <p className="mt-3">
              نستخدم هذه المعلومات لإدارة قائمة الانتظار، إرسال تحديثات عن
              حصّالة، إبلاغك بالوصول المبكر، وفهم الاهتمام في الأسواق المختلفة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              4. مشاركة المعلومات
            </h2>
            <p className="mt-3">
              لا نقوم ببيع معلوماتك الشخصية. قد نستخدم مزودي خدمات موثوقين
              لاستضافة الموقع وتخزين بيانات قائمة الانتظار وتشغيل الخدمة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              5. حماية البيانات
            </h2>
            <p className="mt-3">
              نستخدم إجراءات معقولة لحماية معلومات قائمة الانتظار، لكن لا يمكن
              ضمان أمان أي نظام إلكتروني بشكل كامل.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">6. التواصل</h2>
            <p className="mt-3">
              للاستفسار عن سياسة الخصوصية، يمكنك التواصل معنا عبر:{" "}
              <span className="font-semibold text-black">
                hello@hassaleh.com
              </span>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}