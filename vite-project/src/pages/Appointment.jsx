import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

function Appointment() {
const { docId } = useParams()
const { doctors ,currencySymbol} = useContext(AppContext)
const daysOfWeek = ['SUN', 'MON','TUE','WED','THU','FRI','SAT',]


const [ docInfo,setDocInfo ] = useState(null)
const [docSlots, setDocSlots] = useState([])
const [slotIndex, setSlotIndex] = useState(0)
const [slotTime, setSlotTime] = useState('')

const fetchDocInfo = async () => {
  const docInfo = doctors.find(doc => doc._id === docId) 
  setDocInfo(docInfo)
  
}
 const getAvailableSlots = async () => {
  setDocSlots([])
  // getting current date
  let today = new Date()
  for(let i = 0; i<7; i++){
    //getting date with index
    let currentDate = new Date(today)
    currentDate.setDate(today.getDate() + i) 
    //setting end time of the date with index
    let endTime = new Date()
    endTime.setDate(today.getDate()+i)
    endTime.setHours(21,0,0,0)
    // setting Hours
    if(today.getDate() === currentDate.getDate()){
      currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
      currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30:0)
    }else{
      currentDate.setHours(10)
      currentDate.setMinutes(0)
    }
    let timeSlots = []
    while(currentDate<endTime){
      let formattedTime = currentDate.toLocaleTimeString([],{ hour:'2-digit', mimute: '2-digit' })
    
    //add slots to array
    timeSlots.push({
      datetime: new Date(currentDate),
      time:formattedTime
    })
    //Increment current time by 30 minutes
    currentDate.setMinutes(currentDate.getMinutes() +30)
  }
  setDocSlots(prev => ([...prev, timeSlots]))

  }
  
 }
useEffect(()=>{
  fetchDocInfo()
},[doctors,docId])
useEffect(() =>{
  getAvailableSlots()

},[docInfo])
useEffect(() =>{
  console.log(docSlots)

},[docSlots])


  return docInfo && (
    <div>
      {/*------Doctors Details--------- */}
      <div className='flex flex-col sm:flex-row gap-4'>

        <div>
          <img className='bg-blue-500 w-full sm:max-w-72 rounded-lg' src= {docInfo.image} alt=''/>
        </div>
        {/*-------- Doctors info :name ,degree,experience */}
        <div className='flex-1 border border-gray-400 p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex item-center gap-2 text-2*1 font-medium text-gray-900'>{docInfo.name} <img  className='w-5'src ={assets.verified_icon} alt=''/>
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/*--- Doctors about ------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About<img src= {assets.info_icon} alt=''/></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
         <p className='text-gray-500 font-medium mt-4'>
            Appointment fee:<span className ='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p> 

        </div>

      </div>
      {/*----Booking---*/}
     <div className='sm:ml-72 sn:pl-4 mt-4 font-medium text-gray-700'>
      <p>Booking slots</p>
      <div className='flex gap-3 item-center w-full overflows-x-scroll mt-4'>
        {
          docSlots.length && docSlots.map((item,index) =>(
           <div
  key={index}
  className={`flex flex-col items-center justify-center text-center py-3 px-4 min-w-16 rounded-full cursor-pointer ${
    slotIndex === index
      ? "bg-blue-500 text-white"
      : "border border-gray-400 text-black"
  }`}
  onClick={() => setSlotIndex(index)}
>
             <p className="text-sm font-medium">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p className="text-xs">{item[0] && item[0].datetime.getDate()}</p>
              </div>
         ))
        }
      </div>
      <div className='flex item-center gap-3 w-full overflow-x-scroll mt-4'>
        {docSlots.length && docSlots[slotIndex].map((item,index)=> (
          <p  onClick ={() =>setSlotTime(item.time)}className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer  ${item.time === slotTime ? "bg-blue-500 text-white" :"text-gray-400 border border-gray-300"}`} key = {index}>
            {item.time.toLowerCase()}
          </p>
        ))}
      </div>
      <button className='bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
     </div>
     {/*Listing Related Doctors */}
     <RelatedDoctors docId={docId} speciality={ docInfo.speciality}/> 
</div>
  )
}

export default Appointment