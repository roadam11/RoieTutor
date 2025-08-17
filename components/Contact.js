export default function ContactSection() {
  return (
    <section id="contact">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-tealBrand mb-4">צור קשר</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5">
            <p className="text-slate-700 dark:text-slate-300">אפשר להשאיר הודעה בטופס, או ליצור קשר ישירות.</p>
            <div className="mt-3 grid gap-3">
              <a className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 hover:bg-white/90 dark:hover:bg-white/10 transition" href="https://wa.me/972549480190">
                וואטסאפ: <span dir="ltr" className="font-semibold">054-948-0190</span>
              </a>
              <a className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 hover:bg-white/90 dark:hover:bg-white/10 transition" href="mailto:Roadam11@gmail.com">
                מייל: <span className="font-semibold">Roadam11@gmail.com</span>
              </a>
              <a className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 hover:bg-white/90 dark:hover:bg-white/10 transition" href="tel:+972549480190">
                טלפון: <span dir="ltr" className="font-semibold">054-948-0190</span>
              </a>
            </div>
          </div>

          <form
            className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5"
            onSubmit={(e)=>{ e.preventDefault(); alert('תודה! נחזור אליך בהקדם.'); }}
          >
            <label className="block">
              שם מלא<br/>
              <input className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3" placeholder="לדוגמה: דנה לוי" />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <label className="block">
                אימייל<br/>
                <input className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3" placeholder="name@example.com" />
              </label>
              <label className="block">
                טלפון<br/>
                <input className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3" placeholder="054-000-0000" />
              </label>
            </div>

            <label className="block mt-3">
              הודעה<br/>
              <textarea
                rows={4}
                className="w-full mt-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3"
                placeholder="ספרו לי איך אוכל לעזור…"
              />
            </label>

            <button type="submit" className="mt-4 px-6 py-3 rounded-2xl bg-gradient-to-b from-tealBrand to-tealBrand/90 text-[#061019] font-bold shadow-sm hover:shadow-md">
              שליחה
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
