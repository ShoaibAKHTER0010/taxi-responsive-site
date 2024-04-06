import React from 'react'

const Ride = () => {
  return (
    <section className=" w-full  py-16">
    
      <main className="mx-auto max-w-7xl  flex flex-col md:flex-row md:gap  ">
        {/* first main div */}
        <div className="md:w-1/2 w-full pl-4 md:pl-10 py-14">
            <h3 className="text-violet-600 text-xl font-extrabold font-['Manrope'] uppercase leading-[18px] tracking-wide">why choose us</h3>
          <p className=" lg: text-[34px] xl:text-[46px] pt-4">
            <span className="text-indigo-950 font-bold font-['Plus-Jakarta Sans'] leading-[42.28px] md:leading-[67.28px]">
            Why TaxiDaniel Wins the 
            </span> <br />
            <span className="text-violet-500  font-bold font-Plus Jakarta Sans leading-[42.28px] md:leading-[67.28px] ">
            Ride-Hailing Race
            </span>
          </p>

          <p className=" text-gray-500 text-lg font-medium font-inter leading-[34.28px] pt-3">
          At TaxiDaniel, our mission is to deliver more than just transportation – we're here to provide  travel experiences that leave you feeling relaxed and refreshed At TaxiDaniel, our mission is to deliver more than just transportation – we're here to provide  travel experiences that leave you feeling relaxed and refreshed..
          </p>

          <div  className="flex flex-col mt-40 md:mt-4 md:flex-row  py-10  flex-wrap mx-1.5 md:mx-0 ">

            <button className=" px-8 py-5 bg-gradient-to-br from-violet-500 to-violet-500 rounded-lg justify-center items-center text-white">
              Get a free Quote
            </button>

          </div>
        </div>
        {/* second main div */}
        <div className="md:w-1/2 w-full">
            <img src="../images/ride.png" alt="img" />
        </div>
      </main>
    </section>
  );
};

export default Ride