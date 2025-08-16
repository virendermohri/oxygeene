import BookService from '@/components/bookservice';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
  FaUserMd,
  FaHeart,
  FaHome,
  FaStethoscope,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaHandsHelping,
  FaAmbulance,
  FaMobile,
  FaMapMarkerAlt,
  FaSyringe,
  FaBed
} from 'react-icons/fa';
import {
  MdHealthAndSafety,
  MdMonitorHeart,
  MdElderly,
  MdBabyChangingStation,
  MdLocalHospital,
  MdSecurity
} from 'react-icons/md';
import { RiNurseFill } from 'react-icons/ri';
export const metadata = {
  title: 'Home Nursing Care in Chandigarh, Mohali & Panchkula | Trained Nurses',
  description:
    'Hire trained nurses for post-surgery care, injections, wound dressing, and elderly nursing at home in Chandigarh, Mohali & Panchkula. Trusted by 500+ families.',
  keywords: [
    'nursing care at home Chandigarh',
    'home nurse Mohali',
    'patient care Panchkula',
    'ICU trained nurse at home',
    'post operative care at home',
    'elder care nurse Chandigarh',
    'wound dressing at home',
    'female nurse for injection Mohali',
    'home healthcare Panchkula',
  ],
  alternates: {
    canonical: 'https://carekwik.com/nursing-care-at-home',
  },
};

export default function NursingCareAtHome() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script id="ld-localbusiness" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - Nursing Care at Home",
          "@id": "https://carekwik.com/nursing-care-at-home#carekwik",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
          "url": "https://carekwik.com/nursing-care-at-home",
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
          "description": "Trained nursing staff for injections, dressing, post-operative care, ICU support at home. Available across Chandigarh, Mohali, and Panchkula.",
          "areaServed": ["Chandigarh", "Mohali", "Panchkula"]
        })}
      </Script>

      <Script id="ld-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you provide post-surgery nursing care at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide post-operative nursing care including wound dressing, injections, vitals monitoring and more."
              }
            },
            {
              "@type": "Question",
              "name": "Can I book a female nurse at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can request a female nurse for elderly, female, or child care needs."
              }
            },
            {
              "@type": "Question",
              "name": "Do you serve Mohali and Panchkula as well?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely, we provide nursing services at home in Chandigarh, Mohali, and Panchkula."
              }
            },
            {
              "@type": "Question",
              "name": "What types of conditions do nurses support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We handle ICU care, post-surgical recovery, catheter insertion, feeding tube support, elderly assistance, and more."
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
            alt="Home nursing care service CareKwik"
            width={500}
            height={400}
            className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="text-2xl font-bold mb-4">Book Nursing Care at Home</p>
            <BookService servicename="Nursing Care" />
          </div>
        </div>
        <div className="max-w-6xl mx-auto md:p-6 p-3 bg-white">
          {/* Header */}
          <header className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <RiNurseFill className="text-4xl text-blue-500 mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Nursing Care at Home
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional home nursing services providing comprehensive medical care in the comfort of your home
            </p>
          </header>

          {/* Introduction Section */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaHeart className="text-2xl text-red-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
            </div>
            <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-4">
                At-home nursing care represents a revolutionary approach to healthcare delivery that brings professional
                medical services directly to patients&apos; homes. This comprehensive model of care has gained tremendous
                popularity as families seek alternatives to traditional hospital-based treatment, recognizing the
                numerous benefits of receiving medical attention in familiar, comfortable surroundings.
              </p>
              <p className="text-gray-700 mb-4">
                The importance of home-based nursing versus hospital care cannot be overstated. Patients recover faster,
                experience reduced stress, and maintain their independence while receiving the same quality medical
                attention they would receive in institutional settings. Home nursing services have become essential
                for managing chronic conditions, post-operative recovery, and providing specialized care for vulnerable
                populations including elderly patients and those with complex medical needs.
              </p>
              <p className="text-gray-700">
                There is a growing demand for professional home nursing as healthcare systems evolve to prioritize
                patient-centered care. Families increasingly recognize that a trained nurse for home care can provide
                personalized attention that is often impossible in busy hospital environments, making nursing services
                near me one of the most sought-after healthcare solutions today.
              </p>
            </div>
          </section>

          {/* Objectives Section */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <MdHealthAndSafety className="text-2xl text-green-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Objectives of Home Nursing Care</h2>
            </div>
            <div className="grid md:grid-cols-2 gamd:p-6 p-3">
              <div className="bg-green-50 p-5 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Primary Healthcare Goals</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Provide professional medical care at home with qualified nursing staff</li>
                  <li>• Ensure patient comfort and faster recovery in familiar environments</li>
                  <li>• Reduce hospital readmissions through continuous monitoring</li>
                  <li>• Support families with trained medical staff and guidance</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Care Quality Enhancement</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Deliver personalized one-on-one medical attention</li>
                  <li>• Maintain continuity of care across different health conditions</li>
                  <li>• Provide emotional support alongside medical treatment</li>
                  <li>• Ensure safety and hygiene protocols in home settings</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Types of Nursing Care Services */}
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <FaStethoscope className="text-2xl text-purple-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Comprehensive Nursing Care Services</h2>
            </div>

            {/* Basic Nursing Care */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <MdMonitorHeart className="text-xl text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Basic Nursing Care</h3>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Our home nurse for patient care provides essential medical services including comprehensive
                  health monitoring and basic medical interventions:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Monitoring Services:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Vital signs monitoring (blood pressure, sugar, oxygen levels)</li>
                      <li>• Daily health assessments and documentation</li>
                      <li>• Temperature and pulse monitoring</li>
                      <li>• Respiratory rate evaluation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Medical Interventions:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Medication administration and injection services</li>
                      <li>• Wound dressing at home and bandage changes</li>
                      <li>• Injection and IV care at home</li>
                      <li>• Basic medical equipment maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized Nursing Care */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <MdLocalHospital className="text-xl text-green-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Specialized Nursing Care</h3>
              </div>
              <div className="bg-green-50 p-5 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Advanced medical care tailored to specific conditions and patient populations:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">Condition-Specific Care:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Post-surgery nursing care at home</li>
                      <li>• Home nurse for diabetes patients management</li>
                      <li>• Stroke patient nursing care at home</li>
                      <li>• Chronic illness management (hypertension, etc.)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">Population-Specific Services:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Elderly nursing care at home and geriatric support</li>
                      <li>• Pediatric nursing care at home</li>
                      <li>• Maternity and newborn care at home</li>
                      <li>• Home nursing for senior citizens</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Critical & Advanced Nursing */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <FaAmbulance className="text-xl text-red-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Critical & Advanced Nursing</h3>
              </div>
              <div className="bg-red-50 p-5 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Intensive medical care for critically ill patients requiring specialized equipment and expertise:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">Intensive Care Services:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• ICU nursing care at home with ventilator management</li>
                      <li>• Ventilator care at home and oxygen therapy</li>
                      <li>• Home nurse for bedridden patients</li>
                      <li>• 24-hour nursing care at home for critical cases</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">Specialized Procedures:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Tracheostomy care at home</li>
                      <li>• Catheter care at home</li>
                      <li>• Palliative care nursing at home</li>
                      <li>• End-of-life care and family support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Nursing Staff & Qualifications */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <RiNurseFill className="text-2xl text-indigo-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Professional Nursing Staff & Qualifications</h2>
            </div>
            <div className="bg-indigo-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-4">
                Our nursing care agency employs highly qualified healthcare professionals with diverse specializations
                to meet various patient care requirements:
              </p>
              <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3">Nursing Categories:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Registered Nurses (RNs):</strong> Advanced medical training and clinical expertise</li>
                    <li>• <strong>General Duty Assistants (GDAs):</strong> Basic nursing care and patient support</li>
                    <li>• <strong>Specialized ICU Nurses:</strong> Critical care and advanced life support</li>
                    <li>• <strong>Trained nursing attendant at home:</strong> Daily care assistance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3">Training & Certifications:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• B.Sc Nursing degree holders with clinical experience</li>
                    <li>• General Nursing and Midwifery (GNM) certified professionals</li>
                    <li>• Auxiliary Nurse Midwife (ANM) qualified staff</li>
                    <li>• Continuous professional development and skill enhancement</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits of Nursing Care at Home */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaHome className="text-2xl text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Benefits of Professional Home Care Nursing</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <FaHeart className="text-3xl text-orange-500 mx-auto mb-3" />
                <h4 className="font-semibold text-orange-800 mb-2">Personalized Care</h4>
                <p className="text-gray-700 text-sm">One-on-one attention tailored to individual patient needs</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <MdHealthAndSafety className="text-3xl text-orange-500 mx-auto mb-3" />
                <h4 className="font-semibold text-orange-800 mb-2">Cost-Effective</h4>
                <p className="text-gray-700 text-sm">Affordable home nursing services compared to hospital stays</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <FaHome className="text-3xl text-orange-500 mx-auto mb-3" />
                <h4 className="font-semibold text-orange-800 mb-2">Comfort & Familiarity</h4>
                <p className="text-gray-700 text-sm">Recovery in comfortable, familiar surroundings</p>
              </div>
            </div>
            <div className="mt-4 bg-orange-50 p-4 rounded-lg">
              <p className="text-gray-700 text-center">
                <strong>Additional Benefits:</strong> Reduced risk of hospital-acquired infections, emotional support
                for patients and families, nursing care for elderly parents at home, and enhanced quality of life
              </p>
            </div>
          </section>

          {/* Patient Assessment & Care Plans */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <MdMonitorHeart className="text-2xl text-teal-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Patient Assessment & Customized Care Plans</h2>
            </div>
            <div className="bg-teal-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-4">
                Every patient receives a comprehensive initial health assessment conducted by qualified doctors and nurses
                to develop personalized care strategies:
              </p>
              <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                <div>
                  <h4 className="font-semibold text-teal-800 mb-3">Assessment Process:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Comprehensive medical history review</li>
                    <li>• Physical examination and health evaluation</li>
                    <li>• Family consultation and care preference discussion</li>
                    <li>• Risk assessment and safety planning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800 mb-3">Care Plan Development:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Tailored short-term and long-term care plans</li>
                    <li>• Progress tracking and regular family updates</li>
                    <li>• Periodic re-evaluation of patient needs</li>
                    <li>• Adjustment of care protocols as needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Integration */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaMobile className="text-2xl text-purple-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Technology Integration</h2>
            </div>
            <div className="bg-purple-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-4">
                Modern healthcare technology enhances the quality and efficiency of our nursing care packages at home:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <MdMonitorHeart className="text-2xl text-purple-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-800">Remote Monitoring</h4>
                  <p className="text-sm text-gray-600">Advanced BP, sugar, and ECG monitoring devices</p>
                </div>
                <div className="text-center">
                  <FaUserMd className="text-2xl text-purple-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-800">Teleconsultation</h4>
                  <p className="text-sm text-gray-600">Virtual doctor consultations and medical guidance</p>
                </div>
                <div className="text-center">
                  <FaMobile className="text-2xl text-purple-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-800">Care Tracking Apps</h4>
                  <p className="text-sm text-gray-600">Mobile applications for real-time care updates</p>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency & Support Services */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaAmbulance className="text-2xl text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Emergency & Support Services</h2>
            </div>
            <div className="bg-red-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-4">
                Our emergency nursing care at home ensures immediate medical response when patients need it most:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border text-center">
                  <FaPhone className="text-2xl text-red-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">24/7 Doctor Support</h4>
                  <p className="text-sm text-gray-600">On-call medical professionals available round-the-clock</p>
                </div>
                <div className="bg-white p-4 rounded-lg border text-center">
                  <FaAmbulance className="text-2xl text-red-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">Emergency Transport</h4>
                  <p className="text-sm text-gray-600">Ambulance coordination for critical situations</p>
                </div>
                <div className="bg-white p-4 rounded-lg border text-center">
                  <MdHealthAndSafety className="text-2xl text-red-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">Immediate Response</h4>
                  <p className="text-sm text-gray-600">Rapid medical intervention for critical patients</p>
                </div>
              </div>
            </div>
          </section>

          {/* Healthcare Provider Collaboration */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <MdLocalHospital className="text-2xl text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Healthcare Provider Collaboration</h2>
            </div>
            <div className="bg-blue-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-4">
                We maintain strong partnerships with healthcare institutions to ensure comprehensive patient care:
              </p>
              <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Healthcare Partnerships:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Strategic tie-ups with leading hospitals and medical centers</li>
                    <li>• Collaboration with diagnostic laboratories for testing services</li>
                    <li>• Pharmacy partnerships for medication management</li>
                    <li>• Specialist doctor networks for consultations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Care Coordination:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Regular reporting to treating physicians</li>
                    <li>• Home sample collection for laboratory tests</li>
                    <li>• Seamless information sharing between healthcare providers</li>
                    <li>• Coordinated treatment planning and follow-up</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing & Packages */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaStar className="text-2xl text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Flexible Pricing & Care Packages</h2>
            </div>
            <div className="bg-yellow-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-4 text-center">
                Choose from our range of flexible care options designed to meet diverse patient needs and budgets
              </p>
              <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">Care Duration Options:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Hourly nursing care:</strong> Flexible hourly rates for specific medical tasks</li>
                    <li>• <strong>12-hour shifts:</strong> Day or night care coverage</li>
                    <li>• <strong>24-hour shifts:</strong> Continuous around-the-clock medical supervision</li>
                    <li>• <strong>Live-in care:</strong> Residential nursing support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">Specialized Care Plans:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Short-term care:</strong> Post-surgery recovery and rehabilitation</li>
                    <li>• <strong>Long-term care:</strong> Chronic condition management and elderly support</li>
                    <li>• <strong>Critical care packages:</strong> Intensive medical monitoring</li>
                    <li>• <strong>Palliative care:</strong> Comfort-focused end-of-life support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Legal, Safety & Ethical Guidelines */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <MdSecurity className="text-2xl text-gray-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Legal, Safety & Ethical Standards</h2>
            </div>
            <div className="bg-gray-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-4">
                We maintain the highest standards of safety, ethics, and legal compliance in all our nursing services:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Staff Verification</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Comprehensive background checks</li>
                    <li>• Professional license verification</li>
                    <li>• Criminal record screening</li>
                    <li>• Reference validation</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Patient Protection</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Strict confidentiality protocols</li>
                    <li>• Data protection compliance</li>
                    <li>• Privacy rights preservation</li>
                    <li>• Consent documentation</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Infection Control</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Rigorous hygiene protocols</li>
                    <li>• Personal protective equipment</li>
                    <li>• Sanitization procedures</li>
                    <li>• Disease prevention measures</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Local Services Coverage */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-2xl text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Service Coverage Areas</h2>
            </div>
            <div className="bg-green-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-4">
                Our comprehensive nursing services are available across major cities and metropolitan areas:
              </p>
              <div className="grid md:grid-cols-2 gamd:p-6 p-3">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Major Cities:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Nursing care at home in Chandigarh and surrounding regions</li>
                    <li>• Nursing services at home in Delhi NCR with complete coverage</li>
                    <li>• Home nurse near me Bangalore with 24/7 availability</li>
                    <li>• Nursing care services Mumbai across all districts</li>
                    <li>• Best home nursing service in Hyderabad and Telangana</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Service Features:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Quick response times in urban areas</li>
                    <li>• Trained local nursing staff</li>
                    <li>• Regional language communication</li>
                    <li>• Cultural sensitivity and awareness</li>
                    <li>• Local healthcare provider partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className=" py-8 px-4 rounded-lg  ">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nursing care at Home in Other Cities</h2>
              <ul className="list-disc list-inside text-blue-700 space-y-2">
                <li><Link href="/nursing-care-at-home/chandigarh" className="hover:underline">Nursing care at Home in Chandigarh</Link></li>
                <li><Link href="/nursing-care-at-home/mohali" className="hover:underline">Nursing care at Home in Mohali</Link></li>
                <li><Link href="/nursing-care-at-home/panchkula" className="hover:underline">Nursing care at Home in Panchkula</Link></li>
              </ul>
            </div>
          </section>
          {/* Testimonials */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaStar className="text-2xl text-yellow-400 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Patient Success Stories</h2>
            </div>
            <div className="bg-yellow-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-4 text-center">
                Real experiences from families who chose our nursing care services for their loved ones
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <FaStar key={star} className="text-yellow-400 text-sm" />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">Post-Surgery Recovery</span>
                  </div>
                  <p className="text-gray-700 text-sm italic">
                    &quot;The post-surgery nursing care at home was exceptional. Our nurse was highly professional
                    and helped my father recover comfortably at home instead of staying in the hospital.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <FaStar key={star} className="text-yellow-400 text-sm" />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">Elderly Care</span>
                  </div>
                  <p className="text-gray-700 text-sm italic">
                    &quot;The nursing care for elderly parents at home service was exactly what we needed.
                    Professional, compassionate care that gave our family peace of mind.&quot;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Future Scope */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaMobile className="text-2xl text-indigo-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Future of Home Nursing</h2>
            </div>
            <div className="bg-indigo-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-4">
                The evolution of home nursing services continues with innovative approaches and expanded accessibility:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-2xl text-indigo-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-800">Geographic Expansion</h4>
                  <p className="text-sm text-gray-600">Extending services to smaller towns and rural areas</p>
                </div>
                <div className="text-center">
                  <FaMobile className="text-2xl text-indigo-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-800">Technology Integration</h4>
                  <p className="text-sm text-gray-600">Advanced patient monitoring and AI-driven care</p>
                </div>
                <div className="text-center">
                  <FaHandsHelping className="text-2xl text-indigo-500 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-800">Community Programs</h4>
                  <p className="text-sm text-gray-600">Community-based nursing and health education initiatives</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaPhone className="text-2xl text-green-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Book Nurse at Home - Contact Information</h2>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 md:p-6 p-3 rounded-lg">
              <p className="text-gray-700 mb-6 text-center">
                Ready to hire nurse for home care? Contact us today to discuss your specific nursing requirements
                and get personalized care solutions for your loved ones.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <FaPhone className="text-2xl text-green-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Emergency Hotline</h4>
                  <p className="text-gray-600">24/7 immediate response for critical care needs</p>
                </div>
                <div className="text-center">
                  <FaWhatsapp className="text-2xl text-green-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">WhatsApp Booking</h4>
                  <p className="text-gray-600">Quick consultation and service scheduling</p>
                </div>
                <div className="text-center">
                  <FaEnvelope className="text-2xl text-green-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Email Consultation</h4>
                  <p className="text-gray-600">Detailed care planning and service information</p>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-sm">
                  <p className="text-gray-800 font-semibold mb-1">Free Initial Assessment</p>
                  <p className="text-gray-600 text-sm">Comprehensive health evaluation and care plan development at no cost</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <footer className="text-center bg-gray-50 md:p-6 p-3 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Experience Professional Nursing Care at Home
            </h3>
            <p className="text-gray-600 mb-4">
              Join thousands of satisfied families who trust our nursing care agency for quality healthcare at home
            </p>
            <div className="flex justify-center items-center space-x-4">
              <RiNurseFill className="text-2xl text-blue-500" />
              <FaHeart className="text-2xl text-red-500" />
              <FaHome className="text-2xl text-green-500" />
              <MdHealthAndSafety className="text-2xl text-orange-500" />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
