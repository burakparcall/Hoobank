import Business from './components/Business'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Navbar from './components/Navbar'
import { Billing, Clients } from './components'
import CardDeal from './components/CardDeal'
import Testimonials from './components/Testmonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
       <div className="sm:px-16 px-[4rem] flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar/>
          </div>
       </div>

       <div className='bg-primary flex justify-center items-start'>
          <div className='xl:max-w-[1280px] w-full'>
            <Hero/>
          </div>
       </div>

       <div className='bg-primary sm:px-16 px-6 flex justify-center items-center'>
          <div className='xl:max-w-[1280px] w-full'>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
       </div>
    </div>
  )
}

export default App
