import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/themeProvider'
import { AuthProvider } from '@/context/authContext'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <html suppressHydrationWarning={true} lang="en" className={`h-full antialiased`}>
            <body className="h-screen gap-5 flex flex-col">
                <Navbar />
                {children}
            </body>
        </html>
    </div>
  )
}

export default layout