import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HeroCarousel from '../components/HeroCarousel'
import LuxuryProjects from '../components/projects'
import TestimonialsCarousel from '../components/Testimony'
import Footer from '../components/Footer'

function Home() {
  return (
     <div>
          <Navbar/>
          <HeroCarousel/>
          <Hero/>
          <LuxuryProjects/>
          <TestimonialsCarousel/>
          <Footer/>
          
        </div>
  )
}

export default Home