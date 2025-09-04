
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-14 my-10 mt-40 text-sm'> 
        {/*----- Left section -----*/ }
        <div>
          <img src={assets.logo} alt='' className="mb-4 w-40"/>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae provident,
            doloremque, quos temporibus architecto asperiores commodi similique, itaque vero omnis.
            Distinctio, repudiandae aut deleniti consectetur voluptatem quod beatae explicabo
          </p>
        </div>

        {/*----- Center section -----*/ }
        <div>
          <p className=" text-ul font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/*----- Right section -----*/ }
        <div>
          <p className=" text-ul font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-304-456-75890</li>
            <li>sharmarohanii@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr/>
      <p className="text-sm py-5 text-center">
        Copyright 2024@ Prescripto - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
