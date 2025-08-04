import BookService from '@/components/bookservice';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
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
    FaLeaf
} from 'react-icons/fa';
export const metadata = {
    title: 'Mother & Baby Care at Home in Chandigarh | Postnatal Support',
    description:
        'Book trained female attendants for mother and newborn baby care in Chandigarh. Safe postnatal care, feeding support & hygiene at home.',
    keywords: [
        'mother baby care Chandigarh',
        'postnatal care at home Chandigarh',
        'newborn baby care Chandigarh',
        'female attendant for baby',
        'mother care after delivery Chandigarh',
    ],
    alternates: {
        canonical: 'https://carekwik.com/mother-baby-care-at-home/chandigarh',
    },
};

export default function MotherBabyCareChandigarhPage() {
    return (
        <>
            {/* JSON-LD for LocalBusiness */}
            <Script id="ld-motherbaby-chd" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - Mother & Baby Care at Home",
                    "@id": "https://carekwik.com/mother-baby-care/chandigarh#carekwik",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163872/motherbaby-hero_kwbclo.jpg",
                    "url": "https://carekwik.com/mother-baby-care/chandigarh",
                    "telephone": "+91-8307190216",
                    "priceRange": "₹₹",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chandigarh",
                        "addressRegion": "Chandigarh",
                        "postalCode": "160036",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-20:00",
                    "description": "Expert mother and newborn care at home in Chandigarh. Hire trained female attendants for postnatal hygiene, feeding support, and daily recovery assistance.",
                    "areaServed": ["Chandigarh", "Mohali", "Panchkula"]
                })}
            </Script>

            {/* JSON-LD for FAQ */}
            <Script id="ld-faq-chd" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Do you provide female attendants for mother and baby care?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide trained and background-verified female caregivers who specialize in mother and baby care post-delivery."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is this service available in all sectors of Chandigarh?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our home care attendants are available across all sectors and colonies of Chandigarh."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I get a night attendant for my newborn?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide overnight care services for newborns including feeding, diapering, and sleep assistance."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is your staff trained in handling newborn hygiene and feeding?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely. Our caregivers are trained in newborn hygiene, sterilization, breastfeeding support, and bottle feeding."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How soon can I book a caregiver after delivery?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can book a caregiver even before your delivery date, or within 24 hours after delivery for home service."
                            }
                        }
                    ]
                })}
            </Script>

            <div className="max-w-6xl mx-auto mt-10">
                {/* Hero Section */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753210013/220-SM681360_vp9gp2.jpg"
                        alt="Mother and Baby Care in Chandigarh"
                        width={400}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="md:text-2xl text-xl font-bold mb-4">Book Mother & Baby Care</p>
                        <BookService servicename="Mother and Baby Care" />
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl my-10 mx-auto md:p-6 p-3 bg-white">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <h1 className="md:text-4xl text-2xl font-bold text-blue-800 mb-4">
                            Mother and Baby Care at Home in Chandigarh
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Professional postnatal care at home Chandigarh services providing comprehensive
                            newborn care services Chandigarh for new mothers and their precious little ones
                        </p>
                    </header>

                    {/* Introduction Section */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaHome className="md:text-3xl text-xl text-blue-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">Introduction</h2>
                        </div>

                        <div className="bg-blue-50 md:p-8 p-3 rounded-lg">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                                Importance of Postpartum Care
                            </h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                The postpartum period is a crucial time for both mother and baby, requiring specialized attention and care.
                                Professional home nurse for mother and baby Chandigarh services ensure that new mothers receive the support
                                they need during this transformative phase. Quality postnatal care at home Chandigarh helps mothers recover
                                faster while ensuring their newborns receive optimal care in familiar surroundings.
                            </p>

                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                                Growing Demand for Home-Based Care in Chandigarh
                            </h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                The demand for home care for new mothers Chandigarh has significantly increased as families recognize
                                the benefits of receiving professional care in their own homes. This approach eliminates the stress of
                                hospital visits while providing personalized attention. Baby massage at home Chandigarh services have
                                become particularly popular among new parents seeking comprehensive care solutions.
                            </p>

                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                                Benefits of Professional Care for Mother and Newborn
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Professional mother and baby care at home Chandigarh services offer numerous advantages including
                                reduced infection risks, personalized attention, comfort of familiar environment, and family involvement
                                in the care process. These services provide peace of mind to new parents while ensuring both mother
                                and baby receive expert care tailored to their specific needs.
                            </p>
                        </div>
                    </section>

                    {/* Objectives Section */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaHeartbeat className="md:text-3xl text-xl text-pink-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">
                                Objectives of Mother & Baby Care at Home
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                            <div className="bg-pink-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold text-pink-800 mb-3">
                                    Support Faster Recovery
                                </h3>
                                <p className="text-gray-700">
                                    Post delivery care for mother and baby at home in Chandigarh focuses on
                                    accelerating the mother&apos;s recovery through personalized care plans and
                                    continuous monitoring.
                                </p>
                            </div>

                            <div className="bg-green-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold text-green-800 mb-3">
                                    Promote Healthy Development
                                </h3>
                                <p className="text-gray-700">
                                    Professional newborn care services Chandigarh ensure optimal development
                                    through proper feeding, sleep schedules, and developmental milestone tracking.
                                </p>
                            </div>

                            <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
                                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                    Comprehensive Home Support
                                </h3>
                                <p className="text-gray-700">
                                    At-home postpartum care services Chandigarh provide emotional, physical,
                                    and medical support in the comfort and privacy of your own home.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaUserNurse className="md:text-3xl text-xl text-purple-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">Types of Services Offered</h2>
                        </div>

                        {/* Postnatal Care for Mothers */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                                A. Postnatal Care for Mothers
                            </h3>
                            <div className="bg-purple-50 md:p-6 p-3 rounded-lg">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold text-purple-700 mb-2">Wound Care Services</h4>
                                        <p className="text-gray-700 mb-4">
                                            Specialized C-section recovery care at home Chandigarh includes proper wound cleaning,
                                            dressing changes, and monitoring for infection signs. Professional care ensures optimal
                                            healing for both C-section and episiotomy wounds.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-purple-700 mb-2">Breastfeeding Support</h4>
                                        <p className="text-gray-700 mb-4">
                                            Expert lactation consultant at home Chandigarh services help mothers establish
                                            successful breastfeeding routines. Breastfeeding support at home Chandigarh
                                            includes proper latching techniques and addressing feeding challenges.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-purple-700 mb-2">Nutrition Guidance</h4>
                                        <p className="text-gray-700 mb-4">
                                            Postpartum nutrition services Chandigarh provide customized diet plans to support
                                            recovery and breastfeeding. Professional guidance ensures mothers receive adequate
                                            nutrients for optimal healing.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-purple-700 mb-2">Physical Recovery</h4>
                                        <p className="text-gray-700 mb-4">
                                            Postnatal physiotherapy at home Chandigarh helps mothers regain strength and
                                            mobility safely. Light exercise support promotes faster recovery and overall well-being.
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
                                        <h4 className="font-semibold text-green-700 mb-2">Baby Bathing & Massage</h4>
                                        <p className="text-gray-700 mb-4">
                                            Professional baby bathing and massage service Chandigarh ensures proper hygiene
                                            and promotes healthy development. Trained nurse for baby care at home in Chandigarh
                                            provides gentle, safe bathing techniques.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-700 mb-2">Daily Care Routines</h4>
                                        <p className="text-gray-700 mb-4">
                                            Baby caretaker services at home Chandigarh include diapering, clothing changes,
                                            and maintaining proper hygiene. Professional baby nanny at home Chandigarh
                                            ensures consistent care routines.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-700 mb-2">Umbilical Cord Care</h4>
                                        <p className="text-gray-700 mb-4">
                                            Specialized umbilical cord care prevents infection and promotes proper healing.
                                            Home nurse for newborn care Chandigarh provides expert guidance on cord care techniques.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-700 mb-2">Feeding Support</h4>
                                        <p className="text-gray-700 mb-4">
                                            Professional feeding and burping assistance ensures proper nutrition and comfort.
                                            Sleep schedule development and soothing techniques promote healthy sleep patterns.
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
                                        <h4 className="font-semibold text-red-700 mb-2">Professional Nurse Visits</h4>
                                        <p className="text-gray-700 mb-4">
                                            Regular home visit for newborn and mother care in Chandigarh includes comprehensive
                                            health assessments. Pediatric nurse at home Chandigarh provides specialized medical
                                            care for newborns.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-700 mb-2">Health Monitoring</h4>
                                        <p className="text-gray-700 mb-4">
                                            Continuous vital monitoring for both mother and baby ensures early detection of
                                            any health concerns. Professional monitoring includes temperature, weight, and
                                            feeding pattern tracking.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-700 mb-2">Immunization Support</h4>
                                        <p className="text-gray-700 mb-4">
                                            Timely immunization reminders and coordination ensure babies receive necessary
                                            vaccinations on schedule. Professional guidance on vaccination schedules and requirements.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-700 mb-2">Doctor Home Visits</h4>
                                        <p className="text-gray-700 mb-4">
                                            Convenient pediatrician and gynecologist home visits eliminate the need for
                                            hospital trips. Expert medical consultation in the comfort of your home.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Staffing Section */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaStethoscope className="md:text-3xl text-xl text-indigo-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">Staffing and Expertise</h2>
                        </div>

                        <div className="bg-indigo-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                                        Certified Professionals
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Our team includes certified female nurses and experienced midwives who provide
                                        mother and infant care packages in Chandigarh. All staff members are thoroughly
                                        trained and certified in postnatal and newborn care.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                                        Specialized Caregivers
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Experienced ayahs and baby caretakers provide comprehensive care support.
                                        Our mother care helper Chandigarh team includes lactation consultants and
                                        physiotherapists for specialized care needs.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                                        Special Needs Training
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        All caregivers are trained in handling premature babies and special-needs infants.
                                        This specialized training ensures that even the most vulnerable babies receive
                                        appropriate care and attention.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                                        Continuous Education
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Our staff undergoes regular training updates to stay current with best practices
                                        in maternal and newborn care. This commitment to education ensures the highest
                                        quality of care for all families.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Custom Care Plans */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaHands className="md:text-3xl text-xl text-teal-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">Custom Care Plans</h2>
                        </div>

                        <div className="bg-teal-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-teal-800 mb-3">
                                        Flexible Duration Options
                                    </h3>
                                    <p className="text-gray-700">
                                        Mother care packages Chandigarh are available for 1 week, 1 month, or 3-month
                                        durations, allowing families to choose the support level that best meets their needs.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-teal-800 mb-3">
                                        Delivery-Specific Care
                                    </h3>
                                    <p className="text-gray-700">
                                        Customized care plans are tailored to delivery type, whether C-section or normal
                                        delivery, ensuring appropriate recovery support for each mother&apos;s unique needs.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-teal-800 mb-3">
                                        Special Situation Support
                                    </h3>
                                    <p className="text-gray-700">
                                        Special packages are available for twins or NICU-released babies, providing
                                        the additional care and attention these situations require.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Emergency Support */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaClock className="md:text-3xl text-xl text-orange-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">Emergency and 24/7 Support</h2>
                        </div>

                        <div className="bg-orange-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-orange-800 mb-3">
                                        Round-the-Clock Availability
                                    </h3>
                                    <p className="text-gray-700">
                                        24/7 baby care nurse Chandigarh services ensure that help is always available
                                        when needed. On-call nurse availability provides peace of mind for new parents.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-orange-800 mb-3">
                                        Emergency Coordination
                                    </h3>
                                    <p className="text-gray-700">
                                        Emergency transport coordination ensures rapid response to any urgent medical
                                        situations. Professional staff can quickly arrange appropriate medical care.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-orange-800 mb-3">
                                        Telemedicine Support
                                    </h3>
                                    <p className="text-gray-700">
                                        Doctor consultation on call provides immediate medical advice and guidance.
                                        This service helps address concerns quickly without unnecessary hospital visits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Safety Protocols */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaShieldAlt className="md:text-3xl text-xl text-blue-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">Hygiene and Safety Protocols</h2>
                        </div>

                        <div className="bg-blue-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                        Equipment Sterilization
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        All baby equipment undergoes thorough sterilization before and after use.
                                        This ensures a safe, hygienic environment for both mother and baby care.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                        Infection Control Training
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        All staff are COVID-safe and infection-control trained, following the latest
                                        health guidelines to protect families during care provision.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                        Personal Protection
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Mandatory use of gloves, masks, and sanitizers during all care routines
                                        ensures maximum protection for both caregivers and families.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                        Regular Health Monitoring
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        All caregivers undergo regular health screenings to ensure they maintain
                                        optimal health standards while providing care services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Family Support */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaLeaf className="md:text-3xl text-xl text-green-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">Emotional & Family Support</h2>
                        </div>

                        <div className="bg-green-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                        Postpartum Counseling
                                    </h3>
                                    <p className="text-gray-700">
                                        Professional postpartum counseling services are available when needed,
                                        helping mothers navigate emotional challenges during the recovery period.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                        Family Education
                                    </h3>
                                    <p className="text-gray-700">
                                        Comprehensive family education on newborn handling ensures all family
                                        members feel confident in caring for the new baby.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                        First-Time Parent Support
                                    </h3>
                                    <p className="text-gray-700">
                                        Special support programs for first-time parents provide additional
                                        guidance and reassurance during this life-changing experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Service Areas */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaMapMarkerAlt className="md:text-3xl text-xl text-purple-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">Service Areas in Chandigarh</h2>
                        </div>

                        <div className="bg-purple-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-purple-800 mb-3">
                                        Comprehensive Sector Coverage
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Mother and baby care in Sector 17 Chandigarh and other key sectors including
                                        Sector 22, 35, and surrounding areas. Our sector-wise coverage ensures
                                        accessible care throughout Chandigarh.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-purple-800 mb-3">
                                        Extended Tricity Coverage
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Tricity mother and child care services extend to newborn home care in Panchkula and Mohali.
                                        Mother care services in Zirakpur Chandigarh are also available for families
                                        in the extended region.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-purple-800 mb-3">
                                        Convenient Location Access
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Baby care at home near me Chandigarh services are designed to provide
                                        convenient access regardless of your specific location within the service area.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-purple-800 mb-3">
                                        Regional Expansion
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Our services continue to expand throughout the Tricity region, ensuring
                                        more families have access to quality home-based mother and baby care.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaStar className="md:text-3xl text-xl text-yellow-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">Pricing & Packages</h2>
                        </div>

                        <div className="bg-yellow-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                                        Flexible Rate Options
                                    </h3>
                                    <p className="text-gray-700">
                                        Affordable home care for mother and baby Chandigarh with hourly, daily,
                                        and monthly rates to suit different budget requirements and care needs.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                                        Complete Care Bundles
                                    </h3>
                                    <p className="text-gray-700">
                                        Full mother-baby care bundles provide comprehensive services at attractive
                                        package rates, offering better value for extended care periods.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                                        Consultation Charges
                                    </h3>
                                    <p className="text-gray-700">
                                        Transparent home visit consultation charges with no hidden fees.
                                        Free initial consultation or home assessment available for new clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaStar className="md:text-3xl text-xl text-gold-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">Testimonials & Case Studies</h2>
                        </div>

                        <div className="bg-gray-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        Real Client Reviews from Chandigarh
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        &apos;The professional care we received made all the difference in our recovery.
                                        The nurses were knowledgeable, caring, and helped us feel confident as new parents.&apos;
                                    </p>
                                    <p className="text-gray-700">
                                        &apos;Hire baby caretaker at home Chandigarh was the best decision we made.
                                        The convenience and quality of care exceeded our expectations.&apos;
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        Stories of Recovery and Comfort
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Families consistently report faster recovery times and reduced stress when
                                        choosing professional home-based care over traditional hospital-based options.
                                    </p>
                                    <p className="text-gray-700">
                                        Case studies demonstrate improved bonding between mother and baby when
                                        care is provided in the familiar, comfortable home environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="mb-12">
                        <div className="flex items-center mb-6">
                            <FaPhone className="md:text-3xl text-xl text-green-600 mr-4" />
                            <h2 className="md:text-3xl text-xl font-semibold text-gray-800">Contact & Booking Information</h2>
                        </div>

                        <div className="bg-green-50 md:p-8 p-3 rounded-lg">
                            <div className="grid md:grid-cols-3 gamd:p-6 p-3">
                                <div className="text-center">
                                    <FaPhone className="md:text-4xl text-2xl text-green-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                        Call Support
                                    </h3>
                                    <p className="text-gray-700">
                                        Book mother and baby care at home Chandigarh through our dedicated
                                        call support line for immediate assistance and booking.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <FaWhatsapp className="md:text-4xl text-2xl text-green-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                        WhatsApp Support
                                    </h3>
                                    <p className="text-gray-700">
                                        Convenient WhatsApp support for quick queries and booking confirmations.
                                        Get instant responses to your care-related questions.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <FaBaby className="md:text-4xl text-2xl text-green-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                        Online Booking
                                    </h3>
                                    <p className="text-gray-700">
                                        User-friendly online booking portal or app for convenient scheduling.
                                        Free initial consultation or home assessment for all new clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <footer className="text-center bg-blue-800 text-white md:p-8 p-3 rounded-lg">
                        <h2 className="md:text-3xl text-xl font-bold mb-4">
                            Ready to Experience Premium Mother and Baby Care at Home?
                        </h2>
                        <p className="text-xl mb-6">
                            Contact us today to book your personalized mother and baby care at home Chandigarh services
                        </p>
                        <div className="flex justify-center flex-col md:flex-row gap-4 space-x-4">
                            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                <Link
                                    href="tel:+918307190216"
                                >

                                    Call Now
                                </Link>
                            </button>
                            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                <Link
                                    href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                    WhatsApp
                                </Link>
                            </button>
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
