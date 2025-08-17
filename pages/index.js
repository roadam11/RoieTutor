import ContactSection from '../components/Contact'
import Head from 'next/head'
import About from '@/components/About'
import Subjects from '@/components/Subjects'
import Pricing from '@/components/Pricing'
import FAQSection from '@/components/FAQ'
import { useEffect } from 'react'

export default function Home() {
  // RTL + שמירת כיוון
  useEffect(()=>{ document.documentElement.setAttribute('dir','rtl') },[])

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-ink dark:text-slate-100">
      <Head>
        <title>RoieTutor — שיעורים פרטיים במתמטיקה, פיזיקה, מדמ"ח ופסיכומטרי</title>
        <meta name="description" content="שיעורים פרטיים במתמטיקה, פיזיקה, מדעי המחשב ופסיכומטרי (כמותי). תיאום מהיר בזום או פרונטלי (שרון), תכנית לימודים אישית ותוצאות." />
      </Head>

      {/* Header קצר ופשוט */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-ink/80 border-b border-black/10 dark:border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-tealBrand">RoieTutor</div>
          <ul className="hidden md:flex gap-6 text-sm text-slate-600 dark:text-slate-300">
            <li className="hover:text-tealBrand"><a href="#home">בית</a></li>
            <li className="hover:text-tealBrand"><a href="#services">תחומי לימוד</a></li>
            <li className="hover:text-tealBrand"><a href="#pricing">תמחור</a></li>
            <li className="hover:text-tealBrand"><a href="#psy-quant">פסיכומטרי</a></li>
            <li className="hover:text-tealBrand"><a href="#about">אודות</a></li>
            <li className="hover:text-tealBrand"><a href="#faq">שאלות נפוצות</a></li>
            <li className="hover:text-tealBrand"><a href="#contact">צור קשר</a></li>
          </ul>
          <a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold shadow-sm">קבעו שיעור</a>
        </nav>
      </header>

      {/* HERO מינימלי */}
      <section id="home" className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl sm:text-5xl leading-tight font-extrabold tracking-tight">
            שיעורים פרטיים: מתמטיקה • פיזיקה • מדמ"ח • פסיכומטרי
          </h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-3xl">
            אחרי שיחת היכרות קצרה נבנה יחד תכנית לימודים אישית — ונתקדם צעד־צעד עד היעד.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-2xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-bold shadow-sm">קבעו שיעור עכשיו</a>
            <a href="#quick" className="px-5 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:border-tealBrand hover:text-tealBrand">תיאום מהיר</a>
          </div>
        </div>
      </section>

      {/* הסקשנים החדשים */}
      <Subjects />
      <Pricing />

      {/* פסיכומטרי (כמותי) — שומר על העוגן הקיים */}
      <section id="psy-quant" className="bg-white dark:bg-ink border-y border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-4">תכנית לימוד לפסיכומטרי (כמותי)</h2>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-3 text-slate-700 dark:text-slate-300">
              <p>תכנית ממוקדת להעלאת הציון הכמותי: שליטה ביסודות, שיטות קצרות, ניהול זמן ותרגול מדורג.</p>
              <ul className="list-disc pr-5 space-y-1">
                <li>יסודות: חזקות, אחוזים, יחס, שברים</li>
                <li>אלגברה: משוואות, סדרות, פונקציות בסיסיות</li>
                <li>בעיות מילוליות: תנועה/מרחק/זמן, עבודה משותפת</li>
                <li>גיאומטריה: שטחים, נפחים, זוויות</li>
                <li>טכניקות זמן: הערכות, קיצורים, לא להיתקע</li>
                <li>תרגול מדורג: ביטחון → מהירות → סימולציות</li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl p-5 bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-tealBrand/30">
                <div className="text-lg font-semibold mb-2">תחילת עבודה</div>
                <ol className="list-decimal pr-5 space-y-1 text-slate-700 dark:text-slate-200">
                  <li>שיחת אבחון קצרה</li>
                  <li>בדיקת רמת פתיחה ומטרת ציון</li>
                  <li>בניית מסלול תרגול מותאם</li>
                </ol>
                <a href="#quick" className="mt-4 inline-flex justify-center w-full rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold px-4 py-3">תיאום מהיר לכמותי</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT החדש */}
      <About />

      {/* FAQ (כבר בנפרד) */}
      <FAQSection />

      {/* צור קשר (פשוט וקיים) */}
    <ContactSection />
