import ThemeToggle from '@/components/ThemeToggle'
import StickyCTA from '@/components/StickyCTA'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Script from 'next/script'

export default function Home(){
  // ---- סקריפט מצב בהיר/כהה לפני טעינת הדף (מונע "הבהוב") ----
  // לא צריך _document.js – הכל מתבצע כאן עם beforeInteractive
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
  );

  // ---- טופס תיאום מהיר (3 שלבים) ----
  const [step,setStep] = useState(1)
  const [subject,setSubject] = useState('מתמטיקה')
  const [level,setLevel] = useState('חטיבה')
  const [mode,setMode] = useState('זום')
  const [time,setTime] = useState('אחה״צ')

  const handleQuickSubmit = (e)=>{
    e.preventDefault()
    const msg = `היי רועי, אשמח לקבוע שיעור:
מקצוע: ${subject}
רמה: ${level}
אופן: ${mode}
זמן מועדף: ${time}`
    const url = `https://wa.me/972549480190?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  return (
    // ברירת מחדל – בהיר; כהה עם מחלקת dark על <html>
    <div className="min-h-screen bg-white text-slate-900 dark:bg-ink dark:text-slate-100">
      <Head>
     <title>RoieTutor — שיעורים פרטיים במתמטיקה, פיזיקה, מדמ"ח ופסיכומטרי</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {ThemeInit}

      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-ink/80 border-b border-black/10 dark:border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-tealBrand">RoieTutor</div>
          <ul className="hidden md:flex gap-6 text-sm text-slate-600 dark:text-slate-300">
            <li className="hover:text-tealBrand"><a href="#home">בית</a></li>
          <li className="hover:text-tealBrand"><a href="#services">תחומי לימוד</a></li>
            <li className="hover:text-tealBrand"><a href="#pricing">תמחור</a></li>
            <li className="hover:text-tealBrand"><a href="#psy-quant">פסיכומטרי (כמותי)</a></li>
            <li className="hover:text-tealBrand"><a href="#about">אודות</a></li>
            <li className="hover:text-tealBrand"><a href="#faq">שאלות נפוצות</a></li>
            <li className="hover:text-tealBrand"><a href="#contact">צור קשר</a></li>
          </ul>
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="px-4 py-2 rounded-xl bg-tealBrand text-[#061019] font-semibold shadow hover:shadow-lg transition">קבעו שיעור</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        {/* נוסחאות עדינות */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10 dark:opacity-10 text-slate-400 dark:text-white">
          <div className="absolute -left-6 top-12 rotate-12 text-7xl">∫ f(x) dx</div>
          <div className="absolute right-6 bottom-12 text-6xl">E = mc²</div>
          <div className="absolute left-1/2 -translate-x-1/2 top-10 text-5xl">Σ aᵢ</div>
          <div className="absolute right-1/3 top-1/3 text-5xl">{`</>`}</div>
          <div className="absolute left-6 bottom-1/3 text-6xl">∞</div>
          <div className="absolute right-4 top-1/2 text-5xl">F=ma</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pt-12 pb-12 grid md:grid-cols-12 gap-10 items-center">
          <motion.div className="md:col-span-6 reveal" initial={{opacity:0, y:14}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
           <h1 className="text-4xl sm:text-5xl leading-tight font-extrabold">
  שיעורים פרטיים
        מתמטיקה • פיזיקה • מדמ"ח • פסיכומטרי
</h1>
            <p className="mt-5 text-slate-700 dark:text-slate-300 text-lg">
              שלום, אני רועי, סטודנט למדעי המחשב עם ניסיון בהוראה וליווי תלמידי חטיבה, תיכון, מכללות
              והכנה לפסיכומטרי (כמותי). אחרי שיחת היכרות קצרה (עם ההורה או התלמיד)
              נבנה תכנית לימודים מסודרת עד היעד.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-2xl bg-tealBrand text-[#061019] font-bold shadow hover:shadow-tealBrand/30 transition">קבעו שיעור עכשיו</a>
              <a href="#quick" className="px-5 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:border-tealBrand hover:text-tealBrand transition">תיאום מהיר</a>
            </div>

            <div className="mt-5 border border-tealBrand/40 bg-tealBrand/10 dark:bg-tealBrand/15 rounded-2xl p-4 max-w-xl">
              <h3 className="m-0 mb-1 text-lg font-semibold">תלמיד/ה של 3 יחידות במתמטיקה?</h3>
              <p className="m-0 text-slate-700 dark:text-slate-200">איתי אפשר להמריא ל־5 יחידות — נבנה מסלול עבודה מדורג עד היעד. בואו נתחיל.</p>
            </div>
          </motion.div>

          <motion.div className="md:col-span-6 reveal" initial={{opacity:0, y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}>
            <div className="aspect-video rounded-3xl bg-slate-100 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 grid place-items-center shadow-sm">
              <div className="text-center px-6">
                <div className="w-24 h-24 rounded-full bg-tealBrand/20 dark:bg-tealBrand/15 border border-tealBrand/40 mx-auto grid place-items-center mb-3">
                  <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[22px] border-l-tealBrand translate-x-[-2px]" />
                </div>
                <p className="text-slate-600 dark:text-slate-300">כאן נכניס וידאו תדמיתי בהמשך</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 dark:bg-ink2 border-y border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14">
         <h2 className="text-3xl font-bold text-tealBrand mb-8 reveal">תחומי לימוד</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['מתמטיקה','פיזיקה','מדעי המחשב','פסיכומטרי (כמותי)'].map((t,i)=>(
              <div key={i} className="card p-6 reveal">
                <div className="text-xl font-semibold mb-2">{t}</div>
                <p className="text-slate-600 dark:text-slate-300 mb-5">
                  {t==='מתמטיקה' && 'הבנה מעמיקה, פתרון שאלות מורכבות והכנה לבגרויות.'}
                  {t==='פיזיקה' && 'עקרונות הפיזיקה בצורה ברורה, ותרגול ממוקד להצלחה.'}
                  {t==='מדעי המחשב' && 'שפות תכנות, חשיבה אלגוריתמית, והכנה לקורסים/ריאיונות.'}
                  {t==='פסיכומטרי (כמותי)' && 'אסטרטגיות פתרון, בניית מהירות ודיוק, ניהול זמן ותרגול ממוקד עד תוצאות.'}
                </p>
                <a href="#quick" className="inline-block text-sm font-semibold text-tealBrand hover:underline">תיאום מהיר בתחום זה</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white dark:bg-ink">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-8 reveal">תמחור</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Zoom - מומלץ */}
            <div className="card p-6 reveal border-tealBrand/40">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">זום — מומלץ</h3>
                <span className="text-xs bg-tealBrand/20 text-tealBrand px-2 py-1 rounded-full">גמיש לכל הארץ</span>
              </div>
             <div className="mt-3 text-4xl font-extrabold">
  <span className="text-slate-400 line-through text-2xl align-top ml-2">₪170</span>
  <span>₪150</span><span className="text-lg align-top">/שעה</span>
</div>
              <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
                <li>✔️ שיעור של 60 דק׳ (משעה עגולה)</li>
                <li>✔️ לוח שיתופי + שליחת חומר מסכם</li>
                <li>✔️ מתאים לכל אזור בארץ</li>
              </ul>
              <a href="#quick" className="mt-5 inline-flex justify-center w-full rounded-xl bg-tealBrand text-[#061019] font-semibold px-4 py-3">תיאום מהיר</a>
            </div>

            {/* פרונטלי */}
            <div className="card p-6 reveal">
              <h3 className="text-xl font-semibold">פרונטלי (אזור השרון)</h3>
              <div className="mt-3 text-4xl font-extrabold">
                <span>₪170</span><span className="text-lg align-top">/שעה</span>
              </div>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">מינימום הזמנה: שעתיים</p>
              <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
                <li>✔️ בבית התלמיד/ה (בכפוף לזמינות)</li>
                <li>✔️ התאמה מלאה לתכנית הלימודים</li>
              </ul>
              <a href="#contact" className="mt-5 inline-flex justify-center w-full rounded-xl border border-black/10 dark:border-white/15 px-4 py-3 hover:border-tealBrand hover:text-tealBrand">דברו איתי</a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK BOOKING */}
      <section id="quick" className="bg-slate-50 dark:bg-ink2 border-y border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-6 reveal">תיאום מהיר</h2>
          <form onSubmit={handleQuickSubmit} className="card p-6 grid md:grid-cols-4 gap-4 reveal">
            {step===1 && (
              <>
                <div>
                  <label className="block text-sm mb-1">מקצוע</label>
                  <select value={subject} onChange={e=>setSubject(e.target.value)} className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-3 py-2">
                    <option>מתמטיקה</option>
                    <option>פיזיקה</option>
                    <option>מדעי המחשב</option>
                    <option>פסיכומטרי (כמותי)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">רמה</label>
                  <select value={level} onChange={e=>setLevel(e.target.value)} className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-3 py-2">
                    <option>חטיבה</option>
                    <option>תיכון (3–5 יחידות)</option>
                    <option>אקדמי</option>
                    <option>פסיכומטרי</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex items-end">
                  <button type="button" onClick={()=>setStep(2)} className="w-full md:w-auto rounded-xl bg-tealBrand text-[#061019] font-semibold px-5 py-3">המשך</button>
                </div>
              </>
            )}
            {step===2 && (
              <>
                <div>
                  <label className="block text-sm mb-1">אופן</label>
                  <select value={mode} onChange={e=>setMode(e.target.value)} className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-3 py-2">
                    <option>זום</option>
                    <option>פרונטלי (שרון)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">זמן מועדף</label>
                  <select value={time} onChange={e=>setTime(e.target.value)} className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-3 py-2">
                    <option>בוקר</option>
                    <option>צהריים</option>
                    <option>אחה״צ</option>
                    <option>ערב</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex items-end gap-2">
                  <button type="button" onClick={()=>setStep(1)} className="rounded-xl border border-black/10 dark:border-white/15 px-5 py-3">חזרה</button>
                  <button type="button" onClick={()=>setStep(3)} className="rounded-xl bg-tealBrand text-[#061019] font-semibold px-5 py-3">המשך</button>
                </div>
              </>
            )}
            {step===3 && (
              <>
                <div className="md:col-span-4">
                  <div className="rounded-xl bg-tealBrand/10 dark:bg-tealBrand/15 border border-tealBrand/30 p-4">
                    <div className="font-semibold mb-1">סיכום קצר:</div>
                    <div>מקצוע: {subject} | רמה: {level} | אופן: {mode} | זמן מועדף: {time}</div>
                  </div>
                </div>
                <div className="md:col-span-4 flex items-end gap-2">
                  <button type="button" onClick={()=>setStep(2)} className="rounded-xl border border-black/10 dark:border-white/15 px-5 py-3">חזרה</button>
                  <button type="submit" className="rounded-xl bg-tealBrand text-[#061019] font-semibold px-5 py-3">שליחה בוואטסאפ</button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>

      {/* PSYCHOMETRY PLAN */}
      <section id="psy-quant" className="bg-white dark:bg-ink border-y border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-4 reveal">תכנית לימוד — פסיכומטרי (כמותי)</h2>
          <div className="grid md:grid-cols-12 gap-8 reveal">
            <div className="md:col-span-7 space-y-3 text-slate-700 dark:text-slate-300">
              <p>תכנית ממוקדת להעלאת ציוני הכמותי: שליטה ביסודות, שיטות קצרות, ניהול זמן, ותרגול מדורג.</p>
              <ul className="list-disc pr-5 space-y-1">
                <li>יסודות: חזקות, שברים, אחוזים, יחס ופרופורציה</li>
                <li>אלגברה: משוואות/אי־שוויונים, סדרות, פונקציות בסיסיות</li>
                <li>בעיות מילוליות: הסבות, תנועה/זמן/מרחק, עבודה משותפת</li>
                <li>גיאומטריה: שטחים, נפחים, זוויות, מעגלים</li>
                <li>טכניקות זמן: הערכות, קיצורים, “לא להיתקע”</li>
                <li>תרגול מדורג: מבניית ביטחון → מהירות → סימולציות</li>
              </ul>
              <p className="mt-3">נקבע מדדים שבועיים, מעקב התקדמות, ושיעורי בית ממוקדים עם משוב.</p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-tealBrand/30 bg-tealBrand/10 dark:bg-tealBrand/15 p-5">
                <div className="text-lg font-semibold mb-2">התחלה מהירה</div>
                <ol className="list-decimal pr-5 space-y-1 text-slate-700 dark:text-slate-200">
                  <li>שיחת אבחון קצרה (10–15 דק׳)</li>
                  <li>בדיקת רמת פתיחה ומטרת ציון</li>
                  <li>בניית מסלול מותאם ולוח תרגול</li>
                </ol>
                <a href="#quick" className="mt-4 inline-flex justify-center w-full rounded-xl bg-tealBrand text-[#061019] font-semibold px-4 py-3">תיאום מהיר לכמותי</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-6 reveal">אודות</h2>
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed reveal">
              <p>
                שמי רועי, ואני מציע שיעורים פרטיים במתמטיקה, פיזיקה, מדעי המחשב ופסיכומטרי (כמותי).
                אני סטודנט לתואר ראשון במדעי המחשב ובוגר מגמות ריאליות עם ניסיון רב בהוראה לתלמידי חטיבה, תיכון ומכללות.
              </p>
              <p>
                אני מאמין בלמידה מותאמת אישית — <strong>אני כאן כדי שנגיע יחד לתוצאות</strong>.
                אחרי שיחת היכרות קצרה נכין תכנית לימודים מסודרת, ונעבוד מדורג עד היעד.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a href="tel:+972549480190" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 hover:bg-slate-200 dark:hover:bg-white/10">
                  <span className="text-tealBrand font-semibold"><span dir="ltr">054-948-0190</span></span>
                  <span className="text-slate-600 dark:text-slate-300">— לחצו לחיוג</span>
                </a>
              </div>
            </div>
            <div className="md:col-span-5 reveal">
              <div className="aspect-[4/5] rounded-3xl bg-slate-100 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 grid place-items-center text-slate-500 dark:text-slate-400">
                מקום לתמונה/וידאו תדמיתי
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 dark:bg-ink2 border-y border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-6 reveal">שאלות נפוצות</h2>
          <div className="space-y-3">
            {[
              { q:'כמה זמן נמשך שיעור?', a:'שיעור סטנדרטי בזום — 60 דקות (משעה עגולה). שיעור פרונטלי בבית התלמיד באזור השרון — מינימום שעתיים.' },
              { q:'איפה מתקיימים השיעורים?', a:'אונליין בזום, וכן פרונטליים באזור השרון (בכפוף לזמינות).' },
              { q:'איך קובעים שיעור?', a:'משאירים פרטים או פונים בוואטסאפ, ונוכל לתאם מועד לשיעור. אפשר זום או פרונטלי לפי הצורך.' },
              { q:'איך קובעים תכנית לימודים?', a:'לאחר אבחון קצר נגדיר יעדים, נפרק נושאים לתת-משימות, ונקבע לוח זמנים לשיעורים ולתרגול בית.' },
              { q:'האם יש שיעור ניסיון?', a:'כן, יש 50% הנחה על שיעור הניסיון.' },
              { q:'האם אתה מלמד פסיכומטרי (כמותי)?', a:'כן. נבנה מסלול ממוקד לפי רמת פתיחה ומטרת ציון, עם דגש על מהירות, דיוק וניהול זמן.' },
              { q:'באילו רמות אתה מלמד?', a:'חטיבה, תיכון (כולל 3–5 יחידות), פסיכומטרי, וקורסים אקדמיים נבחרים.' },
              { q:'מה מדיניות ביטולים?', a:'ביטול/דחייה עד 24 שעות לפני השיעור ללא חיוב. בפחות מכך — יחויב בהתאם למדיניות.' },
            ].map((f,i)=>(
              <details key={i} className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-5 reveal">
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

      {/* CONTACT */}
      <section id="contact">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-tealBrand mb-4 reveal">צור קשר</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-5 reveal">
              <p className="text-slate-700 dark:text-slate-300">אפשר להשאיר הודעה בטופס, או ליצור קשר ישירות.</p>
              <div className="mt-3 grid gap-3">
                <a className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2" href="https://wa.me/972549480190">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11.1A8.9 8.9 0 1 1 11.1 2.2 8.9 8.9 0 0 1 20 11.1zm-8.9-7.4a7.4 7.4 0 0 0-6.4 11.2L4 21l6.2-1.7a7.4 7.4 0 1 0 .9-15.6zm4.3 10.7c-.2 0-.4 0-.6-.1-1.6-.4-2.8-1.1-3.8-2.1s-1.7-2.2-2.1-3.8c-.1-.2-.1-.4-.1-.6 0-.3.1-.5.3-.6l.9-.9c.2-.2.4-.3.6-.3.2 0 .4.1.5.3l.7 1.6c.1.2.1.5 0 .7l-.5.8c.5 1 1.2 1.8 2.1 2.4l.8-.5c.2-.1.5-.1.7 0l1.6.7c.2.1.3.3.3.5 0 .2-.1.4-.3.6l-.9.9c-.2.3-.4.4-.7.4z"/></svg>
                  וואטסאפ: <span dir="ltr" className="font-semibold">054-948-0190</span>
                </a>
                <a className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2" href="mailto:Roadam11@gmail.com">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 2-8 5-8-5v0l8 6 8-6v0z"/></svg>
                  מייל: <span className="font-semibold">Roadam11@gmail.com</span>
                </a>
                <a className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2" href="tel:+972549480190">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6,10.2c1.2,2.4,3.1,4.3,5.5,5.5l1.8-1.8c.3-.3.8-.4,1.2-.3c1,.3,2,.5,3,.5c.7,0,1.2,.5,1.2,1.2v2.9c0,.7-.5,1.2-1.2,1.2C9.8,19.4,4.6,14.2,4.6,7.9c0-.7,.5-1.2,1.2-1.2H8.7c.7,0,1.2,.5,1.2,1.2c0,1,.2,2,.5,3c.1,.4,0,.9-.3,1.2L6.6,10.2z"/></svg>
                  טלפון: <span dir="ltr" className="font-semibold">054-948-0190</span>
                </a>
              </div>
            </div>
            <form className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-5 reveal" onSubmit={(e)=>{e.preventDefault(); alert('תודה! נחזור אליך בהקדם.');}}>
              <label className="block">שם מלא<br/><input placeholder="לדוגמה: דנה לוי" className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-tealBrand" /></label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <label className="block">אימייל<br/><input placeholder="name@example.com" className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-tealBrand" /></label>
                <label className="block">טלפון<br/><input placeholder="054-000-0000" className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-tealBrand" /></label>
              </div>
              <label className="block mt-3">הודעה<br/><textarea rows="4" placeholder="ספרו לי איך אוכל לעזור…" className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-tealBrand" /></label>
              <button className="mt-4 px-6 py-3 rounded-2xl bg-tealBrand text-[#061019] font-bold shadow hover:shadow-tealBrand/30" type="submit">שליחה</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-12 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} RoieTutor. כל הזכויות שמורות.</div>
          <div className="flex gap-4">
            <a className="hover:text-tealBrand" href="#">תנאי שימוש</a>
            <a className="hover:text-tealBrand" href="#">מדיניות פרטיות</a>
          </div>
        </div>
      </footer>

      {/* Sticky CTA (mobile only) */}
      <StickyCTA />
    </div>
  )
}
