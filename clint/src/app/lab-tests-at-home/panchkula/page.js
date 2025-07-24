// app/lab-tests-at-home/panchkula/page.tsx
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
    title: 'Lab Tests at Home in Panchkula | Home Blood Test – CareKwik',
    description: 'Book lab tests with home sample collection in Panchkula. Affordable diagnostics, full body checkups, and blood tests at your convenience.',
    keywords: [
        'lab tests at home Panchkula',
        'blood test at home Panchkula',
        'home collection lab Panchkula',
        'diagnostic center Panchkula',
        'full body test Panchkula'
    ],
    alternates: {
        canonical: 'https://carekwik.com/lab-tests-at-home/panchkula',
    },
};

export default function LabTestsPanchkula() {
    return (
        <>
            <Script id="ld-labtests-panchkula" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalOrganization",
                    "name": "CareKwik Lab Tests - Panchkula",
                    "url": "https://carekwik.com/lab-tests-at-home/panchkula",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/labtest_kw5tyy.jpg",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Panchkula",
                        "addressRegion": "Haryana",
                        "postalCode": "134109",
                        "addressCountry": "IN"
                    },
                    "description": "Lab tests and health checkups with home sample collection in Panchkula.",
                    "openingHours": "Mo-Su 07:00-21:00",
                    "telephone": "+91-8307190216",
                    "areaServed": ["Panchkula", "Pinjore", "Zirakpur", "Chandigarh"]
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
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            Book Lab Test at Home in Panchkula
                        </h1>
                        <BookService servicename="Lab Tests" />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        Book Lab Tests at Home in Panchkula – Get Reports Without Leaving Home
                    </h1>

                    <p className="mb-4 text-gray-700 md:text-lg">
                        Get your health tests done from the comfort of your home with CareKwik’s <strong>lab test at home service in Panchkula</strong>. Whether it’s a thyroid check, sugar levels, or a full body test, we provide certified professionals to collect your samples with care.
                    </p>

                    <p className="mb-8 text-gray-700 md:text-lg">
                        Our home diagnostic services are fast, hygienic, and affordable. Trusted by families across Panchkula, we ensure timely digital reports delivered via WhatsApp or email—no need to visit crowded labs.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Lab Tests You Can Book</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-10">
                        <li>Complete Blood Count (CBC)</li>
                        <li>Blood Sugar (F/PP)</li>
                        <li>Thyroid Profile (TSH, T3, T4)</li>
                        <li>Liver & Kidney Function Tests</li>
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
                            <p>A: Same-day bookings are available for most common tests if slots are open.</p>
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
                            <strong>Q5. Can you provide fasting and post-meal sugar tests?</strong>
                            <p>A: Yes, both tests can be scheduled in a single visit based on your convenience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
