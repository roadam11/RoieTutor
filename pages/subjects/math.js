import Head from 'next/head'
import { useEffect } from 'react'

export default function MathPage() {
  useEffect(()=>{ document.documentElement.setAttribute('dir','rtl') },[])
  const wa = (topic) => `https://wa.me/972549480190?text=${encodeURIComponent(`שלום רועי, מעוניין בשיעור במתמטיקה (${topic}).`)}`;

  return (
    <div className="min-h-screen bg-white dark:bg-ink text-slate-900 dark:text-slate-100">
      <Head>
        <title>RoieTutor — מתמטיקה</title>
        <meta name="description" content="שיעורים פרטיים במתמטיקה לחטיבה, תיכון (3–5 יח״ל) וסטודנטים. תכנית לימודים אישית וליווי בין שיעורים." />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-14">
        <h1 className="text-3xl font-extrabold text-tealBrand mb-6">מתמטיקה</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">חטיבה</h2>
          <p className="text-slate-700 dark:text-slate-300">יסודות חזקים: שברים, אחוזים, משוואות פשוטות, בעיות מילוליות — עם דגש על שיטה ודיוק.</p>
          <a href={wa('חטיבה')} className="inline-block mt-3 rounded-xl px-4 py-2 border hover:border-tealBrand hover:text-tealBrand">תיאום מהיר</a>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">תיכון (3–5 יח״ל)</h2>
          <p className="text-slate-700 dark:text-slate-300">אלגברה, פונקציות, טריגונומטריה, הנדסה אנליטית, סדרות והסתברות. הכנה מדורגת לבגרות עם סימולציות.</p>
          <ul className="list-disc pr-5 text-slate-700 dark:text-slate-300 mt-2">
            <li>תכנית לימודים מותאמת למועד הבגרות</li>
            <li>סיכומי שיעור, דפי תרגול וליווי בין שיעורים</li>
          </ul>
          <a href={wa('תיכון 3–5 יח״ל')} className="inline-block mt-3 rounded-xl px-4 py-2 border hover:border-tealBrand hover:text-tealBrand">תיאום מהיר</a>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">סטודנטים</h2>
          <p className="text-slate-700 dark:text-slate-300">אינפי, אלגברה לינארית, דיסקרטית, הסתברות ועוד. התאמה לקורס ומרצה, כולל תרגול מבחנים קודמים.</p>
          <a href={wa('סטודנטים')} className="inline-block mt-3 rounded-xl px-4 py-2 border hover:border-tealBrand hover:text-tealBrand">תיאום מהיר</a>
        </section>
      </main>
    </div>
  )
}
