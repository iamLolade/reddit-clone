import Navbar from '@/components/main-nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Leftbar from '@/components/left-bar'
import Rightbar from '@/components/right-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reddit',
  description: 'Reddit clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-1 bg-background w-screen text-text">
          <Navbar />
          <div className="flex px-2 lg:px-8">
            <Leftbar />
            {children}
            <Rightbar />
          </div>
        </div>
      </body>
    </html>
  )
}
