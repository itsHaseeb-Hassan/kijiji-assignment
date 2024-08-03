import React from 'react'
import data from '../constant/kijijicentral.json'

const KijijiCentral = () => {
  return (
    <>
      <h1 className="font-larsseit mb-2 ms-[5%] text-[18px]">Kijiji Central</h1>
      <div className="container md:w-[65%] w-full  ms-0  md:ms-[5%] mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-center h-full">
          {data.data.map((item, index) => (
            <div key={index} className="relative flex flex-col">
              <div className="md:relative w-[100%] md:w-[290px] h-[200px] bg-no-repeat bg-cover bg-center rounded-lg">
                <div
                  style={{ backgroundImage: `url(${item.src})` }}
                  className="absolute inset-0 bg-cover bg-center rounded-lg"
                />
                <div className=" inset-0 bg-postbtn opacity-80 rounded-lg flex justify-between" >
                <p className="absolute bottom-0 font-larsseit text-[16px] ms-44 md:ms-28 transform -translate-x-1/2 text-white w-[70%] py-2 z-10">
                  {item.description}
                </p>
                <img
                  src={item.logo}
                  className='absolute bottom-0 right-0 w-5 h-5 transform -translate-x-1/2 -translate-y-1/2 z-0'
                  alt="Logo"
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default KijijiCentral
