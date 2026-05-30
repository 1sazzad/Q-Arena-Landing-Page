import React from 'react'
import { legalDrafts, founder } from '../data/landingDemoData'

export default function LegalPage({ type = 'privacy' }) {
  const isPrivacy = type === 'privacy'
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Use'
  const body = isPrivacy ? legalDrafts.privacy : legalDrafts.terms

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-100 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-bold text-slate-900">Q Arena</a>
          <a href={`mailto:${founder.email}`} className="text-sm text-brand-700 hover:text-brand-800 font-medium">
            {founder.email}
          </a>
        </div>
      </header>

      <main className="px-4 md:px-6 py-12 md:py-16">
        <div className="mx-auto container max-w-3xl">
          <div className="card p-8 md:p-10">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700 mb-4">Draft placeholder — replace with legally reviewed version before launch</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h1>
            <p className="text-slate-600 leading-relaxed mb-6">{body}</p>
            <p className="text-sm text-slate-500 mb-6">Founder: Md Sazzad Hossain | Contact: <a href={`mailto:${founder.email}`} className="text-brand-700 hover:text-brand-800 font-medium">{founder.email}</a></p>
            <a href="/" className="btn-primary inline-flex">Back to home</a>
          </div>
        </div>
      </main>
    </div>
  )
}
