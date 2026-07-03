import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import WhyChooseUs from '@/components/why-choose-us'
import Partners from '@/components/partners'
import Stats from '@/components/stats'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Partners />
      <Stats />
      <Contact />
      <Footer />
    </main>
  )
}
