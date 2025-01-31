import React from 'react'

const FixedTitle = ({title}) => {
  return (
    <div className='flex items-center gap-6 font-Roboto'>
        <span className='w-18 h-0.5 border-2 border-primary '></span>
        <p className='text-primary font-bold text-base tracking-[2px]'>{title}</p>
    </div>
  )
}

export default FixedTitle