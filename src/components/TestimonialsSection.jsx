import React from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../data/landingDemoData'

export default function TestimonialsSection() {
  return (
    <section id="feedback" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-medium text-emerald-700 mb-4">Validation</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Early Feedback Preview</h2>
        <p className="text-lg text-slate-600 max-w-3xl">
          These are demo testimonials only. Replace them with verified student or pilot-user feedback before public launch.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="card p-6 border-2 border-emerald-100"
          >
            <div className="text-xs uppercase tracking-wide text-emerald-700 font-semibold mb-4">{testimonial.label}</div>
            <p className="text-slate-700 italic leading-relaxed">“{testimonial.quote}”</p>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="font-semibold text-slate-900">{testimonial.name}</div>
              <div className="text-sm text-slate-500">{testimonial.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
