import './globals.css'
import { Poppins } from '@next/font/google'
import Search from './Search'
import Link from 'next/link'


const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${poppins.className} mx-32`}>
        <nav className='flex justify-between'>
          <Search />
          <div className='p-5 m-5 inline-block'>
            <Link href="/" className='p-4 my-5 bg-teal-500 rounded-lg'>Home</Link>
          </div>
        </nav>
        {children}
        </body>
    </html>
  )
}
