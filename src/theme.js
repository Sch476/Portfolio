// Color math + theme variable builder.
// Ported from the Portfolio design so the dark/light themes (and any accent)
// derive their palette from a single accent colour.

const hexToRgb = (h) => {
  h = String(h).replace('#', '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  const n = parseInt(h, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

const toHex = (r, g, b) => {
  const c = (v) => ('0' + Math.max(0, Math.min(255, Math.round(v))).toString(16)).slice(-2)
  return '#' + c(r) + c(g) + c(b)
}

const mix = (hex, t, a) => {
  const x = hexToRgb(hex)
  const y = hexToRgb(t)
  return toHex(x[0] + (y[0] - x[0]) * a, x[1] + (y[1] - x[1]) * a, x[2] + (y[2] - x[2]) * a)
}

const lighten = (h, a) => mix(h, '#ffffff', a)
const darken = (h, a) => mix(h, '#000000', a)

const hexA = (h, a) => {
  const c = hexToRgb(h)
  return `rgba(${c[0]},${c[1]},${c[2]},${a})`
}

const lum = (h) =>
  hexToRgb(h)
    .map((v) => {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    .reduce((acc, c, i) => acc + [0.2126, 0.7152, 0.0722][i] * c, 0)

const onColor = (h) => (lum(h) > 0.45 ? '#0A0E1A' : '#FFF8EC')

export const DEFAULT_ACCENT = '#CBA45A'

export function buildVars(theme, acc = DEFAULT_ACCENT) {
  if (theme === 'dark') {
    return {
      '--bg': '#0A0E1A',
      '--bg2': '#0E1426',
      '--surface': '#111A2C',
      '--surface2': '#16213A',
      '--border': 'rgba(236,234,221,0.10)',
      '--border2': 'rgba(236,234,221,0.20)',
      '--text': '#ECEAE3',
      '--muted': '#9097A8',
      '--faint': '#5A6377',
      '--gold': lighten(acc, 0.04),
      '--gold-bright': lighten(acc, 0.24),
      '--accent': acc,
      '--on-accent': onColor(acc),
      '--shadow': 'rgba(0,0,0,0.55)',
      '--glow': hexA(acc, 0.16),
      '--nav': 'rgba(10,14,26,0.72)',
    }
  }
  return {
    '--bg': '#F2F0E9',
    '--bg2': '#FAF8F2',
    '--surface': '#FFFFFF',
    '--surface2': '#F7F4EC',
    '--border': 'rgba(20,24,31,0.12)',
    '--border2': 'rgba(20,24,31,0.22)',
    '--text': '#15181F',
    '--muted': '#5A6373',
    '--faint': '#8C95A3',
    '--gold': darken(acc, 0.34),
    '--gold-bright': darken(acc, 0.18),
    '--accent': darken(acc, 0.1),
    '--on-accent': '#FFF8EC',
    '--shadow': 'rgba(20,24,31,0.14)',
    '--glow': hexA(acc, 0.12),
    '--nav': 'rgba(242,240,233,0.78)',
  }
}
