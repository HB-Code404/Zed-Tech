import React from 'react'

export default function Card({ className = '', children, glowOnHover = true }) {
  return (
    <div className={`card-fintech p-6 ${glowOnHover ? '' : 'hover:transform-none hover:shadow-none'} ${className}`}>
      {children}
    </div>
  )
}
