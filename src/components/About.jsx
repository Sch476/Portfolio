import { education, timeline } from '../data'
import SectionHeading from './SectionHeading'

const mono = "'JetBrains Mono', monospace"

export default function About() {
  return (
    <section
      id="about"
      style={{ scrollMarginTop: 90, maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,10vw,120px) clamp(16px,5vw,56px)' }}
    >
      <SectionHeading index="04" label="Summary" title="A bit about me." />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(36px,6vw,80px)' }}>
        <div data-reveal style={{ flex: '1 1 380px', minWidth: 'min(300px,100%)' }}>
          <p style={{ margin: 0, fontSize: 'clamp(20px,2.4vw,26px)', fontWeight: 500, lineHeight: 1.45, letterSpacing: '-0.02em', color: 'var(--text)' }}>
            I&apos;m a Computer Science graduate who likes building across the full stack — web apps, data pipelines
            and AI-powered tools.
          </p>
          <p style={{ margin: '20px 0 0', fontSize: 15.5, lineHeight: 1.75, color: 'var(--muted)' }}>
            Most recently I interned at LTIMindtree as a GenAI engineer, building Python automation for enterprise clients — an
            Azure-hosted dashboard that ingested and normalized messy Excel data, a FastAPI service for reliable newsletter
            delivery, and an NLP-to-SQL system I improved through prompt engineering.
          </p>
          <p style={{ margin: '16px 0 0', fontSize: 15.5, lineHeight: 1.75, color: 'var(--muted)' }}>
            My final-year project, MediSync, is an AI healthcare-middleware layer connecting doctors, insurers and patients —
            structuring clinical notes, adjudicating insurance claims and translating bills into plain language. I&apos;m drawn
            to the data and backend side of things, and I care about shipping tools people actually use. Right now I&apos;m
            looking for a full-time role where I can keep learning and own real surface area.
          </p>
          <p style={{ margin: '24px 0 0', fontStyle: 'italic', fontWeight: 500, fontSize: 17, color: 'var(--gold)' }}>— Sayantan</p>
        </div>
        <div data-reveal style={{ flex: '1 1 340px', minWidth: 'min(300px,100%)' }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: 16, padding: '22px 24px', background: 'var(--surface)', marginBottom: 20 }}>
            <div style={{ fontFamily: mono, fontSize: 11.5, color: 'var(--muted)' }}>Education</div>
            <div style={{ marginTop: 12, fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text)' }}>{education.degree}</div>
            {education.school && <div style={{ marginTop: 4, fontSize: 14, color: 'var(--muted)' }}>{education.school}</div>}
            <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {education.badges.map((b) => (
                <span
                  key={b}
                  style={{ fontFamily: mono, fontSize: 11, color: 'var(--text)', border: '1px solid var(--border2)', padding: '4px 10px', borderRadius: 999 }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
          {timeline.map((t) => (
            <div key={t.when} style={{ display: 'flex', gap: 18, padding: '16px 0', borderTop: '1px solid var(--border)' }}>
              <div style={{ flex: 'none', minWidth: 116, fontFamily: mono, fontSize: 11.5, color: 'var(--muted)' }}>{t.when}</div>
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
