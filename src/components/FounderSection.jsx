import React from 'react'
import { motion } from 'framer-motion'
import { founder, demoStats, contact } from '../data/landingDemoData'

export default function FounderSection() {
  return (
    <section id="founder" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-sm font-medium text-brand-700 mb-4">Founder</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built by Q Arena</h2>
        <p className="text-lg text-slate-600 max-w-3xl">
          Q Arena is founded by Md Sazzad Hossain with the mission to make exam preparation more structured, accessible, and AI-powered for students.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="card p-8 md:p-10 border-2 border-brand-100"
        >
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-brand text-white flex items-center justify-center text-2xl font-bold shadow-premium">
              MH
            </div>
            <div>
              <div className="text-sm font-medium text-slate-500 mb-1">Founder</div>
              <h3 className="text-2xl font-bold text-slate-900">{founder.name}</h3>
              <p className="text-slate-600 mt-1">{founder.role}</p>
              <p className="text-slate-600 mt-3">
                <span className="font-semibold text-slate-900">Email:</span>{' '}
                <a href={`mailto:${founder.email}`} className="text-brand-700 hover:text-brand-800 font-medium">
                  {founder.email}
                </a>
              </p>
              <p className="text-slate-600 mt-2">
                <span className="font-semibold text-slate-900">Website:</span>{' '}
                <a href={founder.website} target="_blank" rel="noreferrer" className="text-brand-700 hover:text-brand-800 font-medium">
                  {founder.website}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5">
            <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-2">Contact founder</div>
            <p className="text-slate-600 mb-4">
              Founder, investor, partnership, and cloud credit inquiries should use the official company email.
            </p>
            <a href={`mailto:${contact.email}`} className="btn-primary inline-flex">
              Contact Founder
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
        >
          {demoStats.map((stat) => (
            <div key={stat.value} className="card p-5 border border-slate-100">
              <div className="text-xs uppercase tracking-wide text-brand-700 font-semibold">{stat.label}</div>
              <div className="mt-2 text-xl font-bold text-slate-900">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-600">{stat.note}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
