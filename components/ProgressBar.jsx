import React from 'react'

export default function ProgressBar({progress, errors}) {
  const isError = errors.length
  return (
    <>
    <div className='flex items-center space-x-2 pt-2 pr-1'>
      <div className='w-full h-1 bg-gray-300 rounded-full'>
        <div 
          className="h-1 rounded-full transition ease-in-out"
          style={{
            width: `${progress}%`,
            backgroundColor: isError ? "#DC2626" : "#007FFF",
            transition: 'width .1s ease-in-out'
          }}
        />
      </div>
      <p className='text-white text-[0.75rem] leading-[0rem] -mt-[0.30rem]'>{ isError ? "failed" : progress + "%"}</p>
    </div>
      <p className='text-gray-500 italic text-[0.75rem] pt-2'>{isError ? errors[0].code : ""}</p>
    
    </>
  )
}