// app/lab-test-at-home/panchkula/page.tsx
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
title: 'Home Lab Test in Panchkula – Fast & Trusted | CareKwik',
description: 'Book lab tests at home in Panchkula with CareKwik. Get blood tests, full body checkups, and diagnostics with home sample collection—safe, fast & affordable.',
  keywords: [
    'lab test at home Panchkula',
    'home blood test Panchkula',
    'sample collection Panchkula',
    'diagnostic test Panchkula',
    'full body health check Panchkula',
    'CareKwik lab services Panchkula'
  ],
  alternates: {
    canonical: 'https://carekwik.com/lab-test-at-home/panchkula',
  },
};
export default function LabtestPanchkula() {
    return (
        <>
            <Script id="ld-labtest-panchkula" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalOrganization",
                    "name": "CareKwik Lab test - Panchkula",
                    "url": "https://carekwik.com/lab-test-at-home/panchkula",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/labtest_kw5tyy.jpg",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Panchkula",
                        "addressRegion": "Haryana",
                        "postalCode": "134109",
                        "addressCountry": "IN"
                    },
                    "description": "Lab test and health checkups with home sample collection in Panchkula.",
                    "openingHours": "Mo-Su 07:00-21:00",
                    "telephone": "+91-8307190216",
                    "areaServed": ["Panchkula", "Pinjore", "Zirakpur", "Chandigarh"]
                })}
            </Script>
            <Script id="ld-faq-labtest" type="application/ld+json">
                {JSON.stringify({

                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What lab tests can I book at home in Panchkula?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can book a variety of lab tests including blood tests, urine tests, full body checkups, and specialized tests like thyroid, diabetes, and vitamin profiles."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How does home sample collection work?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "A trained phlebotomist will visit your home at the scheduled time to collect samples. You can book appointments online or via phone."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How quickly will I receive my test results?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Most reports are delivered within 12-24 hours via WhatsApp or email."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are the labs accredited?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we partner with NABL-accredited labs to ensure quality and reliability."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book urgent tests?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we offer same-day service for most common tests if slots are available."
                            }
                        }
                    ]
                })}
            </Script>
            <div className="mx-auto md:p-10 p-4">
                <div className="flex flex-col md:flex-row md:gap-10">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753345685/20-SM88262_aahocp.jpg"
                        alt="Lab test at home in Panchkula"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-md border md:w-[60%] object-cover mb-8"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="text-2xl font-bold text-gray-800 mb-4">
                            Book Lab Test at Home in Panchkula
                        </p>
                        <BookService servicename="Lab test" />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        Lab Test at Home in Panchkula – Safe, Fast & Certified Diagnostic Services
                    </h1>

                    <p className="mb-4 text-gray-700 md:text-lg">
                        Get your health test done from the comfort of your home with CareKwik’s <strong>lab test at home service in Panchkula</strong>. Whether it’s a thyroid check, sugar levels, or a full body test, we provide certified professionals to collect your samples with care.
                    </p>

                    <p className="mb-8 text-gray-700 md:text-lg">
                        Our home diagnostic services are fast, hygienic, and affordable. Trusted by families across Panchkula, we ensure timely digital reports delivered via WhatsApp or email—no need to visit crowded labs.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Lab test You Can Book</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-10">
                        <li>Complete Blood Count (CBC)</li>
                        <li>Blood Sugar (F/PP)</li>
                        <li>Thyroid Profile (TSH, T3, T4)</li>
                        <li>Liver & Kidney Function test</li>
                        <li>Lipid Profile & Cholesterol Test</li>
                        <li>Vitamin D & B12</li>
                        <li>Basic to Advanced Full Body Checkups</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4 text-gray-700">
                        <div>
                            <strong>Q1. Is the lab test service available across Panchkula?</strong>
                            <p>A: Yes, we cover all sectors and major areas in Panchkula for home sample collection.</p>
                        </div>
                        <div>
                            <strong>Q2. Can I book urgent sample collection?</strong>
                            <p>A: Same-day bookings are available for most common test if slots are open.</p>
                        </div>
                        <div>
                            <strong>Q3. How do I get the reports?</strong>
                            <p>A: You will receive your reports digitally via WhatsApp or email within 12–24 hours.</p>
                        </div>
                        <div>
                            <strong>Q4. Are your lab partners NABL-accredited?</strong>
                            <p>A: Yes, we work only with certified and reputed diagnostic labs.</p>
                        </div>
                        <div>
                            <strong>Q5. Can you provide fasting and post-meal sugar test?</strong>
                            <p>A: Yes, both test can be scheduled in a single visit based on your convenience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
