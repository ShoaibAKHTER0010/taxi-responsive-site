import React from 'react'

const Happy = () => {
  return (
    <section className=" w-full  py-16">
    
    <main className="mx-auto max-w-7xl   w-full bg-[#F7F2FF]">
      <div className=' flex flex-col md:flex-row md:gap'>
        {/* fiest div */}
    <div className="md:w-1/2 w-full   pl-4 md:pl-10">
    <p className=" lg: text-[34px] xl:text-[46px] pt-4">
            <span className="text-indigo-950 font-bold font-['Plus-Jakarta Sans'] leading-[42.28px] md:leading-[67.28px]">
            Hear from Our
            </span> <br />
            <span className="text-violet-500  font-bold font-Plus Jakarta Sans leading-[42.28px] md:leading-[67.28px] ">
            Happy Riders
            </span>
            {/* card */}
          <div className='bg-white px-4 w-[431.30px] my-14 rounded-xl'>
          <p className='text-violet-500  font-bold font-Plus Jakarta Sans leading-[42.28px] md:leading-[67.28px] '>“</p>
          <p className="  ext-zinc-800 text-[17.17px] font-normal font-['Plus Jakarta Sans'] leading-[29.18px] tracking-tight">
          My business life is a whirlwind. But with TaxiDaniel, the commute isn't. Always on time, and the cars are like mobile offices. They even know my usual coffee stop! TaxiDaniel takes the stress out of getting around, letting me focus on what matters most."
          </p>
          <div className='inline-flex py-4'> <img src="../images/client.png" alt="img" /> <span className="text-indigo-950 text-[17.17px] font-bold font-['Plus Jakarta Sans'] leading-[29.03px] py-2 px-3">Adam Smith</span></div>
          </div>
          
          </p>
         
        </div>
      {/* second div */}
      <div className="md:w-1/2 w-full py-16 bg-gradient-to-br from-violet-500 to-violet-500 md:bg- ">
            <img src="../images/car.png" className='w-full' alt="img" />
        </div>
        </div>
    </main>
    </section>
  )
}

export default Happy