import React from 'react'
import MainPage from './mainpage'
import RecentWorks from './recent-works'
import ServicesSection from './services-section'

const MainHomepage = () => {
  return ( <>
    <MainPage/>
    <ServicesSection/>
    <RecentWorks/>
    </>
  )
}

export default MainHomepage