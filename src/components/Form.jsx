import React, { useState } from "react";
import Button from "./Button";

const Form = () => {
  return (
    <div className="container  mx-auto">
      <div className="header  my-4">
       <span className="text-[15px] font-bold hover:text-postbtn hover:underline">Autos et véhicules </span>  <span className="text-formtext text-[15px] font-normal">›autos et camions à Canada</span>
      </div>
      <div className=" bg-white rounded border border-borderColor">
        <form>
          <div className="flex flex-col md:flex-row">
            <div className="p-10 ">
              <div className="mb-4">
                <label className="block text-formtext text-[16px] font-normal mb-2">
                  Condition:
                </label>
                <div className="flex w-[100%]  border border-borderColor rounded">
                  <button className="w-[33%] py-2 border-r border-borderColor">
                    Tout
                  </button>
                  <button className="w-[33%] py-2  border-r border-borderColor">
                    Neuf
                  </button>
                  <button className="w-[33%] py-2 border-0">D'occasion</button>
                </div>
              </div>
              <div className="mb-4 flex">
                <div>
                <label className="  block text-formtext text-[16px] font-normal mb-2">
                  Prix:
                </label>
                <input
                    type="text"
                    placeholder="min"
                    className="px-0 md:px-4 py-2 border mr-3 border-borderColor rounded"
                  />
                </div>
                <div className="mt-2 md:mt-8">
                <span className="px-4 py-2 text-formtext">à</span>
                  <input
                    type="text"
                    placeholder="max"
                    className="px-4 py-2 ml-0 border md:ml-2 border-borderColor rounded"
                  />
                </div>
                </div>
              <div className="mt-10">
                <span className="flex items-center justify-center text-formtext">
                  Canada
                </span>
              </div>
            </div>
            <div className="p-10 ">
                <div className=" border-0 md:border-r border-borderColor w-full md:w-[400px] ">
              <label className="block text-formtext text-[16px] font-normal mb-2">
                Marque :
              </label>
              <div className="mb-4 w-full">
                <select
                  id="model"
                  className=" w-[410px] md:w-[350px]  py-2 border border-borderColor rounded "
                >
                  <option className="text-formtext">Toutes</option>
                  {/* Add other options here */}
                </select>
              </div>
              <label className="block text-formtext text-[16px] font-normal mb-2">
              Modèle :
              </label>
              <div className="mb-4 w-full">
                <select
                  id="model"
                  className=" w-[410px] md:w-[350px] py-2 border border-borderColor rounded "
                >
                  <option className="text-formtext">Toutes</option>
                  {/* Add other options here */}
                </select>
              </div>
              <button className="py-4 w-[410px] md:w-[350px] bg-postbtn text-white rounded">Voir 223 840 véhicules</button>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
