import { useEffect } from 'react'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  // מגדיר RTL לכל האתר
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.lang = 'he'
    }
  }, [])

  return (
    <>
      <Head>
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#14b8a6" />

        {/* Icons (תוכל להחליף לקבצים שלך ב-/public/icons) */}
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="icon" href="/icons/icon-192.png" sizes="192x192" />
        <link rel="icon" href="/icons/icon-512.png" sizes="512x512" />

        {/* Meta בסיסיים */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
