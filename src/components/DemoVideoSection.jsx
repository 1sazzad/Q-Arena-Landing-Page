import React from 'react'
import { motion } from 'framer-motion'

export default function DemoVideoSection() {
  return (
    <section id="video" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700 mb-4">Demo Video</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Demo Video Preview</h2>
        <p className="text-lg text-slate-600 max-w-3xl">
          This is a placeholder section for a future walkthrough video. Replace it with a real product demo once recording is available.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="card overflow-hidden border-2 border-dashed border-slate-200"
      >
        <div className="aspect-video bg-gradient-to-br from-slate-100 via-white to-brand-50 flex items-center justify-center text-center p-8">
          <div>
            <div className="w-20 h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mx-auto mb-4 text-brand-600 text-2xl">▶</div>
            <div className="text-xl font-bold text-slate-900">Demo video placeholder</div>
            <div className="text-sm text-slate-600 mt-2">Add a walkthrough covering AI answers, question bank browsing, and admin upload flow.</div>
            <div className="text-xs text-slate-500 mt-4">Replace with a hosted or embedded video before launch.</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
