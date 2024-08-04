import React from 'react'
import NavHero from '../components/NavHero'
import Slider from '../components/Slider'
import AutosCanada from '../components/AutosCanada'
import BuySale from '../components/BuySale'
import SignIn from '../components/SignIn'
import RealState from '../components/RealState'
import KijijiCentral from '../components/KijijiCentral'
import MobileAppPromotion from '../components/MobileAppPromotion'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
          <NavHero />
          <div className='container mx-auto'>
    <Slider />
    <AutosCanada />
    <BuySale />
    <SignIn />
    <RealState />
    <KijijiCentral />
    </div>
    <MobileAppPromotion />
    <Footer />
    </div>
  )
}

export default HomePage