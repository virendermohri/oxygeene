import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
    title: 'Mother and Baby Care in Panchkula at Home | CareKwik',
    description:
        'Hire trained female caregivers in Panchkula for postnatal mother and baby care. Book safe, verified attendants for newborn hygiene, feeding, and mother support.',
    keywords: [
        'mother baby care Panchkula',
        'postnatal care at home Panchkula',
        'baby care attendant Panchkula',
        'female caregivers Panchkula',
        'mother care after delivery Panchkula',
    ],
    alternates: {
        canonical: 'https://carekwik.com/mother-baby-care/panchkula',
    },
};

export default function MotherBabyCarePanchkulaPage() {
    return (
        <>
            {/* JSON-LD for LocalBusiness */}
            <Script id="ld-motherbaby-pkl" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Mother & Baby Care at Home",
                    "@id": "https://carekwik.com/mother-baby-care/panchkula#carekwik",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163872/motherbaby-hero_kwbclo.jpg",
                    "url": "https://carekwik.com/mother-baby-care/panchkula",
                    "telephone": "+91-8307190216",
                    "priceRange": "₹₹",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Panchkula",
                        "addressRegion": "Haryana",
                        "postalCode": "134109",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-20:00",
                    "description": "Trained attendants for mother and newborn baby care in Panchkula. Safe, hygienic, and culturally sensitive female caregivers available at home.",
                    "areaServed": ["Panchkula", "Chandigarh", "Mohali"]
                })}
            </Script>

            {/* FAQ JSON-LD */}
            <Script id="ld-faq-pkl" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Can I get mother and baby care service in Panchkula?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide home-based mother and newborn care services across all sectors of Panchkula."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide only female attendants?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our attendants for postnatal care are experienced and verified females trained in hygiene and newborn care."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is overnight baby care available in Panchkula?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we offer both day and night shift attendants based on your schedule and need."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book help for baby massage and bathing?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely. Our caregivers are trained in gentle massage, safe baby bathing, and hygiene maintenance."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How early should I book after delivery?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can book in advance or within 24 hours of delivery. We try to assign caregivers quickly to support you early on."
                            }
                        }
                    ]
                })}
            </Script>

            <div className="mx-auto md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
                    <Image
                       src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753210013/220-SM681360_vp9gp2.jpg"
                        alt="Mother and Baby Care at Home in Panchkula"
                        width={400}
                        height={450}
                         className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="md:text-2xl text-xl font-bold mb-4">Book Mother & Baby Care</p>
                        <BookService servicename="Mother and Baby Care" />
                    </div>
                </div>

                {/* Page Content */}
                <div className="max-w-6xl mx-auto md:p-6">
                    <h1 className="text-2xl mt-10 font-bold text-gray-800 mb-4">
                        Mother and Baby Care at Home in Panchkula
                    </h1>
                    <p className="mb-4 md:text-lg">
                        Welcoming a newborn can be overwhelming, especially during recovery. CareKwik offers
                        <strong> trained female attendants</strong> in Panchkula who help mothers rest, heal, and
                        regain strength while taking complete care of the baby’s hygiene, feeding, and comfort.
                    </p>
                    <p className="mb-6 md:text-lg">
                        From daily newborn routines like massage, cleaning, and sleeping support to gentle
                        postnatal care for the mother, we make sure both get compassionate, respectful assistance at home.
                        Our services are available in all sectors of Panchkula, including MDC, Sector 20, and Pinjore area.
                    </p>

                    {/* FAQs */}
                    <div className="mt-14">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
                        <div className="space-y-4 text-gray-700 md:text-lg">
                            <div>
                                <strong>Q: Can I get mother and baby care service in Panchkula?</strong>
                                <p>A: Yes, our team covers all sectors and localities of Panchkula for in-home service.</p>
                            </div>
                            <div>
                                <strong>Q: Are your attendants verified and experienced?</strong>
                                <p>A: Yes, all are ID-verified and trained in newborn handling and maternal care.</p>
                            </div>
                            <div>
                                <strong>Q: What kind of tasks will the caregiver assist with?</strong>
                                <p>A: They help with newborn hygiene, bathing, massage, feeding support, diapering, and mother’s postnatal care.</p>
                            </div>
                            <div>
                                <strong>Q: Is service available for C-section recovery?</strong>
                                <p>A: Yes, attendants are trained to handle gentle assistance and daily needs for C-section moms.</p>
                            </div>
                            <div>
                                <strong>Q: Can I book for night care only?</strong>
                                <p>A: Yes, we offer night care attendants for babies if parents need rest during nighttime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
