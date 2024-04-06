import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailLock } from "react-icons/md";

const Cards = () => {
  return (
    <section className='  -mt-0 md:-mt-20  bg-white  rounded-xl pt-16 md:pt-0'>
        <main className='flex flex-col md:flex-row '>
        {/* card one */}
        <div className='flex flex-col gap-10 p-5 shadow-xl border-r-2 border-slate-200 rounded-lg'>
            <div className='flex gap-20'><h1 className='text-[24px] font-semibold text-[#0A1834]'>TaxiDaniel Location</h1>
            <span className='pt-3'><MdArrowOutward /></span>
            </div>

            <div className='flex gap-4'>
            <span className=' bg-slate-200 py-3 px-3 rounded-lg'><TiLocationOutline /></span>
            <div><p className='font-semibold text-[12px]'>Address</p>
            <p className='font-semibold text-[16px]'>Stationstraat Turnhout</p></div>
            </div>
        </div>
        {/* card two */}
        <div className='flex flex-col gap-10  p-5 shadow-xl border-r-2 border-slate-200'>
            <div className='flex gap-20'><h1 className='text-[24px] font-semibold text-[#0A1834]'>Connect us with</h1>
            <span className='pt-3'><MdArrowOutward /></span>
            </div>

            <div className='flex gap-4'>
            <span className=' bg-slate-200 py-3 px-3 rounded-lg'><BsFillTelephoneFill /></span>
            <div><p className='font-semibold text-[12px]'>Telephone</p>
            <p className='font-semibold text-[16px]'>+3214764460</p></div>
            </div>
        </div>
        {/* card three */}
        <div className='flex flex-col gap-10 p-5 shadow-xl'>
            <div className='flex gap-20'><h1 className='text-[24px] font-semibold text-[#0A1834]'>Contact us via Email</h1>
            <span className='pt-3'><MdArrowOutward /></span>
            </div>

            <div className='flex gap-4'>
            <span className=' bg-slate-200 py-3 px-3 rounded-lg'><MdOutlineMailLock /></span>
            <div><p className='font-semibold text-[12px]'>Email</p>
            <p className='font-semibold text-[16px]'>info@taxidaniel.be</p></div>
            </div>
        </div>
        </main>
    </section>
  )
}

export default Cards