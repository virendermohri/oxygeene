// app/elder-care-at-home/chandigarh/page.tsx

import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';
export const metadata = {
    title: 'Elder Care at Home in Chandigarh | Female Caregivers & Verified Attendants – CareKwik',
    description:
        'Get trained and verified elder care attendants in Chandigarh. Hire compassionate male/female caregivers for seniors, palliative care, and old age support at home.',
    keywords: [
        'elder care in Chandigarh',
        'home care Chandigarh',
        'female caretaker Chandigarh',
        'palliative care Chandigarh',
        'old age care at home Chandigarh',
        'dementia care Chandigarh',
        'senior citizen care Chandigarh',
        'CareKwik elder care Chandigarh',
    ],
    alternates: {
        canonical: 'https://carekwik.com/elder-care-at-home/chandigarh',
    },
};

export default function ElderCareChandigarhPage() {
    return (
        <>
            <Script id="ld-json-chd" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Elder Care in Chandigarh",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "url": "https://carekwik.com/elder-care-at-home/chandigarh",
                    "telephone": "+91-8307190216",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chandigarh",
                        "addressRegion": "Chandigarh",
                        "postalCode": "160017",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-20:00",
                    "priceRange": "₹₹",
                    "description": "CareKwik offers trusted elder care at home in Chandigarh with trained male/female attendants for seniors.",
                    "areaServed": ["Chandigarh", "Mohali", "Panchkula"]
                })}
            </Script>
            <Script id="ld-jsonfqs-chd" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Are your elder care attendants trained and verified?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, all our caregivers go through strict training and background verification."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is elder care available in part-time and full-time formats?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, CareKwik provides flexible options like 12-hr, 24-hr, and hourly elder care services."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Which areas do you serve?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We provide services across Chandigarh, Mohali, Panchkula, Ambala, and nearby towns."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide elder care services specifically in Chandigarh?",
                            "acceptedAnswer": {
                                 "@type": "Answer",
                                "text": "Yes, we offer elder care services across all sectors of Chandigarh including Sector 8 to Sector 46."
                            }
                        }

                        
                    ]
                })}
            </Script>

           <div className=" mx-auto md:p-10 md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row gap-10 justify-between">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg"
                        alt="Elder Care Services in Chandigarh"
                        width={400}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="md:text-2xl text-xl font-bold mb-4">Book Elder Care Service in Chandigarh</p>
                        <BookService servicename="Elder Care" />
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto  md:p-6">
                    <h1 className="text-3xl mt-10 font-bold text-gray-800 mb-4">
                        Elder Care at Home in Chandigarh – Safe, Verified, Affordable
                    </h1>
                    <p className="mb-4 md:text-lg text-gray-700">
                        CareKwik brings expert <strong>elder care services in Chandigarh</strong> right to your doorstep.
                        Our compassionate and trained caregivers help seniors with hygiene, daily routines, meals, mobility, and emotional support at home.
                    </p>
                    <p className="mb-4 md:text-lg text-gray-700">
                        Whether you need short-term or long-term assistance, we provide flexible and trustworthy solutions with zero middlemen. Serving <strong>Chandigarh Sector 1–60</strong> and surrounding areas.
                    </p>

                    {/* Specialized Elder Care */}
                    <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">What We Specialize In</h2>
                    <ul className="list-disc pl-6 text-gray-700 md:text-lg space-y-2">
                        <li><strong>Female Caregivers</strong> for elderly women requiring sensitive care.</li>
                        <li><strong>Palliative Care at Home</strong> with end-of-life dignity and comfort.</li>
                        <li><strong>Paralysis Care</strong> with full-body support, feeding, bathing, and mobility help.</li>
                        <li><strong>Dementia & Alzheimer’s Care</strong> in a structured, memory-friendly environment.</li>
                        <li><strong>Old Age Support</strong> for daily activities, medications, and emotional companionship.</li>
                    </ul>

                    {/* FAQs */}
                    <div className="mt-14">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQs – Elder Care in Chandigarh</h2>
                        <div className="space-y-4 text-gray-700 md:text-lg">
                            <div>
                                <strong>Q: Do you provide full-time elder care in Chandigarh?</strong>
                                <p>Yes, we offer part-time, full-time, 12-hour, and 24-hour care options for families in Chandigarh.</p>
                            </div>
                            <div>
                                <strong>Q: Can I request a female caregiver for my mother?</strong>
                                <p>Yes, you can choose a male or female caregiver based on your family&lsquo;s preference.</p>
                            </div>
                            <div>
                                <strong>Q: Are your attendants medically trained?</strong>
                                <p>All our staff are trained in elderly care, basic nursing tasks, hygiene, and emergency response.</p>
                            </div>
                            <div>
                                <strong>Q: What areas in Chandigarh do you cover?</strong>
                                <p>We cover all sectors in Chandigarh including Sector 22, 27, 36, 44, and nearby areas.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 text-center">
                        <p className="text-lg font-semibold text-gray-800">
                            Book trusted elder care attendants in Chandigarh. Get peace of mind today!
                        </p>
                        <p className="mt-2 text-gray-600">Contact us now or fill out the form above.</p>
                    </div>
                </div>
            </div>
        </>

    );
}
