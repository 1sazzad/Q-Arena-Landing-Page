import React from 'react'
import Logo from '../assets/logo.svg'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Q Arena" className="h-9 md:h-10" style={{ height: '36px' }} />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#problem" className="text-sm font-medium hover:text-brand-600 transition-colors">Problem</a>
          <a href="#services" className="text-sm font-medium hover:text-brand-600 transition-colors">Services</a>
          <a href="#infrastructure" className="text-sm font-medium hover:text-brand-600 transition-colors">Infrastructure</a>
          <a href="#impact" className="text-sm font-medium hover:text-brand-600 transition-colors">Impact</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-600 transition-colors">Contact</a>
          <a href="#cloud" className="ml-4 btn-primary text-sm">Support Infrastructure</a>
        </nav>
        {/* Mobile menu button placeholder */}
        <div className="md:hidden">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
