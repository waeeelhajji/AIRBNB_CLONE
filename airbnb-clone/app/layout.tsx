import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar'

export const metadata = {
  title: 'Wael Airbnb',
  description: 'Airbnb clone',
}

const Font = Nunito({
  subsets : ["latin"],

})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Font.className}>
      <Navbar />
      
        {children}
      </body>
    </html>
  )
}
