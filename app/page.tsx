export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-mono tracking-wide uppercase">
          Developer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-fill forms with{" "}
          <span className="text-[#58a6ff]">realistic test data</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop typing fake@test.com over and over. FormFiller Dev detects every input field and fills it with contextually correct data — names, emails, addresses, phone numbers — in one click.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get FormFiller Dev — $12/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn more
          </a>
        </div>
        <p className="mt-4 text-xs text-[#6e7681]">Works on Chrome & Edge · Cancel anytime</p>
      </section>

      {/* Feature pills */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {["Smart field detection", "Custom data sets", "One-click fill", "Team templates"].map((f) => (
            <div key={f} className="rounded-lg bg-[#161b22] border border-[#30363d] px-3 py-3 text-sm text-[#8b949e]">
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="rounded-xl bg-[#161b22] border border-[#58a6ff] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-sm text-[#58a6ff] font-mono uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Chrome & Edge extension",
              "Unlimited form fills",
              "Custom data templates",
              "Team sharing (up to 5 seats)",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start subscription
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">No contracts · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does FormFiller Dev detect the right data for each field?",
              a: "The extension inspects field names, labels, placeholders, and autocomplete attributes to infer context. An email field gets a realistic email, a phone field gets a valid phone number, and so on."
            },
            {
              q: "Can I create custom data sets for my specific app?",
              a: "Yes. The web dashboard lets you build named templates with custom values. Your extension syncs them automatically so you can fill domain-specific fields like account IDs or product codes."
            },
            {
              q: "Does it work on all websites?",
              a: "FormFiller Dev works on any page you visit in Chrome or Edge, including localhost and staging environments — perfect for testing before production."
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-lg bg-[#161b22] border border-[#30363d] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} FormFiller Dev. All rights reserved.
      </footer>
    </main>
  );
}
