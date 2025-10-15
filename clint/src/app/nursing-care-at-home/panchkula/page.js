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
    FaEye,
    FaPhoneAlt,
    FaCalendarAlt,
    FaClipboardCheck,
    FaLungs,
    FaFemale,
    FaHeart,
    FaBookmark,
    FaUserShield
} from 'react-icons/fa';
import {
    MdHealthAndSafety,
    MdMonitorHeart,
    MdLocalHospital,
    MdSecurity,
    MdElderlyWoman,
    MdEmergencyShare
} from 'react-icons/md';
import { RiNurseFill, RiHeartPulseFill } from 'react-icons/ri';
import { GiMedicalDrip } from 'react-icons/gi';
export const metadata = {
    title: 'Nursing Care at Home in Panchkula | CareKwik',
    description:
        'Hire trained nurses at home in Panchkula for elderly care, wound care, ICU, injections, and post-operative support. Affordable & safe.',
    keywords: [
        'nursing care at home Panchkula',
        'home nurse Panchkula',
        'ICU nurse at home Panchkula',
        'wound dressing at home',
        'post-surgery care Panchkula',
        'injection service at home',
        'bedridden patient nurse Panchkula',
        'tracheostomy nursing Panchkula',
    ],
    alternates: {
        canonical: 'https://carekwik.com/nursing-care-at-home/panchkula',
    },
};

export default function NursingCarePanchkula() {
    return (
        <>
            <Script id="ld-nursing-care-pkl" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalOrganization",
                    "name": "CareKwik - Nursing Care at Home Panchkula",
                    "url": "https://carekwik.com/nursing-care-at-home/panchkula",
                    "logo": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-8307190216",
                        "contactType": "Customer Service"
                    },
                    "areaServed": ["Panchkula", "Chandigarh", "Mohali"],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Panchkula",
                        "addressRegion": "Haryana",
                        "postalCode": "134109",
                        "addressCountry": "IN"
                    },
                    "description":
                        "CareKwik provides professional nursing care at home in Panchkula. Our trained nurses offer injections, wound care, ICU support, and post-surgical nursing services.",
                })}
            </Script>
            <Script id="ld-faq-nursing-care-pkl" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What nursing services do you provide at home in Panchkula?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We provide a range of nursing services including injections, wound care, ICU-level care, post-operative support, and elderly care."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are your nurses qualified and experienced?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, all our nurses are certified, background-verified, and trained for home healthcare."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How quickly can I book a nurse for home care?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can book a nurse within a few hours of contacting us, based on your specific care needs."
                            }
                        }
                    ]
                })}
            </Script>
            {/* Image + Booking */}
            <div className="mx-auto md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1760280974/1-SM224478_ihlgcn.jpg"
                        alt="Nursing Care at Home in Panchkula"
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
                            <div className="bg-purple-600 p-4 rounded-full">
                                <FaUserNurse className="text-4xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                            Nursing Care at Home Panchkula
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional home nursing services in Panchkula providing compassionate, skilled medical care in the comfort of your home
                        </p>
                    </header>

                    {/* Introduction */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaHome className="text-3xl text-purple-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
                        </div>
                        <div className="prose max-w-none text-gray-700 leading-relaxed">
                            <p className="text-lg mb-4">
                                The importance of home nursing care for patients cannot be overstated in today&apos;s healthcare landscape. Families in Panchkula increasingly recognize the tremendous benefits of receiving professional medical attention within their familiar home environment, making in-home nurse Panchkula services an essential part of modern healthcare delivery.
                            </p>
                            <p className="text-lg mb-4">
                                The growing need in Panchkula due to urban lifestyle and an aging population has created unprecedented demand for trained nurses for home care Panchkula. The fast-paced urban environment, coupled with longer life expectancy and changing family structures, has made professional home nursing services more crucial than ever before.
                            </p>
                            <p className="text-lg">
                                The benefits of receiving care at home are numerous and compelling. Patients experience enhanced comfort in familiar surroundings, cost-effective treatment options compared to prolonged hospital stays, and personalized attention that addresses individual needs. Panchkula home nursing care provides these advantages while maintaining the highest standards of medical professionalism.
                            </p>
                        </div>
                    </section>

                    {/* Objectives */}
                    <section className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <MdHealthAndSafety className="text-3xl text-indigo-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Objectives of Nursing Care at Home</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaStethoscope className="text-3xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Professional Medical Support</h3>
                                <p>At-home medical care Panchkula ensures professional medical support in a comfortable home environment, maintaining hospital-quality standards of care.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaHospital className="text-3xl text-green-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Reduce Hospital Visits</h3>
                                <p>Nursing services near me Panchkula focus on reducing hospital visits and readmissions through comprehensive home-based medical care.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaHeart className="text-3xl text-red-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Compassionate Care</h3>
                                <p>Home nursing services in Panchkula provide compassionate care with dignity and safety, ensuring patients feel respected and comfortable.</p>
                            </div>
                        </div>
                    </section>

                    {/* Types of Nursing Services */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-8">
                            <RiNurseFill className="text-3xl text-purple-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Comprehensive Nursing Services Offered</h2>
                        </div>

                        {/* Post-Hospitalization Care */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <MdLocalHospital className="text-blue-600 mr-3" />
                                Post-Hospitalization Care
                            </h3>
                            <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                                <div className="bg-blue-50 md:p-6 p-2 rounded-lg">
                                    <FaUserNurse className="text-2xl text-blue-600 mb-3" />
                                    <h4 className="font-semibold mb-3">Recovery Support</h4>
                                    <p className="text-gray-700">Post-surgery nursing care at home Panchkula provides comprehensive recovery support after surgical procedures with trained medical professionals.</p>
                                </div>
                                <div className="bg-blue-50 md:p-6 p-2 rounded-lg">
                                    <FaHandsHelping className="text-2xl text-green-600 mb-3" />
                                    <h4 className="font-semibold mb-3">Wound Care</h4>
                                    <p className="text-gray-700">Wound dressing at home Panchkula services ensure proper healing with sterile techniques and professional medical protocols.</p>
                                </div>
                                <div className="bg-blue-50 md:p-6 p-2 rounded-lg">
                                    <FaPills className="text-2xl text-purple-600 mb-3" />
                                    <h4 className="font-semibold mb-3">Pain Management</h4>
                                    <p className="text-gray-700">Comprehensive pain management protocols with medication administration and comfort care measures.</p>
                                </div>
                            </div>
                        </div>

                        {/* Chronic Illness Management */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <RiHeartPulseFill className="text-red-600 mr-3" />
                                Chronic Illness Management
                            </h3>
                            <div className="bg-red-50 md:p-6 p-2 rounded-lg">
                                <div className="grid md:grid-cols-2 gamd:p-6 p-2">
                                    <div>
                                        <h4 className="font-semibold mb-3">Diabetes & Hypertension</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Regular blood sugar and blood pressure monitoring</li>
                                            <li>• Medication schedule management</li>
                                            <li>• Diet and lifestyle counseling support</li>
                                            <li>• Emergency intervention protocols</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Specialized Care</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Stroke and paralysis care with rehabilitation support</li>
                                            <li>• Respiratory support including oxygen therapy and nebulization</li>
                                            <li>• 24/7 nursing care at home in Panchkula for critical patients</li>
                                            <li>• Regular health assessment and progress monitoring</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Elderly Care */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <MdElderlyWoman className="text-orange-600 mr-3" />
                                Elderly Care (Geriatric Nursing)
                            </h3>
                            <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                                <div className="bg-orange-50 md:p-6 p-2 rounded-lg text-center">
                                    <FaWheelchair className="text-2xl text-orange-600 mx-auto mb-3" />
                                    <h4 className="font-semibold mb-3">Mobility Assistance</h4>
                                    <p>Home nursing for elderly in Panchkula includes comprehensive mobility assistance and physical therapy coordination.</p>
                                </div>
                                <div className="bg-orange-50 md:p-6 p-2 rounded-lg text-center">
                                    <FaPills className="text-2xl text-blue-600 mx-auto mb-3" />
                                    <h4 className="font-semibold mb-3">Medication Management</h4>
                                    <p>Careful medication administration and monitoring to prevent drug interactions and ensure proper dosage.</p>
                                </div>
                                <div className="bg-orange-50 md:p-6 p-2 rounded-lg text-center">
                                    <MdMonitorHeart className="text-2xl text-red-600 mx-auto mb-3" />
                                    <h4 className="font-semibold mb-3">Vital Signs Monitoring</h4>
                                    <p>Regular monitoring of vital signs including blood pressure, heart rate, temperature, and oxygen saturation.</p>
                                </div>
                            </div>
                        </div>

                        {/* Palliative & End-of-Life Care */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <FaHeart className="text-pink-600 mr-3" />
                                Palliative & End-of-Life Care
                            </h3>
                            <div className="bg-pink-50 md:p-6 p-2 rounded-lg">
                                <p className="text-lg text-gray-700 mb-4">
                                    Palliative care nursing services Panchkula provide compassionate support during challenging times with dignity and respect.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">Pain Relief</h4>
                                        <p className="text-sm text-gray-700">Comprehensive pain relief and comfort support measures</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">Emotional Care</h4>
                                        <p className="text-sm text-gray-700">Emotional and spiritual care for patients and families</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">Family Support</h4>
                                        <p className="text-sm text-gray-700">Family counseling and emotional support during difficult periods</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Specialized Nursing */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <GiMedicalDrip className="text-teal-600 mr-3" />
                                Specialized Nursing Services
                            </h3>
                            <div className="grid md:grid-cols-2 gamd:p-6 p-2">
                                <div className="bg-teal-50 md:p-6 p-2 rounded-lg">
                                    <h4 className="font-semibold mb-4">Critical Care Services</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• ICU-trained nurse at home Panchkula for intensive care needs</li>
                                        <li>• Catheterization nurse services Panchkula with sterile protocols</li>
                                        <li>• Tracheostomy care at home Panchkula with specialized training</li>
                                        <li>• Ventilator care nurse at home Panchkula for respiratory support</li>
                                    </ul>
                                </div>
                                <div className="bg-teal-50 md:p-6 p-2 rounded-lg">
                                    <h4 className="font-semibold mb-4">Medical Procedures</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Home nurse for injections Panchkula with proper techniques</li>
                                        <li>• IV fluids and injections at home with medical supervision</li>
                                        <li>• Physiotherapy and nursing care Panchkula coordination</li>
                                        <li>• Regular health monitoring and progress assessments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Caregiver Profiles */}
                    <section className="mb-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaUserShield className="text-3xl text-green-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Professional Caregiver Profiles</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-8 p-3">
                            <div className="space-y-6">
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaUserMd className="text-2xl text-blue-600 mb-3" />
                                    <h3 className="text-lg font-semibold mb-3">Registered Nurses</h3>
                                    <p>Qualified registered nurses with GNM/BSc Nursing degrees providing professional medical care and clinical expertise.</p>
                                </div>
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaUsers className="text-2xl text-green-600 mb-3" />
                                    <h3 className="text-lg font-semibold mb-3">Trained Attendants</h3>
                                    <p>Nursing attendant services Panchkula include certified caregivers with specialized training in patient care and safety protocols.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaWheelchair className="text-2xl text-purple-600 mb-3" />
                                    <h3 className="text-lg font-semibold mb-3">Certified Physiotherapists</h3>
                                    <p>On-demand certified physiotherapists available for rehabilitation and physical therapy requirements.</p>
                                </div>
                                <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                    <FaShieldAlt className="text-2xl text-red-600 mb-3" />
                                    <h3 className="text-lg font-semibold mb-3">Background-Verified Staff</h3>
                                    <p>All caregivers are background-verified and skilled staff ensuring family safety and peace of mind.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                            <FaFemale className="text-3xl text-pink-600 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-3">Female nurse for home care Panchkula</h3>
                            <p>Specialized female nursing staff available for patients who prefer gender-specific care, ensuring comfort and cultural sensitivity.</p>
                        </div>
                    </section>

                    {/* Technology & Monitoring */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaLaptopMedical className="text-3xl text-indigo-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Advanced Technology & Monitoring</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-indigo-50 rounded-lg md:p-6 p-2 text-center">
                                <FaLaptopMedical className="text-3xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Remote Health Monitoring</h3>
                                <p>State-of-the-art remote health monitoring apps for continuous patient observation and real-time health tracking.</p>
                            </div>
                            <div className="bg-indigo-50 rounded-lg md:p-6 p-2 text-center">
                                <FaUserMd className="text-3xl text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Nurse-Doctor Coordination</h3>
                                <p>Regular nurse-doctor coordination ensures seamless communication and optimal patient care management.</p>
                            </div>
                            <div className="bg-indigo-50 rounded-lg md:p-6 p-2 text-center">
                                <FaClipboardCheck className="text-3xl text-purple-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Digital Records</h3>
                                <p>Comprehensive digital records of patient vitals and reports for accurate health monitoring and progress tracking.</p>
                            </div>
                        </div>
                    </section>

                    {/* Customized Care Plans */}
                    <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaClipboardCheck className="text-3xl text-yellow-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Customized Care Plans</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                <FaStethoscope className="text-2xl text-blue-600 mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Initial Health Assessment</h3>
                                <p>Comprehensive initial health assessment by senior doctor/nurse to understand specific patient requirements and medical history.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                <FaHeartbeat className="text-2xl text-red-600 mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Tailored Care Plans</h3>
                                <p>Personalized care plans based on patient&apos;s condition, ensuring individualized treatment approaches and optimal health outcomes.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                <FaUsers className="text-2xl text-green-600 mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Family Involvement</h3>
                                <p>Periodic reviews and family feedback ensure care plans remain aligned with patient needs and family preferences.</p>
                            </div>
                        </div>
                    </section>

                    {/* Collaboration & Support */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaHospital className="text-3xl text-blue-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Healthcare Collaboration & Support</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-blue-50 rounded-lg md:p-6 p-2 text-center">
                                <FaHospital className="text-3xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Hospital Partnerships</h3>
                                <p>Strategic tie-ups with local Panchkula hospitals and diagnostic labs for seamless medical care coordination.</p>
                            </div>
                            <div className="bg-blue-50 rounded-lg md:p-6 p-2 text-center">
                                <FaAmbulance className="text-3xl text-red-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Emergency Services</h3>
                                <p>Emergency home nursing Panchkula includes 24/7 ambulance services for critical medical situations.</p>
                            </div>
                            <div className="bg-blue-50 rounded-lg md:p-6 p-2 text-center">
                                <FaPills className="text-3xl text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Home Delivery</h3>
                                <p>Pharmacy and diagnostic home delivery support ensuring convenient access to medications and test services.</p>
                            </div>
                        </div>
                    </section>

                    {/* Safety & Privacy */}
                    <section className="mb-12 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <MdSecurity className="text-3xl text-red-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Safety, Privacy & Legal Considerations</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaShieldAlt className="text-3xl text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Patient Confidentiality</h3>
                                <p>Strict patient confidentiality policies ensuring privacy and protection of medical information and personal data.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <MdHealthAndSafety className="text-3xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Hygiene Standards</h3>
                                <p>Rigorous infection control and hygiene standards following medical protocols and safety guidelines.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaUsers className="text-3xl text-purple-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Family Involvement</h3>
                                <p>Transparent consent and family involvement policies ensuring clear communication and shared decision-making.</p>
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
                            Affordable home nursing services Panchkula offers comprehensive pricing options designed to meet diverse healthcare needs and financial considerations.
                        </p>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2 mb-8">
                            <div className="bg-blue-50 rounded-lg md:p-6 p-2 border-t-4 border-blue-500">
                                <FaClock className="text-2xl text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Flexible Timing</h3>
                                <p>Hourly, daily, and monthly nursing plans available to suit different patient needs and care requirements.</p>
                            </div>
                            <div className="bg-green-50 rounded-lg md:p-6 p-2 border-t-4 border-green-500">
                                <FaHeartbeat className="text-2xl text-green-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Specialized Packages</h3>
                                <p>Dedicated packages for post-surgery, elderly care, and palliative care with specialized pricing structures.</p>
                            </div>
                            <div className="bg-purple-50 rounded-lg md:p-6 p-2 border-t-4 border-purple-500">
                                <FaCheckCircle className="text-2xl text-purple-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Transparent Costs</h3>
                                <p>Clear, transparent cost structure with no hidden charges and flexible payment options for families.</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-lg text-gray-700">
                                Best nursing care agency in Panchkula provides quality care at competitive prices with flexible payment terms.
                            </p>
                        </div>
                    </section>

                    {/* Service Areas */}
                    <section className="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaMapMarkerAlt className="text-3xl text-cyan-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Service Coverage Areas</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-8 p-3">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Primary Service Locations</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-cyan-600 mr-3" />
                                        <span>Nursing care services Sector 8 Panchkula</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-cyan-600 mr-3" />
                                        <span>Nursing care services Sector 20 Panchkula</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-cyan-600 mr-3" />
                                        <span>Home nurse near MDC Panchkula</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Extended Coverage</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-blue-600 mr-3" />
                                        <span>Elderly nursing care Panchkula Tricity</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-blue-600 mr-3" />
                                        <span>Nursing care in Panchkula, Chandigarh & Mohali</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Success Stories & Testimonials */}
                    <section className="mb-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaStar className="text-3xl text-emerald-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Success Stories & Testimonials</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-8 p-3">
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                <h3 className="text-xl font-semibold mb-4">Patient Recovery Stories</h3>
                                <p className="text-gray-700 mb-4">
                                    Case studies from Panchkula patients and families demonstrate the effectiveness of our home nursing services. Mr. Singh from Sector 20 recovered remarkably well from his cardiac surgery with our dedicated post-operative care.
                                </p>
                                <p className="text-gray-700">
                                    &quot;The private nurse for home Panchkula service was exceptional. The professional care and attention helped my father recover much faster than expected,&quot; shared Mrs. Singh.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm">
                                <h3 className="text-xl font-semibold mb-4">Positive Outcomes</h3>
                                <p className="text-gray-700 mb-4">
                                    Positive outcomes and recovery highlights show the impact of quality home nursing care. The Sharma family experienced excellent elderly care services that improved their grandmother&apos;s quality of life significantly.
                                </p>
                                <p className="text-gray-700">
                                    These testimonials reflect our commitment to providing compassionate, professional healthcare services that make a real difference in patients&apos; lives.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Challenges & Solutions */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaShieldAlt className="text-3xl text-gray-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Challenges & Our Solutions</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-gray-50 rounded-lg md:p-6 p-2">
                                <h3 className="text-lg font-semibold mb-3 text-red-600">Challenge: Skilled Staffing</h3>
                                <p className="text-gray-700 mb-3">Managing skilled nurse availability in Panchkula&apos;s competitive healthcare market.</p>
                                <h4 className="font-semibold text-green-600 mb-2">Our Solution:</h4>
                                <p className="text-gray-700">Maintained extensive network of qualified professionals with continuous training and competitive compensation packages.</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg md:p-6 p-2">
                                <h3 className="text-lg font-semibold mb-3 text-red-600">Challenge: 24/7 Coverage</h3>
                                <p className="text-gray-700 mb-3">Ensuring 24/7 coverage for critical patients requiring continuous medical supervision.</p>
                                <h4 className="font-semibold text-green-600 mb-2">Our Solution:</h4>
                                <p className="text-gray-700">Implemented shift-based staffing with backup support and emergency response protocols.</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg md:p-6 p-2">
                                <h3 className="text-lg font-semibold mb-3 text-red-600">Challenge: Cultural Sensitivity</h3>
                                <p className="text-gray-700 mb-3">Emotional and cultural sensitivity in diverse family environments and traditions.</p>
                                <h4 className="font-semibold text-green-600 mb-2">Our Solution:</h4>
                                <p className="text-gray-700">Specialized training in cultural awareness and empathy-based care approaches for all staff members.</p>
                            </div>
                        </div>
                    </section>

                    {/* Future Roadmap */}
                    <section className="mb-12 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaEye className="text-3xl text-violet-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Future Roadmap & Expansion</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaMapMarkerAlt className="text-3xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Geographic Expansion</h3>
                                <p>Planned expansion to Chandigarh, Mohali, and Zirakpur to provide comprehensive Tricity healthcare coverage.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaLaptopMedical className="text-3xl text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Mobile Technology</h3>
                                <p>Developing advanced mobile app for bookings and health tracking with real-time patient monitoring capabilities.</p>
                            </div>
                            <div className="bg-white rounded-lg md:p-6 p-2 shadow-sm text-center">
                                <FaUsers className="text-3xl text-purple-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Community Programs</h3>
                                <p>Launching community health awareness programs to promote preventive care and health education initiatives.</p>
                            </div>
                        </div>
                    </section>

                    {/* How to Book */}
                    <section className="mb-12 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaBookmark className="text-3xl text-teal-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Easy Booking Process</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Book home nurse Panchkula through our streamlined process designed for your convenience and immediate healthcare needs.
                        </p>
                        <div className="grid md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                                <h3 className="font-semibold mb-2">Contact</h3>
                                <p className="text-sm">Call our helpline or book online</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                                <h3 className="font-semibold mb-2">Assessment</h3>
                                <p className="text-sm">Medical evaluation and care planning</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                                <h3 className="font-semibold mb-2">Assignment</h3>
                                <p className="text-sm">Hire nurse for elderly at home Panchkula</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
                                <h3 className="font-semibold mb-2">Care Starts</h3>
                                <p className="text-sm">Professional nursing care begins</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-lg text-gray-700">
                                Our booking system ensures quick response times and immediate care deployment for urgent medical needs.
                            </p>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-12 bg-white rounded-xl   md:p-8 p-3">
                        <div className="flex items-center mb-6">
                            <FaPhoneAlt className="text-3xl text-blue-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-800">Contact Information & Support</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gamd:p-6 p-2">
                            <div className="bg-blue-50 rounded-lg md:p-6 p-2 text-center">
                                <FaClock className="text-3xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">24/7 Helpline</h3>
                                <p className="text-gray-700 mb-3">Round-the-clock helpline number for immediate assistance and emergency support.</p>
                                <p className="font-semibold text-blue-600">Available 24 hours daily</p>
                            </div>
                            <div className="bg-green-50 rounded-lg md:p-6 p-2 text-center">
                                <FaMapMarkerAlt className="text-3xl text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Panchkula Office</h3>
                                <p className="text-gray-700 mb-3">Conveniently located Panchkula office address for in-person consultations and support.</p>
                                <p className="font-semibold text-green-600">Visit us anytime</p>
                            </div>
                            <div className="bg-purple-50 rounded-lg md:p-6 p-2 text-center">
                                <FaPhone className="text-3xl text-purple-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-3">Digital Support</h3>
                                <p className="text-gray-700 mb-3">Online booking and WhatsApp support for quick communication and service requests.</p>
                                <p className="font-semibold text-purple-600">Instant response</p>
                            </div>
                        </div>
                    </section>

                    {/* Call-to-Action */}
                    <section className="mb-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg md:p-8 p-3 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Experience Professional Home Nursing Services in Panchkula</h2>
                        <p className="text-xl mb-6">
                            Contact us today to discuss your healthcare needs and discover compassionate, professional nursing care at home
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                href="tel:+918307190216"
                                className="  "
                            >
                            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">

                                <FaPhone className="mr-2" />
                                Call Now - 24/7 Available
                            </button>
                            </a>
                            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                                Book Online Today
                            </button>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="text-center text-gray-600">
                        <p className="mb-2">
                            Professional nursing care at home serving Panchkula, Chandigarh, Mohali, and surrounding areas
                        </p>
                        <p className="text-sm">
                            Your trusted healthcare partner - Committed to quality, compassion, and excellence in home nursing services
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
