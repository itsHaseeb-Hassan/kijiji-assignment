import React from "react";
import data from "../constant/kijijicentral.json";

const KijijiCentral = () => {
  return (
    <>
      <div className="w-full mx-auto my-10">
        <div className="w-full md:w-[70%] mx-2 md:mx-14">
          <h1 className="font-larsseit mb-2 text-[18px]">Kijiji Central</h1>
          <div className="flex gap-3 overflow-x-auto md:overflow-hidden">
            {data.data.map((item, index) => (
              <div key={index} className="relative flex-shrink-0 w-[290px] h-[200px] ">
                <div
                  style={{ backgroundImage: `url(${item.src})` }}
                  className="absolute inset-0 bg-cover bg-center rounded-md bg-no-repeat"
                />
                <div className="absolute bottom-0 left-5 flex items-center w-full mb-2">
                  <p className="max-w-[200px] text-white font-larsseit text-[15px] font-bold">
                    {item.description}
                  </p>
                  <img
                    src={item.logo}
                    className="absolute bottom-0 right-7 w-[40px] h-[40px]"
                    alt="Logo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default KijijiCentral;
