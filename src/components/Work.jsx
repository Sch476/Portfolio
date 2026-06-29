import { featured, projects } from '../data'
import { extAttrs, preventHash } from '../util'

const mono = "'JetBrains Mono', monospace"
const serif = "'Newsreader', serif"

const tagStyle = {
  fontFamily: mono,
  fontSize: 11,
  color: 'var(--muted)',
  border: '1px solid var(--border)',
  padding: '4px 9px',
  borderRadius: 6,
}

const eyebrow = {
  fontFamily: mono,
  fontSize: 12,
  letterSpacing: '.22em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
}

function Featured() {
  return (
    <div data-reveal data-cursor className="card-featured">
      <div style={{ position: 'relative', flex: '1 1 320px', minHeight: 260, background: 'var(--bg2)', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'repeating-linear-gradient(135deg,var(--border) 0 1px,transparent 1px 18px)',
            animation: 'dash 12s linear infinite',
            opacity: 0.7,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%,var(--glow),transparent 60%)' }} />
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 22,
            fontFamily: mono,
            fontSize: 10,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: 'var(--on-accent)',
            background: 'var(--accent)',
            padding: '5px 11px',
            borderRadius: 20,
          }}
        >
          ★ Featured
        </div>
        <div style={{ position: 'absolute', right: 24, bottom: 8, fontFamily: serif, fontSize: 120, lineHeight: 1, color: 'var(--faint)', opacity: 0.45 }}>
          {featured.n}
        </div>
      </div>
      <div style={{ flex: '1 1 360px', padding: 'clamp(24px,3vw,40px)', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <h3 style={{ margin: 0, fontFamily: serif, fontWeight: 500, fontSize: 'clamp(26px,3.4vw,38px)', color: 'var(--text)' }}>
            {featured.title}
          </h3>
          <span style={{ fontFamily: mono, fontSize: 12, color: 'var(--muted)' }}>{featured.meta}</span>
        </div>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'var(--muted)' }}>{featured.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, margin: '4px 0' }}>
          {featured.metrics.map((m) => (
            <div key={m.label}>
              <div style={{ fontFamily: mono, fontSize: 20, color: 'var(--gold)', fontWeight: 600 }}>{m.value}</div>
              <div style={{ fontSize: 11, color: 'var(--faint)', fontFamily: mono }}>{m.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {featured.tags.map((tag) => (
            <span key={tag} style={tagStyle}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 18, marginTop: 6 }}>
          {featured.links.map((l) => (
            <a key={l.label} href={l.href} {...extAttrs(l.href)} onClick={preventHash} data-cursor className="link-gold">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ item }) {
  return (
    <div data-cursor data-reveal className="card">
      <div style={{ position: 'relative', height: 138, background: 'var(--bg2)', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'repeating-linear-gradient(135deg,var(--border) 0 1px,transparent 1px 16px)',
            animation: 'dash 11s linear infinite',
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: 16,
            fontFamily: mono,
            fontSize: 10,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            border: '1px solid var(--border2)',
            padding: '4px 9px',
            borderRadius: 20,
            background: 'var(--bg2)',
          }}
        >
          {item.category}
        </div>
        <div style={{ position: 'absolute', right: 16, bottom: 2, fontFamily: serif, fontSize: 64, lineHeight: 1, color: 'var(--faint)', opacity: 0.5 }}>
          {item.n}
        </div>
      </div>
      <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <h3 style={{ margin: 0, fontFamily: serif, fontWeight: 500, fontSize: 24, color: 'var(--text)' }}>{item.title}</h3>
          <span style={{ fontFamily: mono, fontSize: 12, color: 'var(--muted)' }}>{item.year}</span>
        </div>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--muted)' }}>{item.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 2 }}>
          {item.tags.map((tag) => (
            <span key={tag} style={tagStyle}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 18, marginTop: 'auto', paddingTop: 8 }}>
          {item.source && (
            <a href={item.source} {...extAttrs(item.source)} data-cursor className="link-gold" style={{ fontSize: 12 }}>
              Source ↗
            </a>
          )}
          {item.demo && (
            <a href={item.demo} {...extAttrs(item.demo)} data-cursor className="link-gold" style={{ fontSize: 12 }}>
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      style={{ scrollMarginTop: 80, maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,10vw,128px) clamp(20px,5vw,56px)' }}
    >
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
          <div style={eyebrow}>
            <span style={{ width: 26, height: 1, background: 'var(--gold)' }} />
            01 — Selected Work
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
            Things I&apos;ve built.
          </h2>
        </div>
        <p style={{ margin: 0, maxWidth: 320, fontSize: 14.5, lineHeight: 1.6, color: 'var(--muted)' }}>
          A mix of full-stack apps, data pipelines and AI tools — built for hackathons, internships and the fun of it.
        </p>
      </div>

      <Featured />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
        {projects.map((item) => (
          <ProjectCard key={item.n} item={item} />
        ))}
      </div>
    </section>
  )
}
