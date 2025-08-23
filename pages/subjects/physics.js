import Head from 'next/head'
import { useEffect } from 'react'
import SubjectLayout from '../../components/SubjectLayout'

export default function PhysicsPage() {
  useEffect(()=>{ document.documentElement.setAttribute('dir','rtl') },[])
  const wa = (topic) => `https://wa.me/972549480190?text=${encodeURIComponent(`שלום רועי, מעוניין בשיעור בפיזיקה (${topic}).`)}`;

  return (
    <SubjectLayout
      title="פיזיקה"
      subtitle="להבין לעומק את העקרונות — ולתרגם את זה לציונים."
      icon="⚡"
      gradient="from-amber-200/40 to-orange-100/0 dark:from-amber-500/10 dark:to-transparent"
    >
      <Head>
        <title>RoieTutor — פיזיקה</title>
        <meta name="description" content="שיעורים פרטיים בפיזיקה: חטיבה, 5 יח״ל וסטודנטים. הסברים בהירים, תרגול ממוקד וליווי בין שיעורים." />
      </Head>

      <Section
        title="חטיבה"
        text="כוח ותנועה, אנרגיה וחוקי שימור — עם המחשות ודוגמאות חכמות."
        ctaHref={wa('חטיבה')}
      />
      <Section
        title="תיכון (5 יח״ל)"
        text="מכניקה, חשמל ומגנטיות, קרינה וחומר. אימון לניהול זמן ופתרון סוגי שאלות מרכזיים."
        bullets={['סיכומי שיעור ברורים', 'ליווי בין שיעורים לשאלות קצרות', 'תרגול ממוקד לפי נקודות חולשה']}
        ctaHref={wa('תיכון 5 יח״ל')}
      />
      <Section
        title="סטודנטים"
        text="מכניקה ניוטונית, אלקטרומגנטיות ומבנה חומר — התאמה לסילבוס ולמרצה."
        ctaHref={wa('סטודנטים')}
      />
    </SubjectLayout>
  )
}

function Section({ title, text, bullets = [], ctaHref }) {
  return (
    <section className="mb-10 animate-fade">
      <div className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-slate-700 dark:text-slate-300">{text}</p>
        {bullets.length > 0 && (
          <ul className="list-disc pr-5 text-slate-700 dark:text-slate-300 mt-2 space-y-1">
            {bullets.map((b,i)=><li key={i}>{b}</li>)}
          </ul>
        )}
        <a href={ctaHref} className="inline-block mt-4 rounded-xl px-4 py-2 bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold shadow-sm hover:shadow-md">
          תיאום מהיר
        </a>
      </div>
    </section>
  )
}
