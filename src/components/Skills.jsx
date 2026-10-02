import { skillGroups } from '../data'
import SectionHeading from './SectionHeading'

const mono = "'JetBrains Mono', monospace"

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ scrollMarginTop: 90, maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,10vw,120px) clamp(16px,5vw,56px)' }}
    >
      <SectionHeading index="02" label="Toolkit" title="The stack I reach for." />
      <div style={{ borderTop: '1px solid var(--border)' }}>
        {skillGroups.map((group) => (
          <div
            key={group.name}
            data-reveal
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              gap: '12px 32px',
              padding: '22px 0',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <div style={{ flex: '0 0 160px', fontFamily: mono, fontSize: 12, color: 'var(--muted)' }}>{group.name}</div>
            <div style={{ flex: '1 1 320px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {group.items.map((skill) => (
                <span key={skill} data-cursor className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
