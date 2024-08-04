import React from 'react'
import Footer from '../components/Footer'
import Dealer from '../components/Dealer'
import SliderCar from '../components/SliderCar'
import Form from '../components/Form'
import NavCarr from '../components/NavCarr'

const CarsPage = () => {
  return (
    <div className=''>
      <NavCarr />
      <Form />
      <SliderCar />
        <Dealer />
        <Footer />
    </div>
  )
}

export default CarsPage