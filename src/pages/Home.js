import React from 'react'
import Hero from '../components/Hero'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import BannerCarousel from '../components/BannerCarousel'
import ImageCard from '../components/ImageCard'
import ImpactSection from '../components/ImpactSection'
import VideoCards from '../components/VideoCards'

export default function Home() {
  return (
    <>
      <Hero/>
      <Section1/>
      <Section2/>
      <BannerCarousel/>
      <VideoCards/>
      <ImageCard/>
      <ImpactSection/>
    </>
  )
}
