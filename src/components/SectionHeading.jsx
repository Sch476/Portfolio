const mono = "'JetBrains Mono', monospace"

export default function SectionHeading({ index, label, title, aside }) {
  return (
    <div
      data-reveal
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: 'clamp(32px,5vw,52px)',
      }}
    >
      <div>
        <div style={{ fontFamily: mono, fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: 'var(--gold)' }}>{index}</span>
          <span style={{ width: 18, height: 1, background: 'var(--border2)' }} />
          {label}
        </div>
        <h2
          style={{
            margin: '14px 0 0',
            fontWeight: 600,
            fontSize: 'clamp(30px,4.6vw,48px)',
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            color: 'var(--text)',
          }}
        >
          {title}
        </h2>
      </div>
      {aside && <p style={{ margin: 0, maxWidth: 340, fontSize: 14.5, lineHeight: 1.6, color: 'var(--muted)' }}>{aside}</p>}
    </div>
  )
}
