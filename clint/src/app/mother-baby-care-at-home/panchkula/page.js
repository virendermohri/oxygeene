import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';
import { 
  FaBaby, 
  FaHeart, 
  FaHome, 
  FaUserMd, 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaHandsHelping,
  FaStethoscope,
  FaMobile,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { MdHealthAndSafety, MdBabyChangingStation, MdPregnantWoman } from 'react-icons/md';

export const metadata = {
    title: 'Mother & Baby Care at Home in Panchkula | Postnatal Attendants',
    description:
        'Get trained female attendants for mother and baby care at home in Panchkula. Postnatal recovery, newborn hygiene, massage, and feeding support by CareKwik.',
    keywords: [
        'mother baby care Panchkula',
        'postnatal care at home Panchkula',
        'baby care attendant Panchkula',
        'newborn care at home Panchkula',
        'female caregiver for mother Panchkula',
        'mother care after delivery Panchkula',
        'baby massage at home Panchkula',
    ],
    alternates: {
        canonical: 'https://carekwik.com/mother-baby-care-at-home/panchkula',
    },
};

export default function MotherBabyCarePanchkulaPage() {
    return (
        <>
            {/* JSON-LD for LocalBusiness */}
            <Script id="ld-motherbaby-pkl" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Mother & Baby Care at Home",
                    "@id": "https://carekwik.com/mother-baby-care/panchkula#carekwik",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163872/motherbaby-hero_kwbclo.jpg",
                    "url": "https://carekwik.com/mother-baby-care/panchkula",
                    "telephone": "+91-8307190216",
                    "priceRange": "₹₹",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Panchkula",
                        "addressRegion": "Haryana",
                        "postalCode": "134109",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-20:00",
                    "description": "Trained attendants for mother and newborn baby care in Panchkula. Safe, hygienic, and culturally sensitive female caregivers available at home.",
                    "areaServed": ["Panchkula", "Chandigarh", "Mohali"]
                })}
            </Script>

            {/* FAQ JSON-LD */}
            <Script id="ld-faq-pkl" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Can I get mother and baby care service in Panchkula?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide home-based mother and newborn care services across all sectors of Panchkula."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide only female attendants?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our attendants for postnatal care are experienced and verified females trained in hygiene and newborn care."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is overnight baby care available in Panchkula?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we offer both day and night shift attendants based on your schedule and need."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book help for baby massage and bathing?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely. Our caregivers are trained in gentle massage, safe baby bathing, and hygiene maintenance."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How early should I book after delivery?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can book in advance or within 24 hours of delivery. We try to assign caregivers quickly to support you early on."
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
                        alt="Mother and Baby Care at Home in Panchkula"
                        width={400}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="md:text-2xl text-xl font-bold mb-4">Book Mother & Baby Care</p>
                        <BookService servicename="Mother and Baby Care" />
                    </div>
                </div>

                <div className="max-w-6xl mt-10 mx-auto md:p-6 p-3 bg-white">
                    {/* Header */}
                    <header className="text-center mb-8">
                        <div className="flex justify-center items-center mb-4">
                            <FaBaby className="text-4xl hidden md:block text-pink-500 mr-3" />
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Mother and Baby Care at Home Panchkula
                            </h1>
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive postnatal care services Panchkula for new mothers and their precious little ones
                        </p>
                    </header>

                    {/* Introduction Section */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <FaHeart className="text-2xl text-red-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
                        </div>
                        <div className="bg-pink-50 md:p-6 p-3 rounded-lg">
                            <p className="text-gray-700 mb-4">
                                The journey of motherhood brings immense joy, but it also comes with unique challenges that require specialized attention.
                                Newborn baby care at home Panchkula has become increasingly important as families seek personalized, comfortable care
                                solutions right in their own homes. The importance of postpartum care cannot be overstated - it&apos;s a critical period
                                where both mother and baby need expert guidance, emotional support, and medical attention.
                            </p>
                            <p className="text-gray-700">
                                In Panchkula, there&apos;s a growing demand for home care for mother and newborn Panchkula services that prioritize safety,
                                recovery, and bonding in the familiar environment of home. These services ensure that families receive the best care
                                while avoiding the stress of frequent hospital visits and potential infection risks.
                            </p>
                        </div>
                    </section>

                    {/* Objectives Section */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <MdHealthAndSafety className="text-2xl text-blue-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800">Objectives of Our Service</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-blue-800 mb-2">For New Mothers</h3>
                                <ul className="text-gray-700 space-y-1">
                                    <li>• Promote holistic recovery after delivery</li>
                                    <li>• Provide emotional support and stress relief</li>
                                    <li>• Ensure proper nutrition and self-care</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-green-800 mb-2">For Newborns</h3>
                                <ul className="text-gray-700 space-y-1">
                                    <li>• Ensure optimal newborn health and hygiene</li>
                                    <li>• Monitor growth and development milestones</li>
                                    <li>• Minimize hospital visits and infection risks</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Types of Services Section */}
                    <section className="mb-8">
                        <div className="flex items-center mb-6">
                            <FaHandsHelping className="text-2xl text-purple-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800">Comprehensive Care Services</h2>
                        </div>

                        {/* Postnatal Mother Care */}
                        <div className="mb-6">
                            <div className="flex items-center mb-3">
                                <MdPregnantWoman className="text-xl text-pink-500 mr-2" />
                                <h3 className="text-xl font-semibold text-gray-800">Postnatal Mother Care</h3>
                            </div>
                            <div className="bg-pink-50 p-5 rounded-lg">
                                <p className="text-gray-700 mb-3">
                                    Our maternity care services at home Panchkula focus on comprehensive recovery support for new mothers.
                                    Trained caregivers for mother and baby Panchkula provide specialized assistance including:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-medium text-gray-800 mb-2">Physical Care:</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>• Post-delivery hygiene and wound care</li>
                                            <li>• C-section recovery care at home Panchkula</li>
                                            <li>• Postpartum massage therapy Panchkula</li>
                                            <li>• Nutrition support for new mothers Panchkula</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800 mb-2">Emotional Support:</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>• Breastfeeding support at home Panchkula</li>
                                            <li>• Mental wellness guidance</li>
                                            <li>• Postnatal depression care at home Panchkula</li>
                                            <li>• Emotional support for new moms Panchkula</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Newborn Baby Care */}
                        <div className="mb-6">
                            <div className="flex items-center mb-3">
                                <MdBabyChangingStation className="text-xl text-blue-500 mr-2" />
                                <h3 className="text-xl font-semibold text-gray-800">Newborn Baby Care</h3>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-lg">
                                <p className="text-gray-700 mb-3">
                                    The best newborn care service Panchkula includes comprehensive baby care with experienced caretaker for newborn Panchkula:
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <p className="font-medium text-gray-800 mb-2">Daily Care:</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>• Baby massage and bathing service Panchkula</li>
                                            <li>• Professional diapering</li>
                                            <li>• Sleep management</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800 mb-2">Feeding Support:</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>• Bottle feeding guidance</li>
                                            <li>• Breastfeeding assistance</li>
                                            <li>• Feeding schedule management</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800 mb-2">Health Monitoring:</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>• Vital signs monitoring</li>
                                            <li>• Growth milestone tracking</li>
                                            <li>• Vaccination reminders</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Medical Support */}
                        <div className="mb-6">
                            <div className="flex items-center mb-3">
                                <FaStethoscope className="text-xl text-green-500 mr-2" />
                                <h3 className="text-xl font-semibold text-gray-800">Medical Support Services</h3>
                            </div>
                            <div className="bg-green-50 p-5 rounded-lg">
                                <p className="text-gray-700 mb-3">
                                    Our in-home nursing for new mothers Panchkula includes optional medical add-ons:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• Home nurse for postnatal care Panchkula</li>
                                        <li>• Home visits by pediatric nurse Panchkula</li>
                                        <li>• Gynecologist home visit Panchkula</li>
                                        <li>• Pediatric consultation at home Panchkula</li>
                                    </ul>
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• Lactation consultant sessions</li>
                                        <li>• Jaundice care management</li>
                                        <li>• Postnatal complication care</li>
                                        <li>• On-call nurse for new mother Panchkula</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Household Support */}
                        <div className="mb-6">
                            <div className="flex items-center mb-3">
                                <FaHome className="text-xl text-yellow-500 mr-2" />
                                <h3 className="text-xl font-semibold text-gray-800">Household & Lifestyle Support</h3>
                            </div>
                            <div className="bg-yellow-50 p-5 rounded-lg">
                                <p className="text-gray-700 mb-3">
                                    Comprehensive household support ensures comfort and convenience for the entire family:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="text-gray-700 space-y-1">
                                        <li>• Light meal preparation for mother</li>
                                        <li>• Sanitization of baby items</li>
                                        <li>• Daily routine management</li>
                                    </ul>
                                    <ul className="text-gray-700 space-y-1">
                                        <li>• Traditional baby massage lady Panchkula</li>
                                        <li>• Bottle and clothing sterilization</li>
                                        <li>• Support for recovery activities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Staffing and Training */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <FaShieldAlt className="text-2xl text-indigo-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800">Professional Staffing & Training</h2>
                        </div>
                        <div className="bg-indigo-50 md:p-6 p-3 rounded-lg">
                            <p className="text-gray-700 mb-4">
                                Our team consists of qualified nurses, experienced ayahs, and baby care helpers Panchkula Mohali Chandigarh
                                who are thoroughly background-verified and trained in:
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <FaUserMd className="text-3xl text-indigo-500 mx-auto mb-2" />
                                    <h4 className="font-semibold text-gray-800 mb-1">Medical Training</h4>
                                    <p className="text-sm text-gray-600">Hygiene protocols, first-aid, and emergency care</p>
                                </div>
                                <div className="text-center">
                                    <FaHeart className="text-3xl text-indigo-500 mx-auto mb-2" />
                                    <h4 className="font-semibold text-gray-800 mb-1">Compassionate Care</h4>
                                    <p className="text-sm text-gray-600">Culturally sensitive and emotionally supportive</p>
                                </div>
                                <div className="text-center">
                                    <MdHealthAndSafety className="text-3xl text-indigo-500 mx-auto mb-2" />
                                    <h4 className="font-semibold text-gray-800 mb-1">Safety Certified</h4>
                                    <p className="text-sm text-gray-600">Traditional practices with modern safety standards</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Custom Care Plans */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <FaClock className="text-2xl text-teal-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800">Flexible Care Plans</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-teal-50 p-4 rounded-lg text-center">
                                <h3 className="font-semibold text-teal-800 mb-2">Day Care</h3>
                                <p className="text-gray-700 text-sm">Half-day support (4-8 hours)</p>
                                <p className="text-teal-600 font-medium mt-2">Day and night baby care at home Panchkula</p>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-lg text-center">
                                <h3 className="font-semibold text-teal-800 mb-2">Full-Day Care</h3>
                                <p className="text-gray-700 text-sm">Complete 12-hour coverage</p>
                                <p className="text-teal-600 font-medium mt-2">Hire baby care nanny Panchkula</p>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-lg text-center">
                                <h3 className="font-semibold text-teal-800 mb-2">Live-In Care</h3>
                                <p className="text-gray-700 text-sm">24/7 comprehensive support</p>
                                <p className="text-teal-600 font-medium mt-2">Live-in baby caretaker Panchkula</p>
                            </div>
                        </div>
                        <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 text-center">
                                <strong>Duration Options:</strong> Short-term (2 weeks) to long-term (3+ months) based on delivery type
                                (normal or C-section) and family needs
                            </p>
                        </div>
                    </section>

                    {/* Technology & Monitoring */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <FaMobile className="text-2xl text-purple-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800">Technology & Monitoring</h2>
                        </div>
                        <div className="bg-purple-50 md:p-6 p-3 rounded-lg">
                            <p className="text-gray-700 mb-4">
                                Modern technology integration ensures seamless communication and monitoring:
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <FaMobile className="text-2xl text-purple-500 mx-auto mb-2" />
                                    <h4 className="font-medium text-gray-800">Digital Booking</h4>
                                    <p className="text-sm text-gray-600">Book mother baby care service Panchkula via app or website</p>
                                </div>
                                <div className="text-center">
                                    <FaUserMd className="text-2xl text-purple-500 mx-auto mb-2" />
                                    <h4 className="font-medium text-gray-800">Video Consultations</h4>
                                    <p className="text-sm text-gray-600">Connect with specialists remotely</p>
                                </div>
                                <div className="text-center">
                                    <FaWhatsapp className="text-2xl text-purple-500 mx-auto mb-2" />
                                    <h4 className="font-medium text-gray-800">Regular Updates</h4>
                                    <p className="text-sm text-gray-600">Health updates via SMS/WhatsApp</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Local Relevance */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-2xl text-orange-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800">Local Coverage Areas</h2>
                        </div>
                        <div className="bg-orange-50 md:p-6 p-3 rounded-lg">
                            <p className="text-gray-700 mb-4">
                                Our affordable baby care services at home in Panchkula cover all major sectors and surrounding areas:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold text-orange-800 mb-2">Panchkula Sectors:</h4>
                                    <ul className="text-gray-700 space-y-1">
                                        <li>• Mother and baby care services Sector 20 Panchkula</li>
                                        <li>• Panchkula mother baby care at home Sector 12, 15, 21</li>
                                        <li>• All residential sectors covered</li>
                                        <li>• Maternity care Panchkula near me</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-orange-800 mb-2">Extended Coverage:</h4>
                                    <ul className="text-gray-700 space-y-1">
                                        <li>• Home care for newborns in Tricity (Chandigarh, Mohali, Panchkula)</li>
                                        <li>• Special packages for Tricity families</li>
                                        <li>• Collaboration with local hospitals</li>
                                        <li>• Partnership with medical clinics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Safety and Hygiene */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <MdHealthAndSafety className="text-2xl text-green-600 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800">Safety & Hygiene Protocols</h2>
                        </div>
                        <div className="bg-green-50 md:p-6 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h4 className="font-semibold text-green-800 mb-3">Product Safety:</h4>
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• Use of sterile, baby-safe products</li>
                                        <li>• Regular sanitization of all equipment</li>
                                        <li>• Quality-approved care materials</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-800 mb-3">Health Protocols:</h4>
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• Daily caregiver health screenings</li>
                                        <li>• COVID-safe protocols in place</li>
                                        <li>• 24/7 emergency support available</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <FaStar className="text-2xl text-yellow-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800">Pricing & Packages</h2>
                        </div>
                        <div className="bg-yellow-50 md:p-6 p-3 rounded-lg">
                            <p className="text-gray-700 mb-4 text-center">
                                Transparent and affordable pricing with flexible payment options
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-lg border text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">Daily Rates</h4>
                                    <p className="text-gray-600 text-sm">Flexible hourly and daily pricing</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">Weekly Packages</h4>
                                    <p className="text-gray-600 text-sm">Discounted weekly care plans</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">Monthly Plans</h4>
                                    <p className="text-gray-600 text-sm">Best value for extended care</p>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-gray-700">
                                    <strong>Special Offers:</strong> Package discounts, flexible add-on services, and trial options available
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <FaStar className="text-2xl text-blue-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800">What Families Say</h2>
                        </div>
                        <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
                            <p className="text-gray-700 mb-4 text-center">
                                Real stories from satisfied Panchkula mothers who experienced our at-home post-delivery care for new mothers Panchkula
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <FaStar key={star} className="text-yellow-400 text-sm" />
                                        ))}
                                        <span className="ml-2 text-gray-600 text-sm">Sector 20, Panchkula</span>
                                    </div>
                                    <p className="text-gray-700 text-sm italic">
                                        &quot;The care and support we received was exceptional. Our caregiver was professional,
                                        caring, and helped us adjust to parenthood smoothly.&quot;
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <FaStar key={star} className="text-yellow-400 text-sm" />
                                        ))}
                                        <span className="ml-2 text-gray-600 text-sm">Sector 15, Panchkula</span>
                                    </div>
                                    <p className="text-gray-700 text-sm italic">
                                        &quot;Excellent service with qualified nurses. They took care of everything from baby care
                                        to helping me with recovery. Highly recommended!&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <FaPhone className="text-2xl text-green-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800">Contact & Booking Information</h2>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 md:p-6 p-3 rounded-lg">
                            <p className="text-gray-700 mb-6 text-center">
                                Ready to experience the best mother and baby care at home in Panchkula? Get in touch with us today!
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 mb-6">
                                <div className="text-center">
                                    <FaPhone className="text-2xl text-green-500 mx-auto mb-2" />
                                    <h4 className="font-semibold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">Call for immediate assistance</p>
                                </div>
                                <div className="text-center">
                                    <FaWhatsapp className="text-2xl text-green-500 mx-auto mb-2" />
                                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                                    <p className="text-gray-600">Quick queries and booking</p>
                                </div>
                                <div className="text-center">
                                    <FaEnvelope className="text-2xl text-green-500 mx-auto mb-2" />
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">Detailed inquiries</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-sm">
                                    <p className="text-gray-800 font-semibold mb-1">Special Offer</p>
                                    <p className="text-gray-600 text-sm">Free first consultation or trial visit for new families</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <footer className="text-center bg-gray-50 md:p-6 p-3 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Experience Professional Mother and Baby Care at Home Panchkula
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Join hundreds of satisfied families who chose our trusted postnatal care services Panchkula
                        </p>
                        <div className="flex justify-center items-center space-x-4">
                            <FaBaby className="text-2xl text-pink-500" />
                            <FaHeart className="text-2xl text-red-500" />
                            <FaHome className="text-2xl text-blue-500" />
                        </div>
                    </footer>
                </div>

            </div>
        </>
    );
}
