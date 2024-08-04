import React from 'react'
import data from '../constant/buysale.json'
const BuySale = () => {
  return (
    <div className="w-full mx-auto my-10">
    <div className="w-full md:w-[70%] mx-2 md:mx-14">
      <div className='flex justify-between'>
      <h1 className="font-larsseit mb-2 text-[18px]">Popular in Buy and Sell in Canada</h1>
      <p className='right-0 ms-10'>Browse All Buy and Sell</p>
      </div>
      <div className="flex gap-3 overflow-x-auto md:overflow-hidden">
        {data.data.map((item, index) => (
          <div key={index} className="relative flex-shrink-0 w-[290px] h-[200px] ">
            <div
              style={{ backgroundImage: `url(${item.src})` }}
              className="absolute inset-0 bg-cover bg-center rounded-md bg-no-repeat"
            />
              <div className="absolute inset-0  opacity-80 flex items-center justify-center rounded-lg">
                  <p className="text-white text-center mx-2 bg-postbtn p-2">
                    {item.description}
                  </p>
                </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default BuySale