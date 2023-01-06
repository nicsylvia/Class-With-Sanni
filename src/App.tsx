import React from 'react'
import AllCards from './Components/Card/AllCards'
import { Footer } from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AllCards />
      <Footer />
    </div>
  )
}

export default App