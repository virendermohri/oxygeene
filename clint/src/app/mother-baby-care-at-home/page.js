// app/mother-baby-care-at-home/page.tsx
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
    FaHome,
    FaBaby,
    FaHeart,
    FaShieldAlt,
    FaMobile,
    FaUsers,
    FaUserMd,
    FaStar,
    FaPhone,
    FaWhatsapp,
    FaCalendarAlt,
    FaHeartbeat,
    FaCertificate,
    FaAward,
    FaClipboardList,
    FaUserFriends,
    FaFemale,
    FaHandHoldingHeart,
    FaStethoscope,
    FaBed,
    FaSprayCan
} from 'react-icons/fa';
import { MdHealthAndSafety, MdLocalHospital, MdPregnantWoman, MdChildFriendly } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { GiBabyBottle, GiNightSleep } from 'react-icons/gi';
import { RiMentalHealthLine, RiNurseLine } from 'react-icons/ri';
export const metadata = {
    title: 'Mother & Baby Care at Home | Postnatal & Infant Care – CareKwik',
    description:
        'Book trained caregivers for mother and baby care at home in Chandigarh, Mohali & Panchkula. Postnatal & newborn support, safe and experienced service.',
    keywords: [
        'mother and baby care at home',
        'postnatal care Chandigarh',
        'baby massage caretaker Mohali',
        'newborn care at home Panchkula',
        'nanny for infant',
        'Japa maid service',
        'new mother care at home',
        'post pregnancy care',
        'baby caretaker in Chandigarh',
    ],
    alternates: {
        canonical: 'https://carekwik.com/mother-baby-care-at-home',
    },
};

export default function MotherBabyCarePage() {
    return (
        <>
            {/* JSON-LD Schema for LocalBusiness + FAQs */}
            <Script id="ld-json-motherbaby" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Mother and Baby Care at Home",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "url": "https://carekwik.com/mother-baby-care-at-home",
                    "telephone": "+91-8307190216",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chandigarh",
                        "addressRegion": "Chandigarh",
                        "postalCode": "160036",
                        "addressCountry": "IN"
                    },
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Su 09:00-20:00",
                    "areaServed": ["Chandigarh", "Mohali", "Panchkula"],
                    "description": "Trained attendants for newborn care, baby massage, Japa maid service, and postnatal recovery at home."
                })}
            </Script>

            <Script id="ld-faq-motherbaby" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Do you provide mother and baby care at home in Chandigarh?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we offer trained attendants for newborn and postnatal care in Chandigarh, Mohali, and Panchkula."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What is included in your mother and baby care service?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Our services include baby massage, bathing, swaddling, diapering, and post-delivery care for mothers."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book a female caretaker for my newborn?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide experienced female caregivers and Japa maids with background checks and references."
                            }
                        }
                    ]
                })}
            </Script>
            <div className="mx-auto md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753210013/220-SM681360_vp9gp2.jpg"
                        alt="Mother and baby care attendant in Chandigarh"
                        width={500}
                        height={500}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="text-xl font-semibold mb-4">Book Mother & Baby Care Service</p>
                        <BookService servicename="Mother and Baby Care" />
                    </div>
                </div>

                {/* Description */}
                <div className="max-w-6xl mx-auto md:p-6 p-3 my-10 bg-white">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-lg mb-8">
                        <h1 className="md:text-4xl text-2xl font-bold mb-4 flex items-center">
                            <MdPregnantWoman className="mr-3 hidden md:block" />
                            Mother and Baby Care at Home: Complete Postnatal Support
                        </h1>
                        <p className="text-xl opacity-90">
                            Professional Postnatal Care Services at Home for New Mothers and Infants
                        </p>
                    </div>

                    {/* Introduction */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaHeart className="text-3xl text-pink-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Introduction</h2>
                        </div>
                        <div className="bg-pink-50 md:p-6 p-3 rounded-lg">
                            <p className="text-lg leading-relaxed mb-4">
                                The postpartum period is one of the most crucial phases in a woman&apos;s life, requiring specialized attention
                                and care for both mother and newborn. <strong className="text-pink-600">Home care for new mothers and infants</strong>
                                has emerged as an ideal solution that provides comfort, safety, and professional support in familiar surroundings.
                            </p>
                            <p className="text-lg leading-relaxed mb-4">
                                <strong className="text-pink-600">Newborn baby care at home</strong> offers numerous benefits, especially for
                                nuclear families or working couples who may lack extended family support. This comprehensive approach ensures
                                that both mother and baby receive the attention they deserve during this delicate transition period.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Home-based care eliminates the stress of frequent hospital visits while providing personalized, round-the-clock
                                support. <strong className="text-pink-600">Professional mother and baby care at home</strong> services have
                                become increasingly popular as they combine medical expertise with the comfort of home environment.
                            </p>
                        </div>
                    </section>

                    {/* Objectives */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaClipboardList className="text-3xl text-purple-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Objectives of Home-Based Mother & Baby Care</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                            <div className="bg-purple-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                    <FaFemale className="text-purple-600 mr-2" />
                                    Maternal Recovery Goals
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Ensure complete physical and emotional recovery</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Provide <strong className="text-purple-600">mother care after delivery at home</strong></li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Support healthy lactation and breastfeeding</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Monitor for postpartum complications</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                    <MdChildFriendly className="text-blue-600 mr-2" />
                                    Newborn Care Objectives
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Support healthy development of newborns</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Maintain proper hygiene and safety standards</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Reduce hospital readmissions and stress</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Establish healthy feeding and sleep routines</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Types of Services */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <MdHealthAndSafety className="text-3xl text-green-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Types of Services Offered</h2>
                        </div>

                        {/* Postnatal Care for Mothers */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4 flex items-center text-pink-600">
                                <FaFemale className="mr-2" />
                                A. Postnatal Care for Mothers
                            </h3>
                            <div className="grid lg:grid-cols-2 gamd:p-6 p-3">
                                <div className="bg-pink-50 md:p-6 p-3 rounded-lg">
                                    <h4 className="text-lg font-semibold mb-3">Recovery & Wellness</h4>
                                    <ul className="space-y-2">
                                        <li><strong className="text-pink-600">Post-delivery care at home</strong> - Comprehensive wound care</li>
                                        <li><strong className="text-pink-600">C-section recovery support at home</strong> - Specialized post-surgical care</li>
                                        <li><strong className="text-pink-600">Postnatal massage at home</strong> - Therapeutic body massage</li>
                                        <li>Gentle exercises and physiotherapy support</li>
                                        <li><strong className="text-pink-600">Home-based mother recovery care</strong> programs</li>
                                    </ul>
                                </div>
                                <div className="bg-pink-50 md:p-6 p-3 rounded-lg">
                                    <h4 className="text-lg font-semibold mb-3">Feeding & Nutrition Support</h4>
                                    <ul className="space-y-2">
                                        <li><strong className="text-pink-600">Breastfeeding support at home for new mothers</strong></li>
                                        <li><strong className="text-pink-600">Lactation consultant at home</strong> services</li>
                                        <li>Personalized nutrition planning and meal preparation</li>
                                        <li><strong className="text-pink-600">Postpartum depression support at home</strong></li>
                                        <li><strong className="text-pink-600">Support for new moms at home</strong> - Emotional wellness</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Newborn Baby Care */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4 flex items-center text-blue-600">
                                <FaBaby className="mr-2" />
                                B. Newborn Baby Care Services
                            </h3>
                            <div className="grid lg:grid-cols-3 gamd:p-6 p-3">
                                <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
                                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                                        <FaSprayCan className="text-blue-600 mr-2" />
                                        Hygiene & Safety
                                    </h4>
                                    <ul className="space-y-2">
                                        <li><strong className="text-blue-600">Baby bathing and massage at home</strong></li>
                                        <li><strong className="text-blue-600">Baby hygiene care at home</strong> - Complete cleanliness</li>
                                        <li><strong className="text-blue-600">Sterile baby care at home</strong> protocols</li>
                                        <li>Professional diapering and cord care</li>
                                        <li>Specialized newborn skin care routines</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
                                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                                        <GiBabyBottle className="text-blue-600 mr-2" />
                                        Feeding & Development
                                    </h4>
                                    <ul className="space-y-2">
                                        <li><strong className="text-blue-600">Home help for baby care and feeding</strong></li>
                                        <li>Feeding schedule establishment and burping support</li>
                                        <li>Early developmental stimulation activities</li>
                                        <li>Growth monitoring and milestone tracking</li>
                                        <li>Sleep pattern establishment and monitoring</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
                                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                                        <FaStethoscope className="text-blue-600 mr-2" />
                                        Medical Support
                                    </h4>
                                    <ul className="space-y-2">
                                        <li><strong className="text-blue-600">Baby vaccination reminder service</strong></li>
                                        <li>Health monitoring and temperature checks</li>
                                        <li>Emergency response and first aid</li>
                                        <li>Medical consultation coordination</li>
                                        <li>Prescription medication management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Professional Support */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4 flex items-center text-purple-600">
                                <FaUserMd className="mr-2" />
                                C. Professional Support Team
                            </h3>
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div className="bg-purple-50 md:p-6 p-3 rounded-lg">
                                    <h4 className="text-lg font-semibold mb-3">Caregiving Staff</h4>
                                    <ul className="space-y-2">
                                        <li><strong className="text-purple-600">Japa maid services at home</strong> - Traditional care experts</li>
                                        <li><strong className="text-purple-600">Experienced japa maids for newborn care</strong></li>
                                        <li><strong className="text-purple-600">Baby care taker at home</strong> - Dedicated attendants</li>
                                        <li><strong className="text-purple-600">Caring nanny for newborn at home</strong></li>
                                        <li><strong className="text-purple-600">Trained caregiver for baby and mother at home</strong></li>
                                    </ul>
                                </div>
                                <div className="bg-purple-50 md:p-6 p-3 rounded-lg">
                                    <h4 className="text-lg font-semibold mb-3">Medical Professionals</h4>
                                    <ul className="space-y-2">
                                        <li><strong className="text-purple-600">Home nursing care for mother and baby</strong></li>
                                        <li><strong className="text-purple-600">Home visit nurse for postpartum care</strong></li>
                                        <li><strong className="text-purple-600">Home nurse for baby and mother care</strong></li>
                                        <li><strong className="text-purple-600">Gynecologist home visit service</strong></li>
                                        <li><strong className="text-purple-600">24/7 mother and newborn care at home</strong> helpline</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Staffing and Training */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaUsers className="text-3xl text-indigo-600 mr-3" />
                            <h2 className="text-3xl font-semibent text-gray-800">Staffing and Training Excellence</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gamd:p-6 p-3">
                            <div className="bg-indigo-50 md:p-6 p-3 rounded-lg text-center">
                                <FaCertificate className="md:text-4xl text-2xl text-indigo-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Verified Caregivers</h3>
                                <p>All staff undergo thorough background checks and verification</p>
                            </div>
                            <div className="bg-indigo-50 md:p-6 p-3 rounded-lg text-center">
                                <FaAward className="md:text-4xl text-2xl text-indigo-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Specialized Training</h3>
                                <p>Comprehensive training in mother-baby care and safety protocols</p>
                            </div>
                            <div className="bg-indigo-50 md:p-6 p-3 rounded-lg text-center">
                                <MdHealthAndSafety className="md:text-4xl text-2xl text-indigo-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Medical Screening</h3>
                                <p>Regular health checkups and medical clearance for all staff</p>
                            </div>
                            <div className="bg-indigo-50 md:p-6 p-3 rounded-lg text-center">
                                <BiSupport className="md:text-4xl text-2xl text-indigo-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Communication Skills</h3>
                                <p>Language proficiency and excellent interpersonal skills</p>
                            </div>
                        </div>
                    </section>

                    {/* Customized Care Plans */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaCalendarAlt className="text-3xl text-teal-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Customized Care Plans</h2>
                        </div>

                        <div className="bg-teal-50 md:p-6 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Service Packages</h3>
                                    <ul className="space-y-2">
                                        <li><strong className="text-teal-600">Newborn care packages at home</strong> - Comprehensive bundles</li>
                                        <li><strong className="text-teal-600">Daily and monthly baby care plans</strong></li>
                                        <li><strong className="text-teal-600">Affordable postnatal care services at home</strong></li>
                                        <li>Live-in or part-time support options</li>
                                        <li>Flexible day and night shift arrangements</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibent mb-4">Personalization</h3>
                                    <ul className="space-y-2">
                                        <li>Tailored plans based on delivery method</li>
                                        <li>Family preferences and cultural considerations</li>
                                        <li><strong className="text-teal-600">First-time mother support services</strong></li>
                                        <li>Special needs accommodation</li>
                                        <li>Emergency care provisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Hygiene and Safety */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaShieldAlt className="text-3xl text-green-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Hygiene and Safety Protocols</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                            <div className="bg-green-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <FaSprayCan className="text-green-600 mr-2" />
                                    Equipment Safety
                                </h3>
                                <ul className="space-y-2">
                                    <li><strong className="text-green-600">Mother care with hygiene protocols</strong></li>
                                    <li>Use of sterilized equipment</li>
                                    <li>Baby-safe product selection</li>
                                    <li>Regular sanitization procedures</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <MdHealthAndSafety className="text-green-600 mr-2" />
                                    Health Protocols
                                </h3>
                                <ul className="space-y-2">
                                    <li>COVID-safe measures</li>
                                    <li>Infection control protocols</li>
                                    <li>Temperature screening</li>
                                    <li>Personal protective equipment usage</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <FaHeartbeat className="text-green-600 mr-2" />
                                    Emergency Preparedness
                                </h3>
                                <ul className="space-y-2">
                                    <li>24/7 emergency response protocols</li>
                                    <li>Direct hospital coordination</li>
                                    <li>First aid trained staff</li>
                                    <li>Escalation procedures</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Emotional & Family Support */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <RiMentalHealthLine className="text-3xl text-pink-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Emotional & Family Support</h2>
                        </div>

                        <div className="bg-pink-50 md:p-6 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Maternal Wellness</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center">
                                            <FaHeart className="text-pink-600 mr-3" />
                                            Counseling for new mothers and couples
                                        </li>
                                        <li className="flex items-center">
                                            <RiMentalHealthLine className="text-pink-600 mr-3" />
                                            Baby blues and postpartum stress management
                                        </li>
                                        <li className="flex items-center">
                                            <FaHandHoldingHeart className="text-pink-600 mr-3" />
                                            Emotional recovery support programs
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Family Integration</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center">
                                            <FaUserFriends className="text-pink-600 mr-3" />
                                            Bonding support for fathers and siblings
                                        </li>
                                        <li className="flex items-center">
                                            <BiSupport className="text-pink-600 mr-3" />
                                            Family adaptation guidance
                                        </li>
                                        <li className="flex items-center">
                                            <FaUsers className="text-pink-600 mr-3" />
                                            Extended family involvement coordination
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technology Integration */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaMobile className="text-3xl text-blue-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Technology Integration</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                            <div className="bg-blue-50 md:p-6 p-3 rounded-lg text-center">
                                <FaMobile className="md:text-4xl text-2xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Smart Tracking</h3>
                                <p>App-based monitoring for feeding, sleep, and diaper changes</p>
                            </div>
                            <div className="bg-blue-50 md:p-6 p-3 rounded-lg text-center">
                                <FaStethoscope className="md:text-4xl text-2xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Virtual Consultations</h3>
                                <p>Video call consultations with pediatricians and specialists</p>
                            </div>
                            <div className="bg-blue-50 md:p-6 p-3 rounded-lg text-center">
                                <BiSupport className="md:text-4xl text-2xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Family Updates</h3>
                                <p>Real-time updates and reports for family members</p>
                            </div>
                        </div>
                    </section>

                    {/* Service Areas */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaHome className="text-3xl text-orange-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Service Areas & Coverage</h2>
                        </div>

                        <div className="bg-orange-50 md:p-6 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Primary Service Areas</h3>
                                    <ul className="space-y-2">
                                        <li><strong className="text-orange-600">Mother and baby care at home in [Your City]</strong></li>
                                        <li><strong className="text-orange-600">Best postnatal care at home in [City]</strong></li>
                                        <li><strong className="text-orange-600">Baby care services at home [Your Area Name]</strong></li>
                                        <li>Comprehensive city-wide coverage</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Extended Coverage</h3>
                                    <ul className="space-y-2">
                                        <li><strong className="text-orange-600">Japa maid services near me</strong></li>
                                        <li><strong className="text-orange-600">Home nursing services for baby and mother in [Location]</strong></li>
                                        <li>Nearby suburban areas</li>
                                        <li>Special location requests accommodated</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaStar className="text-3xl text-yellow-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Client Testimonials & Success Stories</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                            <div className="bg-yellow-50 md:p-6 p-3 rounded-lg">
                                <div className="flex mb-4">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <FaStar key={star} className="text-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-lg mb-4 italic">
                                    &quot;The professional care I received was exceptional. The japa maid was experienced and gentle with both
                                    me and my newborn. I couldn&apos;t have asked for better support during my recovery period.&quot;
                                </p>
                                <p className="font-semibold">- Priya M., New Mother</p>
                            </div>
                            <div className="bg-yellow-50 md:p-6 p-3 rounded-lg">
                                <div className="flex mb-4">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <FaStar key={star} className="text-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-lg mb-4 italic">
                                    &quot;As a first-time mother, I was overwhelmed, but the trained caregiver made everything manageable.
                                    The breastfeeding support and baby care guidance were invaluable.&quot;
                                </p>
                                <p className="font-semibold">- Anjali K., First-time Mom</p>
                            </div>
                        </div>
                    </section>

                    {/* Pricing and Packages */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaClipboardList className="text-3xl text-green-600 mr-3" />
                            <h2 className="text-3xl font-semibold text-gray-800">Pricing and Packages</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                            <div className="bg-green-50 md:p-6 p-3 rounded-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">Flexible Plans</h3>
                                <ul className="space-y-2 text-left">
                                    <li>Hourly service rates</li>
                                    <li>Daily care packages</li>
                                    <li>Monthly comprehensive plans</li>
                                    <li>Custom duration options</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 md:p-6 p-3 rounded-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">Combo Services</h3>
                                <ul className="space-y-2 text-left">
                                    <li>Mother + baby care bundles</li>
                                    <li>Family support packages</li>
                                    <li>Emergency response add-ons</li>
                                    <li>Medical consultation inclusions</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 md:p-6 p-3 rounded-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">Add-on Services</h3>
                                <ul className="space-y-2 text-left">
                                    <li>Therapeutic massage services</li>
                                    <li>Nutritionist consultations</li>
                                    <li>Lactation specialist visits</li>
                                    <li>Pediatrician home visits</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className=" py-8 px-4 rounded-lg  mt-10">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Mother baby care at Home in Other Cities</h2>
                            <ul className="list-disc list-inside text-blue-700 space-y-2">
                                <li><Link href="/mother-baby-care-at-home/chandigarh" className="hover:underline">Mother baby care at Home in Chandigarh</Link></li>
                                <li><Link href="/mother-baby-care-at-home/mohali" className="hover:underline">Mother baby care at Home in Mohali</Link></li>
                                <li><Link href="/mother-baby-care-at-home/panchkula" className="hover:underline">Mother baby care at Home in Panchkula</Link></li>
                            </ul>
                        </div>
                    </section>
                    {/* Contact & Booking */}
                    <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-lg text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Book Your Mother & Baby Care Service Today
                        </h2>
                        <p className="text-xl mb-6">
                            Experience the comfort and expertise of professional home care with our
                            <strong> book newborn care service at home</strong> options!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                            <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition-colors">
                                <FaWhatsapp className="mr-2" />
                                <Link
                                    href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                    WhatsApp Booking
                                </Link>
                            </button>
                            <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition-colors">
                                <FaMobile className="mr-2" />
                                Online Booking
                            </button>
                            <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition-colors">
                                <FaPhone className="mr-2" />
                                <Link
                                    href="tel:+918307190216"
                                >

                                    Call Now
                                </Link>
                            </button>
                        </div>
                        <div className="text-lg">
                            <p><strong>Special Offer:</strong> Free consultation for first-time mothers!</p>
                            <p className="mt-2">24/7 Emergency Response Available</p>
                        </div>
                    </section>

                    {/* Additional Services */}
                    <section className="mt-12 mb-8">
                        <div className="bg-gray-50 md:p-6 p-3 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-center">Additional Services Available</h3>
                            <div className="flex flex-wrap justify-center gap-4 text-sm">
                                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">Hire japa maid online</span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Book newborn care service at home</span>
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">24/7 mother and newborn care</span>
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Professional postnatal support</span>
                                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">Experienced caregivers</span>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="mt-12 text-center text-gray-600">
                        <p className="text-lg">
                            Choose our comprehensive <strong>mother and baby care at home</strong> services for the best start to your family&apos;s journey.
                            Professional, caring, and reliable support when you need it most.
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
