// app/lab-test-at-home/mohali/page.tsx
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';
import {
  FaHome,
  FaStethoscope,
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaClock,
  FaUserMd,
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
  FaMobile,
  FaEnvelope,
  FaCalendarAlt,
  FaHeart,
  FaTruck,
  FaUsers,
  FaCertificate,
  FaDownload,
  FaHeartbeat,
  FaLaptop
} from 'react-icons/fa';
import { MdScience, MdLocalHospital, MdSecurity, MdBloodtype } from 'react-icons/md';
import { BiTestTube, BiTime, BiDroplet } from 'react-icons/bi';
import { RiVirusLine, RiHeartPulseLine } from 'react-icons/ri';
import Link from 'next/link';
export const metadata = {
  title: 'Lab Tests at Home in Mohali | Blood & Health Checkups – CareKwik',
  description: 'Book lab tests at home in Mohali with CareKwik. Blood tests, full body checkups, and health diagnostics with home sample collection. Quick, safe & accurate.',
  keywords: [
    'lab test at home Mohali',
    'blood test Mohali',
    'home sample collection Mohali',
    'full body test Mohali',
    'diagnostic test Mohali',
    'health checkup Mohali',
    'CareKwik lab tests Mohali'
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
      <Script id="ld-faq-labtest" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What lab tests can I book at home in Mohali?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can book a wide range of lab tests including blood tests, urine tests, full body checkups, and specialized tests like thyroid, diabetes, and vitamin profiles."
              }
            },
            {
              "@type": "Question",
              "name": "How does home sample collection work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "After booking your test online or via phone, our trained phlebotomist will visit your home at the scheduled time to collect samples safely and hygienically."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to get the test results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most test results are delivered within 24 hours via WhatsApp or email. Some specialized tests may take longer."
              }
            },
            {
              "@type": "Question",
              "name": "Are the lab tests conducted by certified labs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all tests are processed by NABL-accredited labs ensuring accuracy and reliability of results."
              }
            }
          ]
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


        <div className="min-h-screen max-w-6xl mx-auto my-10">
          {/* Header */}
          <header className="py-8 md:py-16">
            <div className="container mx-auto px-4 md:text-center">
              <div className="flex justify-center mb-6">

              </div>
              <h1 className="md:text-5xl text-2xl font-bold mb-4 leading-tight">
                Lab Test at Home Mohali
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Professional <strong>home blood test Mohali</strong> services with convenient diagnostic testing at your doorstep
              </p>
            </div>
          </header>

          <div className="container mx-auto md:px-4 py-8 px-2 md:py-12">
            {/* Introduction */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-6">
                  <FaStethoscope className="md:text-3xl text-xl text-green-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Introduction</h2>
                </div>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Preventive health through regular diagnostic testing has become essential for maintaining wellness and early disease detection. The growing demand for home-based healthcare services reflects people&apos;s need for convenient, safe, and accessible medical testing solutions.
                  </p>
                  <p>
                    Mohali, as a rapidly developing city in the tricity region, has emerged as a key area where <strong>lab test at home Mohali</strong> services are gaining significant popularity. The city&apos;s diverse population, including working professionals, elderly residents, and families, greatly benefits from convenient <strong>blood test at home in Mohali</strong> services.
                  </p>
                  <p>
                    The region&apos;s strategic location and modern infrastructure make it an ideal place for <strong>pathology lab Mohali home collection</strong> services, ensuring residents can access quality healthcare without leaving their homes.
                  </p>
                </div>
              </div>
            </section>

            {/* Objectives */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-6">
                  <FaCheckCircle className="md:text-3xl text-xl text-blue-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Our Objectives</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaShieldAlt className="text-2xl text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Convenient & Safe Testing</h3>
                    <p className="text-gray-700">Provide reliable <strong>home sample collection lab Mohali</strong> services with the highest safety standards and convenience.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaUsers className="text-2xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Minimize Hospital Visits</h3>
                    <p className="text-gray-700">Reduce the need for hospital visits, especially beneficial for elderly, disabled, and busy individuals requiring <strong>diagnostic test at home Mohali</strong>.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaClock className="text-2xl text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Quick & Accurate Reporting</h3>
                    <p className="text-gray-700">Ensure fast reporting with certified accuracy for all <strong>Mohali lab test home service</strong> requirements.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Offered */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-8">
                  <MdScience className="md:text-3xl text-xl text-purple-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Comprehensive Services Offered</h2>
                </div>

                {/* Routine & Preventive Health Tests */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <RiHeartPulseLine className="mr-3 text-green-600" />
                    Routine & Preventive Health Tests
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <MdBloodtype className="text-2xl text-red-600 mb-3" />
                      <h4 className="font-semibold mb-2 text-green-800">Blood Sugar Tests</h4>
                      <p className="text-sm text-gray-700"><strong>Sugar test at home in Mohali</strong> including FBS, PPBS, and HbA1c monitoring.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <BiDroplet className="text-2xl text-blue-600 mb-3" />
                      <h4 className="font-semibold mb-2 text-blue-800">Complete Blood Count</h4>
                      <p className="text-sm text-gray-700"><strong>CBC test at home Mohali</strong> for comprehensive blood analysis and health screening.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <FaHeart className="text-2xl text-purple-600 mb-3" />
                      <h4 className="font-semibold mb-2 text-purple-800">Lipid Profile</h4>
                      <p className="text-sm text-gray-700">Cholesterol and heart health assessment through convenient home collection.</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl">
                      <FaStethoscope className="text-2xl text-orange-600 mb-3" />
                      <h4 className="font-semibold mb-2 text-orange-800">Liver Function Test</h4>
                      <p className="text-sm text-gray-700"><strong>Liver function test at home Mohali</strong> for hepatic health monitoring.</p>
                    </div>
                    <div className="bg-teal-50 p-6 rounded-xl">
                      <BiTestTube className="text-2xl text-teal-600 mb-3" />
                      <h4 className="font-semibold mb-2 text-teal-800">Kidney Function Test</h4>
                      <p className="text-sm text-gray-700"><strong>Kidney function test home sample Mohali</strong> for renal health assessment.</p>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-xl">
                      <FaCheckCircle className="text-2xl text-indigo-600 mb-3" />
                      <h4 className="font-semibold mb-2 text-indigo-800">Full Body Checkup</h4>
                      <p className="text-sm text-gray-700"><strong>Full body checkup at home Mohali</strong> comprehensive health packages.</p>
                    </div>
                  </div>
                </div>

                {/* Advanced Diagnostic Tests */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <MdLocalHospital className="mr-3 text-blue-600" />
                    Advanced Diagnostic Tests
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2 text-blue-800">Thyroid Profile</h4>
                      <p className="text-sm text-gray-700"><strong>Thyroid test at home Mohali</strong> for hormonal health assessment.</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2 text-yellow-800">Vitamin Tests</h4>
                      <p className="text-sm text-gray-700"><strong>Vitamin D and B12 test at home Mohali</strong> for nutritional status.</p>
                    </div>
                    <div className="bg-pink-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2 text-pink-800">Hormonal Tests</h4>
                      <p className="text-sm text-gray-700">Comprehensive hormone panels available at home.</p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2 text-red-800">Cancer Markers</h4>
                      <p className="text-sm text-gray-700">Early detection screening through home sample collection.</p>
                    </div>
                  </div>
                </div>

                {/* Infectious Disease Testing */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <RiVirusLine className="mr-3 text-red-600" />
                    Infectious Disease Testing
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-red-800">COVID-19 Testing</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>COVID-19 test at home Mohali</strong> - Safe and convenient</li>
                        <li>• <strong>RT-PCR home collection Mohali</strong> - Accurate results</li>
                        <li>• Rapid Antigen tests available</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-orange-800">Other Infections</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Dengue, Malaria, Typhoid testing</li>
                        <li>• Hepatitis B/C and HIV screening</li>
                        <li>• Urine culture and stool analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Home Sample Collection */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FaUserMd className="mr-3 text-green-600" />
                    Professional Home Sample Collection
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <FaUserMd className="text-2xl text-green-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">Trained Phlebotomist</p>
                      <p className="text-sm text-gray-600"><strong>Trained phlebotomist for home sample collection in Mohali</strong></p>
                    </div>
                    <div className="text-center">
                      <FaShieldAlt className="text-2xl text-blue-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">Safe & Hygienic</p>
                      <p className="text-sm text-gray-600">Sterile equipment and safety protocols</p>
                    </div>
                    <div className="text-center">
                      <FaClock className="text-2xl text-purple-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">Time-Slot Based</p>
                      <p className="text-sm text-gray-600">Convenient appointment scheduling</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Booking & Process Flow */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-8">
                  <FaCalendarAlt className="md:text-3xl text-xl text-blue-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Simple Booking Process</h2>
                </div>
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-lg">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Book Online</h3>
                    <p className="text-sm text-gray-700"><strong>Book blood test at home in Mohali</strong> through phone or <strong>online lab test booking Mohali</strong>.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-lg">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Select Tests</h3>
                    <p className="text-sm text-gray-700">Choose individual tests or comprehensive health packages.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold text-lg">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Schedule Visit</h3>
                    <p className="text-sm text-gray-700">Pick convenient time and date for sample collection.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-orange-600 font-bold text-lg">4</span>
                    </div>
                    <h3 className="font-semibold mb-2">Home Visit</h3>
                    <p className="text-sm text-gray-700">Professional <strong>blood collection at home service Mohali</strong> visit.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-teal-600 font-bold text-lg">5</span>
                    </div>
                    <h3 className="font-semibold mb-2">Get Reports</h3>
                    <p className="text-sm text-gray-700"><strong>Same day blood test report Mohali</strong> within 24-48 hours.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quality & Accuracy */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-8">
                  <FaCertificate className="md:text-3xl text-xl text-gold-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Quality & Accuracy Assurance</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <FaCertificate className="text-2xl text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">NABL Certified</h3>
                    <p className="text-gray-700"><strong>NABL certified lab at home Mohali</strong> partnerships ensuring quality.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl text-center">
                    <FaShieldAlt className="text-2xl text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Sterile Equipment</h3>
                    <p className="text-gray-700">Use of sterile, single-use equipment for all collections.</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl text-center">
                    <FaTruck className="text-2xl text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Secure Transport</h3>
                    <p className="text-gray-700">Safe transportation maintaining sample integrity.</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl text-center">
                    <FaCheckCircle className="text-2xl text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Double Verification</h3>
                    <p className="text-gray-700">Rigorous double verification for report accuracy.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Integration */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-8">
                  <FaLaptop className="md:text-3xl text-xl text-indigo-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Advanced Technology Integration</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaMobile className="text-2xl text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">App & Website</h3>
                    <p className="text-gray-700"><strong>Book lab test online Mohali</strong> through our user-friendly platform.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaCertificate className="text-2xl text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Digital Payments</h3>
                    <p className="text-gray-700"><strong>Contactless home sample collection Mohali</strong> with digital payments.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaWhatsapp className="text-2xl text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">WhatsApp Reports</h3>
                    <p className="text-gray-700"><strong>Lab report on WhatsApp Mohali</strong> for instant access.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaEnvelope className="text-2xl text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">SMS Updates</h3>
                    <p className="text-gray-700">Regular SMS updates and appointment reminders.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Target Audience */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-8">
                  <FaUsers className="md:text-3xl text-xl text-green-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Who We Serve</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <FaHeartbeat className="text-2xl text-red-500 mb-4" />
                    <h3 className="font-semibold mb-2">Elderly & Disabled</h3>
                    <p className="text-gray-700"><strong>Senior citizen health checkup at home Mohali</strong> for convenient care.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <FaTruck className="text-2xl text-blue-500 mb-4" />
                    <h3 className="font-semibold mb-2">Busy Professionals</h3>
                    <p className="text-gray-700">Time-saving <strong>home diagnostic services Mohali</strong> for working individuals.</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <FaHeart className="text-2xl text-purple-500 mb-4" />
                    <h3 className="font-semibold mb-2">Chronic Patients</h3>
                    <p className="text-gray-700">Regular monitoring for patients needing frequent testing.</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl">
                    <FaUsers className="text-2xl text-orange-500 mb-4" />
                    <h3 className="font-semibold mb-2">Corporate Employees</h3>
                    <p className="text-gray-700">Group health checkups and corporate wellness programs.</p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-xl">
                    <FaHeart className="text-2xl text-pink-500 mb-4" />
                    <h3 className="font-semibold mb-2">Maternity Care</h3>
                    <p className="text-gray-700">Specialized testing for maternity and postnatal care clients.</p>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-xl">
                    <FaHeart className="text-2xl text-teal-500 mb-4" />
                    <h3 className="font-semibold mb-2">Health Conscious</h3>
                    <p className="text-gray-700"><strong>Preventive health packages at home Mohali</strong> for wellness.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Areas Covered */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-8">
                  <FaMapMarkerAlt className="md:text-3xl text-xl text-green-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Extensive Service Coverage</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-800">Mohali Coverage</h3>
                    <p className="text-gray-700 mb-4">Comprehensive <strong>lab test home service Sector 70 Mohali</strong> and all sectors coverage.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• All Mohali sectors (Phase 1-11, Sector 70-115)</li>
                      <li>• <strong>Home sample collection in Phase 3 Mohali</strong></li>
                      <li>• Industrial and residential areas</li>
                      <li>• <strong>Pathology home visit Mohali</strong> in all localities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-teal-800">Extended Coverage</h3>
                    <p className="text-gray-700 mb-4"><strong>Diagnostic test at home near Aerocity Mohali</strong> and surrounding areas.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Kharar lab test home collection</strong></li>
                      <li>• <strong>Zirakpur Mohali lab home visit</strong></li>
                      <li>• <strong>Tricity home blood test service</strong></li>
                      <li>• Chandigarh border areas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing & Packages */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-8">
                  <FaHeart className="md:text-3xl text-xl text-green-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Transparent Pricing & Packages</h2>
                </div>
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-700">Experience <strong>affordable lab test at home Mohali</strong> with competitive pricing and comprehensive packages.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <BiTestTube className="md:text-3xl text-xl text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Individual Tests</h3>
                    <p className="text-gray-700">Competitive rates for single diagnostic tests with home collection.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl text-center">
                    <FaHeartbeat className="md:text-3xl text-xl text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Health Packages</h3>
                    <p className="text-gray-700">Comprehensive preventive health check-up packages for families.</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl text-center">
                    <FaUsers className="md:text-3xl text-xl text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Senior Discounts</h3>
                    <p className="text-gray-700">Special discounts for senior citizens and bulk family tests.</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl text-center">
                    <FaCalendarAlt className="md:text-3xl text-xl text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Subscription Plans</h3>
                    <p className="text-gray-700">Monthly and quarterly subscription models for regular testing.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Safety & Compliance */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-8">
                  <MdSecurity className="md:text-3xl text-xl text-red-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Safety & Compliance Standards</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaShieldAlt className="text-2xl text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">PPE & Hygiene</h3>
                    <p className="text-gray-700">Complete PPE kits and strict hygiene protocols for all collections.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaMobile className="text-2xl text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Contactless Options</h3>
                    <p className="text-gray-700">Contactless payment options and minimal contact procedures.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaUserMd className="text-2xl text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Trained Staff</h3>
                    <p className="text-gray-700">Regular training for phlebotomists on safety and best practices.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <RiVirusLine className="text-2xl text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">COVID-Safe</h3>
                    <p className="text-gray-700">Comprehensive COVID-safe procedures following health guidelines.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Customer Support */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-8">
                  <FaPhoneAlt className="md:text-3xl text-xl text-blue-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">24/7 Customer Support</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <FaPhoneAlt className="text-2xl text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">24/7 Helpline</h3>
                    <p className="text-gray-700">Round-the-clock helpline and chat support for all queries.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl text-center">
                    <FaUserMd className="text-2xl text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Medical Expert</h3>
                    <p className="text-gray-700">Report explanation by medical experts available on request.</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl text-center">
                    <FaStethoscope className="text-2xl text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Doctor Consultation</h3>
                    <p className="text-gray-700">Free doctor teleconsultation as optional add-on service.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-8">
                  <FaStar className="md:text-3xl text-xl text-yellow-500 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Customer Success Stories</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map(star => (
                        <FaStar key={star} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">&apos;Excellent service! The phlebotomist was professional and the reports were delivered quickly. Great experience with home blood test Mohali.&apos;</p>
                    <p className="font-semibold text-gray-800">- Sunita M., Phase 7 Mohali</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map(star => (
                        <FaStar key={star} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">&apos;Our corporate tie-up has been fantastic. Regular health checkups for all employees made easy and convenient.&apos;</p>
                    <p className="font-semibold text-gray-800">- HR Manager, Tech Company</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map(star => (
                        <FaStar key={star} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">&apos;The loyalty program and repeat customer benefits are excellent. My family uses this service regularly.&apos;</p>
                    <p className="font-semibold text-gray-800">- Rajesh K., Sector 82 Mohali</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Future Expansion */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl   md:p-8 p-3">
                <div className="flex items-center mb-8">
                  <FaTruck className="md:text-3xl text-xl text-indigo-600 mr-4" />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800">Future Expansion Plans</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <MdLocalHospital className="text-2xl text-blue-600 mb-4" />
                    <h3 className="font-semibold mb-2">Pathology Centers</h3>
                    <p className="text-gray-700">Planning to add dedicated pathology centers in Mohali for faster processing.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaHeartbeat className="text-2xl text-green-600 mb-4" />
                    <h3 className="font-semibold mb-2">Advanced Services</h3>
                    <p className="text-gray-700">Introducing home-based ECG, X-rays, and ultrasound services.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaMapMarkerAlt className="text-2xl text-purple-600 mb-4" />
                    <h3 className="font-semibold mb-2">Geographic Expansion</h3>
                    <p className="text-gray-700">Expanding services to Panchkula, Chandigarh, and Kharar regions.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl   md:p-8 p-3 text-white text-center">
                <div className="mb-8">
                  <FaHome className="text-5xl mx-auto mb-6 opacity-90" />
                  <h2 className="md:text-3xl text-xl md:text-4xl font-bold mb-4">Book Your Test Today!</h2>
                  <p className="text-xl text-green-100 max-w-2xl mx-auto">
                    Experience convenient and professional lab testing at home in Mohali with our certified diagnostic services.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 p-6 rounded-xl">
                    <FaPhoneAlt className="text-2xl mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Call Now</h3>
                    <p className="text-green-100">+91-7015875541</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl">
                    <FaWhatsapp className="text-2xl mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-green-100">Instant booking support</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl">
                    <FaMobile className="text-2xl mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Online Booking</h3>
                    <p className="text-green-100">Book through our app/website</p>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex-row flex-col flex md:justify-center">
                  <Link
                    href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors w-full md:w-auto">
                      Book Test Now
                    </button>
                  </Link>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors w-full md:w-auto">
                    Free Consultation
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-green-100 mb-4">
                    <strong>Special Offer:</strong> Get 15% off on your first full body checkup package!
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-green-200">
                    <span>✓ NABL Certified Labs</span>
                    <span>✓ Same Day Reports</span>
                    <span>✓ Trained Phlebotomists</span>
                    <span>✓ Contactless Service</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   md:p-8 p-3">
                <div className="text-center mb-8">
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
                  <p className="text-lg text-gray-700">
                    Get in touch with us for any queries about our comprehensive lab test services in Mohali.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-xl">
                    <FaPhoneAlt className="text-2xl text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-700">+91-7015875541</p>
                    <p className="text-sm text-gray-600">24/7 Support</p>
                  </div>

                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <FaWhatsapp className="text-2xl text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-700">+91-7015875541</p>
                    <p className="text-sm text-gray-600">Quick Booking</p>
                  </div>

                  <div className="text-center p-6 bg-purple-50 rounded-xl">
                    <FaEnvelope className="text-2xl text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-700">getcarekwik@gmail.com</p>
                    <p className="text-sm text-gray-600">Support & Queries</p>
                  </div>

                  <div className="text-center p-6 bg-orange-50 rounded-xl">
                    <FaMapMarkerAlt className="text-2xl text-orange-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Coverage</h3>
                    <p className="text-gray-700">All Mohali Sectors</p>
                    <p className="text-sm text-gray-600">Tricity Region</p>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </div>
    </>
  );
}
