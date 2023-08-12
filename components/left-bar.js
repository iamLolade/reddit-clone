import React from 'react'
import { TbHomeMove } from 'react-icons/tb'
import { CgArrowTopRightO } from 'react-icons/cg'

const Leftbar = () => {
  return (
    <div className='flex flex-col pr-2 py-4 w-1/5 main border-r-2 border-border'>
        <div className='px-6'>
            <div className='flex items-center space-x-4'>
                <TbHomeMove size={22} />
                <p className='text-md font-bold'>Home</p>
            </div>
            <div className='flex items-center space-x-4 my-6'>
                <CgArrowTopRightO size={22} />
                <p className='text-md font-semibold'>Popular</p>
            </div>
        </div>
        <div className='border-b-2 border-border'/>
    </div>
  )
}

export default Leftbar