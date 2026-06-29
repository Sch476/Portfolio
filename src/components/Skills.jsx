import { skillGroups } from '../data'

const mono = "'JetBrains Mono', monospace"
const serif = "'Newsreader', serif"

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ scrollMarginTop: 80, background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,10vw,120px) clamp(20px,5vw,56px)' }}>
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
            02 — Toolkit
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
            The stack I reach for.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 36 }}>
          {skillGroups.map((group) => (
            <div key={group.name} data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  paddingBottom: 12,
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {group.name}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.items.map((skill) => (
                  <span key={skill} data-cursor className="skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
