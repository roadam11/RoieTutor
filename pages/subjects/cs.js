import Head from 'next/head'
import { useEffect } from 'react'

export default function CSPage() {
  useEffect(()=>{ document.documentElement.setAttribute('dir','rtl') },[])
  const wa = (topic) => `https://wa.me/972549480190?text=${encodeURIComponent(`שלום רועי, מעוניין בשיעור במדעי המחשב (${topic}).`)}`;

  return (
    <div className="min-h-screen bg-white dark:bg-ink text-slate-900 dark:text-slate-100">
      <Head>
        <title>RoieTutor — מדעי המחשב</title>
        <meta name="description" content="שיעורים פרטיים במדעי המחשב: יסודות תכנות, מבני נתונים, אלגוריתמים, הכנה לקורסים וראיונות." />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-14">
        <h1 className="text-3xl font-extrabold text-tealBrand mb-6">מדעי המחשב</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">חטיבה / תיכון</h2>
          <p className="text-slate-700 dark:text-slate-300">יסודות תכנות (Python/Java), לוגיקה, חשיבה אלגוריתמית ופרויקטים קטנים.</p>
          <a href={wa('חטיבה/תיכון')} className="inline-block mt-3 rounded-xl px-4 py-2 border hover:border-tealBrand hover:text-tealBrand">תיאום מהיר</a>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">סטודנטים — יסודות</h2>
          <p className="text-slate-700 dark:text-slate-300">מבני נתונים, אלגוריתמים, OOP, סיבוכיות, תרגול לקורסים וראיונות בסיסיים.</p>
          <a href={wa('סטודנטים יסודות')} className="inline-block mt-3 rounded-xl px-4 py-2 border hover:border-tealBrand hover:text-tealBrand">תיאום מהיר</a>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">סטודנטים — המשך</h2>
          <p className="text-slate-700 dark:text-slate-300">מערכות הפעלה, רשתות, בסיסי נתונים, פיתוח פרויקטים וליווי ב־C/C++/Java/Python.</p>
          <a href={wa('סטודנטים המשך')} className="inline-block mt-3 rounded-xl px-4 py-2 border hover:border-tealBrand hover:text-tealBrand">תיאום מהיר</a>
        </section>
      </main>
    </div>
  )
}
