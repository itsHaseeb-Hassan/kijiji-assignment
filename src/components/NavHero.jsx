import React from 'react'
import SearchBar from './SearchBar'

const NavHero = () => {
   
  return (
    <div>
    <div className='bg-postbtn h-[600px] md:h-[500px] relative'>
      {/* Navbar */}
      <nav className="bg-white shadow-md mt-3 w-full absolute">
        <div className="container mx-auto px-4">
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <img src='/images/logo.png' alt='Logo' className='w-20 h-20' />
              <div className='ml-5'>
                <SearchBar />
                </div>
            </div>
            <div>
              <ul className='flex space-x-3'>
                <li><a href="#">FR</a></li>
                <li><a href="#">Register Or Sign in</a></li>
                <li><a href="#">Post ad</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='container mx-auto mb-2 px-4'>
          <ul className='flex flex-wrap justify-between w-full md:w-[70%] font-larsseit font-semibold text-[15px] text-[#373373]'>
            <li className='ms-3'><a href="#">Buy & Sell</a></li>
            <li><a href="#">Cars & Vehicles</a></li>
            <li><a href="#">Real Estate</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pets</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Vacation Rentals</a></li>
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