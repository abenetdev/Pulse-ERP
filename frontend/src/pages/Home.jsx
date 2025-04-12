import React from 'react'
import Speciality from '../components/Speciality'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import LandingPage from '../components/LandingPage'

export default function Home() {
  return (
    <div>
      <LandingPage />      
       <Speciality/>
       <TopDoctors/>
       <Banner/>
    </div>
  )
}
