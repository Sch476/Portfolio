import { achievements } from '../data'

const mono = "'JetBrains Mono', monospace"
const serif = "'Newsreader', serif"

const tagPill = {
  fontFamily: mono,
  fontSize: 10,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  border: '1px solid var(--border2)',
  padding: '4px 9px',
  borderRadius: 20,
}

const metricChip = {
  fontFamily: mono,
  fontSize: 11,
  color: 'var(--muted)',
  border: '1px solid var(--border)',
  padding: '4px 9px',
  borderRadius: 6,
}

export default function Achievements() {
  return (
    <section
      id="achievements"
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
          05 — Achievements
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
          Wins &amp; recognition.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 24 }}>
        {achievements.map((a) => (
          <div
            key={a.title}
            data-cursor
            data-reveal
            className="card"
            style={{ padding: '22px 24px 24px', gap: 13 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <span style={tagPill}>{a.tag}</span>
              <span style={{ fontFamily: mono, fontSize: 12, color: 'var(--faint)' }}>{a.year}</span>
            </div>
            <h3 style={{ margin: 0, fontFamily: serif, fontWeight: 500, fontSize: 22, lineHeight: 1.2, color: 'var(--text)' }}>
              {a.title}
            </h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--muted)' }}>{a.detail}</p>
            {a.metrics && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 'auto', paddingTop: 4 }}>
                {a.metrics.map((m) => (
                  <span key={m} style={metricChip}>
                    {m}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
