import Image from 'next/image';
import BookService from '@/components/bookservice';
import Script from 'next/script';
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
    FaEye
} from 'react-icons/fa';
import { MdHealthAndSafety, MdMonitorHeart, MdLocalHospital } from 'react-icons/md';
import Link from 'next/link';

export const metadata = {
    title: 'Trained Nursing Care at Home in Chandigarh | ICU & Post-Op Nurses',
    description:
        'Hire professional home nurses in Chandigarh for injections, wound dressing, ICU care, and post-surgery recovery. Trusted by 500+ families. Book now with CareKwik.',
    keywords: [
        'nursing care at home Chandigarh',
        'home nurse in Chandigarh',
        'ICU nursing at home Chandigarh',
        'injection at home Chandigarh',
        'post-surgical care Chandigarh',
        'bedridden patient nurse Chandigarh',
        'tracheostomy care at home Chandigarh',
        'private nurse at home Chandigarh',
    ],
    alternates: {
        canonical: 'https://carekwik.com/nursing-care-at-home/chandigarh',
    },
};


export default function NursingCareChandigarh() {
    return (
        <>
            <Script id="ld-nursing-care-chd" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalOrganization",
                    "name": "CareKwik - Nursing Care at Home Chandigarh",
                    "url": "https://carekwik.com/nursing-care-at-home/chandigarh",
                    "logo": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-8307190216",
                        "contactType": "Customer Service"
                    },
                    "areaServed": ["Chandigarh", "Mohali", "Panchkula"],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chandigarh",
                        "addressRegion": "Chandigarh",
                        "postalCode": "160036",
                        "addressCountry": "IN"
                    },
                    "description":
                        "CareKwik provides professional nursing care at home in Chandigarh. Our trained nurses offer injections, wound care, ICU support, and post-surgical nursing services."
                })}

            </Script>
            <Script id="ld-faq-nursing-care" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What nursing services do you provide at home in Chandigarh?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We provide a range of nursing services including injections, wound care, ICU support, post-surgical care, and specialized care for bedridden patients."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are your nurses qualified and experienced?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, all our nurses are qualified, background-verified, and trained to provide safe and compassionate care at home."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How can I book nursing care at home in Chandigarh?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can book our nursing services by filling out the form on our website or calling our customer service number."
                            }
                        }
                    ]
                })}
            </Script>
            <div className="mx-auto md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753344614/220-SM987818_woof2x.jpg"
                        alt="Nursing Care at Home in Chandigarh"
                        width={600}
                        height={450}
                        className="rounded-2xl   mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md: ">
                        <h2 className="text-xl font-semibold mb-4">Book Nursing Care Service</h2>
                        <BookService servicename="Nursing Care" />
                    </div>
                </div>
                <div className="max-w-6xl mx-auto md:p-6 p-3 ">
                    {/* Header */}
                    <header className="text-center mb-12 bg-white rounded-2xl md:p-8 p-3">
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-600 p-4 rounded-full">
                                <FaUserNurse className="md:block hidden text-4xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                            Nursing Care at Home in Chandigarh
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Your trusted partner for professional home nursing services in Chandigarh, providing hospital-quality care in the comfort of your home
                        </p>
                    </header>

                    {/* Introduction */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaHome className="text-3xl text-blue-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
                        </div>
                        <div className="prose max-w-none text-gray-700 leading-relaxed">
                            <p className="text-lg mb-4">
                                The healthcare landscape in Chandigarh has witnessed a remarkable transformation with the growing demand for home nursing services Chandigarh. Families are increasingly recognizing the immense value of receiving quality medical care within the familiar environment of their homes, rather than lengthy hospital stays that can be both emotionally and financially draining.
                            </p>
                            <p className="text-lg mb-4">
                                At-home nurse Chandigarh services offer numerous advantages over traditional hospital-based care. Patients recover faster when surrounded by loved ones, experience reduced stress levels, and maintain their daily routines while receiving professional medical attention. This approach has proven particularly beneficial for elderly patients, those recovering from surgery, and individuals managing chronic conditions.
                            </p>
                            <p className="text-lg">
                                The importance of personalized healthcare cannot be overstated in today&apos;s fast-paced world. Chandigarh nursing care services focus on creating individualized treatment plans that address each patient&apos;s unique needs, medical history, and family circumstances, ensuring optimal recovery outcomes and improved quality of life.
                            </p>
                        </div>
                    </section>

                    {/* Objectives */}
                    <section className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <MdHealthAndSafety className="text-3xl text-green-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Objectives of Nursing Care at Home</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm">
                                <FaHospital className="text-2xl text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Hospital-Quality Care</h3>
                                <p>Professional nursing care at home Chandigarh delivers the same high standards of medical attention you&apos;d receive in a hospital, but in your comfortable home environment.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm">
                                <FaHeartbeat className="text-2xl text-red-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Comprehensive Support</h3>
                                <p>Our services support recovery processes, chronic disease management, and specialized elderly nursing care at home Chandigarh with dedicated attention.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm">
                                <FaShieldAlt className="text-2xl text-green-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Reduced Hospital Visits</h3>
                                <p>Home healthcare services Chandigarh significantly reduce the need for frequent hospital visits and readmissions, promoting better health outcomes.</p>
                            </div>
                        </div>
                    </section>

                    {/* Types of Nursing Services */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-8">
                            <FaStethoscope className="text-3xl text-purple-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Types of Nursing Services Offered</h2>
                        </div>

                        {/* General Nursing Care */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                                <FaUserNurse className="text-blue-600 mr-3" />
                                General Nursing Care
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <MdMonitorHeart className="text-xl text-blue-600 mb-2" />
                                    <p><strong>Vital Signs Monitoring:</strong> Regular tracking of blood pressure, temperature, pulse, and oxygen levels</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <FaPills className="text-xl text-green-600 mb-2" />
                                    <p><strong>Medication Administration:</strong> Proper dosage and timing of prescribed medications</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <FaHandsHelping className="text-xl text-purple-600 mb-2" />
                                    <p><strong>Wound Care:</strong> Wound dressing and injections at home Chandigarh with sterile techniques</p>
                                </div>
                            </div>
                        </div>

                        {/* Specialized Nursing Care */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                                <MdLocalHospital className="text-red-600 mr-3" />
                                Specialized Nursing Care
                            </h3>
                            <div className="bg-red-50 md:p-6 p-3 rounded-lg">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Advanced Medical Care</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Post-surgery nursing care at home Chandigarh</li>
                                            <li>• ICU care at home Chandigarh with equipment support</li>
                                            <li>• Ventilator care at home Chandigarh for respiratory patients</li>
                                            <li>• Tracheostomy care at home Chandigarh</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Post-Operative Care</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Surgical wound monitoring and care</li>
                                            <li>• Pain management protocols</li>
                                            <li>• Infection prevention measures</li>
                                            <li>• Recovery progress assessment</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Elderly Care */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                                <FaUsers className="text-orange-600 mr-3" />
                                Elderly Care Services
                            </h3>
                            <div className="bg-orange-50 md:p-6 p-3 rounded-lg">
                                <p className="mb-4 text-gray-700">
                                    Nursing care for senior citizens Chandigarh includes comprehensive support for age-related health challenges and daily living assistance.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Chronic Condition Management</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Chronic illness nursing care at home Chandigarh</li>
                                            <li>• Diabetes and hypertension monitoring</li>
                                            <li>• Dementia and Alzheimer&apos;s care at home Chandigarh</li>
                                            <li>• Long-term nursing care services Chandigarh</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Palliative & End-of-Life Care</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Palliative nursing care services Chandigarh</li>
                                            <li>• Comfort care and pain management</li>
                                            <li>• Emotional support for families</li>
                                            <li>• Daily activity assistance with medical supervision</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rehabilitation Nursing */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                                <FaWheelchair className="text-green-600 mr-3" />
                                Rehabilitation Nursing
                            </h3>
                            <div className="bg-green-50 md:p-6 p-3 rounded-lg">
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <FaHeartbeat className="text-2xl text-red-600 mx-auto mb-2" />
                                        <h4 className="font-semibold mb-2">Stroke Recovery</h4>
                                        <p className="text-gray-700">Stroke patient nursing care at home Chandigarh with specialized rehabilitation protocols</p>
                                    </div>
                                    <div className="text-center">
                                        <FaHandsHelping className="text-2xl text-blue-600 mx-auto mb-2" />
                                        <h4 className="font-semibold mb-2">Physiotherapy Coordination</h4>
                                        <p className="text-gray-700">Physiotherapy and nursing care Chandigarh working together for optimal recovery</p>
                                    </div>
                                    <div className="text-center">
                                        <FaWheelchair className="text-2xl text-green-600 mx-auto mb-2" />
                                        <h4 className="font-semibold mb-2">Mobility Assistance</h4>
                                        <p className="text-gray-700">Safe mobility support and exercise therapy at home</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Staffing & Training */}
                    <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaUserMd className="text-3xl text-purple-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Staffing & Training Excellence</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm text-center">
                                <FaCheckCircle className="text-3xl text-green-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Qualified Professionals</h3>
                                <p>Trained nurses for home care in Chandigarh include registered nurses (RNs) and certified nursing attendants with verified credentials.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm text-center">
                                <FaUsers className="text-3xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Ongoing Training</h3>
                                <p>Regular skill enhancement and empathy training ensure our staff delivers compassionate, professional care consistently.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm text-center">
                                <FaShieldAlt className="text-3xl text-orange-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Background Verification</h3>
                                <p>Comprehensive background checks and certifications guarantee trustworthy, reliable nursing care services.</p>
                            </div>
                        </div>
                    </section>

                    {/* Technology & Equipment */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaLaptopMedical className="text-3xl text-blue-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Advanced Technology & Equipment</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-8 p-3">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Medical Equipment</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <FaBed className="text-blue-600 mr-3" />
                                        <span>Hospital beds and mobility equipment</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MdMonitorHeart className="text-red-600 mr-3" />
                                        <span>Oxygen concentrators and vital sign monitors</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaStethoscope className="text-green-600 mr-3" />
                                        <span>Medical devices for home-based treatment</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Digital Healthcare</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <FaLaptopMedical className="text-purple-600 mr-3" />
                                        <span>Telemedicine consultations with doctors</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaEye className="text-blue-600 mr-3" />
                                        <span>Digital health reports and progress tracking</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaPhone className="text-green-600 mr-3" />
                                        <span>Remote monitoring and communication systems</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Customized Care Plans */}
                    <section className="mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaHeartbeat className="text-3xl text-indigo-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Customized Care Plans</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm">
                                <h3 className="text-lg font-semibold mb-3">Initial Assessment</h3>
                                <p>Comprehensive evaluation by qualified doctors and nurses to understand patient needs and medical requirements.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm">
                                <h3 className="text-lg font-semibold mb-3">Tailored Plans</h3>
                                <p>24/7 nursing care services in Chandigarh offers flexible options including short-term, long-term, or round-the-clock care.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm">
                                <h3 className="text-lg font-semibold mb-3">Regular Reviews</h3>
                                <p>Continuous monitoring and plan adjustments to ensure optimal care outcomes and patient satisfaction.</p>
                            </div>
                        </div>
                    </section>

                    {/* Emergency & Support Services */}
                    <section className="mb-12 bg-red-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaAmbulance className="text-3xl text-red-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Emergency & Support Services</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm">
                                <FaClock className="text-2xl text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">24x7 nurse at home Chandigarh</h3>
                                <p>Emergency nursing care at home Chandigarh provides round-the-clock helpline support and on-call medical professionals for urgent situations.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm">
                                <FaAmbulance className="text-2xl text-red-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Ambulance Support</h3>
                                <p>Quick ambulance services in Chandigarh Tricity with rapid response protocols for critical medical conditions and emergencies.</p>
                            </div>
                        </div>
                    </section>

                    {/* Collaboration with Healthcare Providers */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaHospital className="text-3xl text-green-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Healthcare Provider Collaboration</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            The best nursing care agency in Chandigarh maintains strong partnerships with local healthcare institutions to provide seamless medical care coordination.
                        </p>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                            <div className="text-center">
                                <FaHospital className="text-3xl text-blue-600 mx-auto mb-4" />
                                <h3 className="font-semibold">Hospital Partnerships</h3>
                                <p>Established tie-ups with Chandigarh hospitals for comprehensive medical support</p>
                            </div>
                            <div className="text-center">
                                <FaStethoscope className="text-3xl text-green-600 mx-auto mb-4" />
                                <h3 className="font-semibold">Diagnostic Services</h3>
                                <p>Priority lab tests and diagnostic services with home collection facilities</p>
                            </div>
                            <div className="text-center">
                                <FaPills className="text-3xl text-purple-600 mx-auto mb-4" />
                                <h3 className="font-semibold">Pharmacy Networks</h3>
                                <p>Medicine delivery at home through trusted pharmacy partnerships</p>
                            </div>
                        </div>
                    </section>

                    {/* Pricing & Packages */}
                    <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaStar className="text-3xl text-yellow-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Affordable Pricing & Packages</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Affordable nursing care at home Chandigarh offers flexible pricing options to suit different medical needs and budget requirements.
                        </p>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm border-t-4 border-blue-500">
                                <h3 className="text-xl font-semibold mb-3">Hourly Care</h3>
                                <p>Flexible hourly nursing care charges for specific medical procedures, medication administration, or short-term assistance.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm border-t-4 border-green-500">
                                <h3 className="text-xl font-semibold mb-3">Full-Time Care</h3>
                                <p>Comprehensive 12-hour or 24-hour nursing packages for patients requiring continuous medical supervision and care.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-3 shadow-sm border-t-4 border-purple-500">
                                <h3 className="text-xl font-semibold mb-3">Specialized Packages</h3>
                                <p>Post-operative nursing care Chandigarh and chronic illness management packages tailored to specific medical conditions.</p>
                            </div>
                        </div>
                    </section>

                    {/* Service Areas */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaMapMarkerAlt className="text-3xl text-red-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Service Coverage Areas</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-8 p-3">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Primary Service Areas</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-red-600 mr-3" />
                                        <span>Nursing care services Sector 17 Chandigarh</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-red-600 mr-3" />
                                        <span>Home nurse near me Chandigarh (all sectors)</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-red-600 mr-3" />
                                        <span>Private nursing care at home Chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Extended Coverage</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-blue-600 mr-3" />
                                        <span>Nursing care in Mohali Panchkula Zirakpur</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-blue-600 mr-3" />
                                        <span>Chandigarh Tricity nursing care services</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-blue-600 mr-3" />
                                        <span>Nursing care services near me in Chandigarh</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How to Book */}
                    <section className="mb-12 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaPhone className="text-3xl text-teal-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">How to Book Our Services</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Home nurse booking Chandigarh is simple and convenient. Here&apos;s how you can hire a nurse for home care Chandigarh:
                        </p>
                        <div className="grid md:grid-cols-4 gap-4">
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                                <h3 className="font-semibold mb-2">Contact Us</h3>
                                <p className="text-sm">Call our helpline or visit our website</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                                <h3 className="font-semibold mb-2">Assessment</h3>
                                <p className="text-sm">Medical evaluation and care plan discussion</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                                <h3 className="font-semibold mb-2">Booking</h3>
                                <p className="text-sm">Book nursing care at home Chandigarh</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
                                <h3 className="font-semibold mb-2">Care Begins</h3>
                                <p className="text-sm">Professional home nurse services Chandigarh start</p>
                            </div>
                        </div>
                    </section>

                    {/* Call-to-Action */}
                    <section className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg md:p-8 p-3 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Experience Trusted Nursing Care at Home Chandigarh?</h2>
                        <p className="text-xl mb-6">
                            Contact us today to book professional, compassionate nursing care services for your loved ones
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                 <Link
                                    href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                <FaPhone className="inline mr-2" />
                                Call Now

                                </Link>
                            </button>
                            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Book Online
                            </button>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="text-center text-gray-600">
                        <p className="mb-2">
                            Professional nursing care at home Chandigarh - Your health, our priority
                        </p>
                        <p className="text-sm">
                            Available 24/7 across Chandigarh, Mohali, Panchkula, and Zirakpur
                        </p>
                    </footer>
                </div>
            </div>
        </>

    );
}
