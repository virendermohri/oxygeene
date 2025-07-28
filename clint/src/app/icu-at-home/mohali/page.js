// app/icu-at-home/mohali/page.tsx
import Script from 'next/script';
import Image from 'next/image';
import BookService from '@/components/bookservice';

export const metadata = {
  title: 'ICU Setup at Home in Mohali | ICU Nurse & Equipment | CareKwik',
  description:
    'Need ICU at home in Mohali? Get ventilator, monitors, suction, ICU nurse & critical care at your doorstep. Safe & affordable.',
  keywords: [
    'ICU setup at home Mohali',
    'ICU care Mohali',
    'ICU nurse at home in Mohali',
    'ventilator at home Mohali',
    'ICU bed on rent Mohali',
  ],
  alternates: {
    canonical: 'https://carekwik.com/icu-at-home/mohali',
  },
};

export default function ICUHomeMohali() {
  return (
    <>
      <Script id="ld-mohali-icu" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - ICU at Home Mohali",
          "url": "https://carekwik.com/icu-at-home/mohali",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163948/icu-home-care_carekwik.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mohali",
            "addressRegion": "Punjab",
            "postalCode": "160062",
            "addressCountry": "IN"
          },
          "priceRange": "₹₹₹",
          "openingHours": "Mo-Su 09:00-20:00",
          "areaServed": ["Mohali", "Kharar", "Zirakpur"]
        })}
      </Script>
      <Script id="ld-faq-icu" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",

          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is included in ICU at Home service in Mohali?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ICU at Home in Mohali includes ventilator, cardiac monitors, suction machines, ICU beds, oxygen support, and 24x7 trained ICU nurses."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can you set up ICU care at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We can set up ICU care at home within 6-12 hours in most Mohali locations."
              }
            },
            {
              "@type": "Question",
              "name": "Is the ICU setup safe for critical patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our ICU setup is designed to provide hospital-level care in the comfort of your home, ensuring patient safety and comfort."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide trained nurses for ICU care?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide certified ICU nurses with extensive critical care experience."
              }
            },
            {
              "@type": "Question",
              "name": "What areas do you serve in Mohali?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all major areas in Mohali including Kharar, Zirakpur, and surrounding regions."
              }
            }
          ]

        })}
      </Script>
      <div className="mx-auto p-4 md:p-10">
        <div className="flex flex-col md:flex-row md:gap-10">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751540954/wmremove-transformed_5_rcxaud.jpg"
            alt="ICU setup at home in Mohali"
            width={480}
            height={450}
            className="rounded-2xl   shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="text-xl font-bold mb-4">Book ICU Setup in Mohali</p>
            <BookService servicename="ICU at Home" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto  md:p-6  ">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            ICU Setup at Home in Mohali – Critical Care in Comfort
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            CareKwik offers professional ICU setup at home in Mohali for patients who require critical care but
            prefer the comfort of their own surroundings. Our service includes ICU beds, cardiac monitors,
            ventilators, oxygen support, suction machines, and 24x7 ICU-trained nurses.
          </p>
          <p className="text-lg text-gray-700">
            Whether it’s a post-operative patient or a long-term critical care case, we ensure hospital-like
            treatment under expert supervision. With fast setup and medical-grade equipment, families in Mohali
            can now avoid the stress and cost of prolonged hospital stays.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700 md:text-lg">
            <div>
              <strong>Q: What equipment is included in ICU setup at home?</strong>
              <p>A: It includes ICU bed, ventilator, suction machine, cardiac monitor, oxygen cylinder and more.</p>
            </div>
            <div>
              <strong>Q: Are your nurses trained for ICU care?</strong>
              <p>A: Yes, we provide certified ICU nurses with critical care experience.</p>
            </div>
            <div>
              <strong>Q: How quickly can you set up ICU care?</strong>
              <p>A: Within 6–12 hours in most Mohali locations.</p>
            </div>
            <div>
              <strong>Q: Is this service available at night?</strong>
              <p>A: Yes, we offer 24/7 emergency ICU setup services.</p>
            </div>
            <div>
              <strong>Q: Do you serve nearby areas like Kharar or Zirakpur?</strong>
              <p>A: Yes, we cover all nearby locations around Mohali.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
