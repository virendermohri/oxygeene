import RentAndBuyMedical from '@/components/RentAndBuyMedical'
import Script from 'next/script';
import React from 'react'
export const metadata = {
  title: 'Rent Medical Equipment at Home | Chandigarh, Mohali – CareKwik',
  description: 'Rent or buy medical equipment at home in Chandigarh, Mohali & Panchkula. Beds, wheelchairs, oxygen machines & more. Delivered by CareKwik.',
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
    'suction machine at home',
    'patient monitor rental',
  ],
  alternates: {
    canonical: 'https://carekwik.com/medical-equipment',
  },
};


const page = () => {
  <>
    <Script id="ld-medical-equipment" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalEquipmentStore",
        "name": "CareKwik - Medical Equipment for Rent & Sale",
        "url": "https://carekwik.com/medical-equipment",
        "logo": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
        "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
        "description": "Get medical equipment on rent or sale at home in Chandigarh, Mohali & Panchkula. Wheelchairs, hospital beds, oxygen concentrators, BiPAP/CPAP machines & more delivered to your doorstep.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chandigarh",
          "addressRegion": "Chandigarh",
          "postalCode": "160036",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8307190216",
          "contactType": "Customer Service"
        },
        "areaServed": ["Chandigarh", "Mohali", "Panchkula"],
        "openingHours": "Mo-Su 09:00-20:00",
        "priceRange": "₹₹₹",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://carekwik.com/medical-equipment"
        },
      })
      }
    </Script>
    <Script id="ld-faq-medical-equipment" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What types of medical equipment can I rent or buy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can rent or buy oxygen concentrators, hospital beds, wheelchairs, BiPAP/CPAP machines, and other medical equipment."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can I get medical equipment delivered?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer same-day delivery for most medical equipment in Chandigarh, Mohali, and Panchkula."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a rental agreement for medical equipment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide a rental agreement that outlines the terms and conditions for renting medical equipment."
            }
          }
        ]
      })}
    </Script>
  </>
  return (
    <div>
      <RentAndBuyMedical />
    </div>
  )
}

export default page
