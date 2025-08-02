// app/elder-care-at-home/mohali/page.tsx

import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';
import { FaHeart, FaHome, FaShieldAlt, FaUsers, FaClock, FaPhone, FaStethoscope, FaChartLine, FaMapMarkerAlt, FaAmbulance } from 'react-icons/fa';
export const metadata = {
    title: 'Elder Care at Home in Mohali | Verified Caregivers – CareKwik',
    description:
        'Book reliable elder care at home in Mohali. Trained male/female caregivers for palliative, dementia, and senior care. Safe, affordable support by CareKwik.',
    keywords: [
        'elder care in Mohali',
        'home care Mohali',
        'female caregiver Mohali',
        'palliative care Mohali',
        'senior care Mohali',
        'old age care at home Mohali',
        'dementia care Mohali',
        'home nursing Mohali',
        'CareKwik elder care Mohali',
    ],
    alternates: {
        canonical: 'https://carekwik.com/elder-care-at-home/mohali',
    },
};


export default function ElderCareMohaliPage() {
    return (
        <>
            <Script id="ld-json-mohali" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Elder Care in Mohali",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "url": "https://carekwik.com/elder-care-at-home/mohali",
                    "telephone": "+91-8307190216",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Mohali",
                        "addressRegion": "Punjab",
                        "postalCode": "160055",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-20:00",
                    "priceRange": "₹₹",
                    "description": "Hire professional elder care at home in Mohali by CareKwik. Verified and trained caregivers for senior citizens.",
                    "areaServed": ["Mohali", "Chandigarh", "Zirakpur"]
                })}
            </Script>
            <Script id="ld-jsonfqs-mohali" type="application/ld+json">
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
                            "name": "Is elder care at home available in Mohali?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, CareKwik provides full-time and part-time elder care across Mohali phases 1 to 11 and new sectors."
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
                        alt="Elder Care Services in Mohali"
                        width={400}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="md:text-2xl text-xl font-bold mb-4">Book Elder Care Service in Mohali</p>
                        <BookService servicename="Elder Care" />
                    </div>
                </div>


                <div className="min-h-screen max-w-6xl mx-auto my-10">
                    {/* Hero Section */}
                    <div className=" py-5 md:py-16">
                        <div className="max-w-6xl mx-auto  ">
                            <div className="md:text-center">
                                <h1 className="md:text-4xl text-2xl font-bold mb-3 md:mb-6">
                                    Elder Care at Home in Mohali – Verified Male/Female Attendants
                                </h1>
                                <p className="text-xl md:text-2xl opacity-90">
                                    Providing compassionate, professional care for seniors across all sectors of Mohali
                                </p>
                                <div className="flex items-center justify-center mt-4">
                                    <FaMapMarkerAlt className="mr-2" size={20} />
                                    <span className="text-lg">Serving Mohali, Kharar, Airport Road & Surrounding Areas</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-6xl mx-auto   py-12">

                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg    p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaHome className="text-green-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Introduction</h2>
                                </div>

                                <p className="text-lg text-gray-700 mb-4">
                                    Mohali&apos;s aging population is growing rapidly, with families increasingly seeking quality <strong>elder care at home Mohali</strong> services that prioritize comfort and dignity. The city&apos;s expanding urban landscape and modern lifestyle have created a significant demand for professional <strong>home care for elderly in Mohali</strong> that combines medical expertise with personalized attention.
                                </p>

                                <p className="text-lg text-gray-700 mb-4">
                                    <strong>Senior citizen care services Mohali</strong> have evolved to meet the unique needs of families living in various sectors, from Phase 1 to the newest developments near Airport Road. The importance of home-based care cannot be overstated, as it allows seniors to maintain their independence while receiving professional support in familiar surroundings.
                                </p>

                                <p className="text-lg text-gray-700 mb-4">
                                    <strong>Elderly care at home Mohali</strong> represents more than just medical assistance; it encompasses emotional support, social interaction, and maintaining quality of life for senior citizens. Families across Mohali are discovering that <strong>geriatric care services Mohali</strong> provide peace of mind while ensuring their loved ones receive comprehensive care without leaving their homes.
                                </p>

                                <p className="text-lg text-gray-700">
                                    The need for compassionate, local, and personalized services has led to the development of specialized <strong>Mohali elder care services</strong> that understand the cultural preferences and lifestyle requirements of the local community. These services bridge the gap between institutional care and family support, offering professional <strong>home nursing services Mohali</strong> residents can trust.
                                </p>
                            </div>
                        </section>

                        {/* Objectives */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg    p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaHeart className="text-red-500 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Objectives of Elder Care Services</h2>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-green-800 mb-3">Safety & Dignity</h3>
                                        <p className="text-gray-700">
                                            <strong>In-home elder care Mohali</strong> ensures safety, dignity, and comfort for senior citizens in their familiar environment.
                                        </p>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-blue-800 mb-3">Accessible Healthcare</h3>
                                        <p className="text-gray-700">
                                            Providing accessible healthcare and emotional support directly at home across all sectors of Mohali.
                                        </p>
                                    </div>

                                    <div className="bg-purple-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-purple-800 mb-3">Family Support</h3>
                                        <p className="text-gray-700">
                                            Reducing burden on families while significantly improving elder quality of life and independence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Types of Services */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg    p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaStethoscope className="text-blue-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Elder Care Services Offered in Mohali</h2>
                                </div>

                                {/* Medical Care Services */}
                                <div className="mb-8">
                                    <h3 className="md:text-2xl text-xl font-semibold text-blue-700 mb-4">A. Medical Care Services</h3>
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                <strong>Doctor visits at home for elderly Mohali</strong> provide convenient medical consultations across all sectors
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                <strong>In-home medical care for seniors Mohali</strong> including chronic illness and post-operative care management
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                <strong>Home physiotherapy for elderly in Mohali</strong> for rehabilitation and mobility improvement
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                Comprehensive medication management and reminder services for senior safety
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                <strong>Nursing care for elderly at home Mohali</strong> by qualified professionals
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Personal Assistance */}
                                <div className="mb-8">
                                    <h3 className="md:text-2xl text-xl font-semibold text-green-700 mb-4">B. Personal Assistance Services</h3>
                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                <strong>Personal care for elderly in Mohali</strong> including bathing, grooming, and hygiene assistance
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                Feeding and toileting assistance with dignity and respect for seniors
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                Mobility support and help with daily routines throughout Mohali homes
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                <strong>Home attendant for seniors Mohali</strong> providing comprehensive personal care
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Companionship & Mental Wellness */}
                                <div className="mb-8">
                                    <h3 className="md:text-2xl text-xl font-semibold text-purple-700 mb-4">C. Companionship & Mental Wellness</h3>
                                    <div className="bg-purple-50 p-6 rounded-lg">
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-purple-600 mr-2">•</span>
                                                One-on-one companionship services to combat loneliness and isolation
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-purple-600 mr-2">•</span>
                                                <strong>Dementia care at home in Mohali</strong> with specialized cognitive engagement activities
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-purple-600 mr-2">•</span>
                                                <strong>Alzheimer&apos;s care for elderly Mohali</strong> providing expert support for memory-related conditions
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-purple-600 mr-2">•</span>
                                                Professional support for depression and emotional wellness of seniors
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Household Support */}
                                <div className="mb-8">
                                    <h3 className="md:text-2xl text-xl font-semibold text-orange-700 mb-4">D. Household Support Services</h3>
                                    <div className="bg-orange-50 p-6 rounded-lg">
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-orange-600 mr-2">•</span>
                                                Meal preparation based on specific dietary needs and cultural preferences
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-600 mr-2">•</span>
                                                Light housekeeping and laundry services to maintain clean living spaces
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-600 mr-2">•</span>
                                                Running errands and grocery shopping across Mohali markets and stores
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Palliative Care */}
                                <div>
                                    <h3 className="md:text-2xl text-xl font-semibold text-teal-700 mb-4">E. Palliative and End-of-Life Care</h3>
                                    <div className="bg-teal-50 p-6 rounded-lg">
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-teal-600 mr-2">•</span>
                                                <strong>Palliative care at home in Mohali</strong> focusing on pain and symptom management
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-teal-600 mr-2">•</span>
                                                Emotional and spiritual support for families during difficult times
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-teal-600 mr-2">•</span>
                                                Coordination with hospice services and local healthcare providers
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Staffing & Qualifications */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg    p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaUsers className="text-indigo-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Staffing & Qualifications</h2>
                                </div>

                                <p className="text-lg text-gray-700 mb-6">
                                    Families looking to <strong>hire caregiver for elderly Mohali</strong> can be assured of professional competence and trustworthiness. <strong>Trained caregivers for seniors in Mohali</strong> undergo comprehensive certification and background verification processes.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <FaShieldAlt className="text-blue-600 mt-1 mr-3" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Professional Certification</h4>
                                                <p className="text-gray-600">Certified nurses and trained caregivers with proper medical credentials</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <FaShieldAlt className="text-blue-600 mt-1 mr-3" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Background Verification</h4>
                                                <p className="text-gray-600">Comprehensive background checks and police verification for security</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <FaShieldAlt className="text-blue-600 mt-1 mr-3" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Geriatric Expertise</h4>
                                                <p className="text-gray-600">Extensive experience with geriatric care, dementia, and disability support</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <FaShieldAlt className="text-blue-600 mt-1 mr-3" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Local Knowledge</h4>
                                                <p className="text-gray-600">Understanding of Mohali&apos;s healthcare system and cultural preferences</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Service Coverage Area */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg    p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaMapMarkerAlt className="text-green-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Service Coverage Area</h2>
                                </div>

                                <p className="text-lg text-gray-700 mb-6">
                                    <strong>Elder care services near me Mohali</strong> are available across all major sectors and phases of the city, ensuring accessibility for families regardless of their location.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-green-800 mb-3">Primary Coverage Areas</h4>
                                        <ul className="text-gray-700 space-y-2">
                                            <li>• <strong>Elder care services Sector 70 Mohali</strong> and surrounding areas</li>
                                            <li>• All phases from Phase 1 to Phase 11</li>
                                            <li>• <strong>Elder care near Airport Road Mohali</strong> including Aerocity</li>
                                            <li>• <strong>Home care for elderly Phase 5 Mohali</strong> and adjacent sectors</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-blue-800 mb-3">Extended Service Areas</h4>
                                        <ul className="text-gray-700 space-y-2">
                                            <li>• <strong>Senior citizen services in Kharar and Mohali</strong></li>
                                            <li>• Landran and nearby residential areas</li>
                                            <li>• Banur and Kurali (optional expansion coverage)</li>
                                            <li>• Industrial Area Phase 1 and Phase 2</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 24/7 Services & Emergency Care */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg    p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaClock className="text-red-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">24/7 Services & Emergency Care</h2>
                                </div>

                                <p className="text-lg text-gray-700 mb-6">
                                    <strong>24/7 home elder care services Mohali</strong> provide round-the-clock peace of mind for families. <strong>Emergency elder care Mohali</strong> ensures rapid response during critical situations across all sectors.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center bg-red-50 p-6 rounded-lg">
                                        <FaPhone className="text-red-600 mx-auto mb-4" size={40} />
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">24/7 Helpline</h4>
                                        <p className="text-gray-600">Round-the-clock support and emergency response coordination across Mohali</p>
                                    </div>

                                    <div className="text-center bg-orange-50 p-6 rounded-lg">
                                        <FaAmbulance className="text-orange-600 mx-auto mb-4" size={40} />
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Ambulance Coordination</h4>
                                        <p className="text-gray-600">Quick ambulance arrangement and hospital coordination in Mohali</p>
                                    </div>

                                    <div className="text-center bg-blue-50 p-6 rounded-lg">
                                        <FaStethoscope className="text-blue-600 mx-auto mb-4" size={40} />
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">On-Call Doctors</h4>
                                        <p className="text-gray-600">On-call doctor visits within Mohali for urgent medical needs</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Specialized Services */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg    p-3 md:p-8">
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Specialized Care Services</h2>

                                <div className="grid md:grid-cols-2 ga p-3 md:p-8">
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-blue-800 mb-4">Post-Surgery Care</h3>
                                        <p className="text-gray-700 mb-3">
                                            <strong>Post-surgery elder care at home in Mohali</strong> facilitates faster recovery in comfortable home environments while ensuring proper medical monitoring and rehabilitation support across all sectors.
                                        </p>
                                        <ul className="text-gray-600 space-y-1">
                                            <li>• Wound care and dressing management</li>
                                            <li>• <strong>Private nurse at home for senior citizens Mohali</strong></li>
                                            <li>• Physical therapy and mobility assistance</li>
                                            <li>• Pain management and comfort measures</li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-green-800 mb-4">Premium Care Options</h3>
                                        <p className="text-gray-700 mb-3">
                                            <strong>Best elder care agency in Mohali</strong> offers premium services with experienced professionals who understand local healthcare needs and cultural preferences.
                                        </p>
                                        <p className="text-gray-700">
                                            <strong>Affordable home care for elderly in Mohali</strong> ensures quality care remains accessible to all families across different sectors and income levels.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Technology & Monitoring */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg    p-3 md:p-8">
                                <div className="flex items-center mb-6">
                                    <FaChartLine className="text-purple-600 mr-3" size={32} />
                                    <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Technology & Monitoring</h2>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-purple-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold text-purple-800 mb-3">Telemedicine</h4>
                                        <p className="text-gray-700">Remote consultations with doctors and specialists for convenient healthcare access.</p>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-3">Health Monitoring</h4>
                                        <p className="text-gray-700">Advanced health vitals monitoring apps and devices for continuous care tracking.</p>
                                    </div>

                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold text-green-800 mb-3">Family Access</h4>
                                        <p className="text-gray-700">Real-time access to care reports and health updates for family members.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Pricing & Booking */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg    p-3 md:p-8">
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Pricing & How to Book</h2>

                                <div className="grid md:grid-cols-2 ga p-3 md:p-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-800 mb-4">Flexible Pricing Models</h3>
                                        <ul className="text-gray-700 space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                Hourly, daily, and monthly care packages
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                Short-term or trial care options available
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                Discounts for long-term commitments
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                Multi-member family care packages
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-green-800 mb-4">Easy Booking Process</h3>
                                        <p className="text-gray-700 mb-4">
                                            <strong>Book elder care at home Mohali</strong> through multiple convenient channels designed for family accessibility.
                                        </p>
                                        <ul className="text-gray-700 space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                Website and mobile app booking options
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                Dedicated phone numbers and WhatsApp support
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-600 mr-2">•</span>
                                                Local office consultations in Mohali
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Future Expansion */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg    p-3 md:p-8">
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Future Expansion & Community Engagement</h2>

                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-blue-800 mb-3">Community Events</h4>
                                        <p className="text-gray-700">Planning community engagement events for seniors across Mohali to promote social interaction and wellness.</p>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-green-800 mb-3">Healthcare Partnerships</h4>
                                        <p className="text-gray-700">Developing partnerships with local hospitals, NGOs, and Resident Welfare Associations (RWAs) in Mohali.</p>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-purple-800 mb-3">Senior Activity Programs</h4>
                                        <p className="text-gray-700">Establishing senior activity clubs and wellness programs specifically designed for Mohali&apos;s elderly community.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Legal & Safety */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg    p-3 md:p-8">
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Legal, Safety & Ethics</h2>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                                        <h4 className="text-lg font-semibold text-yellow-800 mb-2">Privacy Protection</h4>
                                        <p className="text-gray-700">Strict patient privacy and consent policies ensuring confidentiality of all medical information.</p>
                                    </div>

                                    <div className="bg-red-50 border-l-4 border-red-400 p-6">
                                        <h4 className="text-lg font-semibold text-red-800 mb-2">Abuse Prevention</h4>
                                        <p className="text-gray-700">Comprehensive elder abuse prevention training for all caregivers and staff members.</p>
                                    </div>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">COVID-19 Safety</h4>
                                        <p className="text-gray-700">Enhanced COVID-19 safety and hygiene protocols to protect vulnerable senior citizens.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section className="mb-12">
                            <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white rounded-lg    p-3 md:p-8">
                                <h2 className="md:text-3xl text-2xl font-bold mb-6">Choose Quality Elder Care in Mohali</h2>

                                <p className="text-lg mb-4">
                                    Elder care at home in Mohali represents the perfect combination of professional healthcare and personal comfort for senior citizens. With comprehensive services available across all sectors, from Kharar to Airport Road, families can ensure their loved ones receive quality care while maintaining their independence and dignity.
                                </p>

                                <p className="text-lg mb-4">
                                    The growing demand for home-based elder care in Mohali reflects families&apos; desire to provide the best possible care while keeping seniors close to their community, friends, and familiar surroundings. Professional services ensure medical needs are met while preserving the emotional well-being that comes from aging in place.
                                </p>

                                <div className="bg-white bg-opacity-20 p-6 text-black frounded-lg">
                                    <h3 className="text-xl font-semibold mb-3">Start Your Elder Care Journey</h3>
                                    <p className="text-lg">
                                        Contact experienced elder care professionals in Mohali today to schedule a consultation and learn how personalized home care services can benefit your family. Quality elder care starts with understanding individual needs and developing customized care plans that work for everyone.
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
