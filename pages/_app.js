import '@/styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // RTL
    document.documentElement.setAttribute('dir','rtl')

    // Theme init: saved or system preference
    const saved = typeof window !== 'undefined' && localStorage.getItem('rt-theme')
    const prefersLight = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches
    const useLight = saved ? saved === 'light' : prefersLight
    document.documentElement.classList.toggle('dark', !useLight)

    // reveal on scroll
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } })
    },{threshold:0.12})
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))
  }, [])

  return <Component {...pageProps} />
}
