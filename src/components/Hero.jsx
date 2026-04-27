import React, { useEffect, useState } from 'react'

const TAGLINE_PHRASES = [
  'Frontend Developer',
  'AI-Native Builder',
  'Problem Solver',
  'Digital Craftsman',
]

function TypewriterText({ phrases }) {
  const [current, setCurrent] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => setPaused(false), 1500)
      return () => clearTimeout(t)
    }

    const phrase = phrases[current]

    if (!deleting && displayed === phrase) {
      setPaused(true)
      setTimeout(() => setDeleting(true), 1500)
      return
    }

    if (deleting && displayed === '') {
      setDeleting(false)
      setCurrent((c) => (c + 1) % phrases.length)
      return
    }

    const speed = deleting ? 50 : 90
    const t = setTimeout(() => {
      setDisplayed(deleting ? displayed.slice(0, -1) : phrase.slice(0, displayed.length + 1))
    }, speed)

    return () => clearTimeout(t)
  }, [displayed, deleting, paused, current, phrases])

  return (
    <span className="text-amber-glow">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg scanline"
    >
      {/* Ambient glow orbs */}
      <div
        className="glow-orb w-[600px] h-[600px] top-[-100px] left-[-200px]"
        style={{ background: 'rgba(251,191,36,0.04)' }}
      />
      <div
        className="glow-orb w-[400px] h-[400px] bottom-[-50px] right-[-100px]"
        style={{ background: 'rgba(251,191,36,0.03)' }}
      />

      {/* Corner decorations */}
      <div className="absolute top-20 left-6 md:left-12 lg:left-24 w-16 h-16 border-l border-t border-[var(--border)] opacity-60" />
      <div className="absolute bottom-12 right-6 md:right-12 lg:right-24 w-16 h-16 border-r border-b border-[var(--border)] opacity-60" />

      {/* Vertical side label */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[var(--amber)]" />
        <span className="terminal-label" style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
          v1.0.0 // 2025
        </span>
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-[var(--amber)]" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full pt-24">

        {/* Status bar */}
        <div
          className={`flex items-center gap-3 mb-12 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="status-dot" />
          <span className="terminal-label">Available for new projects</span>
          <div className="flex-1 max-w-24 h-px bg-gradient-to-r from-[var(--amber)] to-transparent opacity-40" />
        </div>

        {/* Name */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.25s' }}
        >
          <p className="terminal-label mb-3">// Frontend Developer</p>
          <h1 className="font-display font-bold leading-none tracking-tight mb-2">
            <span className="block text-6xl md:text-8xl lg:text-[9rem] text-[var(--text-primary)]">
              Hannes
            </span>
            <span className="block text-6xl md:text-8xl lg:text-[9rem] text-[var(--text-primary)]">
              Birker
            </span>
          </h1>
        </div>

        {/* Title badge */}
        <div
          className={`mt-4 mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="inline-flex items-center gap-3 border border-[var(--border)] px-4 py-2 bg-[var(--amber-dim)]">
            <span className="text-[var(--amber)] font-mono text-xs tracking-widest uppercase">THE</span>
            <div className="w-px h-4 bg-[var(--border)]" />
            <span className="text-white font-display font-semibold text-lg tracking-wide">Problem Solver</span>
          </div>
        </div>

        {/* Typewriter */}
        <div
          className={`mb-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.55s' }}
        >
          <p className="font-mono text-xl md:text-2xl text-[var(--text-dim)]">
            <span className="text-[var(--text-muted)]">→ </span>
            <TypewriterText phrases={TAGLINE_PHRASES} />
          </p>
        </div>

        {/* Core message */}
        <div
          className={`mb-12 max-w-xl transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.7s' }}
        >
          <p className="text-[var(--text-dim)] text-lg font-light leading-relaxed border-l-2 border-[var(--amber)] pl-5">
            "Never give up. There is always a way."
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap items-center gap-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.85s' }}
        >
          <a href="#projects" className="btn-amber btn-amber-filled">
            View Projects
          </a>
          <a href="#about" className="btn-amber">
            My Story
          </a>
        </div>

        {/* Metrics bar */}
        <div
          className={`mt-20 pt-8 border-t border-[var(--border-subtle)] flex flex-wrap gap-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '1s' }}
        >
          {[
            { value: '5+', label: 'Projects Shipped' },
            { value: '100%', label: 'Problem Solving Rate' },
            { value: 'AI', label: 'Native Workflow' },
            { value: '∞', label: 'Resilience' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-mono text-2xl font-semibold text-amber-glow">{stat.value}</span>
              <span className="terminal-label text-[var(--text-muted)]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="terminal-label">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--amber)] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
