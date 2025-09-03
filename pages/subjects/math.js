import Head from 'next/head'
import { useEffect } from 'react'
import SubjectLayout from '../../components/SubjectLayout'
import ValueStrip from '../../components/ValueStrip'
import MathIcon from '../../components/icons/MathIcon'

export default function MathPage() {
  useEffect(()=>{ document.documentElement.setAttribute('dir','rtl') },[])
  const wa = (topic) => `https://wa.me/972549480190?text=${encodeURIComponent(`שלום רועי, מעוניין בשיעור במתמטיקה (${topic}).`)}`;

  return (
    <SubjectLayout
      title="מתמטיקה"
      subtitle="יסודות חזקים, שיטה נכונה ותרגול מדורג — מחטיבה ועד 5 יח״ל וסטודנטים."
      icon={<MathIcon className="w-6 h-6" />}
      gradient="from-emerald-200/40 to-teal-100/0 dark:from-teal-500/10 dark:to-transparent"
      accent="#14b8a6"
    >
      <Head><title>RoieTutor — מתמטיקה</title><meta name="description" content="שיעורים פרטיים במתמטיקה לחטיבה, תיכון (3–5 יח״ל) וסטודנטים. תכנית אישית + ליווי בין שיעורים." /></Head>

      <ValueStrip />

      <Section title="חטיבה" text="שברים, אחוזים, משוואות בסיסיות ובעיות מילוליות — בניית יסודות ודיוק, דרך דוגמאות שמחברות למציאות." ctaHref={wa('חטיבה')} />
      <Section title="תיכון (3–5 יח״ל)" text="אלגברה, פונקציות, טריגונומטריה, הנדסה אנליטית, סדרות והסתברות. הכנה לבגרות עם סימולציות וניהול זמן." bullets={['תכנית מותאמת למועד הבגרות','סיכומי שיעור ודפי תרגול','ליווי בין שיעורים בוואטסאפ/מייל לשאלות קצרות']} ctaHref={wa('תיכון 3–5 יח״ל')} />
      <Section title="סטודנטים" text="אינפי, אלגברה לינארית, דיסקרטית והסתברות — התאמה לקורס ולמרצה, ופתרון מבחני עבר." ctaHref={wa('סטודנטים')} />
    </SubjectLayout>
  )
}

function Section({ title, text, bullets = [], ctaHref }) {
  return (
    <section className="mb-10 animate-fade">
      <div className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-slate-700 dark:text-slate-300">{text}</p>
        {bullets.length>0 && <ul className="list-disc pr-5 text-slate-700 dark:text-slate-300 mt-2 space-y-1">{bullets.map((b,i)=><li key={i}>{b}</li>)}</ul>}
        <a href={ctaHref} className="inline-block mt-4 rounded-xl px-4 py-2 bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold shadow-sm hover:shadow-md">תיאום מהיר</a>
      </div>
    </section>
  )
}
