import MathIcon from './icons/MathIcon'
import PhysicsIcon from './icons/PhysicsIcon'
import CSIcon from './icons/CSIcon'
import TargetIcon from './icons/TargetIcon'

export default function Subjects() {
  const items = [
    { icon: <MathIcon/>,    title: 'מתמטיקה',             desc: 'העמקה, פתרון שאלות והכנה לבגרויות.', slug: 'math' },
    { icon: <PhysicsIcon/>, title: 'פיזיקה',               desc: 'הבנת עקרונות ותרגול ממוקד.',        slug: 'physics' },
    { icon: <CSIcon/>,      title: 'מדעי המחשב',           desc: 'תכנות, אלגוריתמים והכנה לקורסים.', slug: 'cs' },
    { icon: <TargetIcon/>,  title: 'פסיכומטרי (כמותי)',    desc: 'אסטרטגיה, ניהול זמן ותרגול.',      slug: 'psychometry' },
  ];

  const wa = (subject) => `https://wa.me/972549480190?text=${encodeURIComponent(`שלום רועי, אני מעוניין בשיעור ב${subject}. אשמח לתאם שיעור ניסיון.`)}`;

  return (
    <section id="services" className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink border-y border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-tealBrand mb-8">תחומי לימוד</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((t,i)=>(
            <div key={i} className="group rounded-2xl p-6 bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 hover:shadow-md transition">
              <div className="text-tealBrand group-hover:scale-110 transition inline-flex">{t.icon}</div>
              <div className="text-xl font-semibold mb-2 mt-3">{t.title}</div>
              <p className="text-slate-600 dark:text-slate-300 mb-5">{t.desc}</p>
              <div className="flex items-center gap-4">
                <a href={`/subjects/${t.slug}`} className="text-sm font-semibold text-tealBrand hover:underline">עוד על התחום</a>
                <a href={wa(t.title)} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-tealBrand">תיאום מהיר</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
