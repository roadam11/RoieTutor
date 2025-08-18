import QuickMatch from '@/components/QuickMatch'
import Head from 'next/head'
import About from '@/components/About'
import Subjects from '@/components/Subjects'
import Pricing from '@/components/Pricing'
import FAQSection from '@/components/FAQ'
import ContactSection from '@/components/Contact'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{ document.documentElement.setAttribute('dir','rtl') },[])
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-ink dark:text-slate-100">
      <Head>
        <title>RoieTutor — שיעורים פרטיים</title>
        <meta name="description" content="שיעורים פרטיים במתמטיקה, פיזיקה, מדעי המחשב ופסיכומטרי (כמותי). תיאום מהיר בזום או פרונטלי (שרון)." />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-ink/80 border-b border-black/10 dark:border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-tealBrand">RoieTutor</div>
          <ul className="hidden md:flex gap-6 text-sm text-slate-600 dark:text-slate-300">
            <li><a href="#services" className="hover:text-tealBrand">תחומי לימוד</a></li>
            <li><a href="#pricing" className="hover:text-tealBrand">תמחור</a></li>
            <li><a href="#about" className="hover:text-tealBrand">אודות</a></li>
            <li><a href="#faq" className="hover:text-tealBrand">שאלות נפוצות</a></li>
            <li><a href="#contact" className="hover:text-tealBrand">צור קשר</a></li>
          </ul>
          <a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold shadow-sm">קבעו שיעור</a>
        </nav>
      </header>

      {/* HERO קצר ובטוח */}
      <section id="home" className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold">שיעורים פרטיים: מתמטיקה • פיזיקה • מדמ"ח • פסיכומטרי</h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">בונים יחד תכנית לימודים אישית ומתקדמים צעד־צעד עד היעד.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-2xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-bold shadow-sm">קבעו שיעור עכשיו</a>
            <a href="#pricing" className="px-5 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:border-tealBrand hover:text-tealBrand">תמחור</a>
          </div>
        </div>
      </section>

      <Subjects />
      <Pricing />
      <QuickMatch />
      {/* עוגן פסיכומטרי נשמר (תוכן מלא אפשר להחזיר בהמשך) */}
      <section id="psy-quant" className="bg-white dark:bg-ink border-y border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand">תכנית לימוד לפסיכומטרי (כמותי)</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">אסטרטגיות פתרון, ניהול זמן ותרגול מדורג לציון גבוה.</p>
        </div>
      </section>

      <About />
      <FAQSection />
      <ContactSection />

      <footer className="max-w-6xl mx-auto px-4 py-12 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} RoieTutor</div>
          <a className="hover:text-tealBrand" href="/api/version">גרסת דיפלוי</a>
        </div>
      </footer>
    </div>
  );
}
