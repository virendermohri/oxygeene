// app/mother-baby-care/mohali/page.tsx
import Image from 'next/image';
import Script from 'next/script';
import BookService from '@/components/bookservice';
import {
    
    FaHome,
    FaBaby,
    FaHeartbeat,
    FaUserNurse,
    FaShieldAlt,
    FaPhone,
    FaClock,
    FaMapMarkerAlt,
    FaStar,
    FaWhatsapp,
    FaStethoscope,
    FaHands,
    FaLeaf,
    FaLaptop,
    FaAmbulance,
    FaCalendarAlt
} from 'react-icons/fa';
import Link from 'next/link';

export const metadata = {
    title: 'Mother & Baby Care at Home in Mohali | Trained Postnatal Attendants',
    description:
        'Book expert postnatal care for mother and newborn in Mohali. CareKwik provides trained female attendants for baby massage, hygiene, breastfeeding & recovery support.',
    keywords: [
        'mother baby care Mohali',
        'postnatal care at home Mohali',
        'baby care services Mohali',
        'female attendant for mother',
        'newborn care Mohali',
        'baby massage Mohali',
        'home care after delivery Mohali',
    ],
    alternates: {
        canonical: 'https://carekwik.com/mother-baby-care-at-home/mohali',
    },
};

export default function MotherBabyCareMohali() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <Script id="ld-mother-baby-care-mohali" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Mother Baby Care in Mohali",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
                    "url": "https://carekwik.com/mother-baby-care/mohali",
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
                    "description": "Home-based postnatal mother and newborn baby care in Mohali by trained and verified female staff.",
                    "areaServed": ["Mohali", "Chandigarh", "Zirakpur", "Kharar"]
                })}
            </Script>

            <Script id="ld-faq-mohali" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Do you provide postnatal care in Mohali?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our trained female attendants offer postnatal care for mothers and newborns in Mohali and nearby areas."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I get a female attendant for my wife after delivery?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide culturally appropriate female staff trained in baby care, hygiene, and basic lactation support."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you offer infant massage and bath services?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely. Our trained baby care attendants can assist with daily massage and bathing rituals at home."
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
                        alt="Mother Baby Care at Home Mohali"
                        width={500}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <h2 className="text-xl font-bold mb-4">Book Mother & Baby Care</h2>
                        <BookService servicename="Mother Baby Care" />
                    </div>
                </div>
                <div className="max-w-6xl mx-auto my-10 md:p-6  p-2 bg-white">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <h1 className="md:text-4xl text-2xl font-bold text-blue-800 mb-4">
                            Mother and Baby Care at Home in Mohali
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Professional postnatal care services Mohali providing comprehensive
                            newborn care at home Mohali for new mothers and their precious little ones
                        </p>
                    </header>

                    {/* Introduction Section */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaHome className="md:md:text-3xl text-xl text-xl text-blue-600 mr-4" />
                            <h2 className="md:md:text-3xl text-xl text-xl font-semibold text-gray-800">Introduction</h2>
                        </div>

                        <div className="bg-blue-50 md:p-8 p-3 rounded-lg">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                                Importance of Postpartum Care for Mother and Newborn
                            </h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                The postpartum period is crucial for both mother and baby, requiring specialized attention and professional care.
                                Quality maternity care at home Mohali ensures that new mothers receive the support they need while their
                                newborns get optimal care in familiar surroundings. Professional home nurse for new mother Mohali services
                                play a vital role in ensuring healthy recovery and development during this transformative phase.
                            </p>

                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                                Rising Demand for Home-Based Maternity Services in Mohali
                            </h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                The demand for baby care services at home Mohali has grown significantly as families recognize the benefits
                                of receiving professional care in their own homes. This trend reflects a shift towards personalized healthcare
                                that eliminates the stress of hospital visits while providing expert attention. Post-delivery care for mother
                                and baby at home in Mohali has become increasingly popular among modern families.
                            </p>

                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                                Benefits of Personalized Care at Home vs. Hospital Stays
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Professional mother and baby care at home Mohali offers numerous advantages including reduced infection risks,
                                personalized attention, comfort of familiar environment, and active family involvement in the care process.
                                These services provide peace of mind to new parents while ensuring both mother and baby receive expert care
                                tailored to their specific needs without the constraints of hospital schedules.
                            </p>
                        </div>
                    </section>

                    {/* Objectives Section */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaHeartbeat className="md:md:text-3xl text-xl text-xl text-pink-600 mr-4" />
                            <h2 className="md:md:text-3xl text-xl text-xl font-semibold text-gray-800">Objectives</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                            <div className="bg-pink-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold text-pink-800 mb-3">
                                    Physical and Emotional Well-being
                                </h3>
                                <p className="text-gray-700">
                                    Ensure comprehensive physical and emotional well-being of both mother and baby through
                                    professional trained caregivers for baby and mother in Mohali who provide expert care
                                    and continuous support.
                                </p>
                            </div>

                            <div className="bg-green-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold text-green-800 mb-3">
                                    Support Recovery Post-Delivery
                                </h3>
                                <p className="text-gray-700">
                                    Facilitate faster recovery after delivery through specialized C-section recovery care at home Mohali
                                    and comprehensive postnatal care that addresses both physical healing and emotional adjustment.
                                </p>
                            </div>

                            <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                    Professional Medical Care
                                </h3>
                                <p className="text-gray-700">
                                    Provide professional medical, nursing, and emotional care through qualified healthcare providers
                                    including postpartum nurse for home visit Mohali services that ensure optimal health outcomes.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaUserNurse className="md:md:text-3xl text-xl text-xl text-purple-600 mr-4" />
                            <h2 className="md:md:text-3xl text-xl text-xl font-semibold text-gray-800">Services Offered</h2>
                        </div>

                        {/* Postnatal Care for Mothers */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                                A. Postnatal Care for Mothers
                            </h3>
                            <div className="bg-purple-50 md:p-6 p-3 rounded-lg">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold text-purple-700 mb-2">Vital Sign Monitoring</h4>
                                        <p className="text-gray-700 mb-4">
                                            Comprehensive vital sign monitoring ensures early detection of any health concerns.
                                            Professional home nurse for postnatal care Mohali provides regular health assessments
                                            and monitoring of blood pressure, temperature, and pulse rates.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-purple-700 mb-2">Post-Delivery Wound Care</h4>
                                        <p className="text-gray-700 mb-4">
                                            Specialized wound care for both C-section and episiotomy healing. Expert C-section recovery
                                            care at home Mohali includes proper wound cleaning, dressing changes, and infection prevention
                                            to ensure optimal healing.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-purple-700 mb-2">Breastfeeding Support</h4>
                                        <p className="text-gray-700 mb-4">
                                            Comprehensive breastfeeding and lactation support at home Mohali helps mothers establish
                                            successful feeding routines. Expert lactation consultants provide guidance on proper
                                            latching techniques and addressing feeding challenges.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-purple-700 mb-2">Nutrition & Physical Therapy</h4>
                                        <p className="text-gray-700 mb-4">
                                            Customized nutrition and diet planning supports recovery and breastfeeding. Professional
                                            physical therapy and postnatal exercises help mothers regain strength safely and effectively.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-purple-700 mb-2">Emotional Support</h4>
                                        <p className="text-gray-700 mb-4">
                                            Comprehensive emotional support and postpartum depression screening. Professional
                                            postpartum depression support Mohali helps mothers navigate emotional challenges
                                            during the recovery period.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Newborn Baby Care */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">
                                B. Newborn Baby Care
                            </h3>
                            <div className="bg-green-50 md:p-6 p-3 rounded-lg">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold text-green-700 mb-2">Bathing & Hygiene</h4>
                                        <p className="text-gray-700 mb-4">
                                            Professional baby bath and hygiene care at home Mohali ensures proper cleanliness
                                            and skin care. Expert caregivers provide gentle, safe bathing techniques that
                                            promote healthy development and comfort.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-700 mb-2">Umbilical Cord Care</h4>
                                        <p className="text-gray-700 mb-4">
                                            Specialized umbilical cord care at home Mohali prevents infection and promotes
                                            proper healing. Professional caregivers provide expert guidance on proper
                                            cord care techniques and monitoring.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-700 mb-2">Diaper Care & Rash Prevention</h4>
                                        <p className="text-gray-700 mb-4">
                                            Expert diaper changing and rash prevention ensures baby&apos;s comfort and health.
                                            Professional caregivers use proper techniques to maintain hygiene and prevent
                                            skin irritation.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-700 mb-2">Sleep & Massage</h4>
                                        <p className="text-gray-700 mb-4">
                                            Sleep pattern monitoring and home baby massage services in Mohali promote healthy
                                            development. Professional infant massage and gentle exercises support physical
                                            and neurological development.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-700 mb-2">Feeding Support</h4>
                                        <p className="text-gray-700 mb-4">
                                            Comprehensive newborn feeding support for both formula and breast milk feeding.
                                            Expert guidance ensures proper nutrition and feeding schedules for optimal growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Medical Support */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-red-800 mb-4">
                                C. Medical Support
                            </h3>
                            <div className="bg-red-50 md:p-6 p-3 rounded-lg">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold text-red-700 mb-2">Professional Nursing Care</h4>
                                        <p className="text-gray-700 mb-4">
                                            Trained maternity nurses and certified midwives provide expert care at home.
                                            Professional nursing support ensures comprehensive medical care for both
                                            mother and newborn.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-700 mb-2">On-Call Medical Support</h4>
                                        <p className="text-gray-700 mb-4">
                                            Pediatrician home visit Mohali and gynecologist consultation at home Mohali
                                            services provide convenient medical consultation without the need for
                                            hospital visits.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-700 mb-2">Vaccination Support</h4>
                                        <p className="text-gray-700 mb-4">
                                            Comprehensive newborn vaccination reminders Mohali ensure timely immunizations.
                                            Professional coordination and scheduling of vaccination appointments for
                                            optimal protection.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-700 mb-2">Health Monitoring</h4>
                                        <p className="text-gray-700 mb-4">
                                            Continuous monitoring for jaundice, colic, and other common newborn concerns.
                                            Early detection and professional management of potential health issues.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Staff Qualifications */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaStethoscope className="md:md:text-3xl text-xl text-xl text-indigo-600 mr-4" />
                            <h2 className="md:md:text-3xl text-xl text-xl font-semibold text-gray-800">Staff Qualifications</h2>
                        </div>

                        <div className="bg-indigo-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                                        Certified Healthcare Professionals
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Our team includes trained postnatal caregivers and certified maternity nurses
                                        who provide expert care. All staff members are thoroughly qualified and
                                        experienced in maternal and newborn care.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                                        Specialized Support Staff
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Dedicated pediatric support staff provide specialized care for newborns.
                                        Our mobile nurse for baby care Mohali team ensures expert care is always
                                        available when needed.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                                        Background Verification
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Comprehensive background checks and experience verification ensure all
                                        caregivers meet the highest standards of professionalism and reliability.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                                        Continuous Training
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Regular training updates ensure all staff stay current with best practices
                                        in maternal and newborn care, maintaining the highest quality of service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Customized Care Plans */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaCalendarAlt className="md:md:text-3xl text-xl text-xl text-teal-600 mr-4" />
                            <h2 className="md:md:text-3xl text-xl text-xl font-semibold text-gray-800">Customized Care Plans</h2>
                        </div>

                        <div className="bg-teal-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-teal-800 mb-3">
                                        Flexible Duration Options
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Comprehensive care packages including 7-day, 14-day, and 30-day options.
                                        Affordable newborn care services at home in Mohali with flexible scheduling
                                        to meet individual family needs.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-teal-800 mb-3">
                                        Day-Shift or 24x7 Care
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Choose between day-shift care or comprehensive 24/7 postnatal care at home Mohali
                                        based on your specific requirements and comfort level.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-teal-800 mb-3">
                                        Visit Frequency Options
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Single visit consultations or regular weekly check-up plans provide
                                        flexibility in care frequency based on recovery progress and family needs.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-teal-800 mb-3">
                                        Delivery-Specific Services
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Tailored services for C-section or natural delivery ensure appropriate
                                        care specific to the delivery type and recovery requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technology & Tracking */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaLaptop className="md:md:text-3xl text-xl text-xl text-orange-600 mr-4" />
                            <h2 className="md:md:text-3xl text-xl text-xl font-semibold text-gray-800">Technology & Tracking</h2>
                        </div>

                        <div className="bg-orange-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-orange-800 mb-3">
                                        Digital Health Monitoring
                                    </h3>
                                    <p className="text-gray-700">
                                        Advanced digital health monitoring apps track recovery progress and
                                        baby&apos;s development milestones, providing comprehensive care documentation.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-orange-800 mb-3">
                                        Daily Care Reports
                                    </h3>
                                    <p className="text-gray-700">
                                        Detailed daily care reports delivered via app or WhatsApp keep families
                                        informed about care activities and progress updates.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-orange-800 mb-3">
                                        Video Consultations
                                    </h3>
                                    <p className="text-gray-700">
                                        Convenient video consultations for doctor follow-up eliminate the need
                                        for unnecessary hospital visits while maintaining medical supervision.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Hygiene & Safety Standards */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaShieldAlt className="md:md:text-3xl text-xl text-xl text-blue-600 mr-4" />
                            <h2 className="md:md:text-3xl text-xl text-xl font-semibold text-gray-800">Hygiene & Safety Standards</h2>
                        </div>

                        <div className="bg-blue-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                        Sanitized Equipment
                                    </h3>
                                    <p className="text-gray-700">
                                        All equipment undergoes thorough sanitization before and after use,
                                        ensuring a safe, hygienic environment for mother and baby care.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                        COVID-Safe Protocols
                                    </h3>
                                    <p className="text-gray-700">
                                        Comprehensive COVID-safe protocols including regular health screenings,
                                        protective equipment, and infection control measures for all caregivers.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                        Emergency Preparedness
                                    </h3>
                                    <p className="text-gray-700">
                                        Emergency preparedness includes ambulance coordination and hospital
                                        tie-ups to ensure rapid response to any urgent medical situations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Location Coverage */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaMapMarkerAlt className="md:md:text-3xl text-xl text-xl text-purple-600 mr-4" />
                            <h2 className="md:md:text-3xl text-xl text-xl font-semibold text-gray-800">Location Coverage</h2>
                        </div>

                        <div className="bg-purple-50 md:p-8 p-3 rounded-lg">
                            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                                Comprehensive Home Visits in Mohali
                            </h3>
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h4 className="text-xl font-semibold text-purple-700 mb-3">
                                        Sector Coverage
                                    </h4>
                                    <p className="text-gray-700 mb-4">
                                        Mother care services in Sector 70 Mohali and comprehensive coverage of
                                        Sectors 70-82. Professional home nurse for baby in Phase 7 Mohali and
                                        other phases including Phase 3 and Phase 11.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-purple-700 mb-3">
                                        Main Road Areas
                                    </h4>
                                    <p className="text-gray-700 mb-4">
                                        Maternity care on Kharar Road Mohali and baby care near Airport Road Mohali
                                        ensure convenient access for families in key locations throughout the city.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-purple-700 mb-3">
                                        Extended Areas
                                    </h4>
                                    <p className="text-gray-700 mb-4">
                                        Newborn care at home Greater Mohali and postnatal home visit Zirakpur Mohali
                                        extend services to surrounding areas for comprehensive regional coverage.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-purple-700 mb-3">
                                        Optional Add-on Areas
                                    </h4>
                                    <p className="text-gray-700 mb-4">
                                        Optional coverage extension to Greater Mohali and Zirakpur areas provides
                                        flexibility for families in the extended metropolitan region.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pricing & Packages */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaStar className="md:md:text-3xl text-xl text-xl text-yellow-600 mr-4" />
                            <h2 className="md:md:text-3xl text-xl text-xl font-semibold text-gray-800">Pricing & Packages</h2>
                        </div>

                        <div className="bg-yellow-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                                        Flexible Rate Options
                                    </h3>
                                    <p className="text-gray-700">
                                        Comprehensive hourly, daily, and monthly packages designed to fit
                                        different budget requirements and care needs for new families.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                                        Service Tiers
                                    </h3>
                                    <p className="text-gray-700">
                                        Budget, Standard, and Premium tiers provide options for different
                                        levels of care intensity and service comprehensiveness.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                                        Specialized Add-ons
                                    </h3>
                                    <p className="text-gray-700">
                                        Optional add-ons include lactation consultation, nutritionist services,
                                        and specialized baby massage expert consultations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaStar className="md:md:text-3xl text-xl text-xl text-gold-600 mr-4" />
                            <h2 className="md:md:text-3xl text-xl text-xl font-semibold text-gray-800">Testimonials & Case Studies</h2>
                        </div>

                        <div className="bg-gray-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        Real Stories from New Mothers in Mohali
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        &apos;The professional care we received made our recovery so much smoother.
                                        Having expert help at home was exactly what we needed as new parents.&apos;
                                    </p>
                                    <p className="text-gray-700">
                                        &apos;The convenience of having a trained caregiver at home eliminated so much
                                        stress during those crucial first weeks.&apos;
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        Recovery Success Stories
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Video and written testimonials showcase faster recovery times and improved
                                        bonding experiences when families choose professional home-based care.
                                    </p>
                                    <p className="text-gray-700">
                                        Before-and-after recovery timelines demonstrate the effectiveness of
                                        professional postnatal care in promoting healthy outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact & Booking */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaPhone className="md:md:text-3xl text-xl text-xl text-green-600 mr-4" />
                            <h2 className="md:md:text-3xl text-xl text-xl font-semibold text-gray-800">Contact & Booking</h2>
                        </div>

                        <div className="bg-green-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                                <div className="text-center">
                                    <FaPhone className="md:text-4xl text-2xl text-green-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                        Phone Support
                                    </h3>
                                    <p className="text-gray-700">
                                        Book mother and baby care online Mohali through our dedicated phone
                                        support line for immediate assistance and booking confirmation.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <FaWhatsapp className="md:text-4xl text-2xl text-green-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                        WhatsApp Booking
                                    </h3>
                                    <p className="text-gray-700">
                                        Convenient WhatsApp support for quick queries and instant booking.
                                        Get immediate responses to your care-related questions and concerns.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <FaLaptop className="md:text-4xl text-2xl text-green-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                        Online Platform
                                    </h3>
                                    <p className="text-gray-700">
                                        User-friendly website form for convenient online booking. Free first
                                        consultation or home assessment available for all new clients.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <h3 className="text-xl font-semibold text-green-800 mb-3">
                                    24x7 Support Line
                                </h3>
                                <p className="text-gray-700">
                                    Round-the-clock support line ensures help is always available when you need it.
                                    Hire baby caregiver near me Mohali with just a phone call, and experience
                                    on-demand newborn care at home Mohali services whenever required.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <footer className="text-center bg-blue-800 text-white md:p-8 p-3 rounded-lg">
                        <h2 className="md:md:text-3xl text-xl text-xl font-bold mb-4">
                            Ready to Experience Premium Mother and Baby Care at Home?
                        </h2>
                        <p className="text-xl mb-6">
                            Contact us today to book your personalized mother and baby care at home Mohali services
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Link
                                href="tel:+918307190216"
                            >

                                <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    Call Now
                                </button>
                            </Link>
                             <Link
                                    href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                WhatsApp
                            </button>
                                </Link>
                            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                                Book Online
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
