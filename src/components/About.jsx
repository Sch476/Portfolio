import { education, timeline } from '../data'

const mono = "'JetBrains Mono', monospace"
const serif = "'Newsreader', serif"

export default function About() {
  return (
    <section
      id="about"
      style={{ scrollMarginTop: 80, background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: 'clamp(64px,10vw,120px) clamp(20px,5vw,56px)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(36px,6vw,80px)',
        }}
      >
        <div data-reveal style={{ flex: '1 1 380px', minWidth: 300 }}>
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
            04 — Summary
          </div>
          <p style={{ margin: '22px 0 0', fontFamily: serif, fontSize: 'clamp(22px,2.8vw,30px)', lineHeight: 1.4, color: 'var(--text)', fontWeight: 400 }}>
            I&apos;m a final-year Computer Science student who likes building across the full stack — web apps, data pipelines
            and AI-powered tools.
          </p>
          <p style={{ margin: '20px 0 0', fontSize: 15.5, lineHeight: 1.7, color: 'var(--muted)' }}>
            Most recently I interned at LTIMindtree as a GenAI engineer, building Python automation for enterprise clients — an
            Azure-hosted dashboard that ingested and normalized messy Excel data, a FastAPI service for reliable newsletter
            delivery, and an NLP-to-SQL system I improved through prompt engineering.
          </p>
          <p style={{ margin: '16px 0 0', fontSize: 15.5, lineHeight: 1.7, color: 'var(--muted)' }}>
            My final-year project, MediSync, is an AI healthcare-middleware layer connecting doctors, insurers and patients —
            structuring clinical notes, adjudicating insurance claims and translating bills into plain language. I&apos;m drawn
            to the data and backend side of things, and I care about shipping tools people actually use. Right now I&apos;m
            looking for a full-time role where I can keep learning and own real surface area.
          </p>
          <p style={{ margin: '26px 0 0', fontFamily: serif, fontStyle: 'italic', fontSize: 19, color: 'var(--gold)' }}>— Sayantan</p>
        </div>
        <div data-reveal style={{ flex: '1 1 340px', minWidth: 300 }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: 16, padding: '24px 26px', background: 'var(--surface)', marginBottom: 24 }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>Education</div>
            <div style={{ marginTop: 12, fontFamily: serif, fontSize: 21, color: 'var(--text)' }}>{education.degree}</div>
            {education.school && <div style={{ marginTop: 4, fontSize: 14, color: 'var(--muted)' }}>{education.school}</div>}
            <div style={{ marginTop: 10, display: 'flex', gap: 16, fontFamily: mono, fontSize: 12, color: 'var(--gold)' }}>
              {education.badges.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>
          {timeline.map((t) => (
            <div key={t.when} style={{ display: 'flex', gap: 18, padding: '16px 0', borderTop: '1px solid var(--border)' }}>
              <div style={{ flex: 'none', minWidth: 116, fontFamily: mono, fontSize: 12, color: 'var(--gold)' }}>{t.when}</div>
              <div>
                <div style={{ fontSize: 15, color: 'var(--text)', fontWeight: 500 }}>{t.what}</div>
                <div style={{ marginTop: 3, fontSize: 13, color: 'var(--muted)' }}>{t.where}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
