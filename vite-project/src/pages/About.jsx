import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className='text-center text-2xl pt-10 text-gray-500'>
      <div>
        <p>ABOUT <span className='text-gray-700 font-medium'>Us</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img  className='w-full md:max-w-[360px]' src={assets.about_image} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescripto, your trusted partner in managing healthcare. We're here to simplify your health journey and make it as seamless as possible.</p>
          <p>Prescripto is your all-in-one healthcare platform for booking appointments, managing prescriptions, and connecting with doctors, so you can take control of your health with confidence.</p>
          <b className='text-gray-800'> Our Vision</b>
          <p>Our vision is to empower individuals to take control of their health by providing a seamless, integrated platform that simplifies every step of the healthcare journey, from finding a trusted doctor to managing prescriptions and appointments. We aim to make quality healthcare accessible and effortless for everyone.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
     </div>
     <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10  md:px-16 py-8 sn:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Efficiency:</b>
        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>

      </div>
      <div className='border px-10  md:px-16 py-8 sn:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
         <b>Convenience:</b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>


      </div>
      <div className='border px-10  md:px-16 py-8 sn:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
         <b>Personalization:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your of health.</p>

      </div>
     </div>
    </div>
  )
}

export default About