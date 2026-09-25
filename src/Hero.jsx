import { useEffect, useRef } from 'react'
import { HERO, PROFILE } from './config'
import Placeholder from './Placeholder'

const MESSAGES = {
  left: ['$ kubectl get visitors -n left'],
  right: ['Something scaling on the right?'],
  center: ["Hey, it's you!", 'Deployment successful: hello', 'Scroll to see the infra']
}

const useFrames = HERO.totalFrames > 0
const frameUrl = (i) =>
  `${import.meta.env.BASE_URL}${HERO.folder}${HERO.prefix}${String(i).padStart(HERO.pad, '0')}${HERO.ext}`

// Plays frame ranges on a canvas with requestAnimationFrame. No React state involved.
function createFramePlayer(canvas) {
  const ctx = canvas.getContext('2d')
  const imgs = []
  for (let i = 1; i <= HERO.totalFrames; i++) {
    const img = new Image()
    img.decoding = 'async'
    img.src = frameUrl(i)
    imgs[i] = img
  }
  const { ranges, fps } = HERO
  let current = 'working'
  let seq = { from: ranges.working[0], to: ranges.working[1], pingpong: true }
  // snapshot of the previous frame, faded out over a few frames on every state change
  const fade = document.createElement('canvas')
  const fctx = fade.getContext('2d')
  let fadeLeft = 0
  const FADE_FRAMES = 6
  let frame = seq.from
  let last = 0
  let raf

  const draw = (i) => {
    const img = imgs[i]
    if (!img || !img.complete || !img.naturalWidth) return
    if (canvas.width !== img.naturalWidth) {
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
    }
    ctx.globalAlpha = 1
    ctx.drawImage(img, 0, 0)
    if (fadeLeft > 0) {
      ctx.globalAlpha = fadeLeft / FADE_FRAMES
      ctx.drawImage(fade, 0, 0)
      ctx.globalAlpha = 1
      fadeLeft--
    }
  }

  const snapshot = () => {
    if (!canvas.width) return
    fade.width = canvas.width
    fade.height = canvas.height
    fctx.drawImage(canvas, 0, 0)
    fadeLeft = FADE_FRAMES
  }

  const tick = (t) => {
    if (t - last >= 1000 / fps) {
      last = t
      draw(frame)
      if (frame !== seq.to) frame += seq.to > frame ? 1 : -1
      else if (seq.pingpong) {
        seq = { from: seq.to, to: seq.from, pingpong: true }
        frame += seq.to > frame ? 1 : -1
      }
      else if (seq.then === 'working') {
        snapshot()
        current = 'working'
        seq = { from: ranges.working[0], to: ranges.working[1], pingpong: true }
        frame = seq.from
      }
    }
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)

  return {
    play(state) {
      if (state === 'working') {
        // rewind the side glance back to its first frame, then resume the work loop
        if (current === 'left' || current === 'right') {
          seq = { from: frame, to: ranges[current][0], then: 'working' }
        } else {
          snapshot()
          seq = { from: ranges.working[0], to: ranges.working[1], pingpong: true }
          frame = seq.from
          current = 'working'
        }
        return
      }
      snapshot()
      const r = ranges[state]
      seq = { from: r[0], to: r[1] } // plays once and holds on the last frame
      frame = r[0]
      current = state
    },
    stop() { cancelAnimationFrame(raf) }
  }
}

export default function Hero() {
  const heroRef = useRef(null)
  const stageRef = useRef(null)
  const canvasRef = useRef(null)
  const msgRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const stage = stageRef.current
    const msg = msgRef.current
    const player = useFrames ? createFramePlayer(canvasRef.current) : null
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let state = 'working'
    let zone = null
    let timers = []
    const clear = () => { timers.forEach(clearTimeout); timers = [] }
    const later = (fn, ms) => timers.push(setTimeout(fn, ms))

    const hideMsg = () => msg.classList.remove('show')
    const say = (lines, side) => {
      msg.dataset.side = side
      lines.forEach((line, i) => {
        later(() => {
          hideMsg()
          later(() => { msg.textContent = line; msg.classList.add('show') }, 160)
        }, i * 1700)
      })
    }

    const setState = (s) => {
      state = s
      stage.dataset.state = s
      delete stage.dataset.phase
      player?.play(s)
    }

    const greet = () => {
      setState('greeting')
      say(MESSAGES.center, 'center')
      if (!useFrames) {
        const phases = [['look', 0], ['headset', 500], ['wave', 1300], ['point', 3600]]
        phases.forEach(([p, ms]) => later(() => { stage.dataset.phase = p }, reduced ? 0 : ms))
      }
    }

    const react = (next) => {
      if (next === zone) return
      zone = next
      clear()
      if (next === 'center') {
        if (state !== 'greeting') greet()
        else say(MESSAGES.center.slice(-1), 'center')
        return
      }
      setState(next)
      say(MESSAGES[next], next)
      later(() => { setState('working'); hideMsg() }, HERO.holdMs)
    }

    const isTouch = window.matchMedia('(max-width: 767px), (hover: none)').matches
    let onMove, onLeave
    if (isTouch) {
      // Mobile: skip the side zones and just play the greeting once
      later(() => react('center'), 900)
    } else {
      let pendingX = null
      let raf = 0
      onMove = (e) => {
        pendingX = e.clientX
        if (raf) return
        raf = requestAnimationFrame(() => {
          raf = 0
          const rect = hero.getBoundingClientRect()
          const x = (pendingX - rect.left) / rect.width
          react(x < 1 / 3 ? 'left' : x > 2 / 3 ? 'right' : 'center')
        })
      }
      onLeave = () => { zone = null }
      hero.addEventListener('pointermove', onMove)
      hero.addEventListener('pointerleave', onLeave)
    }

    return () => {
      clear()
      player?.stop()
      if (onMove) {
        hero.removeEventListener('pointermove', onMove)
        hero.removeEventListener('pointerleave', onLeave)
      }
    }
  }, [])

  return (
    <header className="hero" ref={heroRef}>
      <nav className="nav">
        <a className="brand" href="#top">kalyan.reddy</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="intro">
        <h1>{PROFILE.name}</h1>
        <p className="role">{PROFILE.role}</p>
        <p className="hint">
          <span className="cursor-dot" aria-hidden="true" />
          Move your cursor to page me
        </p>
      </div>

      <div className={`stage${useFrames ? ' has-frames' : ''}`} ref={stageRef} data-state="working">
        <div className="glow" aria-hidden="true" />
        {useFrames
          ? <canvas ref={canvasRef} className="frames" aria-label="Animated portrait of Kalyan at his laptop" />
          : <Placeholder />}
        <p className="msg" ref={msgRef} aria-live="polite" />
      </div>

      <a className="scroll-cue" href="#about">
        See the infra
        <span className="chev" aria-hidden="true" />
      </a>
    </header>
  )
}
