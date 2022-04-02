import React from 'react'

function FileHeader({file, onDelete}) {
  return (
    <div className="flex items-center justify-between text-white">
      <p className='text-[1rem] leading-[1.5rem] truncate'>{file.name}</p>
      <button 
        className=''
        onClick={() => onDelete(file)}
        >
          <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </button>
    </div>
  )
}

export default FileHeader