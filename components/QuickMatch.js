import { useState } from 'react'

export default function QuickMatch() {
  const [subject, setSubject] = useState('')
  const [level, setLevel] = useState('')
  const [time, setTime] = useState('')

  const handleSend = () => {
    if (!subject || !level) {
      alert('נא לבחור מקצוע ורמה לפני השליחה')
      return
    }

    const msg = `שלום רועי, אני מעוניין בשיעור פרטי:\n\n📘 מקצוע: ${subject}\n📊 רמה: ${level}\n🕒 מועד מועדף: ${time || 'לא צוין'}\n\nאשמח שתיצור איתי קשר!`
    const url = `https://wa.me/972549480190?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  return (
    <section id="quick" className="bg-gradient-to-b from-slate-50 to-white dark:from-ink2 dark:to-ink border-y border-black/10 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-4 py-14 text-center">
        <h2 className="text-3xl font-bold text-tealBrand mb-6">תיאום מהיר</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">בחרו מקצוע, רמה ומועד מועדף — ההודעה תישלח ישירות לוואטסאפ שלי בצורה מסודרת.</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <select value={subject} onChange={(e)=>setSubject(e.target.value)} className="rounded-xl border border-black/10 dark:border-white/10 px-4 py-3">
            <option value="">בחר מקצוע</option>
            <option>מתמטיקה</option>
            <option>פיזיקה</option>
            <option>מדעי המחשב</option>
            <option>פסיכומטרי (כמותי)</option>
          </select>

          <select value={level} onChange={(e)=>setLevel(e.target.value)} className="rounded-xl border border-black/10 dark:border-white/10 px-4 py-3">
            <option value="">בחר רמה</option>
            <option>חטיבה</option>
            <option>תיכון (3–5 יחידות)</option>
            <option>סטודנטים</option>
            <option>פסיכומטרי</option>
          </select>

          <input value={time} onChange={(e)=>setTime(e.target.value)} className="rounded-xl border border-black/10 dark:border-white/10 px-4 py-3" placeholder="מועד מועדף (למשל: שלישי אחה״צ)" />

          <button onClick={handleSend} className="px-6 py-3 rounded-xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-bold shadow-sm hover:shadow-md">
            המשך
          </button>
        </div>
      </div>
    </section>
  )
}
