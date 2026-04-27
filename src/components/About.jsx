import React from 'react'
import SectionWrapper from './SectionWrapper'
import { useScrollReveal } from '../hooks/useScrollReveal'

const TIMELINE = [
  {
    year: '2018–2020',
    label: 'The Origin',
    title: 'Gaming, PCs & Curiosity',
    text: 'It started with video games. Not just playing — understanding. I wanted to know how systems worked, why hardware mattered, how things connected. PCs became my first obsession. Disassembling, upgrading, figuring things out. That curiosity never left me.',
    icon: '⌨',
  },
  {
    year: '2020–2021',
    label: 'The Drift',
    title: 'Searching for Direction',
    text: "I took paths that seemed logical but never felt right. Life moved fast. I worked hard. But there was always something missing — a craft I could own completely, something I could build with my own hands and mind. I hadn't found it yet.",
    icon: '◈',
  },
  {
    year: '2022',
    label: 'Rock Bottom',
    title: 'The Breaking Point',
    text: 'Almost financial collapse. The kind of pressure that strips everything away and leaves only truth. I had to face who I was and who I wanted to become. It was the hardest chapter. But it was also the most honest.',
    icon: '⬡',
    highlight: true,
  },
  {
    year: '2023–2024',
    label: 'The Spark',
    title: 'Code Changed Everything',
    text: 'I wrote my first lines of code and something clicked. Not metaphorically — literally. The logic, the problem-solving, the instant feedback loop. Here was a discipline where resilience, curiosity, and systems thinking all converged. I had found my craft.',
    icon: '◉',
  },
  {
    year: '2025+',
    label: 'The Build',
    title: 'Becoming The Problem Solver',
    text: "Now I build. Every day. Frontend development, AI-native tools, digital products. I'm not just writing code — I'm applying every lesson from every setback into creating things that matter. The journey made the builder.",
    icon: '▲',
    amber: true,
  },
]

function TimelineItem({ item, index }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="reveal flex gap-6 md:gap-10"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Left: timeline line */}
      <div className="flex flex-col items-center gap-0 shrink-0">
        <div
          className={`w-8 h-8 flex items-center justify-center border text-sm
            ${item.amber
              ? 'border-[var(--amber)] bg-[var(--amber-dim)] text-[var(--amber)]'
              : item.highlight
              ? 'border-red-500/30 bg-red-500/10 text-red-400'
              : 'border-[var(--border-subtle)] bg-[rgba(10,22,40,0.5)] text-[var(--text-muted)]'
            }`}
        >
          {item.icon}
        </div>
        <div className="w-px flex-1 bg-[var(--border-subtle)] mt-2" />
      </div>

      {/* Right: content */}
      <div className="pb-12">
        <div className="flex items-center gap-3 mb-1">
          <span className="terminal-label">{item.year}</span>
          <span className="terminal-label text-[var(--text-muted)] opacity-50">// {item.label}</span>
        </div>
        <h3
          className={`font-display font-semibold text-xl mb-3 ${
            item.amber ? 'text-[var(--amber)]' : 'text-[var(--text-primary)]'
          }`}
        >
          {item.title}
        </h3>
        <p className="text-[var(--text-dim)] leading-relaxed max-w-lg font-light">{item.text}</p>
      </div>
    </div>
  )
}

export default function About() {
  const headerRef = useScrollReveal()
  const quoteRef = useScrollReveal()

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div
        className="glow-orb w-[500px] h-[500px] top-1/2 right-[-200px] -translate-y-1/2"
        style={{ background: 'rgba(251,191,36,0.025)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <div ref={headerRef} className="reveal mb-16 md:mb-20">
          <p className="terminal-label mb-4">
            <span className="accent-line" />
            01 // About
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
            A Story of{' '}
            <span className="text-amber-glow">Resilience</span>
          </h2>
          <p className="text-[var(--text-dim)] text-lg max-w-2xl font-light leading-relaxed">
            Every line of code I write carries the weight of a journey — from near financial ruin
            to finding purpose in building digital products. This is not a conventional developer origin story.
          </p>
        </div>

        {/* Two-column layout: Timeline + Quote card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Timeline */}
          <div className="lg:col-span-2">
            {TIMELINE.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>

          {/* Sticky quote panel */}
          <div className="lg:col-span-1">
            <div ref={quoteRef} className="reveal lg:sticky lg:top-28 space-y-5">
              {/* Quote card */}
              <div className="card-fintech p-7 border-l-2 border-l-[var(--amber)]">
                <p className="terminal-label mb-4">// Core belief</p>
                <blockquote className="font-display text-xl font-semibold text-[var(--text-primary)] leading-snug mb-4">
                  "Never give up. There is always a way."
                </blockquote>
                <p className="text-[var(--text-muted)] text-sm font-light">
                  This isn't a motivational poster. It's a lived philosophy — forged in the hardest moments
                  and proven in the quietest ones.
                </p>
              </div>

              {/* Profile stats */}
              <div className="card-fintech p-6">
                <p className="terminal-label mb-5">// Developer Profile</p>
                <div className="space-y-4">
                  {[
                    { label: 'Focus', value: 'Frontend / React' },
                    { label: 'Approach', value: 'AI-Native' },
                    { label: 'Location', value: 'Düsseldorf 🇩🇪' },
                    { label: 'Status', value: 'Open to Work' },
                    { label: 'Mindset', value: 'Never Give Up' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-[var(--text-muted)] text-sm">{item.label}</span>
                      <span
                        className={`font-mono text-sm ${
                          item.label === 'Status' ? 'text-green-400' : 'text-[var(--text-dim)]'
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Human note */}
              <div className="card-fintech p-6 border border-[rgba(251,191,36,0.08)]">
                <p className="terminal-label mb-3">// Human note</p>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed font-light">
                  I came from gaming and PCs — which means I think in systems, I troubleshoot instinctively,
                  and I never blame the tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
