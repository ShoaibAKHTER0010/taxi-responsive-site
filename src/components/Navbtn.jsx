import React from 'react'

const Button = (props) => {
  return (
    <button className=' text-white font-[Poppins] p-2.5 bg-gradient-to-br from-violet-500 to-violet-500 rounded-[10.04px] hover:bg-indigo-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button