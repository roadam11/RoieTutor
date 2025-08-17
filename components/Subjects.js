export default function Subjects() {
  const items = [
    { title: 'מתמטיקה', desc: 'העמקה, פתרון שאלות מורכבות והכנה לבגרויות.' , href: '/subjects/math' },
    { title: 'פיזיקה', desc: 'הבנת עקרונות, ניסוח ותרגול ממוקד להצלחה.' , href: '/subjects/physics' },
    { title: 'מדעי המחשב', desc: 'שפות תכנות, חשיבה אלגוריתמית והכנה לקורסים/ראיונות.' , href: '/subjects/cs' },
    { title: 'פסיכומטרי (כמותי)', desc: 'אסטרטגיות פתרון, ניהול זמן ותרגול מדורג לציון גבוה.' , href: '/subjects/psychometry' },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink border-y border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-tealBrand mb-8">תחומי לימוד</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((t,i)=>(
            <div key={i} className="rounded-2xl p-6 bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 hover:shadow-md transition">
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
