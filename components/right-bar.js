import Image from "next/image"

const Rightbar = () => {
    return (
        <div className="rounded-xl bg-black w-auto mx-2 my-4 p-4 flex flex-col h-1/2">
            <p className="uppercase text-sm font-semibold">Popular communities</p>
            <div className="flex flex-col my-4 space-y-3">
                <div className='flex items-center space-x-2'>
                    <Image
                        src='/images/commune.png'
                        alt='avatar'
                        width={35}
                        height={35}
                        className="avatar"
                    />
                    <div>
                        <p className='text-sm font-bold'>Sports</p>
                        <p className="text-xs">222,250 members</p>
                    </div>
                </div> 
                <div className='flex items-center space-x-2'>
                    <Image
                        src='/images/commune.png'
                        alt='avatar'
                        width={35}
                        height={35}
                        className="avatar"
                    />
                    <div>
                        <p className='text-sm font-bold'>Business</p>
                        <p className="text-xs">222,250 members</p>
                    </div>
                </div> 
                <div className='flex items-center space-x-2'>
                    <Image
                        src='/images/commune.png'
                        alt='avatar'
                        width={35}
                        height={35}
                        className="avatar"
                    />
                    <div>
                        <p className='text-sm font-bold'>Crypto</p>
                        <p className="text-xs">222,250 members</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Rightbar