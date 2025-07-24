// app/elder-care-at-home/page.tsx
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
  title: 'Elder Care at Home in Chandigarh & Mohali | CareKwik',
  description: 'Trusted elder care services at home in Chandigarh, Mohali, and nearby areas. Hire trained, background-verified caretakers. Safe, affordable, and flexible options available.',
  keywords: [
    'elder care at home',
    'senior care Chandigarh',
    'elder care Mohali',
    'home nursing for elderly',
    'old age care services',
    'palliative care at home',
    'female caregiver at home',
    'paralytic patient care',
    'home attendant for seniors',
    'home health care in Chandigarh',
  ],

  alternates: {
    canonical: 'https://carekwik.com/elder-care-at-home',
  },
};

export default function ElderCarePage() {
  return (
    <>
      <Script id="ld-localbusiness" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - Elder Care at Home",
          "@id": "https://carekwik.com/elder-care-at-home#carekwik",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
          "url": "https://carekwik.com/elder-care-at-home",
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
          "description": "Compassionate elder care services at home. Hire trained and verified caregivers for elderly assistance, hygiene, companionship, and patient care.",
          "areaServed": ["Chandigarh", "Mohali", "Panchkula", "Ambala"]
        })}
      </Script>

      <Script id="ld-faq"  type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://carekwik.com/elder-care-at-home#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you provide elder care at home in Chandigarh?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide full-time and part-time elder care services across all sectors of Chandigarh."
              }
            },
            {
              "@type": "Question",
              "name": "Are the caregivers background-verified and trained?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. All our elder care attendants are trained, experienced, and background-verified for your safety."
              }
            },
            {
              "@type": "Question",
              "name": "Can I book female attendants for elderly women?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer culturally appropriate female caregivers for elderly women as per your preference."
              }
            },
            {
              "@type": "Question",
              "name": "What medical conditions do you cover?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide support for conditions like paralysis, dementia, Alzheimer’s, Parkinson’s, and post-surgery recovery."
              }
            }
          ]
        })}
      </Script>

      <div className=" mx-auto md:p-10 md:p-10 p-4">
        {/* Hero Image */}
        <div className="flex md:gap-10 flex-col md:flex-row justify-between   ">

          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg"
            alt="Trained Elder Caretaker at Home in Chandigarh Mohali"
            width={400}
            height={450}
            className="rounded-2xl   shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="md:text-2xl text-xl font-bold mb-4">Book Elder Care Service</p>
            <BookService servicename={"Elder Care"} />
          </div>
        </div>
        <div className="max-w-6xl mx-auto  md:p-6  ">

          {/* Heading */}
          <h1 className="text-2xl mt-10 font-bold text-gray-800 mb-4">
            Elder Care at Home in Chandigarh, Mohali & Panchkula – Hire Trusted Caregivers
          </h1>

          {/* Description */}
          <p className="mb-4 md:text-lg">
            At CareKwik, we understand that elderly family members need not just care, but compassion.
            Our elder care services provide trained, background-verified caretakers who assist with daily
            activities, medication reminders, mobility support, and companionship—all in the comfort of your home.
          </p>

          <p className="mb-4 md:text-lg">
            We proudly serve <strong>Chandigarh, Mohali, Panchkula, Ambala</strong>, and surrounding areas.
            Whether you need part-time, full-time, or overnight support, we ensure you get the right caregiver without any agency middlemen.
          </p>
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Specialized Elder Care Services
            </h2>
            <p className="text-gray-700 mb-6 md:text-lg">
              At CareKwik, we understand that every elder’s needs are unique. That’s why we offer
              dedicated <strong>in-home care solutions</strong> tailored for different medical and emotional
              conditions. Our trained caregivers provide 24/7 support for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 md:text-lg space-y-2">
              <li><strong>Female Elder Care</strong> – Compassionate and culturally sensitive care for elderly women.</li>
              <li><strong>Palliative Care</strong> – End-of-life support focused on comfort and dignity.</li>
              <li><strong>Paralytic Patient Care</strong> – Full assistance with mobility, hygiene, and physiotherapy needs.</li>
              <li><strong>Parkinson’s Care</strong> – Steady support for tremors, movement, and emotional wellness.</li>
              <li><strong>Dementia & Alzheimer’s Care</strong> – Patient, structured routines and memory support at home.</li>
              <li><strong>Old Age Caretaker</strong> – Daily support for seniors who require help with basic tasks and companionship.</li>
            </ul>
          </div>


          {/* FAQ Section */}
          <div className='mt-14 '>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-4 text-gray-700 md:text-lg">
              <div>
                <strong>Q: Can I book part-time or full-time elder care?</strong>
                <p>A: Yes, CareKwik offers flexible durations based on your needs.</p>
              </div>
              <div>
                <strong>Q: Are the caregivers trained and verified?</strong>
                <p>
                  A: Yes, all caregivers are trained and background-verified for safe home visits.
                </p>
              </div>
              <div>
                <strong>Q: Is this service available in Mohali & Panchkula?</strong>
                <p>
                  A: Yes, we currently serve Chandigarh, Mohali, Panchkula, Ambala and nearby cities.
                </p>
              </div>
              <div>
                <strong>Q: Will I get the same caretaker daily?</strong>
                <p>
                  A: We try to assign consistent staff. Replacements are provided if needed at no
                  extra charge.
                </p>
              </div>
            </div>
            <div className="mt-20 text-center">
              <p className="text-lg font-semibold text-gray-800">
                Need reliable elder care at home? Book with CareKwik and get a trained caregiver within 24 hours.
              </p>
              <p className="mt-2 text-gray-600">Serving families across Chandigarh, Mohali, Panchkula & nearby cities.</p>
            </div>

          </div>
        </div>
      </div>
    </>

  );
}
