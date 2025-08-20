// app/physiotherapy-at-home/page.tsx
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { 
  FaHome, 
  FaUserMd, 
  FaHeartbeat, 
  FaWheelchair, 
  FaBaby, 
  FaRunning,
  FaStethoscope,
  FaShieldAlt,
  FaMoneyBillWave,
  FaUsers,
  FaStar,
  FaRocket,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaAmbulance,
  FaLaptop,
  FaHands,
  FaWalking
} from 'react-icons/fa';

export const metadata = {
  title: 'Physiotherapy at Home in Chandigarh, Mohali & Panchkula | CareKwik',
  description:
    'Get expert physiotherapy at home in Chandigarh, Mohali & Panchkula. Hire certified physiotherapists for back pain, paralysis, stroke recovery & ortho rehab.',
  keywords: [
    'physiotherapy at home',
    'home physiotherapy services',
    'certified physiotherapist at home',
    'post-surgery rehabilitation at home',
    'stroke recovery physiotherapy',
    'paralysis physiotherapy home visit',
    'female physiotherapist at home',
    'elderly physiotherapy care',
    'back and neck pain physio at home',
    'orthopedic home physiotherapy',
  ],
  alternates: {
    canonical: 'https://carekwik.com/physiotherapy-at-home',
  },
};


export default function PhysiotherapyPage() {
  return (
    <>
      {/* JSON-LD LocalBusiness */}
      <Script id="ld-physio-business" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CareKwik - Physiotherapy at Home",
          "@id": "https://carekwik.com/physiotherapy-at-home#carekwik",
          "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
          "url": "https://carekwik.com/physiotherapy-at-home",
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
          "description": "Certified physiotherapists at home for stroke rehab, paralysis, ortho injuries and elderly care in Chandigarh, Mohali & Panchkula.",
          "areaServed": ["Chandigarh", "Mohali", "Panchkula"]
        })}
      </Script>

      {/* JSON-LD FAQ */}
      <Script id="ld-physio-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you offer physiotherapy for stroke or paralysis patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide post-stroke and paralysis rehab at home with trained neuro-physiotherapists."
              }
            },
            {
              "@type": "Question",
              "name": "Are your physiotherapists certified?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All our physiotherapists are qualified and registered professionals with home visit experience."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide female physiotherapists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, female physiotherapists are available on request for female patients."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We currently serve Chandigarh, Mohali, Panchkula and nearby locations."
              }
            }
          ]
        })}
      </Script>

      <div className="mx-auto md:p-10 p-4">
        {/* Hero Section */}
        <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751465176/wmremove-transformed_4_eemrcj.jpg"
            alt="Physiotherapy at Home in Chandigarh"
            width={400}
            height={450}
            className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="md:text-2xl text-xl font-bold mb-4">Book Physiotherapy at Home</p>
            <BookService servicename="Physiotherapy" />
          </div>
        </div>

        {/* Page Content */}
       <div className="max-w-6xl mx-auto md:p-6 p-2 mt-10">
      {/* Header */}
      <header className="text-center mb-12">
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Physiotherapy at Home: Your Complete Guide to Recovery
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover comprehensive home physiotherapy services that bring professional rehabilitation directly to your doorstep
        </p>
      </header>

      {/* Introduction Section */}
      <section className="bg-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaUserMd className="text-3xl text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            <strong>Physiotherapy at home</strong> represents a revolutionary approach to rehabilitation that brings professional healthcare services directly to patients&apos; residences. This innovative model of care has transformed how individuals access therapeutic treatments, making recovery more accessible and convenient than ever before.
          </p>
          
          <p className="text-gray-700 mb-4">
            The growing demand for <strong>home-based rehabilitation</strong> stems from patients&apos; desire for personalized care in familiar surroundings. Unlike traditional clinic visits, <strong>in-home physiotherapy</strong> eliminates travel barriers and provides treatment in the comfort of one's own environment.
          </p>
          
          <div className="bg-blue-50 md:p-6 p-2 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Key Benefits of Home Physiotherapy</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Enhanced comfort and familiarity</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Personalized one-on-one attention</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Convenient scheduling around your routine</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Reduced risk of infections</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="bg-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaHeartbeat className="text-3xl text-red-500 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Objectives of Physiotherapy at Home</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <FaRunning className="text-blue-500 mt-1 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">Recovery Support</h4>
                <p className="text-gray-600">Support comprehensive recovery from injury, surgery, or illness through targeted therapeutic interventions.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaWalking className="text-green-500 mt-1 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">Mobility Enhancement</h4>
                <p className="text-gray-600">Improve overall mobility and independence in daily activities and functional movements.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <FaHands className="text-purple-500 mt-1 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">Pain Management</h4>
                <p className="text-gray-600">Reduce chronic pain and stiffness through evidence-based therapeutic techniques.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaShieldAlt className="text-orange-500 mt-1 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">Prevention Focus</h4>
                <p className="text-gray-600">Prevent falls and complications, especially crucial for elderly patients and those with mobility challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Services */}
      <section className="bg-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaStethoscope className="text-3xl text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Types of Home Physiotherapy Services</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 md:p-6 p-2 rounded-lg">
            <FaAmbulance className="text-2xl text-blue-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Post-Surgical Rehabilitation</h4>
            <p className="text-gray-600 text-sm">Specialized care for <strong>hip replacement recovery</strong>, knee surgery, and spine procedures with comprehensive <strong>post-surgery physiotherapy at home</strong>.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 md:p-6 p-2 rounded-lg">
            <FaWheelchair className="text-2xl text-purple-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Neurological Physiotherapy</h4>
            <p className="text-gray-600 text-sm"><strong>Physiotherapy for stroke patients</strong>, <strong>Parkinson&apos;s disease</strong>, multiple sclerosis, and <strong>paralysis recovery</strong> programs.</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 md:p-6 p-2 rounded-lg">
            <FaRunning className="text-2xl text-green-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Orthopedic Care</h4>
            <p className="text-gray-600 text-sm"><strong>Home physiotherapy for back pain</strong>, <strong>knee pain</strong>, <strong>arthritis</strong>, fractures, and <strong>sports injury</strong> rehabilitation.</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 md:p-6 p-2 rounded-lg">
            <FaUsers className="text-2xl text-orange-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Geriatric Services</h4>
            <p className="text-gray-600 text-sm"><strong>Physiotherapy for elderly at home</strong> focusing on mobility enhancement, fall prevention, and balance training.</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 md:p-6 p-2 rounded-lg">
            <FaBaby className="text-2xl text-pink-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Pediatric Therapy</h4>
            <p className="text-gray-600 text-sm"><strong>Pediatric physiotherapy at home</strong> for developmental delays, <strong>cerebral palsy</strong>, and muscular dystrophy.</p>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-red-100 md:p-6 p-2 rounded-lg">
            <FaHeartbeat className="text-2xl text-red-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Specialized Conditions</h4>
            <p className="text-gray-600 text-sm">Treatment for <strong>frozen shoulder</strong>, <strong>slipped disc</strong>, <strong>spinal cord injury</strong>, and <strong>joint pain</strong> management.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaCalendarAlt className="text-3xl text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Home Physiotherapy Process</h2>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mr-4 flex-shrink-0">
              <FaUserMd className="text-blue-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Step 1: Initial Assessment</h4>
              <p className="text-gray-600">Comprehensive evaluation by a certified physiotherapist to understand your specific needs and condition.</p>
            </div>
          </div>

          <div className="flex items-start bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mr-4 flex-shrink-0">
              <FaHeartbeat className="text-red-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Step 2: Customized Care Plan</h4>
              <p className="text-gray-600">Development of tailored exercises and therapy schedules based on your individual requirements.</p>
            </div>
          </div>

          <div className="flex items-start bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mr-4 flex-shrink-0">
              <FaHome className="text-green-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Step 3: Therapy Sessions</h4>
              <p className="text-gray-600">Regular at-home visits with guided exercises using portable equipment and professional techniques.</p>
            </div>
          </div>

          <div className="flex items-start bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mr-4 flex-shrink-0">
              <FaCheckCircle className="text-purple-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Step 4: Progress Monitoring</h4>
              <p className="text-gray-600">Continuous tracking of recovery progress with regular follow-ups and plan modifications.</p>
            </div>
          </div>

          <div className="flex items-start bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mr-4 flex-shrink-0">
              <FaUsers className="text-orange-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Step 5: Family Education</h4>
              <p className="text-gray-600">Training family members to provide ongoing support and ensure therapy continuity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaStar className="text-3xl text-yellow-300 mr-4" />
          <h2 className="text-3xl font-bold">Why Choose Home Physiotherapy Services?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <FaHome className="text-2xl mb-3 text-yellow-300 mx-auto" />
            <h4 className="font-semibold mb-2">Convenience & Comfort</h4>
            <p className="text-sm text-blue-100">Receive treatment in familiar surroundings without travel stress</p>
          </div>

          <div className="text-center">
            <FaUserMd className="text-2xl mb-3 text-yellow-300 mx-auto" />
            <h4 className="font-semibold mb-2">Personalized Care</h4>
            <p className="text-sm text-blue-100">One-on-one attention from qualified professionals</p>
          </div>

          <div className="text-center">
            <FaShieldAlt className="text-2xl mb-3 text-yellow-300 mx-auto" />
            <h4 className="font-semibold mb-2">Infection Safety</h4>
            <p className="text-sm text-blue-100">Reduced risk of hospital-acquired infections</p>
          </div>

          <div className="text-center">
            <FaMoneyBillWave className="text-2xl mb-3 text-yellow-300 mx-auto" />
            <h4 className="font-semibold mb-2">Cost-Effective</h4>
            <p className="text-sm text-blue-100">More affordable than repeated hospital visits</p>
          </div>

          <div className="text-center">
            <FaRocket className="text-2xl mb-3 text-yellow-300 mx-auto" />
            <h4 className="font-semibold mb-2">Faster Recovery</h4>
            <p className="text-sm text-blue-100">Consistent therapy leads to quicker healing</p>
          </div>

          <div className="text-center">
            <FaUsers className="text-2xl mb-3 text-yellow-300 mx-auto" />
            <h4 className="font-semibold mb-2">Family Involvement</h4>
            <p className="text-sm text-blue-100">Family members can participate in the care process</p>
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="bg-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaLaptop className="text-3xl text-cyan-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Equipment & Technology</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Portable Physiotherapy Tools</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Resistance bands and therapeutic equipment</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Ultrasound and TENS machines</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Mobility aids (walkers, canes, wheelchairs)</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Exercise balls and balance training tools</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Digital Solutions</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Digital monitoring and progress tracking</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> <strong>Online physiotherapy consultation</strong> options</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Tele-physiotherapy platforms</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Mobile app integration for scheduling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="bg-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaShieldAlt className="text-3xl text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Safety & Quality Assurance</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center bg-green-50 p-4 rounded-lg">
            <FaUserMd className="text-2xl text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Certified Professionals</h4>
            <p className="text-gray-600 text-sm">All <strong>certified physiotherapist home visit</strong> providers are qualified and licensed</p>
          </div>
          
          <div className="text-center bg-blue-50 p-4 rounded-lg">
            <FaCheckCircle className="text-2xl text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Background Verified</h4>
            <p className="text-gray-600 text-sm">Thorough background verification of all therapy staff</p>
          </div>
          
          <div className="text-center bg-purple-50 p-4 rounded-lg">
            <FaShieldAlt className="text-2xl text-purple-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Hygiene Protocols</h4>
            <p className="text-gray-600 text-sm">Strict infection control and hygiene maintenance standards</p>
          </div>
          
          <div className="text-center bg-red-50 p-4 rounded-lg">
            <FaPhone className="text-2xl text-red-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Emergency Support</h4>
            <p className="text-gray-600 text-sm">24/7 emergency response and support availability</p>
          </div>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="bg-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaMoneyBillWave className="text-3xl text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Home Physiotherapy Packages</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 md:p-6 p-2 rounded-lg border-2 border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3">Per Session</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Individual therapy sessions</li>
              <li>• Flexible scheduling</li>
              <li>• Pay as you go</li>
            </ul>
          </div>
          
          <div className="bg-green-50 md:p-6 p-2 rounded-lg border-2 border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">Weekly Packages</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Regular weekly sessions</li>
              <li>• Consistent care routine</li>
              <li>• Better value pricing</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 md:p-6 p-2 rounded-lg border-2 border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3">Post-Surgery</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Comprehensive rehabilitation</li>
              <li>• Recovery milestone tracking</li>
              <li>• Specialized equipment</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 md:p-6 p-2 rounded-lg border-2 border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-3">Long-term Care</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Customized care plans</li>
              <li>• Extended support</li>
              <li>• Maximum cost savings</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Looking for <strong>affordable physiotherapy at home</strong>? We offer competitive pricing and flexible payment options.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            
              <a
                href="tel:+918307190216" 
              >

            <FaPhone className="inline mr-2" />
            Book Physiotherapist at Home
              </a>
          </button>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaUsers className="text-3xl text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Who Benefits from Home Physiotherapy?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 md:p-6 p-2 rounded-lg">
            <FaUsers className="text-2xl text-blue-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Elderly Patients</h4>
            <p className="text-gray-600 text-sm">Seniors requiring mobility support, balance training, and fall prevention programs.</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 md:p-6 p-2 rounded-lg">
            <FaAmbulance className="text-2xl text-green-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Post-Surgery Recovery</h4>
            <p className="text-gray-600 text-sm">Patients recovering from surgical procedures or accident-related injuries.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 md:p-6 p-2 rounded-lg">
            <FaHeartbeat className="text-2xl text-purple-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Chronic Conditions</h4>
            <p className="text-gray-600 text-sm">Individuals with chronic pain, orthopedic conditions, and ongoing health challenges.</p>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-red-100 md:p-6 p-2 rounded-lg">
            <FaWheelchair className="text-2xl text-red-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Neurological Patients</h4>
            <p className="text-gray-600 text-sm">Stroke survivors and individuals with neurological disorders requiring specialized care.</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 md:p-6 p-2 rounded-lg">
            <FaBaby className="text-2xl text-pink-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Pediatric Cases</h4>
            <p className="text-gray-600 text-sm">Children with developmental delays, disabilities, or requiring therapeutic intervention.</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 md:p-6 p-2 rounded-lg">
            <FaRunning className="text-2xl text-orange-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Active Individuals</h4>
            <p className="text-gray-600 text-sm">Athletes and active people seeking convenient rehabilitation and injury prevention.</p>
          </div>
        </div>
      </section>

      {/* Location Services */}
      <section className="bg-gray-100 rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaMapMarkerAlt className="text-3xl text-yellow-300 mr-4" />
          <h2 className="text-3xl font-bold">Available Locations</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">North India</h4>
            <p className="text-sm text-gray-600">
              <strong>Physiotherapy at home in Chandigarh</strong>, <strong>Physiotherapist at home Mohali Panchkula Zirakpur</strong>, and <strong>Best home physiotherapy services in Delhi NCR</strong>
            </p>
          </div>
          
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">South India</h4>
            <p className="text-sm text-gray-600">
              <strong>Physiotherapy at home Bangalore</strong> and surrounding Karnataka regions with qualified professionals
            </p>
          </div>
          
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">West India</h4>
            <p className="text-sm text-gray-600">
              <strong>Home physiotherapy services Mumbai</strong> and Maharashtra metro areas
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Looking for a <strong>physiotherapist near me home visit</strong>? We&apos;re expanding our services nationwide!</p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            <a
            href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >

            <FaMapMarkerAlt className="inline mr-2" />
            Find Services Near You
          </a>
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaStar className="text-3xl text-yellow-500 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Patient Success Stories</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-yellow-50 md:p-6 p-2 rounded-lg border-l-4 border-yellow-400">
            <div className="flex text-yellow-500 mb-3">
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
            </div>
            <p className="text-gray-700 mb-3 italic">&quot;The home physiotherapy service helped me recover completely from my knee replacement surgery. The convenience and personalized care made all the difference.&quot;</p>
            <p className="font-semibold text-gray-800">- Mrs. Sharma, Age 68</p>
          </div>
          
          <div className="bg-blue-50 md:p-6 p-2 rounded-lg border-l-4 border-blue-400">
            <div className="flex text-blue-500 mb-3">
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
            </div>
            <p className="text-gray-700 mb-3 italic">&quot;After my stroke, the physiotherapist&apos;s regular visits at home significantly improved my mobility and confidence. Highly recommended!&quot;</p>
            <p className="font-semibold text-gray-800">- Mr. Patel, Age 55</p>
          </div>
          
          <div className="bg-green-50 md:p-6 p-2 rounded-lg border-l-4 border-green-400">
            <div className="flex text-green-500 mb-3">
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
              <FaStar className="text-sm" />
            </div>
            <p className="text-gray-700 mb-3 italic">&quot;The pediatric physiotherapist was amazing with my daughter. Her developmental progress has been remarkable since starting home therapy.&quot;</p>
            <p className="font-semibold text-gray-800">- Ms. Singh, Mother</p>
          </div>
        </div>
      </section>

      {/* Future Expansion */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaRocket className="text-3xl text-yellow-300 mr-4" />
          <h2 className="text-3xl font-bold">Future of Home Physiotherapy</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <FaLaptop className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Virtual Sessions</h4>
            <p className="text-purple-100 text-sm">Advanced virtual physiotherapy sessions via video calls for remote monitoring and guidance.</p>
          </div>
          
          <div className="text-center">
            <FaHeartbeat className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Wellness Integration</h4>
            <p className="text-purple-100 text-sm">Integration with comprehensive fitness and wellness programs for holistic health management.</p>
          </div>
          
          <div className="text-center">
            <FaUserMd className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Healthcare Partnerships</h4>
            <p className="text-purple-100 text-sm">Strengthened collaborations with hospitals and doctors for seamless care coordination.</p>
          </div>
        </div>
      </section>

      {/* Special Services Highlight */}
      <section className="bg-white rounded-xl   md:p-6 p-2 mb-8">
        <div className="flex items-center mb-6">
          <FaHands className="text-3xl text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Specialized Services Available</h2>
        </div>
        
        <div className="bg-pink-50 md:p-6 p-2 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-pink-800 mb-4">Popular Service Requests</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><FaCheckCircle className="text-pink-500 mr-2 flex-shrink-0" /> <strong>Female physiotherapist at home</strong> (high demand service)</li>
              <li className="flex items-center"><FaCheckCircle className="text-pink-500 mr-2 flex-shrink-0" /> <strong>Best physiotherapist at home near me</strong></li>
              <li className="flex items-center"><FaCheckCircle className="text-pink-500 mr-2 flex-shrink-0" /> Cardiopulmonary physiotherapy for COPD and heart surgery recovery</li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><FaCheckCircle className="text-pink-500 mr-2 flex-shrink-0" /> Breathing exercises and respiratory therapy</li>
              <li className="flex items-center"><FaCheckCircle className="text-pink-500 mr-2 flex-shrink-0" /> Chronic pain management programs</li>
              <li className="flex items-center"><FaCheckCircle className="text-pink-500 mr-2 flex-shrink-0" /> Neck and shoulder stiffness treatment</li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 md:p-6 p-2 rounded-lg">
            <FaHeartbeat className="text-2xl text-cyan-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Cardiopulmonary Care</h4>
            <p className="text-gray-600 text-sm">Specialized therapy for COPD patients, heart surgery recovery, and comprehensive breathing exercise programs.</p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 md:p-6 p-2 rounded-lg">
            <FaHands className="text-2xl text-indigo-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Pain Management</h4>
            <p className="text-gray-600 text-sm">Advanced chronic pain management techniques and targeted therapy for neck and shoulder stiffness relief.</p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 md:p-6 p-2 rounded-lg">
            <FaUserMd className="text-2xl text-teal-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Specialized Staff</h4>
            <p className="text-gray-600 text-sm">Access to specialized therapists including female physiotherapists based on patient preferences and comfort requirements.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl   md:p-6 p-2 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Recovery Journey?</h2>
        <p className="text-xl text-blue-100 mb-6">
          Experience the convenience and effectiveness of professional <strong>at-home physiotherapy treatment</strong> today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors flex items-center">
            
            <FaPhone className="mr-2" />
              <a
                href="tel:+918307190216" 
              >

            Book Your First Session
              </a>
          </button>
          
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center">
            <FaLaptop className="mr-2" />
            <a
            href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >

            Schedule Online Consultation
          </a>
          </button>
        </div>
        
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <FaShieldAlt className="text-3xl text-yellow-300 mx-auto mb-2" />
            <p className="font-semibold">Certified Professionals</p>
            <p className="text-blue-100 text-sm">Licensed and experienced physiotherapists</p>
          </div>
          
          <div>
            <FaHome className="text-3xl text-yellow-300 mx-auto mb-2" />
            <p className="font-semibold">Comfort of Home</p>
            <p className="text-blue-100 text-sm">Treatment in familiar surroundings</p>
          </div>
          
          <div>
            <FaMoneyBillWave className="text-3xl text-yellow-300 mx-auto mb-2" />
            <p className="font-semibold">Affordable Packages</p>
            <p className="text-blue-100 text-sm">Flexible pricing and payment options</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="text-center py-8 text-gray-600">
        <p className="text-sm">
          Transform your recovery experience with professional <strong>physiotherapy services at home</strong>. 
          Contact us today to learn more about our comprehensive <strong>home physiotherapy packages</strong>.
        </p>
      </section>
    </div>
      </div>
    </>
  );
}
