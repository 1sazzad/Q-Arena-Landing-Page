import React from 'react'
import { motion } from 'framer-motion'
import { businessModelRoadmap } from '../data/landingDemoData'

export default function BusinessModelSection() {
  return (
    <section id="business-model" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700 mb-4">Monetisation</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Business Model Roadmap</h2>
        <p className="text-lg text-slate-600 max-w-3xl">
          This is a roadmap view, not a statement of current monetisation. Replace with verified pricing once the commercial model is finalised.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {businessModelRoadmap.map((item) => (
          <div key={item} className="card p-5 border border-slate-100">
            <div className="text-sm font-semibold uppercase tracking-wide text-brand-700 mb-2">Roadmap item</div>
            <div className="font-bold text-slate-900">{item}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
