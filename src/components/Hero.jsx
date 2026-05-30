import React from 'react'
import { motion } from 'framer-motion'
import Logo from '../assets/logo.svg'
import { productUrl } from '../data/platformData'
import { contact } from '../data/landingDemoData'

export default function Hero(){
  return (
    <section className="pt-16 md:pt-28 pb-16 md:pb-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-40"></div>
      </div>
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <img src={Logo} alt="Q Arena" className="h-7" style={{ height: '28px' }} />
            <span className="text-sm font-medium text-slate-600">AI-powered learning platform</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight"
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Smarter exam preparation for students
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Q Arena helps students prepare more effectively with previous exam questions, AI analysis, topic insights, personalized suggestions, and intelligent study support.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#contact" className="btn-primary justify-center sm:justify-start">
              <span>Request Demo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href={productUrl} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center sm:justify-start bg-brand-700 hover:bg-brand-800">
              <span>View Live Product</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#cloud" className="btn-secondary justify-center sm:justify-start">
              <span>Support Our Mission</span>
            </a>
            <a href={`mailto:${contact.email}`} className="btn-secondary justify-center sm:justify-start">
              <span>Investor Contact</span>
            </a>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-sm text-slate-500"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Making exam preparation more accessible, affordable, and effective for all students.
          </motion.p>
        </div>
        
        <motion.div 
          className="relative"
          initial={{ scale: 0.95, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-blue-50 rounded-2xl blur-xl opacity-50"></div>
          <div className="card-premium p-8 relative backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-slate-900">How it works</h3>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-100">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm font-semibold">1</span>
                <div>
                  <div className="font-semibold text-slate-900">Aggregate Questions</div>
                  <div className="text-sm text-slate-600">Access organized exam papers and questions</div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm font-semibold">2</span>
                <div>
                  <div className="font-semibold text-slate-900">AI Analysis</div>
                  <div className="text-sm text-slate-600">Intelligent parsing and topic extraction</div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm font-semibold">3</span>
                <div>
                  <div className="font-semibold text-slate-900">Smart Study</div>
                  <div className="text-sm text-slate-600">Personalized suggestions and answers</div>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
