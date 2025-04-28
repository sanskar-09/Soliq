import React from 'react'
import Footer from './Footer';

const Dashboard = () => {
  const arr = [
    {
      id: 4,
      title: "TOTAL EARNING",
      val: 71042.07,
      unit: "EUR"
    },
    {
      id: 2,
      title: "PV SYSTEMS",
      val: "8/12",
      unit: "Online"
    },
    {
      id: 3,
      title: "TOTAL PRODUCTION",
      val: 1321.65,
      unit: "MWh"
    },
    {
      id: 1,
      title: "POWER",
      val: 5.4,
      unit: "kW"
    },

  ];
  return (
    <>
      <div className='flex flex-col '>
        <div className='flex justify-start mt-4 mb-4 '>
          <div className=' cursor-pointer border-r-[1px] border-black pl-10 pr-5'>PV SYSTEM OVERVIEW</div>
          <div className=' cursor-pointer border-r-[1px] border-black pl-10 pr-5'>PV SYSTEM COMPARISON</div>
          <div className=' cursor-pointer pl-10'>MESSSAGE CENTER</div>
        </div>
        <div className='flex gap-x-10 mb-5 ml-5'>
          {arr.map((item, index) => (
            <div className='flex flex-col border-[1px] border-black h-[100px]    items-center hover:bg-[#24d4e5] cursor-pointer hover:text-white w-[230px]' key={index}>
              <h3 className='font-semibold mt-1'>{item.title}</h3>
              <h4 className='ml-3 mt-2'>{item.val}</h4>
              <h5 className='ml-3 mt-2'>{item.unit}</h5>
            </div>

          ))}
        </div>
      </div>
      <Footer /></>

  )
}

export default Dashboard
