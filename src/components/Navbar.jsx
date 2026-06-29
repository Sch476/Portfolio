import { navItems, RESUME_URL } from '../data'
import { extAttrs } from '../util'

const mono = "'JetBrains Mono', monospace"
const serif = "'Newsreader', serif"

function Brand() {
  return (
    <a href="#top" className="brand">
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: 9,
          border: '1px solid var(--gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: serif,
          fontSize: 17,
          color: 'var(--gold)',
        }}
      >
        SC
      </span>
      <span style={{ fontFamily: mono, fontSize: 13, letterSpacing: '.04em', color: 'var(--text)' }}>
        sayantan<span style={{ color: 'var(--gold)' }}>.</span>dev
      </span>
    </a>
  )
}

export default function Navbar({ isMobile, menuOpen, theme, toggleTheme, toggleMenu, closeMenu }) {
  const themeLabel = theme === 'dark' ? 'Dark' : 'Light'

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: 'var(--nav)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '14px clamp(20px,5vw,56px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <Brand />

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} data-cursor className="navlink">
                  {item.label}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button onClick={toggleTheme} data-cursor title="Toggle theme" className="theme-toggle">
                <span
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: '50%',
                    border: '1.5px solid var(--gold)',
                    background: 'linear-gradient(90deg,var(--gold) 50%,transparent 50%)',
                  }}
                />
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                  }}
                >
                  {themeLabel}
                </span>
              </button>
              <a href={RESUME_URL} {...extAttrs(RESUME_URL)} data-cursor className="btn-resume">
                Résumé ↓
              </a>
            </div>
          </div>
        )}

        {isMobile && (
          <button onClick={toggleMenu} data-cursor aria-label="Menu" className="menu-btn">
            <span />
            <span />
            <span />
          </button>
        )}
      </div>

      {menuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--border)',
            padding: '18px clamp(20px,5vw,56px) 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            background: 'var(--bg2)',
          }}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} className="menu-link">
              {item.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
            <button onClick={toggleTheme} className="menu-theme">
              {themeLabel} mode
            </button>
            <a href={RESUME_URL} {...extAttrs(RESUME_URL)} onClick={closeMenu} className="menu-resume">
              Résumé ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
