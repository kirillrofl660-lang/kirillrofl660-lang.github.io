import { Box } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Resources } from './components/Resources'
import { Cases } from './components/Cases'
import { Pricing } from './components/Pricing'
import { OrderCTA } from './components/OrderCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <Box overflowX="hidden">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Resources />
      <Cases />
      <Pricing />
      <OrderCTA />
      <Footer />
    </Box>
  )
}
