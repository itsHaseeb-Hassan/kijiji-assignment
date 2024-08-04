import React from 'react'
import data from '../constant/dealer.json'
const Dealer = () => {
  return (
    <div>
      <div className="container w-full mx-auto   mb-16 ">
        <h1 className="font-larsseit mb-2   text-[18px]">Kijiji Central</h1>
        <div className="grid grid-cols-1 mx-5 md:grid-cols-3 md:mx-auto gap-5 items-center h-full">
          {data.data.map((item, index) => (
            <div key={index} className="relative flex flex-col">
              <div className="md:relative w-[100%] h-[266px] bg-no-repeat bg-cover bg-center ">
                <div
                  style={{ backgroundImage: `url(${item.src})` }}
                  className="absolute inset-0 bg-cover bg-center rounded"
                />
                <div className=' absolute bottom-0 left-5 flex justify-between items-center w-full mb-2'>
                <p className="max-w-[320px] text-white font-larsseit text-[15px] font-bold">
                  {item.description}
                </p>
                <img
                  src={item.logo}
                  className='absolute bottom-0 right-7 '
                  alt="Logo"
                />
                  </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dealer