import Image from "next/image"

const Navbar = () => {
    return (
        <nav className='h-1/5 px-16 py-4 flex items-center justify-between border-b-2 border-border'>
            <div className="flex items-center space-x-2">
                <div className="bg-white rounded-full">
                    <Image src="/images/reddit-removebg-preview.png" alt='logo' width={35} height={35} />
                </div>
                <p className="text-white text-lg">reddit</p>
                {/* <Image src="/images/reddit.svg" alt='logo' width={100} height={20} /> */}
            </div>
            <div >
                <input 
                    className="w-96 h-8 rounded-2xl bg-border p-5" 
                    placeholder="Search Reddit"
                />
            </div>
            <div className="space-x-4">
                <button className="text-white p-2 text-sm bg-border rounded-2xl w-24">
                    Get app
                </button>
                <button className="text-white p-2 text-sm bg-primary rounded-2xl w-16">
                    Log in
                </button>
            </div>
        </nav>
    )
}

export default Navbar