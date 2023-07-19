import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className=' text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-red-500'>
        {" "}
        {text}
        {" "}
    </span>
  )
}

export default HighlightText


