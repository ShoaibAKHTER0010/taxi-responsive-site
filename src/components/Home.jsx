import React from "react";

const Home = () => {
  return (
    <section className=" w-full  py-16"
    style={{
     backgroundImage : "url('/images/home.png')",
     backgroundPosition:'center',
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     
     
    }}>
    
      <main className="mx-auto max-w-7xl  flex flex-col gap-40 ">
        <div className="md:w-1/2 w-full pl-4 md:pl-10">
          <p className=" lg: text-[34px] xl:text-[46px]">
            <span className="text-indigo-900 font-bold font-['Plus-Jakarta Sans'] leading-[42.28px] md:leading-[67.28px]">
              Need a lift? Just call,<br /> don't stall.
            </span>
            <span className="text-violet-500  font-bold font-Plus Jakarta Sans leading-[42.28px] md:leading-[67.28px] ">
              Your city awaits.
            </span>
          </p>

          <p className=" text-gray-500 text-lg font-medium font-inter leading-[34.28px]">
            Friendly driver, comfortable ride, and no download required.<br /> Just
            one call to get you anywhere you need to go, in style and <br /> on time.
            Let us handle the traffic while you enjoy the view.
          </p>

          <div className="flex flex-col gap-10 mt-52 md:mt-4 md:flex-row  py-10  flex-wrap mx-2 md:mx-0">
            <button className=" px-8 py-3 bg-gradient-to-br from-violet-500 to-violet-500 rounded-lg justify-center items-center text-white">
              Get a free Quote
            </button>

            <button className="px-8 py-3  border-2 border-black rounded-lg justify-center items-center">
              Get a free Quote
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full"></div>
      </main>
    </section>
  );
};

export default Home;
