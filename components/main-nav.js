import Image from "next/image"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    return (
        <nav className='h-1/5 px-4 lg:px-16 py-4 flex items-center justify-between border-b-2 border-border'>
            <Link href={'/'}>
                <div className="flex items-center space-x-2">
                    <GiHamburgerMenu className='ham' size={22}/>
                    <div className="bg-white rounded-full">
                        <Image src="/images/reddit-removebg-preview.png" alt='logo' width={35} height={35} />
                    </div>
                    <p className="text-white text-lg brand">reddit</p>
                </div>
            </Link>
            <div>
                <input 
                    className="w-auto lg:w-96 h-8 rounded-2xl bg-border p-5" 
                    placeholder="Search Reddit"
                />
            </div>
            <div className="space-x-4 brand">
                <button className="text-white p-2 text-sm bg-border rounded-2xl w-auto lg:w-24">
                    Get app
                </button>
                <button className="text-white p-2 text-sm bg-primary rounded-2xl w-auto lg:w-16">
                    Log in
                </button>
            </div>
        </nav>
    )
}

export default Navbar