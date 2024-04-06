import React from 'react'
import { GrSubtractCircle } from "react-icons/gr";
import { MdAddCircleOutline } from "react-icons/md";

const Questions = () => {
  return (
    <section className='w-full pt-16'>
    <main className='max-w-7xl mx-auto flex flex-col items-center '>
      <h2 className="text-center text-gray-900 text-4xl md:text-5xl font-bold font-Plus-Jakarta-Sans py-14">Frequently Asked <span className='text-violet-500'>Questions</span></h2>
      <div className='w-full max-w-[90%] md:max-w-[95%]  bg-slate-100 px-6 md:px-12 py-12 rounded-2xl'>
        {/* Question 1 */}
        <div className='py-3 md:py-5'>
          <h3 className="text-gray-900 text-xl  font-medium font-Plus-Jakarta-Sans leading-[32px] md:leading-[40px] flex items-center justify-between">How can I book a ride with TaxiDaniel? <GrSubtractCircle size={30} color='#6F1EF3' /></h3>
          <p className="text-gray-900 text-base md:text-lg font-light font-Plus-Jakarta-Sans leading-[24px] md:leading-[32px]">To book a ride with TaxiDaniel, Call us at [Your Phone Number], and our customer service team will assist you in arranging your ride according to your schedule and preferences</p>
        </div>
        {/* Question 2 */}
        <div className='py-3 md:py-5'>
          <h3 className="text-gray-900 text-xl  font-medium font-Plus-Jakarta-Sans leading-[32px] md:leading-[40px] flex items-center justify-between">Do you provide assistance with luggage? <MdAddCircleOutline size={30} color='#6F1EF3'/></h3>
          <p className="text-gray-900 text-base md:text-lg font-light font-Plus-Jakarta-Sans leading-[24px] md:leading-[32px]"></p>
        </div>
        {/* Question 3 */}
        <div className='py-3 md:py-5'>
          <h3 className="text-gray-900 text-xl  font-medium font-Plus-Jakarta-Sans leading-[32px] md:leading-[40px] flex items-center justify-between">Do you provide assistance with luggage? <MdAddCircleOutline size={30} color='#6F1EF3'/></h3>
          <p className="text-gray-900 text-base md:text-lg font-light font-Plus-Jakarta-Sans leading-[24px] md:leading-[32px]"></p>
        </div>
        {/* Question 4 */}
        <div className='py-3 md:py-5'>
          <h3 className="text-gray-900 text-xl  font-medium font-Plus-Jakarta-Sans leading-[32px] md:leading-[40px] flex items-center justify-between">Do you provide assistance with luggage? <MdAddCircleOutline size={30} color='#6F1EF3'/></h3>
          <p className="text-gray-900 text-base md:text-lg font-light font-Plus-Jakarta-Sans leading-[24px] md:leading-[32px]"></p>
        </div>
        {/* Question 5 */}
        <div className='py-3 md:py-5'>
          <h3 className="text-gray-900 text-xl  font-medium font-Plus-Jakarta-Sans leading-[32px] md:leading-[40px] flex items-center justify-between">Do you provide assistance with luggage? <MdAddCircleOutline size={30} color='#6F1EF3'/></h3>
          <p className="text-gray-900 text-base md:text-lg font-light font-Plus-Jakarta-Sans leading-[24px] md:leading-[32px]"></p>
        </div>
      </div>
    </main>
  </section>
  )
}
export default Questions