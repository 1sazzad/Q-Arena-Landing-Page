import React from 'react'
import { motion } from 'framer-motion'
import { contact } from '../data/landingDemoData'

export default function InvestorCTASection() {
  return (
    <section id="investor-cta" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-brand-50 via-white to-blue-50 border border-brand-100 rounded-3xl p-8 md:p-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-white border border-brand-100 text-sm font-medium text-brand-700 mb-4">Investors / Partners / Cloud Credits</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Investors, Partners & Cloud Credit Support</h2>
        <p className="text-lg text-slate-600 max-w-4xl">
          Q Arena is preparing to scale its AI-powered exam preparation platform. We are looking for investor, partner, and cloud infrastructure support to expand AI answer generation, question indexing, content storage, and personalised learning tools.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.demoSubject)}`} className="btn-primary justify-center sm:justify-start">
            Request Demo
          </a>
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.investorSubject)}`} className="btn-secondary justify-center sm:justify-start">
            Investor Contact
          </a>
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.cloudSubject)}`} className="btn-secondary justify-center sm:justify-start">
            Cloud Credit Inquiry
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="card p-4 bg-white/80 border border-slate-100">
            <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Students</div>
            <div className="mt-2 text-sm text-slate-700">Try the beta and request sample questions.</div>
          </div>
          <div className="card p-4 bg-white/80 border border-slate-100">
            <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Investors</div>
            <div className="mt-2 text-sm text-slate-700">Request a demo and founder introduction.</div>
          </div>
          <div className="card p-4 bg-white/80 border border-slate-100">
            <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Schools</div>
            <div className="mt-2 text-sm text-slate-700">Request a pilot or curriculum fit review.</div>
          </div>
          <div className="card p-4 bg-white/80 border border-slate-100">
            <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Cloud partners</div>
            <div className="mt-2 text-sm text-slate-700">Discuss startup cloud credit and infrastructure support.</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
