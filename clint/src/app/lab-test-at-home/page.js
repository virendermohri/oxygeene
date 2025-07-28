// app/lab-test-at-home/page.tsx

import Image from 'next/image';
import Script from 'next/script';
import BookService from '@/components/bookservice';
import Link from 'next/link';
export const metadata = {
  title: 'Lab Tests at Home in Chandigarh, Mohali & Panchkula | CareKwik', // 61 characters
  description:
    'CareKwik offers lab tests at home in Chandigarh, Mohali & Panchkula. Fast blood sample collection, accurate reports, and affordable health checkups from trusted labs.', // ~158 characters
  keywords: [
    'lab tests at home',
    'home blood test Chandigarh',
    'lab test Mohali',
    'blood sample collection Panchkula',
    'diagnostic test at home',
    'pathology test at home',
    'full body checkup at home',
    'blood sugar test',
    'urine test collection',
    'CareKwik lab test services',
  ],
  alternates: {
    canonical: 'https://carekwik.com/lab-test-at-home',
  },
};

export default function LabtestPage() {
  return (
    <>
      {/* JSON-LD */}
      <Script id="ld-labtest-business" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "CareKwik - Lab test at Home",
          "url": "https://carekwik.com/lab-test-at-home",
          "logo": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8307190216",
            "contactType": "Customer Service",
          },
          "areaServed": ["Chandigarh", "Mohali", "Panchkula"],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chandigarh",
            "addressRegion": "Chandigarh",
            "postalCode": "160036",
            "addressCountry": "IN",
          },
          "description":
            "Book safe and affordable lab test at home in Chandigarh, Mohali, and Panchkula. Blood, urine, and diagnostic test by trusted lab professionals.",
        })}
      </Script>

      <Script id="ld-labtest-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Which lab test can I book at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can book blood sugar, CBC, thyroid, lipid profile, kidney, liver, and full-body checkups at home.",
              },
            },
            {
              "@type": "Question",
              "name": "Is home sample collection safe and hygienic?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our lab technicians follow strict hygiene protocols and wear PPE kits during collection.",
              },
            },
            {
              "@type": "Question",
              "name": "Do you provide reports online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, soft copies of test reports are delivered to your WhatsApp or email within 24–48 hours.",
              },
            },
            {
              "@type": "Question",
              "name": "Is this available in Mohali and Panchkula too?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we serve Chandigarh, Mohali, and Panchkula for all home diagnostic services.",
              },
            },
          ],
        })}
      </Script>

      {/* Page Content */}
      <div className="mx-auto md:p-10 p-4">
        <div className="flex flex-col md:flex-row md:gap-10">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753345685/20-SM88262_aahocp.jpg"
            alt="Lab Technician collecting blood sample at home"
            width={400}
            height={450}
            className="rounded-2xl shadow-md border md:w-[60%] object-cover mb-8"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="text-xl font-bold mb-4">Book Lab Test at Home</p>
            <BookService servicename="Lab Test" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Lab test at Home in Chandigarh, Mohali & Panchkula
          </h1>

          <p className="mb-4 text-gray-700 text-lg">
            CareKwik offers safe, accurate, and affordable lab test services right at your doorstep.
            Whether it&lsquo;s blood test, urine test, or a complete body checkup, our certified technicians
            ensure hygienic and professional home sample collection.
          </p>

          <p className="mb-6 text-gray-700 text-lg">
            We partner with trusted labs and diagnostic partners in Chandigarh, Mohali, and Panchkula.
            No more waiting in queues—get reliable health reports from the comfort of your home.
          </p>

          <h2 className="text-xl font-semibold mb-4 mt-10">Popular Lab test You Can Book</h2>
          <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
            <li>Blood Sugar (Fasting/PP)</li>
            <li>Complete Blood Count (CBC)</li>
            <li>Thyroid (T3 T4 TSH)</li>
            <li>Liver Function Test (LFT)</li>
            <li>Kidney Function Test (KFT)</li>
            <li>Lipid Profile / Cholesterol</li>
            <li>Full Body Health Packages</li>
          </ul>
          <div className="bg-gray-50 py-8 px-4 rounded-lg  mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Lab Test at Home in Other Cities</h2>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li><Link href="/lab-test-at-home/chandigarh" className="hover:underline">Lab Test at Home in Chandigarh</Link></li>
              <li><Link href="/lab-test-at-home/mohali" className="hover:underline">Lab Test at Home in Mohali</Link></li>
              <li><Link href="/lab-test-at-home/panchkula" className="hover:underline">Lab Test at Home in Panchkula</Link></li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <div>
              <strong>Q: Are lab reports shared online?</strong>
              <p>A: Yes, soft copies are sent via WhatsApp or email within 24–48 hours.</p>
            </div>
            <div>
              <strong>Q: How do I prepare for fasting test?</strong>
              <p>A: Avoid food for 10–12 hours before your scheduled blood test. Water is allowed.</p>
            </div>
            <div>
              <strong>Q: Can I book a female phlebotomist?</strong>
              <p>A: Yes, we offer female sample collectors upon request for women’s comfort and privacy.</p>
            </div>
            <div>
              <strong>Q: What are the charges for lab test at home?</strong>
              <p>A: Pricing depends on the test, but we ensure competitive and transparent rates.</p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Need reliable lab testing at home? Book with CareKwik and get doorstep service within hours.
            </p>
            <p className="text-gray-600 mt-2">
              Serving Chandigarh, Mohali, Panchkula & surrounding cities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
