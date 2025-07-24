import BookService from '@/components/bookservice';
import Script from 'next/script';
import Image from 'next/image';

export const metadata = {
  title: 'Home Physiotherapy in Mohali | Certified Physios | CareKwik',
  description:
    'Book home physiotherapy in Mohali for stroke, paralysis, joint pain, ortho and elderly care. Certified physiotherapists at your doorstep.',
  keywords: [
    'home physiotherapy in Mohali',
    'physiotherapist at home Mohali',
    'stroke rehab at home Mohali',
    'paralysis physiotherapy Mohali',
    'female physio at home Mohali',
    'orthopedic physiotherapist Mohali',
    'post-surgical rehab Mohali',
    'back and joint pain physio Mohali',
    'sports physiotherapy Mohali',
    'geriatric physiotherapy Mohali',
  ]
  ,
  alternates: {
    canonical: 'https://carekwik.com/physiotherapy-at-home/mohali',
  },
};

export default function MohaliPage() {
  return (
    <>
      <Script id="ld-physio-mohali" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - Physiotherapy at Home Mohali",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
          "url": "https://carekwik.com/physiotherapy-at-home/mohali",
          "telephone": "+91-8307190216",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mohali",
            "addressRegion": "Punjab",
            "postalCode": "160055",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Su 09:00-20:00",
          "description": "Certified physiotherapists in Mohali for home visits. Stroke rehab, paralysis, ortho care and post-surgical physiotherapy.",
          "priceRange": "₹₹"
        })}
      </Script>

      <div className="p-4 md:p-10  mx-auto">
        <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
          <Image
             src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751465176/wmremove-transformed_4_eemrcj.jpg"
            alt="Physiotherapy at Home Mohali"
            width={400}
            height={450}
            className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <h2 className="text-xl font-bold mb-4">Book Physio Service – Mohali</h2>
            <BookService servicename="Physiotherapy" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mt-10 mb-4">Home Physiotherapy in Mohali – Certified & Reliable Care</h1>
        <p className="mb-4  md:text-lg text-gray-700">
          CareKwik brings expert physiotherapy to your home in Mohali. Whether you need stroke rehab, joint pain therapy,
          or post-surgery recovery, our trained physiotherapists provide customized sessions that speed up healing safely.
        </p>

        <p className="mb-6 md:text-lg text-gray-700">
          We offer <strong>female physios</strong> for elderly women, orthopedic care for injuries, and neuro-rehab
          for paralysis, Parkinson’s, and more. Service available across sectors, Kharar, and Airport Road.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Services in Mohali Include:</h2>
        <ul className="list-disc pl-5 md:text-lg  space-y-1 text-gray-700">
          <li>Neuro & Paralysis Rehab</li>
          <li>Post-Operative Ortho Physiotherapy</li>
          <li>Back & Neck Pain Therapy</li>
          <li>Senior Citizen Physio Care</li>
          <li>Home Physio by Female Therapists</li>
        </ul>
        <div className='mt-14'>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700 md:text-lg">
            <div>
              <strong>Q: Is home physiotherapy available in all sectors of Mohali?</strong>
              <p>A: Yes, we cover Phase 1–11, Sector 70–120, Kharar, and nearby areas.</p>
            </div>
            <div>
              <strong>Q: Do you provide neuro and orthopedic physiotherapists?</strong>
              <p>A: Absolutely. We offer expert physiotherapists for stroke, paralysis, arthritis, and back pain.</p>
            </div>
            <div>
              <strong>Q: Can I request a female physio for my mother?</strong>
              <p>A: Yes. We provide trained female physiotherapists for senior women and post-surgery care.</p>
            </div>
            <div>
              <strong>Q: How many sessions are usually needed?</strong>
              <p>A: It depends on your condition. Our team recommends a plan after first assessment.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg font-semibold">Book a session now and start recovery at home in Mohali.</p>
          <p className="text-sm text-gray-600">No extra agency fees. Trained professionals only.</p>
        </div>
      </div>
    </>
  );
}
