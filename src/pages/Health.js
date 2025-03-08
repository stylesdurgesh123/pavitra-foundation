import React from 'react'
import HealthHero from '../components/Health/HealthHero'
import Hero from '../components/Health/Hero'
import HealthServices from '../components/Health/HealthService'
import Testimonials from '../components/Health/Testimonials'

export default function Health() {
  return (
    <div>
      <Hero/>
      <HealthHero/>
      <HealthServices/>
      <Testimonials/>
    </div>
  )
}
