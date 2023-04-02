import { Nunito } from 'next/font/google'

import './globals.css'

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
      <body className={Font.className}>{children}</body>
    </html>
  )
}
