import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: "מיטל, אמא של עמית, תלמידת כיתה י"א - פיזיקה",
    text: "היי רועי!! כולי התרגשות – עמית קיבלה 100 במבחן!!! עכשיו התקשרה לספר לי. תודה ענקית 🙏 אתה אלוף!",
  },
  {
    name: "ליאת, אמא של תהל, תלמידת כיתה י"א - מתמטיקה",
    text: "היי רועי, מה שלומך? רציתי לעדכן שתהל קיבלה בבגרות 98 😁 נהיה בקשר גם בשנה הקרובה, לא רק לפני המבחנים. מקווה שתישאר באזור...",
  },
  {
    name: "איתי, תלמיד כיתה י״א - מדעי המחשב",
    text: "בוקר טוב רועי, רציתי להגיד תודה שעזרת לי למבחן במדעי המחשב 🙏 קיבלתי 94 – הציון הכי גבוה שלי עד עכשיו! (הכי גבוה שהיה לי עד היום היה 57... עכשיו ישאירו אותי במגמה 🎉)",
  },
  {
    name: "נועה, אמא של זיו, תלמיד כיתה י' 5 יח"ל",
    text: "זיו קיבל את המבחן שלו בחזרה – 92!!! 🥳 הוא יראה לך היום בשיעור. שוב תודה ענקית 🙏 כבר רואים את השיפור שלו 🙂",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 7000) // כל 7 שניות
    return () => clearInterval(timer)
  }, [])

  const goTo = (i) => setIndex(i)

  return (
    <section id="testimonials" className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-tealBrand mb-10">מה אומרים עליי</h2>

        {/* כרטיס המלצה */}
        <div className="relative rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 shadow-xl p-8 animate-fade">
          <div className="text-yellow-400 text-xl mb-3">⭐⭐⭐⭐⭐</div>
          <p className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
            {testimonials[index].text}
          </p>
          <div className="mt-6 font-semibold text-slate-700 dark:text-slate-300">{testimonials[index].name}</div>
        </div>

        {/* נקודות ניווט */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-tealBrand' : 'bg-slate-400/40'}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade { animation: fade 0.6s ease-out; }
      `}</style>
    </section>
  )
}
