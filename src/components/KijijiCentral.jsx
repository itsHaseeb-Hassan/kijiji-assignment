import React from 'react'
import data from '../constant/kijijicentral.json'

const KijijiCentral = () => {
  return (
    <>
      <h1 className="font-larsseit mb-2 ms-[5%]">Kijiji Central</h1>
      <div className="container w-[65%] ms-[5%] mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-center h-full">
          {data.data.map((item, index) => (
            <div key={index} className="relative flex flex-col">
              <div className="relative w-[290px] h-[200px] bg-no-repeat bg-cover bg-center rounded-lg">
                <div
                  style={{ backgroundImage: `url(${item.src})` }}
                  className="absolute inset-0 bg-cover bg-center rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
                <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white w-full py-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default KijijiCentral
