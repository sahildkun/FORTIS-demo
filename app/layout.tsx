import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import QueryWrapper from './components/QueryWrapper'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
   
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryWrapper>
       {/* @ts-expect-error Server Component */}
        <Navbar/>
        {children}
        </QueryWrapper>
      </body>
    </html>
  )
}
