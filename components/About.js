export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-slate-50 dark:from-ink dark:to-ink2 border-y border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-14 text-center">
        <h2 className="text-3xl font-bold text-tealBrand mb-6">אודותיי</h2>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          אני <span className="font-semibold">רועי אדם</span>, מורה פרטי למדעי המחשב, מתמטיקה ופיזיקה. אני משלב ידע מקצועי עם
          <span className="font-semibold"> יכולת הוראה ממוקדת</span> – להפוך נושאים מורכבים לנגישים וברורים, בקצב שמתאים בדיוק לתלמיד/ה.
        </p>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mt-6">
          עובד עם תלמידי חטיבה ותיכון (כולל 3–5 יח"ל), סטודנטים בתחילת התואר, והכנה ממוקדת לפסיכומטרי (כמותי). לכל תלמיד/ה נבנית תכנית לימוד אישית עם יעדים ברורים ומעקב התקדמות.
        </p>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mt-6">
          המטרה שלי: לא רק לשפר ציונים, אלא לבנות <span className="font-semibold">ביטחון בלמידה</span>, לפתח <span className="font-semibold">חשיבה לוגית</span>,
          ולהעניק כלים פרקטיים ללמידה יעילה — הרבה מעבר למבחן הקרוב.
        </p>
      </div>
    </section>
  );
}
