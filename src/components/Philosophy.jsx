import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const PRINCIPLES = [
  {
    number: '01',
    title: 'Problems are invitations',
    text: 'Every obstacle is the problem presenting itself for a solution. The moment you see it as an invitation instead of a wall, you\'ve already won half the battle.',
  },
  {
    number: '02',
    title: 'Momentum over perfection',
    text: 'A shipped imperfect product beats a perfect one that never shipped. Move, adjust, improve. Paralysis is the only real failure mode.',
  },
  {
    number: '03',
    title: 'Resilience is a skill',
    text: 'Not everyone is born tough. But everyone can train to be. I chose to train — through necessity, through pressure, through choosing to keep going when stopping was easier.',
  },
  {
    number: '04',
    title: 'Technology as leverage',
    text: 'Code, AI, automation — these aren\'t just tools. They\'re force multipliers. One developer with the right mindset and the right tools can build what once took a team.',
  },
]

export default function Philosophy() {
  const headerRef = useScrollReveal()
  const quoteRef = useScrollReveal()
  const closingRef = useScrollReveal()

  return (
    <section id="philosophy" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background grid emphasis */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* Glow */}
      <div
        className="glow-orb w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'rgba(251,191,36,0.02)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">

        {/* Center hero quote */}
        <div ref={quoteRef} className="reveal text-center mb-20 md:mb-28">
          <p className="terminal-label mb-6 justify-center flex items-center gap-2">
            <span className="accent-line" />
            04 // Philosophy
            <span className="accent-line scale-x-[-1]" />
          </p>

          <div className="relative inline-block">
            <span className="absolute -top-6 -left-4 text-6xl font-display text-[var(--amber)] opacity-20 leading-none">"</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-[var(--text-primary)] leading-tight max-w-4xl mx-auto">
              Never give up.
              <br />
              <span className="text-amber-glow">There is always</span>
              <br />
              a way.
            </h2>
            <span className="absolute -bottom-6 -right-4 text-6xl font-display text-[var(--amber)] opacity-20 leading-none">"</span>
          </div>

          <p className="mt-10 text-[var(--text-muted)] font-light text-lg max-w-2xl mx-auto leading-relaxed">
            This is not borrowed wisdom. These words were forged at rock bottom,
            when quitting would have been the rational choice. I chose not to — and I haven't stopped since.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PRINCIPLES.map((p, i) => (
            <PrincipleCard key={p.number} p={p} delay={i} />
          ))}
        </div>

        {/* Closing line */}
        <div ref={closingRef} className="reveal mt-16 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--amber)] opacity-20" />
          <p className="terminal-label text-center">
            Built by a problem solver, for problems worth solving
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--amber)] opacity-20" />
        </div>

      </div>
    </section>
  )
}

/* ✅ Extracted component (fixes hook-in-loop issue) */
function PrincipleCard({ p, delay }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal card-fintech p-7 group"
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="flex items-start gap-5">
        <span className="font-mono text-4xl font-bold text-[var(--amber)] opacity-20 group-hover:opacity-40 transition-opacity leading-none shrink-0">
          {p.number}
        </span>
        <div>
          <h3 className="font-display font-semibold text-lg text-[var(--text-primary)] mb-3 group-hover:text-[var(--amber)] transition-colors duration-300">
            {p.title}
          </h3>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed font-light">
            {p.text}
          </p>
        </div>
      </div>
    </div>
  )
}