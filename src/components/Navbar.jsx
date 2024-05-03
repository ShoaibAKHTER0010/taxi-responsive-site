import React, { useState } from 'react'
import Button from '../components/Navbtn';

const Navbar = () => {
    let Links =[
      {name:"About us",link:"/"},
      {name:"Contact us",link:"/"},
      {name:"Benefits",link:"/"},
     
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-16 px-4'>
      <div className="text-zinc-800 text-3xl font-bold font-['Inter'] ">TaxiDaniel</div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

<div className=''>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-o pl-9 pr-10 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className="text-xl md:my-0 my-7 text-zinc-800 md:text-base font-medium font-['Plus Jakarta Sans] px-8">
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button>
          Get Started
        </Button>
      </ul>
      </div>

      </div>
    </div>
  )
}

export default Navbar