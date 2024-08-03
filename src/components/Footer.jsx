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

    </div>
   <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 mx-auto ">
    <div className='flex justify-around w-[100%]  h-[150px]'>
        <img src='/images/apple.svg'   />
        <img src='/images/playstore.svg'  />
        </div>
       <div className='flex  w-[100%]  h-[150px] items-center justify-center'>
       <div className='bg-footerIcon hover:bg-hoverfb text-white w-25 h-25 p-3 rounded-full flex items-center justify-center '>
  <img src="/images/facebook.svg" className='w-5 h-5' alt="Facebook Logo" />
  
</div>
<div className='bg-footerIcon w-25 h-25 p-3 rounded-full flex items-center justify-center ms-4 hover:bg-hoverinsta' >
  <img src="/images/instagram.svg" className='w-5 h-5 text-white' alt="Instagram Logo" />
</div>
<div className='bg-footerIcon w-25 h-25 p-3 rounded-full flex items-center justify-center ms-4 hover:bg-hovertwitter'>
  <img src="/images/twitter.svg" className='w-5 h-5' alt="Twitter Logo" />
</div>
<div className='bg-footerIcon w-25 h-25 p-3 rounded-full flex items-center justify-center ms-4 hover:bg-headingHero'>
  <img src="/images/dont.svg" className='w-5 h-5' alt="dont know Logo" />
</div>
<div className='bg-footerIcon w-25 h-25 p-3 rounded-full flex items-center justify-center ms-4 hover:bg-hoveryoutube'>
  <img src="/images/youtube.svg" className='w-5 h-5' alt="youtube Logo" />
</div> 
       </div>
   </div>
    <div className="container mx-auto text-center text-footerHeading text-md mt-6">
      <p>All rights reserved. Google, Google Play, YouTube and other marks are trademarks of Google Inc.</p>
    </div>
  </footer>
  )
}

export default Footer