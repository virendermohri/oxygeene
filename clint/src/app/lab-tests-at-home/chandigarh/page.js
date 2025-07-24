// app/lab-tests-at-home/chandigarh/page.tsx

import Script from 'next/script';
import Image from 'next/image';
import BookService from '@/components/bookservice';

export const metadata = {
  title: 'Lab Tests at Home in Chandigarh | Book Blood & Health Tests',
  description: 'Book lab tests at home in Chandigarh. Blood, thyroid, sugar, and full-body checkups with fast report delivery and doorstep sample collection.',
  keywords: [
    'lab test at home Chandigarh',
    'home blood test Chandigarh',
    'Chandigarh pathology test at home',
    'blood sugar test Chandigarh',
    'CBC test at home',
  ],
  alternates: {
    canonical: 'https://carekwik.com/lab-tests-at-home/chandigarh',
  },
};

export default function ChandigarhLabTestPage() {
  return (
    <>
      {/* JSON-LD Business */}
      <Script id="ld-labtest-chd-business" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "CareKwik - Lab Test at Home Chandigarh",
          "url": "https://carekwik.com/lab-tests-at-home/chandigarh",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chandigarh",
            "addressRegion": "Chandigarh",
            "postalCode": "160036",
            "addressCountry": "IN"
          },
          "telephone": "+91-8307190216",
          "areaServed": ["Chandigarh", "Mohali", "Panchkula"],
          "description": "Trusted lab test collection at home in Chandigarh by certified phlebotomists. Book blood tests, thyroid, CBC and more."
        })}
      </Script>

      {/* JSON-LD FAQ */}
      <Script id="ld-labtest-chd-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can I book a CBC or thyroid test at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, CareKwik offers a range of lab tests at home in Chandigarh including CBC, thyroid (T3 T4 TSH), and lipid profile."
              }
            },
            {
              "@type": "Question",
              "name": "Is female technician available for home collection?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, female sample collectors can be arranged on request for privacy and comfort."
              }
            },
            {
              "@type": "Question",
              "name": "How soon do I get my test reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Reports are delivered digitally within 24–48 hours after collection."
              }
            },
            {
              "@type": "Question",
              "name": "Are tests done by trusted labs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we partner with NABL-accredited labs for all tests."
              }
            }
          ]
        })}
      </Script>

      <div className="mx-auto md:p-10 p-4">
        <div className="flex flex-col md:flex-row md:gap-10">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753345685/20-SM88262_aahocp.jpg"
            alt="Lab test at home in Chandigarh"
            width={400}
            height={450}
            className="rounded-2xl shadow-md border md:w-[60%] object-cover mb-8"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="text-xl font-bold mb-4">Book Lab Test at Home - Chandigarh</p>
            <BookService servicename="Lab Test - Chandigarh" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Lab Tests at Home in Chandigarh – Trusted Diagnostics at Your Doorstep
      </h1>

      <p className="mb-4 text-gray-700 md:text-lg">
        CareKwik brings affordable and convenient <strong>lab test services at home in Chandigarh</strong>. Whether it’s a routine checkup or an urgent blood test, our trained staff collect samples from the comfort of your home with proper hygiene and safety.
      </p>

      <p className="mb-8 text-gray-700 md:text-lg">
        We collaborate with top diagnostic labs in Chandigarh to ensure fast, reliable, and accurate results—sent digitally to you within hours. No queues, no hassle, just quick health insights from home.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Lab Tests You Can Book</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-10">
        <li>Complete Blood Count (CBC)</li>
        <li>Fasting / Postprandial Blood Sugar</li>
        <li>Thyroid Profile (TSH, T3, T4)</li>
        <li>Lipid & Liver Function Tests</li>
        <li>Vitamin D & B12 Tests</li>
        <li>Kidney Function Test (KFT)</li>
        <li>Complete Health Checkup Packages</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4 text-gray-700">
        <div>
          <strong>Q1. Can I book home sample collection in Chandigarh?</strong>
          <p>A: Yes, you can easily schedule home sample collection via our website or WhatsApp.</p>
        </div>
        <div>
          <strong>Q2. Are your reports reliable and verified?</strong>
          <p>A: We work only with certified labs to ensure 100% accurate and verified test results.</p>
        </div>
        <div>
          <strong>Q3. What time can I book the test?</strong>
          <p>A: Slots are available from early morning to evening. Choose any time that suits your routine.</p>
        </div>
        <div>
          <strong>Q4. Do you provide hard copies of reports?</strong>
          <p>A: Reports are shared digitally, but hard copies can be requested at an additional charge.</p>
        </div>
        <div>
          <strong>Q5. Is the phlebotomist experienced?</strong>
          <p>A: Yes, all our sample collection professionals are trained and experienced.</p>
        </div>
      </div>
    </div>
      </div>
    </>
  );
}
