// app/icu-at-home/page.tsx
import Image from 'next/image';
import Script from 'next/script';
import BookService from '@/components/bookservice';
import Link from 'next/link';
export const metadata = {
  title: "ICU at Home in Chandigarh, Mohali & Panchkula | CareKwik", // 58 characters
  description:
    "Get expert ICU setup at home with ventilator, nurse & monitors in Chandigarh, Mohali & Panchkula. Trusted critical care by CareKwik.", // 157 characters
  keywords: [
    "ICU at home",
    "ICU setup Chandigarh",
    "ICU nurse Mohali",
    "ICU ventilator Panchkula",
    "critical care at home",
    "home ICU services",
    "ICU bed rental",
    "emergency care at home"
  ],
  alternates: {
    canonical: "https://carekwik.com/icu-at-home",
  },
};



export default function ICUatHomePage() {
    return (
        <>
            {/* JSON-LD: LocalBusiness */}
            <Script id="ld-localbusiness-icu" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - ICU at Home",
                    "url": "https://carekwik.com/icu-at-home",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163948/icu-home-care_carekwik.jpg",
                    "telephone": "+91-8307190216",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chandigarh",
                        "addressRegion": "Chandigarh",
                        "postalCode": "160036",
                        "addressCountry": "IN"
                    },
                    "priceRange": "₹₹₹",
                    "openingHours": "Mo-Su 09:00-20:00",
                    "description": "ICU setup at home with ventilators, patient monitors, ICU nurses. Serving Chandigarh, Mohali, Panchkula, and nearby cities.",
                    "areaServed": ["Chandigarh", "Mohali", "Panchkula", "Zirakpur"]
                })}
            </Script>

            {/* JSON-LD: FAQPage */}
            <Script id="ld-faq-icu" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Is ICU setup safe at home?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide hospital-grade ICU equipment and trained ICU nurses to ensure complete safety."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide a ventilator at home?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we offer BiPAP, CPAP, and full invasive ventilators based on doctor's recommendation."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book only ICU nursing service?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, if you already have equipment, we can provide ICU-trained nurses only."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does ICU at home cost?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Pricing depends on equipment, duration, and nursing hours. Contact us for customized quote."
                            }
                        }
                    ]
                })}
            </Script>

            <div className=" mx-auto md:p-10 md:p-10 p-4">
                {/* Hero Image */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between   ">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751540954/wmremove-transformed_5_rcxaud.jpg"
                        alt="ICU setup at home"
                        width={480}
                        height={450}
                        className="rounded-2xl   shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="text-xl font-bold mb-4">Book ICU Care at Home</p>
                        <BookService servicename="ICU at Home" />
                    </div>
                </div>

                {/* Description */}
                <div className="max-w-6xl mx-auto  md:p-6  ">

                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        ICU Setup at Home in Chandigarh, Mohali & Panchkula
                    </h1>
                    <p className="mb-4 text-gray-700 md:text-lg">
                        CareKwik offers a fully-equipped <strong>ICU setup at home</strong> for critical patients requiring
                        continuous monitoring and advanced life support. This service is ideal for those recovering post-surgery,
                        suffering from chronic illness, or seeking palliative care in the comfort of home.
                    </p>
                    <p className="mb-6 text-gray-700 md:text-lg">
                        Our package includes <strong>ventilators, cardiac monitors, oxygen therapy, suction machines</strong> and
                        round-the-clock support by <strong>ICU-trained nurses</strong>. We serve all sectors of Chandigarh,
                        Mohali, Panchkula, and surrounding areas.
                    </p>

                    {/* What’s Included */}
                    <h2 className="text-xl font-semibold mb-4 mt-10">What’s Included in ICU at Home:</h2>
                    <ul className="list-disc pl-6 text-gray-700 md:text-lg space-y-2">
                        <li>Ventilator (invasive / non-invasive)</li>
                        <li>Multi-parameter patient monitor</li>
                        <li>Oxygen concentrator / cylinder</li>
                        <li>Hospital-grade ICU bed (motorized)</li>
                        <li>Suction machine & nebulizer</li>
                        <li>24x7 ICU-trained nurse & caregiver</li>
                        <li>Emergency doctor on-call (optional)</li>
                    </ul>
                    <div className="bg-gray-50 py-8 px-4 rounded-lg  mt-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">ICU Setup at Home in Other Cities</h2>
                        <ul className="list-disc list-inside text-blue-700 space-y-2">
                            <li><Link href="/icu-at-home/chandigarh" className="hover:underline">ICU at Home in Chandigarh</Link></li>
                            <li><Link href="/icu-at-home/mohali" className="hover:underline">ICU at Home in Mohali</Link></li>
                            <li><Link href="/icu-at-home/panchkula" className="hover:underline">ICU at Home in Panchkula</Link></li>
                        </ul>
                    </div>

                    {/* FAQs */}
                    <div className="mt-14">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
                        <div className="space-y-4 text-gray-700 md:text-lg">
                            <div>
                                <strong>Q: Is ICU setup safe at home?</strong>
                                <p>
                                    A: Yes, we ensure hospital-like safety with equipment and trained ICU staff for patient monitoring.
                                </p>
                            </div>
                            <div>
                                <strong>Q: Do you provide ventilators?</strong>
                                <p>
                                    A: Yes, we provide both BiPAP and full ventilator systems based on medical requirement.
                                </p>
                            </div>
                            <div>
                                <strong>Q: Is a doctor also included in ICU at home?</strong>
                                <p>
                                    A: A supervising doctor visit can be arranged, but daily monitoring is by trained nurses.
                                </p>
                            </div>
                            <div>
                                <strong>Q: Can I get ICU nurse service only?</strong>
                                <p>
                                    A: Yes, if you already have an ICU setup at home, we can provide just the nurse.
                                </p>
                            </div>
                            <div>
                                <strong>Q: How fast can the ICU setup be arranged?</strong>
                                <p>
                                    A: We can arrange ICU care within 6–24 hours based on your location and availability.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-lg font-semibold text-gray-800">
                            Need ICU setup at home urgently? Call CareKwik now and get started within 24 hours.
                        </p>
                        <p className="mt-2 text-gray-600">Serving Chandigarh, Mohali, Panchkula, Zirakpur & nearby areas.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
