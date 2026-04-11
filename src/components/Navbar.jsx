import { useState, useEffect } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/60 backdrop-blur-2xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto h-16 px-6 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight text-text-bright">
          <span className="text-accent">~/</span>sayantan
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] uppercase tracking-widest text-text-dim hover:text-text-bright transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1tMRllaN1XutftjPKhkOc7FXoCWhPu8QV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-1.5 text-[13px] uppercase tracking-widest rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-6 h-5 flex flex-col justify-between"
          aria-label="Menu"
        >
          <span className={`h-px w-full bg-text-bright transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-px w-full bg-text-bright transition-all duration-300 ${open ? 'opacity-0 scale-0' : ''}`} />
          <span className={`h-px w-full bg-text-bright transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-bg/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-2xl font-light text-text-dim hover:text-text-bright transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://drive.google.com/file/d/1tMRllaN1XutftjPKhkOc7FXoCWhPu8QV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="px-8 py-3 text-sm uppercase tracking-widest rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </header>
  )
}
