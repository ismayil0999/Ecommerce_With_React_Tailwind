import React, { useRef, useEffect } from "react";

export default function Mostseller() {
  return (
    <div  className="flex bg-[#1976D2] pb-[50px] pt-[100px]">
      <div className="w-[100%] pl-4  shrink-0 h-auto gap-4 flex items-center flex-col md:flex-row justify-between">
        <div className="flex flex-col h-full gap-4">
          <div className="flex flex-col items-center justify-start rotate-[-10deg]">
            <h1 className="text-2xl w-[180px] font-bold box-border pl-4 pr-4 bg-black text-white p-2">New Arrival</h1>
            <h1 className="bg-yellow-300 text-4xl text-shadow-lg font-bold p-2 w-[300px] text-center text-black">Headphones</h1>
            <h1 className="text-white text-xl font-bold">Today's Super Offer</h1>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-8xl text-white font-bold">25%</h1>
          </div>
        </div>
        <div className="md:pr-16">
          <img src="./headphone2.png" alt="" className="w-[300px] h-[300px]"></img>
        </div>
      </div>
    </div>
  )
}