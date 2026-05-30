import React from 'react'
import { motion } from 'framer-motion'
import { productUrl, founder } from '../data/platformData'

const cloudBenefits = [
  {
    icon: '💰',
    title: 'Reduce hosting cost',
    desc: 'Support to cover baseline infrastructure costs'
  },
  {
    icon: '🚀',
    title: 'Support AI compute',
    desc: 'Credits for model usage and inference costs'
  },
  {
    icon: '⚡',
    title: 'Improve uptime',
    desc: 'Managed services increase reliability'
  },
  {
    icon: '📊',
    title: 'Scale to students',
    desc: 'Autoscaling and load management support'
  }
]

export default function CloudCreditSection(){
  return (
    <section id="cloud" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-sm font-medium text-orange-700 mb-4">Partnership</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">We're seeking cloud infrastructure support</h2>
        <p className="text-lg text-slate-600 max-w-3xl">We're actively reaching out to cloud providers like Microsoft for Startups, AWS Activate, Google Cloud, and other technology partners to help us scale affordably.</p>
        <p className="mt-4 text-sm text-slate-500">Live product: <a href={productUrl} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:text-brand-800 font-medium">https://qarena.me</a></p>
        <p className="mt-4 text-sm text-slate-500">Q Arena is an AI-first exam preparation platform focused on AI Answer Generation, Subject-Based Question Bank, and Admin Content Upload & Management. We are preparing to scale AI inference, question indexing, content storage, and backend infrastructure using cloud services. For partnership, investor, or cloud credit inquiries, contact <a href={`mailto:${founder.email}`} className="text-brand-700 hover:text-brand-800 font-medium">{founder.email}</a>.</p>
      </motion.div>
      
      <div className="grid gap-6 sm:grid-cols-2 mb-12">
        {cloudBenefits.map((benefit, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="card p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl"
          >
            <div className="text-3xl mb-3">{benefit.icon}</div>
            <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
            <p className="text-sm text-slate-600">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-brand-50 to-blue-50 rounded-2xl border border-brand-200 p-8 md:p-12 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ready to partner with us?</h3>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">If you represent a cloud provider or technology partner interested in supporting affordable education infrastructure, we'd love to hear from you.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={productUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex justify-center">
            <span>Explore Q Arena Live</span>
          </a>
          <a href="#contact" className="btn-primary inline-flex justify-center">
            <span>Let's Connect</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href={`mailto:${founder.email}`} className="btn-secondary inline-flex justify-center">
            <span>Partnership & Cloud Credit Inquiry</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
