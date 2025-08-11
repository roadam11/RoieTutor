export default function StickyCTA(){
  return (
    <div className="fixed md:hidden inset-x-0 bottom-0 z-50 bg-white/95 dark:bg-ink/90 backdrop-blur border-t border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-3">
        <a href="https://wa.me/972549480190" className="flex-1 text-center rounded-xl border border-black/10 dark:border-white/10 px-3 py-2">
          וואטסאפ מיידי
        </a>
        <a href="#contact" className="flex-1 text-center rounded-xl bg-tealBrand text-[#061019] font-semibold px-3 py-2">
          קבע שיעור
        </a>
      </div>
    </div>
  )
}
