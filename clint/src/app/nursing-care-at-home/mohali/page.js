// app/nursing-care-at-home/mohali/page.tsx

import Image from 'next/image';
import Script from 'next/script';
import BookService from '@/components/bookservice';

export const metadata = {
  title: 'Nursing Care at Home in Mohali | CareKwik',
  description:
    'Book trained nurses at home in Mohali for post-surgery, injections, ICU, tracheostomy, and bedridden patient care. Trusted & verified.',
  keywords: [
    'nursing care at home Mohali',
    'home nurse in Mohali',
    'ICU nurse at home Mohali',
    'post-surgical care Mohali',
    'bedridden patient nurse Mohali',
    'injection at home Mohali',
    'tracheostomy care Mohali',
    'private nurse Mohali',
  ],
  alternates: {
    canonical: 'https://carekwik.com/nursing-care-at-home/mohali',
  },
};


export default function NursingCareMohali() {
    return (
        <> 
            {/* JSON-LD LocalBusiness */}
            <Script id="ld-nursing-care-mohali" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Nursing Care at Home in Mohali",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753344614/220-SM987818_woof2x.jpg",
                    "url": "https://carekwik.com/nursing-care-at-home/mohali",
                    "telephone": "+91-8307190216",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Mohali",
                        "addressRegion": "Punjab",
                        "postalCode": "160062",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-20:00",
                    "priceRange": "₹₹",
                    "description": "Hire trained nurses for home care in Mohali. Services include post-surgery care, wound care, injections, and ICU-level monitoring.",
                    "areaServed": ["Mohali", "Chandigarh", "Panchkula"]
                })}
            </Script>

            {/* JSON-LD FAQPage */}
            <Script id="faq-nursing-care-mohali" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What nursing services are available in Mohali?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We offer injection administration, wound care, catheter care, ICU support, post-operative nursing, and more."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are the nurses trained and verified?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, all our nurses are certified professionals and have undergone background checks."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I choose between a male or female nurse?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we allow preferences for gender while booking your service."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How quickly can a nurse be arranged?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We can usually assign a nurse within a few hours depending on availability."
                            }
                        }
                    ]
                })}
            </Script>
            <div className="mx-auto md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
                    {/* Image & Booking */}

                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753344614/220-SM987818_woof2x.jpg"
                        alt="Nursing Care at Home in Mohali"
                        width={600}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Book Nursing Care Service</h2>
                        <BookService servicename="Nursing Care" />
                    </div>
                </div>
                  <div className="mt-12 max-w-6xl mx-auto">

                    {/* Content */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Nursing Care at Home in Mohali</h1>
                    <p className="text-gray-700 mb-4">
                        At CareKwik, we provide professional <strong>nursing care services at home in Mohali</strong>, ensuring hospital-like care at your doorstep. Our qualified nurses assist with injections, wound dressing, vital monitoring, tracheostomy care, and post-surgical support.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Whether you need <strong>ICU-trained nurses</strong> or post-operative care, we match you with trained, background-verified nursing staff. We ensure timely and compassionate medical care for your loved ones in the comfort of home.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Our In-Home Nursing Services Include:</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                        <li>Injection and IV Infusion Administration</li>
                        <li>Wound Dressing & Post-Surgical Care</li>
                        <li>Tracheostomy & Catheter Care</li>
                        <li>ICU Nursing & Monitoring at Home</li>
                        <li>Vital Signs Monitoring & Health Reporting</li>
                        <li>Palliative & Chronic Illness Nursing</li>
                        <li>Elderly and Bedridden Patient Nursing</li>
                    </ul>
                    {/* FAQ Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <strong>Q: Are nurses available for 12-hour or 24-hour shifts?</strong>
                                <p>A: Yes, we provide both day and night shift nurses as per your need.</p>
                            </div>
                            <div>
                                <strong>Q: What procedures can home nurses perform?</strong>
                                <p>
                                    A: Nurses can administer injections, manage catheters, wound care, IV infusions, and monitor vitals.
                                </p>
                            </div>
                            <div>
                                <strong>Q: Can I book a nurse for elderly or bedridden patients?</strong>
                                <p>A: Yes, we specialize in long-term home nursing for senior citizens and chronically ill patients.</p>
                            </div>
                            <div>
                                <strong>Q: How do I book a nursing service in Mohali?</strong>
                                <p>A: You can book online through our form or call us directly. Service starts within a few hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
