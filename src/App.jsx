import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Pricing from './components/Pricing.jsx'
import QuoteForm from './components/QuoteForm.jsx'
import ServiceArea from './components/ServiceArea.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Pricing />
        <QuoteForm />
        <ServiceArea />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
