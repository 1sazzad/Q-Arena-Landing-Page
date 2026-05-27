import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import ServicesSection from './components/ServicesSection'
import InfrastructureSection from './components/InfrastructureSection'
import ImpactSection from './components/ImpactSection'
import TechStackSection from './components/TechStackSection'
import CloudCreditSection from './components/CloudCreditSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="px-4 md:px-6">
        <div className="mx-auto container max-w-5xl">
          <Hero />
          <ProblemSection />
          <SolutionSection />
          <ServicesSection />
          <InfrastructureSection />
          <ImpactSection />
          <TechStackSection />
          <CloudCreditSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
