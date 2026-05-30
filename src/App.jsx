import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import ServicesSection from './components/ServicesSection'
import FounderSection from './components/FounderSection'
import ProductDemoSection from './components/ProductDemoSection'
import DemoVideoSection from './components/DemoVideoSection'
import TestimonialsSection from './components/TestimonialsSection'
import CurrentVisionSection from './components/CurrentVisionSection'
import BusinessModelSection from './components/BusinessModelSection'
import TechnicalReadinessSection from './components/TechnicalReadinessSection'
import InvestorCTASection from './components/InvestorCTASection'
import FAQSection from './components/FAQSection'
import CloudCreditSection from './components/CloudCreditSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import LegalPage from './components/LegalPage'

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return pathname
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="px-4 md:px-6">
        <div className="mx-auto container max-w-5xl">
          <Hero />
          <ProblemSection />
          <SolutionSection />
          <FounderSection />
          <ProductDemoSection />
          <DemoVideoSection />
          <ServicesSection />
          <TestimonialsSection />
          <CurrentVisionSection />
          <BusinessModelSection />
          <TechnicalReadinessSection />
          <CloudCreditSection />
          <InvestorCTASection />
          <FAQSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function App(){
  const pathname = usePathname()

  if (pathname === '/privacy') {
    return <LegalPage type="privacy" />
  }

  if (pathname === '/terms') {
    return <LegalPage type="terms" />
  }

  return <LandingPage />
}
