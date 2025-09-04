import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 md:px-10 lg:px-20'>
    <div className='md:w-1/2 flex flex-col items-start justifly-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
      {/*-------left side-------*/}
      <p className='text-3*1 md:text-4*1 lg:text-5*1 text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
        Book Appointment <br/> With Trusted Docters
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-White text-sm font-light'>
            <img  className='w-28'src={assets.group_profiles} alt=''/>
            <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/>schedule your appointment hassle-free.
            </p>
        </div>
        <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-auto hover:scale-105 transition-all duration-300'>
            Book appointment<img className='w-3' src={assets.arrow_icon} alt=''/>
        </a>

        </div>
      <div className='md:w-1/2 relative'> 
    {/*-------Right side-------*/}
    <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt=''/>
     </div>

    </div>
  )
}

export default Header