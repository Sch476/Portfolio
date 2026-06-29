import { profiles } from '../data'
import { extAttrs, preventHash } from '../util'

const mono = "'JetBrains Mono', monospace"
const serif = "'Newsreader', serif"

export default function Profiles() {
  return (
    <section
      id="profiles"
      style={{ scrollMarginTop: 80, maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,10vw,128px) clamp(20px,5vw,56px)' }}
    >
      <div data-reveal style={{ marginBottom: 'clamp(32px,5vw,52px)' }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: '.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ width: 26, height: 1, background: 'var(--gold)' }} />
          03 — Profiles
        </div>
        <h2
          style={{
            margin: '14px 0 0',
            fontFamily: serif,
            fontWeight: 500,
            fontSize: 'clamp(30px,5vw,52px)',
            lineHeight: 1.04,
            letterSpacing: '-0.01em',
            color: 'var(--text)',
          }}
        >
          Find me online.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18 }}>
        {profiles.map((p) => (
          <a key={p.name} href={p.href} onClick={preventHash} {...extAttrs(p.href)} data-cursor data-reveal className="card-profile">
            <span
              style={{
                flex: 'none',
                width: 46,
                height: 46,
                borderRadius: 12,
                border: '1px solid var(--border2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: mono,
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--gold)',
              }}
            >
              {p.glyph}
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: 'block', fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, fontWeight: 600, color: 'var(--text)' }}>
                {p.name}
              </span>
              <span style={{ display: 'block', fontFamily: mono, fontSize: 12, color: 'var(--gold)', marginTop: 2 }}>{p.handle}</span>
              <span style={{ display: 'block', fontSize: 12.5, color: 'var(--muted)', marginTop: 5 }}>{p.stat}</span>
            </span>
            <span style={{ flex: 'none', fontFamily: mono, fontSize: 15, color: 'var(--muted)' }}>↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
