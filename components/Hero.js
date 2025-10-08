export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink overflow-hidden">
      {/* דקור רקע עדין */}
      <div className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-30"
        style={{ backgroundImage:'radial-gradient(24px 24px at 16px 16px, rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(24px 24px at 8px 8px, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize:'48px 48px'}} />
      <div className="pointer-events-none absolute -right-24 -top-24 w-[28rem] h-[28rem] rounded-full bg-teal-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 -bottom-28 w-[32rem] h-[32rem] rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight animate-up">
          שיעורים פרטיים: מתמטיקה • פיזיקה • מדמ״ח • פסיכומטרי
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-2xl animate-fade">
          בונים יחד תכנית לימודים אישית ומתקדמים צעד־צעד עד היעד — עם ליווי בין שיעורים, סיכומים ותכנית תרגול.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 animate-fade-delayed">
          {/* --- הקישור הנכון לעמוד קביעת השיעורים --- */}
          <a href="/schedule" className="px-5 py-3 rounded-2xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-bold shadow-sm">קביעת שיעור אונליין</a>
          <a href="#pricing" className="px-5 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:border-tealBrand hover:text-tealBrand">תמחור</a>
        </div>
      </div>

      <style jsx>{`
        @keyframes up { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes fade { from { opacity: 0 } to { opacity: 1 } }
        .animate-up { animation: up .6s ease-out both }
        .animate-fade { animation: fade .9s ease-out both }
        .animate-fade-delayed { animation: fade 1.1s ease-out both }
      `}</style>
    </section>
  )
}

