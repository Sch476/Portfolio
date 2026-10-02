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

export const DEFAULT_ACCENT = '#A9A5D6'

export function buildVars(theme, acc = DEFAULT_ACCENT) {
  if (theme === 'dark') {
    return {
      '--bg': '#07070B',
      '--bg2': '#0C0C12',
      '--surface': 'rgba(255,255,255,0.025)',
      '--surface2': 'rgba(255,255,255,0.04)',
      '--border': 'rgba(255,255,255,0.07)',
      '--border2': 'rgba(255,255,255,0.14)',
      '--text': '#EDEDF2',
      '--muted': '#8D8D9B',
      '--faint': '#55556A',
      '--gold': acc,
      '--gold-bright': lighten(acc, 0.35),
      '--accent': '#EDEDF2',
      '--on-accent': '#07070B',
      '--shadow': 'rgba(0,0,0,0.5)',
      '--glow': hexA(acc, 0.1),
      '--nav': 'rgba(22,22,30,0.55)',
      '--grid': 'rgba(255,255,255,0.035)',
      '--beam': 'rgba(255,255,255,0.07)',
    }
  }
  return {
    '--bg': '#F5F5F7',
    '--bg2': '#EEEEF2',
    '--surface': 'rgba(255,255,255,0.7)',
    '--surface2': '#FFFFFF',
    '--border': 'rgba(14,14,20,0.08)',
    '--border2': 'rgba(14,14,20,0.16)',
    '--text': '#0E0E14',
    '--muted': '#5E5E6E',
    '--faint': '#9A9AAA',
    '--gold': darken(acc, 0.42),
    '--gold-bright': darken(acc, 0.25),
    '--accent': '#0E0E14',
    '--on-accent': '#F5F5F7',
    '--shadow': 'rgba(14,14,20,0.08)',
    '--glow': hexA(acc, 0.14),
    '--nav': 'rgba(255,255,255,0.6)',
    '--grid': 'rgba(14,14,20,0.045)',
    '--beam': 'rgba(169,165,214,0.18)',
  }
}
