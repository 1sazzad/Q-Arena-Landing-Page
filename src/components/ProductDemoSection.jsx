import React from 'react'
import { motion } from 'framer-motion'
import { screenshotPlaceholders } from '../data/landingDemoData'

export default function ProductDemoSection() {
  return (
    <section id="demo" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700 mb-4">Product Proof</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Product Demo Preview</h2>
        <p className="text-lg text-slate-600 max-w-3xl">
          The landing page now shows a clear preview of the three core services. Replace the demo placeholders with live screenshots as soon as the product assets are ready.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {screenshotPlaceholders.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="card overflow-hidden border-2 border-slate-100"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 via-slate-50 to-brand-50 flex items-center justify-center p-6 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 text-xs font-semibold mb-4">
                  PREVIEW
                </div>
                <div className="text-lg font-semibold text-slate-900">Demo screenshot placeholder</div>
                <div className="text-sm text-slate-600 mt-2">replace with real product screenshot</div>
                <div className="text-xs text-slate-500 mt-4 break-all">{item.placeholder}</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
