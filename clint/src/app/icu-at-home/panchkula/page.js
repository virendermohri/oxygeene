// app/icu-at-home/panchkula/page.tsx
import Script from 'next/script';
import Image from 'next/image';
import BookService from '@/components/bookservice';

export const metadata = {
  title: 'ICU at Home in Panchkula | Ventilator, ICU Nurses | CareKwik',
  description:
    'Get ICU setup at home in Panchkula with ventilator, cardiac monitors, ICU-trained nurses. Trusted critical care at your doorstep.',
  keywords: [
    'ICU setup Panchkula',
    'ICU nurse at home Panchkula',
    'home ICU care Panchkula',
    'ventilator rental Panchkula',
    'ICU equipment Panchkula',
  ],
  alternates: {
    canonical: 'https://carekwik.com/icu-at-home/panchkula',
  },
};

export default function ICUHomePanchkula() {
  return (
    <>
      <Script id="ld-pkl-icu" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - ICU at Home Panchkula",
          "url": "https://carekwik.com/icu-at-home/panchkula",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163948/icu-home-care_carekwik.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Panchkula",
            "addressRegion": "Haryana",
            "postalCode": "134109",
            "addressCountry": "IN"
          },
          "priceRange": "₹₹₹",
          "openingHours": "Mo-Su 09:00-20:00",
          "areaServed": ["Panchkula", "Manimajra", "Kalka", "Pinjore"]
        })}
      </Script>

      <div className=" mx-auto md:p-10 md:p-10 p-4">
        {/* Hero Image */}
        <div className="flex md:gap-10 flex-col md:flex-row justify-between   ">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751540954/wmremove-transformed_5_rcxaud.jpg"
            alt="ICU setup at home in Panchkula"
            width={480}
            height={450}
            className="rounded-2xl   shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="text-xl font-bold mb-4">Book ICU Setup in Panchkula</p>
            <BookService servicename="ICU at Home" />
          </div>
        </div>

         <div className="max-w-6xl mx-auto  md:p-6  ">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            ICU at Home in Panchkula – 24/7 Nursing & Equipment
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            If your loved one needs intensive care but you&lsquo;d prefer to avoid hospital stays, CareKwik offers
            full ICU setup at home in Panchkula. We install ICU beds, oxygen support, ventilators, and monitoring
            equipment along with 24/7 nursing.
          </p>
          <p className="text-lg text-gray-700">
            Whether recovering from surgery, trauma, or illness, our home ICU brings advanced care in a safe and
            cost-effective way. Our critical care nurses ensure professional monitoring and support.
          </p>
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 text-gray-700 md:text-lg">
              <div>
                <strong>Q: What are the benefits of ICU at home in Panchkula?</strong>
                <p>
                  A: Comfort, personalized care, and lower infection risk compared to hospital ICU.
                </p>
              </div>
              <div>
                <strong>Q: What cities do you serve near Panchkula?</strong>
                <p>A: We also cover Chandigarh, Zirakpur, and Mohali areas.</p>
              </div>
              <div>
                <strong>Q: Can you provide female ICU nurses?</strong>
                <p>A: Yes, female staff is available on request.</p>
              </div>
              <div>
                <strong>Q: Is ICU monitoring 24/7?</strong>
                <p>A: Yes, our nurses monitor vitals and provide round-the-clock care.</p>
              </div>
              <div>
                <strong>Q: What’s the cost of home ICU setup?</strong>
                <p>A: Cost depends on duration and equipment; we keep pricing transparent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
