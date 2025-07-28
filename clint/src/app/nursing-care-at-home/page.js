import BookService from '@/components/bookservice';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
export const metadata = {
  title: 'Home Nursing Care in Chandigarh, Mohali & Panchkula | Trained Nurses',
  description:
    'Hire trained nurses for post-surgery care, injections, wound dressing, and elderly nursing at home in Chandigarh, Mohali & Panchkula. Trusted by 500+ families.',
  keywords: [
    'nursing care at home Chandigarh',
    'home nurse Mohali',
    'patient care Panchkula',
    'ICU trained nurse at home',
    'post operative care at home',
    'elder care nurse Chandigarh',
    'wound dressing at home',
    'female nurse for injection Mohali',
    'home healthcare Panchkula',
  ],
  alternates: {
    canonical: 'https://carekwik.com/nursing-care-at-home',
  },
};

export default function NursingCareAtHome() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <Script id="ld-localbusiness" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Nursing Care at Home",
                    "@id": "https://carekwik.com/nursing-care-at-home#carekwik",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "url": "https://carekwik.com/nursing-care-at-home",
                    "telephone": "+91-8307190216",
                    "priceRange": "₹₹",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chandigarh",
                        "addressRegion": "Chandigarh",
                        "postalCode": "160036",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-20:00",
                    "description": "Trained nursing staff for injections, dressing, post-operative care, ICU support at home. Available across Chandigarh, Mohali, and Panchkula.",
                    "areaServed": ["Chandigarh", "Mohali", "Panchkula"]
                })}
            </Script>

            <Script id="ld-faq" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Do you provide post-surgery nursing care at home?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide post-operative nursing care including wound dressing, injections, vitals monitoring and more."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book a female nurse at home?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, you can request a female nurse for elderly, female, or child care needs."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you serve Mohali and Panchkula as well?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely, we provide nursing services at home in Chandigarh, Mohali, and Panchkula."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What types of conditions do nurses support?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We handle ICU care, post-surgical recovery, catheter insertion, feeding tube support, elderly assistance, and more."
                            }
                        }
                    ]
                })}
            </Script>

            <div className="mx-auto md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753344614/220-SM987818_woof2x.jpg"
                        alt="Home nursing care service CareKwik"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="text-2xl font-bold mb-4">Book Nursing Care at Home</p>
                        <BookService servicename="Nursing Care" />
                    </div>
                </div>
                <div className="mt-12 max-w-6xl mx-auto">

                    <h1 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                        Professional Nursing Care at Home – Safe, Skilled, and Trusted
                    </h1>
                    <p className="mb-4 text-gray-700 md:text-lg">
                        At CareKwik, we bring hospital-grade nursing care to the comfort of your home. Our certified nurses are trained to provide compassionate assistance for post-operative recovery, chronic illness management, ICU-level monitoring, and more.
                    </p>
                    <p className="mb-6 text-gray-700 md:text-lg">
                        Whether you need short-term support or long-term care, we match you with the right nurse based on your condition and schedule. Our nursing care is available in Chandigarh, Mohali, Panchkula, and nearby areas.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">Our In-Home Nursing Services Include:</h2>
                    <ul className="list-disc pl-6 text-gray-700 md:text-lg space-y-2">
                        <li>Post-operative care and recovery monitoring</li>
                        <li>Injections, IV therapy, and wound dressing</li>
                        <li>ICU-trained nurse for critical care at home</li>
                        <li>Catheterization, tracheostomy & tube feeding support</li>
                        <li>Vital signs monitoring and medication administration</li>
                        <li>Elderly nursing care and mobility support</li>
                    </ul>
<div className="bg-gray-50 py-8 px-4 rounded-lg  mt-10">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Nursing Care at Home in Other Cities</h2>
  <ul className="list-disc list-inside text-blue-700 space-y-2">
    <li><Link href="/nursing-care-at-home/chandigarh" className="hover:underline">Nursing Care at Home in Chandigarh</Link></li>
    <li><Link href="/nursing-care-at-home/mohali" className="hover:underline">Nursing Care at Home in Mohali</Link></li>
    <li><Link href="/nursing-care-at-home/panchkula" className="hover:underline">Nursing Care at Home in Panchkula</Link></li>
  </ul>
</div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
                        <div className="space-y-4 text-gray-700 md:text-lg">
                            <div>
                                <strong>Q: Can I request 12-hour or 24-hour nurse service?</strong>
                                <p>A: Yes, we offer flexible shifts including 12-hour and 24-hour options.</p>
                            </div>
                            <div>
                                <strong>Q: Are the nurses qualified and background-verified?</strong>
                                <p>A: Absolutely. All our nurses are certified, experienced, and police-verified.</p>
                            </div>
                            <div>
                                <strong>Q: Is this service available in Panchkula and Mohali?</strong>
                                <p>A: Yes, we cover all sectors in Chandigarh, Mohali, and Panchkula.</p>
                            </div>
                            <div>
                                <strong>Q: What if I need a replacement nurse?</strong>
                                <p>A: We ensure timely replacement in case of absenteeism or mismatch at no extra cost.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
