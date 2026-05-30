import React from 'react'
import { motion } from 'framer-motion'
import { faqItems } from '../data/landingDemoData'

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700 mb-4">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-slate-600 max-w-3xl">
          This FAQ is written to support students, schools, investors, and Google Startup reviewers with clear, honest answers.
        </p>
      </motion.div>

      <div className="grid gap-4">
        {faqItems.map((item) => (
          <div key={item.question} className="card p-6 border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">{item.question}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
