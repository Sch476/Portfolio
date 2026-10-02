import { featured, projects } from '../data'
import { extAttrs, preventHash } from '../util'
import SectionHeading from './SectionHeading'

const mono = "'JetBrains Mono', monospace"

const tagStyle = {
  fontFamily: mono,
  fontSize: 11,
  color: 'var(--muted)',
  border: '1px solid var(--border)',
  padding: '4px 10px',
  borderRadius: 999,
}

const metaStyle = { fontFamily: mono, fontSize: 11.5, color: 'var(--faint)' }

function Tags({ tags }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {tags.map((tag) => (
        <span key={tag} style={tagStyle}>
          {tag}
        </span>
      ))}
    </div>
  )
}

function Featured() {
  return (
    <div data-reveal data-cursor className="card-featured">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ ...metaStyle, color: 'var(--gold)' }}>
          {featured.n} · Featured
        </span>
        <span style={metaStyle}>{featured.meta}</span>
      </div>
      <h3 style={{ margin: 0, fontWeight: 600, fontSize: 'clamp(28px,3.6vw,40px)', letterSpacing: '-0.035em', color: 'var(--text)' }}>
        {featured.title}
      </h3>
      <p style={{ margin: 0, maxWidth: 760, fontSize: 15.5, lineHeight: 1.7, color: 'var(--muted)' }}>{featured.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,4vw,48px)', margin: '6px 0' }}>
        {featured.metrics.map((m) => (
          <div key={m.label}>
            <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--text)' }}>{m.value}</div>
            <div style={{ ...metaStyle, marginTop: 2 }}>{m.label}</div>
          </div>
        ))}
      </div>
      <Tags tags={featured.tags} />
      {featured.links.length > 0 && (
        <div style={{ display: 'flex', gap: 18, marginTop: 4 }}>
          {featured.links.map((l) => (
            <a key={l.label} href={l.href} {...extAttrs(l.href)} onClick={preventHash} data-cursor className="link-gold">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ item }) {
  return (
    <div data-cursor data-reveal className="card" style={{ padding: '24px 24px 22px', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span style={metaStyle}>{item.category}</span>
        <span style={metaStyle}>{item.n}</span>
      </div>
      <h3 style={{ margin: 0, fontWeight: 600, fontSize: 22, letterSpacing: '-0.025em', color: 'var(--text)' }}>{item.title}</h3>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--muted)' }}>{item.desc}</p>
      <Tags tags={item.tags} />
      <div style={{ display: 'flex', gap: 18, marginTop: 'auto', paddingTop: 8 }}>
        {item.source && (
          <a href={item.source} {...extAttrs(item.source)} data-cursor className="link-gold">
            Source ↗
          </a>
        )}
        {item.demo && (
          <a href={item.demo} {...extAttrs(item.demo)} data-cursor className="link-gold">
            Demo ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      style={{ scrollMarginTop: 90, maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,10vw,128px) clamp(16px,5vw,56px)' }}
    >
      <SectionHeading
        index="01"
        label="Selected work"
        title="Things I've built."
        aside="A mix of full-stack apps, data pipelines and AI tools — built for hackathons, internships and the fun of it."
      />

      <Featured />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(300px,100%),1fr))', gap: 20 }}>
        {projects.map((item) => (
          <ProjectCard key={item.n} item={item} />
        ))}
      </div>
    </section>
  )
}
