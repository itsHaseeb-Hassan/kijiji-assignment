import React from 'react'
import data from '../constant/autosCanada.json'
const AutosCanada = () => {
  return (
           <div className='flex flex-col md:flex-row' >
    <div className=' w-[70%] ms-[5%] '>
        <div className='flex justify-between'>
  <h1 className="font-larsseit mb-2  text-[18px]">Popular in Buy and Sell in Canada</h1>
  <p className='me-10'>Browse All Autos</p>
  </div>
  <div className="container  w-full ms-0  mb-28">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center h-full">
      {data.data.map((item, index) => (
        <div key={index} className="relative flex flex-col">
          <div className="md:relative w-[100%] md:w-[200px] h-[150px] bg-no-repeat bg-cover bg-center rounded-lg">
            <div
              style={{ backgroundImage: `url(${item.src})` }}
              className="absolute inset-0 bg-cover bg-center rounded-lg"
            />
            <div className="absolute inset-0  opacity-80 flex items-center justify-center rounded-lg">
              <p className="text-white text-center mx-2 bg-postbtn p-2">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
</div>
</div>
<div className='w-[20%] h-[200px] rounded-md shadow-xl bg-white ms-4 p-4'>
          {/* White box content here */}
          <h2 className='text-[18px] text-[#3e4153] font-larsseit font-normal'>Popular on Kijiji</h2>
          <div className='  border-b border-[#ECECEE] flex justify-between py-2'>
          <p className='text-[16px] text-[#1477d4] font-larsseit font-normal'>Free Stuff</p>
          <img src="/images/vector.svg" />
          </div>
          <div className='  border-b border-[#ECECEE] flex justify-between py-2'>
          <p className='text-[16px] text-[#1477d4] font-larsseit font-normal'>Swap / Trade</p>
          <img src="/images/vector.svg" />
          </div>
          <div className='  border-b border-[#ECECEE] flex justify-between py-2'>
          <p className='text-[16px] text-[#1477d4] font-larsseit font-normal'>Wanted Ads</p>
          <img src="/images/vector.svg" />
          </div>
        
        </div>
    </div>
  )
}

export default AutosCanada