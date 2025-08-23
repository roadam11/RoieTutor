import Head from 'next/head'
import { useEffect } from 'react'

export default function PsychometryPage() {
  useEffect(()=>{ document.documentElement.setAttribute('dir','rtl') },[])
  const wa = () => `https://wa.me/972549480190?text=${encodeURIComponent('שלום רועי, מעוניין במסלול פסיכומטרי (כמותי).')}`;

  return (
    <div className="min-h-screen bg-white dark:bg-ink text-slate-900 dark:text-slate-100">
      <Head>
        <title>RoieTutor — פסיכומטרי (כמותי)</title>
        <meta name="description" content="מסלול פסיכומטרי (כמותי): יסודות, שיטות קצרות, ניהול זמן, תרגול מדורג וסימולציות. כולל ליווי בין שיעורים." />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-14">
        <h1 className="text-3xl font-extrabold text-tealBrand mb-6">פסיכומטרי (כמותי)</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">למי זה מתאים?</h2>
          <p className="text-slate-700 dark:text-slate-300">לכל רמות הפתיחה — מיסודות ועד חידוד למהירויות גבוהות. התאמת מסלול לציון היעד.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">תכנית לימודים</h2>
          <ul className="list-disc pr-5 text-slate-700 dark:text-slate-300">
            <li>יסודות: חזקות, אחוזים, יחס, שברים</li>
            <li>אלגברה: משוואות, סדרות, פונקציות בסיסיות</li>
            <li>בעיות מילוליות: תנועה/מרחק/זמן, עבודה משותפת</li>
            <li>גיאומטריה: שטחים, נפחים, זוויות</li>
            <li>ניהול זמן: הערכות וקיצורים, לא להיתקע</li>
            <li>תרגול מדורג: ביטחון → מהירות → סימולציות</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">ליווי בין שיעורים</h2>
          <p className="text-slate-700 dark:text-slate-300">מענה לשאלות קצרות בוואטסאפ/מייל, סיכומים ותרגולים מותאמים אישית.</p>
        </section>

        <a href={wa()} className="inline-block rounded-xl px-5 py-3 bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-bold shadow-sm hover:shadow-md">
          תיאום מהיר לכמותי
        </a>
      </main>
    </div>
  )
}
