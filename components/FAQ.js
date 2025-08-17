export default function FAQSection({ ga }) {
  const items = [
    { q: 'כמה זמן נמשך שיעור?', a: 'שיעור סטנדרטי בזום — 60 דקות (משעה עגולה). שיעור פרונטלי בבית התלמיד באזור השרון — מינימום שעתיים.' },
    { q: 'איפה מתקיימים השיעורים?', a: 'אונליין בזום, וכן פרונטליים באזור השרון (בכפוף לזמינות).' },
    { q: 'איך קובעים שיעור?', a: 'משאירים פרטים או פונים בוואטסאפ, ונוכל לתאם מועד לשיעור. אפשר זום או פרונטלי לפי הצורך.' },
    { q: 'איך קובעים תכנית לימודים?', a: 'לאחר אבחון קצר נגדיר יעדים, נפרק נושאים לתת-משימות, ונקבע לוח זמנים לשיעורים ולתרגול בית.' },
    { q: 'האם יש שיעור ניסיון?', a: 'כן, יש 50% הנחה על שיעור הניסיון.' },
    { q: 'האם אתה מלמד פסיכומטרי (כמותי)?', a: 'כן. נבנה מסלול ממוקד לפי רמת פתיחה ומטרת ציון, עם דגש על מהירות, דיוק וניהול זמן.' },
    { q: 'באילו רמות אתה מלמד?', a: 'חטיבה, תיכון (כולל 3–5 יחידות), פסיכומטרי, וקורסים אקדמיים נבחרים.' },
    { q: 'מה מדיניות ביטולים?', a: 'ביטול/דחייה עד 24 שעות לפני השיעור ללא חיוב. בפחות מכך — יחויב בהתאם למדיניות.' },
  ];

  return (
    <section id="faq" className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink border-y border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-tealBrand mb-6">שאלות נפוצות</h2>
        <div className="space-y-3">
          {items.map((f, i) => (
            <details
              key={i}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5"
              onToggle={(e)=>{ if(e.target.open && ga) ga('faq_open', {index:i, q:f.q})}}
            >
              <summary className="cursor-pointer select-none font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                {f.q}
                <span className="text-slate-400">＋</span>
              </summary>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
