"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import { RiArrowDownSLine } from "react-icons/ri"
import { HiOutlineRectangleStack } from "react-icons/hi2"
import Post from "@/components/post"
import Link from "next/link"
import { Oval } from 'react-loader-spinner';

export default function Home() {
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  // console.log('Posts: ', posts)
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false);
      }
    }

    getAllPosts();

  }, [])

  return (
      <main className="flex flex-col px-1 lg:px-16 sm:w-screen md:w-auto lg:w-3/5">   
        {/* Header */}
        <div className='flex justify-between border-b-2 border-border my-6 w-full h-10'>
          <div className="flex items-center space-x-4 w-full">
            <Image src='/images/robot.png' alt='robot' width={35} height={35}/>
            <Link href={'/create-post'}> 
              <button className="text-sm text-white">
                Create a post
              </button>
            </Link>
          </div>
          <div className="flex items-center space-x-2 head"> 
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
          {isLoading ? 
          <div className='flex justify-center items-center'>
            <Oval type="Puff" color="#141C1E" secondaryColor="#fff" height={40} width={40} />
          </div> :
          <div>
            {posts?.map(post => (
              <Post 
                key={post.id}
                title={post.title}
                body={post.body}
              />
            ))}
          </div>
          }
        </div>
      </main>
  )
}


