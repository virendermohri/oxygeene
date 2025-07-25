import RentAndBuyMedical from '@/components/RentAndBuyMedical'
import React from 'react'
export const metadata = {
  title: 'Medical Equipment for Rent & Sale at Home | CareKwik',
  description:
    'Get medical equipment on rent or sale at home in Chandigarh, Mohali & Panchkula. Wheelchairs, hospital beds, oxygen concentrators, BiPAP/CPAP machines & more delivered to your doorstep.',
  keywords: [
    'medical equipment at home',
    'oxygen concentrator rent',
    'hospital bed rental',
    'wheelchair on rent',
    'bipap machine for home use',
    'medical equipment in Chandigarh',
    'medical equipment Mohali',
    'medical equipment Panchkula',
    'home healthcare equipment',
    'rent medical equipment carekwik',
  ],
  alternates: {
    canonical: 'https://carekwik.com/medical-equipment',
  },
};

const page = () => {
  
  return (
    <div>
    <RentAndBuyMedical/>  
    </div>
  )
}

export default page
