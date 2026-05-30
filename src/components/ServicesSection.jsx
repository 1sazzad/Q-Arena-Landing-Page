import React from 'react'
import { motion } from 'framer-motion'
import { coreServices } from '../data/landingDemoData'
import * as Icons from 'lucide-react'

function Icon({name}){
  const Comp = Icons[name] || Icons.BookOpen
  return <Comp className="h-6 w-6 text-brand-600" />
}

export default function ServicesSection(){
  return (
    <section id="services" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-sm font-medium text-brand-700 mb-4">Core Services</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The three core services Q Arena is built around</h2>
        <p className="text-lg text-slate-600 max-w-3xl">The landing page now focuses on the product's main value: AI answer generation, subject-based question access, and admin-controlled content growth.</p>
      </motion.div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        {coreServices.map((s, i) => (
          <motion.div 
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="card p-6 hover:border-brand-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="p-3 bg-brand-50 rounded-lg w-fit mb-4 group-hover:bg-brand-100 transition-colors">
              <Icon name={s.icon} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
            <div className="mt-4 text-xs uppercase tracking-wide text-slate-500 font-semibold">{s.note}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
