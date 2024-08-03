import React from 'react';

const MobileAppPromotion = () => {
  return (
    <div>
      <div className="container bg-postbtn mx-auto w-[90%] h-[200px] mb-5 relative">
        <div className="flex justify-between items-center h-full ">
          <div className="flex-1 p-20">
            <h1 className="text-white  mb-2">
              Take Canada's #1 classifieds site with you
            </h1>
            <p className="text-white font-light text-lg">
              Buy and sell new or used items wherever you go!
            </p>
            <div className='flex'>
               <img src='/images/appstore.svg' alt='App Store' className='w-32 h-10'/>
               <img src='/images/store.svg' alt='Google Play' className='w-32 h-10 ms-5'/>
            </div>
          </div>
          <div className="absolute bottom-0 right-32">
            <img 
              src="/images/mobile.webp" 
              alt="Mobile App" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPromotion;
