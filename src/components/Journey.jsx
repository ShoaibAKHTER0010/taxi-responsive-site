import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

const Journey = () => {
  return (
    <section className=" w-full">
        <main className="mx-auto max-w-7xl  flex  md:flex-row flex-col-reverse  ">
         {/* first main div */}
         <div className="md:w-1/2 w-full">
            <img src="../images/journey.png" alt="img" />
        </div>

         {/* second main div */}
         <div className="md:w-1/2 w-full pl-4 md:pl-10 py-14">
            <h3 className="text-violet-600 text-xl font-extrabold font-['Manrope'] uppercase leading-[18px]">about us</h3>
          <p className=" lg: text-[34px] xl:text-[46px] pt-4">
            <span className="text-indigo-950 font-bold font-['Plus-Jakarta Sans'] leading-[42.28px] md:leading-[67.28px]">
            Effortless Journeys Start with 
            </span> 
            <span className="text-violet-500  font-bold font-Plus Jakarta Sans leading-[42.28px] md:leading-[67.28px] ">
            TaxiDaniel
            </span>
          </p>

          <p className=" text-gray-500 text-lg font-medium font-inter leading-[34.28px] pt-3">
          At TaxiDaniel, our mission is to deliver more than just transportation – we're here to provide  travel experiences that leave you feeling relaxed and refreshed.
          </p>

          <div className='flex flex-col leading-[46.28px] py-6'>
            <p className='inline-flex'> <span className='my-2 mr-2'><FaCircleCheck fill='#873EFC' size={30} /></span> Say goodbye to waiting anxiety</p>
            <p className='inline-flex'><span className='my-2 mr-2'><FaCircleCheck  fill='#873EFC' size={30}/> </span> No more frantic calls or missed appointments</p>
            <p className='inline-flex'><span className='my-2 mr-2'><FaCircleCheck  fill='#873EFC' size={30}/> </span> Seamless airport concierge service</p>
          </div>

        </div>
        </main>
    </section>
  )
}

export default Journey