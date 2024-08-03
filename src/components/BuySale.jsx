import React from 'react'
import data from '../constant/buysale.json'
const BuySale = () => {
  return (
    <div>
    <div className='flex justify-between w-[72%] '>
  <h1 className="font-larsseit mb-2 ms-[8%] text-[18px]">Popular in Buy and Sell in Canada</h1>
  <p className='right-0 ms-10'>Browse All Buy and Sell</p>
  </div>
  <div className="container md:w-[65%] w-full ms-0 md:ms-[5%]">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-center h-full">
      {data.data.map((item, index) => (
        <div key={index} className="relative flex flex-col">
          <div className="md:relative w-[100%] md:w-[290px] h-[200px] bg-no-repeat bg-cover bg-center rounded-lg">
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
  )
}

export default BuySale