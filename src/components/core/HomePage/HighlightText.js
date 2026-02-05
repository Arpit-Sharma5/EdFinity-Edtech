import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='bg-gradient-to-r from-[#C4B5FD] via-[#E9D5FF] to-[#FBCFE8]

    text-transparent bg-clip-text font-bold'>
        {" "}
        {text}
        
    </span>
  )
}

export default HighlightText
