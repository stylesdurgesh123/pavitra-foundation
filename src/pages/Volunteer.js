import React from 'react'
import HeroVolunteer from '../components/Volunteer/HeroVolunteer'
import VolunteeringWorks from '../components/Volunteer/VolunteeringWorks'
import VolunteerGallery from '../components/Volunteer/VolunteerGallery'
import TeamMember from '../components/Volunteer/TeamMembers'
import AboutofFounder from '../components/Volunteer/AboutofFounder'

export default function Volunteer() {
  return (
    <div>
      <HeroVolunteer/>
      <AboutofFounder/>
      <VolunteeringWorks/>
      <VolunteerGallery/>
      <TeamMember/>
    </div>
  )
}

