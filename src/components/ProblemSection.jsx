import React from 'react'
import { motion } from 'framer-motion'

export default function ProblemSection(){
  const problems = [
    {
      icon: '📚',
      title: 'Unorganized question access',
      desc: 'Students struggle to find organized previous exam questions in one place.'
    },
    {
      icon: '📊',
      title: 'Unknown topic repetition',
      desc: 'Learners lack insights into which topics repeat most frequently.'
    },
    {
      icon: '💰',
      title: 'Cost barriers',
      desc: 'Quality exam preparation support remains expensive and inaccessible.'
    },
    {
      icon: '⚡',
      title: 'Infrastructure needs',
      desc: 'AI-powered tools require significant server and cloud resources.'
    }
  ]

  return (
    <section id="problem" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-red-50 border border-red-100 text-sm font-medium text-red-700 mb-4">The Challenge</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Barriers to effective exam prep</h2>
        <p className="text-lg text-slate-600 max-w-3xl">Students face multiple challenges that make exam preparation inefficient, expensive, and difficult to optimize.</p>
      </motion.div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="card p-6 hover:border-brand-200 hover:shadow-xl group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{problem.icon}</div>
            <h3 className="font-bold text-slate-900 mb-2">{problem.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{problem.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
