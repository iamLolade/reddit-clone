"use client"

import React, { useState } from 'react';
import { LuGamepad2, LuMegaphone, LuShip } from 'react-icons/lu'
import { RiArrowDownSLine } from 'react-icons/ri'
import { MdOutlineSportsBaseball, MdOutlineBugReport } from 'react-icons/md'
import { BiLineChart } from 'react-icons/bi'
import { PiTelevision, PiQuestion } from 'react-icons/pi'
import { RiStarSmileLine } from 'react-icons/ri'
import { otherUrl, primaryUrl } from '@/plugins/url'

const Leftbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const otherindex = 9

    const handleHover = (index) => {
        setIsHovered(true);
        setActiveIndex(index)
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };

    return (
        <div className='flex flex-col lg:pr-2 py-4 w-1/5 main border-r-2 border-border overflow-y-scroll left'>
            <div className='px-6 space-y-6'>
                {primaryUrl?.map((url, index) => (
                    <div 
                        key={index}
                        className={`flex p-0 m-0 items-center space-x-4 cursor-pointer ${activeIndex == index && isHovered ? 'text-white' : ''}`}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={handleHoverEnd}
                    >
                        {url?.icon}
                        <p className='text-md font-bold'>{url?.title}</p>
                    </div>
                ))}
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
                {otherUrl?.map((url, id) => (
                    <div 
                        key={id}
                        className={`flex items-center space-x-4 cursor-pointer`}
                        // onMouseEnter={() => handleHover(id)}
                        // onMouseLeave={handleHoverEnd}
                    >
                        {url?.icon}
                        <p className='text-md font-bold'>{url?.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leftbar



