import BookService from '@/components/bookservice'
import React from 'react'
import { Suspense } from 'react'
const page = () => {
  return (
    <div>
     <Suspense fallback={<div>Loading Services...</div>}>

      <BookService/>
      </Suspense> 
    </div>
  )
}

export default page
