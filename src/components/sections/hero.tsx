export function HeroSection({
  productCount,
  partnerCount,
}: {
  productCount: number;
  partnerCount: number;
}) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="beam-highlight right-[-10%] top-[-10%]" />
      <div className="beam-highlight left-[-15%] top-[45%]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-16 md:flex-row md:items-center">
        <div className="max-w-xl space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700">
            2007-dən bu günə
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Baytarlıq ekosistemi üçün
            <span className="block text-[var(--brand)]">daha ağıllı həllər</span>
          </h1>
          <p className="text-base text-slate-100/90">
            Agrovet heyvandarlıq və quşçuluq təsərrüfatları üçün yüksək
            keyfiyyətli dərman preparatları, yem əlavələri və konsultinq
            xidmətləri təqdim edir. AI ilə gücləndirilmiş platforma sayəsində
            simptom əsaslı məhsul tövsiyələri indi daha sürətli və dəqiqdir.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass-panel rounded-2xl p-4">
              <p className="text-3xl font-semibold text-[var(--brand)]">
                {productCount.toLocaleString("az-Latn-AZ")}+
              </p>
              <p className="text-xs uppercase tracking-wide text-slate-600">
                qeydiyyatlı məhsul portfeli
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-4">
              <p className="text-3xl font-semibold text-[var(--brand)]">
                {partnerCount}
              </p>
              <p className="text-xs uppercase tracking-wide text-slate-600">
                qlobal partnyor
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-4">
              <p className="text-3xl font-semibold text-[var(--brand)]">AI</p>
              <p className="text-xs uppercase tracking-wide text-slate-600">
                simptom əsaslı məsləhətçi
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#assistant"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--brand-strong)]/30 transition hover:bg-[var(--brand-strong)]"
            >
              AI məhsul asistenti
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Xidmət portfelinə bax
            </a>
          </div>
        </div>

        <div className="relative mx-auto max-w-md rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-2xl shadow-[var(--brand-strong)]/20 backdrop-blur-xl">
          <div className="absolute left-6 top-6 h-10 w-10 rounded-full bg-[var(--brand-soft)]" />
          <div className="relative space-y-6">
            <h2 className="text-lg font-semibold text-[var(--brand-strong)]">
              Heyvandarlıq və quşçuluq üçün tam platforma
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                400-dən artıq preparat və yem əlavəsi haqqında strukturlaşdırılmış
                məlumat bazası
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                Kliniki simptomlara uyğun məhsullar üçün AI tövsiyə mühərriki
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 rounded-full bg-[var(--accent)]" />
                Konsultinq, formulasiya və texniki dəstək üçün sürətli əlaqə
              </li>
            </ul>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--brand-soft)] bg-gradient-to-br from-[#1f3b8d] via-[#2748aa] to-[#3c5fd4] p-6 text-white">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.45) 0, transparent 55%), radial-gradient(circle at 80% 30%, rgba(76,217,180,0.25) 0, transparent 50%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.18) 0, transparent 55%)",
                }}
              />
              <div className="relative space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  Məlumat paneli
                </p>
                <p className="text-xl font-semibold leading-snug">
                  Təsərrüfat ehtiyaclarınızı qarşılayan məhsulları saniyələr
                  ərzində tapın.
                </p>
                <p className="text-sm text-white/80">
                  Seçilmiş məhsullar üçün tərkib, doza və ehtiyat tədbirləri
                  haqqında dolğun məlumat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
