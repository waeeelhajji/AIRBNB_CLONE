import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/Modals/Modal'

export const metadata = {
  title: 'Wael Airbnb',
  description: 'Airbnb clone',
}

const Font = Nunito({
  subsets: ["latin"],

})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Font.className}>
        <ClientOnly >
          <Modal isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
