import React from 'react';

const MobileAppPromotion = () => {
  return (
    <div>
      <div className="container bg-postbtn mx-auto   md:w-[90%]  h-[400px] md:h[200px] md:h-[300px] mb-5 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-full">
          <div className="flex flex-col justify-center p-5 md:p-10 lg:p-20">
            <h1 className="text-white text-[22px] font-larsseit  mb-2">
              Take Canada's #1 classifieds site with you
            </h1>
            <p className="text-white font-larsseit text-[16px] mb-4">
              Buy and sell new or used items wherever you go!
            </p>
            <div className='flex flex-row mt-2'>
              <img src='/images/appstore.svg' alt='App Store' className='w-28 h-8 md:w-32 md:h-10 border border-white rounded-md'/>
              <img src='/images/store.svg' alt='Google Play' className='w-28 h-8 md:w-32 md:h-10  md:mt-0 md:ms-5 border border-white rounded-md'/>
            </div>
          </div>
          <div className="relative md:absolute right-10 md:bottom-0 md:right-20 md:w-1/2 lg:w-1/3">
            <img 
              src="/images/mobile.webp" 
              alt="Mobile App" 
              className="w-full h-[200px] object-contain  md:object-cover md:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPromotion;
