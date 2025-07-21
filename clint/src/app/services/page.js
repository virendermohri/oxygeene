import Services from "@/components/Services";
import React, { Suspense } from 'react';

export const metadata = {
  title: 'Our Home Care Services in Chandigarh & Mohali | Elder Care, ICU, Nurses',
  description: "Explore CareKwik's trusted home care services in Chandigarh & Mohali. From ICU setups to home nurses, elder care to physiotherapy – verified & trained staff.",
  keywords: `
    home care services chandigarh, mohali home nursing, patient care at home, elder care mohali, icu at home chandigarh, physiotherapy at home, baby care at home chandigarh, home care packages mohali, caretaker services chandigarh, verified nurses mohali
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
