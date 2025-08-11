export default function ThemeToggle(){
  return (
    <button
      onClick={()=>{
        const nowDark = !document.documentElement.classList.contains('dark')
        document.documentElement.classList.toggle('dark', nowDark)
        localStorage.setItem('rt-theme', nowDark ? 'dark' : 'light')
      }}
      className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-3 py-1.5"
      title="מצב בהיר/כהה"
    >
      <span className="w-3.5 h-3.5 rounded-full bg-tealBrand"></span>
      <span className="text-sm text-white/80">מצב</span>
    </button>
  )
}
