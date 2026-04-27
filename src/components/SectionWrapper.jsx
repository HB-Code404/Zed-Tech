import React from 'react'

export default function SectionWrapper({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  )
}
