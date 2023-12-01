
import { NavBar } from '../components/navigation/NavBar'

import './globals.css'

export const metadata = {
  title: 'Llamaste Store',
  description: "Liam Gavina's project for DMIT2008.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className="h-full bg-gray-100 bg-opacity-50">
      <NavBar />
     {children}
     </body>
    </html>
  )
}
