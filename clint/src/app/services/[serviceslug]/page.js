import Services from "@/components/Services";
const serviceMetaMap = {
  'elder-care': {
    title: 'Elder Care at Home | Senior Citizen Support & Assistance | CareKwik',
    description: 'Professional elder care services at home by CareKwik. Ensure safety, comfort, and medical assistance for seniors with our trained caregivers.',
    keywords: `
      elder care services at home,
      home care for elderly parents,
      senior citizen assistance at home,
      affordable elder care India,
      24/7 elder home care support,
      elderly medical care at home,
      compassionate senior care solutions
    `,
  },
  'mother-baby-care': {
    title: 'Mother & Baby Care at Home | Postnatal & Newborn Support | CareKwik',
    description: 'Get professional mother and baby care at home. CareKwik provides postnatal support, newborn care, and maternal health monitoring.',
    keywords: `
      mother and baby care services at home,
      postnatal care at home,
      newborn care services India,
      home care for new mothers,
      maternal health home support,
      affordable baby care at home,
      trained caregivers for mother and baby
    `,
  },
  'nursing-care': {
    title: 'Nursing Care at Home | Skilled Nursing Services | CareKwik',
    description: 'High-quality nursing care at home by trained professionals. Ideal for post-surgery recovery, elderly support, and chronic illness management.',
    keywords: `
      nursing care at home,
      home nurse for elderly,
      post-surgery nursing at home,
      chronic illness nursing support,
      skilled nursing services India,
      affordable home nursing services,
      professional home healthcare nursing
    `,
  },
  'physiotherapy': {
    title: 'Physiotherapy at Home | Personalized Physical Therapy | CareKwik',
    description: 'CareKwik offers home physiotherapy services for injury recovery, mobility improvement, and pain management — tailored for your needs.',
    keywords: `
      physiotherapy at home,
      home physical therapy services,
      elderly physiotherapy support,
      post-surgery physio at home,
      back pain physiotherapy home service,
      knee replacement physio at home,
      affordable physiotherapy services India
    `,
  },
  'doctor-consultation': {
    title: 'Doctor Consultation at Home | Experienced Doctors at Your Doorstep | CareKwik',
    description: 'Book home doctor consultations with CareKwik. Trusted doctors for general checkups, elderly care, and chronic conditions.',
    keywords: `
      doctor consultation at home,
      home visit doctor services,
      elderly doctor checkup at home,
      general physician home consultation,
      affordable doctor home visit India,
      experienced doctors at doorstep,
      home healthcare doctor service
    `,
  },
  'critical-care': {
    title: 'Critical Care at Home | ICU Setup & Monitoring | CareKwik',
    description: 'CareKwik provides critical care and ICU at home with 24/7 monitoring, ventilator support, and trained critical care nurses.',
    keywords: `
      critical care at home,
      ICU setup at home,
      home ventilator support,
      24/7 critical care services,
      post-ICU care at home,
      trained critical care nurses India,
      home intensive care services
    `,
  },
  'vaccination': {
    title: 'Vaccination at Home | Safe & Convenient Immunization | CareKwik',
    description: 'Book vaccination at home with CareKwik. Safe, convenient immunization services for all age groups delivered by trained nurses.',
    keywords: `
      vaccination at home service,
      home immunization for adults,
      child vaccination at home,
      flu shot at home India,
      covid vaccination home service,
      safe home vaccination services,
      affordable immunization at home
    `,
  },
  'lab-tests': {
    title: 'Lab Tests at Home | Sample Collection at Your Doorstep | CareKwik',
    description: 'CareKwik offers lab test sample collection at home with accurate reporting. Easy booking and affordable health checkups.',
    keywords: `
      lab tests at home,
      home sample collection service,
      blood test at home India,
      health checkup at home,
      diagnostic tests at home,
      affordable lab services home collection,
      trusted lab testing home service
    `,
  },
  'counselling': {
    title: 'Counselling Services | Mental Health Support Online & at Home | CareKwik',
    description: 'Professional counselling services from CareKwik. Get emotional, mental health, and stress management support online or at home.',
    keywords: `
      counselling services at home,
      mental health counselling online,
      stress management counselling India,
      emotional wellbeing support at home,
      affordable counselling services,
      home mental health support,
      professional therapy at home India
    `,
  }
};
export async function generateMetadata({ params }) {
  const { serviceslug } = params;
  console.log("Service Slug:", params);
  const meta = serviceMetaMap[serviceslug] || {
    title: 'Healthcare Service | CareKwik',
    description: 'Explore trusted home healthcare services with CareKwik — elder care, nursing, physiotherapy, and more.',
    keywords: 'healthcare services at home, elder care, nursing care, physiotherapy at home, medical care at home, CareKwik'
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://carekwik.com/service/${serviceslug}`,
      siteName: 'CareKwik',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}





import React, { Suspense } from 'react';
export default async function page({params}) {
  const { serviceslug } = params;
  return(
    <Suspense fallback={<div>Loading Services...</div>}>

    <Services serviceSlug={serviceslug} />;
  </Suspense>
  )
}
