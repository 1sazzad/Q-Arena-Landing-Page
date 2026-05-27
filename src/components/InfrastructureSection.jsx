import React from 'react'
import { motion } from 'framer-motion'

const infrastructureNeeds = [
  {
    icon: '🌐',
    title: 'Application hosting',
    desc: 'Reliable, low-latency hosting for frontend and APIs'
  },
  {
    icon: '💾',
    title: 'Database hosting',
    desc: 'Persistent, managed storage for questions and user data'
  },
  {
    icon: '🤖',
    title: 'AI answer generation',
    desc: 'Compute resources for running AI models and inference'
  },
  {
    icon: '🔍',
    title: 'Semantic search',
    desc: 'Vector database infrastructure for intelligent search'
  },
  {
    icon: '📦',
    title: 'Data storage',
    desc: 'Store papers, PDFs, and media assets securely'
  },
  {
    icon: '📈',
    title: 'Analytics & scaling',
    desc: 'Monitor performance and auto-scale for growth'
  }
]

export default function InfrastructureSection(){
  return (
    <section id="infrastructure" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-sm font-medium text-purple-700 mb-4">Infrastructure</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why we need cloud infrastructure support</h2>
        <p className="text-lg text-slate-600 max-w-3xl">To scale Q Arena and keep it affordable, we're seeking cloud credits and partnership support from leading infrastructure providers.</p>
      </motion.div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {infrastructureNeeds.map((need, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="card p-6 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-3xl mb-3">{need.icon}</div>
            <h3 className="font-bold text-slate-900 mb-2">{need.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{need.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
