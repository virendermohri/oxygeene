// app/elder-care-at-home/chandigarh/page.tsx

import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';
export const metadata = {
  title: 'Elder Care at Home in Chandigarh | Verified Caregivers – CareKwik',
  description: 'Get trained elder care attendants in Chandigarh. Book safe, affordable senior care at home with verified male/female caregivers from CareKwik.',
  keywords: [
    'elder care in Chandigarh',
    'home care Chandigarh',
    'female caregiver Chandigarh',
    'senior care at home Chandigarh',
    'palliative care Chandigarh',
    'dementia care at home',
    'old age care services Chandigarh',
    'CareKwik Chandigarh elder care',
  ],
  alternates: {
    canonical: 'https://carekwik.com/elder-care-at-home/chandigarh',
  },
};

export default function ElderCareChandigarhPage() {
  return (
    <>
      <Script id="ld-json-chd" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - Elder Care in Chandigarh",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
          "url": "https://carekwik.com/elder-care-at-home/chandigarh",
          "telephone": "+91-8307190216",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chandigarh",
            "addressRegion": "Chandigarh",
            "postalCode": "160017",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Su 09:00-20:00",
          "priceRange": "₹₹",
          "description": "CareKwik offers trusted elder care at home in Chandigarh with trained male/female attendants for seniors.",
          "areaServed": ["Chandigarh", "Mohali", "Panchkula"]
        })}
      </Script>
      <Script id="ld-jsonfqs-chd" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are your elder care attendants trained and verified?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our caregivers go through strict training and background verification."
              }
            },
            {
              "@type": "Question",
              "name": "Is elder care available in part-time and full-time formats?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, CareKwik provides flexible options like 12-hr, 24-hr, and hourly elder care services."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide services across Chandigarh, Mohali, Panchkula, Ambala, and nearby towns."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide elder care services specifically in Chandigarh?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer elder care services across all sectors of Chandigarh including Sector 8 to Sector 46."
              }
            }


          ]
        })}
      </Script>

      <div className=" mx-auto md:p-10 md:p-10 p-4">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg"
            alt="Elder Care Services in Chandigarh"
            width={400}
            height={450}
            className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="md:text-2xl text-xl font-bold mb-4">Book Elder Care Service in Chandigarh</p>
            <BookService servicename="Elder Care" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto my-10 p-3 md:p-6 bg-white">
          {/* Header */}
          <header className="mb-8">
            <h1 className="md:text-4xl text-2xl font-bold text-gray-800   mb-4 leading-tight">
            Elder Care at Home in Chandigarh – Safe, Verified, Affordable
            </h1>
            <div className="w-24 h-1 bg-blue-600 mb-6"></div>
          </header>

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">
              Introduction
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                The landscape of healthcare is evolving rapidly, and nowhere is this more evident than in the growing emphasis on <strong>elder care at home Chandigarh</strong>. As families recognize the profound importance of elder care, they&apos;re increasingly seeking solutions that allow their loved ones to age gracefully in familiar surroundings.
              </p>
              <p className="mb-4">
                Chandigarh, known as the City Beautiful, houses a significant elderly population that continues to grow each year. The demographics of elderly population in Chandigarh reflect a community where seniors form an integral part of society, with many families preferring <strong>home care for elderly in Chandigarh</strong> over institutional care.
              </p>
              <p>
                This preference has led to a substantial increase in the growing demand for in-home care, making <strong>senior citizen care services Chandigarh</strong> more essential than ever before.
              </p>
            </div>
          </section>

          {/* Objectives */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-green-500 pl-4">
              Objectives of Elder Care at Home
            </h2>
            <div className="grid md:grid-cols-3 ga p-3 md:p-6">
              <div className="bg-green-50  p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Quality of Life Enhancement</h3>
                <p className="text-gray-700">
                  <strong>Geriatric care at home Chandigarh</strong> focuses on enhancing the overall quality of life for elderly individuals, ensuring they receive personalized attention in comfortable surroundings.
                </p>
              </div>
              <div className="bg-blue-50  p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Medical & Emotional Support</h3>
                <p className="text-gray-700">
                  Professional <strong>nursing services for elderly Chandigarh</strong> provide comprehensive medical and emotional support, addressing both physical health needs and mental wellness.
                </p>
              </div>
              <div className="bg-purple-50  p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Aging in Place</h3>
                <p className="text-gray-700">
                  <strong>Chandigarh elder care services</strong> enable seniors to age in place with dignity and comfort, maintaining their independence while receiving necessary care.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Services */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">
              Types of Elder Care Services Offered
            </h2>

            {/* Medical Care Services */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">A. Medical Care Services</h3>
              <div className="bg-blue-50  p-3 md:p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <strong>Doctor visits at home for elderly Chandigarh</strong> - Professional medical consultations in the comfort of home
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <strong>Home nurse for elderly Chandigarh</strong> - Skilled nursing care for post-surgery recovery and chronic conditions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <strong>Physiotherapy for seniors at home Chandigarh</strong> - Rehabilitation and mobility enhancement services
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <strong>Medication management for elderly Chandigarh</strong> - Proper medication scheduling and administration
                  </li>
                </ul>
              </div>
            </div>

            {/* Personal Care Services */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">B. Personal Care Services</h3>
              <div className="bg-green-50  p-3 md:p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p className="mb-2"><strong>Personal Care Assistant for Seniors Chandigarh</strong> services include:</p>
                    <ul className="space-y-2">
                      <li>• Bathing, grooming, and hygiene assistance</li>
                      <li>• Mobility and toileting support</li>
                      <li>• Feeding support and nutritional care</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2">These services ensure dignity and comfort while maintaining personal hygiene and daily living activities for elderly individuals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Companionship and Emotional Support */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">C. Companionship and Emotional Support</h3>
              <div className="bg-purple-50  p-3 md:p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  <strong>Companion care for elderly Chandigarh</strong> addresses the emotional and social needs of seniors through:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                  <div>• Conversation and social interaction</div>
                  <div>• Mental wellness activities</div>
                  <div>• Accompaniment to parks or religious places</div>
                </div>
              </div>
            </div>

            {/* Household Support */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-orange-700 mb-4">D. Household Support</h3>
              <div className="bg-orange-50  p-3 md:p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                  <div>• Cooking and meal preparation</div>
                  <div>• Light housekeeping services</div>
                  <div>• Errands and shopping assistance</div>
                </div>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-700 mb-4">E. Emergency Support</h3>
              <div className="bg-red-50  p-3 md:p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  <strong>Emergency elder care Chandigarh</strong> and <strong>24/7 home care for elderly in Chandigarh</strong> includes:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                  <div>• 24/7 helpline services</div>
                  <div>• Ambulance coordination</div>
                  <div>• On-call doctors availability</div>
                </div>
              </div>
            </div>
          </section>

          {/* Staffing and Training */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">
              Staffing and Training
            </h2>
            <div className="bg-indigo-50  p-3 md:p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                The success of <strong>home nursing care Chandigarh</strong> depends significantly on having qualified professionals. <strong>Trained caregivers for seniors in Chandigarh</strong> undergo comprehensive preparation including:
              </p>
              <div className="grid md:grid-cols-2 ga p-3 md:p-6">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-2">Qualifications & Verification</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Background checks and police verification</li>
                    <li>• Professional healthcare certifications</li>
                    <li>• Reference verification processes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-2">Training Programs</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Geriatric care certification</li>
                    <li>• Soft skills training</li>
                    <li>• Emergency response protocols</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Integration */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">
              Technology Integration
            </h2>
            <div className="grid md:grid-cols-3 ga p-3 md:p-6">
              <div className="bg-gray-50  p-3 md:p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-gray-800 mb-2">Remote Monitoring</h3>
                <p className="text-gray-600">Advanced monitoring systems for continuous health tracking</p>
              </div>
              <div className="bg-gray-50  p-3 md:p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-semibold text-gray-800 mb-2">Health Apps</h3>
                <p className="text-gray-600">Digital health tracking and medication reminders</p>
              </div>
              <div className="bg-gray-50  p-3 md:p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">🩺</div>
                <h3 className="font-semibold text-gray-800 mb-2">Telemedicine</h3>
                <p className="text-gray-600">Virtual consultations with healthcare providers</p>
              </div>
            </div>
          </section>

          {/* Customized Care Plans */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-green-500 pl-4">
              Customized Care Plans
            </h2>
            <div className="bg-green-50  p-3 md:p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Each individual receives personalized attention through comprehensive assessment and planning:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-4 mt-1">1</span>
                  <div>
                    <h4 className="font-semibold text-green-800">Initial Assessment</h4>
                    <p className="text-gray-700">Thorough evaluation by a geriatric specialist</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-4 mt-1">2</span>
                  <div>
                    <h4 className="font-semibold text-green-800">Personalized Planning</h4>
                    <p className="text-gray-700">Care plans based on specific medical and personal needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-4 mt-1">3</span>
                  <div>
                    <h4 className="font-semibold text-green-800">Regular Review</h4>
                    <p className="text-gray-700">Ongoing reassessment and plan adjustments</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Care Services */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              Specialized Care Services
            </h2>
            <div className="grid md:grid-cols-2 ga p-3 md:p-6">
              <div className="bg-purple-50  p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Memory Care</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Dementia care at home Chandigarh</strong> and <strong>Alzheimer&apos;s home care Chandigarh</strong> provide specialized support for individuals with cognitive challenges.
                </p>
                <p className="text-gray-700">
                  These services include memory stimulation activities, safety monitoring, and family education programs.
                </p>
              </div>
              <div className="bg-blue-50  p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Post-Surgical Care</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Post-surgery elder care in Chandigarh</strong> ensures proper recovery through professional medical supervision and rehabilitation support.
                </p>
                <p className="text-gray-700">
                  This includes wound care, medication management, and physical therapy coordination.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-orange-50  p-3 md:p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Palliative Care</h3>
              <p className="text-gray-700">
                <strong>At-home palliative care Chandigarh</strong> focuses on comfort and quality of life for individuals with serious illnesses, providing pain management and emotional support for both patients and families.
              </p>
            </div>
          </section>

          {/* Local Coverage */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-teal-500 pl-4">
              Comprehensive Local Coverage
            </h2>
            <div className="bg-teal-50  p-3 md:p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Our services extend throughout the tricity area, ensuring accessibility for families across the region:
              </p>
              <div className="grid md:grid-cols-2 ga p-3 md:p-6">
                <div>
                  <h4 className="font-semibold text-teal-800 mb-2">Primary Service Areas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Elder care services Sector 17 Chandigarh</strong></li>
                    <li>• <strong>Elder care in Mohali and Panchkula</strong></li>
                    <li>• <strong>Home care for elderly Zirakpur Chandigarh</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800 mb-2">Extended Coverage</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Senior care providers Chandigarh Tricity</strong></li>
                    <li>• <strong>Elderly support services Chandigarh</strong></li>
                    <li>• <strong>Elder care services near me Chandigarh</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How to Get Started */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">
              How to Get Started
            </h2>
            <div className="bg-blue-50  p-3 md:p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Getting started with <strong>affordable elder care at home in Chandigarh</strong> is simple and straightforward:
              </p>
              <div className="grid md:grid-cols-2 ga p-3 md:p-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Easy Booking Process</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Book elder care service Chandigarh</strong> through our online platform</li>
                    <li>• <strong>Hire caregiver for elderly Chandigarh</strong> with verified professionals</li>
                    <li>• Schedule initial consultation and assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Why Choose Us</h4>
                  <p className="text-gray-700 mb-2">
                    Recognized as the <strong>best elder care agency in Chandigarh</strong>, we provide:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Transparent pricing and flexible packages</li>
                    <li>• 24/7 customer support</li>
                    <li>• Quality assurance programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing and Packages */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-green-500 pl-4">
              Pricing and Packages
            </h2>
            <div className="grid md:grid-cols-3 ga p-3 md:p-6">
              <div className="bg-white border-2 border-gray-200  p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Hourly Care</h3>
                <p className="text-gray-600 mb-4">Flexible hourly services for specific needs</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Minimum 4-hour shifts</li>
                  <li>• Perfect for medical appointments</li>
                  <li>• Companion care sessions</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200  p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Full-Time Care</h3>
                <p className="text-gray-600 mb-4">Comprehensive 24/7 care solutions</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Live-in caregivers available</li>
                  <li>• Round-the-clock monitoring</li>
                  <li>• Emergency response included</li>
                </ul>
              </div>
              <div className="bg-green-50 border-2 border-green-200  p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Monthly Packages</h3>
                <p className="text-gray-600 mb-4">Cost-effective subscription models</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Discounted monthly rates</li>
                  <li>• Customizable service combinations</li>
                  <li>• Insurance coordination support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legal and Ethical Considerations */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              Legal and Ethical Considerations
            </h2>
            <div className="bg-purple-50  p-3 md:p-6 rounded-lg">
              <div className="grid md:grid-cols-2 ga p-3 md:p-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Privacy & Consent</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Comprehensive consent policies</li>
                    <li>• Patient privacy protection</li>
                    <li>• Family involvement protocols</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Safety & Protection</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Strict safety protocols</li>
                    <li>• Abuse prevention measures</li>
                    <li>• Clear reporting mechanisms</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Collaboration with Healthcare Providers */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">
              Collaboration with Local Healthcare Providers
            </h2>
            <div className="bg-blue-50  p-3 md:p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                We maintain strong partnerships with local healthcare institutions to ensure seamless care coordination:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="md:text-2xl text-xl mb-2">🏥</div>
                  <h4 className="font-semibold text-blue-800">Hospital Partnerships</h4>
                  <p className="text-gray-600 text-sm">Direct coordination with major hospitals</p>
                </div>
                <div className="text-center">
                  <div className="md:text-2xl text-xl mb-2">🔬</div>
                  <h4 className="font-semibold text-blue-800">Lab Services</h4>
                  <p className="text-gray-600 text-sm">Priority booking and home collection</p>
                </div>
                <div className="text-center">
                  <div className="md:text-2xl text-xl mb-2">💊</div>
                  <h4 className="font-semibold text-blue-800">Pharmacy Networks</h4>
                  <p className="text-gray-600 text-sm">Medication delivery and management</p>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges and Solutions */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-orange-500 pl-4">
              Challenges and Solutions
            </h2>
            <div className="space-y-6">
              <div className="bg-orange-50  p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Staffing Excellence</h3>
                <p className="text-gray-700">
                  Addressing staffing challenges through comprehensive recruitment, competitive compensation, and ongoing professional development programs ensures consistent quality care delivery.
                </p>
              </div>
              <div className="bg-green-50  p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Cultural Sensitivity</h3>
                <p className="text-gray-700">
                  Our caregivers receive cultural sensitivity training to respect diverse traditions, dietary preferences, and religious practices of elderly individuals and their families.
                </p>
              </div>
              <div className="bg-blue-50  p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Accessibility Solutions</h3>
                <p className="text-gray-700">
                  Bridging urban and rural accessibility gaps through mobile units, telemedicine integration, and flexible service delivery models that reach underserved areas.
                </p>
              </div>
            </div>
          </section>

          {/* Future Plans */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              Future Plans and Expansion
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50  p-3 md:p-6 rounded-lg">
              <div className="grid md:grid-cols-2 ga p-3 md:p-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Geographic Expansion</h3>
                  <p className="text-gray-700 mb-3">
                    Plans include expanding services to nearby areas such as Panchkula, Mohali, and surrounding regions to serve a broader community of elderly individuals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Technology Enhancement</h3>
                  <p className="text-gray-700 mb-3">
                    Development of a comprehensive mobile app for families and caregivers to improve communication, scheduling, and care coordination.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Community Engagement</h3>
                <p className="text-gray-700">
                  Launching senior community engagement programs that promote social interaction, health awareness, and active aging initiatives throughout Chandigarh.
                </p>
              </div>
            </div>
          </section>

          {/* Contact and Support */}
          <section className="mb-10">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">
              Contact and Support
            </h2>
            <div className="bg-blue-50  p-3 md:p-6 rounded-lg">
              <div className="grid md:grid-cols-3 ga p-3 md:p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">How to Enroll</h3>
                  <p className="text-gray-700">
                    Simple online enrollment process with immediate response and consultation scheduling available.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Emergency Support</h3>
                  <p className="text-gray-700">
                    24/7 emergency contact numbers for urgent care needs and immediate assistance.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Feedback System</h3>
                  <p className="text-gray-700">
                    Comprehensive feedback and grievance system to ensure continuous service improvement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-10">
            <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-lg">
              <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4">Conclusion</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Elder care at home in Chandigarh represents more than just healthcare services—it embodies a commitment to dignity, comfort, and quality of life for our senior community. Through comprehensive care solutions, professional expertise, and compassionate service delivery, families can ensure their loved ones receive the best possible care while maintaining the comfort and familiarity of home.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-gray-600 text-sm border-t pt-6">
            <p>Professional Elder Care Services in Chandigarh - Committed to Excellence in Senior Care</p>
          </footer>
        </div>
      </div>
    </>

  );
}
