// app/lab-test-at-home/panchkula/page.tsx
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';
import {
    FaHome,
    FaFlask,
    FaUserMd,
    FaShieldAlt,
    FaMobile,
    FaUsers,
    FaMapMarkerAlt,
    FaStar,
    FaPhone,
    FaWhatsapp,
    FaCalendarAlt,
    FaHeartbeat,
    FaCertificate,
    FaAward,
    FaClipboardList,
    FaUserFriends
} from 'react-icons/fa';
import { MdHealthAndSafety, MdLocalHospital, MdScience } from 'react-icons/md';
import { BiTestTube } from 'react-icons/bi';
import { RiVirusLine } from 'react-icons/ri';
import Link from 'next/link';
export const metadata = {
    title: 'Home Lab Test in Panchkula – Fast & Trusted | CareKwik',
    description: 'Book lab tests at home in Panchkula with CareKwik. Get blood tests, full body checkups, and diagnostics with home sample collection—safe, fast & affordable.',
    keywords: [
        'lab test at home Panchkula',
        'home blood test Panchkula',
        'sample collection Panchkula',
        'diagnostic test Panchkula',
        'full body health check Panchkula',
        'CareKwik lab services Panchkula'
    ],
    alternates: {
        canonical: 'https://carekwik.com/lab-test-at-home/panchkula',
    },
};
export default function LabtestPanchkula() {
    return (
        <>
            <Script id="ld-labtest-panchkula" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalOrganization",
                    "name": "CareKwik Lab test - Panchkula",
                    "url": "https://carekwik.com/lab-test-at-home/panchkula",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/labtest_kw5tyy.jpg",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Panchkula",
                        "addressRegion": "Haryana",
                        "postalCode": "134109",
                        "addressCountry": "IN"
                    },
                    "description": "Lab test and health checkups with home sample collection in Panchkula.",
                    "openingHours": "Mo-Su 07:00-21:00",
                    "telephone": "+91-8307190216",
                    "areaServed": ["Panchkula", "Pinjore", "Zirakpur", "Chandigarh"]
                })}
            </Script>
            <Script id="ld-faq-labtest" type="application/ld+json">
                {JSON.stringify({

                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What lab tests can I book at home in Panchkula?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can book a variety of lab tests including blood tests, urine tests, full body checkups, and specialized tests like thyroid, diabetes, and vitamin profiles."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How does home sample collection work?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "A trained phlebotomist will visit your home at the scheduled time to collect samples. You can book appointments online or via phone."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How quickly will I receive my test results?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Most reports are delivered within 12-24 hours via WhatsApp or email."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are the labs accredited?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we partner with NABL-accredited labs to ensure quality and reliability."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book urgent tests?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we offer same-day service for most common tests if slots are available."
                            }
                        }
                    ]
                })}
            </Script>
            <div className="mx-auto md:p-10 p-4">
                <div className="flex flex-col md:flex-row md:gap-10">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753345685/20-SM88262_aahocp.jpg"
                        alt="Lab test at home in Panchkula"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-md border md:w-[60%] object-cover mb-8"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="text-2xl font-bold text-gray-800 mb-4">
                            Book Lab Test at Home in Panchkula
                        </p>
                        <BookService servicename="Lab test" />
                    </div>
                </div>

                <div className="max-w-6xl my-10 mx-auto md:p-6 p-3 bg-white">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-lg mb-8">
                        <h1 className="md:text-4xl text-2xl font-bold mb-4 flex items-center">
                            <FaHome className="mr-3 hidden  md:block" />
                            Lab Test at Home in Panchkula – Safe, Fast & Certified Diagnostic Services

                        </h1>
                        <p className="text-xl opacity-90">
                            Convenient, Safe, and Reliable Home Blood Test Panchkula Services
                        </p>
                    </div>

                    {/* Introduction */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <MdHealthAndSafety className="text-3xl text-blue-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Introduction</h2>
                        </div>
                        <div className="bg-gray-50 md:p-6 p-3 rounded-lg">
                            <p className="text-lg leading-relaxed mb-4">
                                Healthcare has evolved significantly, and the demand for convenient diagnostic services has grown tremendously.
                                Today&apos;s busy lifestyle requires solutions that bring quality healthcare directly to patients&apos; doorsteps.
                                <strong className="text-blue-600"> Diagnostic test at home Panchkula</strong> services have emerged as a game-changer
                                for residents seeking hassle-free medical testing.
                            </p>
                            <p className="text-lg leading-relaxed mb-4">
                                The rise in demand for <strong className="text-blue-600">at-home pathology test Panchkula</strong> services reflects
                                people&apos;s growing awareness of preventive healthcare. Urban areas like Panchkula have witnessed a significant shift
                                towards home-based diagnostic solutions, emphasizing health, hygiene, and convenience.
                            </p>
                            <p className="text-lg leading-relaxed">
                                With <strong className="text-blue-600">Panchkula lab home service</strong> options becoming more accessible,
                                residents can now prioritize their health without compromising their daily schedules or facing the inconvenience
                                of traveling to diagnostic centers.
                            </p>
                        </div>
                    </section>

                    {/* Objectives */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaClipboardList className="text-3xl text-green-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Objectives of At-Home Lab Testing</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                            <div className="bg-green-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                    <FaHeartbeat className="text-green-600 mr-2" />
                                    Primary Goals
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Provide hassle-free diagnostic services</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Ensure patient comfort and safety</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Enable early detection through regular testing</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                    <FaUsers className="text-blue-600 mr-2" />
                                    Target Groups
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Elderly individuals requiring regular monitoring</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Chronically ill patients needing frequent tests</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Busy professionals with time constraints</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Types of Tests */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <BiTestTube className="text-3xl text-purple-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Types of Lab Tests Available at Home</h2>
                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gamd:p-6 p-3">
                            {/* Basic Health Checkups */}
                            <div className="bg-purple-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <FaFlask className="text-purple-600 mr-2" />
                                    Basic Health Checkups
                                </h3>
                                <ul className="space-y-2">
                                    <li><strong className="text-purple-600">CBC test at home Panchkula</strong> - Complete blood count analysis</li>
                                    <li><strong className="text-purple-600">Sugar test at home Panchkula</strong> - Blood glucose monitoring</li>
                                    <li>Cholesterol level assessment</li>
                                    <li><strong className="text-purple-600">Thyroid test at home Panchkula</strong> - TSH, T3, T4 evaluation</li>
                                </ul>
                            </div>

                            {/* Advanced Tests */}
                            <div className="bg-orange-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <MdScience className="text-orange-600 mr-2" />
                                    Advanced Tests
                                </h3>
                                <ul className="space-y-2">
                                    <li><strong className="text-orange-600">Vitamin D test at home Panchkula</strong> - Deficiency screening</li>
                                    <li>Vitamin B12 level assessment</li>
                                    <li><strong className="text-orange-600">HbA1c test at home Panchkula</strong> - Diabetes monitoring</li>
                                    <li><strong className="text-orange-600">LFT KFT test at home Panchkula</strong> - Organ function evaluation</li>
                                </ul>
                            </div>

                            {/* Infectious Disease Screening */}
                            <div className="bg-red-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <RiVirusLine className="text-red-600 mr-2" />
                                    Infectious Disease Screening
                                </h3>
                                <ul className="space-y-2">
                                    <li><strong className="text-red-600">COVID test at home Panchkula</strong> - RT-PCR and antigen</li>
                                    <li>Dengue fever detection</li>
                                    <li>Malaria parasite screening</li>
                                    <li>Typhoid fever diagnosis</li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gamd:p-6 p-3 mt-6">
                            {/* Women's Health */}
                            <div className="bg-pink-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <FaUserFriends className="text-pink-600 mr-2" />
                                    Women&apos;s Health Tests
                                </h3>
                                <ul className="space-y-2">
                                    <li>Hormone level assessment</li>
                                    <li>Pregnancy confirmation tests</li>
                                    <li>PCOD panel evaluation</li>
                                    <li>Fertility screening packages</li>
                                </ul>
                            </div>

                            {/* Senior Citizen Packages */}
                            <div className="bg-teal-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <FaUsers className="text-teal-600 mr-2" />
                                    Senior Citizen Packages
                                </h3>
                                <ul className="space-y-2">
                                    <li><strong className="text-teal-600">Senior citizen lab tests at home Panchkula</strong></li>
                                    <li>Diabetes comprehensive profile</li>
                                    <li>Heart health monitoring panel</li>
                                    <li>Bone health assessment</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Process */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaCalendarAlt className="text-3xl text-indigo-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Process of Booking & Sample Collection</h2>
                        </div>

                        <div className="bg-indigo-50 md:p-6 p-3 rounded-lg">
                            <div className="grid md:grid-cols-5 gap-4">
                                <div className="text-center p-4">
                                    <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">1</div>
                                    <h4 className="font-semibold mb-2">Book Online</h4>
                                    <p className="text-sm">Use <strong>online blood test booking Panchkula</strong> platforms or call directly</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">2</div>
                                    <h4 className="font-semibold mb-2">Sample Collection</h4>
                                    <p className="text-sm"><strong>Blood sample collection at home Panchkula</strong> by trained professionals</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">3</div>
                                    <h4 className="font-semibold mb-2">Safe Equipment</h4>
                                    <p className="text-sm">Sanitized, single-use equipment for safety</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">4</div>
                                    <h4 className="font-semibold mb-2">Lab Processing</h4>
                                    <p className="text-sm">Quality checks and accurate analysis</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">5</div>
                                    <h4 className="font-semibold mb-2">Report Delivery</h4>
                                    <p className="text-sm"><strong>Fast lab report Panchkula</strong> via email, WhatsApp, or app</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Safety Protocols */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaShieldAlt className="text-3xl text-green-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Safety & Hygiene Protocols</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                            <div className="bg-green-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Safety Measures</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <FaShieldAlt className="text-green-600 mr-3" />
                                        Use of PPE by all technicians
                                    </li>
                                    <li className="flex items-center">
                                        <MdHealthAndSafety className="text-green-600 mr-3" />
                                        Temperature checks before every visit
                                    </li>
                                    <li className="flex items-center">
                                        <FaFlask className="text-green-600 mr-3" />
                                        Regular sanitization of collection kits
                                    </li>
                                    <li className="flex items-center">
                                        <FaMobile className="text-green-600 mr-3" />
                                        Zero-contact report delivery system
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                                <p className="text-lg leading-relaxed">
                                    All <strong className="text-blue-600">pathology services at home Panchkula</strong> follow strict
                                    quality protocols. The <strong className="text-blue-600">trained phlebotomist Panchkula</strong> team
                                    ensures proper sample handling and maintains the highest standards of hygiene throughout the process.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Technology */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaMobile className="text-3xl text-blue-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Technology & Infrastructure</h2>
                        </div>

                        <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Digital Solutions</h3>
                                    <ul className="space-y-2">
                                        <li><strong className="text-blue-600">Lab test app Panchkula</strong> for easy booking and tracking</li>
                                        <li>Integration with <strong className="text-blue-600">NABL certified home lab test Panchkula</strong> facilities</li>
                                        <li>Digital report storage and easy access</li>
                                        <li>Secure payment gateway for online transactions</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Communication Channels</h3>
                                    <ul className="space-y-2">
                                        <li><strong className="text-blue-600">WhatsApp blood test Panchkula</strong> booking service</li>
                                        <li><strong className="text-blue-600">24/7 home diagnostic Panchkula</strong> support</li>
                                        <li>Real-time status updates</li>
                                        <li>Multi-language customer support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Staff & Certification */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaUserMd className="text-3xl text-purple-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Trained Staff & Certification</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                            <div className="bg-purple-50 md:p-6 p-3 rounded-lg text-center">
                                <FaCertificate className="md:text-4xl text-2xl text-purple-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Verified Collectors</h3>
                                <p>All sample collectors are verified and professionally trained</p>
                            </div>
                            <div className="bg-purple-50 md:p-6 p-3 rounded-lg text-center">
                                <FaAward className="md:text-4xl text-2xl text-purple-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Soft Skills Training</h3>
                                <p>Specialized training for home service delivery and patient interaction</p>
                            </div>
                            <div className="bg-purple-50 md:p-6 p-3 rounded-lg text-center">
                                <FaShieldAlt className="md:text-4xl text-2xl text-purple-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Background Verification</h3>
                                <p>Complete background checks and ID verification for all staff</p>
                            </div>
                        </div>
                    </section>

                    {/* Packages & Pricing */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaStar className="text-3xl text-yellow-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Packages & Pricing</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                            <div className="bg-yellow-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Individual Services</h3>
                                <ul className="space-y-2">
                                    <li><strong className="text-yellow-600">Affordable home blood test Panchkula</strong> options</li>
                                    <li><strong className="text-yellow-600">Same-day blood test at home Panchkula</strong> available</li>
                                    <li>Competitive individual test pricing</li>
                                    <li>Transparent cost structure</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Package Deals</h3>
                                <ul className="space-y-2">
                                    <li><strong className="text-green-600">Full body checkup at home Panchkula</strong> packages</li>
                                    <li>Discounted health checkup bundles</li>
                                    <li>Senior citizen and family plans</li>
                                    <li>Corporate tie-ups and group offers</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Coverage Areas */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaMapMarkerAlt className="text-3xl text-red-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Coverage Areas</h2>
                        </div>

                        <div className="bg-red-50 md:p-6 p-3 rounded-lg">
                            <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Primary Coverage</h3>
                                    <ul className="space-y-2">
                                        <li>Entire Panchkula city</li>
                                        <li><strong className="text-red-600">Lab test Sector 8 Panchkula</strong> and all sectors 4-26</li>
                                        <li><strong className="text-red-600">Blood test at home in MDC Panchkula</strong></li>
                                        <li>Kalka Road area</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Extended Areas</h3>
                                    <ul className="space-y-2">
                                        <li><strong className="text-red-600">Home sample collection in Pinjore</strong></li>
                                        <li>Panchkula outskirts</li>
                                        <li>Industrial areas</li>
                                        <li>Residential complexes</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">On-Request Service</h3>
                                    <ul className="space-y-2">
                                        <li><strong className="text-red-600">Zirakpur Mohali Chandigarh blood test home visit</strong></li>
                                        <li>Nearby satellite towns</li>
                                        <li>Special location requests</li>
                                        <li>Corporate office visits</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Benefits */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaHeartbeat className="text-3xl text-pink-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Benefits of Lab Tests at Home</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gamd:p-6 p-3">
                            <div className="bg-pink-50 md:p-6 p-3 rounded-lg text-center">
                                <FaHome className="md:text-4xl text-2xl text-pink-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Comfort & Convenience</h3>
                                <p>Get tested in the comfort of your own home</p>
                            </div>
                            <div className="bg-pink-50 md:p-6 p-3 rounded-lg text-center">
                                <FaCalendarAlt className="md:text-4xl text-2xl text-pink-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Time Saving</h3>
                                <p>Eliminates travel and waiting time</p>
                            </div>
                            <div className="bg-pink-50 md:p-6 p-3 rounded-lg text-center">
                                <FaUsers className="md:text-4xl text-2xl text-pink-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Elderly Friendly</h3>
                                <p>Perfect for elderly or immobile patients</p>
                            </div>
                            <div className="bg-pink-50 md:p-6 p-3 rounded-lg text-center">
                                <FaShieldAlt className="md:text-4xl text-2xl text-pink-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Privacy</h3>
                                <p>Personalized care in private setting</p>
                            </div>
                            <div className="bg-pink-50 md:p-6 p-3 rounded-lg text-center">
                                <MdLocalHospital className="md:text-4xl text-2xl text-pink-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Quick Results</h3>
                                <p>Faster turnaround and follow-up</p>
                            </div>
                            <div className="bg-pink-50 md:p-6 p-3 rounded-lg text-center">
                                <FaHeartbeat className="md:text-4xl text-2xl text-pink-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Health Monitoring</h3>
                                <p><strong>Home health checkup Panchkula</strong> for regular monitoring</p>
                            </div>
                        </div>
                    </section>

                    {/* Customer Support */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaPhone className="text-3xl text-blue-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Customer Support & Feedback</h2>
                        </div>

                        <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
                            <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                                <div className="text-center">
                                    <FaPhone className="md:text-4xl text-2xl text-blue-600 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">24/7 Helpline</h3>
                                    <p>Round-the-clock customer support for all queries</p>
                                </div>
                                <div className="text-center">
                                    <FaWhatsapp className="md:text-4xl text-2xl text-green-600 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">WhatsApp Support</h3>
                                    <p>Instant chat support for quick assistance</p>
                                </div>
                                <div className="text-center">
                                    <FaStar className="md:text-4xl text-2xl text-yellow-600 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">Feedback System</h3>
                                    <p>Comprehensive feedback and complaint resolution</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaStar className="text-3xl text-gold-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">What Our Panchkula Customers Say</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                            <div className="bg-gray-50 md:p-6 p-3 rounded-lg">
                                <div className="flex mb-4">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <FaStar key={star} className="text-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-lg mb-4 italic">
                                    &apos;The <strong>best home diagnostic service Panchkula</strong> I&apos;ve experienced. The phlebotomist was
                                    professional and the entire process was seamless. Highly recommend for busy professionals like me.&apos;
                                </p>
                                <p className="font-semibold">- Rajesh K., Sector 12 Panchkula</p>
                            </div>
                            <div className="bg-gray-50 md:p-6 p-3 rounded-lg">
                                <div className="flex mb-4">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <FaStar key={star} className="text-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-lg mb-4 italic">
                                    &apos;Perfect service for my elderly parents. The <strong>Panchkula home visit for blood test</strong>
                                    made it so convenient for them. The staff was gentle and understanding.&apos;
                                </p>
                                <p className="font-semibold">- Priya S., MDC Panchkula</p>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-lg text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Book Your Home Lab Test Now in Panchkula
                        </h2>
                        <p className="text-xl mb-6">
                            Experience the convenience of <strong>lab test near me Panchkula</strong> services with
                            <strong> doorstep lab service Panchkula</strong> at your fingertips!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition-colors">
                                    <FaWhatsapp className="mr-2" />
                            <Link
                                href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                    WhatsApp Booking
                            </Link>
                                </button>

                            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition-colors">
                                <FaMobile className="mr-2" />
                                Download App
                            </button>

                                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition-colors">
                                    <FaPhone className="mr-2" />
                            <Link
                                href="tel:+918307190216"
                                >
                                    Call Now
                                </Link>
                                </button>
                        </div>
                        <div className="mt-6 text-lg">
                            <p><strong>Special Offer:</strong> Get 20% off on your first home collection!</p>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="mt-12 text-center text-gray-600">
                        <p className="text-lg">
                            Choose <strong>Panchkula home pathology services</strong> for reliable, convenient, and professional healthcare at your doorstep.
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
