import { ArrowLeft, BarChart3, CreditCard, Wallet, Zap } from "lucide-react";

export default function ProductPage() {
  const features = [
    {
      title: "Automatic round-ups",
      text: "Everyday purchases can be rounded up so spare change is saved without extra effort.",
      icon: Zap,
    },
    {
      title: "Card-connected savings",
      text: "Users will be able to connect debit or credit cards and let Hassaleh track eligible round-ups.",
      icon: CreditCard,
    },
    {
      title: "USDT savings balance",
      text: "Spare change is designed to convert into a stable digital savings balance using USDT.",
      icon: Wallet,
    },
    {
      title: "Portfolio tracking",
      text: "Users can track balances, growth, and digital savings activity in a clean app experience.",
      icon: BarChart3,
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbfcfb] text-[#090d0b]">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="/" className="flex items-center gap-3">
            <LogoMark />
            <span className="font-semibold tracking-[0.35em]">HASSALEH</span>
          </a>

          <a
            href="/"
            className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold transition hover:border-green-200 hover:text-green-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-green-600">
            Product
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-black md:text-7xl">
            Spare change, round-ups, and crypto savings in one simple app.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Hassaleh is being built to make crypto savings feel automatic,
            simple, and accessible for everyday users.
          </p>

          <a
            href="/#waitlist"
            className="mt-8 inline-flex rounded-2xl bg-green-600 px-7 py-4 font-semibold text-white shadow-lg shadow-green-100 transition hover:bg-green-700"
          >
            Join the waitlist
          </a>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-green-100 blur-3xl" />

          <div className="relative z-10 w-full max-w-md rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-100">
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

function LogoMark() {
  return (
    <div className="grid h-8 w-8 grid-cols-3 gap-1">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className="rounded-full bg-green-600" />
      ))}
    </div>
  );
}