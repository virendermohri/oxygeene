import BookService from '@/components/bookservice'
import React, { Suspense } from 'react'
export const metadata = {
  title: "Book Caretaker | ICU, Elder Care, Baby Care at Home – CareKwik",
  description: "Book trained and verified home caretakers for Elder Care, ICU at Home, Baby Care & more. Safe, trusted and affordable services in your city.",
  keywords: [
    "Home care booking",
    "ICU at home",
    "Elder care Chandigarh",
    "Caretaker at home Mohali",
    "Baby care services at home",
    "Nurse for home",
    "CareKwik booking"
  ],
  robots: "index, follow",
  authors: [{ name: "CareKwik Team" }],
  openGraph: {
    title: "Book Trusted Home Care Services | CareKwik",
    description: "Find and book trusted caretakers at home – ICU, elder care, baby care. Quick, verified and secure service by CareKwik.",
    url: "https://carekwik.com/book",
    siteName: "CareKwik",
    images: [
      {
        url: "https://carekwik.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};
const page = () => {
  // app/book/page.tsx or app/book/layout.tsx


  return (
    <div>
      <Suspense fallback={<div className='text-center mt-20'>Loading...</div>}>
        <BookService />
        <section className="max-w-5xl md:text-lg mx-auto md:mt-10 mt-5 mb-10  p-4  text-gray-600">
          <h2 className="text-2xl font-semibold mb-5">Home Care Services in Chandigarh, Mohali & Panchkula</h2>
          <p>
            CareKwik offers trusted at-home healthcare services including Elder Care, ICU at Home, Baby Care, and Physiotherapy. Whether you&apos;re in <strong>Chandigarh</strong>, <strong>Mohali</strong>, <strong>Panchkula</strong> or <strong>Ambala</strong>, book trained and verified caretakers today. We ensure 100% safe, affordable, and flexible home care.
          </p>
          <p className="mt-2">
            Popular Services:
            <ul className="list-disc  ml-5 mt-1">
              <li>Elder Care at Home in Mohali</li>
              <li>ICU Setup at Home in Chandigarh</li>
              <li>Mother Baby Care in Panchkula</li>
              <li>Trained Physiotherapists in Ambala</li>
            </ul>
          </p>
        </section>
        <div className="max-w-5xl flex flex-col gap-10 md:text-lg  mx-auto mb-20  p-4  text-gray-600">

        <h3 className="text-2xl font-medium mt-6">FAQs – Home Care Services</h3>
        <details className='cursor-pointer'>
          <summary className='text-black'>Do you provide elder care in Chandigarh?</summary>
          <p>Yes, CareKwik provides elder care with trained caretakers in Chandigarh and nearby areas.</p>
        </details>
        <details className='cursor-pointer'>
          <summary className='text-black'>Can I book ICU at home in Mohali?</summary>
          <p>Absolutely. We set up ICU at home services including nurse, monitor, and equipment in Mohali.</p>
        </details>
        <details className='cursor-pointer'>
          <summary className='text-black'>How to book baby care services in Panchkula?</summary>
          <p>You can book baby care services online through our website or app. We have trained professionals available in Panchkula.</p> 
        </details>
        <details className='cursor-pointer'>
          <summary className='text-black'>Are your physiotherapists qualified?</summary>
          <p>Yes, all our physiotherapists are certified and experienced in providing home care services.</p> 
        </details>
        <details className='cursor-pointer'>
          <summary className='text-black'>What areas do you cover for home care services?</summary>
          <p>We cover Chandigarh, Mohali, Panchkula, Ambala and surrounding regions. Our services are expanding across India.</p>
        </details>
        <details className='cursor-pointer'>
          <summary className='text-black'>How can I trust the caretakers?</summary>
          <p>All our caretakers are thoroughly vetted, trained, and verified to ensure the highest quality of care.</p>
        </details>
        <details className='cursor-pointer'>
          <summary className='text-black'>What is the booking process?</summary>
          <p>You can book services online through our website or mobile app. Just select your service, location, and preferred time.</p>
        </details>

        </div>

      </Suspense>
    </div>
  )
}

export default page
