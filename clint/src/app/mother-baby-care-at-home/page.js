// app/mother-baby-care-at-home/page.tsx
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
export const metadata = {
    title: 'Mother and Baby Care at Home in Chandigarh, Mohali & Panchkula | CareKwik',
    description:
        'Book trained postnatal care attendants for new mothers and newborns at home in Chandigarh, Mohali & Panchkula. Trusted, safe, and experienced care services.',
    keywords: [
        'mother and baby care at home',
        'postnatal care Chandigarh',
        'baby massage caretaker Mohali',
        'newborn care at home Panchkula',
        'nanny for infant',
        'Japa maid service',
        'new mother care at home',
        'post pregnancy care',
        'baby caretaker in Chandigarh',
    ],
    alternates: {
        canonical: 'https://carekwik.com/mother-baby-care-at-home',
    },
};

export default function MotherBabyCarePage() {
    return (
        <>
            {/* JSON-LD Schema for LocalBusiness + FAQs */}
            <Script id="ld-json-motherbaby" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Mother and Baby Care at Home",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "url": "https://carekwik.com/mother-baby-care-at-home",
                    "telephone": "+91-8307190216",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chandigarh",
                        "addressRegion": "Chandigarh",
                        "postalCode": "160036",
                        "addressCountry": "IN"
                    },
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Su 09:00-20:00",
                    "areaServed": ["Chandigarh", "Mohali", "Panchkula"],
                    "description": "Trained attendants for newborn care, baby massage, Japa maid service, and postnatal recovery at home."
                })}
            </Script>

            <Script id="ld-faq-motherbaby" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Do you provide mother and baby care at home in Chandigarh?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we offer trained attendants for newborn and postnatal care in Chandigarh, Mohali, and Panchkula."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What is included in your mother and baby care service?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Our services include baby massage, bathing, swaddling, diapering, and post-delivery care for mothers."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book a female caretaker for my newborn?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide experienced female caregivers and Japa maids with background checks and references."
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
                        alt="Mother and baby care attendant in Chandigarh"
                        width={500}
                        height={500}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="text-xl font-semibold mb-4">Book Mother & Baby Care Service</p>
                        <BookService servicename="Mother and Baby Care" />
                    </div>
                </div>

                {/* Description */}
                <div className="mt-12 max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Mother and Baby Care at Home in Chandigarh, Mohali & Panchkula
                    </h1>
                    <p className="text-gray-700 mb-4 md:text-lg">
                        At CareKwik, we understand that post-delivery care is one of the most delicate phases for
                        both the mother and the newborn. That’s why we offer compassionate, professional <strong>Mother & Baby
                            Care at Home</strong> services tailored for new families in Chandigarh, Mohali & Panchkula.
                    </p>
                    <p className="text-gray-700 mb-6 md:text-lg">
                        Our attendants and Japa maids are trained in <strong>newborn hygiene</strong>, baby massage, feeding support,
                        swaddling, postnatal nutrition guidance, and emotional care for mothers recovering from childbirth.
                        Whether you need 12-hour or 24-hour support, we ensure peace of mind and safety at home.
                    </p>

                    {/* Services List */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Mother & Baby Care Services Include:</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 md:text-lg">
                        <li>Postnatal recovery care for mothers</li>
                        <li>Infant massage & bathing support</li>
                        <li>Newborn feeding assistance & hygiene</li>
                        <li>Night-time baby care and supervision</li>
                        <li>Swaddling, diaper changing, baby sleep support</li>
                        <li>Japa maid service for traditional post-delivery routines</li>
                        <li>Flexible part-time or full-time booking options</li>
                    </ul>
                    <div className="bg-gray-50 py-8 px-4 rounded-lg  mt-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mother & Baby Care in Other Cities</h2>
                        <ul className="list-disc list-inside text-blue-700 space-y-2">
                            <li><Link href="/mother-baby-care-at-home/chandigarh" className="hover:underline">Mother & Baby Care in Chandigarh</Link></li>
                            <li><Link href="/mother-baby-care-at-home/mohali" className="hover:underline">Mother & Baby Care in Mohali</Link></li>
                            <li><Link href="/mother-baby-care-at-home/panchkula" className="hover:underline">Mother & Baby Care in Panchkula</Link></li>
                        </ul>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-14">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
                        <div className="space-y-4 text-gray-700 md:text-lg">
                            <div>
                                <strong>Q: Do you provide mother and baby care at home in Chandigarh?</strong>
                                <p>A: Yes, we offer experienced attendants in Chandigarh, Mohali & Panchkula.</p>
                            </div>
                            <div>
                                <strong>Q: What’s included in your service?</strong>
                                <p>A: Baby massage, newborn hygiene, mother’s postnatal recovery, and feeding help.</p>
                            </div>
                            <div>
                                <strong>Q: Can I get a female Japa maid?</strong>
                                <p>A: Yes, we provide trained female staff with background verification and references.</p>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <p className="text-lg font-semibold">Looking for trusted postnatal and newborn care?</p>
                            <p className="text-gray-600">Book a home visit with CareKwik and relax while we take care of both mother and child.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
