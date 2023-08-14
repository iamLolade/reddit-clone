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
            <div className='flex items-center space-x-4'>
                <TbHomeMove size={22} />
                <p className='text-md font-bold'>Home</p>
            </div>
            <div className='flex items-center space-x-4'>
                <CgArrowTopRightO size={22} />
                <p className='text-md font-semibold'>Popular</p>
            </div>
        </div>
        <div className='border-b-2 border-border my-6'/>
        <div className='px-6 space-y-6'>
            <p className='uppercase text-sm'>Topics</p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <LuGamepad2 size={22} />
                    <p className='text-md font-bold'>Gaming</p>
                </div>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <MdOutlineSportsBaseball size={22} />
                    <p className='text-md font-bold'>Sports</p>
                </div>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <BiLineChart size={22} />
                    <p className='text-md font-bold'>Business</p>
                </div>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <MdOutlineBugReport size={22} />
                    <p className='text-md font-bold'>Crypto</p>
                </div>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <PiTelevision size={22} />
                    <p className='text-md font-bold'>Television</p>
                </div>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
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
            <div className='flex items-center space-x-4'>
                <LuShip size={22} />
                <p className='text-md font-bold'>About Reddit</p>
            </div>
            <div className='flex items-center space-x-4'>
                <LuMegaphone size={22} />
                <p className='text-md font-semibold'>Advertise</p>
            </div>
            <div className='flex items-center space-x-4'>
                <PiQuestion size={22} />
                <p className='text-md font-semibold'>Help</p>
            </div>
        </div>
    </div>
  )
}

export default Leftbar