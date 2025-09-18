// /components/ThemeToggle.js
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') || 'system' : 'system'
    setTheme(saved)
    applyTheme(saved)
  }, [])

  const applyTheme = (t) => {
    const root = document.documentElement
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = t === 'dark' || (t === 'system' && preferDark)
    root.classList.toggle('dark', isDark)
  }

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    applyTheme(next)
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/15 px-3 py-2 text-sm hover:border-tealBrand hover:text-tealBrand"
      aria-label="החלפת מצב צבע"
      title="מצב כהה/בהיר"
    >
      {/* מציג טקסט לפי המצב הנוכחי */}
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        {theme === 'dark'
          ? <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"/>
          : <>
              <circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M22 12h-2M4 12H2m15.364-7.364l-1.414 1.414M8.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M8.05 7.05 6.636 5.636"/>
            </>
        }
      </svg>
      {theme === 'dark' ? 'כהה' : 'בהיר'}
    </button>
  )
}
