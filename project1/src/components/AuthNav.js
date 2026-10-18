import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex gap-4">
          <Link href={"/authlayout/login"}>Login</Link>
          <Link href={"/authlayout/register"}>Register</Link>
    </div>
  )
}

export default Navbar