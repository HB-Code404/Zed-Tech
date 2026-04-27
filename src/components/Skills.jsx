import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Card from './Card'

const SKILL_GROUPS = [
  {
    category: 'Core Frontend',
    icon: '◈',
    skills: [
      { name: 'React / JSX', level: 82 },
      { name: 'JavaScript (ES6+)', level: 78 },
      { name: 'CSS / Tailwind', level: 88 },
      { name: 'HTML5 / Semantics', level: 90 },
      { name: 'Vite / Tooling', level: 70 },
    ],
  },
  {
    category: 'AI-Native Development',
    icon: '⬡',
    skills: [
      { name: 'AI-Assisted Coding', level: 85 },
      { name: 'Prompt Engineering', level: 80 },
      { name: 'API Integration', level: 72 },
      { name: 'Workflow Automation', level: 68 },
    ],
  },
  {
    category: 'Problem Solving',
    icon: '▲',
    skills: [
      { name: 'Systems Thinking', level: 92 },
      { name: 'Debugging Mindset', level: 88 },
      { name: 'Resilience Under Pressure', level: 99 },
      { name: 'Self-Direction', level: 95 },
    ],
  },
]

const TOOLSET = [
  'VS Code', 'GitHub', 'Figma', 'ChatGPT', 'Claude AI', 'Cursor', 'npm', 'Vite', 'Tailwind CSS', 'React'
]

function SkillBar({ name, level, index }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 0.06}s` }}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[var(--text-dim)] text-sm">{name}</span>
        <span className="font-mono text-xs text-[var(--amber)] opacity-80">{level}%</span>
      </div>
      <div className="h-px bg-[var(--border-subtle)] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--amber)] to-[rgba(251,191,36,0.4)] transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const headerRef = useScrollReveal()

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="glow-orb w-[600px] h-[400px] top-0 left-[-200px]"
        style={{ background: 'rgba(251,191,36,0.02)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16">
          <p className="terminal-label mb-4">
            <span className="accent-line" />
            02 // Skills
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
            Tools & <span className="text-amber-glow">Capabilities</span>
          </h2>
          <p className="text-[var(--text-dim)] font-light max-w-xl leading-relaxed">
            Built from the ground up — not from a degree, but from obsession, necessity, and relentless practice.
          </p>
        </div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SKILL_GROUPS.map((group, gi) => {
            const cardRef = useScrollReveal()
            return (
              <div
                key={group.category}
                ref={cardRef}
                className="reveal"
                style={{ transitionDelay: `${gi * 0.15}s` }}
              >
                <Card className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[var(--amber)] text-lg">{group.icon}</span>
                    <div>
                      <p className="terminal-label">{group.category}</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {group.skills.map((skill, si) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} index={si} />
                    ))}
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Toolset pills */}
        {(() => {
          const toolRef = useScrollReveal()
          return (
            <div ref={toolRef} className="reveal card-fintech p-6">
              <p className="terminal-label mb-5">// Daily Toolset</p>
              <div className="flex flex-wrap gap-3">
                {TOOLSET.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-3 py-1.5 border border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--amber)] hover:text-[var(--amber)] transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )
        })()}

        {/* Differentiator note */}
        {(() => {
          const noteRef = useScrollReveal()
          return (
            <div ref={noteRef} className="reveal mt-8 p-6 border-l-2 border-[var(--amber)] bg-[var(--amber-dim)]">
              <p className="terminal-label mb-2">// The real differentiator</p>
              <p className="text-[var(--text-dim)] font-light leading-relaxed">
                My biggest asset isn't a framework. It's the ability to hit a wall and keep going.
                Most problems aren't technical — they're endurance tests. And I've already passed the hardest one.
              </p>
            </div>
          )
        })()}
      </div>
    </section>
  )
}
