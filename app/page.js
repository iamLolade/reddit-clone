"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import { RiArrowDownSLine } from "react-icons/ri"
import { HiOutlineRectangleStack } from "react-icons/hi2"
import Post from "@/components/post"

export default function Home() {
  const [posts, setPosts] = useState(null)
  console.log('Posts: ', posts)
  useEffect(() => {
    const getAllPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
    }

    getAllPosts();

  }, [])

  return (
      <main className="flex flex-col px-16 w-auto lg:w-3/5">   
        {/* Header */}
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

        {/* Posts */}
        <div className="posts overflow-y-scroll">
          {posts?.map(post => (
            <Post 
              key={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </main>
  )
}



