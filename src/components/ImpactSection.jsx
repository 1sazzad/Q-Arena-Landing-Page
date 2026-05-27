import React from 'react'
import { motion } from 'framer-motion'

const impacts = [
  { icon: '💰', title: 'Affordable access', desc: 'Exam prep without breaking the bank' },
  { icon: '🌍', title: 'Support underserved', desc: 'Reach students in under-resourced areas' },
  { icon: '🎓', title: 'AI-assisted guidance', desc: 'Smart study recommendations' },
  { icon: '📚', title: 'Organized questions', desc: 'Easy question discovery and access' },
  { icon: '📈', title: 'Scalable growth', desc: 'Infrastructure for millions of students' },
]

const stats = [
  { label: 'Students Supported', value: 'Coming soon' },
  { label: 'Questions Indexed', value: 'Coming soon' },
  { label: 'Subjects Covered', value: 'Coming soon' },
  { label: 'AI Tools Live', value: 'Yes' }
]

export default function ImpactSection(){
  return (
    <section id="impact" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-medium text-emerald-700 mb-4">Impact</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Measurable, sustainable impact</h2>
        <p className="text-lg text-slate-600 max-w-3xl">Our mission is to create real, lasting change in how students prepare for exams and their academic success.</p>
      </motion.div>
      
      <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {impacts.map((impact, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="card p-6 text-center hover:border-emerald-200 hover:shadow-lg"
          >
            <div className="text-4xl mb-3">{impact.icon}</div>
            <h3 className="font-bold text-slate-900 mb-1">{impact.title}</h3>
            <p className="text-sm text-slate-600">{impact.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-bold text-xl text-slate-900 mb-6">Key Metrics</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 border-2 border-slate-100 hover:border-brand-200"
            >
              <div className="text-sm font-medium text-slate-500 mb-2">{stat.label}</div>
              <div className="text-2xl font-bold text-brand-600">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
