import { useEffect, useRef } from 'react'

const COLS = 21
const ROWS = 14

const RUN_TOP = [
  '........#........#...',
  '.#......##......##...',
  '.#......#p######p#...',
  '..#....############..',
  '..###..##oo#####o##..',
  '..####.##oo##p##o##..',
  '..####.#pp#o#o#o#p#..',
  '..####..####o#o###...',
  '..###############....',
  '..##############.....',
  '...############......',
]
const RUN_LEGS = {
  a: ['...##.##.##...##.....', '...##....##..........', '...##....###.........'],
  b: ['...##.##.##...##.....', '...##.##.##...##.....', '...##.##.###..###....'],
  c: ['...##.##.##...##.....', '......##......##.....', '......##......###....'],
}

const FRONT_HEAD = [
  '.#...........#.',
  '.##.........##.',
  '.#p#########p#.',
  '.#############.',
  '###oo#####oo###',
  '###oo##p##oo###',
  '.pp##o#o#o##pp.',
  '..####o#o####..',
  '...#########...',
]
const FRONT_HEAD_BLINK = FRONT_HEAD.map((row, y) => (y === 4 ? row.replace(/o/g, '#') : row))
const FRONT_HEAD_HAPPY = [
  ...FRONT_HEAD.slice(0, 4),
  '####o#####o####',
  '###o#o#p#o#o###',
  ...FRONT_HEAD.slice(6),
]
const SIT_BODY = [
  '...#########..#',
  '..###########.#',
  '..###########.#',
  '..#############',
  '...###...###...',
]
const pad = (rows) => rows.map((r) => `...${r}...`)
const PAW_UP = [
  ...pad(FRONT_HEAD.slice(0, 6)),
  '##.' + FRONT_HEAD[6] + '...',
  '##.' + FRONT_HEAD[7] + '...',
  '.##' + FRONT_HEAD[8] + '...',
  '..####' + SIT_BODY[0].slice(3) + '...',
  ...pad(SIT_BODY.slice(1, 4)),
  ...pad(['.........###...']),
]
const PAW_DOWN = [
  ...pad(FRONT_HEAD_HAPPY),
  ...pad(SIT_BODY.slice(0, 3)),
  ...pad(['.##############', '.###.....###...']),
  '...####..............',
  '...####..............',
]

const run = (legs) => [[...RUN_TOP, ...RUN_LEGS[legs]], 0, 0]
const front = (head, body) => [[...head, ...body], 3, 0]
const FRAMES = {
  runA: run('a'),
  runB: run('b'),
  runC: run('c'),
  sit: front(FRONT_HEAD, SIT_BODY),
  blink: front(FRONT_HEAD_BLINK, SIT_BODY),
  pawUp: [PAW_UP, 0, 0],
  pawDown: [PAW_DOWN, 0, 0],
}
const RUN_CYCLE = ['runA', 'runB', 'runC', 'runB']

const PX = 2
const W = COLS * PX
const H = ROWS * PX

const toPath = (rows, ch, ox = 0, oy = 0) =>
  rows
    .flatMap((row, y) => [...row].map((c, x) => (c === ch ? `M${x + ox} ${y + oy}h1v1h-1z` : '')))
    .join('')

const REACTION_MS = 90
const MAX_SPEED = 1200
const CATCH_UP = 11
const STRIDE = 8
const IDLE_MS = 120
const BLINK_EVERY_MS = 3200
const BLINK_FOR_MS = 140
const TAP_STEPS = [
  [0, 'pawUp'],
  [120, 'pawDown'],
  [250, 'pawUp'],
  [360, 'pawDown'],
  [500, 'pawUp'],
]
const TAP_HITS = TAP_STEPS.filter(([, f]) => f === 'pawDown').map(([t]) => t)
const TAP_MS = 620
const TAP_SHIFT = (COLS / 2 - 5) * PX
const MAX_TILT = 10

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

const tapFxSvg =
  '<svg width="28" height="28" viewBox="-14 -14 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' +
  '<circle class="ring" r="5"/>' +
  '<path class="ticks" d="M0 -8v-4M0 8v4M-8 0h-4M8 0h4M5.7 -5.7l2.8 -2.8M-5.7 -5.7l-2.8 -2.8"/></svg>'

export default function CatCursor() {
  const posRef = useRef(null)
  const bodyRef = useRef(null)
  const dotRef = useRef(null)
  const frameRefs = useRef({})

  useEffect(() => {
    const pos = posRef.current
    const body = bodyRef.current
    const dot = dotRef.current
    if (!pos || !body || !dot) return

    document.documentElement.classList.add('has-cat-cursor')

    let cx = window.innerWidth / 2
    let cy = window.innerHeight / 2
    let tx = cx
    let ty = cy
    const trail = []
    let travelled = 0
    let facing = 1
    let tilt = 0
    let lastMove = 0
    let tapStart = -Infinity
    let tapX = 0
    let tapY = 0
    let shift = 0
    let hitTimers = []
    let lastT = 0
    let shown = ''
    let raf

    const show = (name) => {
      if (name === shown) return
      if (shown) frameRefs.current[shown].style.display = 'none'
      frameRefs.current[name].style.display = 'inline'
      shown = name
    }

    const move = (e) => {
      trail.push({ t: performance.now(), x: e.clientX, y: e.clientY })
      pos.style.opacity = '1'
      dot.style.opacity = '1'
      dot.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`
    }

    const tapFx = (x, y) => {
      const fx = document.createElement('span')
      fx.className = 'cat-tap-fx'
      fx.innerHTML = tapFxSvg
      fx.style.left = `${x}px`
      fx.style.top = `${y}px`
      fx.addEventListener('animationend', () => fx.remove())
      pos.parentNode.appendChild(fx)
    }
    const tap = (e) => {
      tapStart = performance.now()
      tapX = e.clientX
      tapY = e.clientY
      const target = e.target.closest && e.target.closest('a,button,input,textarea,[data-cursor]')
      hitTimers.forEach(clearTimeout)
      hitTimers = TAP_HITS.map((t) =>
        setTimeout(() => {
          tapFx(tapX, tapY)
          if (target) {
            target.classList.remove('cat-booped')
            void target.offsetWidth
            target.classList.add('cat-booped')
          }
        }, t)
      )
    }

    const isInteractive = (e) =>
      e.target.closest && e.target.closest('a,button,input,textarea,[data-cursor]')
    const over = (e) => {
      if (isInteractive(e)) dot.classList.add('is-hover')
    }
    const out = (e) => {
      if (isInteractive(e)) dot.classList.remove('is-hover')
    }
    const leave = () => {
      pos.style.opacity = '0'
      dot.style.opacity = '0'
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', tap)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    document.documentElement.addEventListener('mouseleave', leave)

    const loop = (now) => {
      const dt = Math.min(0.05, lastT ? (now - lastT) / 1000 : 0.016)
      lastT = now

      while (trail.length && trail[0].t <= now - REACTION_MS) {
        const s = trail.shift()
        tx = s.x
        ty = s.y
      }
      const tapT = now - tapStart
      const tapping = tapT < TAP_MS

      const dx = (tapping ? tapX : tx) - cx
      const dy = (tapping ? tapY : ty) - cy
      const dist = Math.hypot(dx, dy)
      const step = tapping ? dist * 0.35 : Math.min(dist, MAX_SPEED * dt, dist * CATCH_UP * dt + 0.5)
      const vx = dist ? (dx / dist) * step : 0
      const vy = dist ? (dy / dist) * step : 0
      cx += vx
      cy += vy
      const running = !tapping && step > 0.6

      if (running) {
        lastMove = now
        travelled += step
        if (Math.abs(vx) > 0.2) facing = vx > 0 ? 1 : -1
      }

      if (tapping) {
        lastMove = now
        show(TAP_STEPS.findLast(([t]) => tapT >= t)[1])
      } else if (running) {
        show(RUN_CYCLE[Math.floor(travelled / STRIDE) % RUN_CYCLE.length])
      } else if (now - lastMove > IDLE_MS) {
        const sat = now - lastMove - IDLE_MS
        show(sat % BLINK_EVERY_MS > BLINK_EVERY_MS - BLINK_FOR_MS ? 'blink' : 'sit')
      }

      const slope = running && shown.startsWith('run') ? (Math.atan2(vy, Math.abs(vx)) * 180) / Math.PI : 0
      tilt += (clamp(slope, -MAX_TILT, MAX_TILT) * facing - tilt) * 0.2

      shift += ((tapping ? TAP_SHIFT * facing : 0) - shift) * 0.35

      pos.style.transform = `translate(${cx - W / 2 + shift}px,${cy - H - 4}px)`
      body.style.transform = `rotate(${tilt}deg) scaleX(${facing})`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove('has-cat-cursor')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', tap)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.documentElement.removeEventListener('mouseleave', leave)
      cancelAnimationFrame(raf)
      hitTimers.forEach(clearTimeout)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={posRef} className="cat-cursor" style={{ width: W, height: H }} aria-hidden="true">
        <svg
          ref={bodyRef}
          className="cat-body"
          width={W}
          height={H}
          viewBox={`0 0 ${COLS} ${ROWS}`}
          shapeRendering="crispEdges"
        >
          {Object.entries(FRAMES).map(([name, [rows, ox, oy]]) => (
            <g key={name} ref={(el) => (frameRefs.current[name] = el)} style={{ display: 'none' }}>
              <path d={toPath(rows, '#', ox, oy)} fill="var(--text)" />
              <path d={toPath(rows, 'o', ox, oy)} fill="var(--bg)" />
              <path d={toPath(rows, 'p', ox, oy)} fill="#F4A6B8" />
            </g>
          ))}
        </svg>
      </div>
    </>
  )
}
