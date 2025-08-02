// app/icu-at-home/mohali/page.tsx
import Script from 'next/script';
import Image from 'next/image';
import BookService from '@/components/bookservice';
import { FaHeart, FaHome, FaUsers, FaShieldAlt, FaClock, FaPhone, FaStethoscope, FaAmbulance, FaUserMd, FaMapMarkerAlt, FaHospital, FaMobile, FaLaptop } from 'react-icons/fa';
import Link from 'next/link';
export const metadata = {
  title: "ICU at Home in Mohali | Nurse, Ventilator & ICU Setup – CareKwik", // 59 characters
  description:
    "Get hospital-level ICU setup at home in Mohali. Includes ventilator, monitors, ICU nurse & suction. Fast, safe & affordable critical care by CareKwik.", // 158 characters
  keywords: [
    "ICU setup at home Mohali",
    "ICU care at home Mohali",
    "ICU nurse Mohali",
    "ventilator at home Mohali",
    "ICU bed on rent Mohali",
    "critical care at home Mohali",
    "CareKwik ICU services Mohali"
  ],
  alternates: {
    canonical: "https://carekwik.com/icu-at-home/mohali",
  },
};

export default function ICUHomeMohali() {
  return (
    <>
      <Script id="ld-mohali-icu" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - ICU at Home Mohali",
          "url": "https://carekwik.com/icu-at-home/mohali",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163948/icu-home-care_carekwik.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mohali",
            "addressRegion": "Punjab",
            "postalCode": "160062",
            "addressCountry": "IN"
          },
          "priceRange": "₹₹₹",
          "openingHours": "Mo-Su 09:00-20:00",
          "areaServed": ["Mohali", "Kharar", "Zirakpur"]
        })}
      </Script>
      <Script id="ld-faq-icu" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",

          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is included in ICU at Home service in Mohali?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ICU at Home in Mohali includes ventilator, cardiac monitors, suction machines, ICU beds, oxygen support, and 24x7 trained ICU nurses."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can you set up ICU care at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We can set up ICU care at home within 6-12 hours in most Mohali locations."
              }
            },
            {
              "@type": "Question",
              "name": "Is the ICU setup safe for critical patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our ICU setup is designed to provide hospital-level care in the comfort of your home, ensuring patient safety and comfort."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide trained nurses for ICU care?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide certified ICU nurses with extensive critical care experience."
              }
            },
            {
              "@type": "Question",
              "name": "What areas do you serve in Mohali?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all major areas in Mohali including Kharar, Zirakpur, and surrounding regions."
              }
            }
          ]

        })}
      </Script>
      <div className="mx-auto p-4 md:p-10">
        <div className="flex flex-col md:flex-row md:gap-10">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751540954/wmremove-transformed_5_rcxaud.jpg"
            alt="ICU setup at home in Mohali"
            width={480}
            height={450}
            className="rounded-2xl   shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="text-xl font-bold mb-4">Book ICU Setup in Mohali</p>
            <BookService servicename="ICU at Home" />
          </div>
        </div>


        <div className="max-w-6xl my-10 mx-auto ">
          {/* Header */}
          <div className="md:p-8  p-3">
            <div className="flex items-center gap-3 mb-4">
              <FaHeart size={40} className="hidden md:block text-red-600" />
              <div>
                <h1 className="md:text-4xl text-2xl font-bold">ICU Setup at Home in Mohali</h1>
                <div className="flex md:items-center gap-2 mt-2">
                  <FaMapMarkerAlt className="hidden md:block" />
                  <span className="md:text-xl ">Advanced Critical Care Services in Mohali & Surrounding Areas</span>
                </div>
              </div>
            </div>
            <p className="md:text-xl text-gray-600">Bringing Hospital-Level Intensive Care to Your Doorstep in Mohali</p>
          </div>

          {/* Article Content */}
          <div className="md:p-8  p-3 space-y-8">

            {/* Introduction */}
            <section>
              <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Introduction</h2>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Growing Demand for Home-Based Critical Care</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The healthcare landscape in Mohali has witnessed a significant transformation with the increasing demand for <strong>ICU at home Mohali</strong> services. As families seek alternatives to traditional hospital-based intensive care, <strong>home ICU services in Mohali</strong> have emerged as a compassionate and practical solution for critical care patients requiring continuous medical attention.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This innovative approach to healthcare delivery ensures that patients receive hospital-grade medical care while maintaining the emotional comfort and dignity of being surrounded by loved ones in familiar surroundings.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">Preferred Alternative to Hospital ICU</h4>
                  <p className="text-gray-700">
                    <strong>ICU care at home Mohali</strong> offers numerous advantages over traditional hospital-based intensive care, including reduced infection risks, personalized attention, family involvement, and significant cost savings. Patients benefit from one-on-one care in a stress-free environment while maintaining access to advanced medical equipment and expert supervision.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-purple-800 mb-3">Healthcare Landscape in Mohali</h4>
                  <p className="text-gray-700">
                    Mohali&apos;s robust healthcare infrastructure, combined with its growing population and increasing healthcare awareness, has created an ideal environment for <strong>critical care at home Mohali</strong> services. The city&apos;s well-planned sectors and accessibility make it particularly suitable for comprehensive home-based medical care delivery.
                  </p>
                </div>
              </div>
            </section>

            {/* Objectives */}
            <section>
              <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Objectives of ICU at Home</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <FaHospital className="text-green-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hospital-Level Care</h4>
                    <p className="text-gray-600">Deliver intensive care services through <strong>ICU setup at home Mohali</strong> with advanced medical equipment and expert supervision.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <FaShieldAlt className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Reduce Risks</h4>
                    <p className="text-gray-600">Minimize hospital readmissions and infection risks through <strong>home intensive care Mohali</strong> services.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <FaHeart className="text-red-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Emotional Comfort</h4>
                    <p className="text-gray-600">Provide emotional and physical comfort to critical patients and families in familiar home environment.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Patient Profiles */}
            <section>
              <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Patient Profiles Suitable for Home ICU</h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Post-ICU Discharge Patients</h4>
                    <p className="text-gray-700">
                      Comprehensive <strong>post-ICU home care services in Mohali</strong> for patients transitioning from hospital intensive care units who require continued monitoring and specialized care during their recovery phase.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Chronic Illness Patients</h4>
                    <p className="text-gray-700">
                      Patients with chronic conditions requiring <strong>ventilator support at home in Mohali</strong> including COPD, respiratory failure, and other long-term breathing difficulties.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">Palliative Care Patients</h4>
                    <p className="text-gray-700">
                      Compassionate end-of-life care and <strong>ICU care for elderly at home in Mohali</strong> ensuring dignity and comfort during difficult times.
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-yellow-800 mb-3">Neurological & Cardiac Cases</h4>
                    <p className="text-gray-700">
                      Specialized monitoring and care for neurological or cardiac patients requiring close observation and <strong>24/7 ICU at home services in Mohali</strong>.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">COVID/Post-COVID Patients</h4>
                  <p className="text-gray-700">
                    Specialized care for COVID-19 and post-COVID patients requiring respiratory support, monitoring, and rehabilitation services through our <strong>home-based critical care in Mohali</strong> programs.
                  </p>
                </div>
              </div>
            </section>

            {/* Core Services */}
            <section>
              <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Core Services Offered</h2>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">24x7 Monitoring and Support</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Trained ICU nurses at home Mohali</strong> with BSc/GNM qualifications and extensive ICU experience</li>
                      <li>• Advanced <strong>remote ICU monitoring Mohali</strong> systems with real-time vitals tracking</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Automated alarm systems and instant notifications for critical changes</li>
                      <li>• <strong>Real-time patient monitoring at home Mohali</strong> with cloud-based data management</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-green-800 mb-4">Advanced Medical Equipment</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Professional <strong>home ventilator service Mohali</strong> with latest ventilator technology</li>
                      <li>• <strong>BiPAP/CPAP at home Mohali</strong> for non-invasive respiratory support</li>
                      <li>• <strong>Cardiac monitor at home Mohali</strong> for continuous heart rhythm monitoring</li>
                      <li>• <strong>Infusion pump for home ICU Mohali</strong> for precise medication delivery</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Oxygen concentrator home delivery Mohali</strong> with backup supply systems</li>
                      <li>• Advanced suction machines and syringe pumps</li>
                      <li>• Defibrillator equipment for emergency cardiac interventions when needed</li>
                      <li>• Complete <strong>ICU equipment on rent for home Mohali</strong> solutions</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-purple-800 mb-4">Doctor Oversight</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Critical care doctor home visit Mohali</strong> by experienced intensivists</li>
                      <li>• <strong>Tele-ICU services Mohali</strong> for round-the-clock medical consultation</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Emergency response protocols and rapid intervention capabilities</li>
                      <li>• Seamless coordination with hospitals for escalation when needed</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Diagnostics & Pharmacy Support</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Comprehensive lab tests at home including CBC, ABG, and other critical parameters</li>
                      <li>• Medicine delivery and stock management services</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Regular diagnostic monitoring and reporting</li>
                      <li>• Coordination with local pharmacies for medication supply</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-red-800 mb-4">Palliative and Psychological Support</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Comprehensive pain management protocols</li>
                      <li>• Professional counseling for patients and families</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Spiritual and emotional support services</li>
                      <li>• <strong>Home nursing for ICU patients in Mohali</strong> with compassionate care focus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Staffing and Training */}
            <section>
              <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Staffing and Training</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">ICU-Certified Nurses</h4>
                    <p className="text-gray-700 text-sm"><strong>ICU-trained nurses at home Mohali</strong> with specialized critical care training and certifications</p>
                  </div>

                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Critical Care Doctors</h4>
                    <p className="text-gray-700 text-sm">On-call intensivists and <strong>home care intensivist Mohali</strong> specialists for medical oversight</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Therapy Specialists</h4>
                    <p className="text-gray-700 text-sm"><strong>Respiratory therapist at home Mohali</strong> and physiotherapists for comprehensive care</p>
                  </div>

                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Care Coordinators</h4>
                    <p className="text-gray-700 text-sm">Dedicated coordinators for daily reporting and family communication</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Integration */}
            <section>
              <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Technology Integration</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <FaLaptop className="mx-auto mb-3 text-blue-600" size={32} />
                  <h4 className="font-semibold text-gray-800 mb-2">Real-Time Data Transmission</h4>
                  <p className="text-gray-700 text-sm"><strong>Digital ICU at home Mohali</strong> with instant health data transmission to doctors</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <FaStethoscope className="mx-auto mb-3 text-green-600" size={32} />
                  <h4 className="font-semibold text-gray-800 mb-2">EMR System</h4>
                  <p className="text-gray-700 text-sm">Electronic Medical Record system for comprehensive patient history management</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <FaMobile className="mx-auto mb-3 text-purple-600" size={32} />
                  <h4 className="font-semibold text-gray-800 mb-2">Mobile App</h4>
                  <p className="text-gray-700 text-sm">Dedicated mobile application for family updates, alerts, and communication</p>
                </div>
              </div>
            </section>

            {/* Custom Care Plans */}
            <section>
              <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Custom Care Plans</h2>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Initial Assessment Process</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Comprehensive initial assessment by experienced intensivist</li>
                      <li>• Customized setup based on specific diagnosis and prognosis</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Ongoing Care Management</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Daily medical review and detailed reporting</li>
                      <li>• End-of-life care planning when required with family consultation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing and Packages */}
            <section>
              <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Pricing and Packages</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-800 mb-3">Bundled Packages</h4>
                  <p className="text-gray-700">Equipment rental + nursing care bundled packages for <strong>affordable ICU care at home in Mohali</strong></p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800 mb-3">Flexible Duration</h4>
                  <p className="text-gray-700">Hourly, daily, and monthly plans tailored to patient needs and recovery timelines</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800 mb-3">Transparent Costs</h4>
                  <p className="text-gray-700">Clear, transparent cost structure compared to traditional hospital ICU charges</p>
                </div>
              </div>
            </section>

            {/* Safety & Protocols */}
            <section>
              <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Safety, Hygiene, and Protocols</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <FaShieldAlt className="mx-auto mb-3 text-red-600" size={28} />
                  <h4 className="font-semibold text-gray-800 mb-2">Infection Control</h4>
                  <p className="text-gray-700 text-sm">Strict infection control procedures implemented at home settings</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <FaAmbulance className="mx-auto mb-3 text-orange-600" size={28} />
                  <h4 className="font-semibold text-gray-800 mb-2">Emergency Escalation</h4>
                  <p className="text-gray-700 text-sm">Well-defined emergency escalation process with rapid response capabilities</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <FaClock className="mx-auto mb-3 text-blue-600" size={28} />
                  <h4 className="font-semibold text-gray-800 mb-2">Quality Audits</h4>
                  <p className="text-gray-700 text-sm">Regular audits and quality checks ensuring highest standards of care</p>
                </div>
              </div>
            </section>

            {/* Geographic Coverage */}
            <section>
              <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Geographic Coverage</h2>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-800 mb-4">Comprehensive Coverage Across Mohali Region</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Primary Coverage Areas:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Complete Mohali coverage from Phase 1 to Phase 11</li>
                      <li>• <strong>ICU services in Phase 7 Mohali</strong> and surrounding residential areas</li>
                      <li>• <strong>Home ICU in Kharar Mohali</strong> with dedicated service teams</li>
                      <li>• Extended coverage to Aerocity and Landran developments</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Extended Service Areas:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>ICU care at home Chandigarh Mohali Zirakpur</strong> corridor</li>
                      <li>• <strong>ICU at home near me Mohali</strong> with quick response times</li>
                      <li>• Nearby locations including Panchkula and surrounding areas</li>
                      <li>• <strong>Emergency ICU setup at home Mohali</strong> across all covered regions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact & Onboarding */}
            <section>
              <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Contact and Onboarding</h2>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <FaPhone className="mx-auto mb-3 text-blue-600" size={32} />
                    <h4 className="font-semibold text-gray-800 mb-2">Emergency Helpline</h4>
                    <p className="text-gray-700">24/7 emergency helpline for immediate ICU setup requests and medical emergencies</p>
                  </div>

                  <div className="text-center">
                    <FaHome className="mx-auto mb-3 text-green-600" size={32} />
                    <h4 className="font-semibold text-gray-800 mb-2">Service Request</h4>
                    <p className="text-gray-700">Simple process to request setup with immediate response and assessment scheduling</p>
                  </div>

                  <div className="text-center">
                    <FaUserMd className="mx-auto mb-3 text-purple-600" size={32} />
                    <h4 className="font-semibold text-gray-800 mb-2">Consultation</h4>
                    <p className="text-gray-700">Professional consultation scheduling and comprehensive home visit assessment</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-700 text-lg">
                    Experience exceptional <strong>ICU at home Mohali</strong> services with our dedicated team of healthcare professionals.
                    We are committed to providing the highest quality critical care in the comfort and safety of your home.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-green-600 to-green-800 text-white md:p-8  p-3 rounded-lg text-center">
              <h2 className="md:text-2xl text-xl font-bold mb-4">Get Premium ICU Care at Home in Mohali</h2>
              <p className="text-xl mb-6">
                Transform your healthcare experience with our comprehensive <strong>home ICU services in Mohali</strong>.
                We bring the expertise and equipment of hospital ICU directly to your home with compassionate, professional care.
              </p>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Link 
                href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer">
                <button className="bg-white text-green-800 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition duration-300">
                  Schedule Free Assessment
                </button>
                </Link>
                <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-green-800 transition duration-300">
                  Emergency ICU Setup
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
