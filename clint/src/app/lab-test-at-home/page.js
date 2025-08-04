// app/lab-test-at-home/page.tsx

import Image from 'next/image';
import Script from 'next/script';
import BookService from '@/components/bookservice';
import Link from 'next/link';
import {
  FaHome,
  FaFlask,
  FaUserMd,
  FaCalendarAlt,
  FaCertificate,
  FaShieldAlt,
  FaPhoneAlt,
  FaMobile,
  FaMapMarkerAlt,
  FaClock,
  FaHeartbeat,
  FaUsers,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';
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
        <div className="max-w-6xl my-10  mx-auto md:p-6 p-3 bg-white">
          {/* Header */}
          <header className="md:text-center mb-8">
            <h1 className="md:text-4xl text-2xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-3">
              <FaHome className="text-blue-600 hidden md:block" />
              Lab test at Home  – Trusted Diagnostics at Your Doorstep
            </h1>
            <p className="text-gray-600 text-lg">Convenient, reliable, and accessible diagnostic solutions at your doorstep</p>
          </header>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaFlask className="text-green-600" />
              Introduction to Home Blood Test Services
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                The healthcare landscape has evolved dramatically, bringing medical test at home services directly to patients&apos; doorsteps.
                Home sample collection has emerged as a revolutionary approach to diagnostic testing, offering unprecedented convenience
                and accessibility for individuals seeking quality healthcare without leaving their homes.
              </p>
              <p className="text-gray-700 mb-4">
                The demand for blood test at home services has surged significantly, especially among busy professionals, elderly patients,
                and those with mobility challenges. This shift towards doorstep diagnostics represents a fundamental change in how people
                approach their health monitoring and medical care.
              </p>
              <p className="text-gray-700">
                Pathology test at home services provide numerous benefits including enhanced safety, privacy, comfort, and accessibility
                for patients who require regular monitoring or those who prefer the convenience of home-based healthcare solutions.
              </p>
            </div>
          </section>

          {/* Objectives */}
          <section className="mb-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" />
              Key Objectives of Home Visit Diagnostic Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Accurate Diagnostics</h3>
                <p className="text-gray-700">
                  Providing precise and reliable diagnostic test at home results through certified laboratory partnerships
                  and professional sample collection procedures.
                </p>
              </div>
              <div className="bg-purple-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Patient Comfort & Privacy</h3>
                <p className="text-gray-700">
                  Ensuring maximum comfort and privacy for patients during home blood test procedures,
                  creating a stress-free testing environment.
                </p>
              </div>
              <div className="bg-orange-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Enhanced Accessibility</h3>
                <p className="text-gray-700">
                  Making lab test home collection accessible for elderly patients, disabled individuals,
                  and busy professionals who cannot visit traditional laboratories.
                </p>
              </div>
              <div className="bg-teal-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Convenient Healthcare</h3>
                <p className="text-gray-700">
                  Offering same day blood test at home services with flexible scheduling to accommodate
                  various patient needs and preferences.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Tests */}
          <section className="mb-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaHeartbeat className="text-red-600" />
              Comprehensive Lab Test Options Available
            </h2>

            {/* Basic Health Packages */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Basic Health Packages</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Full Body Checkup at Home</h4>
                  <p className="text-gray-600 text-sm">Comprehensive health screening package for overall wellness assessment</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">CBC Test at Home</h4>
                  <p className="text-gray-600 text-sm">Complete Blood Count testing for blood cell analysis and health monitoring</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Sugar Test at Home</h4>
                  <p className="text-gray-600 text-sm">Blood glucose monitoring for diabetes management and prevention</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Thyroid Test at Home</h4>
                  <p className="text-gray-600 text-sm">TSH, T3, T4 testing for thyroid function evaluation</p>
                </div>
              </div>
            </div>

            {/* Advanced Tests */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Advanced Diagnostic Tests</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Lipid Profile Test at Home</h4>
                  <p className="text-gray-600 text-sm">Cholesterol and triglyceride assessment for cardiovascular health</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Liver Function Test at Home</h4>
                  <p className="text-gray-600 text-sm">Comprehensive liver health evaluation and enzyme testing</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Kidney Function Test at Home</h4>
                  <p className="text-gray-600 text-sm">Renal function assessment and kidney health monitoring</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">HbA1c Test at Home</h4>
                  <p className="text-gray-600 text-sm">Long-term blood sugar control assessment for diabetes management</p>
                </div>
              </div>
            </div>

            {/* Specialized Tests */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Specialized Testing Services</h3>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">COVID Test at Home</h4>
                    <p className="text-gray-600 text-sm mb-3">RTPCR and Antigen testing for COVID-19 diagnosis</p>
                    <h4 className="font-semibold text-purple-800 mb-2">Vitamin D Test Home Collection</h4>
                    <p className="text-gray-600 text-sm">Essential vitamin D level assessment for bone health</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Allergy Panel Testing</h4>
                    <p className="text-gray-600 text-sm mb-3">Comprehensive allergy testing and identification</p>
                    <h4 className="font-semibold text-purple-800 mb-2">Hormonal Panel Analysis</h4>
                    <p className="text-gray-600 text-sm">PCOD, testosterone, and other hormonal assessments</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-blue-600" />
              How Online Lab Test Booking Works
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <FaMobile />
                  </div>
                  <h3 className="font-semibold text-blue-800 mb-2">Book Online</h3>
                  <p className="text-gray-600 text-sm">Use our mobile app for lab test booking or call our helpline</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <FaClock />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">Schedule Visit</h3>
                  <p className="text-gray-600 text-sm">Book phlebotomist home visit at your convenient time</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <FaUserMd />
                  </div>
                  <h3 className="font-semibold text-purple-800 mb-2">Sample Collection</h3>
                  <p className="text-gray-600 text-sm">Professional sample collection with proper hygiene protocols</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <FaFlask />
                  </div>
                  <h3 className="font-semibold text-orange-800 mb-2">Lab Processing</h3>
                  <p className="text-gray-600 text-sm">Analysis in NABL certified lab test facilities</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <FaMobile />
                  </div>
                  <h3 className="font-semibold text-red-800 mb-2">Report Delivery</h3>
                  <p className="text-gray-600 text-sm">Lab test reports online via email, app, or hard copy</p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Highlights */}
          <section className="mb-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaStar className="text-yellow-600" />
              Service Highlights & Quality Assurance
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-5 rounded-lg">
                <FaCertificate className="text-yellow-600 text-2xl mb-3" />
                <h3 className="font-semibold text-yellow-800 mb-2">NABL Certified Lab Partners</h3>
                <p className="text-gray-600 text-sm">All testing performed by NABL certified lab test at home providers ensuring quality standards</p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg">
                <FaUserMd className="text-green-600 text-2xl mb-3" />
                <h3 className="font-semibold text-green-800 mb-2">Trained Professionals</h3>
                <p className="text-gray-600 text-sm">Experienced and certified phlebotomists for safe home sample collection procedures</p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg">
                <FaShieldAlt className="text-blue-600 text-2xl mb-3" />
                <h3 className="font-semibold text-blue-800 mb-2">Sanitized Equipment</h3>
                <p className="text-gray-600 text-sm">Use of sterilized and disposable equipment for all diagnostic test at home services</p>
              </div>
              <div className="bg-purple-50 p-5 rounded-lg">
                <FaClock className="text-purple-600 text-2xl mb-3" />
                <h3 className="font-semibold text-purple-800 mb-2">Fast Results</h3>
                <p className="text-gray-600 text-sm">Quick turnaround time of 24-48 hours for most blood test home collection services</p>
              </div>
              <div className="bg-orange-50 p-5 rounded-lg">
                <FaCalendarAlt className="text-orange-600 text-2xl mb-3" />
                <h3 className="font-semibold text-orange-800 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600 text-sm">Same day booking available with early morning slots for blood test home service</p>
              </div>
              <div className="bg-red-50 p-5 rounded-lg">
                <FaUserMd className="text-red-600 text-2xl mb-3" />
                <h3 className="font-semibold text-red-800 mb-2">Doctor Consultation</h3>
                <p className="text-gray-600 text-sm">Optional report explanation and consultation services with qualified healthcare professionals</p>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="mb-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600" />
              Service Coverage Areas
            </h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Our pathology services at home are available across multiple cities and localities, ensuring widespread
                accessibility for patients seeking convenient healthcare solutions.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-800">Blood Test at Home in Chandigarh</h4>
                  <p className="text-gray-600 text-sm">Comprehensive coverage across all sectors</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                  <h4 className="font-semibold text-blue-800">Lab Test Home Collection in Mohali</h4>
                  <p className="text-gray-600 text-sm">Complete diagnostic services available</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-600">
                  <h4 className="font-semibold text-purple-800">Home Diagnostic Test in Gurgaon</h4>
                  <p className="text-gray-600 text-sm">Professional home visit services</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-orange-600">
                  <h4 className="font-semibold text-orange-800">Sample Collection from Home in Mumbai</h4>
                  <p className="text-gray-600 text-sm">Reliable doorstep collection services</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                Emergency sample collection options are also available for urgent medical situations requiring immediate testing.
              </p>
            </div>
          </section>

          {/* Technology Integration */}
          <section className="mb-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaMobile className="text-blue-600" />
              Advanced Technology Integration
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Modern diagnostic test home service app technology ensures seamless booking and service delivery experiences for all patients.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Mobile App Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-gray-700">Easy online lab test booking interface</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-gray-700">Real-time appointment tracking system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-gray-700">Doorstep pathology test booking platform</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Digital Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-gray-700">Digital report access and storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-gray-700">Secure payment gateway integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-gray-700">Mobile app for lab test booking convenience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing & Packages */}
          <section className="mb-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4">Affordable Lab Test at Home Services Pricing</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                We offer competitive and transparent pricing for all our medical test at home services, ensuring
                quality healthcare remains accessible to everyone.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Individual Tests</h3>
                  <p className="text-gray-600 mb-3">Single test pricing with no hidden charges</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Competitive market rates</li>
                    <li>• Transparent pricing structure</li>
                    <li>• No additional home visit charges</li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Health Packages</h3>
                  <p className="text-gray-600 mb-3">Bundled diagnostic packages with significant savings</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Family health packages available</li>
                    <li>• Seasonal promotional offers</li>
                    <li>• Comprehensive wellness bundles</li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Special Discounts</h3>
                  <p className="text-gray-600 mb-3">Additional savings for specific customer groups</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Senior citizen health checkup at home discounts</li>
                    <li>• Regular customer loyalty benefits</li>
                    <li>• Corporate health package rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Support */}
          <section className="mb-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />
              24/7 Customer Support Services
            </h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Our dedicated customer support team ensures seamless path lab home service near me experiences
                with round-the-clock assistance for all your healthcare needs.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <FaPhoneAlt className="text-green-600 md:text-2xl text-xl mx-auto mb-3" />
                  <h3 className="font-semibold text-green-800 mb-2">24/7 Helpline</h3>
                  <p className="text-gray-600 text-sm">Round-the-clock support for blood test home collection near me queries</p>
                </div>
                <div className="text-center">
                  <FaFlask className="text-blue-600 md:text-2xl text-xl mx-auto mb-3" />
                  <h3 className="font-semibold text-blue-800 mb-2">Report Assistance</h3>
                  <p className="text-gray-600 text-sm">Expert guidance for understanding lab test reports and results</p>
                </div>
                <div className="text-center">
                  <FaCalendarAlt className="text-purple-600 md:text-2xl text-xl mx-auto mb-3" />
                  <h3 className="font-semibold text-purple-800 mb-2">Flexible Rescheduling</h3>
                  <p className="text-gray-600 text-sm">Easy appointment rescheduling and re-testing assistance when needed</p>
                </div>
              </div>
            </div>
          </section>

          {/* Special Services */}
          <section className="mb-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaUsers className="text-purple-600" />
              Specialized Healthcare Services
            </h2>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Senior Citizen Services</h3>
                  <p className="text-gray-700 mb-3">
                    Dedicated lab test home collection for elderly patients with specialized care and attention
                    to their unique healthcare requirements.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Gentle and patient-friendly collection procedures</li>
                    <li>• Specialized health packages for seniors</li>
                    <li>• Extended consultation time available</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Women&apos;s Health Focus</h3>
                  <p className="text-gray-700 mb-3">
                    Comprehensive women&apos;s health testing including pregnancy tests, PCOD panels,
                    and hormonal assessments with complete privacy and comfort.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Female phlebotomists available on request</li>
                    <li>• Pregnancy and fertility testing</li>
                    <li>• Iron and calcium deficiency panels</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className=" py-8 px-4 rounded-lg  mt-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Lab test at Home in Other Cities</h2>
              <ul className="list-disc list-inside text-blue-700 space-y-2">
                <li><Link href="/lab-test-at-home/chandigarh" className="hover:underline">Lab test at Home in Chandigarh</Link></li>
                <li><Link href="/lab-test-at-home/mohali" className="hover:underline">Lab test at Home in Mohali</Link></li>
                <li><Link href="/lab-test-at-home/panchkula" className="hover:underline">Lab test at Home in Panchkula</Link></li>
              </ul>
            </div>
          </section>
          {/* Footer */}
          <footer className="bg-gray-800 text-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience Convenient Healthcare?</h2>
            <p className="mb-4">
              Book your lab test at home today and experience the convenience of professional diagnostic services
              delivered directly to your doorstep with certified quality and care.
            </p>
            <div className="flex justify-center items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <FaCertificate className="text-yellow-400" />
                NABL Certified
              </span>
              <span className="flex items-center gap-1">
                <FaShieldAlt className="text-green-400" />
                Safe & Reliable
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="text-blue-400" />
                24/7 Support
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
