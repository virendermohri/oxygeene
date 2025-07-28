import BookService from '@/components/bookservice';
import Script from 'next/script';
import Image from 'next/image';

export const metadata = {
  title: 'Physiotherapy at Home in Panchkula | CareKwik',
  description:
    'Hire expert physiotherapists at home in Panchkula for pain relief, ortho recovery, elderly rehab, stroke care, and neurological therapy.',
  keywords: [
    'physiotherapy at home Panchkula',
    'home physiotherapist Panchkula',
    'paralysis physio Panchkula',
    'stroke recovery Panchkula',
    'female physiotherapist Panchkula',
    'orthopedic physiotherapy Panchkula',
    'elderly physio care Panchkula',
    'neuro physio Panchkula',
    'back pain physio Panchkula',
    'post-surgery physiotherapy Panchkula',
  ],
  alternates: {
    canonical: 'https://carekwik.com/physiotherapy-at-home/panchkula',
  },
};

export default function PanchkulaPage() {
  return (
    <>
      <Script id="ld-physio-pkl" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - Physiotherapy at Home Panchkula",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
          "url": "https://carekwik.com/physiotherapy-at-home/panchkula",
          "telephone": "+91-8307190216",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Panchkula",
            "addressRegion": "Haryana",
            "postalCode": "134109",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Su 09:00-20:00",
          "description": "Home physiotherapy in Panchkula by experienced physios. Expert rehab for stroke, paralysis, ortho & elderly patients.",
          "priceRange": "₹₹"
        })}
      </Script>
      <Script id="ld-faq-physio-pkl" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What physiotherapy treatments are available at home in Panchkula?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CareKwik offers home physiotherapy in Panchkula for orthopedic pain, stroke rehabilitation, post-surgery recovery, paralysis, arthritis, and more."
              }
            },
            {
              "@type": "Question",
              "name": "Can I request a female physiotherapist at home in Panchkula?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, CareKwik provides trained female physiotherapists for patients who prefer female professionals for their in-home physiotherapy sessions in Panchkula."
              }
            },
            {
              "@type": "Question",
              "name": "How do I book a physiotherapist in Panchkula?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To book a home physiotherapy session in Panchkula, simply fill out the online booking form on the CareKwik website or call our support helpline."
              }
            },
            {
              "@type": "Question",
              "name": "Are home physiotherapy sessions in Panchkula effective?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, in-home physiotherapy in Panchkula is highly effective as it provides personalized care and comfort, speeding up recovery for various conditions."
              }
            },
            {
              "@type": "Question",
              "name": "Is home physiotherapy in Panchkula affordable?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CareKwik offers transparent and affordable pricing for physiotherapy at home in Panchkula, without compromising on the quality of care."
              }
            }
          ]
        })}
      </Script>
      <div className="p-4 md:p-10  mx-auto">
        <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751465176/wmremove-transformed_4_eemrcj.jpg"
            alt="Physiotherapy at Home Panchkula"
            width={400}
            height={450}
            className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <h2 className="text-xl font-bold mb-4">Book Physio Service – Panchkula</h2>
            <BookService servicename="Physiotherapy" />
          </div>
        </div>
        <div className="max-w-6xl mx-auto md:p-6">
          <h1 className="text-2xl font-bold mt-10 mb-4">Physiotherapy at Home in Panchkula – Professional & Affordable</h1>
          <p className="mb-4 md:text-lg text-gray-700">
            Get hospital-quality physiotherapy sessions at home in Panchkula with CareKwik. From joint pain
            and arthritis to stroke rehab and post-surgical care, we provide personalized physio care for
            faster healing.
          </p>

          <p className="mb-6 md:text-lg text-gray-700">
            Our certified male and female physiotherapists visit all sectors of Panchkula, including
            MDC, Sector 6–25, and Pinjore. Flexible slots, transparent pricing, and clinical results.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">What We Offer:</h2>
          <ul className="list-disc pl-5 md:text-lg  space-y-1 text-gray-700">
            <li>Stroke & Paralysis Home Therapy</li>
            <li>Joint Pain & Ortho Physio</li>
            <li>Post-Surgical Rehab (Knee/Spine/Hip)</li>
            <li>Geriatric Home Physio</li>
            <li>Female Physiotherapists Available</li>
          </ul>
          <div className='mt-14'>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-4 text-gray-700 md:text-lg">
              <div>
                <strong>Q: Do you offer physio services in Sector 20 Panchkula?</strong>
                <p>A: Yes, we serve all sectors including 6–25, MDC, and outskirts like Pinjore and Kalka.</p>
              </div>
              <div>
                <strong>Q: What are the charges for home physiotherapy in Panchkula?</strong>
                <p>A: Charges depend on condition and location, starting from ₹500/session.</p>
              </div>
              <div>
                <strong>Q: Is female physiotherapy available for elderly women?</strong>
                <p>A: Yes, we offer experienced female physiotherapists for seniors and post-operative women.</p>
              </div>
              <div>
                <strong>Q: Can I get physio for back pain and spondylitis?</strong>
                <p>A: Absolutely. Our ortho-physios treat neck, back, shoulder, and spine issues.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-semibold">Call today and get your first session within 24 hours in Panchkula.</p>
            <p className="text-sm text-gray-600">CareKwik – Your trusted recovery partner at home.</p>
          </div>
        </div>
      </div>
    </>
  );
}
