import React from 'react'
import { TbHomeMove } from 'react-icons/tb'
import { CgArrowTopRightO } from 'react-icons/cg'
import { LuGamepad2, LuMegaphone, LuShip } from 'react-icons/lu'
import { RiArrowDownSLine } from 'react-icons/ri'
import { MdOutlineSportsBaseball, MdOutlineBugReport } from 'react-icons/md'
import { BiLineChart } from 'react-icons/bi'
import { PiTelevision, PiQuestion } from 'react-icons/pi'
import { RiStarSmileLine } from 'react-icons/ri'

const Leftbar = () => {
  return (
    <div className='flex flex-col lg:pr-2 py-4 w-1/5 main border-r-2 border-border overflow-y-scroll left'>
        <div className='px-6 space-y-6'>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <TbHomeMove size={22} />
                <p className='text-md font-bold'>Home</p>
            </div>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <CgArrowTopRightO size={22} />
                <p className='text-md font-semibold'>Popular</p>
            </div>
        </div>
        <div className='border-b-2 border-border my-6'/>
        <div className='px-6 space-y-6'>
            <p className='uppercase text-sm'>Topics</p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4 cursor-pointer'>
                    <LuGamepad2 size={22} />
                    <p className='text-md font-bold'>Gaming</p>
                </div>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4 cursor-pointer'>
                    <MdOutlineSportsBaseball size={22} />
                    <p className='text-md font-bold'>Sports</p>
                </div>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4 cursor-pointer'>
                    <BiLineChart size={22} />
                    <p className='text-md font-bold'>Business</p>
                </div>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4 cursor-pointer'>
                    <MdOutlineBugReport size={22} />
                    <p className='text-md font-bold'>Crypto</p>
                </div>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4 cursor-pointer'>
                    <PiTelevision size={22} />
                    <p className='text-md font-bold'>Television</p>
                </div>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4 cursor-pointer'>
                    <RiStarSmileLine size={22} />
                    <p className='text-md font-bold'>Celebrity</p>
                </div>
                <RiArrowDownSLine size={22} />
            </div>
            <p className='text-center'>See more</p>
        </div>
        <div className='border-b-2 border-border my-6'/>
        <div className='px-6 space-y-6'>
            <p className='uppercase text-sm'>Resources</p>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <LuShip size={22} />
                <p className='text-md font-bold'>About Reddit</p>
            </div>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <LuMegaphone size={22} />
                <p className='text-md font-semibold'>Advertise</p>
            </div>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <PiQuestion size={22} />
                <p className='text-md font-semibold'>Help</p>
            </div>
        </div>
    </div>
  )
}

export default Leftbar