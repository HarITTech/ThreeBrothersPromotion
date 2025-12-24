import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import GrowthStrategiesSection from '../components/GrowthStrategiesSection'
import Strength from '../components/Strength'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

const home = () => {
  return (
    <div className='w-screen '>
      {/* <Header/> */}
      <Hero/>
      <Strength/>
      <Services/>
      <Projects/>
      <Team/>
      <Testimonial/>
      <GrowthStrategiesSection/>
      {/* <Footer/> */}
    </div>
  )
}

export default home
