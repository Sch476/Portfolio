import { heroLinks, stats } from '../data'
import { extAttrs, preventHash } from '../util'

const mono = "'JetBrains Mono', monospace"

function Stats() {
  return (
    <div
      data-reveal
      style={{
        marginTop: 'clamp(64px,10vw,120px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
        gap: 1,
        background: 'var(--border)',
        textAlign: 'left',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            padding: '24px clamp(16px,2.4vw,28px)',
            background: 'var(--bg)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            gap: '4px 12px',
          }}
        >
          <div style={{ fontSize: 'clamp(24px,3vw,30px)', fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            {s.count == null ? (
              <span>{s.display}</span>
            ) : (
              <span data-count={s.count} data-suffix={s.suffix}>
                {s.display}
              </span>
            )}
          </div>
          <div>
            <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{s.label}</div>
            <div style={{ marginTop: 2, fontFamily: mono, fontSize: 10.5, color: 'var(--faint)' }}>{s.note}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <header
      id="top"
      style={{
        scrollMarginTop: 90,
        maxWidth: 1180,
        margin: '0 auto',
        padding: 'clamp(72px,13vw,150px) clamp(16px,5vw,56px) clamp(24px,4vw,48px)',
        textAlign: 'center',
      }}
    >
      <div
        data-reveal
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 9,
          border: '1px solid var(--border2)',
          borderRadius: 999,
          padding: '7px 16px',
          marginBottom: 32,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#46C99A',
            boxShadow: '0 0 8px #46C99A',
            animation: 'blink 2.4s ease-in-out infinite',
          }}
        />
        <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>Available for full-time roles</span>
      </div>

      <h1
        data-reveal
        style={{
          margin: 0,
          fontWeight: 700,
          fontSize: 'clamp(36px,6.2vw,76px)',
          lineHeight: 1.04,
          letterSpacing: '-0.045em',
          color: 'var(--text)',
        }}
      >
        Hi, I&apos;m <span style={{ color: 'var(--gold)' }}>Sayantan</span>
        <br />
        Full-Stack &amp; GenAI Developer
      </h1>

      <p
        data-reveal
        style={{
          margin: '26px auto 0',
          maxWidth: 620,
          fontSize: 'clamp(15px,1.7vw,17px)',
          lineHeight: 1.7,
          color: 'var(--muted)',
        }}
      >
        – I build modern web apps, data pipelines and AI-powered tools, from computer-vision systems to
        change-data-capture pipelines. –
      </p>

      <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 36 }}>
        <a href="#work" data-cursor className="btn-primary">
          View work
        </a>
        <a href="#contact" data-cursor className="btn-secondary">
          Get in touch
        </a>
      </div>

      <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 22 }}>
        {heroLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={preventHash}
            {...extAttrs(item.href)}
            data-cursor
            className="chip"
          >
            <span className="chip-tag">{item.tag}</span>
            {item.label}
          </a>
        ))}
      </div>

      <Stats />
    </header>
  )
}
