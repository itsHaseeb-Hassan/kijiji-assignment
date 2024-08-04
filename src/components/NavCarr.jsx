import React from 'react'

const NavCarr = () => {
  return (
    <div>
           <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
          <img src='/images/logo.png' alt='Logo' className='w-20 h-15' />
          </div>
          <div className="flex-grow">
            <div className="flex justify-end space-x-8 items-center">
              <a href="#" className="text-gray-900">EN</a>
              <a href="#" className="text-gray-900">S'inscrire ou Connexion</a>
              <button className="bg-postbtn text-white px-4 py-2 rounded">
                Afficher
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavCarr