import Image from "next/image";
import { IoEllipsisHorizontalSharp } from "react-icons/io5"
import { LuArrowBigUpDash, LuArrowBigDownDash } from "react-icons/lu"
import { GoComment } from "react-icons/go"
import { FaRegShareFromSquare } from "react-icons/fa6"

const Post = () => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between w-full">
                <div className="flex space-x-2 items-center">
                    <Image 
                        src='/images/avatar.jpg'
                        alt='avatar'
                        width={35}
                        height={35}
                        className="avatar"
                    />
                    <p className="text-sm font-semibold text-gray-200">david.media</p>
                    <p><b>.</b></p>
                    <p className="text-xs">6 hr ago</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <button className="rounded-xl text-white text-sm bg-blue-500 p-1 px-2">
                        Join
                    </button>
                    <IoEllipsisHorizontalSharp />
                </div>
            </div>
            <h2>Title</h2>
            <Image 
                src='/images/post.jpg' 
                alt='post-image' 
                width={700} 
                height={120} 
                className="rounded-lg"
            />
            <div className="flex space-x-3">
                <div className="bg-border flex items-center space-x-2 rounded-xl p-2 text-xs font-semibold">
                    <LuArrowBigUpDash size={22} />
                    <p>30k</p>
                    <LuArrowBigDownDash size={22} />
                </div>
                <div className="bg-border flex items-center space-x-2 rounded-xl p-2 text-xs font-semibold">
                    <GoComment size={22} />
                    <p>646</p>
                </div>
                <div className="bg-border flex items-center space-x-2 rounded-xl p-2 text-xs font-semibold">
                    <FaRegShareFromSquare size={22} />
                    <p>Share</p>
                </div>
            </div>
            <div className='border-b-2 border-border my-6'/>
        </div>
    )
}

export default Post;