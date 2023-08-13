import Image from "next/image"
import { RiArrowDownSLine } from "react-icons/ri"
import { HiOutlineRectangleStack } from "react-icons/hi"

export default function Home() {
  return (
      <main className="flex px-16 w-3/5">   
        <div className='flex justify-between border-b-2 border-border my-6 w-full h-10'>
          <div className="flex items-center space-x-4 w-full">
            <Image src='/images/robot.png' alt='robot' width={35} height={35}/>
            <button className="text-sm text-white">
              Create a post
            </button>
          </div>
          <div className="flex items-center space-x-2"> 
            <div className='flex items-center space-x-1'>
                <p className='text-md font-bold'>Hot</p>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center space-x-1'>
                <p className='text-md font-bold'>Everywhere</p>
                <RiArrowDownSLine size={22} />
            </div>
            <div className='flex items-center space-x-1'>
                <HiOutlineRectangleStack size={22} />
                <RiArrowDownSLine size={22} />
            </div>
          </div>
        </div>
      </main>
  )
}
