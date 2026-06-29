import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { buildVars } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import Profiles from './components/Profiles'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const MOBILE_BREAKPOINT = 860

function getInitialTheme() {
  try {
    const s = localStorage.getItem('amehta-theme')
    if (s === 'dark' || s === 'light') return s
  } catch {
    /* ignore */
  }
  return 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )
  const [menuOpen, setMenuOpen] = useState(false)

  const rootRef = useRef(null)
  const progRef = useRef(null)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  const vars = useMemo(() => buildVars(theme), [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('amehta-theme', next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Keep the document background in sync with the theme so over-scroll matches.
  useEffect(() => {
    document.body.style.background = vars['--bg']
  }, [vars])

  // Responsive breakpoint.
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

  // Scroll progress bar.
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

  // Scroll-reveal + animated counters.
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

  // Custom cursor (skipped on touch / coarse-pointer devices).
  const [cursorOn] = useState(
    () => typeof window !== 'undefined' && !(window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
  )
  useEffect(() => {
    if (!cursorOn) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let hover = false
    let raf

    const move = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.opacity = '1'
      ring.style.opacity = '1'
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
    }
    const isInteractive = (e) =>
      e.target.closest && e.target.closest('a,button,input,textarea,[data-cursor]')
    const over = (e) => {
      if (isInteractive(e)) hover = true
    }
    const out = (e) => {
      if (isInteractive(e)) hover = false
    }
    const leave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    document.addEventListener('mouseleave', leave)

    const loop = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      const s = hover ? 1.9 : 1
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%) scale(${s})`
      ring.style.borderColor = hover ? 'var(--gold)' : 'var(--border2)'
      ring.style.background = hover ? 'var(--glow)' : 'transparent'
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.removeEventListener('mouseleave', leave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [cursorOn])

  const rootStyle = {
    ...vars,
    background: 'var(--bg)',
    color: 'var(--text)',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden',
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
    transition: 'background-color .5s ease, color .5s ease',
    cursor: cursorOn ? 'none' : 'auto',
  }

  return (
    <div ref={rootRef} style={rootStyle}>
      {/* scroll progress */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: '100%',
          zIndex: 200,
          background: 'transparent',
          pointerEvents: 'none',
        }}
      >
        <div
          ref={progRef}
          style={{
            height: '100%',
            width: '0%',
            background: 'linear-gradient(90deg,var(--gold),var(--gold-bright))',
            boxShadow: '0 0 12px var(--glow)',
          }}
        />
      </div>

      {/* custom cursor */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: 'var(--gold)',
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity .25s ease',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          border: '1px solid var(--border2)',
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity .25s ease, border-color .2s ease',
        }}
      />

      <Navbar
        isMobile={isMobile}
        menuOpen={menuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      <Hero />
      <Work />
      <Skills />
      <Profiles />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
