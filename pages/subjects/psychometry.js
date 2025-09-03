import Head from 'next/head'
import { useEffect } from 'react'
import SubjectLayout from '../../components/SubjectLayout'
import ValueStrip from '../../components/ValueStrip'
import TargetIcon from '../../components/icons/TargetIcon'

export default function PsychometryPage() {
  useEffect(()=>{ document.documentElement.setAttribute('dir','rtl') },[])
  const wa = () => `https://wa.me/972549480190?text=${encodeURIComponent('שלום רועי, מעוניין במסלול פסיכומטרי (כמותי).')}`;

  return (
    <SubjectLayout
      title="פסיכומטרי (כמותי)"
      subtitle="מסלול ממוקד: יסודות, שיטות קצרות, ניהול זמן ותרגול מדורג עד סימולציות."
      icon={<TargetIcon className="w-6 h-6" />}
      gradient="from-cyan-200/40 to-sky-100/0 dark:from-cyan-500/10 dark:to-transparent"
      accent="#06b6d4"
    >
      <Head><title>RoieTutor — פסיכומטרי (כמותי)</title><meta name="description" content="פסיכומטרי (כמותי): יסודות, טכניקות זמן, תרגול מדורג, סימולציות וליווי בין שיעורים." /></Head>

      <ValueStrip />

      <Section title="תכנית לימודים" text="שליטה ביסודות, אסטרטגיות פתרון והתמודדות עם לחץ זמן. נבנה מסלול מותאם לציון היעד." bullets={['חזקות/אחוזים/יחס/שברים','אלגברה בסיסית וסדרות','בעיות מילוליות נפוצות','גיאומטריה שימושית','תרגול → מהירות → סימולציות']} ctaHref={wa()} />
      <Section title="ליווי בין שיעורים" text="מענה לשאלות קצרות בוואטסאפ/מייל, סיכומים מותאמים ודפי תרגול להתקדמות מהירה." ctaHref={wa()} />
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
