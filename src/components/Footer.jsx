import React from 'react';

const Footer = () => {
  return (
   <section className='w-full  pt-36'>
    <footer className='mx-w-7xl bg-[#181443] '>
        {/* main div */}
        <div className='flex flex-col md:flex-row mx-w-7xl px-20 py-10 justify-between'>
        {/* first */}
        <div>
            <h2 className="text-gray-200 text-2xl font-semibold font-['Inter']">TaxiDaneil</h2>
            <p className="text-violet-100 text-xs font-medium font-['Plus Jakarta Sans'] pt-2">We provide the best transportation service</p>
        </div>
        {/* second */}
        <div className="text-white text-xs font-normal font-['Plus Jakarta Sans'] pt-6">
            <ul className='flex flex-row list-none space-x-10 pr-14'>
                <li>Aboub</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Get a Quote</li>
                </ul>
        </div>
        </div>
         {/* border */}
         <div className=' border-t border-[#8E47FF] max-w-7xl mx-20 flex justify-between py-10'>
        <p className="text-violet-100 text-xs font-normal font-['Plus Jakarta Sans']">Copyright © 2023 TaxiDaneil. All Rights Reserved</p>
        <p className="text-violet-100 text-xs font-normal font-['Plus Jakarta Sans'] ml-16 md:ml-0">All Right Reserve</p>
</div>
    </footer>
   </section>
  );
};

export default Footer;