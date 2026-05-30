import React from 'react'
import Logo from '../assets/logo.svg'
import { productUrl } from '../data/platformData'
import { founder } from '../data/landingDemoData'

export default function Footer(){
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-slate-200 mt-16 py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          <div>
            <img src={Logo} alt="Q Arena" className="mb-4" style={{ height: '32px' }} />
            <p className="text-sm text-slate-600">AI-powered exam preparation for accessible learning.</p>
            <div className="text-sm text-slate-600 mt-3">Contact: <a href={`mailto:${founder.email}`} className="font-medium text-slate-800 hover:text-brand-600">{founder.email}</a></div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-slate-600 hover:text-brand-600 transition-colors">Services</a></li>
              <li><a href="#tech" className="text-slate-600 hover:text-brand-600 transition-colors">Technology</a></li>
              <li><a href="#infrastructure" className="text-slate-600 hover:text-brand-600 transition-colors">Infrastructure</a></li>
              <li><a href={productUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-600 transition-colors">Live Platform</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#impact" className="text-slate-600 hover:text-brand-600 transition-colors">Impact</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-brand-600 transition-colors">Contact</a></li>
              <li><a href="/terms" className="text-slate-600 hover:text-brand-600 transition-colors">Terms</a></li>
              <li><a href="/terms" className="text-slate-600 hover:text-brand-600 transition-colors">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`mailto:${founder.email}`} className="text-slate-600 hover:text-brand-600 transition-colors">Email Founder</a></li>
              <li><a href={productUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-600 transition-colors">Live Product</a></li>
              <li><a href="/privacy" className="text-slate-600 hover:text-brand-600 transition-colors">Privacy</a></li>
              <li><a href={`mailto:${founder.email}`} className="text-slate-600 hover:text-brand-600 transition-colors">Investor Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {currentYear} Q Arena. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-slate-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
