import { navItems, RESUME_URL } from '../data'
import { extAttrs } from '../util'

const mono = "'JetBrains Mono', monospace"

function Brand() {
  return (
    <a href="#top" className="brand">
      <span
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          background: 'var(--text)',
          color: 'var(--bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: '-0.04em',
        }}
      >
        SC
      </span>
      <span style={{ fontFamily: mono, fontSize: 12.5, color: 'var(--text)' }}>
        sayantan<span style={{ color: 'var(--gold)' }}>.</span>dev
      </span>
    </a>
  )
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" />
    </svg>
  )
}

function PointerIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3 1.5v12.2l3.2-3 2.2 4.8 2.1-1-2.2-4.7h4.4z" />
    </svg>
  )
}

function CatIcon() {
  return (
    <svg width="14" height="12" viewBox="0 0 7 6" fill="currentColor" shapeRendering="crispEdges" aria-hidden="true">
      <path d="M0 0h1v1h1v1h3v-1h1v-1h1v6h-7zM1 3v1h1v-1zM5 3v1h1v-1z" fillRule="evenodd" />
    </svg>
  )
}

function Switch({ on, onToggle, label, title, offIcon, onIcon }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      title={title}
      onClick={onToggle}
      data-cursor
      className={`switch${on ? ' is-on' : ''}`}
    >
      <span className="switch-knob" />
      <span className={`switch-icon${on ? '' : ' is-active'}`}>{offIcon}</span>
      <span className={`switch-icon${on ? ' is-active' : ''}`}>{onIcon}</span>
    </button>
  )
}

function Toggles({ theme, toggleTheme, cursorStyle, toggleCursor }) {
  const dark = theme === 'dark'
  const cat = cursorStyle === 'cat'
  return (
    <>
      {cursorStyle && (
        <Switch
          on={cat}
          onToggle={toggleCursor}
          label="Cat cursor"
          title={cat ? 'Use the default cursor' : 'Use the cat cursor'}
          offIcon={<PointerIcon />}
          onIcon={<CatIcon />}
        />
      )}
      <Switch
        on={dark}
        onToggle={toggleTheme}
        label="Dark mode"
        title={`Switch to ${dark ? 'light' : 'dark'} mode`}
        offIcon={<SunIcon />}
        onIcon={<MoonIcon />}
      />
    </>
  )
}

export default function Navbar({
  isMobile,
  menuOpen,
  theme,
  toggleTheme,
  cursorStyle,
  toggleCursor,
  toggleMenu,
  closeMenu,
}) {
  const toggles = (
    <Toggles theme={theme} toggleTheme={toggleTheme} cursorStyle={cursorStyle} toggleCursor={toggleCursor} />
  )

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '16px clamp(16px,4vw,32px) 0',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="nav-pill" style={isMobile ? { width: '100%', justifyContent: 'space-between' } : undefined}>
          <Brand />

          {!isMobile && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} data-cursor className="navlink">
                    {item.label}
                  </a>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {toggles}
                <a href={RESUME_URL} {...extAttrs(RESUME_URL)} data-cursor className="btn-resume">
                  Résumé
                </a>
              </div>
            </>
          )}

          {isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {toggles}
              <button onClick={toggleMenu} data-cursor aria-label="Menu" aria-expanded={menuOpen} className="menu-btn">
                <span />
                <span />
              </button>
            </div>
          )}
        </div>
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            marginTop: 8,
            border: '1px solid var(--border2)',
            borderRadius: 20,
            padding: '20px 22px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            background: 'var(--nav)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
          }}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} className="menu-link">
              {item.label}
            </a>
          ))}
          <div style={{ display: 'flex', marginTop: 6 }}>
            <a href={RESUME_URL} {...extAttrs(RESUME_URL)} onClick={closeMenu} className="menu-resume">
              Résumé
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
