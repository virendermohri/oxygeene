// app/icu-at-home/chandigarh/page.tsx
import Script from 'next/script';
import Image from 'next/image';
import BookService from '@/components/bookservice';
import { FaHeart, FaHome, FaUsers, FaShieldAlt, FaClock, FaPhone, FaStethoscope, FaAmbulance, FaUserMd, FaMapMarkerAlt, FaHospital } from 'react-icons/fa';

export const metadata = {
  title: "ICU at Home in Chandigarh | ICU Setup, Nurse & Equipment – CareKwik", // 59 chars
  description:
    "Get ICU setup at home in Chandigarh with ventilator, ICU nurse, oxygen support & monitors. 24x7 critical care by CareKwik – fast, safe & trusted.", // 158 chars
  keywords: [
    "ICU setup Chandigarh",
    "ICU nurse at home Chandigarh",
    "ICU ventilator at home",
    "home ICU care Chandigarh",
    "ICU bed rental Chandigarh",
    "critical care Chandigarh",
    "ICU services CareKwik"
  ],
  alternates: {
    canonical: "https://carekwik.com/icu-at-home/chandigarh",
  },
};


export default function ICUHomeChandigarh() {
  return (
    <>
      <Script id="ld-chd-icu" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - ICU at Home Chandigarh",
          "url": "https://carekwik.com/icu-at-home/chandigarh",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163948/icu-home-care_carekwik.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chandigarh",
            "addressRegion": "Chandigarh",
            "postalCode": "160036",
            "addressCountry": "IN"
          },
          "priceRange": "₹₹₹",
          "openingHours": "Mo-Su 09:00-20:00",
          "areaServed": ["Chandigarh", "Manimajra", "Sector 44", "Sector 20"]
        })}
      </Script>
      <Script id="ld-faq-icu" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",

          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is included in ICU at Home service in Chandigarh?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ICU at Home in Chandigarh includes critical care setup, advanced monitoring, ventilator support, trained ICU nurses, and doctor supervision for patients requiring intensive care at home."
              }
            },
            {
              "@type": "Question",
              "name": "Is ICU at Home safe for critical patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, ICU at Home services are designed to replicate hospital-level care with advanced equipment, 24/7 nurse monitoring, and doctor guidance, ensuring safe and effective treatment at home."
              }
            },
            {
              "@type": "Question",
              "name": "How much does ICU at Home cost in Chandigarh?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost depends on the level of care and equipment required. Contact CareKwik for a customized quote based on the patient's medical needs."
              }
            },
            {
              "@type": "Question",
              "name": "What equipment is provided in ICU at Home setup?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The setup typically includes a ventilator, cardiac monitor, suction machine, infusion pump, oxygen concentrator, and other essential ICU-grade devices."
              }
            },
            {
              "@type": "Question",
              "name": "Can I avail ICU care at home for elderly patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, elderly patients who are stable but need continuous critical care can greatly benefit from ICU at Home services in Chandigarh, avoiding the risks of hospital stays."
              }
            }
          ]


        })}
      </Script>
      <div className="mx-auto p-4 md:p-10">
        <div className="flex flex-col md:flex-row md:gap-10">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751540954/wmremove-transformed_5_rcxaud.jpg"
            alt="ICU setup at home in Chandigarh"
            width={480}
            height={450}
            className="rounded-2xl   shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="text-xl font-bold mb-4">Book ICU Setup in Chandigarh</p>
            <BookService servicename="ICU at Home" />
          </div>
        </div>
         

      <div className="max-w-6xl mx-auto bg-white my-10  overflow-hidden">
      {/* Header */}
      <div className="  p-3 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <FaHeart size={40} className="hidden md:block" />
          <div>
            <h1 className="md:text-4xl text-2xl  font-bold"> ICU Setup at Home in Chandigarh – 24/7 Critical Care</h1>
            <div className="flex items-center gap-2 mt-2">
              <FaMapMarkerAlt className="hidden md:block" />
              <span className="md:text-xl text-base ">Premium Critical Care Services in Chandigarh, Mohali & Panchkula</span>
            </div>
          </div>
        </div>
        <p className="md:text-xl text-base">Bringing Hospital-Level Intensive Care to Your Home in the Tricity Area</p>
      </div>

      {/* Article Content */}
      <div className=" p-3 md:p-8 space-y-8">
        
        {/* Introduction */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Introduction</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="md:text-xl text-base font-semibold text-blue-800 mb-4">Overview of ICU at Home Concept</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>ICU at home Chandigarh</strong> represents a revolutionary healthcare approach that brings intensive care unit services directly to patients&apos; residences in the beautiful city of Chandigarh. This innovative <strong>home ICU setup in Chandigarh</strong> ensures that patients receive hospital-grade medical attention while staying in the comfort and familiarity of their own homes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The concept of <strong>critical care at home Chandigarh</strong> has gained significant momentum as families seek alternatives to traditional hospital-based intensive care, especially for long-term critical patients who require continuous monitoring and specialized medical support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-800 mb-3">Why ICU at Home is Needed in Chandigarh</h4>
              <p className="text-gray-700">
                Chandigarh&apos;s growing healthcare demands and the need for personalized care have made <strong>ICU services at home Chandigarh</strong> an essential service. With an aging population and increasing prevalence of chronic conditions, families are seeking <strong>home intensive care unit Chandigarh</strong> solutions that provide dignity and comfort during critical illness.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-800 mb-3">Advantages Over Hospital ICU</h4>
              <p className="text-gray-700">
                <strong>Home-based ICU care Chandigarh</strong> offers significant advantages including reduced costs, enhanced patient comfort, better infection control, and the invaluable presence of family members during the healing process. Patients receive personalized attention from <strong>trained ICU nurses at home Chandigarh</strong> in a stress-free environment.
              </p>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Objectives of ICU at Home</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <FaHospital className="text-blue-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800">Hospital-Level Care</h4>
                <p className="text-gray-600">Provide <strong>hospital-level ICU care at home Chandigarh</strong> with advanced medical equipment and expert supervision.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <FaHome className="text-green-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800">Patient Dignity</h4>
                <p className="text-gray-600">Ensure patient dignity, privacy, and emotional well-being through compassionate <strong>24/7 ICU care at home in Chandigarh</strong>.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <FaShieldAlt className="text-purple-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800">Cost Reduction</h4>
                <p className="text-gray-600">Significantly reduce hospital readmissions and healthcare costs through <strong>affordable ICU setup at home Chandigarh</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core ICU Services */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Core ICU Services Offered at Home</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="md:text-xl text-base font-semibold text-blue-800 mb-4">Medical Monitoring and Equipment</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• Advanced <strong>ventilator support at home Chandigarh</strong> with state-of-the-art respiratory equipment</li>
                  <li>• Professional <strong>ICU monitor and equipment rental Chandigarh</strong> services</li>
                  <li>• Comprehensive <strong>suction machine and oxygen concentrator at home Chandigarh</strong> setup</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cardiac monitors for continuous heart rhythm monitoring</li>
                  <li>• Complete <strong>medical equipment for ICU at home Chandigarh</strong> installation</li>
                  <li>• Specialized ICU bed setup with advanced safety features</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="md:text-xl text-base font-semibold text-green-800 mb-4">Skilled Medical Staff</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>ICU-trained nurses for home care Chandigarh</strong> providing round-the-clock professional care</li>
                  <li>• <strong>On-call ICU doctors in Chandigarh</strong> for immediate medical consultation</li>
                  <li>• Expert <strong>respiratory therapist at home Chandigarh</strong> for specialized breathing support</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Critical care nursing services Chandigarh</strong> with specialized training</li>
                  <li>• Dedicated <strong>24x7 nurse for ICU patient at home Chandigarh</strong> ensuring continuous care</li>
                  <li>• Regular visits by intensivists and critical care specialists</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="md:text-xl text-base font-semibold text-red-800 mb-4">Emergency Response and Stabilization</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Emergency ICU at home service Chandigarh</strong> with rapid response protocols</li>
                  <li>• Professional ambulance coordination for hospital transfers when needed</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Backup power systems and emergency oxygen supply</li>
                  <li>• <strong>Emergency ICU setup at home Chandigarh</strong> within hours of request</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="md:text-xl text-base font-semibold text-yellow-800 mb-4">Specialized Care Plans</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive <strong>post-ICU care at home in Chandigarh</strong> for smooth recovery transitions</li>
                  <li>• Compassionate <strong>end-of-life ICU care at home Chandigarh</strong> with dignity and comfort</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Specialized <strong>home ICU for terminally ill patients Chandigarh</strong> with palliative support</li>
                  <li>• <strong>Home care for ventilator patients Chandigarh</strong> with expert respiratory management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Assessment */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Eligibility & Assessment</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <FaUserMd className="mx-auto mb-3 text-blue-600" size={32} />
                <h4 className="font-semibold text-gray-800 mb-2">Patient Evaluation</h4>
                <p className="text-gray-700">Comprehensive assessment by ICU specialists to determine suitability for <strong>home setup for critical care patients Chandigarh</strong></p>
              </div>
              
              <div className="text-center">
                <FaHome className="mx-auto mb-3 text-green-600" size={32} />
                <h4 className="font-semibold text-gray-800 mb-2">Home Infrastructure</h4>
                <p className="text-gray-700">Detailed home suitability check to ensure optimal environment for critical care delivery</p>
              </div>
              
              <div className="text-center">
                <FaStethoscope className="mx-auto mb-3 text-purple-600" size={32} />
                <h4 className="font-semibold text-gray-800 mb-2">Custom Care Planning</h4>
                <p className="text-gray-700">Personalized care plans with informed consent for <strong>home ICU for elderly patients Chandigarh</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment & Technology */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Equipment & Technology</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Remote Monitoring</h4>
              <p className="text-sm text-gray-600">Advanced remote patient monitoring systems for continuous health tracking</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Hospital Integration</h4>
              <p className="text-sm text-gray-600">Integration with hospital EMR systems for seamless care coordination</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Daily Reporting</h4>
              <p className="text-sm text-gray-600">Comprehensive daily reports for family members and attending physicians</p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">Specialized Equipment Available</h4>
            <p className="text-gray-700">
              Our <strong>ventilator machine for home use in Chandigarh</strong> inventory includes the latest models of mechanical ventilators, BiPAP machines, and CPAP devices. All equipment undergoes regular maintenance and calibration to ensure optimal performance for critical care patients.
            </p>
          </div>
        </section>

        {/* Staffing & Training */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Staffing & Training</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-800 mb-3">Qualified Nursing Staff</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• GNM/BSc qualified ICU-trained nurses with extensive critical care experience</li>
                <li>• Regular skill audits and simulation training programs</li>
                <li>• Compassionate care focus with patient-centered approach</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-800 mb-3">Continuous Education</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Regular training updates on latest ICU protocols and procedures</li>
                <li>• Emergency response training and crisis management</li>
                <li>• Family communication and emotional support training</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Safety & Quality Assurance */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Safety & Quality Assurance</h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <FaShieldAlt className="mx-auto mb-3 text-red-600" size={28} />
                <h4 className="font-semibold text-gray-800 mb-2">Infection Control</h4>
                <p className="text-gray-700 text-sm">Strict infection control protocols implemented at home settings</p>
              </div>
              
              <div className="text-center">
                <FaClock className="mx-auto mb-3 text-orange-600" size={28} />
                <h4 className="font-semibold text-gray-800 mb-2">24/7 Supervision</h4>
                <p className="text-gray-700 text-sm">Continuous supervision and regular quality audits</p>
              </div>
              
              <div className="text-center">
                <FaHospital className="mx-auto mb-3 text-blue-600" size={28} />
                <h4 className="font-semibold text-gray-800 mb-2">Standards Compliance</h4>
                <p className="text-gray-700 text-sm">Adherence to NABH and home healthcare standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages & Pricing */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Packages & Pricing</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h4 className="font-semibold text-blue-800 mb-3">Flexible Duration</h4>
              <p className="text-gray-700">Daily, weekly, and monthly ICU plans tailored to patient needs and recovery timelines</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h4 className="font-semibold text-green-800 mb-3">Complete Bundles</h4>
              <p className="text-gray-700">Equipment rental + skilled manpower bundles for comprehensive care solutions</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <h4 className="font-semibold text-purple-800 mb-3">Transparent Pricing</h4>
              <p className="text-gray-700">Transparent and customizable pricing with no hidden costs or surprise charges</p>
            </div>
          </div>
        </section>

        {/* Local Coverage Areas */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Service Coverage Areas</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-blue-800 mb-4">Comprehensive Coverage Across Tricity</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Primary Service Areas:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>ICU care services in Mohali Panchkula Zirakpur</strong> with dedicated teams</li>
                  <li>• <strong>ICU setup Sector 17 Chandigarh</strong> and surrounding sectors</li>
                  <li>• <strong>Critical care at home in Tricity area</strong> including remote locations</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Specialized Services:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Best ICU home care near me Chandigarh</strong> with rapid response</li>
                  <li>• <strong>Palliative critical care at home Chandigarh</strong> for comfort-focused treatment</li>
                  <li>• Extended coverage to rural areas around Chandigarh</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Collaboration */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Collaboration with Hospitals</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Hospital Partnerships</h4>
              <p className="text-sm text-gray-600">Strong tie-ups with leading Chandigarh hospitals for seamless care coordination</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Smooth Transitions</h4>
              <p className="text-sm text-gray-600">Seamless hospital-to-home transitions with comprehensive care continuity</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Post-Discharge Care</h4>
              <p className="text-sm text-gray-600">Post-discharge ICU continuity care ensuring optimal recovery outcomes</p>
            </div>
          </div>
        </section>

        {/* Challenges & Mitigation */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Challenges and Mitigation</h2>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">Power Backup & Equipment Reliability</h4>
              <p className="text-gray-700">
                Our <strong>best ICU at home provider in Chandigarh</strong> ensures uninterrupted power supply through advanced UPS systems and generator backups. All equipment undergoes regular maintenance and has redundant systems to prevent any service interruption.
              </p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-red-800 mb-3">Emergency Response from Home</h4>
              <p className="text-gray-700">
                We maintain rapid response protocols with ambulance services on standby and direct communication channels with partner hospitals for immediate emergency interventions when home-based care limitations are reached.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Trained Manpower Availability</h4>
              <p className="text-gray-700">
                Our extensive network of trained professionals ensures adequate staffing at all times. We maintain backup teams and have partnerships with nursing institutions to ensure continuous availability of qualified personnel.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Support */}
        <section>
          <h2 className="md:md:text-xl text-base text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Contact & Support</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <FaPhone className="mx-auto mb-3 text-blue-600" size={32} />
                <h4 className="font-semibold text-gray-800 mb-2">Book ICU Service</h4>
                <p className="text-gray-700">Easy booking process with immediate response for urgent critical care needs</p>
              </div>
              
              <div className="text-center">
                <FaAmbulance className="mx-auto mb-3 text-green-600" size={32} />
                <h4 className="font-semibold text-gray-800 mb-2">24/7 Helpline</h4>
                <p className="text-gray-700">Round-the-clock medical support and emergency helpline services</p>
              </div>
              
              <div className="text-center">
                <FaUserMd className="mx-auto mb-3 text-purple-600" size={32} />
                <h4 className="font-semibold text-gray-800 mb-2">Home Consultation</h4>
                <p className="text-gray-700">Free consultation and home visit booking for initial assessment</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-700 text-lg">
                Experience the finest <strong>ICU at home Chandigarh</strong> services with our dedicated team of healthcare professionals. 
                We are committed to providing exceptional critical care in the comfort of your home.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white  p-3 md:p-8 rounded-lg text-center">
          <h2 className="md:md:text-xl text-base text-xl font-bold mb-4">Get Premium ICU Care at Home in Chandigarh</h2>
          <p className="text-xl mb-6">
            Transform your healthcare experience with our comprehensive <strong>critical care at home Chandigarh</strong> services. 
            We bring the expertise of hospital ICU directly to your doorstep with compassionate, professional care.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <button className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300">
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
