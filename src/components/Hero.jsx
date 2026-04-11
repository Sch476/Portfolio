import { useState, useEffect } from 'react'

const roles = ['Full-Stack Developer', 'GenAI Engineer', 'Problem Solver']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setDeleting(false)
        setRoleIdx((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 max-w-3xl text-center">
        {/* Small label */}
        <div className="reveal show inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-border text-xs uppercase tracking-widest text-text-dim">
          <span className="w-1.5 h-1.5 rounded-full bg-accent3 animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="reveal show text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
          <span className="text-text-bright">Sayantan</span>
          <br />
          <span className="text-text-bright">Choudhury</span>
        </h1>

        <div className="reveal show reveal-delay-1 mt-6 h-8 flex items-center justify-center">
          <span className="font-mono text-lg sm:text-xl text-accent">
            {displayed}
          </span>
          <span className="cursor" />
        </div>

        <p className="reveal show reveal-delay-2 mt-8 text-text-dim text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          I build modern web apps, data pipelines, and AI-powered tools.
          Currently finishing my CS degree and looking for my next challenge.
        </p>

        <div className="reveal show reveal-delay-3 mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="group px-7 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-all duration-300"
          >
            See my work
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-border text-text-dim text-sm font-medium hover:text-text-bright hover:border-border-hover transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  )
}
