import Image from 'next/image';
import BookService from '@/components/bookservice';
import Script from 'next/script';

export const metadata = {
    title: 'Nursing Care at Home in Chandigarh | CareKwik',
    description:
        'Get professional nursing care at home in Chandigarh. Book trained nurses for injections, wound care, ICU support, and post-surgical nursing services.',
    keywords: [
        'nursing care at home Chandigarh',
        'home nurse in Chandigarh',
        'ICU nursing at home Chandigarh',
        'injection at home Chandigarh',
        'post-surgical care Chandigarh',
        'tracheostomy care Chandigarh',
        'bedridden patient nurse Chandigarh',
    ],
    alternates: {
        canonical: 'https://carekwik.com/nursing-care-at-home/chandigarh',
    },
};

export default function NursingCareChandigarh() {
    return (
        <>
            <Script id="ld-nursing-care-chd" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalOrganization",
                    "name": "CareKwik - Nursing Care at Home Chandigarh",
                    "url": "https://carekwik.com/nursing-care-at-home/chandigarh",
                    "logo": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-8307190216",
                        "contactType": "Customer Service"
                    },
                    "areaServed": ["Chandigarh", "Mohali", "Panchkula"],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chandigarh",
                        "addressRegion": "Chandigarh",
                        "postalCode": "160036",
                        "addressCountry": "IN"
                    },
                    "description":
                        "CareKwik provides professional nursing care at home in Chandigarh. Our trained nurses offer injections, wound care, ICU support, and post-surgical nursing services."
                })}

            </Script>
            <Script id="ld-faq-nursing-care" type="application/ld+json
">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What nursing services do you provide at home in Chandigarh?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We provide a range of nursing services including injections, wound care, ICU support, post-surgical care, and specialized care for bedridden patients."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are your nurses qualified and experienced?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, all our nurses are qualified, background-verified, and trained to provide safe and compassionate care at home."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How can I book nursing care at home in Chandigarh?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can book our nursing services by filling out the form on our website or calling our customer service number."
                            }
                        }
                    ]
                })}
            </Script>
            <div className="mx-auto md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753344614/220-SM987818_woof2x.jpg"
                        alt="Nursing Care at Home in Chandigarh"
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
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Nursing Care at Home in Chandigarh</h1>
                    <p className="text-gray-700 mb-4">
                        CareKwik provides professional and compassionate <strong>home nursing services in Chandigarh</strong> for patients who require medical assistance at home. Our skilled nurses are available for short-term, long-term, and ICU-level care.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Whether you need help with post-operative care, injections, vitals monitoring, or support for chronic illnesses — we ensure safe, hygienic, and customized care by verified and experienced nurses, right at your doorstep.
                    </p>

                    {/* In-Home Nursing Services */}
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Our In-Home Nursing Services Include:</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                        <li>Injection & IV Administration</li>
                        <li>Wound Dressing & Post-Surgery Care</li>
                        <li>Catheter & Tracheostomy Care</li>
                        <li>ICU-Level Nursing & Monitoring</li>
                        <li>Chronic Illness & Bedridden Care</li>
                        <li>Vital Monitoring & Doctor Coordination</li>
                        <li>Palliative and Elder Care Nursing</li>
                    </ul>

                    {/* FAQs */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <strong>Q: Are your nurses certified?</strong>
                                <p>A: Yes, all our nurses are qualified and background-verified for home healthcare.</p>
                            </div>
                            <div>
                                <strong>Q: Can I get 24/7 nursing care at home?</strong>
                                <p>A: Absolutely, we provide both 12-hour and 24-hour shifts based on your requirement.</p>
                            </div>
                            <div>
                                <strong>Q: Do you provide ICU-trained nurses at home?</strong>
                                <p>A: Yes, we have ICU-experienced nurses for critical care and monitoring.</p>
                            </div>
                            <div>
                                <strong>Q: What’s the booking process?</strong>
                                <p>A: Fill the booking form or call us. We’ll assess and assign a suitable nurse within hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
