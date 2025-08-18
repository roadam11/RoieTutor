export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 relative">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight animate-rise">
          שיעורים פרטיים שמביאים תוצאות — במתמטיקה, פיזיקה ומדעי המחשב
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-3xl animate-fade">
          יחס אישי, שיטות הוראה חדשניות ותמיכה מלאה גם מחוץ לשיעור — הדרך שלך לציונים גבוהים וביטחון בלמידה מתחילה כאן.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 animate-fade">
          <a href="#quick" className="px-5 py-3 rounded-2xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-bold shadow-sm hover:shadow-md">
            קבעו שיעור ניסיון עכשיו
          </a>
          <a href="#services" className="px-5 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:border-tealBrand hover:text-tealBrand">
            תחומי לימוד
          </a>
        </div>

        {/* אלמנט ויזואלי עדין ברקע */}
        <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-tealBrand/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-sky-400/10 blur-3xl"></div>
      </div>

      {/* אנימציות מקומיות */}
      <style jsx>{`
        @keyframes rise { 0% { transform: translateY(12px); opacity: 0 } 100% { transform: translateY(0); opacity: 1 } }
        @keyframes fade { 0% { opacity: 0 } 100% { opacity: 1 } }
        .animate-rise { animation: rise .6s ease-out both }
        .animate-fade { animation: fade .9s ease-out both }
      `}</style>
    </section>
  );
}
