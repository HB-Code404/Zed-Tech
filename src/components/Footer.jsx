import React from 'react'

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-subtle)] py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[var(--amber)] text-sm">HB</span>
          <div className="h-4 w-px bg-[var(--border-subtle)]" />
          <span className="terminal-label text-[var(--text-muted)] opacity-60">
            Hannes Birker · The Problem Solver
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="terminal-label text-[var(--text-muted)] opacity-40">
            © 2025 · Built with React + Tailwind
          </span>
          <div className="flex items-center gap-2">
            <span className="status-dot" style={{ width: '5px', height: '5px' }} />
            <span className="terminal-label text-green-400 opacity-70 text-xs">Online</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
