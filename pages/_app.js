import '@/styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('rt-theme')
    if(saved==='light'){ document.documentElement.classList.remove('dark'); }
    else{ document.documentElement.classList.add('dark'); }
    document.documentElement.setAttribute('dir','rtl')

    // reveal on scroll
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } })
    },{threshold:0.12})
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))
  }, [])
  return <Component {...pageProps} />
}
