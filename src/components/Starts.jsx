import React from 'react'

const Starts = () => {
  return (
    <section className=" w-full py-16">
    <main className="mx-auto max-w-7xl  flex flex-col-reverse md:flex-row gap-2 md:gap-16  pl-4 md:pl-10">
     {/* first main div */}
     <div className="md:w-1/2 w-full pt-16 md:pt-0 ">
        <img src="../images/drive.PNG" alt="img" />
    </div>

     {/* second main div */}
     <div className="md:w-1/2 w-full ">
        <h3 className="text-violet-600 text-xl font-extrabold font-['Manrope'] uppercase leading-[18px]">Ride it</h3>
      <p className=" lg: text-[34px] xl:text-[46px] pt-4">
        <span className="text-indigo-950 font-bold font-['Plus-Jakarta Sans'] leading-[42.28px] md:leading-[67.28px] ">
        Your {""}
        <span className="text-violet-500  font-bold font-Plus Jakarta Sans leading-[42.28px] md:leading-[67.28px] ">
        Smooth Ride <br />
        </span>
          Starts with TaxiDaniel </span> 
      </p>

      <p className=" text-gray-500 text-lg font-medium font-inter leading-[32.28px] pt-3">
      Glide into glamorous events, catch your flight with a breeze, or explore hidden city gems. TaxiDaniel is your 24/7 companion for stylish rides, expert drivers, and clean, comfortable cars. 
We handle the traffic, you enjoy the journey. 
      </p>

      <div  className="flex flex-col mt-40 md:mt-4 md:flex-row  py-10  flex-wrap mx-1.5 md:mx-0 ">

<button className=" px-8 py-5 bg-gradient-to-br from-violet-500 to-violet-800 rounded-lg justify-center items-center text-white">
  Get a free Quote
</button>

</div>

      </div>
    </main>
  </section>
  )
}

export default Starts;