// app/elder-care-at-home/panchkula/page.tsx
import { FaHeart, FaHome, FaShieldAlt, FaUsers, FaClock, FaPhone, FaStethoscope, FaChartLine, FaMapMarkerAlt, FaAmbulance, FaUserMd } from 'react-icons/fa';
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';
export const metadata = {
    title: 'Elder Care at Home in Panchkula | Verified Caregivers – CareKwik',
    description:
        'Book trained elder care attendants in Panchkula. Trusted male/female caregivers for old age, palliative, and dementia care—safe and affordable service.',
    keywords: [
        'elder care Panchkula',
        'elder care home attendant Panchkula',
        'female caretaker Panchkula',
        'home care Panchkula',
        'palliative care Panchkula',
        'old age care Panchkula',
        'dementia care Panchkula',
        'home nursing Panchkula',
        'CareKwik elder care Panchkula',
    ],
    alternates: {
        canonical: 'https://carekwik.com/elder-care-at-home/panchkula',
    },
};

export default function ElderCarePanchkulaPage() {
    return (
        <>
            <Script id="ld-json" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Elder Care in Panchkula",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "url": "https://carekwik.com/elder-care-at-home/panchkula",
                    "telephone": "+91-8307190216",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Panchkula",
                        "addressRegion": "Haryana",
                        "postalCode": "134109",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-20:00",
                    "priceRange": "₹₹",
                    "description": "Best elder care at home in Panchkula. Compassionate old age caretakers and attendants from CareKwik.",
                    "areaServed": ["Panchkula", "Chandigarh", "Pinjore"]
                })}
            </Script>
            <Script id="ld-jsonfqs-pk" type="application/ld+json">
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
                            "name": "Do you serve elder care needs in Panchkula sector-wise?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our caregivers are available in all sectors of Panchkula, including Sector 4, 11, and 20."
                            }
                        }



                    ]
                })}
            </Script>

            <div className="mx-auto md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row gap-10 justify-between">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg"
                        alt="Elder Care Services in Panchkula"
                        width={400}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="md:text-2xl text-xl font-bold mb-4">Book Elder Care in Panchkula</p>
                        <BookService servicename="Elder Care" />
                    </div>
                </div>


                <div className="min-h-screen my-10 max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className=" md:py-16 py-5">
                        <div className="max-w-6xl mx-auto  ">
                            <div className="">
                                <h1 className="md:text-4xl text-2xl font-bold mb-6">
                                    Elder Care at Home in Panchkula – Trusted Care with Compassion
                                </h1>
                                <p className="text-xl md:text-2xl opacity-90">
                                    Professional, compassionate care for seniors across all sectors of Panchkula
                                </p>
                                <div className="flex items-center justify-center mt-4">
                                    <FaMapMarkerAlt className="mr-2" size={20} />
                                    <span className="text-lg">Serving Panchkula, MDC, Pinjore, Kalka & Tricity Areas</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-6xl mx-auto   py-12">

                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg  p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaHome className="text-orange-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Introduction</h2>
                                </div>

                                <p className="text-lg text-gray-700 mb-4">
                                    Panchkula&apos;s aging population is steadily increasing, with many senior citizens preferring to age gracefully in their own homes. The growing demand for <strong>elder care at home Panchkula</strong> services reflects families&apos; desire to provide quality care while maintaining the comfort and familiarity of home environments.
                                </p>

                                <p className="text-lg text-gray-700 mb-4">
                                    <strong>Home care for elderly in Panchkula</strong> has evolved significantly, offering comprehensive solutions that address medical, personal, and emotional needs of seniors. The city&apos;s well-planned sectors and proximity to Chandigarh have created a unique environment where professional <strong>senior citizen care Panchkula</strong> services can thrive.
                                </p>

                                <p className="text-lg text-gray-700 mb-4">
                                    The growing need for in-home elder care stems from families&apos; recognition that professional <strong>geriatric care Panchkula</strong> services can significantly enhance quality of life for seniors. These services enable elderly individuals to maintain their independence while receiving necessary medical and personal support in familiar surroundings.
                                </p>

                                <p className="text-lg text-gray-700">
                                    Benefits of home-based elderly support extend beyond medical care to encompass emotional well-being, social connection, and dignity preservation. <strong>Nursing services for elderly in Panchkula</strong> provide families with peace of mind while ensuring their loved ones receive professional care tailored to their specific needs.
                                </p>
                            </div>
                        </section>

                        {/* Objectives */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg  p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaHeart className="text-red-500 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Objectives of Elder Care Services</h2>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-orange-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-orange-800 mb-3">Independent Living</h3>
                                        <p className="text-gray-700">
                                            <strong>Elder care services Panchkula</strong> promote independent and dignified living for seniors in their own homes.
                                        </p>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-blue-800 mb-3">Comprehensive Care</h3>
                                        <p className="text-gray-700">
                                            <strong>In-home senior care Panchkula</strong> provides comprehensive medical and personal care at home.
                                        </p>
                                    </div>

                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-green-800 mb-3">Family Support</h3>
                                        <p className="text-gray-700">
                                            Support families with professional caregiving while maintaining close family bonds and relationships.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Categories of Services */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg  p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaStethoscope className="text-blue-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Categories of Elder Care Services</h2>
                                </div>

                                {/* Medical Services */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">A. Medical Services</h3>
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                <strong>Home nursing care Panchkula</strong> with qualified nurses providing regular home visits
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                <strong>Chronic illness care for seniors Panchkula</strong> including diabetes and hypertension management
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                <strong>Post-surgery elder care at home in Panchkula</strong> for safe recovery and rehabilitation
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                <strong>At-home physiotherapy for seniors Panchkula</strong> to improve mobility and strength
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                Comprehensive vital signs monitoring and health assessment services
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                <strong>In-home nurse for elderly Panchkula</strong> providing professional medical supervision
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Personal Care Services */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-semibold text-green-700 mb-4">B. Personal Care Services</h3>
                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                Bathing and grooming assistance with dignity and respect for seniors
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                Mobility and transfer support for safe movement around the home
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                <strong>Bedridden patient care at home Panchkula</strong> including incontinence and toileting care
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                <strong>Medication management for elderly Panchkula</strong> with daily reminders and monitoring
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                <strong>Personal care assistant for seniors Panchkula</strong> for comprehensive daily support
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Companionship & Mental Health */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-semibold text-purple-700 mb-4">C. Companionship and Mental Health</h3>
                                    <div className="bg-purple-50 p-6 rounded-lg">
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-purple-600 mr-2">•</span>
                                                <strong>Companion care for elderly in Panchkula</strong> providing emotional support and engagement
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-purple-600 mr-2">•</span>
                                                Reading, conversation, and hobby activities to maintain mental stimulation
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-purple-600 mr-2">•</span>
                                                <strong>Dementia care at home Panchkula</strong> with specialized cognitive stimulation programs
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-purple-600 mr-2">•</span>
                                                <strong>Alzheimer&apos;s home care Panchkula</strong> providing expert support for memory-related conditions
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Lifestyle & Household Help */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-orange-700 mb-4">D. Lifestyle & Household Help</h3>
                                    <div className="bg-orange-50 p-6 rounded-lg">
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-orange-600 mr-2">•</span>
                                                Meal preparation tailored to specific health needs and dietary requirements
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-600 mr-2">•</span>
                                                Light housekeeping services to maintain clean and comfortable living spaces
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-600 mr-2">•</span>
                                                Errand running and shopping assistance for daily necessities and medical supplies
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Trained Caregiver Team */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg  p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaUsers className="text-indigo-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Trained Caregiver Team</h2>
                                </div>

                                <p className="text-lg text-gray-700 mb-6">
                                    Families looking to <strong>hire caregiver for elderly Panchkula</strong> can trust our team of qualified professionals. <strong>Trained caregivers for elderly Panchkula</strong> undergo comprehensive certification and background verification processes.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <FaShieldAlt className="text-blue-600 mt-1 mr-3" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Certified Caregivers</h4>
                                                <p className="text-gray-600">Certified caregivers with specialized geriatric training and experience</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <FaShieldAlt className="text-blue-600 mt-1 mr-3" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Background Verification</h4>
                                                <p className="text-gray-600">Thoroughly background-verified staff for family security and peace of mind</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <FaUsers className="text-purple-600 mt-1 mr-3" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Female Attendants</h4>
                                                <p className="text-gray-600"><strong>Female attendants for senior citizens Panchkula</strong> available for personal care</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <FaHeart className="text-green-600 mt-1 mr-3" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Cultural Sensitivity</h4>
                                                <p className="text-gray-600">Hindi and Punjabi-speaking caregivers for better communication</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Service Areas */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg  p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaMapMarkerAlt className="text-green-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Service Areas in Panchkula</h2>
                                </div>

                                <p className="text-lg text-gray-700 mb-6">
                                    <strong>Home nursing Panchkula near me</strong> services are available across all major sectors and nearby areas, ensuring accessibility for families throughout the region.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-green-800 mb-3">Primary Sectors</h4>
                                        <ul className="text-gray-700 space-y-2">
                                            <li>• <strong>Elder care services Sector 2 Panchkula</strong> and all sectors from 2 to 26</li>
                                            <li>• <strong>Home care for elderly Sector 12 Panchkula</strong> and surrounding residential areas</li>
                                            <li>• <strong>Senior care providers in MDC Panchkula</strong> for comprehensive coverage</li>
                                            <li>• All planned sectors with easy accessibility for caregivers</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-blue-800 mb-3">Extended Areas</h4>
                                        <ul className="text-gray-700 space-y-2">
                                            <li>• <strong>Home care attendants in Pinjore Kalka</strong> for wider regional coverage</li>
                                            <li>• <strong>Panchkula Mohali Tricity elder care services</strong> connecting major cities</li>
                                            <li>• Peer Muchalla and nearby residential communities</li>
                                            <li>• Rural areas as per service availability and accessibility</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Emergency & 24/7 Services */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg  p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaClock className="text-red-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Emergency & On-Demand Services</h2>
                                </div>

                                <p className="text-lg text-gray-700 mb-6">
                                    <strong>24/7 elder care at home in Panchkula</strong> provides round-the-clock peace of mind for families. <strong>Emergency elder care at home Panchkula</strong> ensures rapid response during critical situations.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center bg-red-50 p-6 rounded-lg">
                                        <FaPhone className="text-red-600 mx-auto mb-4" size={40} />
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">24/7 Emergency Support</h4>
                                        <p className="text-gray-600">Round-the-clock emergency caregiver support across Panchkula</p>
                                    </div>

                                    <div className="text-center bg-orange-50 p-6 rounded-lg">
                                        <FaAmbulance className="text-orange-600 mx-auto mb-4" size={40} />
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Ambulance Coordination</h4>
                                        <p className="text-gray-600">Quick ambulance coordination and hospital liaison services</p>
                                    </div>

                                    <div className="text-center bg-blue-50 p-6 rounded-lg">
                                        <FaUserMd className="text-blue-600 mx-auto mb-4" size={40} />
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">On-Call Doctors</h4>
                                        <p className="text-gray-600"><strong>Doctor home visit for seniors Panchkula</strong> for urgent medical needs</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Custom Care Plans */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg  p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaChartLine className="text-purple-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Custom Care Plans</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-blue-800 mb-3">Personalized Assessment</h4>
                                        <p className="text-gray-700">Comprehensive assessment by healthcare professionals to understand specific needs and requirements.</p>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-green-800 mb-3">Flexible Care Plans</h4>
                                        <p className="text-gray-700">Tailored plans for short-term or long-term care with flexibility to adjust based on changing needs.</p>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-purple-800 mb-3">Regular Updates</h4>
                                        <p className="text-gray-700">Regular updates and family coordination to ensure optimal care delivery and satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Technology & Monitoring */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg  p-3 md:p-8">
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Technology & Monitoring Tools</h2>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-purple-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold text-purple-800 mb-3">Remote Health Monitoring</h4>
                                        <p className="text-gray-700">Optional remote health monitoring for continuous vital signs tracking and health assessment.</p>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-3">Video Call Updates</h4>
                                        <p className="text-gray-700">Regular video call updates to family members for transparency and peace of mind.</p>
                                    </div>

                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold text-green-800 mb-3">Mobile App Logs</h4>
                                        <p className="text-gray-700">Daily care logs and reports accessible via mobile app for family monitoring.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Pricing & Packages */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg  p-3 md:p-8">
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Pricing & Packages</h2>

                                <p className="text-lg text-gray-700 mb-6">
                                    <strong>Affordable senior care services Panchkula</strong> offers flexible pricing models to accommodate different family needs and budgets.
                                </p>

                                <div className="grid md:grid-cols-2 gap-3 md:p-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-800 mb-4">Flexible Care Options</h3>
                                        <ul className="text-gray-700 space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                Hourly care options for specific assistance needs
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                Full-day or live-in caregiver packages for comprehensive care
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                Post-surgery or respite care plans for specialized needs
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                <strong>On-demand elder care Panchkula</strong> for immediate assistance
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-green-800 mb-4">Transparent Pricing</h3>
                                        <p className="text-gray-700 mb-4">
                                            Transparent and flexible pricing with no hidden costs or surprise charges for families.
                                        </p>
                                        <p className="text-gray-700">
                                            <strong>Book elder care service Panchkula</strong> with confidence knowing exactly what services are included in each package.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Testimonials & Community Trust */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg  p-3 md:p-8">
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Testimonials & Community Trust</h2>

                                <div className="space-y-6">
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                                        <h4 className="text-lg font-semibold text-yellow-800 mb-2">Case Studies</h4>
                                        <p className="text-gray-700">Real case studies from Panchkula families showcasing successful elder care outcomes and improved quality of life.</p>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-400 p-6">
                                        <h4 className="text-lg font-semibold text-green-800 mb-2">Client Feedback</h4>
                                        <p className="text-gray-700">Positive client feedback and success stories demonstrating the effectiveness of home-based elder care services.</p>
                                    </div>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Healthcare Partnerships</h4>
                                        <p className="text-gray-700">Strong partnerships with local doctors and hospitals in Panchkula for coordinated care and medical support.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Contact & Booking */}
                        <section className="mb-12 ">
                            <div className="bg-white rounded-lg  p-3 md:p-8">
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Contact & Booking Information</h2>

                                <div className="grid md:grid-cols-2 gap-3 md:p-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-800 mb-4">Easy Booking Options</h3>
                                        <ul className="text-gray-700 space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                WhatsApp, phone, and website booking for convenience
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                Free consultation or trial visit to assess needs
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                Dedicated support team and escalation contact for issues
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-orange-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-orange-800 mb-3">Get Started Today</h3>
                                        <p className="text-gray-700">
                                            Contact our team to discuss your elder care needs and schedule a free consultation to understand how we can help your family.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section className="mb-12">
                            <div className="bg-blue-500 text-white rounded-lg  p-3 md:p-8">
                                <h2 className="md:text-3xl text-2xl font-bold mb-6">Choose Quality Elder Care in Panchkula</h2>

                                <p className="text-lg mb-4">
                                    Elder care at home in Panchkula represents the perfect balance between professional healthcare and personal comfort for senior citizens. With comprehensive services available across all sectors, from Sector 2 to rural areas, families can ensure their loved ones receive quality care while maintaining independence and dignity.
                                </p>

                                <p className="text-lg mb-4">
                                    The growing recognition of home-based elder care benefits reflects families&apos; commitment to providing the best possible support while keeping seniors connected to their community and familiar surroundings. Professional services ensure all medical and personal needs are met with compassion and expertise.
                                </p>

                                <div className="bg-white text-black bg-opacity-20 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3">Begin Your Elder Care Journey</h3>
                                    <p className="text-lg">
                                        Reach out to experienced elder care professionals in Panchkula today to explore how personalized home care services can benefit your family. Quality elder care begins with understanding individual needs and creating customized solutions that work for everyone involved.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
