export default function SubjectLayout({ title, subtitle, icon, gradient = 'from-slate-200/40 to-slate-100/0', children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-ink text-slate-900 dark:text-slate-100">
      {/* Hero מעוצב */}
      <section className={`relative overflow-hidden bg-gradient-to-b ${gradient}`}>
        {/* רקע דקורטיבי עדין */}
        <div className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-30"
             style={{
               backgroundImage:
                 'radial-gradient(20px 20px at 20px 20px, rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(20px 20px at 10px 10px, rgba(0,0,0,0.03) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }} />
        <div className="max-w-6xl mx-auto px-4 py-16 relative">
          <div className="inline-flex items-center gap-3 rounded-2xl backdrop-blur bg-white/70 dark:bg-white/10 ring-1 ring-black/10 dark:ring-white/10 px-5 py-3 animate-rise">
            <span className="text-2xl" aria-hidden>{icon}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h1>
          </div>
          {subtitle && <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-3xl animate-fade">{subtitle}</p>}
        </div>
        <div className="pointer-events-none absolute -right-20 -top-24 w-80 h-80 rounded-full bg-white/40 dark:bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-white/40 dark:bg-white/5 blur-3xl" />
        <style jsx>{`
          @keyframes rise { 0% { transform: translateY(12px); opacity: 0 } 100% { transform: translateY(0); opacity: 1 } }
          @keyframes fade { 0% { opacity: 0 } 100% { opacity: 1 } }
          .animate-rise { animation: rise .6s ease-out both }
          .animate-fade { animation: fade .9s ease-out both }
        `}</style>
      </section>

      {/* תוכן הדף */}
      <main className="max-w-6xl mx-auto px-4 py-14">
        {children}
      </main>
    </div>
  );
}
