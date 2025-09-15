import MathIcon from './icons/MathIcon'
import PhysicsIcon from './icons/PhysicsIcon'
import CSIcon from './icons/CSIcon'
import TargetIcon from './icons/TargetIcon'

export default function Subjects() {
  const items = [
    { icon: <MathIcon/>,    title: 'מתמטיקה',            desc: 'העמקה, פתרון שאלות והכנה לבגרויות.', slug: 'math',        accent: 'from-emerald-200/40' },
    { icon: <PhysicsIcon/>, title: 'פיזיקה',              desc: 'הבנת עקרונות ותרגול ממוקד.',        slug: 'physics',     accent: 'from-amber-200/40'  },
    { icon: <CSIcon/>,      title: 'מדעי המחשב',          desc: 'תכנות, אלגוריתמים והכנה לקורסים.',  slug: 'cs',          accent: 'from-indigo-200/40' },
    { icon: <TargetIcon/>,  title: 'פסיכומטרי (כמותי)',   desc: 'אסטרטגיה, ניהול זמן ותרגול.',       slug: 'psychometry', accent: 'from-cyan-200/40'   },
  ]

  const wa = (subject) => `https://wa.me/972549480190?text=${encodeURIComponent(`שלום רועי, אני מעוניין/ת בשיעור ב${subject}. אשמח לתאם שיעור ניסיון.`)}`

  return (
    <section id="services" className="relative bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink border-y border-black/10 dark:border-white/10">
      <div className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-30"
        style={{ backgroundImage:'radial-gradient(20px 20px at 20px 20px, rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(20px 20px at 10px 10px, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize:'40px 40px' }} />
      <div className="relative max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-tealBrand mb-8">תחומי לימוד</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((t,i)=>(
            <div key={i} className={`group rounded-2xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 hover:shadow-md transition relative overflow-hidden`}>
              <div className={`pointer-events-none absolute -left-16 -top-16 w-48 h-48 rounded-full blur-3xl bg-gradient-to-br ${t.accent} to-transparent`} />
              <div className="relative">
                <div className="text-tealBrand group-hover:scale-110 transition inline-flex">{t.icon}</div>
                <div className="text-xl font-semibold mb-2 mt-3">{t.title}</div>
                <p className="text-slate-600 dark:text-slate-300 mb-5">{t.desc}</p>
                <div className="flex items-center gap-4">
                  <a href={`/subjects/${t.slug}`} className="text-sm font-semibold text-tealBrand hover:underline">עוד על התחום</a>
                  <a href={wa(t.title)} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-tealBrand">תיאום מהיר</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
