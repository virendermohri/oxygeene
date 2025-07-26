import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
    title: 'Mother and Baby Care in Chandigarh at Home | CareKwik',
    description:
        'Trained female attendants for postnatal mother and newborn care in Chandigarh. Book in-home mother & baby care services for hygiene, feeding, and recovery.',
    keywords: [
        'mother baby care Chandigarh',
        'postnatal care at home',
        'newborn baby care Chandigarh',
        'female attendant for baby',
        'mother care after delivery Chandigarh',
    ],
    alternates: {
        canonical: 'https://carekwik.com/mother-baby-care/chandigarh',
    },
};

export default function MotherBabyCareChandigarhPage() {
    return (
        <>
            {/* JSON-LD for LocalBusiness */}
            <Script id="ld-motherbaby-chd" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Mother & Baby Care at Home",
                    "@id": "https://carekwik.com/mother-baby-care/chandigarh#carekwik",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163872/motherbaby-hero_kwbclo.jpg",
                    "url": "https://carekwik.com/mother-baby-care/chandigarh",
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
                    "description": "Expert mother and newborn care at home in Chandigarh. Hire trained female attendants for postnatal hygiene, feeding support, and daily recovery assistance.",
                    "areaServed": ["Chandigarh", "Mohali", "Panchkula"]
                })}
            </Script>

            {/* JSON-LD for FAQ */}
            <Script id="ld-faq-chd" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Do you provide female attendants for mother and baby care?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide trained and background-verified female caregivers who specialize in mother and baby care post-delivery."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is this service available in all sectors of Chandigarh?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our home care attendants are available across all sectors and colonies of Chandigarh."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I get a night attendant for my newborn?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide overnight care services for newborns including feeding, diapering, and sleep assistance."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is your staff trained in handling newborn hygiene and feeding?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely. Our caregivers are trained in newborn hygiene, sterilization, breastfeeding support, and bottle feeding."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How soon can I book a caregiver after delivery?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can book a caregiver even before your delivery date, or within 24 hours after delivery for home service."
                            }
                        }
                    ]
                })}
            </Script>

            <div className="max-w-6xl mx-auto mt-10">
                {/* Hero Section */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753210013/220-SM681360_vp9gp2.jpg"
                        alt="Mother and Baby Care in Chandigarh"
                        width={400}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="md:text-2xl text-xl font-bold mb-4">Book Mother & Baby Care</p>
                        <BookService servicename="Mother and Baby Care" />
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto md:p-6">
                    <h1 className="text-2xl mt-10 font-bold text-gray-800 mb-4">
                        Mother and Baby Care at Home in Chandigarh
                    </h1>
                    <p className="mb-4 md:text-lg">
                        CareKwik brings expert <strong>mother and newborn care</strong> right to your doorstep in Chandigarh. Whether you need daytime or overnight support, our trained female attendants provide assistance with baby hygiene, feeding, bathing, and postnatal recovery routines for the mother.
                    </p>
                    <p className="mb-6 md:text-lg">
                        We understand that the post-delivery phase requires not only physical support but also emotional care and gentleness. That’s why we only assign <strong>verified, experienced caregivers</strong> for this sensitive service—so that both mom and baby feel safe, clean, and comforted.
                    </p>

                    {/* FAQ Section */}
                    <div className="mt-14">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
                        <div className="space-y-4 text-gray-700 md:text-lg">
                            <div>
                                <strong>Q: Do you provide female attendants for mother and baby care?</strong>
                                <p>A: Yes, all our staff for this service are trained female caregivers.</p>
                            </div>
                            <div>
                                <strong>Q: Can I get day or night shift attendants?</strong>
                                <p>A: Yes, both shifts are available depending on your preference and baby&lsquo;s needs.</p>
                            </div>
                            <div>
                                <strong>Q: Do you serve homes in outer sectors or suburbs of Chandigarh?</strong>
                                <p>A: Yes, we cover the entire Chandigarh Tricity region including peripheral areas.</p>
                            </div>
                            <div>
                                <strong>Q: Is your service suitable after C-section delivery?</strong>
                                <p>A: Definitely. Our staff are trained to assist in safe post-Caesarean care and gentle movement support.</p>
                            </div>
                            <div>
                                <strong>Q: Are your attendants background-verified?</strong>
                                <p>A: Yes, all our attendants undergo ID verification, experience check, and in-house training.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
