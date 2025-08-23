export default function SubjectLayout({
  title,
  subtitle,
  icon,
  gradient = 'from-slate-200/40 to-slate-100/0',
  accent = '#14b8a6', // צבע דגש (טורקיז ברירת מחדל)
  children
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-ink text-slate-900 dark:text-slate-100">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-ink/70 border-b border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/#home" className="text-tealBrand font-extrabold text-xl tracking-tight">RoieTutor</a>
          <a href="/#services" className="text-sm rounded-xl border border-black/10 dark:border-white/15 px-3 py-2 hover:border-tealBrand hover:text-tealBrand">
            ← חזרה לדף הראשי
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className={`relative overflow-hidden bg-gradient-to-b ${gradient}`}>
        {/* Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(20px 20px at 20px 20px, rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(20px 20px at 10px 10px, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />

        {/* Accent blobs */}
        <svg className="pointer-events-none absolute -right-24 -top-24 w-[28rem] blur-3xl" viewBox="0 0 200 200" aria-hidden>
          <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop stopColor={accent} stopOpacity="0.18"/><stop offset="1" stopColor={accent} stopOpacity="0.05"/></linearGradient></defs>
          <path fill="url(#g1)" d="M43,-62.7C55.2,-51.9,63.8,-37.7,70.7,-21.6C77.6,-5.4,82.7,12.5,78.1,28.7C73.5,44.8,59.1,59.1,43.1,67.8C27.1,76.5,9.6,79.5,-6.6,79C-22.7,78.6,-37.5,74.6,-49.2,65.9C-61,57.2,-69.8,43.7,-74.8,28.7C-79.8,13.6,-81.2,-2.9,-77.4,-18.6C-73.6,-34.3,-64.6,-49.1,-51.5,-60.1C-38.4,-71.2,-21.2,-78.5,-3.6,-74.3C14,-70.2,28,-54.7,43,-62.7Z" transform="translate(100 100)" />
        </svg>
        <svg className="pointer-events-none absolute -left-28 -bottom-28 w-[30rem] blur-3xl" viewBox="0 0 200 200" aria-hidden>
          <defs><linearGradient id="g2" x1="1" y1="0" x2="0" y2="1"><stop stopColor={accent} stopOpacity="0.14"/><stop offset="1" stopColor={accent} stopOpacity="0.04"/></linearGradient></defs>
          <path fill="url(#g2)" d="M46.4,-72.1C58.5,-63.7,64.2,-46,69.7,-29.4C75.3,-12.8,80.6,2.6,76.8,15.8C73.1,29,60.3,39.9,47.5,50C34.7,60.2,21.8,69.6,6.3,74.1C-9.2,78.5,-27.4,78,-42.3,70.7C-57.2,63.3,-68.7,49.1,-73.4,33.1C-78.2,17,-76.2,-0.7,-69.9,-14.8C-63.5,-28.9,-52.7,-39.3,-40.8,-48.6C-29,-57.9,-16.1,-66.1,0.1,-66.3C16.3,-66.5,32.6,-58.8,46.4,-72.1Z" transform="translate(100 100)" />
        </svg>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-3 rounded-2xl backdrop-blur bg-white/70 dark:bg-white/10 ring-1 ring-black/10 dark:ring-white/10 px-5 py-3 animate-rise">
            <span className="text-2xl" aria-hidden>{icon}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h1>
          </div>
          {subtitle && <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-3xl animate-fade">{subtitle}</p>}
        </div>

        <style jsx>{`
          @keyframes rise { 0% { transform: translateY(12px); opacity: 0 } 100% { transform: translateY(0); opacity: 1 } }
          @keyframes fade { 0% { opacity: 0 } 100% { opacity: 1 } }
          .animate-rise { animation: rise .6s ease-out both }
          .animate-fade { animation: fade .9s ease-out both }
        `}</style>
      </section>

      {/* Body */}
      <main className="max-w-6xl mx-auto px-4 py-14">
        {children}
      </main>
    </div>
  );
}
