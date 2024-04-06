import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { TbDeviceIpadHorizontalDollar } from "react-icons/tb";
import { BsLuggage } from "react-icons/bs";
import { TbPhoneCheck } from "react-icons/tb";

const Craft = () => {
  return (
    <section className=" w-full  py-16">
    
    <main className="mx-auto max-w-7xl  flex flex-col md:flex-row md:gap  ">
      {/* first main div */}
      <div className="md:w-1/2 w-full pl-4 md:pl-10 py-14 ">
          <h3 className="text-violet-600 text-xl font-extrabold font-['Manrope'] uppercase leading-[18px] ">benefits</h3>
        <p className=" lg: text-[34px] xl:text-[46px] pt-4">
          <span className="text-indigo-950 font-bold font-['Plus-Jakarta Sans'] leading-[42.28px] md:leading-[67.28px] ">
          Let TaxiDaniel Craft <br /> Your  <span className="text-violet-500  font-bold font-Plus Jakarta Sans leading-[42.28px] md:leading-[67.28px]">
          Unforgettable <br />
          </span>
          Experience 
          </span> 
         
        </p>

        <p className=" text-gray-500 text-lg font-medium font-inter leading-[32.28px] pt-3">
        From Airport Bliss to Hidden Gem <br /> Adventures, We Curate Your City Escapes
        </p>

      </div>
      {/* second main div */}
      <div className="md:w-1/2 w-full  flex-col px-4 md:pl-10 ">
        {/* first div */}
          <div className='flex flex-col md:flex-row pt-16 gap-10 md:gap-5 '>
            {/* child one */}
            <div className='flex flex-col  items-start px-3 py-3 shadow-lg md:shadow-none'>
            <div className='bg-slate-300 h-16 w-16 flex justify-center items-center rounded-full'><IoTimeOutline size={36} /></div><br />
            <p className="text-center text-gray-900 text-[21.19px] font-semibold font-['Plus Jakarta Sans'] leading-normal tracking-wide">24/7 Availability</p>
            <p className="text-gray-900 text-opacity-80 text-[15.01px] font-normal font-['Plus Jakarta Sans'] leading-[25.12px]">Our  drivers are ready to assist, ensuring 
a seamless experience from the moment <br /> theypick you up until drop-off.</p>
            </div>
            {/* child two */}
            <div className='flex flex-col justify-center items-start px-3 py-3 shadow-lg md:shadow-none'>
            <div className='bg-slate-300 h-16 w-16 flex justify-center items-center rounded-full'><TbDeviceIpadHorizontalDollar size={30} /></div><br />
            <p className="text-center text-gray-900 text-[21.19px] font-semibold font-['Plus Jakarta Sans'] leading-normal tracking-wide">Flexible Payments</p>
            <p className="text-gray-900 text-opacity-80 text-[15.01px] font-normal font-['Plus Jakarta Sans'] leading-[25.12px]">Our  drivers are ready to assist, ensuring 
a seamless experience from the moment <br /> theypick you up until drop-off.</p>
            </div>
          </div>

          {/* second div */}
          <div className='flex flex-col md:flex-row pt-4 md:pt-16 gap-10 md:gap-5 '>
            {/* child one */}
            <div className='flex flex-col justify-center items-start pt-5 px-3 py-3 shadow-lg md:shadow-none'>
            <div className='bg-slate-300 h-16 w-16 flex justify-center items-center rounded-full'><BsLuggage size={30} /></div><br />
            <p className="text-center text-gray-900 text-[21.19px] font-semibold font-['Plus Jakarta Sans'] leading-normal tracking-wide">Luggage Help</p>
            <p className="text-gray-900 text-opacity-80 text-[15.01px] font-normal font-['Plus Jakarta Sans'] leading-[25.12px]">Our  drivers are ready to assist, ensuring 
a seamless experience from the moment <br /> theypick you up until drop-off.</p>
            </div>
            {/* child two */}
            <div className='flex flex-col justify-center items-start px-3 py-3 shadow-lg md:shadow-none'>
            <div className='bg-slate-300 h-16 w-16 flex justify-center items-center rounded-full'><TbPhoneCheck size={30} /></div><br />
            <p className="text-center text-gray-900 text-[21.19px] font-semibold font-['Plus Jakarta Sans'] leading-normal tracking-wide">Easy Booking</p>
            <p className="text-gray-900 text-opacity-80 text-[15.01px] font-normal font-['Plus Jakarta Sans'] leading-[25.12px]">Enjoy a streamlined booking process,allowing you to focus on your journey, not the logistics</p>
            </div>
          </div>
      </div>
    </main>
  </section>
  )
}

export default Craft