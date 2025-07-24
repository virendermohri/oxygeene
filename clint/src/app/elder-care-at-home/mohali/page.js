// app/elder-care-at-home/mohali/page.tsx

import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
    title: 'Elder Care at Home in Mohali | Female Attendants & Verified Caregivers – CareKwik',
    description:
        'Book trained elder care attendants at home in Mohali. CareKwik provides verified male/female caregivers for seniors – palliative, paralytic, dementia, and old age support.',
    keywords: [
        'elder care in Mohali',
        'home care services Mohali',
        'female caretaker in Mohali',
        'palliative care at home Mohali',
        'old age caretaker Mohali',
        'senior citizen care Mohali',
        'home nursing Mohali',
        'CareKwik elder care',
    ],
    alternates: {
        canonical: 'https://carekwik.com/elder-care-at-home/mohali',
    },
};

export default function ElderCareMohaliPage() {
    return (
        <>
            <Script id="ld-json-mohali" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Elder Care in Mohali",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "url": "https://carekwik.com/elder-care-at-home/mohali",
                    "telephone": "+91-8307190216",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Mohali",
                        "addressRegion": "Punjab",
                        "postalCode": "160055",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-20:00",
                    "priceRange": "₹₹",
                    "description": "Hire professional elder care at home in Mohali by CareKwik. Verified and trained caregivers for senior citizens.",
                    "areaServed": ["Mohali", "Chandigarh", "Zirakpur"]
                })}
            </Script>
            <Script id="ld-jsonfqs-mohali" type="application/ld+json">
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
                            "name": "Is elder care at home available in Mohali?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, CareKwik provides full-time and part-time elder care across Mohali phases 1 to 11 and new sectors."
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
                        alt="Elder Care Services in Mohali"
                        width={400}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="md:text-2xl text-xl font-bold mb-4">Book Elder Care Service in Mohali</p>
                        <BookService servicename="Elder Care" />
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto md:p-6">
                    <h1 className="text-3xl mt-10 font-bold text-gray-800 mb-4">
                        Elder Care at Home in Mohali – Verified Male/Female Attendants
                    </h1>
                    <p className="mb-4 md:text-lg text-gray-700">
                        CareKwik offers reliable and compassionate <strong>elder care services in Mohali</strong>. Our trained and verified caregivers help elderly patients with mobility, hygiene, medication reminders, and emotional companionship – all in the comfort of their home.
                    </p>
                    <p className="mb-4 md:text-lg text-gray-700">
                        We specialize in providing <strong>female attendants for seniors</strong>, as well as male caregivers for conditions such as <strong>palliative care</strong>, <strong>paralysis recovery</strong>, <strong>dementia</strong>, and <strong>post-hospitalization care</strong>.
                    </p>

                    {/* Specialized Services */}
                    <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Specialized Elder Services in Mohali</h2>
                    <ul className="list-disc pl-6 text-gray-700 md:text-lg space-y-2">
                        <li><strong>Female Elder Care</strong> – Trained female attendants for dignity and sensitive care.</li>
                        <li><strong>Palliative Care</strong> – End-of-life support with empathy and respect.</li>
                        <li><strong>Paralytic Patient Care</strong> – Assisted mobility, feeding, hygiene, and more.</li>
                        <li><strong>Parkinson & Dementia Care</strong> – Memory support and routine structuring.</li>
                        <li><strong>Old Age Care</strong> – Daily support, companionship, and health tracking.</li>
                    </ul>

                    {/* FAQ */}
                    <div className="mt-14">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQs – Elder Care in Mohali</h2>
                        <div className="space-y-4 text-gray-700 md:text-lg">
                            <div>
                                <strong>Q: Can I book a female caretaker for my mother?</strong>
                                <p>A: Yes, we offer both male and female elder care attendants in Mohali.</p>
                            </div>
                            <div>
                                <strong>Q: Are attendants trained and background-verified?</strong>
                                <p>Absolutely. All caregivers are background-checked and professionally trained.</p>
                            </div>
                            <div>
                                <strong>Q: Do you provide full-time or live-in attendants?</strong>
                                <p>Yes, we offer part-time, full-time, and 24-hour caregiver options.</p>
                            </div>
                            <div>
                                <strong>Q: How quickly can I get a caretaker in Mohali?</strong>
                                <p>We typically assign a caregiver within 24 hours of your booking.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 text-center">
                        <p className="text-lg font-semibold text-gray-800">
                            Book trained elder care attendants at home in Mohali now. Trusted by 1000+ families.
                        </p>
                        <p className="mt-2 text-gray-600">Call now or fill the form above to get started.</p>
                    </div>
                </div>
            </div>
        </>

    );
}
