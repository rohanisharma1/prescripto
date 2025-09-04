

import React ,{useState} from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const[showMenu, setShowMenu] = useState(false)
  const[token,setToken] = useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
     
      <NavLink  onClick ={ () =>('/')} className="w-44 cursor-pointer">
        <img src={assets.logo} alt="Prescripto Logo" />
      </NavLink>

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        {/* Link for HOME */}
        <div className="group">
          <NavLink to="/">
            <li className='py-4'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden group-hover:block' />
          </NavLink>
          </div>

       
        <div className="group">
          <NavLink to="/doctors">
            <li className='py-4'>ALL DOCTORS</li>
          </NavLink>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden group-hover:block' />
        </div>

        
        <div className="group">
          <NavLink to="/about">
            <li className='py-4'>ABOUT</li>
          </NavLink>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden group-hover:block' />
        </div>

       
        <div className="group">
          <NavLink to="/contact">
            <li className='py-4'>CONTACT</li>
          </NavLink>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden group-hover:block' />
        </div>
      </ul>

      
      <div className='flex items-center gap-4'> 
        
        {
          token
          ? <div className='flex items-center gap-2 cursor-pionter group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt=''/>
            <img  className='w-2.5 'src={assets.dropdown_icon} alt=''/>
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'> 
              <p  onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
              <p onClick={() => navigate('my-appiontment')} className='hover:text-black cursor-pionter'> My Appointment</p>
              <p  onClick= {() => setToken(false)}className='hover:text-black cursor-pointer'> Logout</p>
            </div>
          </div>
        </div>
          : <button onClick={()=>navigate('/login')}>Create account</button>
        }
        
        </div>
    </div>
  );
};

export default Navbar;
