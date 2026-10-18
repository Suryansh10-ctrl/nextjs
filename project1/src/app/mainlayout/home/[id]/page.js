

import React from 'react'

const page = async ({params}) => {
    let { id } = await params;
  return (
    <div>This is common page for dynamic routing - {id}</div>
  )
}

export default page