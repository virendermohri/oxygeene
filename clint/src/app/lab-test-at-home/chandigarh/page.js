// app/lab-test-at-home/chandigarh/page.tsx

import Script from 'next/script';
import Image from 'next/image';
import BookService from '@/components/bookservice';
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
  FaDownload
} from 'react-icons/fa';
import { MdScience, MdLocalHospital, MdSecurity } from 'react-icons/md';
import { BiTestTube, BiTime } from 'react-icons/bi';
import Link from 'next/link';
export const metadata = {
  title: 'Home Lab Tests in Chandigarh | Book Blood & Health Checkups',
  description:
    'Get lab tests at home in Chandigarh with CareKwik. Book blood, thyroid, sugar, and full body checkups. Doorstep sample collection and fast, accurate reports.',
  keywords: [
    'lab test at home Chandigarh',
    'home blood test Chandigarh',
    'Chandigarh health checkup',
    'thyroid test at home Chandigarh',
    'full body test Chandigarh',
    'CBC test at home',
    'doorstep pathology Chandigarh',
    'CareKwik Chandigarh lab test',
  ],
  alternates: {
    canonical: 'https://carekwik.com/lab-test-at-home/chandigarh',
  },
};


export default function ChandigarhLabTestPage() {
  return (
    <>
      {/* JSON-LD Business */}
      <Script id="ld-labtest-chd-business" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "CareKwik - Lab Test at Home Chandigarh",
          "url": "https://carekwik.com/lab-test-at-home/chandigarh",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chandigarh",
            "addressRegion": "Chandigarh",
            "postalCode": "160036",
            "addressCountry": "IN"
          },
          "telephone": "+91-8307190216",
          "areaServed": ["Chandigarh", "Mohali", "Panchkula"],
          "description": "Trusted lab test collection at home in Chandigarh by certified phlebotomists. Book blood test, thyroid, CBC and more."
        })}
      </Script>

      {/* JSON-LD FAQ */}
      <Script id="ld-labtest-chd-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can I book a CBC or thyroid test at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, CareKwik offers a range of lab test at home in Chandigarh including CBC, thyroid (T3 T4 TSH), and lipid profile."
              }
            },
            {
              "@type": "Question",
              "name": "Is female technician available for home collection?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, female sample collectors can be arranged on request for privacy and comfort."
              }
            },
            {
              "@type": "Question",
              "name": "How soon do I get my test reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Reports are delivered digitally within 24–48 hours after collection."
              }
            },
            {
              "@type": "Question",
              "name": "Are test done by trusted labs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we partner with NABL-accredited labs for all test."
              }
            }
          ]
        })}
      </Script>

      <div className="mx-auto md:p-10 p-4">
        <div className="flex flex-col md:flex-row md:gap-10">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753345685/20-SM88262_aahocp.jpg"
            alt="Lab test at home in Chandigarh"
            width={400}
            height={450}
            className="rounded-2xl shadow-md border md:w-[60%] object-cover mb-8"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="text-xl font-bold mb-4">Book Lab Test at Home - Chandigarh</p>
            <BookService servicename="Lab Test - Chandigarh" />
          </div>
        </div>
        
        <div className="min-h-screen my-10 max-w-6xl mx-auto">
          {/* Header */}
          <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full hidden md:block">
                  <FaHome className="md:text-4xl " />
                </div>
              </div>
              <h1 className="md:text-4xl text-2xl font-bold mb-4 leading-tight">
                Lab Test at Home in Chandigarh
              </h1>
              <p className="md:text-xl  text-blue-100 max-w-3xl mx-auto">
                Experience convenient diagnostic tests at home in Chandigarh with professional home sample collection services
              </p>
            </div>
          </header>

          <div className="container mx-auto px-2 py-12">
            {/* Introduction */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-6">
                  <FaStethoscope className="md:text-2xl text-xl text-blue-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Introduction</h2>
                </div>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    In today&apos;s fast-paced world, diagnostic lab tests have become crucial for maintaining optimal health and preventing diseases. The growing demand for convenient healthcare solutions has led to the rise of home sample collection services, making medical testing more accessible than ever before.
                  </p>
                  <p>
                    Chandigarh, being a modern city with busy professionals and elderly residents, has seen an increasing need for <strong>lab test at home Chandigarh</strong> services. These services bring professional healthcare directly to patients&apos; doorsteps, eliminating the hassle of visiting laboratories and waiting in long queues.
                  </p>
                  <p>
                    The concept of <strong>home pathology services Chandigarh</strong> has revolutionized how residents access healthcare, providing a safe, convenient, and reliable alternative to traditional laboratory visits.
                  </p>
                </div>
              </div>
            </section>

            {/* Objectives */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-6">
                  <FaCheckCircle className="md:text-2xl text-xl text-green-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Our Objectives</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaShieldAlt className="text-2xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Safe & Accurate Testing</h3>
                    <p className="text-gray-700">Provide reliable <strong>diagnostic tests at home Chandigarh</strong> with the highest safety standards and accurate results at your doorstep.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaUsers className="text-2xl text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Convenient Healthcare</h3>
                    <p className="text-gray-700">Offer convenience for elderly patients, busy professionals, and individuals with mobility issues through <strong>home sample collection Chandigarh</strong>.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaClock className="text-2xl text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Fast Results</h3>
                    <p className="text-gray-700">Ensure quick sample collection and timely delivery of results for all <strong>medical test at home Chandigarh</strong> services.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Offered */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-8">
                  <MdScience className="md:text-2xl text-xl text-purple-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Services Offered</h2>
                </div>

                {/* Sample Collection at Home */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <BiTestTube className="mr-3 text-blue-600" />
                    Sample Collection at Home
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2 text-blue-800">Blood Test Collection</h4>
                      <p className="text-sm text-gray-700">Professional <strong>blood test at home Chandigarh</strong> with trained phlebotomists.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2 text-green-800">Urine/Stool/Swab</h4>
                      <p className="text-sm text-gray-700">Complete <strong>urine test home collection Chandigarh</strong> and other sample types.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2 text-purple-800">COVID-19 Testing</h4>
                      <p className="text-sm text-gray-700">Safe <strong>COVID-19 test at home Chandigarh</strong> with proper safety protocols.</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2 text-orange-800">Specialized Kits</h4>
                      <p className="text-sm text-gray-700">Dengue, <strong>thyroid test at home in Chandigarh</strong>, and diabetes testing kits.</p>
                    </div>
                  </div>
                </div>

                {/* Range of Lab Tests */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <MdLocalHospital className="mr-3 text-green-600" />
                    Comprehensive Lab Test Range
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-blue-800">Routine Tests</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>CBC test at home Chandigarh</strong> - Complete Blood Count</li>
                        <li>• <strong>Liver function test at home Chandigarh</strong> - LFT Panel</li>
                        <li>• Kidney Function Test (KFT)</li>
                        <li>• <strong>Lipid profile home collection Chandigarh</strong></li>
                        <li>• <strong>Diabetes test at home Chandigarh</strong></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-green-800">Specialized Tests</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Vitamin D/B12 test at home Chandigarh</strong></li>
                        <li>• Hormone panels and allergy tests</li>
                        <li>• Cancer marker screening</li>
                        <li>• <strong>Full body checkup at home in Chandigarh</strong></li>
                        <li>• Corporate and employee health checkups</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Reporting & Follow-Up */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FaDownload className="mr-3 text-blue-600" />
                    Reporting & Follow-Up
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <FaEnvelope className="text-2xl text-blue-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">Digital Reports</p>
                      <p className="text-sm text-gray-600">Email or app delivery with <strong>digital health reports Chandigarh</strong></p>
                    </div>
                    <div className="text-center">
                      <BiTime className="text-2xl text-green-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">Quick Turnaround</p>
                      <p className="text-sm text-gray-600"><strong>Fast lab report delivery Chandigarh</strong> within 24-48 hours</p>
                    </div>
                    <div className="text-center">
                      <FaUserMd className="text-2xl text-purple-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">Doctor Consultation</p>
                      <p className="text-sm text-gray-600">Optional post-report medical consultation</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Booking Process */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-8">
                  <FaCalendarAlt className="md:text-2xl text-xl text-green-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Easy Booking Process</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaMobile className="md:text-2xl text-xl text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Online Booking</h3>
                    <p className="text-gray-700"><strong>Online lab test booking Chandigarh</strong> through our <strong>lab test app Chandigarh</strong> or website.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaWhatsapp className="md:text-2xl text-xl text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">WhatsApp Booking</h3>
                    <p className="text-gray-700"><strong>WhatsApp booking for lab test Chandigarh</strong> or call our helpline for instant support.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaClock className="md:text-2xl text-xl text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Quick Appointments</h3>
                    <p className="text-gray-700"><strong>Same-day blood test at home Chandigarh</strong> with next-day appointment availability.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Safety and Hygiene */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-8">
                  <MdSecurity className="md:text-2xl text-xl text-red-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Safety and Hygiene Protocols</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 p-6 rounded-xl">
                    <FaUserMd className="text-2xl text-red-600 mb-4" />
                    <h3 className="font-semibold mb-2">Professional Staff</h3>
                    <p className="text-gray-700"><strong>Trained phlebotomist at home Chandigarh</strong> with complete PPE protection.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <FaShieldAlt className="text-2xl text-blue-600 mb-4" />
                    <h3 className="font-semibold mb-2">Sterilized Equipment</h3>
                    <p className="text-gray-700">All equipment is properly sterilized and disposed of safely after use.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <MdSecurity className="text-2xl text-green-600 mb-4" />
                    <h3 className="font-semibold mb-2">COVID-Safe Process</h3>
                    <p className="text-gray-700">Complete COVID-safe collection process following health ministry guidelines.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Target Audiences */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-8">
                  <FaUsers className="md:text-2xl text-xl text-purple-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Who We Serve</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaHeart className="text-2xl text-red-500 mb-4" />
                    <h3 className="font-semibold mb-2">Elderly & Bedridden</h3>
                    <p className="text-gray-700"><strong>Home blood collection for elderly Chandigarh</strong> patients who cannot visit labs.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaTruck className="text-2xl text-blue-500 mb-4" />
                    <h3 className="font-semibold mb-2">Working Professionals</h3>
                    <p className="text-gray-700">Busy professionals needing convenient <strong>health checkup at home in Chandigarh</strong>.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaUsers className="text-2xl text-green-500 mb-4" />
                    <h3 className="font-semibold mb-2">Families with Children</h3>
                    <p className="text-gray-700">Parents preferring safe home testing for their children&apos;s health needs.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Areas Covered */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-8">
                  <FaMapMarkerAlt className="md:text-2xl text-xl text-blue-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Service Coverage Areas</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-800">Chandigarh Coverage</h3>
                    <p className="text-gray-700 mb-4">We provide <strong>home lab test Sector 17 Chandigarh</strong> and all other sectors with comprehensive coverage.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• All Chandigarh sectors (1-47)</li>
                      <li>• Industrial areas and markets</li>
                      <li>• Residential colonies and societies</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-800">Tricity Coverage</h3>
                    <p className="text-gray-700 mb-4"><strong>Blood collection service Mohali Panchkula Zirakpur</strong> with same-day service availability.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Home diagnostic services in Tricity Chandigarh</strong></li>
                      <li>• Mohali, Panchkula, Zirakpur, Kharar</li>
                      <li>• <strong>Chandigarh lab test home service near me</strong> locator</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Integration */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-8">
                  <FaMobile className="md:text-2xl text-xl text-indigo-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Digital Convenience</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaMobile className="md:text-2xl text-xl text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Mobile App</h3>
                    <p className="text-gray-700">User-friendly <strong>lab test app Chandigarh</strong> for booking and tracking.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaEnvelope className="md:text-2xl text-xl text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Smart Alerts</h3>
                    <p className="text-gray-700">SMS and email notifications for appointment and result updates.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <FaDownload className="md:text-2xl text-xl text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Digital Reports</h3>
                    <p className="text-gray-700"><strong>Online report delivery lab Chandigarh</strong> with secure access.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Partner Labs */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-8">
                  <FaCertificate className="md:text-2xl text-xl text-gold-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Certified Partner Labs</h2>
                </div>
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-700">We partner with <strong>NABL approved lab tests Chandigarh</strong> facilities for reliable results.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4 text-blue-800">Certifications</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• NABL (National Accreditation Board) certified</li>
                      <li>• ISO 15189 quality standards</li>
                      <li>• Government approved testing facilities</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4 text-green-800">Partner Network</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Thyrocare diagnostic services</li>
                      <li>• Dr. Lal PathLabs network</li>
                      <li>• SRL Diagnostics partnership</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-8">
                  <FaHeart className="md:text-2xl text-xl text-green-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Transparent Pricing</h2>
                </div>
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-700">Experience <strong>affordable lab tests at home Chandigarh</strong> with transparent pricing and no hidden charges.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <h3 className="font-semibold mb-2">Individual Tests</h3>
                    <p className="text-gray-700">Competitive pricing for single tests with <strong>free home sample collection Chandigarh</strong>.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <h3 className="font-semibold mb-2">Health Packages</h3>
                    <p className="text-gray-700">Family health packages with significant savings on multiple tests.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <h3 className="font-semibold mb-2">First-Time Offers</h3>
                    <p className="text-gray-700">Special discount codes and first-test offers for new customers.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <h3 className="font-semibold mb-2">Subscription Plans</h3>
                    <p className="text-gray-700">Monthly testing subscriptions for regular health monitoring.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Customer Support */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-8">
                  <FaPhoneAlt className="md:text-2xl text-xl text-blue-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">24/7 Customer Support</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <FaPhoneAlt className="text-2xl text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Helpline Support</h3>
                    <p className="text-gray-700">Dedicated helpline for queries and <strong>book lab test at home in Chandigarh</strong> assistance.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl text-center">
                    <FaWhatsapp className="text-2xl text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">WhatsApp Support</h3>
                    <p className="text-gray-700">Quick WhatsApp support for instant assistance and booking queries.</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl text-center">
                    <FaEnvelope className="text-2xl text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-gray-700">Email support for report issues, complaints, and detailed inquiries.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-8">
                  <FaStar className="md:text-2xl text-xl text-yellow-500 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Customer Testimonials</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map(star => (
                        <FaStar key={star} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">&apos;The <strong>best diagnostic service at home Chandigarh</strong> I&apos;ve experienced. Professional staff and quick results.&apos;</p>
                    <p className="font-semibold text-gray-800">- Rajesh K., Sector 22</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map(star => (
                        <FaStar key={star} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">&apos;Convenient service for my elderly parents. The phlebotomist was very gentle and professional.&apos;</p>
                    <p className="font-semibold text-gray-800">- Priya S., Mohali</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map(star => (
                        <FaStar key={star} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">&apos;Early detection helped me start treatment on time. Grateful for this convenient service.&apos;</p>
                    <p className="font-semibold text-gray-800">- Amit T., Panchkula</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl   p-3 md:p-8">
                <div className="flex items-center mb-8">
                  <FaCheckCircle className="md:text-2xl text-xl text-green-600 mr-4" />
                  <h2 className="md:text-2xl text-xl font-bold text-gray-800">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">How soon can I book a test?</h3>
                    <p className="text-gray-700">You can book a test immediately through our app or call. We offer same-day appointments based on availability.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Are your reports valid for hospitals or doctors?</h3>
                    <p className="text-gray-700">Yes, all our reports are from NABL certified labs and are accepted by hospitals and doctors nationwide.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Is fasting needed for tests?</h3>
                    <p className="text-gray-700">Fasting requirements depend on the specific test. Our team will inform you about fasting requirements during booking.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">What safety measures do you follow?</h3>
                    <p className="text-gray-700">We follow strict COVID-19 protocols with trained staff wearing PPE, using sterilized equipment, and maintaining social distancing.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Do you provide home collection in all areas?</h3>
                    <p className="text-gray-700">Yes, we cover all Chandigarh sectors, Mohali, Panchkula, Zirakpur, and Kharar with our home collection service.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl   p-3 md:p-8 text-white text-center">
                <div className="mb-8">
                  <FaHome className="text-5xl mx-auto mb-6 opacity-90" />
                  <h2 className="md:text-2xl text-xl md:text-4xl font-bold mb-4">Ready to Book Your Test?</h2>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                    Experience the convenience of professional lab testing at home with our certified services in Chandigarh and Tricity.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 p-6 rounded-xl">
                    <FaPhoneAlt className="text-2xl mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Call Now</h3>
                    <p className="text-blue-100">+91-7015875541</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl">
                    <FaWhatsapp className="text-2xl mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-blue-100">Quick booking support</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl">
                    <FaMobile className="text-2xl mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Download App</h3>
                    <p className="text-blue-100">Easy online booking</p>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                  <Link
                    href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors w-full md:w-auto">
                      Book Test Now
                    </button>
                  </Link>

                  <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors w-full md:w-auto">
                    Free Consultation
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-blue-100 mb-4">
                    <strong>Special Offer:</strong> Get 20% off on your first health checkup package!
                  </p>
                  <div className="flex justify-center space-x-6 text-sm text-blue-200">
                    <span>✓ NABL Certified Labs</span>
                    <span>✓ Same Day Service</span>
                    <span>✓ Digital Reports</span>
                    <span>✓ Expert Consultation</span>
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
