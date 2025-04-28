import Services from "@/components/Services";
import React, { Suspense } from 'react';

// ✅ SEO Metadata
// export const metadata = {
//   title: "Home Healthcare Services | Trained Caretakers at Your Doorstep | CareKwik",
//   description: "Find verified nurses, elder care, physiotherapists, and home caretakers near you. CareKwik delivers professional healthcare services instantly at your home across India.",
//   keywords: "Home healthcare services, nurse at home, elder care India, physiotherapy services, CareKwik caretakers, healthcare at home, best homecare India, trusted homecare services, book caretaker online, post surgery care at home, home nursing services, physiotherapy at home, doctor consultation at home, vaccination services, lab tests at home, counselling services home care near me, icu care at home, critical care services, home healthcare solutions, trained nurses near me, physiotherapists near me, elder care services, home healthcare providers",
//   openGraph: {
//     title: "Best Home Healthcare Services in India | CareKwik",
//     description: "Need home healthcare? Hire trained nurses, caretakers, and physiotherapists easily with CareKwik. Trusted by families across India for safe, affordable care.",
//     url: "https://carekwik.com/services",
//     type: "website",
//   },
//   robots: "index, follow",
// };

// ✅ Main Page
export default async function ServicesPage() {

  return (
    <Suspense fallback={<div>Loading Services...</div>}>
      <Services  />
    </Suspense>
  );
}
