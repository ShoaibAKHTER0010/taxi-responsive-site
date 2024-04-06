

const Free = () => {
  return (
    <section className=" w-full  bg-[#Ffffff] md:px-0 px-2 md:py-[120px]  py-6"
   >
    
      <main className=" max-w-7xl mx-auto  flex flex-col md:flex-row md:gap-10 gap-6  px-[55px] py-[44px] rounded-[24px]"  style={{
     backgroundImage : "url('/images/car-2.png')",
     backgroundPosition:'center',
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover', 
    }}>
        {/* first div */}
        <div className="md:w-1/2 w-full ">
        <p className="text-violet-100  font-medium font-['Plus Jakarta Sans'] leading-[42.28px] md:leading-[67.28px]">
            <h2 className="text-white text-[42px] font-extrabold font-['Plus Jakarta Sans'] leading-[42.28px] md:leading-[67.28px]">Get Your Free TaxiDaniel Quote Today! </h2>
            Skip the planning headaches, whether it's a whirlwind airport run or a romantic wedding escape, we'll create a stress-free experience that exceeds your expectations. Request a free quote now and discover the TaxiDaniel difference!
        </p>
        {/* contact part-1 */}
        <div className='flex flex-row py-10 gap-8'>

           <div className='flex flex-col gap-4'>
           <div className=''>
                <p className="text-violet-100 text-sm font-normal font-['Plus Jakarta Sans']">Phone Number</p>
                <p className="text-white text-lg font-semibold font-['Plus Jakarta Sans']">+3214764460</p>
            </div>
            <div className=''>
                <p className="text-violet-100 text-sm font-normal font-['Plus Jakarta Sans']">Address</p>
                <p className="text-white text-lg font-semibold font-['Plus Jakarta Sans']">Stationstraat Turnhout</p>
            </div>
           </div>
        
        {/* contact part-2 */}
        

           {/* div one */}
            <div className='flex flex-col gap-4'>
            <div className=''>
            <p className="text-violet-100 text-sm font-normal font-['Plus Jakarta Sans']">Email</p>
                <p className="text-white text-lg font-semibold font-['Plus Jakarta Sans']">info@taxidaniel.be</p>
            </div>
            <div className=''>
            <p className="text-violet-100 text-sm font-normal font-['Plus Jakarta Sans']">Billing Address</p>
                <p className="text-white text-lg font-semibold font-['Plus Jakarta Sans']">Steenweg op Mol 79
2300 <br /> Turnhout</p>
            </div>
            </div>

        </div>
        </div>
        {/* form */}
        {/* second div */}
        <div className="md:w-1/2 w-full bg-white rounded-2xl py-10 px-6 max-w-[600px]">
         <h2 className="text-center text-gray-900 text-[28.43px] font-bold font-['Plus Jakarta Sans'] capitalize ">Get a free <span className="text-violet-600 text-[28.43px] font-bold font-['Plus Jakarta Sans'] capitalize">quote</span> </h2>

         <label htmlFor="FULL NAME" className="block  text-gray-900 text-lg font-medium font-['Plus Jakarta Sans'] leading-snug py-4">FULL NAME</label>
         <input type="text" name="name" placeholder='Shoaib Akhter' className="bg-slate-100 text-gray-900 text-opacity-50 text-lg font-normal font-['Plus Jakarta Sans'] leading-snug rounded-lg py-4 px-3 w-full" />

         <label htmlFor="FULL NAME" className="block text-gray-900 text-lg font-medium font-['Plus Jakarta Sans'] leading-snug py-4">Email</label>
         <input type="email" name="name" placeholder='Shoaib0010@gmail.com' className="bg-slate-100 text-gray-900 text-opacity-50 text-lg font-normal font-['Plus Jakarta Sans'] leading-snug  rounded-lg py-4 px-3 w-full"  />

         <label htmlFor="FULL NAME" className="block text-gray-900 text-lg font-medium font-['Plus Jakarta Sans'] leading-snug py-4">Contact</label>
         <input type="number" name="name" placeholder='03-1223-332'className="bg-slate-100 text-gray-900 text-opacity-50 text-lg font-normal font-['Plus Jakarta Sans'] leading-snug rounded-lg py-4 px-3 w-full" />
         {/* button */}
         <button className=" flex w-full my-6 px-8 py-3 bg-gradient-to-br from-violet-500 to-violet-500 rounded-lg justify-center items-center text-white">
              Get a free Quote
            </button>
        </div>
      </main>
    </section>
  )
}

export default Free