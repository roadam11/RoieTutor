export default function Pricing() {
  return (
    <section id="pricing" className="bg-white dark:bg-ink">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-tealBrand mb-8">תמחור</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-tealBrand/40">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">זום • מומלץ</h3>
              <span className="text-xs bg-tealBrand/20 text-tealBrand px-2 py-1 rounded-full">לכל הארץ</span>
            </div>
            <div className="mt-3 text-4xl font-extrabold">
              <span className="text-slate-400 line-through text-2xl align-top ml-2">₪170</span>
              <span>₪150</span><span className="text-lg align-top">/שעה</span>
            </div>
            <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
              <li>✔️ 60 דקות (משעה עגולה)</li>
              <li>✔️ סיכומי שיעור מותאמים</li>
              <li>✔️ ליווי בין שיעורים: מענה בוואטסאפ/מייל לשאלות קצרות</li>
              <li>✔️ גמיש מכל מקום</li>
            </ul>
            <a href="#quick" className="mt-5 inline-flex justify-center w-full rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold px-4 py-3">תיאום מהיר</a>
          </div>

          <div className="rounded-2xl p-6 bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/15">
            <h3 className="text-xl font-semibold">פרונטלי (אזור השרון)</h3>
            <div className="mt-3 text-4xl font-extrabold"><span>₪170</span><span className="text-lg align-top">/שעה</span></div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">מינימום הזמנה: שעתיים</p>
            <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
              <li>✔️ בבית התלמיד/ה (בכפוף לזמינות)</li>
              <li>✔️ סיכומי שיעור מותאמים</li>
              <li>✔️ ליווי בין שיעורים: מענה בוואטסאפ/מייל לשאלות קצרות</li>
              <li>✔️ התאמה מלאה לתכנית הלימודים</li>
            </ul>
            <a href="#contact" className="mt-5 inline-flex justify-center w-full rounded-xl border border-black/10 dark:border-white/15 px-4 py-3 hover:border-tealBrand hover:text-tealBrand">דברו איתי</a>
          </div>
        </div>
      </div>
    </section>
  );
}
