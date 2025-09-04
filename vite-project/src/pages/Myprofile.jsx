
import React, { useState } from 'react';
import { assets } from '../assets/assets.js'; 

function Myprofile() {
  const [userData, setUserData] = useState({
    name: "Rohani",
    image: assets.profile_pic,
    email: "rohanisharma456@gmail.com",
    phone: '+1 123 456 7890',
    Address: {
      line1: "v.po takka ,una",
      line2: "himachal,174303"
    },
    gender: "Female",
    dob: '2005-01-06'
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded ' src={userData.image} alt='' />
      {
        isEdit
          ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
              type="text"
              value={userData.name}
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
            />
          : <p className='font -medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
        isEdit
          ? <input
              type="text"
              value={userData.phone}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
            />
          : <p>{userData.phone}</p>
      }
      <p>Address</p>
      {
        isEdit
        ?<p>
          <input onChange={(e) => setUserData(prev => ({...prev,Address: {...prev.Address,line1: e.target.value}}))} value={userData.Address.line1} type="text"/>
          <br/>
          <input onChange={(e) => setUserData(prev => ({...prev,Address: {...prev.Address,line2: e.target.value}}))} value={userData.Address.line2} type="text"/>
        </p>
        :<p> 
          {userData.Address.line1}
          <br />
          {userData.Address.line2}
        </p>
      }

        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {
        isEdit
          ? <select onChange={(e) => setUserData(prev => ({...prev ,gender:e.target.value}))} value={userData.gender}>
            <option value='Male'>Male</option>
            <option value="Female">Female</option>
          </select>
          : <p>{userData.gender}</p>
      }
      <p>Date of Birth</p>
      {
        isEdit
        ?<inpur type ="date" onChange ={(e) => setUserData(prev => ({...prev ,dob:e.target.value}))} value={userData.dob}/>
        :<p>{userData.dob}</p>

      }
        </div>
      </div>
      {
        isEdit
        ?<button onClick={() => setIsEdit(false)}>Save information</button>
        :<button onClick={() => setIsEdit(true)}>Edit</button>
      }
    </div>
  );
}

export default Myprofile;
