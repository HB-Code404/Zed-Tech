import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'info@zed-tech.de',
    href: 'mailto:info@zed-tech.de',
    icon: '✉',
    note: 'Preferred channel',
  },
  {
    label: 'GitHub',
    value: 'github.com/HB-Code404',
    href: 'https://github.com/HB-Code404',
    icon: '◈',
    note: 'Code & projects',
  },
  {
    label: 'LinkedIn',
    value: 'comming soon',
    href: 'comming soon',
    icon: '⬡',
    note: 'Professional network',
  },
]

export default function Contact() {
  const headerRef = useScrollReveal()
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('hannes@birker.dev').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="glow-orb w-[600px] h-[600px] bottom-[-200px] left-1/2 -translate-x-1/2"
        style={{ background: 'rgba(251,191,36,0.03)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16 md:mb-20 text-center max-w-2xl mx-auto">
          <p className="terminal-label mb-4 justify-center flex items-center gap-2">
            <span className="accent-line" />
            05 // Contact
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
            Let's Solve <span className="text-amber-glow">Something Together</span>
          </h2>
          <p className="text-[var(--text-dim)] font-light leading-relaxed">
            Whether you have a problem that needs a builder, a project that needs a developer,
            or just want to connect — I'm here. No problem is too small to be worth solving.
          </p>
        </div>

        {/* Two column: CTA + Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Main CTA */}
          {(() => {
            const ctaRef = useScrollReveal()
            return (
              <div ref={ctaRef} className="reveal card-fintech p-8 flex flex-col justify-between gap-8">
                <div>
                  <p className="terminal-label mb-4">// Start a conversation</p>
                  <h3 className="font-display font-semibold text-2xl text-[var(--text-primary)] mb-4">
                    Have a project in mind?
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">
                    I work with founders, small teams, and solo builders who need a frontend developer
                    with a problem-first mindset. Let's figure out what you're building — and how I can help.
                  </p>
                </div>

                <div className="space-y-3">
                  <a href="mailto:hannes@birker.dev" className="btn-amber btn-amber-filled w-full justify-center text-center block py-3">
                    ✉ Send an Email
                  </a>
                  <button
                    onClick={handleCopy}
                    className="btn-amber w-full justify-center text-center py-3"
                  >
                    {copied ? '✓ Copied!' : '⧉ Copy Email Address'}
                  </button>
                </div>
              </div>
            )
          })()}

          {/* Contact links */}
          <div className="space-y-4">
            {CONTACT_ITEMS.map((item, i) => {
              const ref = useScrollReveal()
              return (
                <a
                  key={item.label}
                  ref={ref}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="reveal card-fintech p-5 flex items-center gap-5 group block no-underline"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[var(--border-subtle)] text-[var(--amber)] group-hover:border-[var(--amber)] group-hover:bg-[var(--amber-dim)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="terminal-label text-[var(--text-muted)] mb-0.5">{item.label} · {item.note}</p>
                    <p className="font-mono text-sm text-[var(--text-dim)] group-hover:text-[var(--amber)] transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--amber)] transition-colors text-lg">→</span>
                </a>
              )
            })}

            {/* Availability badge */}
            {(() => {
              const badgeRef = useScrollReveal()
              return (
                <div ref={badgeRef} className="reveal card-fintech p-5 border border-green-500/20 bg-green-500/5">
                  <div className="flex items-center gap-3">
                    <span className="status-dot" />
                    <div>
                      <p className="terminal-label text-green-400 mb-0.5">Currently available</p>
                      <p className="text-[var(--text-muted)] text-xs font-light">
                        Open to freelance projects and full-time opportunities
                      </p>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
