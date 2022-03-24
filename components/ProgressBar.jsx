import React from 'react'

export default function ProgressBar({progress}) {
  return (
    <>
    <div className='flex items-center space-x-4'>
    <div className='w-full h-2 bg-gray-300 rounded-full'>
      <div style={{width: `${progress}%`, transition: 'width .1s ease-in-out'}} className="  h-2 bg-[#007FFF] rounded-full transition ease-in-out" ></div>

    </div>
      <p className='text-white'>{progress}%</p>
    </div>
    </>
  )
}