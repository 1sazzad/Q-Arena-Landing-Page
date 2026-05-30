import React from 'react'
import Logo from '../assets/logo.svg'
import { productUrl } from '../data/platformData'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Q Arena" className="h-9 md:h-10" style={{ height: '36px' }} />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#problem" className="text-sm font-medium hover:text-brand-600 transition-colors">Problem</a>
          <a href="#demo" className="text-sm font-medium hover:text-brand-600 transition-colors">Demo</a>
          <a href="#video" className="text-sm font-medium hover:text-brand-600 transition-colors">Video</a>
          <a href="#services" className="text-sm font-medium hover:text-brand-600 transition-colors">Services</a>
          <a href="#founder" className="text-sm font-medium hover:text-brand-600 transition-colors">Founder</a>
          <a href="#roadmap" className="text-sm font-medium hover:text-brand-600 transition-colors">Roadmap</a>
          <a href="#faq" className="text-sm font-medium hover:text-brand-600 transition-colors">FAQ</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-600 transition-colors">Contact</a>
          <a href={productUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
            Visit Live Platform
          </a>
          <a href="#cloud" className="ml-4 btn-primary text-sm">Support Infrastructure</a>
        </nav>
        {/* Mobile menu button placeholder */}
        <div className="md:hidden">
          <a href={productUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs px-3 py-2 mr-2 inline-flex items-center">
            Visit Live Platform
          </a>
        </div>
      </div>
    </header>
  )
}
