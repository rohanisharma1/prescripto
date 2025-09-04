/*import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
    

  const { speciality } = useParams()
  const {filterDoc,setfilterDoc } = useState([])
  const { doctors } = useContext(AppContext)
  
  const applyFilter = () =>{
    if(speciality){
      setfilterDoc(doctors.filter(doc => doc.speciality === speciality ))
 }else{
  setfilterDoc(doctors)
 }
}
useEffect( () =>{
  applyFilter()

},[doctors,speciality])
  
  
  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
       </div>
       </div>
       {
        filterDoc.map((item, index) => (
           <div key={item._id || index}
           onClick={() => navigate(`/appiontment/${item._id}`)}
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
        ))
       }

      </div>
  )
}

export default <Doctors>*/
import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const navigate = useNavigate()
  
  const [filterDoc, setfilterDoc] = useState([])
  const { doctors } = useContext(AppContext)
  
  const applyFilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setfilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor ${speciality === "General physician"? "bg-indigo-100 text-black" : ""} '}>General physician</p>
          <p onClick={()=> speciality === 'Gynecologist'? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist"?  "bg-indigo-100 text-black" : ""}'}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist'? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist"? "bg-indigo-100 text-black" : ""}'}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians'? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians"?"bg-indigo-100 text-black" : ""}'}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist'? navigate('/doctors') : navigate('/doctors/Neurologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer${speciality === "Neurologist"? "bg-indigo-100 text-black" : ""}'}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist'? navigate('/doctors') : navigate('/doctors/Gastroenterologist') } className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist"? "bg-indigo-100 text-black" : ""}'}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'> 
       {
        filterDoc.map((item, index) => (
          <div key={item._id || index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:-translate-y-1 bg-white shadow-sm"
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
        ))
      }
      </div>
      </div>
    </div>
  )
}

export default Doctors

