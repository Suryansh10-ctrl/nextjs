import ProtectedRoutes from '@/components/ProtectedRoutes'
import React from 'react'

const page = () => {
  return (
    <ProtectedRoutes>
      <div>
        <h1>this is home page</h1>
      </div>
    </ProtectedRoutes>
  )
}

export default page