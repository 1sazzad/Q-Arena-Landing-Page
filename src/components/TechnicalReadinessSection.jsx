import React from 'react'
import { motion } from 'framer-motion'
import { technicalReadiness } from '../data/landingDemoData'

export default function TechnicalReadinessSection() {
  return (
    <section id="technical-readiness" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-sm font-medium text-orange-700 mb-4">Technical Appendix</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Readiness</h2>
        <p className="text-lg text-slate-600 max-w-3xl">
          This section explains the current and planned architecture for the landing page audience, investor review, and cloud-credit applications.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6 border-2 border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4">Current stack</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>Frontend: React / Vite landing page and product frontend</li>
            <li>Backend: FastAPI backend</li>
            <li>AI: AI answer generation service</li>
            <li>Database: structured subject / question content</li>
            <li>Admin: content upload and management</li>
          </ul>
        </div>

        <div className="card p-6 border-2 border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4">Planned cloud usage</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            {technicalReadiness.cloudPlan.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand-600 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6 border-2 border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50">
          <h3 className="font-bold text-slate-900 mb-4">Roadmap notes</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            {technicalReadiness.current.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand-600 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
            {technicalReadiness.planned.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-orange-600 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-slate-500">{technicalReadiness.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}
