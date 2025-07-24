// app/elder-care-at-home/panchkula/page.tsx

import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';
export const metadata = {
    title: 'Elder Care at Home in Panchkula | Verified Male/Female Caregivers – CareKwik',
    description:
        'Hire compassionate elder care attendants in Panchkula. Female/male caregivers for old age care, palliative support & paralytic patients. Trusted home care service by CareKwik.',
    keywords: [
        'elder care Panchkula',
        'home attendant Panchkula',
        'female caretaker Panchkula',
        'home care Panchkula',
        'old age care Panchkula',
        'dementia care Panchkula',
        'palliative care Panchkula',
        'CareKwik elder care Panchkula',
    ],
    alternates: {
        canonical: 'https://carekwik.com/elder-care-at-home/panchkula',
    },
};

export default function ElderCarePanchkulaPage() {
    return (
        <>
            <Script id="ld-json" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Elder Care in Panchkula",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "url": "https://carekwik.com/elder-care-at-home/panchkula",
                    "telephone": "+91-8307190216",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Panchkula",
                        "addressRegion": "Haryana",
                        "postalCode": "134109",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-20:00",
                    "priceRange": "₹₹",
                    "description": "Best elder care at home in Panchkula. Compassionate old age caretakers and attendants from CareKwik.",
                    "areaServed": ["Panchkula", "Chandigarh", "Pinjore"]
                })}
            </Script>
            <Script id="ld-jsonfqs-pk" type="application/ld+json">
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
                            "name": "Do you serve elder care needs in Panchkula sector-wise?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our caregivers are available in all sectors of Panchkula, including Sector 4, 11, and 20."
                            }
                        }

                        
                        
                    ]
                })}
            </Script>

            <div className="mx-auto md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row gap-10 justify-between">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg"
                        alt="Elder Care Services in Panchkula"
                        width={400}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="md:text-2xl text-xl font-bold mb-4">Book Elder Care in Panchkula</p>
                        <BookService servicename="Elder Care" />
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto md:p-6">
                    <h1 className="text-3xl mt-10 font-bold text-gray-800 mb-4">
                        Elder Care at Home in Panchkula – Trusted Care with Compassion
                    </h1>
                    <p className="mb-4 md:text-lg text-gray-700">
                        Looking for safe and affordable <strong>elder care at home in Panchkula</strong>? CareKwik offers trained and background-verified male and female caregivers for seniors who need help with daily living, emotional companionship, or post-hospital care.
                    </p>
                    <p className="mb-4 md:text-lg text-gray-700">
                        Our attendants assist with hygiene, mobility, feeding, and medication reminders. Serving <strong>all sectors of Panchkula</strong>, including Sector 2, 4, 11, 15, 20, and nearby areas.
                    </p>

                    {/* Specialized Elder Care */}
                    <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Specialized Services We Offer</h2>
                    <ul className="list-disc pl-6 text-gray-700 md:text-lg space-y-2">
                        <li><strong>Female Caregivers</strong> for personalized and sensitive care for elderly women.</li>
                        <li><strong>Palliative Care</strong> for seniors needing end-of-life comfort and dignity at home.</li>
                        <li><strong>Paralysis Patient Care</strong> with full daily support and physiotherapy aid.</li>
                        <li><strong>Alzheimer’s & Dementia Support</strong> with structured routines and memory care.</li>
                        <li><strong>Old Age Assistance</strong> with bathing, walking, feeding, and companionship.</li>
                    </ul>

                    {/* FAQ */}
                    <div className="mt-14">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQs – Elder Care in Panchkula</h2>
                        <div className="space-y-4 text-gray-700 md:text-lg">
                            <div>
                                <strong>Q: Can I request a female caregiver in Panchkula?</strong>
                                <p>A: Absolutely. We provide both male and female attendants as per your preference.</p>
                            </div>
                            <div>
                                <strong>Q: Do your attendants assist with mobility and hygiene?</strong>
                                <p>Yes, our caregivers help with bathing, walking, toileting, and more.</p>
                            </div>
                            <div>
                                <strong>Q: What’s the minimum booking duration?</strong>
                                <p>We offer both short-term (few hours) and long-term bookings based on your needs.</p>
                            </div>
                            <div>
                                <strong>Q: Do you cover all Panchkula sectors?</strong>
                                <p>Yes, we serve all areas including Sector 6, 7, 10, 17, 21, and even nearby localities like Kalka and Pinjore.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 text-center">
                        <p className="text-lg font-semibold text-gray-800">
                            Book trusted elder care attendants in Panchkula with CareKwik today.
                        </p>
                        <p className="mt-2 text-gray-600">Fill the form above or call us now for a consultation.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
