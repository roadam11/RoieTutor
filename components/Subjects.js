export default function Subjects() {
  const items = [
    { icon: '📐', title: 'מתמטיקה', desc: 'העמקה, פתרון שאלות והכנה לבגרויות.', href: '/subjects/math' },
    { icon: '⚡', title: 'פיזיקה', desc: 'הבנת עקרונות ותרגול ממוקד.', href: '/subjects/physics' },
    { icon: '💻', title: 'מדעי המחשב', desc: 'תכנות, אלגוריתמים והכנה לקורסים/ראיונות.', href: '/subjects/cs' },
    { icon: '🎯', title: 'פסיכומטרי (כמותי)', desc: 'אסטרטגיות, ניהול זמן ותרגול מדורג.', href: '/subjects/psychometry' },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink border-y border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-tealBrand mb-8">תחומי לימוד</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((t,i)=>(
            <div key={i} className="rounded-2xl p-6 bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 hover:shadow-md transition">
              <div className="text-3xl mb-3">{t.icon}</div>
              <div className="text-xl font-semibold mb-2">{t.title}</div>
              <p className="text-slate-600 dark:text-slate-300 mb-5">{t.desc}</p>
              <a href={t.href} className="inline-block text-sm font-semibold text-tealBrand hover:underline">עוד על התחום</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
