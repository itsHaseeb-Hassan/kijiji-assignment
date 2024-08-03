import React from 'react'
import SearchBar from './SearchBar'

const NavHero = () => {
   
  return (
    <div>
         <div className='bg-postbtn h-[500px]'>
      {/* Navbar */}
      <nav className="bg-white shadow-md mt-3 w-full absolute">
        <div className="container mx-auto ">
            <div className='flex justify-between items-center'>
                <div className='flex items-center justify-between'> <img src='/images/logo.png' alt='Logo' className='w-30 h-20' />
                <div className='ms-5'><SearchBar/></div>
                </div>
                <div>
                    <ul className='flex justify-between'>
                        <li className='ms-3'><a href="#">FR</a></li>
                        <li className='ms-3'><a href="#">Register Or Sign in</a></li>
                        <li className='ms-3'><a href="#">Post ad</a></li>
                    </ul>
                </div>
            </div>
         
        
        </div>
        <div className='container mx-auto mb-2'>
        <ul className=' flex justify-between w-[70%] font-larsseit font-semibold text-[15px] text-[#373373]'>
            <li className='ms-3'><a href="#">Buy & Sell</a></li>
            <li><a href="#">Cars & Vehicles</a></li>
            <li><a href="#">Real Estate</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pets</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Vaction Rentals</a></li>
        </ul>
        </div>
 
      </nav>

      {/* Sections */}
      <div className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Section with Image */}
        <section className="flex flex-col md:flex-row items-center mb-10">
          <div className="w-full  md:w-[450px] md:pl-10">
            <h2 className="text-[22px] font-bold  font-larsseit text-secondary ">Over 5,000 vehicles listed daily.</h2>
            <p className='text-[22px] font-bold  font-larsseit text-white '>Welcome to the home of your next great ride.</p>
          </div>
          <div className="w-full md:w-[70%] mt-10">
            <img
              src="images/hero.jpg"
              alt="Placeholder"
              className="w-full h-[300px] ms-3 md:ms-0 object-cover rounded-lg"
            />
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

export default NavHero