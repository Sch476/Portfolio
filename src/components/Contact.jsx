import { useState } from 'react'
import { heroLinks } from '../data'
import { extAttrs, preventHash } from '../util'

const mono = "'JetBrains Mono', monospace"
const serif = "'Newsreader', serif"

const labelStyle = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
}
const errStyle = { fontFamily: mono, fontSize: 11.5, color: '#E5786A' }
const fieldWrap = { display: 'flex', flexDirection: 'column', gap: 8 }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => {
    const v = e.target.value
    setForm((f) => ({ ...f, [key]: v }))
    setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please tell me your name.'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) errs.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) errs.message = 'A little more detail, please (10+ chars).'
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSent(true)
  }

  const resetForm = () => {
    setSent(false)
    setForm({ name: '', email: '', message: '' })
    setErrors({})
  }

  return (
    <section
      id="contact"
      style={{ scrollMarginTop: 80, maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,10vw,128px) clamp(20px,5vw,56px)' }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(36px,6vw,72px)' }}>
        <div data-reveal style={{ flex: '1 1 360px', minWidth: 300 }}>
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
            05 — Contact
          </div>
          <h2
            style={{
              margin: '14px 0 0',
              fontFamily: serif,
              fontWeight: 500,
              fontSize: 'clamp(34px,5.5vw,60px)',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
              color: 'var(--text)',
            }}
          >
            Let&apos;s build
            <br />
            something together.
          </h2>
          <p style={{ margin: '22px 0 0', maxWidth: 420, fontSize: 15.5, lineHeight: 1.65, color: 'var(--muted)' }}>
            I&apos;m looking for full-time roles and interesting collaborations. Drop me a line — I&apos;d love to chat.
          </p>
          <a href="mailto:sayantanchr13@gmail.com" data-cursor className="link-underline" style={{ marginTop: 24 }}>
            sayantanchr13@gmail.com
          </a>
          <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
            {heroLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={preventHash}
                {...extAttrs(item.href)}
                data-cursor
                className="chip chip--sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div data-reveal style={{ flex: '1 1 380px', minWidth: 300 }}>
          {!sent && (
            <form
              onSubmit={onSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 18,
                padding: 'clamp(22px,3vw,34px)',
              }}
            >
              <div style={fieldWrap}>
                <label style={labelStyle}>Name</label>
                <input type="text" value={form.name} onChange={update('name')} placeholder="Jane Doe" className="field" />
                {errors.name && <span style={errStyle}>{errors.name}</span>}
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Email</label>
                <input type="email" value={form.email} onChange={update('email')} placeholder="jane@company.com" className="field" />
                {errors.email && <span style={errStyle}>{errors.email}</span>}
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Message</label>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  placeholder="Tell me about the role or idea…"
                  className="field field--area"
                />
                {errors.message && <span style={errStyle}>{errors.message}</span>}
              </div>
              <button type="submit" data-cursor className="btn-submit">
                Send message →
              </button>
            </form>
          )}
          {sent && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 14,
                background: 'var(--surface)',
                border: '1px solid var(--gold)',
                borderRadius: 18,
                padding: 'clamp(34px,5vw,56px)',
              }}
            >
              <span
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: '50%',
                  border: '1.5px solid var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  color: 'var(--gold)',
                }}
              >
                ✓
              </span>
              <h3 style={{ margin: 0, fontFamily: serif, fontWeight: 500, fontSize: 26, color: 'var(--text)' }}>Message sent</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 300 }}>
                Thanks for reaching out — I&apos;ll get back to you shortly. (This is a demo form, no email actually leaves the
                page.)
              </p>
              <button onClick={resetForm} data-cursor className="btn-reset">
                Send another
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
