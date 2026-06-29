import { navItems, profiles } from '../data'
import { extAttrs, preventHash } from '../util'

const mono = "'JetBrains Mono', monospace"
const serif = "'Newsreader', serif"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,6vw,64px) clamp(20px,5vw,56px)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
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
              <span style={{ fontFamily: mono, fontSize: 13, color: 'var(--text)' }}>
                sayantan<span style={{ color: 'var(--gold)' }}>.</span>dev
              </span>
            </div>
            <p style={{ margin: '16px 0 0', fontSize: 13.5, lineHeight: 1.6, color: 'var(--muted)' }}>
              Computer Science student building across full-stack, data and GenAI.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 'clamp(28px,6vw,64px)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--faint)' }}>
                Navigate
              </div>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="footlink">
                  {item.label}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--faint)' }}>
                Elsewhere
              </div>
              {profiles.map((p) => (
                <a key={p.name} href={p.href} onClick={preventHash} {...extAttrs(p.href)} className="footlink">
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            paddingTop: 22,
            borderTop: '1px solid var(--border)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            fontFamily: mono,
            fontSize: 11.5,
            color: 'var(--faint)',
          }}
        >
          <span>© {year} Sayantan Choudhury. All rights reserved.</span>
          <span>Built with React + Tailwind · navy + gold</span>
        </div>
      </div>
    </footer>
  )
}
