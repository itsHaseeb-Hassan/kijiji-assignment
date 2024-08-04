import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const NavHero = () => {
  return (
    <div>
      <div className='bg-postbtn h-[600px] md:h-[500px] relative'>
        {/* Navbar in main page */}
        <nav className="bg-white shadow-md mt-3 w-full h-auto absolute">
          {/* mobile nav */}
          <div className="container mx-auto px-4 lg:hidden md:hidden block ">
            <div className='flex justify-between items-center'>
              <img src="/images/logo.png" alt="Logo" className="w-20 h-20" />
              <div className="flex items-center w-full md:w-auto ">
                <ul className="flex space-x-3 ml-auto md:ml-5 text-postbtn">
                  <li><Link to="">FR</Link></li>
                  <li><Link to="">Sign In</Link></li>
                  <li><Link to="" className='bg-postbtn text-white rounded px-2 py-2'>Post ad</Link></li>
                </ul>
              </div>
            </div>
            {/* Search */}
            <div className='flex border items-center rounded h-[40px]'>
              <div className="px-2">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="flex-grow px-2 py-1 border-none focus:ring-0 focus:outline-none"
                placeholder="What are you looking for?"
              />
            </div>
          </div>

          <div className="container mx-auto px-4 lg:block md:block hidden ">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <img src="/images/logo.png" alt="Logo" className="w-20 h-20" />
                <SearchBar />
              </div>
              <div className="flex items-center w-full md:w-auto ">
                <ul className="flex space-x-3 ml-auto md:ml-5 text-postbtn">
                  <li><Link to="">FR</Link></li>
                  <li><Link to="">Register or Sign In</Link></li>
                  <li><Link to="" className='bg-postbtn text-white rounded px-2 py-2'>Post ad</Link></li>
                </ul>
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
            <div className="w-full mt-14 md:w-[450px] md:pl-10  md:mt-0">
              <h2 className="text-[22px] font-bold font-larsseit text-secondary">Over 5,000 vehicles listed daily.</h2>
              <p className='text-[22px] font-bold font-larsseit text-white'>Welcome to the home of your next great ride.</p>
            </div>
            <div className="w-full md:w-[70%] mt-10 md:mt-0 ">
              <img
                src="images/hero.jpg"
                alt="Placeholder"
                className="w-full  h-[300px] md:h-auto  object-cover rounded-lg"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default NavHero