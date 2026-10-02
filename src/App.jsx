import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { buildVars } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import Profiles from './components/Profiles'
import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CatCursor from './components/CatCursor'

const MOBILE_BREAKPOINT = 980

function getInitialTheme() {
  try {
    const s = localStorage.getItem('amehta-theme')
    if (s === 'dark' || s === 'light') return s
  } catch {}
  return 'dark'
}

function getInitialCursor() {
  try {
    if (localStorage.getItem('cursor-style') === 'default') return 'default'
  } catch {}
  return 'cat'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [cursorStyle, setCursorStyle] = useState(getInitialCursor)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )
  const [menuOpen, setMenuOpen] = useState(false)

  const rootRef = useRef(null)
  const progRef = useRef(null)

  const vars = useMemo(() => buildVars(theme), [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('amehta-theme', next)
      } catch {}
      return next
    })
  }, [])

  const toggleCursor = useCallback(() => {
    setCursorStyle((c) => {
      const next = c === 'cat' ? 'default' : 'cat'
      try {
        localStorage.setItem('cursor-style', next)
      } catch {}
      return next
    })
  }, [])

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    document.body.style.background = vars['--bg']
  }, [vars])

  useEffect(() => {
    const onResize = () => {
      const m = window.innerWidth < MOBILE_BREAKPOINT
      setIsMobile((prev) => {
        if (m !== prev) setMenuOpen(false)
        return m
      })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0
      if (progRef.current) progRef.current.style.width = p + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const els = Array.from(root.querySelectorAll('[data-reveal]'))
    els.forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top > window.innerHeight * 0.88) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(22px)'
      }
    })

    let revealIo
    if (typeof IntersectionObserver !== 'undefined') {
      revealIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              const el = en.target
              el.style.transition =
                'opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)'
              el.style.opacity = '1'
              el.style.transform = 'none'
              revealIo.unobserve(el)
            }
          })
        },
        { threshold: 0.12 }
      )
      els.forEach((el) => revealIo.observe(el))
    } else {
      els.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
    }

    const runCount = (el) => {
      const target = parseFloat(el.getAttribute('data-count')) || 0
      const suffix = el.getAttribute('data-suffix') || ''
      const dur = 1300
      const start = performance.now()
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur)
        const e = 1 - Math.pow(1 - p, 3)
        el.textContent = Math.round(target * e).toLocaleString() + suffix
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    let countIo
    const counters = Array.from(root.querySelectorAll('[data-count]'))
    if (typeof IntersectionObserver !== 'undefined') {
      countIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              runCount(en.target)
              countIo.unobserve(en.target)
            }
          })
        },
        { threshold: 0.5 }
      )
      counters.forEach((el) => countIo.observe(el))
    }

    return () => {
      if (revealIo) revealIo.disconnect()
      if (countIo) countIo.disconnect()
    }
  }, [])

  const [hasMouse] = useState(
    () => typeof window !== 'undefined' && !(window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
  )

  const rootStyle = {
    ...vars,
    background: 'var(--bg)',
    color: 'var(--text)',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden',
    isolation: 'isolate',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    transition: 'background-color .5s ease, color .5s ease',
  }

  return (
    <div ref={rootRef} style={rootStyle}>
      <div aria-hidden="true" className="backdrop">
        <div className="backdrop-grid" />
        <div className="backdrop-beam" />
      </div>

      <div
        ref={progRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '1px',
          width: '0%',
          zIndex: 200,
          background: 'var(--gold)',
          pointerEvents: 'none',
        }}
      />

      {hasMouse && cursorStyle === 'cat' && <CatCursor />}

      <Navbar
        isMobile={isMobile}
        menuOpen={menuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
        cursorStyle={hasMouse ? cursorStyle : null}
        toggleCursor={toggleCursor}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      <Hero />
      <Work />
      <Skills />
      <Profiles />
      <About />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}
