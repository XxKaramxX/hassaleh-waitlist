import SiteNavbar from "@/components/SiteNavbar";

export default function ArabicTermsPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <SiteNavbar />

      <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm font-bold uppercase tracking-wide text-green-600">
          شروط الاستخدام
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-black md:text-7xl">
          شروط الاستخدام
        </h1>

        <p className="mt-6 text-gray-600">آخر تحديث: 2026</p>

        <div className="mt-12 space-y-8 text-lg leading-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black">1. نظرة عامة</h2>
            <p className="mt-3">
              تنطبق هذه الشروط على استخدامك لموقع حصّالة وقائمة الانتظار. عند
              الانضمام إلى القائمة، فإنك توافق على هذه الشروط.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              2. قائمة انتظار فقط
            </h2>
            <p className="mt-3">
              حصّالة حالياً في مرحلة ما قبل الإطلاق. الانضمام إلى قائمة
              الانتظار لا يضمن الوصول إلى المنتج أو أي خدمة مالية أو تاريخ
              إطلاق محدد.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              3. ليست نصيحة مالية
            </h2>
            <p className="mt-3">
              المعلومات الموجودة على هذا الموقع لأغراض عامة فقط ولا تعتبر نصيحة
              مالية أو استثمارية أو قانونية أو ضريبية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              4. توفر المنتج
            </h2>
            <p className="mt-3">
              قد لا تكون حصّالة متاحة في جميع الدول أو المناطق. قد تتغير
              المزايا، الأصول المدعومة، والتوفر قبل الإطلاق.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              5. معلومات المستخدم
            </h2>
            <p className="mt-3">
              توافق على تقديم معلومات صحيحة عند الانضمام إلى قائمة الانتظار.
              قد نتواصل معك عبر البريد الإلكتروني الذي تقدمه.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">6. التواصل</h2>
            <p className="mt-3">
              للاستفسار عن شروط الاستخدام، يمكنك التواصل معنا عبر:{" "}
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