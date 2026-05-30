import React from 'react'
import { motion } from 'framer-motion'
import { productUrl } from '../data/platformData'
import { contact, founder } from '../data/landingDemoData'

const contactInfo = [
  { label: 'Founder / Team', value: contact.team, icon: '👥' },
  { label: 'Email', value: contact.email, icon: '✉️' },
  { label: 'Partnership', value: contact.partnership, icon: '🤝' },
  { label: 'Location', value: contact.location, icon: '📍' },
  { label: 'Product Website', value: 'qarena.me', icon: '🌐' }
]

export default function ContactSection(){
  return (
    <section id="contact" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700 mb-4">Contact</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get in touch</h2>
        <p className="text-lg text-slate-600 max-w-3xl">Interested in Q Arena? Want to partner with us or support our mission? We'd love to hear from you through the official company email.</p>
        <p className="mt-4 text-sm text-slate-500">Live product: <a href={productUrl} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:text-brand-800 font-medium">https://qarena.me</a></p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card p-6 hover:border-brand-200 hover:shadow-lg transition-all"
        >
          <div className="text-3xl mb-3">👤</div>
          <div className="text-sm font-medium text-slate-500 mb-2">Founder</div>
          <div className="font-bold text-slate-900 text-lg">{founder.name}</div>
          <div className="text-sm text-slate-600 mt-1">{founder.title}</div>
          <div className="mt-3">
            <a href={`mailto:${founder.email}`} className="text-brand-700 hover:text-brand-800 font-medium">{founder.email}</a>
          </div>
        </motion.div>

        {contactInfo.map((info, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="card p-6 hover:border-brand-200 hover:shadow-lg transition-all"
          >
            <div className="text-3xl mb-3">{info.icon}</div>
            <div className="text-sm font-medium text-slate-500 mb-2">{info.label}</div>
            <div className="font-bold text-slate-900 text-lg">{info.value}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="card p-8 md:p-10 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-100"
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Direct communication</h3>
        <p className="text-slate-600 mb-6">Feel free to reach out via email for inquiries, partnerships, and support requests. We aim to respond promptly.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent('Q Arena Demo Request')}`} className="btn-primary inline-flex justify-center">
            Request Demo
          </a>
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent('Investor Inquiry for Q Arena')}`} className="btn-secondary inline-flex justify-center">
            Investor Contact
          </a>
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent('Cloud Credit Inquiry for Q Arena')}`} className="btn-secondary inline-flex justify-center">
            Partnership & Cloud Credit Inquiry
          </a>
        </div>
      </motion.div>
    </section>
  )
}
