import BookService from '@/components/bookservice'
import React, { Suspense } from 'react'
const page = () => {
  return (
    <div>
      <Suspense fallback={<div className='text-center mt-20'>Loading...</div>}>
        <BookService />
      </Suspense>
    </div>
  )
}

export default page
