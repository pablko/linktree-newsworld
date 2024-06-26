import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Linktree Clone',
  description: 'Generated by Pablo Colqui',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <link rel='icon' href='https://cdn-icons-png.flaticon.com/16/10781/10781248.png' sizes="any"/>
      <body className='bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
