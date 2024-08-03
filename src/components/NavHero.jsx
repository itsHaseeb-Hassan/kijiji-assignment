import React from 'react'
import SearchBar from './SearchBar'

const NavHero = () => {
   
  return (
    <div>
         <div className='bg-postbtn'>
      {/* Navbar */}
      <nav className="bg-white shadow-md mt-3 w-full absolute">
        <div className="container mx-auto bg-secondary">
            <div className='flex justify-between items-center'>
                <div className='flex items-center justify-between'> <img src='/images/logo.png' alt='Logo' className='w-30 h-20' />
                <div className='ms-5'><SearchBar/></div>
                </div>
                <div>
                    <ul className='flex'>
                        <li><a href="#">FR</a></li>
                        <li><a href="#">Register Or Sign in</a></li>
                        <li><a href="#">Post button</a></li>
                    </ul>
                </div>
            </div>
         
        
        </div>
 
      </nav>

      {/* Sections */}
      <div className="container mx-auto py-10">
        {/* Section with Image */}
        <section className="flex flex-col md:flex-row items-center mb-10">
          <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/600"
              alt="Placeholder"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-2xl font-bold mb-4">Section with Image</h2>
            <p>
              This section contains an image. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam.
            </p>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

export default NavHero