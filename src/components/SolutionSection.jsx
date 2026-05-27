import React from 'react'
import { motion } from 'framer-motion'

export default function SolutionSection(){
  return (
    <section id="solution" className="py-16 md:py-24 backdrop-glow rounded-2xl px-6 md:px-10 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-100 text-sm font-medium text-green-700 mb-4">Our Solution</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Smart learning, built for accessibility</h2>
        <p className="text-lg text-slate-600 max-w-4xl leading-relaxed">
          Q Arena combines previous-year exam data, AI-powered analysis, semantic search, topic insights, and intelligent answer generation into one unified platform—designed to make quality exam preparation affordable and accessible for every student.
        </p>
        
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="p-4 rounded-lg bg-white/50 border border-slate-100">
            <div className="font-bold text-brand-600 text-2xl mb-2">📖</div>
            <div className="font-semibold text-slate-900">Comprehensive Data</div>
            <div className="text-sm text-slate-600">Years of exam questions organized by topic</div>
          </div>
          <div className="p-4 rounded-lg bg-white/50 border border-slate-100">
            <div className="font-bold text-brand-600 text-2xl mb-2">🤖</div>
            <div className="font-semibold text-slate-900">AI Intelligence</div>
            <div className="text-sm text-slate-600">Smart analysis and personalized learning paths</div>
          </div>
          <div className="p-4 rounded-lg bg-white/50 border border-slate-100">
            <div className="font-bold text-brand-600 text-2xl mb-2">💡</div>
            <div className="font-semibold text-slate-900">Real Impact</div>
            <div className="text-sm text-slate-600">Proven to improve exam scores and confidence</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
