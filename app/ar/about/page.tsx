"use client";

import SiteNavbar from "@/components/SiteNavbar";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

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

  const team = [
    {
      name: "كرم الرفاتي",
      role: "المؤسس والرئيس التنفيذي",
      text: [
        "أسس كرم حصّالة بعد سنوات من العمل في التكنولوجيا والاستثمار في الكريبتو. مع 8 سنوات من الخبرة في قيادة المنصات الرقمية والمشاريع متعددة الفرق، وماجستير إدارة أعمال من جامعة DePaul، وخبرة نشطة في الكريبتو منذ 2017، رأى كرم الجانبين: الفرصة التي تخلقها الأصول الرقمية، والحواجز التي تمنع المستخدم العادي من الدخول.",
        "هذه التجربة شكّلت الفكرة الأساسية وراء حصّالة: الكريبتو يجب ألا يكون متاحاً فقط لمن يفهم المنصات، المحافظ، الرسوم البيانية، وتوقيت السوق. يجب أن يكون بسيطاً بما يكفي ليبدأ المستخدم من باقي مشترياته اليومية.",
      ],
    },
    {
      name: "راما أبو دياب",
      role: "شريكة مؤسسة ورئيسة التسويق",
      text: [
        "تقود راما التسويق، استراتيجية العلامة التجارية، والنمو في حصّالة. مع ماجستير إدارة أعمال من جامعة DePaul وخلفية قوية في الأعمال، تركّز راما على بناء الثقة، الوضوح، والحضور الإقليمي المطلوب لإيصال حصّالة للمستخدمين اليوميين.",
        "كمستثمرة نشطة في الكريبتو، تفهم راما أهمية الأصول الرقمية والحاجة إلى شرحها بطريقة واضحة، قريبة من الناس، وموثوقة للمستخدمين في المنطقة.",
      ],
    },
    {
      name: "محمود جودة",
      role: "شريك مؤسس ونائب الرئيس للمنتج",
      text: [
        "يمتلك محمود 10 سنوات من الخبرة في مبيعات المنتجات، مما يعطي حصّالة فهماً عميقاً لكيفية تقييم المستخدمين للمنتجات الجديدة، تبنيها، والثقة بها. خبرته تقوي استراتيجية المنتج، تجربة المستخدم، وتنفيذ دخول السوق.",
        "كمستثمر نشط في الكريبتو، يفهم محمود لماذا تهم الأصول الرقمية ولماذا تعتمد موجة التبني القادمة على منتجات تبدو بسيطة، موثوقة، ومبنية حول سلوك المستخدم الحقيقي.",
      ],
    },
  ];

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#fbfcfb] text-[#090d0b]"
    >
      <SiteNavbar />

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="absolute left-1/2 top-20 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-green-100/50 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 gap-14 border-b border-gray-200 pb-20 md:grid-cols-[1.35fr_0.65fr] md:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-sm font-bold uppercase tracking-wide text-green-600"
            >
              من نحن
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.85 }}
              className="mt-8 max-w-5xl text-6xl font-semibold leading-[1.02] tracking-[-0.06em] text-black md:text-8xl"
            >
              نبني طبقة الادخار الرقمي للشرق الأوسط.
            </motion.h1>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.85 }}
            className="flex flex-col justify-end"
          >
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
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-sm font-bold uppercase tracking-wide text-green-600"
            >
              قيمنا
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.75 }}
              className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.055em] text-black md:text-5xl"
            >
              المبادئ التي توجه كل ما نبنيه.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.75 }}
              className="mt-6 max-w-xs text-base leading-7 text-gray-600"
            >
              في حصّالة، قيمنا موجودة لخدمة المستخدمين أولاً.
            </motion.p>
          </motion.div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
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
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-black">
                      {value.title}
                    </h3>
                  </div>

                  <p className="text-base leading-7 text-gray-700">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-black px-6 py-20 text-white md:px-10 md:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ staggerChildren: 0.12 }}
          className="relative mx-auto max-w-7xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-sm font-bold uppercase tracking-wide text-green-400"
          >
            قناعتنا
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-6 max-w-6xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] md:text-7xl"
          >
            الكريبتو ليس مجرد فئة أصول جديدة. نؤمن أنه يمكن أن يصبح بنية مالية
            جديدة للشرق الأوسط.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-8 max-w-3xl text-xl leading-9 text-gray-300"
          >
            حصّالة موجودة لتجعل هذا المستقبل أسهل في الوصول. نريد مساعدة
            المستخدمين على البدء بمبالغ صغيرة، بناء الثقة، والمشاركة في الجيل
            القادم من التمويل الرقمي.
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-sm font-bold uppercase tracking-wide text-green-600"
            >
              فريقنا
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.75 }}
              className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.055em] text-black md:text-5xl"
            >
              نبني بخبرة تشغيلية وقناعة حقيقية بالكريبتو.
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-100"
                >
                  <p className="text-sm font-bold uppercase tracking-wide text-green-600">
                    {member.role}
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-black">
                    {member.name}
                  </h3>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
              {team.map((member, index) => (
                <motion.div
                  key={`${member.name}-story`}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[0.35fr_1fr]"
                >
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-black">
                      {member.name}
                    </h3>
                    <p className="mt-2 font-semibold text-green-700">
                      {member.role}
                    </p>
                  </div>

                  <div className="space-y-5 text-lg leading-8 text-gray-700">
                    {member.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mt-10 rounded-[2rem] bg-green-50 p-8"
            >
              <p className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-black md:text-4xl">
                خلفيات مختلفة. مهمة واحدة: بناء حصّالة كمنصة ادخار رقمي موثوقة
                تساعد على تحسين الوصول المالي، تبني الكريبتو، وخلق فرص اقتصادية
                طويلة المدى في الشرق الأوسط.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-20 md:grid-cols-[0.45fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-sm font-bold uppercase tracking-wide text-green-600"
            >
              أين نبني
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.75 }}
              className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.055em] text-black md:text-5xl"
            >
              نبني بين شيكاغو وعمّان. وتركيزنا على الشرق الأوسط.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                city: "شيكاغو، الولايات المتحدة",
                text: "حيث بدأت الرحلة. موطن شبكتنا وفريقنا وشركائنا الأوائل.",
              },
              {
                city: "عمّان، الأردن",
                text: "حيث ننمو. عمّان مخططة كمقرنا الإقليمي مع التوسع في منطقة الشرق الأوسط وشمال أفريقيا.",
              },
            ].map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-gray-200 pt-8"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                  {location.city}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-7 text-gray-700">
                  {location.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] bg-green-600 p-8 text-white shadow-2xl shadow-green-100 md:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                كن جزءاً من مستقبل الادخار في الشرق الأوسط.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-green-50">
                انضم إلى قائمة الانتظار وكن من أوائل من يعرفون عند فتح الوصول
                المبكر.
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
        </motion.div>
      </section>
    </main>
  );
}