import React from 'react'

const developerKeyWords = `
  Frontend,
  Backend,
  FullStack,
  Javascript,
  Python,
  Flutter,
  Ruby,
  Ruby On Rails,
  CSharp,
  C++,
  C#
`

const PredefindedListOfKeyWords = ({handleAddKeywords}) => {
  return (
    <button 
      type="button"
      onClick={() => handleAddKeywords(developerKeyWords)}
      className='bg-yellow-500 text-black p-1 rounded-md'
    >
      Developer
    </button>
  )
}

export default PredefindedListOfKeyWords