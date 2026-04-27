import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--navy-950)] text-[var(--text-primary)] overflow-x-hidden">
      {/* Global ambient layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-0 w-full h-screen"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 20% 10%, rgba(251,191,36,0.03) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-full h-screen"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 80% 90%, rgba(251,191,36,0.02) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />

          {/* Section divider */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
          </div>

          <About />

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
          </div>

          <Skills />

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
          </div>

          <Projects />

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
          </div>

          <Philosophy />

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
          </div>

          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}
