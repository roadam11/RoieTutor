import { Html, Head, Main, NextScript } from 'next/document'

function setInitialColorMode() {
  try {
    const saved = localStorage.getItem('rt-theme')
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    const useLight = saved ? saved === 'light' : prefersLight
    if (useLight) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
    document.documentElement.setAttribute('dir','rtl')
  } catch (e) {
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('dir','rtl')
  }
}

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${setInitialColorMode.toString()})()`
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
