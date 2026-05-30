import React from 'react'
import { motion } from 'framer-motion'
import { roadmap } from '../data/landingDemoData'

export default function CurrentVisionSection() {
  return (
    <section id="roadmap" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-sm font-medium text-brand-700 mb-4">Roadmap</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Current Product & Future Vision</h2>
        <p className="text-lg text-slate-600 max-w-3xl">
          This section separates what is being shown now from the roadmap that should be funded, built, and validated next.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6 border-2 border-brand-100">
          <h3 className="font-bold text-slate-900 mb-4">Current MVP</h3>
          <ul className="space-y-3 text-slate-600 text-sm">
            {roadmap.current.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand-600 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6 border-2 border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4">Upcoming with funding</h3>
          <ul className="space-y-3 text-slate-600 text-sm">
            {roadmap.upcoming.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand-600 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6 border-2 border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50">
          <h3 className="font-bold text-slate-900 mb-4">Long-term vision</h3>
          <p className="text-slate-600 leading-relaxed">{roadmap.longTerm}</p>
        </div>
      </div>
    </section>
  )
}
