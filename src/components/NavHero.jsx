import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const NavHero = () => {
   
  return (
    <div>
    <div className='bg-postbtn h-[600px] md:h-[500px] relative'>
      {/* Navbar in main page */}
      <nav className="bg-white shadow-md mt-3 w-full absolute">
        <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
  <div className="flex items-center w-full md:w-auto">
    <img src="/images/logo.png" alt="Logo" className="w-20 h-20" />
    <ul className="flex space-x-3 ml-auto md:ml-5">
      <li><Link to="">FR</Link></li>
      <li><Link to="">Register Or Sign in</Link></li>
      <li><Link to="">Post ad</Link></li>
    </ul>
  </div>
  <div className="mt-5 md:mt-0 w-full md:w-auto md:ml-auto md:flex md:justify-center">
    <SearchBar />
  </div>
</div>
        </div>
        <div className='container mx-auto mb-2 px-4'>
          <ul className='flex flex-wrap justify-between w-full md:w-[70%] font-larsseit font-semibold text-[10px] md:text-[15px] text-[#373373]'>
            <li className='ms-3'><Link to="">Buy & Sell</Link></li>
            <li><Link to="">Cars & Vehicles</Link></li>
            <li><Link to="">Real Estate</Link></li>
            <li><Link to="">Jobs</Link></li>
            <li><Link to="">Services</Link></li>
            <li><Link to="">Pets</Link></li>
            <li><Link to="">Community</Link></li>
            <li><Link to="">Vacation Rentals</Link></li>
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <div className="container mx-auto absolute my-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4">
        {/* Section with Image */}
        <section className="flex flex-col  md:flex-row items-center mb-10">
          <div className="w-full md:w-[450px] md:pl-10">
            <h2 className="text-[22px] font-bold font-larsseit text-secondary">Over 5,000 vehicles listed daily.</h2>
            <p className='text-[22px] font-bold font-larsseit text-white'>Welcome to the home of your next great ride.</p>
          </div>
          <div className="w-full md:w-[70%] mt-10 md:mt-0">
            <img
              src="images/hero.jpg"
              alt="Placeholder"
              className="w-full h-[300px] md:h-auto object-cover rounded-lg"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
  )
}

export default NavHero