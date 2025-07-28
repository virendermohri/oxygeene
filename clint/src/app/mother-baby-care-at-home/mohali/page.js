// app/mother-baby-care/mohali/page.tsx
import Image from 'next/image';
import Script from 'next/script';
import BookService from '@/components/bookservice';

export const metadata = {
  title: 'Mother & Baby Care at Home in Mohali | Trained Postnatal Attendants',
  description:
    'Book expert postnatal care for mother and newborn in Mohali. CareKwik provides trained female attendants for baby massage, hygiene, breastfeeding & recovery support.',
  keywords: [
    'mother baby care Mohali',
    'postnatal care at home Mohali',
    'baby care services Mohali',
    'female attendant for mother',
    'newborn care Mohali',
    'baby massage Mohali',
    'home care after delivery Mohali',
  ],
  alternates: {
    canonical: 'https://carekwik.com/mother-baby-care-at-home/mohali',
  },
};

export default function MotherBabyCareMohali() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <Script id="ld-mother-baby-care-mohali" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Mother Baby Care in Mohali",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "url": "https://carekwik.com/mother-baby-care/mohali",
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
                    "description": "Home-based postnatal mother and newborn baby care in Mohali by trained and verified female staff.",
                    "areaServed": ["Mohali", "Chandigarh", "Zirakpur", "Kharar"]
                })}
            </Script>

            <Script id="ld-faq-mohali" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Do you provide postnatal care in Mohali?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our trained female attendants offer postnatal care for mothers and newborns in Mohali and nearby areas."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I get a female attendant for my wife after delivery?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide culturally appropriate female staff trained in baby care, hygiene, and basic lactation support."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you offer infant massage and bath services?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely. Our trained baby care attendants can assist with daily massage and bathing rituals at home."
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
                        alt="Mother Baby Care at Home Mohali"
                        width={500}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <h2 className="text-xl font-bold mb-4">Book Mother & Baby Care</h2>
                        <BookService servicename="Mother Baby Care" />
                    </div>
                </div>
<div className="max-w-6xl mx-auto md:p-6">

                
                <h1 className="text-2xl mt-10 font-bold text-gray-800 mb-4">
                    Mother and Baby Care at Home in Mohali
                </h1>
                <p className="mb-4 md:text-lg">
                    At CareKwik, we understand that both mother and newborn require special attention after delivery. Our expert female caregivers in Mohali provide reliable and gentle in-home care that helps mothers recover while ensuring the baby’s safety, comfort, and hygiene. From baby bathing to massage, diaper changes, feeding support, and sleep routines — we cover it all.
                </p>

                <p className="mb-6 md:text-lg">
                    Whether you’re in Phase 7, Sector 70, Kharar, or Aerocity, our trained attendants are available across Mohali. We offer full-day, night-only, or 24-hour shifts so your family gets uninterrupted postnatal support — without any stress or agency middlemen.
                </p>

                {/* FAQ Section */}
                <div className="mt-14">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">FAQs – Mohali Mother Baby Care</h2>
                    <div className="space-y-4 text-gray-700">
                        <div>
                            <strong>Q: Can I book full-time or day care attendants?</strong>
                            <p>A: Yes, we offer 8-hr, 12-hr, and 24-hr shifts depending on your needs.</p>
                        </div>
                        <div>
                            <strong>Q: Is the staff experienced in handling newborns?</strong>
                            <p>A: Absolutely. All our attendants are trained in baby hygiene, feeding assistance, and gentle massage.</p>
                        </div>
                        <div>
                            <strong>Q: How soon can I get service in Mohali?</strong>
                            <p>A: We usually assign a caregiver within 24 hours of booking confirmation.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
