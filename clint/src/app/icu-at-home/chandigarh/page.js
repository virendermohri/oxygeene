// app/icu-at-home/chandigarh/page.tsx
import Script from 'next/script';
import Image from 'next/image';
import BookService from '@/components/bookservice';

export const metadata = {
  title: "ICU at Home in Chandigarh | ICU Setup, Nurse & Equipment – CareKwik", // 59 chars
  description:
    "Get ICU setup at home in Chandigarh with ventilator, ICU nurse, oxygen support & monitors. 24x7 critical care by CareKwik – fast, safe & trusted.", // 158 chars
  keywords: [
    "ICU setup Chandigarh",
    "ICU nurse at home Chandigarh",
    "ICU ventilator at home",
    "home ICU care Chandigarh",
    "ICU bed rental Chandigarh",
    "critical care Chandigarh",
    "ICU services CareKwik"
  ],
  alternates: {
    canonical: "https://carekwik.com/icu-at-home/chandigarh",
  },
};


export default function ICUHomeChandigarh() {
  return (
    <>
      <Script id="ld-chd-icu" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - ICU at Home Chandigarh",
          "url": "https://carekwik.com/icu-at-home/chandigarh",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163948/icu-home-care_carekwik.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chandigarh",
            "addressRegion": "Chandigarh",
            "postalCode": "160036",
            "addressCountry": "IN"
          },
          "priceRange": "₹₹₹",
          "openingHours": "Mo-Su 09:00-20:00",
          "areaServed": ["Chandigarh", "Manimajra", "Sector 44", "Sector 20"]
        })}
      </Script>
      <Script id="ld-faq-icu" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",

          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is included in ICU at Home service in Chandigarh?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ICU at Home in Chandigarh includes critical care setup, advanced monitoring, ventilator support, trained ICU nurses, and doctor supervision for patients requiring intensive care at home."
              }
            },
            {
              "@type": "Question",
              "name": "Is ICU at Home safe for critical patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, ICU at Home services are designed to replicate hospital-level care with advanced equipment, 24/7 nurse monitoring, and doctor guidance, ensuring safe and effective treatment at home."
              }
            },
            {
              "@type": "Question",
              "name": "How much does ICU at Home cost in Chandigarh?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost depends on the level of care and equipment required. Contact CareKwik for a customized quote based on the patient's medical needs."
              }
            },
            {
              "@type": "Question",
              "name": "What equipment is provided in ICU at Home setup?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The setup typically includes a ventilator, cardiac monitor, suction machine, infusion pump, oxygen concentrator, and other essential ICU-grade devices."
              }
            },
            {
              "@type": "Question",
              "name": "Can I avail ICU care at home for elderly patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, elderly patients who are stable but need continuous critical care can greatly benefit from ICU at Home services in Chandigarh, avoiding the risks of hospital stays."
              }
            }
          ]


        })}
      </Script>
      <div className="mx-auto p-4 md:p-10">
        <div className="flex flex-col md:flex-row md:gap-10">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751540954/wmremove-transformed_5_rcxaud.jpg"
            alt="ICU setup at home in Chandigarh"
            width={480}
            height={450}
            className="rounded-2xl   shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="text-xl font-bold mb-4">Book ICU Setup in Chandigarh</p>
            <BookService servicename="ICU at Home" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto  md:p-6  ">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            ICU Setup at Home in Chandigarh – 24/7 Critical Care
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            CareKwik provides end-to-end ICU setup at home in Chandigarh. Our ICU solution includes everything:
            from hospital beds and cardiac monitors to suction machines, ventilators, oxygen supply, and trained
            nurses for critical care management.
          </p>
          <p className="text-lg text-gray-700">
            Whether post-surgical recovery or terminal care, we bring hospital-level services into your home.
            Avoid hospital-acquired infections and get monitored care in a safe and familiar environment.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 text-gray-700 md:text-lg">
              <div>
                <strong>Q: What’s included in your ICU setup?</strong>
                <p>A: ICU bed, cardiac monitor, oxygen support, ventilator, suction machine, and emergency kit.</p>
              </div>
              <div>
                <strong>Q: Can I request a nurse with ICU experience?</strong>
                <p>A: Yes, we only deploy trained ICU/critical care nurses for this service.</p>
              </div>
              <div>
                <strong>Q: How much does ICU at home cost in Chandigarh?</strong>
                <p>A: It depends on the equipment and duration, but we keep it affordable.</p>
              </div>
              <div>
                <strong>Q: How fast can the setup be arranged?</strong>
                <p>A: We can usually complete the setup within 6 to 12 hours.</p>
              </div>
              <div>
                <strong>Q: Do you cover nearby sectors and Panchkula?</strong>
                <p>A: Yes, we serve all sectors in Chandigarh and nearby cities like Panchkula & Mohali.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
