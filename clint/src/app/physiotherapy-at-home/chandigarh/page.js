import BookService from '@/components/bookservice';
import Script from 'next/script';
import Image from 'next/image';

export const metadata = {
  title: 'Home Physiotherapy in Chandigarh | Certified Physios | CareKwik',
  description:
    'Get physiotherapy at home in Chandigarh by certified physiotherapists. We treat stroke, paralysis, back pain, ortho injuries, and post-surgery rehab.',
  keywords: [
    'home physiotherapy in Chandigarh',
    'physiotherapist at home Chandigarh',
    'stroke rehabilitation Chandigarh',
    'paralysis physio at home Chandigarh',
    'female physiotherapist Chandigarh',
    'back pain physiotherapy Chandigarh',
    'orthopedic physiotherapy Chandigarh',
    'post-surgery physio at home Chandigarh',
    'sports injury physiotherapy Chandigarh',
    'senior citizen physio care Chandigarh',
  ]
  ,
  alternates: {
    canonical: 'https://carekwik.com/physiotherapy-at-home/chandigarh',
  },
};

export default function ChandigarhPage() {
  return (
    <>
      <Script id="ld-physio-chd" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - Physiotherapy at Home Chandigarh",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
          "url": "https://carekwik.com/physiotherapy-at-home/chandigarh",
          "telephone": "+91-8307190216",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chandigarh",
            "addressRegion": "Chandigarh",
            "postalCode": "160036",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Su 09:00-20:00",
          "description": "Certified home physiotherapists in Chandigarh for stroke, paralysis, ortho & elderly care. Book today!",
          "priceRange": "₹₹"
        })}
      </Script>

      <div className="p-4 md:p-10  mx-auto">
        <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
          <Image
             src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751465176/wmremove-transformed_4_eemrcj.jpg"
            alt="Physiotherapy at Home Chandigarh"
            width={400}
            height={450}
            className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <h2 className="text-xl font-bold mb-4">Book Physio Service – Chandigarh</h2>
            <BookService servicename="Physiotherapy" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mt-10 mb-4">Home Physiotherapy in Chandigarh – Care That Comes to You</h1>
        <p className="mb-4 md:text-lg text-gray-700">
          Recover faster and safer in the comfort of your home with CareKwik’s certified physiotherapists in Chandigarh.
          Whether it's stroke recovery, post-surgical rehab, or chronic pain like back and joint issues—our experts
          deliver personalized sessions at your doorstep. No hospital queues. No travel stress.
        </p>

        <p className="mb-6 md:text-lg text-gray-700">
          We offer <strong>female physiotherapists</strong> for women, geriatric physio for seniors, and
          condition-specific care including <strong>paralysis, arthritis, sports injuries,</strong> and more.
          Book a home visit today across all sectors of Chandigarh.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Services Include:</h2>
        <ul className="list-disc md:text-lg  pl-5 space-y-1 text-gray-700">
          <li>Neuro Physiotherapy for stroke & paralysis</li>
          <li>Ortho Rehab (knee/hip/back)</li>
          <li>Post-surgical physiotherapy</li>
          <li>Geriatric (elderly) physiotherapy</li>
          <li>Back/Neck Pain Therapy</li>
          <li>Female physiotherapists (on request)</li>
        </ul>
        <div className='mt-14'>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700 md:text-lg">
            <div>
              <strong>Q: Can I book female physiotherapists at home?</strong>
              <p>A: Yes, we provide trained female physiotherapists on request for home sessions.</p>
            </div>
            <div>
              <strong>Q: Do you provide physiotherapy for stroke/paralysis patients?</strong>
              <p>A: Absolutely. We have certified neuro-physiotherapists for stroke recovery, paralysis, and brain injury rehab.</p>
            </div>
            <div>
              <strong>Q: How soon can I get a physio at home in Chandigarh?</strong>
              <p>A: You can usually book same-day or next-day appointments based on your location and availability.</p>
            </div>
            <div>
              <strong>Q: Is this service available in all sectors of Chandigarh?</strong>
              <p>A: Yes, we serve all sectors and surrounding areas in Chandigarh, including Mani Majra, Sector 40, and IT Park.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg font-semibold">Call us now to schedule a session in Chandigarh.</p>
          <p className="text-sm text-gray-600">Your recovery, our care.</p>
        </div>
      </div>
    </>
  );
}
