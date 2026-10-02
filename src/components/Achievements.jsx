import { achievements } from '../data'
import SectionHeading from './SectionHeading'

const mono = "'JetBrains Mono', monospace"

const metricChip = {
  fontFamily: mono,
  fontSize: 11,
  color: 'var(--muted)',
  border: '1px solid var(--border)',
  padding: '4px 10px',
  borderRadius: 999,
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{ scrollMarginTop: 90, maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,10vw,128px) clamp(16px,5vw,56px)' }}
    >
      <SectionHeading index="05" label="Achievements" title="Wins & recognition." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(290px,100%),1fr))', gap: 20 }}>
        {achievements.map((a) => (
          <div
            key={a.title}
            data-cursor
            data-reveal
            className="card"
            style={{ padding: '22px 24px 24px', gap: 12 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <span style={{ fontFamily: mono, fontSize: 11.5, color: 'var(--gold)' }}>{a.tag}</span>
              {a.year && <span style={{ fontFamily: mono, fontSize: 11.5, color: 'var(--faint)' }}>{a.year}</span>}
            </div>
            <h3 style={{ margin: 0, fontWeight: 600, fontSize: 20, lineHeight: 1.25, letterSpacing: '-0.025em', color: 'var(--text)' }}>
              {a.title}
            </h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--muted)' }}>{a.detail}</p>
            {a.metrics && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto', paddingTop: 4 }}>
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
