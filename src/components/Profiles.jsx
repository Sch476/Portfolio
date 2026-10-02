import { profiles } from '../data'
import { extAttrs, preventHash } from '../util'
import SectionHeading from './SectionHeading'

const mono = "'JetBrains Mono', monospace"

export default function Profiles() {
  return (
    <section
      id="profiles"
      style={{ scrollMarginTop: 90, maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,10vw,128px) clamp(16px,5vw,56px)' }}
    >
      <SectionHeading index="03" label="Profiles" title="Find me online." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: 14 }}>
        {profiles.map((p) => (
          <a key={p.name} href={p.href} onClick={preventHash} {...extAttrs(p.href)} data-cursor data-reveal className="card-profile">
            <span
              style={{
                flex: 'none',
                width: 42,
                height: 42,
                borderRadius: '50%',
                border: '1px solid var(--border2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: mono,
                fontSize: 12.5,
                color: 'var(--gold)',
              }}
            >
              {p.glyph}
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: 'block', fontSize: 15.5, fontWeight: 600, color: 'var(--text)' }}>{p.name}</span>
              <span
                style={{
                  display: 'block',
                  fontFamily: mono,
                  fontSize: 11.5,
                  color: 'var(--muted)',
                  marginTop: 3,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {p.handle}
              </span>
              <span style={{ display: 'block', fontSize: 12.5, color: 'var(--faint)', marginTop: 4 }}>{p.stat}</span>
            </span>
            <span className="arrow" style={{ flex: 'none', fontSize: 15, color: 'var(--muted)' }}>
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
