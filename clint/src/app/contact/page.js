import React from 'react'

const page = () => {
  return (
    <div className='max-w-5xl mx-auto mt-10 px-4 md:mt-20 mb-10 md:mb-20'>
     <h1 className='text-2xl font-bold mb-3'>Contact Us</h1>
     <p className='text-gray-600 mb-10'>We're here to help. Reach out to us with any questions or concerns.</p>
     <p className='font-medium text-xl'>Contact information</p>
     <div className="p-5 border-t  border-b border-gray-200 mt-5 flex -items-center justify-between">
        <p className='text-gray-600 '>Phone</p>
        <p className='w-1/2'>+91 8307190216</p>
     </div>
     <div className="p-5 border-gray-200  flex -items-center justify-between">
        <p className='text-gray-600 '>Email</p>
        <p className='w-1/2'>getcarekwik@gmail.com</p>
     </div>
     <div className="p-5 border-t  border-b border-gray-200  flex -items-center justify-between">
        <p className='text-gray-600 '>Address</p>
        <p className='w-1/2'>Kurukshetra, Haryana In 136135</p>
     </div>
     <p className='font-bold text-2xl mt-10 mb-10'>Send Us a Message</p>
        <form className='flex font-semibold flex-col  gap-5'>
            <label className='text-gray-600'>Your Name</label>
            <input type="text" placeholder='Enter your name' className=' bg-gray-200  p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <label className='text-gray-600'>Your Email</label>  
            <input type="email" placeholder='Enter your email' className='bg-gray-200  p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <label className='text-gray-600'>Subject</label>
            <input type="text" placeholder='Enter subject' className='bg-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <label className='text-gray-600'> Your Message</label>
            <textarea placeholder='Enter your Message' className='bg-gray-200  p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32'></textarea>
            <button type='submit ' className='md:w-[10vw] cursor-pointer   bg-[#455fd3] text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200'>Send Message</button>
        </form>
    </div>
  )
}

export default page
