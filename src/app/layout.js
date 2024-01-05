import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/header&footer/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}</body>
        <h1 className='text-[red] text-center text-6xl'>Footer</h1>
        
    </html>
  )
}