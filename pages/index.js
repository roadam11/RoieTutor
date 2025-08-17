import ThemeToggle from '@/components/ThemeToggle'
import StickyCTA from '@/components/StickyCTA'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Script from 'next/script'

export default function Home() {
  // Init theme (no flash) + RTL
  const ThemeInit = (
    <Script id="rt-theme-init" strategy="beforeInteractive">
      {`
      (function(){
        try{
          var saved = localStorage.getItem('rt-theme');
          var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
          var useLight = saved ? (saved === 'light') : prefersLight;
          var html = document.documentElement;
          html.setAttribute('dir','rtl');
          if(useLight){ html.classList.remove('dark'); }
          else{ html.classList.add('dark'); }
        }catch(e){
          document.documentElement.classList.add('dark');
          document.documentElement.setAttribute('dir','rtl');
        }
      })();
      `}
    </Script>
  )

  // GA wrapper (לא יקרוס אם לא מוגדר)
  const ga = (name, params = {}) => {
    try {
      if (window.__rt_ga && typeof window.__rt_ga.event === 'function') {
        window.__rt_ga.event(name, params)
      }
    } catch (e) {}
  }

  // טופס "תיאום מהיר"
  const [step, setStep] = useState(1)
  const [subject, setSubject] = useState('מתמטיקה')
  const [level, setLevel] = useState('חטיבה')
  const [mode, setMode] = useState('זום')
  const [time, setTime] = useState('אחה״צ')

  const handleQuickSubmit = (e) => {
    e.preventDefault()
    const msg = `היי רועי, אשמח לקבוע שיעור:
מקצוע: ${subject}
רמה: ${level}
אופן: ${mode}
זמן מועדף: ${time}`
    const url = `https://wa.me/972549480190?text=${encodeURIComponent(msg)}`
    ga('whatsapp_submit_quick', { subject, level, mode, time })
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-ink dark:text-slate-100">
      <Head>
        <title>RoieTutor — שיעורים פרטיים במתמטיקה, פיזיקה, מדמ"ח ופסיכומטרי</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="RoieTutor — שיעורים פרטיים במתמטיקה, פיזיקה, מדעי המחשב ופסיכומטרי (כמותי). תיאום מהיר בזום או פרונטלי (שרון), תכנית לימודים אישית והכנה ממוקדת לתוצאות."
        />
      </Head>
      {ThemeInit}

      {/* רקע עדין ויוקרתי */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-20%] h-[40vh] bg-gradient-to-b from-tealBrand/10 to-transparent blur-2xl" />
        <div className="absolute right-[-10%] bottom-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-white/0 via-tealBrand/8 to-white/0 blur-3xl dark:from-white/0 dark:via-white/5 dark:to-white/0" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-ink/80 border-b border-black/10 dark:border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-tealBrand">RoieTutor</div>
          <ul className="hidden md:flex gap-6 text-sm text-slate-600 dark:text-slate-300">
            <li className="hover:text-tealBrand">
              <a href="#home" onClick={() => ga('nav_click', { to: 'home' })}>בית</a>
            </li>
            <li className="hover:text-tealBrand">
              <a href="#services" onClick={() => ga('nav_click', { to: 'services' })}>תחומי לימוד</a>
            </li>
            <li className="hover:text-tealBrand">
              <a href="#pricing" onClick={() => ga('nav_click', { to: 'pricing' })}>תמחור</a>
            </li>
            <li className="hover:text-tealBrand">
              <a href="#psy-quant" onClick={() => ga('nav_click', { to: 'psy-quant' })}>פסיכומטרי (כמותי)</a>
            </li>
            <li className="hover:text-tealBrand">
              <a href="#about" onClick={() => ga('nav_click', { to: 'about' })}>אודות</a>
            </li>
            <li className="hover:text-tealBrand">
              <a href="#faq" onClick={() => ga('nav_click', { to: 'faq' })}>שאלות נפוצות</a>
            </li>
            <li className="hover:text-tealBrand">
              <a href="#contact" onClick={() => ga('nav_click', { to: 'contact' })}>צור קשר</a>
            </li>
          </ul>
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={() => ga('cta_click', { location: 'nav_contact' })}
              className="px-4 py-2 rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold shadow-sm hover:shadow-md transition"
            >
              קבעו שיעור
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        {/* נוסחאות עדינות */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10 text-slate-400 dark:text-white">
          <div className="absolute -left-6 top-12 rotate-12 text-7xl">∫ f(x) dx</div>
          <div className="absolute right-6 bottom-12 text-6xl">E = mc²</div>
          <div className="absolute left-1/2 -translate-x-1/2 top-10 text-5xl">Σ aᵢ</div>
          <div className="absolute right-1/3 top-1/3 text-5xl">{`</>`}</div>
          <div className="absolute left-6 bottom-1/3 text-6xl">∞</div>
          <div className="absolute right-4 top-1/2 text-5xl">F=ma</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pt-12 pb-12 grid md:grid-cols-12 gap-10 items-center">
          <motion.div
            className="md:col-span-6 reveal"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl leading-tight font-extrabold tracking-tight">
              שיעורים פרטיים: מתמטיקה • פיזיקה • מדמ"ח • פסיכומטרי
            </h1>
            <p className="mt-5 text-slate-700 dark:text-slate-300 text-lg">
              שלום, אני רועי. סטודנט למדעי המחשב עם ניסיון בליווי תלמידי חטיבה, תיכון, מכללות והכנה לפסיכומטרי (כמותי).
              לאחר שיחת היכרות קצרה נבנה תכנית לימודים מסודרת עד היעד.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={() => ga('cta_click', { location: 'hero_contact' })}
                className="px-5 py-3 rounded-2xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-bold shadow-sm hover:shadow-md transition"
              >
                קבעו שיעור עכשיו
              </a>
              <a
                href="#quick"
                onClick={() => ga('cta_click', { location: 'hero_quick' })}
                className="px-5 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:border-tealBrand hover:text-tealBrand transition"
              >
                תיאום מהיר
              </a>
            </div>

            <div className="mt-5 rounded-2xl p-4 max-w-xl bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10">
              <h3 className="m-0 mb-1 text-lg font-semibold">תלמיד/ה של 3 יחידות במתמטיקה?</h3>
              <p className="m-0 text-slate-700 dark:text-slate-200">איתי אפשר להמריא ל־5 יחידות. נבנה מסלול מדורג עד היעד.</p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-6 reveal"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video rounded-3xl bg-gradient-to-b from-white to-slate-50 dark:from-white/5 dark:to-white/0 ring-1 ring-black/10 dark:ring-white/10 grid place-items-center shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(45,212,191,0.15),transparent_40%)]" />
              <div className="text-center px-6 relative">
                <div className="w-24 h-24 rounded-2xl bg-white/70 dark:bg-white/10 ring-1 ring-black/10 dark:ring-white/10 mx-auto grid place-items-center mb-3 backdrop-blur">
                  <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[22px] border-l-tealBrand translate-x-[-2px]" />
                </div>
                <p className="text-slate-600 dark:text-slate-300">כאן יופיע וידאו תדמיתי בהמשך</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* תחומי לימוד */}
      <section
        id="services"
        className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink border-y border-black/10 dark:border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-8 reveal">תחומי לימוד</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['מתמטיקה', 'פיזיקה', 'מדעי המחשב', 'פסיכומטרי (כמותי)'].map((t, i) => (
              <div
                key={i}
                className="reveal rounded-2xl p-6 bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 hover:shadow-md transition"
              >
                <div className="text-xl font-semibold mb-2">{t}</div>
                <p className="text-slate-600 dark:text-slate-300 mb-5">
                  {t === 'מתמטיקה' && 'העמקה, פתרון שאלות מורכבות והכנה לבגרויות.'}
                  {t === 'פיזיקה' && 'הבנת עקרונות ותרגול ממוקד להצלחה.'}
                  {t === 'מדעי המחשב' && 'שפות תכנות, חשיבה אלגוריתמית והכנה לקורסים/ריאיונות.'}
                  {t === 'פסיכומטרי (כמותי)' && 'אסטרטגיות פתרון, מהירות ודיוק, ניהול זמן ותרגול מדורג.'}
                </p>
                <a
                  onClick={() => ga('cta_click', { location: `subject_${i}` })}
                  href={`/subjects/${t === 'מתמטיקה' ? 'math' : t === 'פיזיקה' ? 'physics' : t === 'מדעי המחשב' ? 'cs' : 'psychometry'}`}
                  className="inline-block text-sm font-semibold text-tealBrand hover:underline"
                >
                  עוד על התחום
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* תמחור */}
      <section id="pricing" className="bg-white dark:bg-ink">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-8 reveal">תמחור</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* זום — מומלץ */}
            <div className="reveal rounded-2xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-tealBrand/40">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">זום • מומלץ</h3>
                <span className="text-xs bg-tealBrand/20 text-tealBrand px-2 py-1 rounded-full">גמיש לכל הארץ</span>
              </div>
              <div className="mt-3 text-4xl font-extrabold">
                <span className="text-slate-400 line-through text-2xl align-top ml-2">₪170</span>
                <span>₪150</span>
                <span className="text-lg align-top">/שעה</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
                <li>✔️ 60 דקות (משעה עגולה)</li>
                <li>✔️ לוח שיתופי וחומר מסכם</li>
                <li>✔️ מתאים לכל אזור בארץ</li>
              </ul>
              <a
                href="#quick"
                onClick={() => ga('cta_click', { location: 'pricing_zoom' })}
                className="mt-5 inline-flex justify-center w-full rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold px-4 py-3"
              >
                תיאום מהיר
              </a>
            </div>

            {/* פרונטלי */}
            <div className="reveal rounded-2xl p-6 bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/15">
              <h3 className="text-xl font-semibold">פרונטלי (אזור השרון)</h3>
              <div className="mt-3 text-4xl font-extrabold">
                <span>₪170</span>
                <span className="text-lg align-top">/שעה</span>
              </div>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">מינימום הזמנה: שעתיים</p>
              <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
                <li>✔️ בבית התלמיד/ה (בכפוף לזמינות)</li>
                <li>✔️ התאמה מלאה לתכנית הלימודים</li>
              </ul>
              <a
                href="#contact"
                onClick={() => ga('cta_click', { location: 'pricing_frontal' })}
                className="mt-5 inline-flex justify-center w-full rounded-xl border border-black/10 dark:border-white/15 px-4 py-3 hover:border-tealBrand hover:text-tealBrand"
              >
                דברו איתי
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* תיאום מהיר */}
      <section
        id="quick"
        className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink border-y border-black/10 dark:border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-6 reveal">תיאום מהיר</h2>
          <form
            onSubmit={handleQuickSubmit}
            className="reveal rounded-2xl p-6 bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 grid md:grid-cols-4 gap-4"
          >
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm mb-1">מקצוע</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-3 py-2"
                  >
                    <option>מתמטיקה</option>
                    <option>פיזיקה</option>
                    <option>מדעי המחשב</option>
                    <option>פסיכומטרי (כמותי)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">רמה</label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-3 py-2"
                  >
                    <option>חטיבה</option>
                    <option>תיכון (3–5 יחידות)</option>
                    <option>אקדמי</option>
                    <option>פסיכומטרי</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex items-end">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(2)
                      ga('flow_next', { from: 1 })
                    }}
                    className="w-full md:w-auto rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold px-5 py-3"
                  >
                    המשך
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm mb-1">אופן</label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-3 py-2"
                  >
                    <option>זום</option>
                    <option>פרונטלי (שרון)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">זמן מועדף</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-3 py-2"
                  >
                    <option>בוקר</option>
                    <option>צהריים</option>
                    <option>אחה״צ</option>
                    <option>ערב</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex items-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1)
                      ga('flow_back', { from: 2 })
                    }}
                    className="rounded-xl border border-black/10 dark:border-white/15 px-5 py-3"
                  >
                    חזרה
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(3)
                      ga('flow_next', { from: 2 })
                    }}
                    className="rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold px-5 py-3"
                  >
                    המשך
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="md:col-span-4">
                  <div className="rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-tealBrand/30 p-4">
                    <div className="font-semibold mb-1">סיכום:</div>
                    <div>
                      מקצוע: {subject} | רמה: {level} | אופן: {mode} | זמן מועדף: {time}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4 flex items-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(2)
                      ga('flow_back', { from: 3 })
                    }}
                    className="rounded-xl border border-black/10 dark:border-white/15 px-5 py-3"
                  >
                    חזרה
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold px-5 py-3"
                  >
                    שליחה בוואטסאפ
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>

      {/* פסיכומטרי (כמותי) */}
      <section id="psy-quant" className="bg-white dark:bg-ink border-y border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-4 reveal">תכנית לימוד לפסיכומטרי (כמותי)</h2>
        <div className="grid md:grid-cols-12 gap-8 reveal">
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
              <p className="mt-3">נקבע יעדים שבועיים, מעקב התקדמות ושיעורי בית עם משוב.</p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl p-5 bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-tealBrand/30">
                <div className="text-lg font-semibold mb-2">תחילת עבודה</div>
                <ol className="list-decimal pr-5 space-y-1 text-slate-700 dark:text-slate-200">
                  <li>שיחת אבחון קצרה</li>
                  <li>בדיקת רמת פתיחה ומטרת ציון</li>
                  <li>בניית מסלול תרגול מותאם</li>
                </ol>
                <a
                  href="#quick"
                  onClick={() => ga('cta_click', { location: 'psy_fast' })}
                  className="mt-4 inline-flex justify-center w-full rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-semibold px-4 py-3"
                >
                  תיאום מהיר לכמותי
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* אודות */}
      <section id="about">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-6 reveal">אודות</h2>
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed reveal">
              <p>
                שמי רועי. אני מלמד מתמטיקה, פיזיקה, מדעי המחשב ופסיכומטרי (כמותי).
                סטודנט למדעי המחשב, בעל ניסיון רב בהוראה לתלמידי חטיבה, תיכון ומכללות.
              </p>
              <p>
                אני מאמין בלמידה מותאמת אישית. אני כאן כדי שנגיע יחד לתוצאות.
                לאחר שיחת היכרות נכין תכנית לימודים מסודרת ונעבוד מדורג עד היעד.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="tel:+972549480190"
                  onClick={() => ga('cta_click', { location: 'about_call' })}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition"
                >
                  <span className="text-tealBrand font-semibold">
                    <span dir="ltr">054-948-0190</span>
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">לחצו לחיוג</span>
                </a>
              </div>
            </div>
            <div className="md:col-span-5 reveal">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-b from-white to-slate-50 dark:from-white/5 dark:to-white/0 ring-1 ring-black/10 dark:ring-white/10 grid place-items-center text-slate-500 dark:text-slate-400">
                מקום לתמונה או וידאו תדמיתי
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* שאלות נפוצות */}
    <section id="faq" className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink border-y border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-6 reveal">שאלות נפוצות</h2>
          <div className="space-y-3">
            {[
              { q: 'כמה זמן נמשך שיעור?', a: 'שיעור סטנדרטי בזום — 60 דקות (משעה עגולה). שיעור פרונטלי בבית התלמיד באזור השרון — מינימום שעתיים.' },
              { q: 'איפה מתקיימים השיעורים?', a: 'אונליין בזום, וכן פרונטליים באזור השרון (בכפוף לזמינות).' },
              { q: 'איך קובעים שיעור?', a: 'משאירים פרטים או פונים בוואטסאפ, ונוכל לתאם מועד לשיעור. אפשר זום או פרונטלי לפי הצורך.' },
              { q: 'איך קובעים תכנית לימודים?', a: 'לאחר אבחון קצר נגדיר יעדים, נפרק נושאים לתת-משימות, ונקבע לוח זמנים לשיעורים ולתרגול בית.' },
              { q: 'האם יש שיעור ניסיון?', a: 'כן, יש 50% הנחה על שיעור הניסיון.' },
              { q: 'האם אתה מלמד פסיכומטרי (כמותי)?', a: 'כן. נבנה מסלול ממוקד לפי רמת פתיחה ומטרת ציון, עם דגש על מהירות, דיוק וניהול זמן.' },
              { q: 'באילו רמות אתה מלמד?', a: 'חטיבה, תיכון (כולל 3–5 יחידות), פסיכומטרי, וקורסים אקדמיים נבחרים.' },
              { q: 'מה מדיניות ביטולים?', a: 'ביטול/דחייה עד 24 שעות לפני השיעור ללא חיוב. בפחות מכך — יחויב בהתאם למדיניות.' }
            ].map((f, i) => (
              <details
                key={i}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5 reveal"
              >
                <summary className="cursor-pointer select-none font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                  {f.q}
                  <span className="text-slate-400">＋</span>
                </summary>
                <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* צור קשר */}
      <section id="contact">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-4 reveal">צור קשר</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5 reveal">
              <p className="text-slate-700 dark:text-slate-300">אפשר להשאיר הודעה בטופס, או ליצור קשר ישירות.</p>
              <div className="mt-3 grid gap-3">
                <a
                  className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 hover:bg-white/90 dark:hover:bg-white/10 transition"
                  onClick={() => ga('whatsapp_click', { location: 'contact' })}
                  href="https://wa.me/972549480190"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11.1A8.9 8.9 0 1 1 11.1 2.2 8.9 8.9 0 0 1 20 11.1zm-8.9-7.4a7.4 7.4 0 0 0-6.4 11.2L4 21l6.2-1.7a7.4 7.4 0 1 0 .9-15.6zm4.3 10.7c-.2 0-.4 0-.6-.1-1.6-.4-2.8-1.1-3.8-2.1s-1.7-2.2-2.1-3.8c-.1-.2-.1-.4-.1-.6 0-.3.1-.5.3-.6l.9-.9c.2-.2.4-.3.6-.3.2 0 .4.1.5.3l.7 1.6c.1.2.1.5 0 .7l-.5.8c.5 1 1.2 1.8 2.1 2.4l.8-.5c.2-.1.5-.1.7 0l1.6.7c.2.1.3.3.3.5 0 .2-.1 .4-.3 .6l-.9 .9c-.2 .3-.4 .4-.7 .4z"/></svg>
                  וואטסאפ: <span dir="ltr" className="font-semibold">054-948-0190</span>
                </a>
                <a
                  className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 hover:bg-white/90 dark:hover:bg-white/10 transition"
                  href="mailto:Roadam11@gmail.com"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 2-8 5-8-5v0l8 6 8-6v0z"/></svg>
                  מייל: <span className="font-semibold">Roadam11@gmail.com</span>
                </a>
                <a
                  className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 hover:bg-white/90 dark:hover:bg-white/10 transition"
                  onClick={() => ga('cta_click', { location: 'contact_call' })}
                  href="tel:+972549480190"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6,10.2c1.2,2.4,3.1,4.3,5.5,5.5l1.8-1.8c.3-.3.8-.4,1.2-.3c1,.3,2,.5,3,.5c.7,0,1.2,.5,1.2,1.2v2.9c0,.7-.5,1.2-1.2,1.2C9.8,19.4,4.6,14.2,4.6,7.9c0-.7,.5-1.2,1.2-1.2H8.7c.7,0,1.2,.5,1.2,1.2c0,1,.2,2,.5,3c.1,.4,0,.9-.3,1.2L6.6,10.2z"/></svg>
                  טלפון: <span dir="ltr" className="font-semibold">054-948-0190</span>
                </a>
              </div>
            </div>

            <form
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5 reveal"
              onSubmit={(e) => { e.preventDefault(); ga('contact_form_submit'); alert('תודה! נחזור אליך בהקדם.'); }}
            >
              <label className="block">
                שם מלא
                <br />
                <input
                  placeholder="לדוגמה: דנה לוי"
                  className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-tealBrand"
                />
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <label className="block">
                  אימייל
                  <br />
                  <input
                    placeholder="name@example.com"
                    className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-tealBrand"
                  />
                </label>
                <label className="block">
                  טלפון
                  <br />
                  <input
                    placeholder="054-000-0000"
                    className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-tealBrand"
                  />
                </label>
              </div>
              <label className="block mt-3">
                הודעה
                <br />
                <textarea
                  rows={4}
                  placeholder="ספרו לי איך אוכל לעזור…"
                  className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-tealBrand"
                />
              </label>
              <button
                type="submit"
                className="mt-4 px-6 py-3 rounded-2xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-bold shadow-sm hover:shadow-md"
              >
                שליחה
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-12 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} RoieTutor. כל הזכויות שמורות.</div>
          <div className="flex gap-4">
            <a className="hover:text-tealBrand" href="#">תנאי שימוש</a>
            <a className="hover:text-tealBrand" href="#">מדיניות פרטיות</a>
          </div>
        </div>
      </footer>

      {/* Sticky CTA (mobile) */}
      <StickyCTA />
    </div>
  )
}
