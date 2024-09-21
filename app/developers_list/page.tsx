import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'DevCALT | dev list',
  description: 'This is a dev list of Devcalt who listed themselves as looking for a partner with their requirements',
}
const page = () => {
  return (
    <div className='page-main-div'>Developers List</div>
  )
}

export default page