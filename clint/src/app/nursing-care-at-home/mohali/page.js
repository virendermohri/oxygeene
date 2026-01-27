// app/nursing-care-at-home/mohali/page.tsx

import Image from 'next/image';
import Script from 'next/script';
import BookService from '@/components/bookservice';
import {
    FaHome,
    FaUserNurse,
    FaHeartbeat,
    FaStethoscope,
    FaAmbulance,
    FaPhone,
    FaClock,
    FaShieldAlt,
    FaUserMd,
    FaHospital,
    FaBed,
    FaPills,
    FaHandsHelping,
    FaStar,
    FaCheckCircle,
    FaUsers,
    FaMapMarkerAlt,
    FaLaptopMedical,
    FaWheelchair,
    FaEye,
    FaPhoneAlt,
    FaCalendarAlt,
    FaClipboardCheck
} from 'react-icons/fa';

import {
    MdHealthAndSafety,
    MdMonitorHeart,
    MdLocalHospital,
    MdSecurity
} from 'react-icons/md';

import { RiNurseFill } from 'react-icons/ri';
export const metadata = {
    title: 'Nursing Care at Home in Mohali | CareKwik',
    description:
        'Book trained nurses at home in Mohali for post-surgery, injections, ICU, tracheostomy, and bedridden patient care. Trusted & verified.',
    keywords: [
        'nursing care at home Mohali',
        'home nurse in Mohali',
        'ICU nurse at home Mohali',
        'post-surgical care Mohali',
        'bedridden patient nurse Mohali',
        'injection at home Mohali',
        'tracheostomy care Mohali',
        'private nurse Mohali',
    ],
    alternates: {
        canonical: 'https://carekwik.com/nursing-care-at-home/mohali',
    },
};


export default function NursingCareMohali() {
    return (
        <>
            {/* JSON-LD LocalBusiness */}
            <Script id="ld-nursing-care-mohali" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Nursing Care at Home in Mohali",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753344614/220-SM987818_woof2x.jpg",
                    "url": "https://carekwik.com/nursing-care-at-home/mohali",
                    "telephone": "+91-8307190216",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Mohali",
                        "addressRegion": "Punjab",
                        "postalCode": "160062",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-20:00",
                    "priceRange": "₹₹",
                    "description": "Hire trained nurses for home care in Mohali. Services include post-surgery care, wound care, injections, and ICU-level monitoring.",
                    "areaServed": ["Mohali", "Chandigarh", "Panchkula"]
                })}
            </Script>

            {/* JSON-LD FAQPage */}
            <Script id="faq-nursing-care-mohali" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What nursing services are available in Mohali?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We offer injection administration, wound care, catheter care, ICU support, post-operative nursing, and more."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are the nurses trained and verified?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, all our nurses are certified professionals and have undergone background checks."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I choose between a male or female nurse?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we allow preferences for gender while booking your service."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How quickly can a nurse be arranged?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We can usually assign a nurse within a few hours depending on availability."
                            }
                        }
                    ]
                })}
            </Script>
            <div className="mx-auto md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
                    {/* Image & Booking */}

                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1760280974/1-SM224478_ihlgcn.jpg"
                        alt="Nursing Care at Home in Mohali"
                        width={600}
                        height={450}
                        className="rounded-2xl   mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md: ">
                        <h2 className="text-xl font-semibold mb-4">Book Nursing Care Service</h2>
                        <BookService servicename="Nursing Care" />
                    </div>
                </div>
                <div className="max-w-6xl mx-auto md:p-6 p-2 ">
                    {/* Header */}
                    <header className="text-center mb-12 bg-white rounded-2xl  md:p-8 p-3">
                        <div className="flex justify-center mb-4">
                            <div className="hidden md:block bg-green-600 p-4 rounded-full">
                                <FaUserNurse className=" text-4xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                            Nursing Care at Home Mohali
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive home nursing services Mohali providing professional medical care in the comfort of your home
                        </p>
                    </header>

                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaHome className="text-3xl text-green-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
                        </div>
                        <div className="prose max-w-none text-gray-700 leading-relaxed">
                            <p className="text-lg mb-4">
                                The healthcare landscape in Mohali has witnessed a significant transformation with the growing need for professional home nursing services. Families increasingly recognize the immense value of receiving quality medical attention within their familiar surroundings, making in-home nurse Mohali services a preferred choice for many residents.
                            </p>
                            <p className="text-lg mb-4">
                                The benefits of receiving nursing care at home versus hospital stays are numerous and compelling. Patients experience reduced stress levels, faster recovery times, and the comfort of being surrounded by loved ones during their healing journey. Home healthcare services Mohali provide personalized attention that hospitals often cannot match due to their busy environments and multiple patient responsibilities.
                            </p>
                            <p className="text-lg">
                                The focus on patient comfort, recovery, and dignity remains at the heart of Mohali nursing care at home services. This approach ensures that individuals receive medical attention while maintaining their personal routines, sleeping in their own beds, and enjoying home-cooked meals, all of which contribute significantly to the healing process.
                            </p>
                        </div>
                    </section>

                    {/* Objectives */}
                    <section className="mb-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <MdHealthAndSafety className="text-3xl text-blue-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Objectives of Nursing Care at Home</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-8 p-3">
                            <div className="space-y-6">
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaStethoscope className="text-2xl text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Skilled Medical Support</h3>
                                    <p>Private nurse at home Mohali services provide professional medical support in familiar home settings, ensuring patients receive hospital-quality care without leaving their comfort zones.</p>
                                </div>
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaHeartbeat className="text-2xl text-red-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Speed Recovery Process</h3>
                                    <p>Best home nursing services in Mohali focus on accelerating recovery and reducing hospital readmissions through personalized care plans and continuous monitoring.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaHandsHelping className="text-2xl text-purple-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Personalized Care</h3>
                                    <p>Trained nurses for home care in Mohali offer cost-effective, individualized treatment approaches tailored to each patient&apos;s specific medical needs and family circumstances.</p>
                                </div>
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaUsers className="text-2xl text-orange-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Family Support</h3>
                                    <p>Professional nurse at home Mohali services support families in effectively managing patient health while providing education and emotional assistance throughout the care journey.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Types of Nursing Services */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-8">
                            <RiNurseFill className="text-3xl text-purple-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Types of Nursing Care Services Offered</h2>
                        </div>

                        {/* Clinical & Medical Care */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <MdLocalHospital className="text-blue-600 mr-3" />
                                Clinical & Medical Care
                            </h3>
                            <div className="grid md:grid-cols-2 gamd:p-6 p-2">
                                <div className="bg-blue-50 md:p-6 p-2 rounded-lg">
                                    <h4 className="font-semibold mb-4 text-lg">Post-Hospitalization Services</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Post-hospitalization nursing care Mohali with comprehensive recovery support</li>
                                        <li>• Wound dressing services at home Mohali using sterile techniques</li>
                                        <li>• Home nurse for injection and IV in Mohali with proper medical protocols</li>
                                        <li>• Medication management and administration</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 md:p-6 p-2 rounded-lg">
                                    <h4 className="font-semibold mb-4 text-lg">Monitoring & Care</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Vital signs monitoring including BP, sugar levels, and oxygen saturation</li>
                                        <li>• Catheter, Ryle&apos;s tube, and tracheostomy care</li>
                                        <li>• Critical care nursing at home Mohali for high-acuity patients</li>
                                        <li>• 24/7 nursing care at home Mohali for continuous supervision</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Specialized Nursing */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <FaUserMd className="text-green-600 mr-3" />
                                Specialized Nursing Services
                            </h3>
                            <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                                <div className="bg-green-50 md:p-6 p-2 rounded-lg">
                                    <FaUsers className="text-2xl text-orange-600 mb-3" />
                                    <h4 className="font-semibold mb-3">Elderly Care</h4>
                                    <p>Nursing care for elderly Mohali includes comprehensive support for age-related health challenges and daily living assistance.</p>
                                    <p className="mt-2 text-sm">Elderly nursing care at home Mohali focuses on maintaining dignity and independence.</p>
                                </div>
                                <div className="bg-green-50 md:p-6 p-2 rounded-lg">
                                    <FaHeartbeat className="text-2xl text-red-600 mb-3" />
                                    <h4 className="font-semibold mb-3">Specialized Conditions</h4>
                                    <p>Alzheimer&apos;s and dementia nursing Mohali with trained professionals experienced in cognitive care.</p>
                                    <p className="mt-2 text-sm">Palliative care nursing at home Mohali for comfort-focused treatment.</p>
                                </div>
                                <div className="bg-green-50 md:p-6 p-2 rounded-lg">
                                    <FaWheelchair className="text-2xl text-blue-600 mb-3" />
                                    <h4 className="font-semibold mb-3">Recovery Support</h4>
                                    <p>Stroke patient nursing at home Mohali with specialized rehabilitation protocols.</p>
                                    <p className="mt-2 text-sm">Physiotherapy and nursing care at home Mohali for comprehensive recovery.</p>
                                </div>
                            </div>
                        </div>

                        {/* Rehabilitation Support */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <FaWheelchair className="text-purple-600 mr-3" />
                                Rehabilitation Support
                            </h3>
                            <div className="bg-purple-50 md:p-6 p-2 rounded-lg">
                                <div className="grid md:grid-cols-2 gamd:p-6 p-2">
                                    <div>
                                        <h4 className="font-semibold mb-3">Post-Surgery & Recovery</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Post-surgery nursing care at home Mohali with specialized protocols</li>
                                            <li>• Orthopedic and neurological rehabilitation support</li>
                                            <li>• Pain management and mobility assistance</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Specialized Patient Care</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Cancer patient nursing care Mohali with compassionate support</li>
                                            <li>• Cardiac patient rehabilitation and monitoring</li>
                                            <li>• Comprehensive recovery planning and execution</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Staffing & Training */}
                    <section className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <MdSecurity className="text-3xl text-orange-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Professional Staffing & Training</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-8 p-3">
                            <div className="space-y-4">
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaCheckCircle className="text-2xl text-green-600 mb-3" />
                                    <h3 className="text-lg font-semibold mb-2">Qualified Professionals</h3>
                                    <p>All staff includes qualified and registered nurses along with certified attendants and caregivers, ensuring high-quality medical care delivery.</p>
                                </div>
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaShieldAlt className="text-2xl text-blue-600 mb-3" />
                                    <h3 className="text-lg font-semibold mb-2">Safety & Security</h3>
                                    <p>Police-verified and background-checked staff provide families peace of mind while receiving nursing attendants at home in Mohali.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaUserMd className="text-2xl text-purple-600 mb-3" />
                                    <h3 className="text-lg font-semibold mb-2">Ongoing Training</h3>
                                    <p>Regular training in infection control and patient handling ensures our team stays updated with the latest medical protocols and safety standards.</p>
                                </div>
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaHandsHelping className="text-2xl text-red-600 mb-3" />
                                    <h3 className="text-lg font-semibold mb-2">Compassionate Care</h3>
                                    <p>Best nursing agency in Mohali for home care focuses on empathy training to ensure patients receive not just medical care but emotional support.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technology Integration */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaLaptopMedical className="text-3xl text-indigo-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Advanced Technology Integration</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-indigo-50 rounded-lg md:p-6 p-2 text-center">
                                <MdMonitorHeart className="text-3xl text-red-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Remote Monitoring</h3>
                                <p>State-of-the-art apps and devices for continuous patient monitoring and real-time health tracking.</p>
                            </div>
                            <div className="bg-indigo-50 rounded-lg md:p-6 p-2 text-center">
                                <FaLaptopMedical className="text-3xl text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Tele-consultation</h3>
                                <p>Direct tele-consultation with doctors for immediate medical guidance and treatment adjustments.</p>
                            </div>
                            <div className="bg-indigo-50 rounded-lg md:p-6 p-2 text-center">
                                <FaClipboardCheck className="text-3xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Digital Records</h3>
                                <p>Comprehensive digital health records and reports for seamless care coordination and progress tracking.</p>
                            </div>
                        </div>
                    </section>

                    {/* Customized Care Plans */}
                    <section className="mb-12 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaClipboardCheck className="text-3xl text-teal-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Customized Nursing Care Plans</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-8 p-3">
                            <div className="space-y-4">
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3">Initial Assessment</h3>
                                    <p>Comprehensive initial assessment by qualified doctor and nurse to understand specific patient needs and develop appropriate care strategies.</p>
                                </div>
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3">Flexible Packages</h3>
                                    <p>Daily and monthly nursing packages Mohali offer both short-term and long-term care options tailored to individual medical requirements.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3">Family Involvement</h3>
                                    <p>Active family involvement in planning ensures care plans align with household routines and patient preferences for optimal outcomes.</p>
                                </div>
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3">Progress Updates</h3>
                                    <p>Regular progress updates and care plan adjustments ensure continuous improvement and adaptation to changing patient needs.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Emergency & Support Services */}
                    <section className="mb-12 bg-red-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaAmbulance className="text-3xl text-red-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Emergency & Support Services</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaClock className="text-3xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">24/7 Availability</h3>
                                <p>Emergency nursing care Mohali provides round-the-clock on-call nurse availability for urgent medical situations and emergencies.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaAmbulance className="text-3xl text-red-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Ambulance Coordination</h3>
                                <p>Quick ambulance coordination services ensure rapid transport during critical medical situations requiring hospital intervention.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaHospital className="text-3xl text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Healthcare Partnerships</h3>
                                <p>Strategic tie-ups with Mohali hospitals and diagnostic labs provide seamless medical care coordination and priority services.</p>
                            </div>
                        </div>
                    </section>

                    {/* Local Advantage */}
                    <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaMapMarkerAlt className="text-3xl text-yellow-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Local Advantage in Mohali</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-8 p-3">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Comprehensive Coverage</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-orange-600 mr-3" />
                                        <span>Nursing care services in Mohali Sector 70 and all major sectors</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-orange-600 mr-3" />
                                        <span>Home nursing care near me Mohali with quick response times</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-orange-600 mr-3" />
                                        <span>Nursing services Mohali Chandigarh Zirakpur Kharar coverage</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Regional Benefits</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <FaClock className="text-blue-600 mr-3" />
                                        <span>Quick response and efficient nurse deployment across the region</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaHandsHelping className="text-green-600 mr-3" />
                                        <span>Tricity nursing care at home (Mohali, Chandigarh, Panchkula) services</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaHospital className="text-purple-600 mr-3" />
                                        <span>Strong collaboration with local healthcare providers and facilities</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pricing & Packages */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaStar className="text-3xl text-gold-500 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Transparent Pricing & Packages</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Affordable home nursing services in Mohali offer flexible pricing options designed to meet diverse healthcare needs and budget requirements.
                        </p>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-blue-50 rounded-lg md:p-6 p-2 border-t-4 border-blue-500">
                                <FaClock className="text-2xl text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Hourly Options</h3>
                                <p>Flexible hourly nursing care for specific procedures, medication administration, or temporary medical assistance needs.</p>
                            </div>
                            <div className="bg-green-50 rounded-lg md:p-6 p-2 border-t-4 border-green-500">
                                <FaCalendarAlt className="text-2xl text-green-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Daily Packages</h3>
                                <p>Comprehensive daily care packages for patients requiring regular medical supervision and ongoing health monitoring.</p>
                            </div>
                            <div className="bg-purple-50 rounded-lg md:p-6 p-2 border-t-4 border-purple-500">
                                <FaBed className="text-2xl text-purple-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Monthly Plans</h3>
                                <p>Long-term monthly packages with transparent pricing models and potential insurance support for extended care needs.</p>
                            </div>
                        </div>
                    </section>

                    {/* How to Book Services */}
                    <section className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaPhoneAlt className="text-3xl text-indigo-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Easy Booking Process</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Hire nurse at home in Mohali through our simple and convenient booking process designed for your ease and comfort.
                        </p>
                        <div className="grid md:grid-cols-4 gap-4">
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                                <h3 className="font-semibold mb-2">Contact</h3>
                                <p className="text-sm">Call our helpline or book home nursing Mohali online</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                                <h3 className="font-semibold mb-2">Assessment</h3>
                                <p className="text-sm">Medical evaluation and care plan discussion</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                                <h3 className="font-semibold mb-2">Confirmation</h3>
                                <p className="text-sm">Service confirmation and nurse assignment</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
                                <h3 className="font-semibold mb-2">Care Begins</h3>
                                <p className="text-sm">Professional nursing care starts at your home</p>
                            </div>
                        </div>
                    </section>

                    {/* Future Plans */}
                    <section className="mb-12 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaEye className="text-3xl text-cyan-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Future Outlook & Expansion</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaMapMarkerAlt className="text-2xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Network Expansion</h3>
                                <p>Expanding nursing network in Mohali and Tricity region to provide wider coverage and improved accessibility.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaUserMd className="text-2xl text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Specialized Training</h3>
                                <p>Advanced specialized training programs for geriatric and critical care to enhance service quality and expertise.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaLaptopMedical className="text-2xl text-purple-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Mobile Technology</h3>
                                <p>Developing mobile app for easy booking and tracking nursing care services with real-time updates and communication.</p>
                            </div>
                        </div>
                    </section>

                    {/* Call-to-Action */}
                    <section className="mb-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg md:p-8 p-3 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Experience Professional Home Healthcare Services Mohali</h2>
                        <p className="text-xl mb-6">
                            Contact us today to discuss your nursing care needs and discover the difference compassionate, professional care makes
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">

                            <a
                                href="tel:+918307190216"
                                className="  "
                            >
                                <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">

                                    <FaPhone className="mr-2" />
                                    Call Now
                                </button>
                            </a>
                            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
                                Book Online
                            </button>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="text-center text-gray-600">
                        <p className="mb-2">
                            Professional nursing care services across Mohali, Chandigarh, Zirakpur, and Kharar
                        </p>
                        <p className="text-sm">
                            Your trusted partner for quality healthcare at home - Available 24/7
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
