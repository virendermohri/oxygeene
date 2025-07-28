// app/physiotherapy-at-home/page.tsx
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
export const metadata = {
  title: 'Physiotherapy at Home in Chandigarh, Mohali & Panchkula | CareKwik',
  description:
    'Get expert physiotherapy at home in Chandigarh, Mohali & Panchkula. Hire certified physiotherapists for back pain, paralysis, stroke recovery & ortho rehab.',
  keywords: [
    'physiotherapy at home',
    'home physiotherapy services',
    'certified physiotherapist at home',
    'post-surgery rehabilitation at home',
    'stroke recovery physiotherapy',
    'paralysis physiotherapy home visit',
    'female physiotherapist at home',
    'elderly physiotherapy care',
    'back and neck pain physio at home',
    'orthopedic home physiotherapy',
  ],
  alternates: {
    canonical: 'https://carekwik.com/physiotherapy-at-home',
  },
};


export default function PhysiotherapyPage() {
  return (
    <>
      {/* JSON-LD LocalBusiness */}
      <Script id="ld-physio-business" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - Physiotherapy at Home",
          "@id": "https://carekwik.com/physiotherapy-at-home#carekwik",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
          "url": "https://carekwik.com/physiotherapy-at-home",
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
          "description": "Certified physiotherapists at home for stroke rehab, paralysis, ortho injuries and elderly care in Chandigarh, Mohali & Panchkula.",
          "areaServed": ["Chandigarh", "Mohali", "Panchkula"]
        })}
      </Script>

      {/* JSON-LD FAQ */}
      <Script id="ld-physio-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you offer physiotherapy for stroke or paralysis patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide post-stroke and paralysis rehab at home with trained neuro-physiotherapists."
              }
            },
            {
              "@type": "Question",
              "name": "Are your physiotherapists certified?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All our physiotherapists are qualified and registered professionals with home visit experience."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide female physiotherapists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, female physiotherapists are available on request for female patients."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We currently serve Chandigarh, Mohali, Panchkula and nearby locations."
              }
            }
          ]
        })}
      </Script>

      <div className="mx-auto md:p-10 p-4">
        {/* Hero Section */}
        <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751465176/wmremove-transformed_4_eemrcj.jpg"
            alt="Physiotherapy at Home in Chandigarh"
            width={400}
            height={450}
            className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="md:text-2xl text-xl font-bold mb-4">Book Physiotherapy at Home</p>
            <BookService servicename="Physiotherapy" />
          </div>
        </div>

        {/* Page Content */}
        <div className="max-w-6xl mx-auto md:p-6">
          <h1 className="text-2xl mt-10 font-bold text-gray-800 mb-4">
            Physiotherapy at Home in Chandigarh, Mohali & Panchkula
          </h1>

          <p className="mb-4 md:text-lg text-gray-700">
            CareKwik offers professional <strong>home physiotherapy services</strong> for elderly patients,
            accident recovery, post-surgery rehab, ortho issues, and neuro conditions like stroke and paralysis.
            Our licensed physiotherapists bring hospital-grade care to the comfort of your home.
          </p>

          <p className="mb-4 md:text-lg text-gray-700">
            Whether you&lsquo;re recovering from surgery, facing mobility challenges, or need long-term neuro rehab,
            our expert physios are here to help — serving <strong>Chandigarh, Mohali, Panchkula</strong> & nearby areas.
          </p>

          <h2 className="text-xl mt-8 font-semibold text-gray-800 mb-2">Our Special Physiotherapy Services</h2>
          <ul className="list-disc pl-6 text-gray-700 md:text-lg space-y-2">
            <li><strong>Stroke Rehabilitation</strong> – Regain strength and mobility with home-based neuro rehab.</li>
            <li><strong>Paralysis Recovery</strong> – Muscle strengthening, passive motion & advanced care.</li>
            <li><strong>Ortho Physiotherapy</strong> – Knee, back, shoulder, joint pain and post-fracture rehab.</li>
            <li><strong>Geriatric Physiotherapy</strong> – Elderly care for arthritis, fall recovery, and balance improvement.</li>
            <li><strong>Post-Surgery Physio</strong> – After knee/hip replacement, spine surgery, or trauma.</li>
            <li><strong>Female Physiotherapists</strong> – Available for home visits on request.</li>
          </ul>
          <div className=" py-8 px-4 rounded-lg  bg-gray-50 mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Physiotherapy at Home in Other Cities</h2>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li><Link href="/physiotherapy-at-home/chandigarh" className="hover:underline">Physiotherapy at Home in Chandigarh</Link></li>
              <li><Link href="/physiotherapy-at-home/mohali" className="hover:underline">Physiotherapy at Home in Mohali</Link></li>
              <li><Link href="/physiotherapy-at-home/panchkula" className="hover:underline">Physiotherapy at Home in Panchkula</Link></li>
            </ul>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 text-gray-700 md:text-lg">
              <div>
                <strong>Q: Do you provide home visits in Panchkula?</strong>
                <p>A: Yes, our team visits all sectors of Panchkula, Mohali & Chandigarh.</p>
              </div>
              <div>
                <strong>Q: Are sessions available for elderly patients?</strong>
                <p>A: Absolutely! We specialize in geriatric and elderly physio support at home.</p>
              </div>
              <div>
                <strong>Q: How long are the sessions?</strong>
                <p>A: Sessions range from 30–60 minutes depending on the condition and requirement.</p>
              </div>
              <div>
                <strong>Q: What are your charges?</strong>
                <p>A: Pricing depends on the case. We offer affordable and flexible packages.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Start your recovery with expert physiotherapy at home. Book with CareKwik now!
            </p>
            <p className="mt-2 text-gray-600">Serving Chandigarh, Mohali, Panchkula & nearby regions.</p>
          </div>
        </div>
      </div>
    </>
  );
}
