import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Card from './Card'

const PROJECTS = [
  {
    id: 'P-001',
    name: 'Real Estate Analyzer',
    category: 'Data / Fintech',
    status: 'Concept',
    year: '2024',
    description:
      'A dashboard tool for analyzing real estate investment properties. Calculates ROI, rental yield, break-even, and risk metrics in real time. Designed for investors who think in numbers, not emotion.',
    stack: ['React', 'Tailwind', 'Chart.js', 'AI APIs'],
    accent: '#fbbf24',
    metrics: ['ROI Calculator', 'Risk Scoring', 'Market Comps'],
    icon: '▤',
  },
  {
    id: 'P-002',
    name: 'AI Learning Tool',
    category: 'EdTech / AI',
    status: 'Prototype',
    year: '2024',
    description:
      'An adaptive learning platform concept where AI generates personalized study paths based on your gaps, not generic curricula. Built around the principle that every learner has a different problem to solve.',
    stack: ['React', 'OpenAI API', 'Tailwind', 'LocalStorage'],
    accent: '#38bdf8',
    metrics: ['Adaptive Paths', 'Progress Tracking', 'AI Feedback'],
    icon: '◉',
  },
  {
    id: 'P-003',
    name: 'Automation Dashboard',
    category: 'Productivity / Tools',
    status: 'In Progress',
    year: '2025',
    description:
      'A central command dashboard for personal workflow automation. Connects APIs, monitors triggers, and executes tasks without human intervention. Built by someone who hates doing the same thing twice.',
    stack: ['React', 'Vite', 'REST APIs', 'Tailwind'],
    accent: '#a78bfa',
    metrics: ['Task Triggers', 'API Monitor', 'Log View'],
    icon: '⬡',
  },
]

function ProjectCard({ project, index }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="card-fintech group h-full flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl" style={{ color: project.accent }}>
              {project.icon}
            </span>
            <div>
              <span className="terminal-label">{project.id}</span>
              <p className="font-mono text-xs text-[var(--text-muted)] opacity-60">{project.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="terminal-label px-2 py-0.5 border text-xs"
              style={{
                borderColor: `${project.accent}40`,
                color: project.accent,
                background: `${project.accent}10`,
              }}
            >
              {project.status}
            </span>
            <span className="terminal-label text-[var(--text-muted)] opacity-50">{project.year}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col gap-4">
          <h3 className="font-display font-semibold text-xl text-[var(--text-primary)] group-hover:text-[var(--amber)] transition-colors duration-300">
            {project.name}
          </h3>

          <p className="text-[var(--text-muted)] text-sm leading-relaxed font-light flex-1">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="text-xs font-mono px-2 py-1"
                style={{
                  background: `${project.accent}0d`,
                  color: `${project.accent}cc`,
                  border: `1px solid ${project.accent}20`,
                }}
              >
                {m}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div>
            <p className="terminal-label text-[var(--text-muted)] mb-2 opacity-60">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-[var(--text-muted)] border border-[var(--border-subtle)] px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button className="btn-amber text-xs self-start mt-2 opacity-60 cursor-not-allowed" disabled>
            → Coming Soon
          </button>
        </div>

        {/* Bottom glow line on hover */}
        <div
          className="h-px w-0 group-hover:w-full transition-all duration-500"
          style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
        />
      </div>
    </div>
  )
}

export default function Projects() {
  const headerRef = useScrollReveal()

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="glow-orb w-[400px] h-[400px] bottom-0 right-[-100px]"
        style={{ background: 'rgba(251,191,36,0.025)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16">
          <p className="terminal-label mb-4">
            <span className="accent-line" />
            03 // Projects
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
            What I'm <span className="text-amber-glow">Building</span>
          </h2>
          <p className="text-[var(--text-dim)] font-light max-w-xl leading-relaxed">
            Every project starts with a problem worth solving. These are the concepts I'm developing —
            tools I wish existed and set out to build.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Footer note */}
        {(() => {
          const noteRef = useScrollReveal()
          return (
            <div ref={noteRef} className="reveal flex items-start gap-4 p-5 border border-[var(--border-subtle)]">
              <span className="terminal-label text-[var(--amber)] opacity-70 shrink-0 mt-0.5">NOTE</span>
              <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">
                These are concept and early-stage projects. I build in public and ship iteratively.
                If you see a tool you'd use — let's talk about making it real.
              </p>
            </div>
          )
        })()}
      </div>
    </section>
  )
}
