// app/icu-at-home/panchkula/page.tsx
import Script from 'next/script';
import Image from 'next/image';
import BookService from '@/components/bookservice';
import { FaHeart, FaHome, FaUsers, FaShieldAlt, FaClock, FaPhone, FaStethoscope, FaAmbulance, FaUserMd, FaMapMarkerAlt, FaHospital, FaMobile, FaLaptop, FaQuestionCircle } from 'react-icons/fa';
import Link from 'next/link';
export const metadata = {
  title: "ICU at Home in Panchkula | ICU Nurse & Equipment – CareKwik", // 58 chars
  description:
    "Get advanced ICU setup at home in Panchkula with ventilator, cardiac monitor, suction & ICU-trained nurses. Reliable, 24x7 critical care by CareKwik.", // 157 chars
  keywords: [
    "ICU at home Panchkula",
    "ICU nurse Panchkula",
    "home ICU care Panchkula",
    "ventilator rental Panchkula",
    "ICU setup at home Panchkula",
    "ICU equipment Panchkula",
    "CareKwik ICU services Panchkula"
  ],
  alternates: {
    canonical: "https://carekwik.com/icu-at-home/panchkula",
  },
};


export default function ICUHomePanchkula() {
  return (
    <>
      <Script id="ld-pkl-icu" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - ICU at Home Panchkula",
          "url": "https://carekwik.com/icu-at-home/panchkula",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163948/icu-home-care_carekwik.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Panchkula",
            "addressRegion": "Haryana",
            "postalCode": "134109",
            "addressCountry": "IN"
          },
          "priceRange": "₹₹₹",
          "openingHours": "Mo-Su 09:00-20:00",
          "areaServed": ["Panchkula", "Manimajra", "Kalka", "Pinjore"]
        })}
      </Script>
      <Script id="ld-faq-icu" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services are included in ICU at Home in Panchkula?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ICU at Home in Panchkula includes ventilator support, cardiac monitoring, oxygen therapy, ICU beds, and 24/7 trained ICU nurses."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can you set up ICU care at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We can set up ICU care within a few hours of your request, depending on equipment availability."
              }
            },

            {
              "@type": "Question",
              "name": "Is home ICU care safe for critical patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our home ICU services are designed to provide hospital-level care with trained professionals and advanced equipment."
              }
            },
            {
              "@type": "Question",
              "name": "What is the cost of ICU at Home in Panchkula?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost varies based on the duration of care and equipment needed. We provide transparent pricing after assessing your requirements."
              }
            },
            {
              "@type": "Question",
              "name": "Is ICU at Home suitable for elderly patients in Panchkula?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, ICU at Home is ideal for elderly patients who need critical care but prefer the comfort of their home. It helps avoid hospital-acquired infections and provides personalized attention."
              }
            },
          ]




        })}
      </Script>
      <div className=" mx-auto md:p-10 md:p-10 p-4">
        {/* Hero Image */}
        <div className="flex md:gap-10 flex-col md:flex-row justify-between   ">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751540954/wmremove-transformed_5_rcxaud.jpg"
            alt="ICU setup at home in Panchkula"
            width={480}
            height={450}
            className="rounded-2xl   shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="text-xl font-bold mb-4">Book ICU Setup in Panchkula</p>
            <BookService servicename="ICU at Home" />
          </div>
        </div>
       
        <div className="max-w-6xl mx-auto bg-white my-10 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 ">
            <div className="flex items-center gap-3 mb-4">
              <FaHeart size={40} className="text-purple-200 md:block hidden" />
              <div>
                <h1 className="md:text-4xl text-2xl font-bold">ICU at Home in Panchkula</h1>
                <div className="flex items-center gap-2 mt-2">
                  <FaMapMarkerAlt className="text-purple-200 md:block hidden" />
                  <span className="text-xl text-purple-100">Expert Critical Care Services in Panchkula & Surrounding Areas</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-purple-100">Bringing Hospital-Grade Intensive Care to Your Home in Panchkula</p>
          </div>

          {/* Article Content */}
          <div className="md:p-8  p-3 space-y-8">

            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Introduction</h2>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">What is ICU at Home?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>ICU at home Panchkula</strong> is an innovative healthcare service that brings intensive care unit facilities directly to patients&apos; residences. This revolutionary approach allows families in Panchkula to access <strong>home ICU services in Panchkula</strong> without compromising on the quality of medical care their loved ones receive during critical illness or recovery phases.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The concept of <strong>critical care at home Panchkula</strong> transforms traditional healthcare delivery by establishing a fully functional intensive care environment within the comfort and familiarity of the patient&apos;s own home, ensuring both medical excellence and emotional well-being.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">Why ICU at Home is Needed</h4>
                  <p className="text-gray-700">
                    The growing demand for <strong>ICU setup at home Panchkula</strong> stems from several factors including the rise in chronic illnesses, increased post-COVID care requirements, and frequent hospital bed shortages. Families are increasingly seeking alternatives that provide comprehensive medical care while maintaining dignity and comfort during challenging times.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-green-800 mb-3">Benefits Over Hospital ICU</h4>
                  <p className="text-gray-700">
                    <strong>Home-based intensive care Panchkula</strong> offers significant advantages including cost-effectiveness, enhanced patient comfort, personalized one-on-one care, reduced infection risks, and the invaluable emotional support of family presence during recovery. Patients receive dedicated attention in a stress-free environment.
                  </p>
                </div>
              </div>
            </section>

            {/* Objectives */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Objectives of ICU at Home Services</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <FaHospital className="text-purple-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hospital-Grade Care</h4>
                    <p className="text-gray-600">Deliver intensive care through professional <strong>ICU bed at home Panchkula</strong> setup with advanced medical equipment and expert supervision.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <FaShieldAlt className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Risk Reduction</h4>
                    <p className="text-gray-600">Minimize infection risks and hospital readmissions through <strong>24/7 ICU at home services in Panchkula</strong>.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <FaHeart className="text-red-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Enhanced Recovery</h4>
                    <p className="text-gray-600">Improve patient comfort, recovery outcomes, and meaningful family involvement in care decisions.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Services */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Key Services Offered</h2>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">Medical Equipment & Infrastructure</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Advanced <strong>ventilator support at home in Panchkula</strong> with state-of-the-art respiratory equipment</li>
                      <li>• Comprehensive cardiac monitors and infusion pumps for precise medication delivery</li>
                      <li>• Professional <strong>oxygen support at home Panchkula</strong> with concentrators and backup systems</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Complete <strong>setup ICU bed at home Panchkula</strong> with adjustable features and safety mechanisms</li>
                      <li>• 24x7 power backup systems and continuous monitoring devices</li>
                      <li>• Suction machines and emergency resuscitation equipment</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-green-800 mb-4">Clinical Support</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>ICU-trained nurses for home care Panchkula</strong> with specialized critical care certifications</li>
                      <li>• <strong>Doctor-supervised ICU care at home Panchkula</strong> with regular physician consultations</li>
                      <li>• Advanced <strong>tele-ICU services Panchkula</strong> for round-the-clock medical oversight</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>24x7 critical care at home Panchkula</strong> with emergency response protocols</li>
                      <li>• Professional medication and IV infusion management</li>
                      <li>• Immediate escalation protocols for critical situations</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-purple-800 mb-4">Additional Support Services</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Specialized physiotherapy for bedridden patients and mobility restoration</li>
                      <li>• Professional nutrition and diet planning for optimal recovery</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Comprehensive pain management and <strong>palliative ICU care at home Panchkula</strong></li>
                      <li>• Compassionate end-of-life care when applicable with dignity and comfort</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Staffing and Clinical Team */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Staffing and Clinical Team</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">ICU-Trained Nurses</h4>
                    <p className="text-gray-700 text-sm"><strong>Critical care nursing at home Panchkula</strong> with BLS/ACLS certified professionals</p>
                  </div>

                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Critical Care Specialists</h4>
                    <p className="text-gray-700 text-sm">On-call critical care specialist (MD/DM) for medical oversight and decision-making</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Respiratory Therapists</h4>
                    <p className="text-gray-700 text-sm">Expert <strong>ventilator management at home Panchkula</strong> and respiratory care specialists</p>
                  </div>

                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Support Team</h4>
                    <p className="text-gray-700 text-sm">Nutritionist and physiotherapist for comprehensive rehabilitation support</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology & Monitoring */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Technology & Monitoring</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Real-Time Monitoring Systems</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Real-time vitals monitoring system with continuous data tracking</li>
                    <li>• Integration with cloud-based health records for comprehensive patient history</li>
                    <li>• Remote consultations via advanced <strong>tele-ICU services Panchkula</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Alert Systems</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Alarm-based alert system for immediate notification of abnormalities</li>
                    <li>• Instant communication channels with medical team</li>
                    <li>• Advanced monitoring devices with backup power systems</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Customized Care Plans */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Customized Care Plans</h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">Assessment Process</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Comprehensive initial home assessment by experienced medical team</li>
                      <li>• Personalized care plan development including duration, equipment, and staffing requirements</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Ongoing Care Management</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Daily progress notes and detailed medical reports</li>
                      <li>• Regular care plan adjustments based on patient progress and recovery milestones</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Target Conditions */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Target Conditions Treated</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Neurological Recovery</h4>
                    <p className="text-gray-700 text-sm">Stroke or coma recovery with specialized monitoring and rehabilitation support</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Respiratory Care</h4>
                    <p className="text-gray-700 text-sm">Post-ventilator weaning care and <strong>tracheostomy care at home Panchkula</strong></p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Post-Surgical Support</h4>
                    <p className="text-gray-700 text-sm"><strong>Post-surgery ICU care at home Panchkula</strong> for optimal recovery</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Chronic Diseases</h4>
                    <p className="text-gray-700 text-sm">End-stage chronic diseases including COPD, CKD, and Cancer management</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">COVID/Post-COVID Care</h4>
                    <p className="text-gray-700 text-sm">Specialized COVID and post-COVID care with advanced lung support systems</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Senior Care</h4>
                    <p className="text-gray-700 text-sm"><strong>ICU care at home for senior citizens Panchkula</strong> with age-specific protocols</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Safety & Hygiene */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Safety and Hygiene Protocols</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">Equipment Safety</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complete sterilization of all medical equipment before installation</li>
                    <li>• Regular equipment maintenance and calibration schedules</li>
                    <li>• <strong>Advanced life support at home Panchkula</strong> with emergency equipment readiness</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Infection Control</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• PPE kits and comprehensive infection control measures</li>
                    <li>• Daily sanitization routine following hospital-grade protocols</li>
                    <li>• Trained staff in advanced hygiene and safety procedures</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pricing Models */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Pricing Models</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800 mb-3">Flexible Packages</h4>
                  <p className="text-gray-700">Daily, weekly, or monthly packages for <strong>affordable ICU at home Panchkula</strong> services</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-800 mb-3">Transparent Pricing</h4>
                  <p className="text-gray-700">Clear equipment and staffing charges with detailed cost comparison to hospital ICU</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800 mb-3">Insurance Support</h4>
                  <p className="text-gray-700">Insurance or third-party reimbursement support assistance for eligible patients</p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <p className="text-center text-gray-700">
                  Our <strong>rent ICU equipment for home Panchkula</strong> services offer comprehensive packages that include all necessary medical equipment, professional staffing, and ongoing support at competitive rates.
                </p>
              </div>
            </section>

            {/* Areas Covered */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Areas Covered</h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-800 mb-4">Comprehensive Coverage Across Panchkula Region</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Primary Coverage Areas:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Complete Panchkula sectors coverage including Sector 5, 11, and 20</li>
                      <li>• Specialized <strong>ICU care Sector 6 Panchkula</strong> with dedicated response teams</li>
                      <li>• <strong>Panchkula ICU home care near me</strong> with rapid response capabilities</li>
                      <li>• <strong>Private ICU care at home Panchkula</strong> for all residential areas</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Extended Service Areas:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>ICU at home services near Pinjore, Kalka, Zirakpur</strong> with comprehensive coverage</li>
                      <li>• <strong>ICU home care Tricity (Panchkula, Chandigarh, Mohali)</strong> coordination</li>
                      <li>• <strong>Emergency home ICU services Panchkula</strong> across all covered regions</li>
                      <li>• 24x7 emergency service availability throughout the coverage area</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FaQuestionCircle className="text-purple-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">What is the difference between ICU at home and hospital ICU?</h4>
                      <p className="text-gray-700">
                        <strong>ICU patient care at home Panchkula</strong> provides the same level of medical equipment and expert supervision as hospital ICU but in the comfort of your home, with personalized one-on-one care, reduced infection risk, and family involvement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FaQuestionCircle className="text-purple-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Is the care supervised by a doctor?</h4>
                      <p className="text-gray-700">
                        Yes, all care is supervised by qualified critical care specialists with regular visits, teleconsultations, and 24/7 medical oversight to ensure optimal patient outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FaQuestionCircle className="text-purple-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">What happens in case of an emergency?</h4>
                      <p className="text-gray-700">
                        We have comprehensive emergency protocols including <strong>urgent ICU setup at home Panchkula</strong> capabilities, immediate medical response, and <strong>hospital to home ICU transfer Panchkula</strong> coordination when needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact & Booking */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">Contact and Booking</h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <FaPhone className="mx-auto mb-3 text-purple-600" size={32} />
                    <h4 className="font-semibold text-gray-800 mb-2">Emergency Hotline</h4>
                    <p className="text-gray-700">24/7 emergency hotline for <strong>emergency ICU service at home Panchkula</strong> requests</p>
                  </div>

                  <div className="text-center">
                    <FaHome className="mx-auto mb-3 text-blue-600" size={32} />
                    <h4 className="font-semibold text-gray-800 mb-2">Free Assessment</h4>
                    <p className="text-gray-700">Free home assessment request to evaluate patient needs and home suitability</p>
                  </div>

                  <div className="text-center">
                    <FaMobile className="mx-auto mb-3 text-green-600" size={32} />
                    <h4 className="font-semibold text-gray-800 mb-2">Digital Booking</h4>
                    <p className="text-gray-700">Online booking portal and WhatsApp/app-based coordination for convenience</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-700 text-lg">
                    Experience exceptional <strong>ICU at home Panchkula</strong> services with our dedicated team of healthcare professionals.
                    We are committed to providing the highest quality critical care in the safety and comfort of your home.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white md:p-8  p-3 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Get Premium ICU Care at Home in Panchkula</h2>
              <p className="text-xl mb-6">
                Transform your healthcare experience with our comprehensive <strong>home ICU services in Panchkula</strong>.
                We bring the expertise and equipment of hospital ICU directly to your home with compassionate, professional care.
              </p>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Link
                  href="https://wa.me/9170158755541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer">

                  <button className="bg-white text-purple-800 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition duration-300">
                    Request Free Assessment
                  </button>
                </Link>
                <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-purple-800 transition duration-300">
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
