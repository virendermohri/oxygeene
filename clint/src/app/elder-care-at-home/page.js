// app/elder-care-at-home/page.tsx
import BookService from '@/components/bookservice';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FaHeart, FaHome, FaShieldAlt, FaUsers, FaClock, FaPhone, FaStethoscope, FaChartLine } from 'react-icons/fa';

export const metadata = {
  title: 'Elder Care at Home in Mohali & Chandigarh | 24/7 Senior Care Services - CareKwik',
  description: 'Professional elder care services at home in Mohali, Chandigarh & Panchkula. Verified caregivers for seniors - dementia care, post-surgery recovery, 24/7 nursing. Affordable & trusted by 500+ families.',
  keywords: [
    'elder care at home Mohali',
    'senior care Chandigarh',
    'elder care services Mohali',
    'home nursing for elderly Chandigarh',
    'old age care at home Mohali',
    'elderly caregiver Chandigarh',
    'dementia care at home Mohali',
    'palliative care Chandigarh',
    'female caregiver for elderly Mohali',
    'paralytic care at home Chandigarh',
    'home attendant for seniors Mohali',
    'verified elder caregiver Chandigarh',
    '24/7 elder care Mohali',
    'affordable senior care Chandigarh',
    'trained elder care attendant Mohali',
  ],
  openGraph: {
    title: 'Elder Care at Home in Mohali & Chandigarh - CareKwik',
    description: 'Book verified elder care attendants in Mohali & Chandigarh. Compassionate home care for seniors with trained male/female caregivers. Available 24/7.',
    url: 'https://carekwik.com/elder-care-at-home',
    type: 'website',
    images: [{
      url: 'https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg',
      width: 1200,
      height: 630,
      alt: 'Elder Care at Home Services in Mohali and Chandigarh',
    }]
  },
  alternates: {
    canonical: 'https://carekwik.com/elder-care-at-home',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "geo.region": "IN-PB;IN-CH",
    "geo.placename": "Mohali, Chandigarh",
  }
};

export default function ElderCarePage() {
  // Enhanced LocalBusiness Schema with Mohali focus
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://carekwik.com/elder-care-at-home#organization",
    "name": "CareKwik - Elder Care at Home in Mohali & Chandigarh",
    "alternateName": "CareKwik Senior Care Services",
    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg",
    "url": "https://carekwik.com/elder-care-at-home",
    "telephone": "+917015875541",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mohali",
      "addressRegion": "Punjab",
      "postalCode": "160055",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.7046",
      "longitude": "76.7179"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "description": "Professional elder care services at home in Mohali, Chandigarh & Panchkula. Verified caregivers for elderly assistance, dementia care, post-surgery recovery, and 24/7 senior care.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Mohali",
        "containedInPlace": {
          "@type": "State",
          "name": "Punjab"
        }
      },
      {
        "@type": "City",
        "name": "Chandigarh"
      },
      {
        "@type": "City",
        "name": "Panchkula",
        "containedInPlace": {
          "@type": "State",
          "name": "Haryana"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Elder Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Elder Care at Home",
            "description": "Round-the-clock senior care in Mohali and Chandigarh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dementia & Alzheimer's Care",
            "description": "Specialized memory care at home in Chandigarh Tricity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Surgery Elder Care",
            "description": "Recovery support for seniors in Mohali"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/carekwik",
      "https://www.instagram.com/carekwik"
    ]
  };

  // Enhanced FAQ Schema with location-specific questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://carekwik.com/elder-care-at-home#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide elder care at home in Mohali and Chandigarh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide full-time and part-time elder care services across all areas of Mohali (Phases 1-11, Aerocity), Chandigarh (all sectors), Panchkula, Zirakpur, and Kharar. Our verified caregivers are available 24/7 for senior care at home."
        }
      },
      {
        "@type": "Question",
        "name": "Are the caregivers in Mohali background-verified and trained?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All our elder care attendants in Mohali and Chandigarh are professionally trained, experienced, and thoroughly background-verified. We conduct police verification and medical checks for all caregivers to ensure your loved one's safety."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book female attendants for elderly women in Chandigarh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer culturally appropriate female caregivers for elderly women in Chandigarh and Mohali. You can request male or female attendants based on your family's comfort and preferences."
        }
      },
      {
        "@type": "Question",
        "name": "What medical conditions do you cover in elder care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide specialized care for seniors with paralysis, dementia, Alzheimer's, Parkinson's, diabetes, cardiac conditions, post-surgery recovery, bedridden patients, and palliative care in Mohali and Chandigarh."
        }
      },
      {
        "@type": "Question",
        "name": "How much does elder care at home cost in Mohali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Elder care costs in Mohali and Chandigarh typically range from ₹15,000-30,000 per month for full-time care. Hourly care starts from ₹200-500/hour. We offer customized packages based on your specific needs and budget."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas in Mohali do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover all areas of Mohali including Phase 1 to Phase 11, Mohali Aerocity, Sector 76-80, Kharar, Kurali, Landran, and nearby regions. In Chandigarh, we serve all sectors from 1-63."
        }
      }
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Elder Care at Home",
    "provider": {
      "@type": "Organization",
      "name": "CareKwik",
      "url": "https://carekwik.com"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Mohali"
      },
      {
        "@type": "City",
        "name": "Chandigarh"
      },
      {
        "@type": "City",
        "name": "Panchkula"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Elder Care Services in Mohali & Chandigarh",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Home Care for Seniors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dementia and Alzheimer's Care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Surgery Recovery Care"
          }
        }
      ]
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://carekwik.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Elder Care at Home",
        "item": "https://carekwik.com/elder-care-at-home"
      }
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <Script id="ld-localbusiness" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>

      <Script id="ld-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <Script id="ld-service" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>

      <Script id="ld-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <article className="mx-auto md:p-10 p-4">
        {/* Hero Section */}
        <div className="flex md:gap-10 flex-col md:flex-row justify-between">
          <Image
            src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg"
            alt="Professional Elder Care at Home in Mohali and Chandigarh - Trained Caregiver with Senior"
            width={400}
            height={450}
            className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
            priority
          />
          <div className="md:w-1/3 md:p-5 md:shadow-md">
            <p className="md:text-2xl text-xl font-bold mb-4">Book Elder Care Service in Mohali & Chandigarh</p>
            <BookService servicename={"Elder Care"} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto my-10 md:p-6 p-2">
          {/* Main Heading - H1 with Location Keywords */}
          <div className="mb-8">
            <h1 className="md:text-4xl text-2xl font-bold mb-4 text-gray-900">
              Elder Care at Home in Mohali & Chandigarh: Complete Guide to Senior Care Services
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              Professional, compassionate elder care services across Mohali, Chandigarh & Panchkula - Available 24/7
            </p>
          </div>

          {/* Location-Specific Quick Links Section */}
          <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🏠 Elder Care Services Available In</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/elder-care-at-home/mohali" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all">
                <p className="font-semibold text-blue-600 text-lg">📍 Elder Care in Mohali</p>
                <p className="text-sm text-gray-600">All Phases, Aerocity, Kharar</p>
              </Link>
              <Link href="/elder-care-at-home/chandigarh" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all">
                <p className="font-semibold text-blue-600 text-lg">📍 Elder Care in Chandigarh</p>
                <p className="text-sm text-gray-600">All Sectors (1-63)</p>
              </Link>
              <Link href="/elder-care-at-home/panchkula" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all">
                <p className="font-semibold text-blue-600 text-lg">📍 Elder Care in Panchkula</p>
                <p className="text-sm text-gray-600">All Sectors & Zirakpur</p>
              </Link>
            </div>
          </section>

          {/* Introduction Section - Location Optimized */}
          <section className="mb-12">
            <div className="bg-white">
              <div className="flex items-center mb-6">
                <FaHome className="text-blue-600 mr-3" size={32} />
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Elder Care at Home in Mohali & Chandigarh</h2>
              </div>

              <p className="text-lg text-gray-700 mb-4">
                <strong className="text-blue-600">Elder care at home in Mohali and Chandigarh</strong> has transformed how families approach senior healthcare in the Tricity region. Families across Mohali (Phases 1-11, Aerocity), Chandigarh (all sectors), Panchkula, Zirakpur, and Kharar now have access to professional <strong className="text-blue-600">home care services for elderly</strong> that prioritize comfort, dignity, and independence.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                <strong className="text-blue-600">Senior care services in Chandigarh and Mohali</strong> encompass comprehensive medical, personal, and supportive care designed specifically for aging adults. Whether you&apos;re in Phase 7 Mohali, Sector 17 Chandigarh, or anywhere in Panchkula, <strong className="text-blue-600">elderly care at home</strong> allows seniors to age gracefully in familiar surroundings while receiving professional medical attention.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                The importance of aging in place cannot be overstated, especially in tight-knit communities like Mohali and Chandigarh. <strong className="text-blue-600">Geriatric care at home in Mohali</strong> provides emotional stability, maintains social connections with neighbors and friends, and preserves the independence that seniors value most—all while staying close to family.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Common reasons families in <strong className="text-blue-600">Chandigarh Tricity choose home-based elder care</strong> include maintaining family bonds, reducing relocation stress, providing cost-effective alternatives to nursing homes, and ensuring culturally appropriate care. <strong className="text-blue-600">Home nursing for elderly in Chandigarh</strong> ensures medical needs are met without sacrificing the comfort of familiar surroundings.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🎯 Why Choose CareKwik for Elder Care in Mohali & Chandigarh?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Local Presence:</strong> Serving all areas of Mohali, Chandigarh & Panchkula</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Verified Caregivers:</strong> Background checked & trained professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>24/7 Availability:</strong> Round-the-clock support in Mohali & Chandigarh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Affordable Pricing:</strong> Transparent rates with no hidden charges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Male/Female Caregivers:</strong> Choice based on family preference</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Objectives */}
          <section className="mb-12">
            <div className="bg-white">
              <div className="flex items-center mb-6">
                <FaHeart className="text-red-500 mr-3" size={32} />
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Goals of Elder Care at Home in Mohali & Chandigarh</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">🌟 Quality of Life Enhancement</h3>
                  <p className="text-gray-700">
                    <strong className="text-blue-600">Senior citizen care at home in Mohali</strong> focuses on improving overall well-being through personalized attention in familiar Tricity environments—whether it&apos;s Phase 11 Mohali or Sector 35 Chandigarh.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">🦽 Independence with Support</h3>
                  <p className="text-gray-700">
                    <strong className="text-blue-600">Trained caregivers for elderly in Chandigarh</strong> promote autonomy while providing necessary assistance for daily activities—maintaining dignity and self-reliance.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">🏥 Medical and Emotional Safety</h3>
                  <p className="text-gray-700">
                    Comprehensive safety protocols ensure both physical health monitoring and emotional well-being support across all elder care services in Mohali and Chandigarh.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-800 mb-3">💰 Cost-Effective Care</h3>
                  <p className="text-gray-700">
                    <strong className="text-blue-600">Affordable elder care services in Mohali</strong> help prevent unnecessary hospital readmissions and expensive nursing home placements in Chandigarh Tricity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Services - Location Enhanced */}
          <section className="mb-12">
            <div className="bg-white">
              <div className="flex items-center mb-6">
                <FaStethoscope className="text-green-600 mr-3" size={32} />
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Elder Care Services Available in Mohali & Chandigarh</h2>
              </div>

              {/* Medical Services */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">🩺 Medical Elder Care Services</h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Professional <strong className="text-blue-600">medical care for elderly at home in Mohali and Chandigarh</strong> includes:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Home doctor visits for elderly in Mohali</strong> - Convenient medical consultations across all Mohali phases and Chandigarh sectors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">In-home nursing services in Chandigarh</strong> - Professional medical care delivered at your residence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Medication management for seniors in Mohali</strong> - Proper dosing, timing, and tracking of prescriptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Chronic illness monitoring</strong> - Diabetes care, blood pressure monitoring, cardiac care at home</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span>Wound care, catheter care, and injection administration by qualified nurses in Chandigarh</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Palliative care at home in Mohali</strong> - Compassionate end-of-life care and pain management</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Personal Care Services */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-green-700 mb-4">🛁 Personal Care Services for Seniors</h3>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    <strong className="text-blue-600">Personal care attendants for elderly in Mohali & Chandigarh</strong> provide:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span><strong>Bathing, dressing, and grooming assistance</strong> with dignity and respect</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span><strong>Mobility and transfer assistance</strong> - Safe movement support across home</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span><strong>Toileting and incontinence care</strong> - Maintaining hygiene with compassion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span><strong>Meal preparation and feeding assistance</strong> - Nutritious meals tailored to dietary needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span><strong>Female caregivers for elderly women in Mohali</strong> available for culturally appropriate care</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Specialized Care */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-purple-700 mb-4">🧠 Specialized Elder Care in Chandigarh & Mohali</h3>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Dementia care at home in Mohali</strong> - Memory care, behavioral management, safety monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Alzheimer&apos;s care in Chandigarh</strong> - Cognitive stimulation, routine maintenance, family support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Parkinson&apos;s care at home</strong> - Movement assistance, medication timing, fall prevention</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Paralysis patient care in Mohali</strong> - Bedridden care, pressure sore prevention, physiotherapy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Stroke rehabilitation at home in Chandigarh</strong> - Recovery support and mobility exercises</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Post-surgery care for elderly</strong> - Wound care, medication, recovery monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Companionship */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-orange-700 mb-4">❤️ Companionship and Mental Well-being</h3>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Companion care for seniors in Mohali</strong> - Social interaction, emotional support, activity engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Recreational activities - Reading, music, games, walks in Mohali parks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Cognitive stimulation activities to maintain mental sharpness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Family communication support and emotional counseling</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Household Support */}
              <div>
                <h3 className="text-2xl font-semibold text-teal-700 mb-4">🏡 Household Support Services</h3>
                <div className="bg-teal-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 font-bold">•</span>
                      <span><strong className="text-blue-600">Senior assistance at home in Chandigarh</strong> - Light housekeeping, room organization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 font-bold">•</span>
                      <span>Grocery shopping and errands across Mohali and Chandigarh markets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 font-bold">•</span>
                      <span>Laundry, linen changes, and room cleanliness maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 font-bold">•</span>
                      <span>Home safety assessments to prevent falls and accidents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Caregiver Qualifications */}
          <section className="mb-12">
            <div className="bg-white">
              <div className="flex items-center mb-6">
                <FaUsers className="text-indigo-600 mr-3" size={32} />
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Our Caregivers in Mohali & Chandigarh</h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                When you <strong className="text-blue-600">hire caregivers for elderly in Mohali and Chandigarh</strong>, you want assurance of professional competence and trustworthiness. All our <strong className="text-blue-600">elderly care nurses</strong> undergo rigorous training and verification.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                    <FaShieldAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">✅ Professional Certification</h4>
                      <p className="text-gray-600">Certified nurses and trained attendants with proper medical credentials from recognized institutions</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 p-4 rounded-lg">
                    <FaShieldAlt className="text-green-600 mt-1 mr-3 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">✅ Background Verification</h4>
                      <p className="text-gray-600">Police verification, Aadhaar validation, and reference checks for all caregivers in Mohali & Chandigarh</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start bg-purple-50 p-4 rounded-lg">
                    <FaShieldAlt className="text-purple-600 mt-1 mr-3 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">✅ Geriatric Training</h4>
                      <p className="text-gray-600">Specialized training in elderly care, dementia management, and age-related medical conditions</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-orange-50 p-4 rounded-lg">
                    <FaShieldAlt className="text-orange-600 mt-1 mr-3 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">✅ Soft Skills & Communication</h4>
                      <p className="text-gray-600">Patience, empathy, Punjabi/Hindi/English communication, and cultural sensitivity for Tricity families</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-800 mb-2">🏆 Why Our Caregivers Stand Out in Mohali & Chandigarh</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ Local caregivers familiar with Mohali and Chandigarh neighborhoods</li>
                  <li>✓ Multilingual (Punjabi, Hindi, English) for better communication</li>
                  <li>✓ Experience with culturally specific dietary and religious needs</li>
                  <li>✓ Regular training updates and performance monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Custom Care Planning */}
          <section className="mb-12">
            <div className="bg-white">
              <div className="flex items-center mb-6">
                <FaChartLine className="text-purple-600 mr-3" size={32} />
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Customized Elder Care Plans in Mohali & Chandigarh</h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                <strong className="text-blue-600">Personalized elder care packages in Mohali and Chandigarh</strong> ensure each senior receives care tailored to their unique medical needs, preferences, and family situation. We create custom plans for residents across all areas of Tricity.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">📋 Initial Home Assessment</h4>
                  <p className="text-gray-700">Our care managers visit your home in Mohali or Chandigarh to conduct thorough assessments—understanding medical history, living conditions, family dynamics, and specific care requirements. Free consultation included.</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-xl font-semibold text-green-800 mb-3">📝 Tailored Care Plans</h4>
                  <p className="text-gray-700"><strong className="text-blue-600">Monthly elder care packages in Mohali</strong> can be customized for:</p>
                  <ul className="mt-2 text-gray-700 space-y-1">
                    <li>• Hourly visits (2-4 hours daily)</li>
                    <li>• 12-hour shifts (day/night shift options)</li>
                    <li>• 24-hour live-in care (full-time caregiver)</li>
                    <li>• Weekly respite care for family caregivers</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-xl font-semibold text-purple-800 mb-3">👨‍👩‍👧 Family Collaboration</h4>
                  <p className="text-gray-700">Close coordination with family members and physicians in Chandigarh ensures everyone is informed. Regular care plan updates and progress reports keep families involved in decision-making.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 24/7 Care */}
          <section className="mb-12">
            <div className="bg-white">
              <div className="flex items-center mb-6">
                <FaClock className="text-red-600 mr-3" size={32} />
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800">24/7 Elder Care Services in Mohali & Chandigarh</h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                <strong className="text-blue-600">Round-the-clock home care for seniors in Mohali and Chandigarh</strong> provides peace of mind knowing professional help is available anytime. Our <strong className="text-blue-600">24/7 emergency elder care services</strong> ensure rapid response during critical situations across Tricity.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-red-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <FaPhone className="text-red-600 mx-auto mb-4" size={40} />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">📞 24/7 Helpline</h4>
                  <p className="text-gray-600 mb-3">Round-the-clock support line for families in Mohali & Chandigarh</p>
                  <a href="tel:+917015875541" className="text-blue-600 font-semibold hover:underline">Call: +91 70158 75541</a>
                </div>

                <div className="text-center bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <FaShieldAlt className="text-orange-600 mx-auto mb-4" size={40} />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">🚨 Fall Prevention</h4>
                  <p className="text-gray-600">Comprehensive home safety measures and environmental modifications to prevent accidents</p>
                </div>

                <div className="text-center bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <FaHeart className="text-blue-600 mx-auto mb-4" size={40} />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">🏥 Medical Emergency</h4>
                  <p className="text-gray-600">Rapid response protocols and coordination with nearby hospitals in Mohali/Chandigarh</p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas Section - IMPORTANT FOR LOCAL SEO */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg shadow-md">
              <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6 text-center">📍 Areas We Serve in Mohali, Chandigarh & Panchkula</h2>
              
              <p className="text-center text-gray-700 mb-8 text-lg">
                <strong className="text-blue-600">CareKwik provides elder care services across the entire Chandigarh Tricity region</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                  <h3 className="font-bold text-blue-800 mb-4 text-xl">🏘️ Mohali Areas</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Phase 1 to Phase 11 Mohali</li>
                    <li>✓ Mohali Aerocity</li>
                    <li>✓ Sector 76, 77, 78, 79, 80</li>
                    <li>✓ Kharar & New Kharar</li>
                    <li>✓ Kurali & Banur</li>
                    <li>✓ Landran & Sohana</li>
                    <li>✓ Derabassi</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
                  <h3 className="font-bold text-green-800 mb-4 text-xl">🏙️ Chandigarh Sectors</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ All Sectors (1 to 63)</li>
                    <li>✓ Sector 17 Market Area</li>
                    <li>✓ Sector 22, 34, 35, 43</li>
                    <li>✓ IT Park Chandigarh</li>
                    <li>✓ Industrial Area Phase 1 & 2</li>
                    <li>✓ Manimajra</li>
                    <li>✓ Ram Darbar</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
                  <h3 className="font-bold text-purple-800 mb-4 text-xl">🌄 Panchkula & Nearby</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ All Panchkula Sectors</li>
                    <li>✓ Zirakpur (all phases)</li>
                    <li>✓ Pinjore</li>
                    <li>✓ Kalka</li>
                    <li>✓ Baltana</li>
                    <li>✓ Barwala</li>
                    <li>✓ Morni Hills area</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 text-lg">
                  <strong className="text-blue-600">Can&apos;t find your area?</strong> We serve the entire Chandigarh Tricity region. Call us at 
                  <a href="tel:+917015875541" className="text-blue-600 font-bold hover:underline ml-2">+91 70158 75541</a>
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-12">
            <div className="bg-white">
              <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">💰 Elder Care Costs in Mohali & Chandigarh</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong className="text-blue-600">Affordable elder care services in Mohali and Chandigarh</strong> with transparent pricing. No hidden charges, no agent fees—direct booking with CareKwik.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-gray-800 mb-4 text-xl">💵 Pricing for Elder Care in Mohali & Chandigarh</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">Hourly Elder Care:</span>
                    <span className="font-bold text-blue-600">₹200-400/hour</span>
                  </div>
                  <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">12-Hour Shift Care:</span>
                    <span className="font-bold text-blue-600">₹1,200-2,000/shift</span>
                  </div>
                  <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">24-Hour Live-in Care:</span>
                    <span className="font-bold text-blue-600">₹15,000-30,000/month</span>
                  </div>
                  <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">Specialized Care (Dementia):</span>
                    <span className="font-bold text-blue-600">₹18,000-35,000/month</span>
                  </div>
                  <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">Post-Surgery Care:</span>
                    <span className="font-bold text-blue-600">₹12,000-25,000/month</span>
                  </div>
                  <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">Female Caregiver (Premium):</span>
                    <span className="font-bold text-blue-600">₹16,000-32,000/month</span>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    <strong>💡 Package Discounts:</strong> Get 10-15% off on monthly and quarterly packages in Mohali & Chandigarh. Free initial consultation and care plan assessment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <div className="bg-white">
              <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">✨ Benefits of Elder Care at Home in Mohali & Chandigarh</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong className="text-blue-600">Home nursing care for seniors in Mohali and Chandigarh</strong> offers numerous advantages over institutional care facilities.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                    <FaHome className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">🏠 Familiar Environment</h4>
                      <p className="text-gray-600">Stay in your own home in Mohali/Chandigarh with personal belongings, memories, and neighborhood connections intact</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-red-50 p-4 rounded-lg">
                    <FaHeart className="text-red-600 mt-1 mr-3 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">❤️ Personalized One-on-One Care</h4>
                      <p className="text-gray-600">Dedicated caregiver attention tailored to individual needs and preferences—not shared among multiple patients</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 p-4 rounded-lg">
                    <FaClock className="text-green-600 mt-1 mr-3 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">⏰ Flexible Scheduling</h4>
                      <p className="text-gray-600">Care schedules adapted to personal routines—meals at preferred times, familiar daily activities</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start bg-purple-50 p-4 rounded-lg">
                    <FaUsers className="text-purple-600 mt-1 mr-3 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">👨‍👩‍👧 Family Involvement</h4>
                      <p className="text-gray-600">Maintain close family relationships—children and grandchildren can visit anytime in Mohali/Chandigarh</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-orange-50 p-4 rounded-lg">
                    <FaShieldAlt className="text-orange-600 mt-1 mr-3 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">💰 Cost-Effective</h4>
                      <p className="text-gray-600">Often 30-40% more affordable than nursing homes in Chandigarh while providing superior care quality</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-teal-50 p-4 rounded-lg">
                    <FaHeart className="text-teal-600 mt-1 mr-3 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">😊 Emotional Stability</h4>
                      <p className="text-gray-600">Reduced anxiety, depression, and confusion—familiar surroundings provide comfort and security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Care Services */}
          <section className="mb-12">
            <div className="bg-white">
              <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">🎯 Specialized Elder Care Services in Mohali & Chandigarh</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">🏥 Post-Surgery Recovery Care</h3>
                  <p className="text-gray-700 mb-3">
                    <strong className="text-blue-600">Post-surgery elder care at home in Mohali and Chandigarh</strong> facilitates faster healing in comfortable environments—ideal for hip replacement, knee surgery, cardiac procedures, and general surgery recovery.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>✓ Professional wound care and dressing changes</li>
                    <li>✓ Medication management and pain monitoring</li>
                    <li>✓ Physical therapy and mobility assistance</li>
                    <li>✓ Diet management and nutritional support</li>
                    <li>✓ Coordination with surgeons in Mohali/Chandigarh hospitals</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">🧠 Dementia & Alzheimer&apos;s Care</h3>
                  <p className="text-gray-700 mb-3">
                    <strong className="text-blue-600">Memory care services at home in Chandigarh</strong> provide specialized support for cognitive conditions with trained caregivers who understand behavioral challenges.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>✓ Memory stimulation activities and cognitive games</li>
                    <li>✓ Behavioral management and emotional support</li>
                    <li>✓ Safety monitoring and wandering prevention</li>
                    <li>✓ Medication reminders and routine maintenance</li>
                    <li>✓ Family education and caregiver support in Mohali</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">🛏️ Bedridden & Paralysis Care</h3>
                  <p className="text-gray-700 mb-3">
                    <strong className="text-blue-600">Paralytic patient care at home in Mohali</strong> ensures proper positioning, hygiene, and medical monitoring for immobile seniors.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>✓ Regular position changes to prevent bedsores</li>
                    <li>✓ Catheter care and bowel management</li>
                    <li>✓ Chest physiotherapy and breathing exercises</li>
                    <li>✓ Limb exercises and massage therapy</li>
                    <li>✓ Complete hygiene and grooming care</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">💔 Palliative & Hospice Care</h3>
                  <p className="text-gray-700 mb-3">
                    <strong className="text-blue-600">End-of-life care at home in Chandigarh</strong> focuses on comfort, dignity, and quality of life during final stages—with compassionate support for families.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>✓ Pain management and symptom relief</li>
                    <li>✓ Emotional and spiritual support</li>
                    <li>✓ 24/7 comfort care and monitoring</li>
                    <li>✓ Family counseling and bereavement support</li>
                    <li>✓ Dignity and respect in final days</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges and Solutions */}
          <section className="mb-12">
            <div className="bg-white">
              <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">⚠️ Common Challenges & Our Solutions</h2>

              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">😓 Family Caregiver Burnout</h4>
                  <p className="text-gray-700"><strong>Solution:</strong> Our respite care services in Mohali give family caregivers regular breaks. We offer flexible schedules—daily, weekly, or monthly relief—preventing caregiver fatigue while maintaining quality care for seniors.</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-800 mb-2">🚫 Elderly Resistance to Care</h4>
                  <p className="text-gray-700"><strong>Solution:</strong> Gradual introduction of caregivers, involving seniors in care planning decisions, and emphasizing independence help overcome initial resistance. Our Chandigarh caregivers build trust slowly and respectfully.</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">🚨 Medical Emergencies at Night</h4>
                  <p className="text-gray-700"><strong>Solution:</strong> 24/7 monitoring systems, emergency response protocols, and coordination with nearby hospitals in Mohali/Chandigarh ensure rapid intervention. Our caregivers are trained in first aid and emergency procedures.</p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">⚖️ Legal & Safety Concerns</h4>
                  <p className="text-gray-700"><strong>Solution:</strong> Clear consent procedures, comprehensive service agreements, elder abuse prevention training, and regular supervision protect both seniors and caregivers. All caregivers carry valid ID and work authorization.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Location Links Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">🗺️ Elder Care Services by Location</h2>
              <p className="text-center mb-6 text-lg">Choose your area for detailed information about elder care services:</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/elder-care-at-home/mohali" className="bg-white text-gray-900 p-5 rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <h3 className="font-bold text-blue-600 text-lg mb-2">📍 Elder Care in Mohali</h3>
                  <p className="text-sm text-gray-600">Serving all Mohali phases, Aerocity, Kharar, and surrounding areas</p>
                  <p className="text-blue-600 text-sm mt-2 font-semibold">View Details →</p>
                </Link>

                <Link href="/elder-care-at-home/chandigarh" className="bg-white text-gray-900 p-5 rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <h3 className="font-bold text-green-600 text-lg mb-2">📍 Elder Care in Chandigarh</h3>
                  <p className="text-sm text-gray-600">Available in all Chandigarh sectors from 1 to 63</p>
                  <p className="text-green-600 text-sm mt-2 font-semibold">View Details →</p>
                </Link>

                <Link href="/elder-care-at-home/panchkula" className="bg-white text-gray-900 p-5 rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <h3 className="font-bold text-purple-600 text-lg mb-2">📍 Elder Care in Panchkula</h3>
                  <p className="text-sm text-gray-600">Covering Panchkula, Zirakpur, Pinjore, and nearby regions</p>
                  <p className="text-purple-600 text-sm mt-2 font-semibold">View Details →</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Conclusion / CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg shadow-lg">
              <h2 className="md:text-3xl text-2xl font-bold mb-6 text-center">Ready to Get Started with Elder Care in Mohali & Chandigarh?</h2>

              <p className="text-lg mb-4 text-center max-w-4xl mx-auto">
                <strong className="text-yellow-300">Elder care at home in Mohali and Chandigarh</strong> represents a compassionate and practical solution for families seeking quality senior care while preserving dignity and independence. Our comprehensive range of services ensures your loved ones can age gracefully at home.
              </p>

              <div className="bg-white bg-opacity-20 p-6 rounded-lg mt-6 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4 text-center">📞 Book Elder Care Services Now</h3>
                <p className="text-lg mb-6 text-center">
                  Professional caregivers available across Mohali, Chandigarh & Panchkula. Free consultation • Verified caregivers • 24/7 support
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <a 
                    href="tel:+917015875541" 
                    className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg transform hover:scale-105"
                  >
                    📱 Call Now: +91 70158 75541
                  </a>
                  <a 
                    href="https://wa.me/917015875541" 
                    className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition-all duration-300 shadow-lg transform hover:scale-105"
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>

              <p className="text-center mt-8 text-lg">
                🏆 <strong>Trusted by 500+ families</strong> in Mohali, Chandigarh & Panchkula | ⭐ 4.8/5 Average Rating
              </p>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}