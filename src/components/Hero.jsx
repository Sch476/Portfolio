import { heroLinks, stats } from '../data'
import { extAttrs, preventHash } from '../util'

const mono = "'JetBrains Mono', monospace"
const serif = "'Newsreader', serif"

function Avatar() {
  const ringBase = {
    position: 'absolute',
    width: 316,
    height: 316,
    borderRadius: '50%',
  }
  const floatTag = {
    position: 'absolute',
    fontFamily: mono,
    fontSize: 10,
    color: 'var(--muted)',
    border: '1px solid var(--border)',
    background: 'var(--bg2)',
    padding: '5px 9px',
    borderRadius: 20,
  }
  return (
    <div
      data-reveal
      style={{
        position: 'relative',
        flex: '0 1 360px',
        minWidth: 280,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 360,
        alignSelf: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 330,
          height: 330,
          borderRadius: '50%',
          background: 'radial-gradient(circle,var(--glow),transparent 68%)',
          filter: 'blur(8px)',
        }}
      />
      <div style={{ ...ringBase, border: '1px solid var(--border2)', animation: 'spin 40s linear infinite' }} />
      <div
        style={{
          ...ringBase,
          border: '2px solid transparent',
          borderTopColor: 'var(--gold)',
          animation: 'spin 13s linear infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 244,
          height: 244,
          borderRadius: '50%',
          border: '1px dashed var(--gold)',
          opacity: 0.55,
          animation: 'spin 30s linear infinite reverse',
        }}
      />
      <div
        style={{
          position: 'relative',
          width: 152,
          height: 152,
          borderRadius: '50%',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 56px var(--shadow)',
        }}
      >
        <span style={{ fontFamily: serif, fontSize: 50, lineHeight: 1, color: 'var(--gold)' }}>SC</span>
        <span style={{ fontFamily: mono, fontSize: 9, letterSpacing: '.2em', color: 'var(--muted)', marginTop: 5 }}>
          CS · DEV
        </span>
      </div>
      <div style={{ ...floatTag, top: 4, right: -4, animation: 'floaty 6s ease-in-out infinite' }}>// web</div>
      <div style={{ ...floatTag, bottom: 24, left: -10, animation: 'floaty 7.5s ease-in-out infinite 1s' }}>// genai</div>
      <div style={{ ...floatTag, bottom: -4, right: 34, animation: 'floaty 8.5s ease-in-out infinite .5s' }}>// data</div>
    </div>
  )
}

function Stats() {
  return (
    <div
      data-reveal
      style={{
        marginTop: 'clamp(44px,7vw,84px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
        gap: 1,
        background: 'var(--border)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        overflow: 'hidden',
      }}
    >
      {stats.map((s) => (
        <div key={s.label} style={{ background: 'var(--bg)', padding: '26px 24px' }}>
          <div style={{ fontFamily: mono, fontSize: 'clamp(28px,4vw,40px)', fontWeight: 600, color: 'var(--gold)' }}>
            {s.count == null ? (
              <span>{s.display}</span>
            ) : (
              <span data-count={s.count} data-suffix={s.suffix}>
                {s.display}
              </span>
            )}
          </div>
          <div style={{ marginTop: 8, fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{s.label}</div>
          <div style={{ marginTop: 2, fontFamily: mono, fontSize: 11, color: 'var(--faint)' }}>{s.note}</div>
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
        padding: 'clamp(48px,9vw,104px) clamp(20px,5vw,56px) clamp(36px,6vw,72px)',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,6vw,72px)', alignItems: 'center' }}>
        <div style={{ flex: '1 1 440px', minWidth: 300 }}>
          <div
            data-reveal
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              border: '1px solid var(--border)',
              borderRadius: 30,
              padding: '7px 14px',
              marginBottom: 26,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#46C99A',
                boxShadow: '0 0 8px #46C99A',
                animation: 'blink 2.4s ease-in-out infinite',
              }}
            />
            <span
              style={{
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              Available · Full-time roles
            </span>
          </div>
          <h1
            data-reveal
            style={{
              margin: 0,
              fontFamily: serif,
              fontWeight: 500,
              fontSize: 'clamp(46px,9vw,92px)',
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}
          >
            Sayantan
            <br />
            Choudhury<span style={{ color: 'var(--gold)' }}>.</span>
          </h1>
          <p
            data-reveal
            style={{
              margin: '22px 0 0',
              fontFamily: mono,
              fontSize: 'clamp(13px,1.6vw,15px)',
              letterSpacing: '.04em',
              color: 'var(--gold)',
            }}
          >
            Full-Stack Developer · GenAI · Data Engineering
          </p>
          <p
            data-reveal
            style={{
              margin: '20px 0 0',
              maxWidth: 520,
              fontSize: 'clamp(15px,1.8vw,18px)',
              lineHeight: 1.65,
              color: 'var(--muted)',
            }}
          >
            I build modern web apps, data pipelines and AI-powered tools — from computer-vision systems to
            change-data-capture pipelines. Currently finishing my CS degree and looking for my next challenge.
          </p>
          <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 13, marginTop: 32 }}>
            <a href="#work" data-cursor className="btn-primary">
              View work →
            </a>
            <a href="#contact" data-cursor className="btn-secondary">
              Get in touch
            </a>
          </div>
          <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 26 }}>
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
        </div>

        <Avatar />
      </div>

      <Stats />
    </header>
  )
}
