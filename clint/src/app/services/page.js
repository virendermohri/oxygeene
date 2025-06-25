import Services from "@/components/Services";
import React, { Suspense } from 'react';

export const metadata = {
  title: 'Our Healthcare Services | CareKwik',
  description: 'Explore a wide range of healthcare services at CareKwik including elder care, nursing care, physiotherapy, doctor consultation, ICU at home, lab tests, and more — all at your doorstep.',
  keywords: `
    healthcare services at home,
    elder care services at home,
    nursing care for elderly at home,
    home physiotherapy service,
    doctor consultation at home,
    ICU setup at home,
    critical care at home,
    baby care services at home,
    mother and baby care at home,
    vaccination at home,
    lab tests home sample collection,
    counselling services online,
    home medical equipment rental,
    trusted healthcare services in India,
    affordable home healthcare services,
    CareKwik healthcare solutions
  `,
  openGraph: {
    title: 'Our Healthcare Services | CareKwik',
    description: 'Find professional healthcare services like elder care, mother-baby care, ICU at home, physiotherapy, and more — delivered to your home by CareKwik.',
    url: 'https://carekwik.com/services',
    siteName: 'CareKwik',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Healthcare Services | CareKwik',
    description: 'Discover CareKwik’s full range of home healthcare services: elder care, nursing, physiotherapy, lab tests, doctor consultation, and more.',
  }
};


// ✅ Main Page
export default async function ServicesPage() {

  return (
    <Suspense fallback={<div>Loading Services...</div>}>
      <Services  />
    </Suspense>
  );
}
