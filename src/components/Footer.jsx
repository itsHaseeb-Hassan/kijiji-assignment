import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-footerBg text-gray-400 py-10">
            <div className=' container grid gap-5 grid-cols-2 md:grid-cols-4  mx-auto w-[75%]' >
      <div>
        <h4 className="text-footerHeading font-bold mb-7">KIJIJI</h4>
        <ul className='text-[16px]  text-primary font-larsseit'   >
          <li className="mb-5 hover:text-secondary"><a href="#">About</a></li>
          <li className="mb-5 hover:text-secondary"><a href="#">Join Us</a></li>
          <li className="mb-5 hover:text-secondary"><a href="#">Member Benefits</a></li>
          <li className="mb-5 hover:text-secondary"><a href="#">Advertise on Kijiji</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-footerHeading font-bold mb-7">EXPLORE</h4>
        <ul className='text-[16px]  text-primary font-larsseit'>
          <li className="mb-5 hover:text-secondary"><a href="#">Kijiji Autos</a></li>
          <li className="mb-5 hover:text-secondary"><a href="#">Kijiji Central</a></li>
          <li className="mb-5 hover:text-secondary"><a href="#">Tools to promote ads</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-footerHeading font-bold mb-7">INFO</h4>
        <ul className='text-[16px] text-primary font-larsseit'>
          <li className="mb-5 hover:text-secondary"><a href="#">Terms of Use</a></li>
          <li className="mb-5 hover:text-secondary"><a href="#">Privacy Policy</a></li>
          <li className="mb-5 hover:text-secondary"><a href="#">Posting Policy</a></li>
          <li className="mb-5 hover:text-secondary"><a href="#">AdChoices</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-footerHeading font-bold mb-7">SUPPORT</h4>
        <ul className='text-[16px]  text-primary font-larsseit'>
          <li className="mb-5 hover:text-secondary"><a href="#">Help Desk</a></li>
          <li className="mb-5 hover:text-secondary"><a href="#">Kijiji en Français</a></li>
          <li className="mb-5 hover:text-secondary"><a href="#">Accessibility</a></li>
        </ul>
      </div>

    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center  border-gray-700 pt-8 mt-8">
      <div className="flex space-x-6 mb-6 md:mb-0">
        <a href="#">
          <img src="app-store-badge.png" alt="Download on the App Store" className="h-10" />
        </a>
        <a href="#">
          <img src="google-play-badge.png" alt="Get it on Google Play" className="h-10" />
        </a>
      </div>
      <div className="flex space-x-4 text-gray-500">
        <a href="#" className="hover:text-gray-300"><img src=''  /></a>
        <a href="#" className="hover:text-gray-300"><img src=''  /></a>
        <a href="#" className="hover:text-gray-300"><img src=''  /></a>
        <a href="#" className="hover:text-gray-300"><img src=''  /></a>
        <a href="#" className="hover:text-gray-300"><img src=''  /></a>
      </div>
    </div>
    </div>
    <div className="container mx-auto text-center text-gray-600 text-xs mt-6">
      <p>All rights reserved. Google, Google Play, YouTube and other marks are trademarks of Google Inc.</p>
    </div>
  </footer>
  )
}

export default Footer