// app/lab-test-at-home/mohali/page.tsx
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
  title: 'Lab test at Home in Mohali | Home Sample Collection – CareKwik',
  description: 'Get blood test, full body checkups, and diagnostics at home in Mohali. Safe, affordable, and hassle-free lab test with sample collection at your doorstep.',
  keywords: [
    'lab test at home Mohali',
    'blood test at home Mohali',
    'home sample collection Mohali',
    'diagnostic services Mohali',
    'full body checkup Mohali'
  ],
  alternates: {
    canonical: 'https://carekwik.com/lab-test-at-home/mohali',
  },
};

export default function LabtestMohali() {
  return (
    <>
      <Script id="ld-labtest-mohali" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "CareKwik Lab test - Mohali",
          "url": "https://carekwik.com/lab-test-at-home/mohali",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/labtest_kw5tyy.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mohali",
            "addressRegion": "Punjab",
            "postalCode": "160062",
            "addressCountry": "IN"
          },
          "description": "Home sample collection and lab test services in Mohali. Book test easily with doorstep service.",
          "openingHours": "Mo-Su 07:00-21:00",
          "telephone": "+91-8307190216",
          "areaServed": ["Mohali", "Zirakpur", "Kharar", "Chandigarh"]
        })}
      </Script>

      <div className="mx-auto md:p-10 p-4">
        <div className="flex flex-col md:flex-row md:gap-10">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753345685/20-SM88262_aahocp.jpg"
            alt="Lab test at home in Mohali"
            width={500}
            height={400}
            className="rounded-2xl shadow-md border md:w-[60%] object-cover mb-8"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="text-2xl font-bold text-gray-800 mb-4">
              Book Lab Test at Home in Mohali
            </p>
            <BookService servicename="Lab test" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Lab Test at Home in Mohali – Reliable, Affordable & Hassle-Free Diagnostics
          </h1>

          <p className="mb-4 text-gray-700 md:text-lg">
            CareKwik offers reliable and hygienic <strong>lab test at home in Mohali</strong>, eliminating the need to visit a diagnostic center. Whether you&lsquo;re managing a chronic illness, doing a routine checkup, or just want a quick blood report—our certified phlebotomists visit your home, collect samples safely, and deliver fast results.
          </p>

          <p className="mb-8 text-gray-700 md:text-lg">
            With flexible booking slots, digital reports, and affordable packages, we make healthcare convenient for families and individuals. All test are performed by trusted labs and you get reports directly on WhatsApp or email.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Lab test You Can Book</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-10">
            <li>CBC (Complete Blood Count)</li>
            <li>Blood Sugar (Fasting / PP)</li>
            <li>Lipid Profile</li>
            <li>LFT (Liver Function Test)</li>
            <li>TSH, T3, T4 (Thyroid Profile)</li>
            <li>Vitamin D & B12</li>
            <li>Kidney Function Test (KFT)</li>
            <li>Full Body Health Packages</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <strong>Q1. Do you offer full body checkups at home in Mohali?</strong>
              <p>A: Yes, we provide comprehensive full body checkup packages with home sample collection and quick reporting.</p>
            </div>
            <div>
              <strong>Q2. How do I book a lab test in Mohali?</strong>
              <p>A: You can book via our website or WhatsApp. Just choose your test and time slot — our technician will visit your home.</p>
            </div>
            <div>
              <strong>Q3. Are the reports from CareKwik labs accurate?</strong>
              <p>A: Absolutely. We partner with trusted and NABL-accredited labs for processing all test results.</p>
            </div>
            <div>
              <strong>Q4. How long does it take to receive the report?</strong>
              <p>A: Most reports are delivered within 12–24 hours via WhatsApp or email.</p>
            </div>
            <div>
              <strong>Q5. Do you have female phlebotomists for women?</strong>
              <p>A: Yes, on request we can send trained female professionals for sample collection.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
