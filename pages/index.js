import Head from 'next/head'
import { useEffect } from 'react'

import Hero from '@/components/Hero'
import Subjects from '@/components/Subjects'
import Pricing from '@/components/Pricing'
import QuickMatch from '@/components/QuickMatch'
import About from '@/components/About'
import FAQSection from '@/components/FAQ'
import ContactSection from '@/components/Contact'
import FloatingWA from '@/components/FloatingWA'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  useEffect(() => { document.documentElement.setAttribute('dir', 'rtl') }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-ink dark:text-slate-100">
      <Head>
        <title>RoieTutor — שיעורים פרטיים</title>
        <meta name="description" content="שיעורים פרטיים במתמטיקה, פיזיקה, מדעי המחשב ופסיכומטרי (כמותי). תיאום מהיר בוואטסאפ או טופס, תכנית לימודים אישית ותוצאות." />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-ink/80 border-b border-black/10 dark:border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold tracking-tight text-tealBrand">RoieTutor</a>
          <ul className="hidden md:flex gap-6 text-sm text-slate-600 dark:text-slate-300">
            <li><a href="#services" className="hover:text-tealBrand">תחומי לימוד</a></li>
            <li><a href="#pricing" className="hover:text-tealBrand">תמחור</a></li>
            <li><a href="#testimonials" className="hover:text-tealBrand">המלצות</a></li>
            <li><a href="#about" className="hover:text-tealBrand">אודות</a></li>
            <li><a href="#faq" className="hover:text-tealBrand">שאלות נפוצות</a></li>
            <li><a href="#contact" className="hover:text-tealBrand">צור קשר</a></li>
          </ul>
          <a href="#quick" className="hidden md:inline-block px-4 py-2 rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold shadow-sm">
            קבעו שיעור ניסיון
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home"><Hero /></section>

      {/* תחומי לימוד */}
      <section id="services"><Subjects /></section>

      {/* תמחור */}
      <section id="pricing"><Pricing /></section>

      {/* תיאום מהיר */}
      <section id="quick"><QuickMatch /></section>

      {/* המלצות — עכשיו מעל "אודות" */}
      <Testimonials />

      {/* אודות */}
      <section id="about"><About /></section>

      {/* שאלות נפוצות */}
      <section id="faq"><FAQSection /></section>

      {/* צור קשר */}
      <section id="contact"><ContactSection /></section>

      {/* כפתור וואטסאפ צף */}
      <FloatingWA />

      <footer className="max-w-6xl mx-auto px-4 py-12 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} RoieTutor</div>
          <a className="hover:text-tealBrand" href="/api/version">גרסת דיפלוי</a>
        </div>
      </footer>
    </div>
  )
}
