import Head from 'next/head'
import { useEffect } from 'react'
import SubjectLayout from '../../components/SubjectLayout'
import ValueStrip from '../../components/ValueStrip'
import CSIcon from '../../components/icons/CSIcon'

export default function CSPage() {
  useEffect(()=>{ document.documentElement.setAttribute('dir','rtl') },[])
  const wa = (topic) => `https://wa.me/972549480190?text=${encodeURIComponent(`שלום רועי, מעוניין בשיעור במדעי המחשב (${topic}).`)}`;

  return (
    <SubjectLayout
      title="מדעי המחשב"
      subtitle="תכנות, אלגוריתמים וחשיבה לוגית — מהבסיס ועד קורסים מתקדמים."
      icon={<CSIcon className="w-6 h-6" />}
      gradient="from-indigo-200/40 to-sky-100/0 dark:from-indigo-500/10 dark:to-transparent"
      accent="#6366f1"
    >
      <Head><title>RoieTutor — מדעי המחשב</title><meta name="description" content="שיעורים פרטיים במדעי המחשב: יסודות תכנות, מבני נתונים, אלגוריתמים, הכנה לקורסים ולעבודות." /></Head>

      <ValueStrip />

      <Section title="חטיבה / תיכון" text="יסודות תכנות (Python/Java), לוגיקה וחשיבה אלגוריתמית, פרויקטים קטנים שמייצרים ביטחון." ctaHref={wa('חטיבה/תיכון')} />
      <Section title="סטודנטים — יסודות" text="מבני נתונים, אלגוריתמים, OOP וסיבוכיות. תרגול לקורסים וראיונות בסיסיים." bullets={['קוד יחד על לוח שיתופי','סיכומי שיעור נקיים','ליווי בין שיעורים בוואטסאפ/מייל']} ctaHref={wa('סטודנטים יסודות')} />
      <Section title="סטודנטים — המשך" text="מערכות הפעלה, רשתות, בסיסי נתונים ופרויקטים. ליווי ב־C/C++/Java/Python." ctaHref={wa('סטודנטים המשך')} />
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
