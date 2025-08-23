import Head from 'next/head'
import { useEffect } from 'react'

export default function PhysicsPage() {
  useEffect(()=>{ document.documentElement.setAttribute('dir','rtl') },[])
  const wa = (topic) => `https://wa.me/972549480190?text=${encodeURIComponent(`שלום רועי, מעוניין בשיעור בפיזיקה (${topic}).`)}`;

  return (
    <div className="min-h-screen bg-white dark:bg-ink text-slate-900 dark:text-slate-100">
      <Head>
        <title>RoieTutor — פיזיקה</title>
        <meta name="description" content="שיעורים פרטיים בפיזיקה: חטיבה, תיכון (5 יח״ל) וסטודנטים. הסברים בהירים, תרגול ממוקד וליווי בין שיעורים." />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-14">
        <h1 className="text-3xl font-extrabold text-tealBrand mb-6">פיזיקה</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">חטיבה</h2>
          <p className="text-slate-700 dark:text-slate-300">מכניקה בסיסית, כוח ותנועה, אנרגיה וחוקי שימור — עם דוגמאות והמחשות.</p>
          <a href={wa('חטיבה')} className="inline-block mt-3 rounded-xl px-4 py-2 border hover:border-tealBrand hover:text-tealBrand">תיאום מהיר</a>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">תיכון (5 יח״ל)</h2>
          <p className="text-slate-700 dark:text-slate-300">מכניקה, חשמל ומגנטיות, קרינה וחומר. תרגול אינטנסיבי לסוגי שאלות ולניהול זמן בבחינה.</p>
          <ul className="list-disc pr-5 text-slate-700 dark:text-slate-300 mt-2">
            <li>סיכומי שיעור ברורים</li>
            <li>ליווי בין שיעורים לשאלות קצרות</li>
          </ul>
          <a href={wa('תיכון 5 יח״ל')} className="inline-block mt-3 rounded-xl px-4 py-2 border hover:border-tealBrand hover:text-tealBrand">תיאום מהיר</a>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">סטודנטים</h2>
          <p className="text-slate-700 dark:text-slate-300">מבנה חומר, מכניקה ניוטונית, אלקטרומגנטיות, מעבדות ופתרון מבחני עבר — מותאם לסילבוס.</p>
          <a href={wa('סטודנטים')} className="inline-block mt-3 rounded-xl px-4 py-2 border hover:border-tealBrand hover:text-tealBrand">תיאום מהיר</a>
        </section>
      </main>
    </div>
  )
}
