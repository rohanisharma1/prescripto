import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ( {speciality,docId }) => {

     const { doctors } = useContext(AppContext)
     const navigate = useNavigate()

     const [relDoc,setRelDocs] = useState([])
     useEffect(() =>{
        if(doctors.length >0 && speciality){
            const doctorsData = doctors.filter((doc)=> doc.speciality === speciality && doc._id !== docId)
            setRelDocs(doctorsData)
        }
    },[doctors,speciality,docId])
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Simply browse through our extensive list of trusted doctors
      </p>

      {/* Grid Layout - 5 columns on large screens */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
           <div key={item._id || index}
           onClick={() =>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}}
           className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition"
          >
            <img
              className="bg-blue-50 w-full h-40 object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className=" text-grey-900 text-lg font-semibold mt-2">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button onClick={()=> { navigate('/doctors');scrollTo(0,0) }} className="mt-6 bg-blue-50 text-grey-600 px-12 py-3 rounded-full hover:bg-blue-600 transition">
        More
      </button>
    </div>

    
  )
}

export default RelatedDoctors
