import React from 'react'
import { motion } from 'framer-motion'

const techStack = [
  { name: 'React frontend', desc: 'Modern UI' },
  { name: 'API-based backend', desc: 'Scalable services' },
  { name: 'Database-driven question bank', desc: 'Reliable data' },
  { name: 'AI answer engine', desc: 'Smart responses' },
  { name: 'Semantic search', desc: 'Vector database' },
  { name: 'Cloud-ready architecture', desc: 'Enterprise scale' }
]

export default function TechStackSection(){
  return (
    <section id="tech" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700 mb-4">Technology</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built with modern technology</h2>
        <p className="text-lg text-slate-600 max-w-3xl">A cloud-native, API-first platform combining modern frontend frameworks, intelligent backends, vector search, and AI tooling for maximum scale and reliability.</p>
      </motion.div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="card p-6 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                <svg className="w-5 h-5 text-slate-600 group-hover:text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-900">{tech.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{tech.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
