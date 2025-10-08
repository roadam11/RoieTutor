import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: "מיטל, אמא של עמית, מתמטיקה הקבצה א׳ כיתה ט׳",
    text: 'היי רועי!! כולי התרגשות – עמית קיבלה 100 במבחן!!! עכשיו התקשרה לספר לי. תודה ענקית 🙏 אתה אלוף!',
  },
  {
    name: "ליאת, אמא של תהל, מתמטיקה 5 יח״ל, כיתה י״א",
    text: 'היי רועי, מה שלומך? רציתי לעדכן שתהל קיבלה בבגרות 98 😁 נהיה בקשר גם בשנה הקרובה, לא רק לפני המבחנים. מקווה שתישאר באזור...',
  },
  {
    name: "איתי, תלמיד כיתה י״א – מדעי המחשב",
    text: 'בוקר טוב רועי, רציתי להגיד תודה שעזרת לי למבחן במדעי המחשב 🙏 קיבלתי 94 – הציון הכי גבוה שלי עד עכשיו! (הכי גבוה שהיה לי עד היום היה 57... עכשיו ישאירו אותי במגמה 🎉)',
  },
  {
    name: "נועה, אמא של זיו, 5 יחידות מתמטיקה, כיתה י'",
    text: 'זיו קיבל את המבחן שלו בחזרה – 92!!! 🥳 הוא יראה לך היום בשיעור. שוב תודה ענקית 🙏 כבר רואים את השיפור שלו 🙂',
  },
  {
    name: 'ארבל – השלמת פיזיקה לפני לימודי הנדסה',
    text: 'תמיד אומרים שהחלק הקשה בפיזיקה זה הבגרות, אבל איתך זה היה פשוט קל. כשהתחלנו לא ידעתי כלום במכניקה, בטח שלא בחשמל. בזכות המסירות שלך והיכולת להסביר מאפס אני עם 96 במכניקה ו-93 בחשמל! תודה ענקית 🙏',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)
  const touchDeltaX = useRef(0)

  useEffect(() => {
    if (isPaused) return
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6500)
    return () => clearInterval(t)
  }, [isPaused])

  const goTo = (i) => setIndex(i)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  const onTouchStart = (e) => { setIsPaused(true); touchStartX.current = e.touches[0].clientX; touchDeltaX.current = 0 }
  const onTouchMove = (e) => { if (touchStartX.current != null) touchDeltaX.current = e.touches[0].clientX - touchStartX.current }
  const onTouchEnd = () => {
    const th = 50
    if (touchDeltaX.current > th) prev()
    else if (touchDeltaX.current < -th) next()
    setIsPaused(false); touchStartX.current = null; touchDeltaX.current = 0
  }

  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink py-16">
      <div className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-30"
        style={{ backgroundImage:'radial-gradient(20px 20px at 20px 20px, rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(20px 20px at 10px 10px, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize:'40px 40px' }} />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-tealBrand mb-10">מה אומרים עליי</h2>

        <div
          className="relative rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 shadow-2xl p-8 md:p-10 animate-fade select-none overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Progress bars */}
          <div className="absolute top-3 left-0 right-0 mx-4 flex gap-1">
            {testimonials.map((_, i) => (
              <div key={i} className="h-1 flex-1 rounded-full overflow-hidden bg-slate-300/40 dark:bg-slate-700/40">
                <div className={`${i < index ? 'w-full' : i === index ? 'animate-bar' : 'w-0'} h-full bg-tealBrand`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
              </div>
            ))}
          </div>

          <div className="text-yellow-400 text-xl mb-3 mt-5">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-xl md:text-[1.35rem] leading-relaxed text-slate-900 dark:text-slate-100">
            “{testimonials[index].text}”
          </blockquote>
          <div className="mt-6 font-semibold text-slate-700 dark:text-slate-300">{testimonials[index].name}</div>

          <button onClick={prev} aria-label="הקודם" className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 rounded-full bg-white/80 dark:bg-white/10 ring-1 ring-black/10 dark:ring-white/10 p-2 hover:scale-105 transition">‹</button>
          <button onClick={next} aria-label="הבא" className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 rounded-full bg-white/80 dark:bg-white/10 ring-1 ring-black/10 dark:ring-white/10 p-2 hover:scale-105 transition">›</button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`המלצה ${i + 1}`} className={`w-3 h-3 rounded-full ${i === index ? 'bg-tealBrand' : 'bg-slate-400/40'}`} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade { animation: fade .5s ease-out; }
        @keyframes bar { from { width: 0 } to { width: 100% } }
        .animate-bar { animation: bar 6.5s linear forwards }
      `}</style>
    </section>
  )
}
