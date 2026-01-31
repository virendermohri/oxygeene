import Typewriter from "@/components/Typewriter";
import "./globals.css";
import CaretakerProfile from "@/components/CaretakerProfile";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import DiscountCarousel from '@/components/DiscountCarousel'
import Image from "next/image";
import MaleFemaleDiscounts from "@/components/MaleFemaleDiscounts";
import HomeCareWomenVideo from "@/components/HomeCareVideo";
import HomeCareForMen from "@/components/HomeCareForMen";

export const metadata = {
  title: "Home Care Services in Mohali & Chandigarh | Elder Care, Nursing & Physiotherapy - CareKwik",
  description: "Trusted home care services in Mohali, Chandigarh & Panchkula. Expert elder care, 24/7 nursing, physiotherapy at home, ICU setup & mother baby care. Book trained caregivers - affordable & verified by CareKwik.",
  keywords: "home care services Mohali, home care Chandigarh, elder care Mohali, nursing care Chandigarh, physiotherapy at home Mohali, ICU at home Chandigarh, home nurse Mohali, patient care services Chandigarh, 24/7 home care Mohali, trained caregiver Chandigarh, mother baby care Mohali, post surgical care Chandigarh, affordable home nursing Mohali, CareKwik",
  
  openGraph: {
    title: "Best Home Care Services in Mohali & Chandigarh | CareKwik",
    description: "Professional home healthcare in Mohali & Chandigarh. Verified caregivers for elder care, nursing, physiotherapy & ICU at home. Direct booking - no agents, no extra charges.",
    url: "https://carekwik.com",
    type: "website",
    siteName: "CareKwik - Home Healthcare Mohali & Chandigarh",
    locale: "en_IN",
    images: [{
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751259853/og_image_dav7mz.jpg",
      width: 1200,
      height: 630,
      alt: "CareKwik - Professional Home Care Services in Mohali and Chandigarh",
    }]
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Home Care Services Mohali & Chandigarh - CareKwik",
    description: "Book verified home caregivers in Mohali & Chandigarh. Elder care, nursing, physiotherapy at home.",
    images: ["https://res.cloudinary.com/divlt5fqo/image/upload/v1751259853/og_image_dav7mz.jpg"],
  },
  
  alternates: {
    canonical: 'https://carekwik.com',
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
  
  // Geo targeting
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Mohali, Chandigarh",
    "geo.position": "30.7046;76.7179", // Mohali coordinates
  }
};

export default async function Home() {
  const services = [
    {
      title: "Physiotherapy at home",
      description: "Expert physiotherapy for recovery and pain management in Mohali & Chandigarh.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751465176/wmremove-transformed_4_eemrcj.jpg",
    },
    {
      title: "Elder Care at Home",
      description: "Compassionate elder care services for seniors in Mohali and Chandigarh.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg"
    },
    {
      title: "ICU at Home",
      description: "Advanced ICU setup and critical care at home in Chandigarh Tricity.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751540954/wmremove-transformed_5_rcxaud.jpg"
    },
    {
      title: "Nursing Care at Home",
      description: "Professional nursing care services at home in Mohali & Chandigarh.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1753344614/220-SM987818_woof2x.jpg"
    },
    {
      title: "Mother Baby Care at Home",
      description: "Specialized postnatal and baby care services in Mohali & Chandigarh.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1753210013/220-SM681360_vp9gp2.jpg"
    },
    {
      title: "Lab test at Home",
      description: "Convenient home lab test services in Chandigarh and Mohali.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1753345685/20-SM88262_aahocp.jpg"
    }
  ];

  const slugifyServices = (servicename) => {
    return servicename
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Schema.org JSON-LD for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://carekwik.com/#organization",
    "name": "CareKwik",
    "alternateName": "CareKwik Home Healthcare Services",
    "description": "Professional home care services in Mohali, Chandigarh & Panchkula. Providing elder care, nursing, physiotherapy, ICU setup, and mother-baby care at home.",
    "url": "https://carekwik.com",
    "telephone": "+917015875541",
    "priceRange": "₹₹",
    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1751259853/og_image_dav7mz.jpg",
    "logo": {
      "@type": "ImageObject",
      "url": "https://res.cloudinary.com/divlt5fqo/image/upload/v1746254564/CareKwik_v9opqw.png",
      "width": 250,
      "height": 60
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mohali",
      "addressRegion": "Punjab",
      "addressCountry": "IN",
      "postalCode": "160055"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.7046",
      "longitude": "76.7179"
    },
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
        "name": "Chandigarh",
        "containedInPlace": {
          "@type": "State",
          "name": "Chandigarh"
        }
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Healthcare Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elder Care at Home",
            "description": "Professional elder care services in Mohali and Chandigarh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nursing Care at Home",
            "description": "24/7 nursing care services in Chandigarh Tricity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Physiotherapy at Home",
            "description": "Home physiotherapy services in Mohali and Chandigarh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ICU Setup at Home",
            "description": "Critical care and ICU setup at home in Chandigarh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mother and Baby Care",
            "description": "Postnatal and baby care services in Mohali"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/carekwik",
      "https://www.instagram.com/getcarekwik"
    ]
  };

  // Medical Business Schema
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "CareKwik Home Healthcare",
    "url": "https://carekwik.com",
    "telephone": "+917015875541",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mohali",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
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
      }
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="">
        <div className="">
          <Typewriter />
        </div>
        
        <DiscountCarousel/>
        <HomeCareWomenVideo/>
        <MaleFemaleDiscounts/>
        <HomeCareForMen/>

        {/* Service Area Section - Local SEO Focus */}
        <section className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4 max-w-6xl mx-auto rounded-xl shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            Home Care Services in Mohali, Chandigarh & Panchkula
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional home healthcare services across Chandigarh Tricity. Serving all sectors of Mohali, Chandigarh, Panchkula, Zirakpur & Kharar with trained & verified caregivers.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Elder Care */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-500">
              <h3 className="text-lg font-semibold text-indigo-600 mb-3 flex items-center">
                <span className="text-2xl mr-2">🧓</span>
                Elder Care at Home
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <Link href="/elder-care-at-home/chandigarh" className="hover:text-indigo-600 flex items-center">
                    <span className="mr-2">📍</span>Elder Care in Chandigarh
                  </Link>
                </li>
                <li>
                  <Link href="/elder-care-at-home/mohali" className="hover:text-indigo-600 flex items-center">
                    <span className="mr-2">📍</span>Elder Care in Mohali
                  </Link>
                </li>
                <li>
                  <Link href="/elder-care-at-home/panchkula" className="hover:text-indigo-600 flex items-center">
                    <span className="mr-2">📍</span>Elder Care in Panchkula
                  </Link>
                </li>
              </ul>
            </div>

            {/* Physiotherapy */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-green-500">
              <h3 className="text-lg font-semibold text-green-600 mb-3 flex items-center">
                <span className="text-2xl mr-2">🏃</span>
                Physiotherapy at Home
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <Link href="/physiotherapy-at-home/chandigarh" className="hover:text-green-600 flex items-center">
                    <span className="mr-2">📍</span>Physiotherapy Chandigarh
                  </Link>
                </li>
                <li>
                  <Link href="/physiotherapy-at-home/mohali" className="hover:text-green-600 flex items-center">
                    <span className="mr-2">📍</span>Physiotherapy Mohali
                  </Link>
                </li>
                <li>
                  <Link href="/physiotherapy-at-home/panchkula" className="hover:text-green-600 flex items-center">
                    <span className="mr-2">📍</span>Physiotherapy Panchkula
                  </Link>
                </li>
              </ul>
            </div>

            {/* Nursing Care */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
              <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center">
                <span className="text-2xl mr-2">👩‍⚕️</span>
                Nursing Care at Home
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <Link href="/nursing-care-at-home/chandigarh" className="hover:text-blue-600 flex items-center">
                    <span className="mr-2">📍</span>Nursing Care Chandigarh
                  </Link>
                </li>
                <li>
                  <Link href="/nursing-care-at-home/mohali" className="hover:text-blue-600 flex items-center">
                    <span className="mr-2">📍</span>Nursing Care Mohali
                  </Link>
                </li>
                <li>
                  <Link href="/nursing-care-at-home/panchkula" className="hover:text-blue-600 flex items-center">
                    <span className="mr-2">📍</span>Nursing Care Panchkula
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mother & Baby Care */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-pink-500">
              <h3 className="text-lg font-semibold text-pink-600 mb-3 flex items-center">
                <span className="text-2xl mr-2">👶</span>
                Mother & Baby Care
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <Link href="/mother-baby-care-at-home/chandigarh" className="hover:text-pink-600 flex items-center">
                    <span className="mr-2">📍</span>Baby Care Chandigarh
                  </Link>
                </li>
                <li>
                  <Link href="/mother-baby-care-at-home/mohali" className="hover:text-pink-600 flex items-center">
                    <span className="mr-2">📍</span>Baby Care Mohali
                  </Link>
                </li>
                <li>
                  <Link href="/mother-baby-care-at-home/panchkula" className="hover:text-pink-600 flex items-center">
                    <span className="mr-2">📍</span>Baby Care Panchkula
                  </Link>
                </li>
              </ul>
            </div>

            {/* ICU at Home */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-red-500">
              <h3 className="text-lg font-semibold text-red-600 mb-3 flex items-center">
                <span className="text-2xl mr-2">🏥</span>
                ICU Setup at Home
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <Link href="/icu-at-home/chandigarh" className="hover:text-red-600 flex items-center">
                    <span className="mr-2">📍</span>ICU at Home Chandigarh
                  </Link>
                </li>
                <li>
                  <Link href="/icu-at-home/mohali" className="hover:text-red-600 flex items-center">
                    <span className="mr-2">📍</span>ICU at Home Mohali
                  </Link>
                </li>
                <li>
                  <Link href="/icu-at-home/panchkula" className="hover:text-red-600 flex items-center">
                    <span className="mr-2">📍</span>ICU at Home Panchkula
                  </Link>
                </li>
              </ul>
            </div>

            {/* Lab Tests */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-yellow-600 mb-3 flex items-center">
                <span className="text-2xl mr-2">🧪</span>
                Lab Tests at Home
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <Link href="/lab-test-at-home/chandigarh" className="hover:text-yellow-600 flex items-center">
                    <span className="mr-2">📍</span>Lab Test Chandigarh
                  </Link>
                </li>
                <li>
                  <Link href="/lab-test-at-home/mohali" className="hover:text-yellow-600 flex items-center">
                    <span className="mr-2">📍</span>Lab Test Mohali
                  </Link>
                </li>
                <li>
                  <Link href="/lab-test-at-home/panchkula" className="hover:text-yellow-600 flex items-center">
                    <span className="mr-2">📍</span>Lab Test Panchkula
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <article className="max-w-6xl mx-auto px-6 py-8 bg-white">
          {/* Main Title - H1 with Local Keywords */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Home Care Services in Mohali & Chandigarh: Complete Guide to Quality Healthcare at Home
          </h1>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              Professional Home Healthcare in Mohali and Chandigarh Tricity
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Families in <strong>Mohali, Chandigarh, and Panchkula</strong> now have access to professional <strong className="text-blue-600">home care services</strong> that bring hospital-quality healthcare to the comfort of your home. Whether you&apos;re in Phase 11 Mohali, Sector 17 Chandigarh, or any area in the Tricity region, <strong className="text-blue-600">CareKwik</strong> connects you with verified and trained caregivers who provide personalized medical attention.
              </p>
              <p>
                The demand for <strong className="text-blue-600">home care services in Mohali</strong> and <strong className="text-blue-600">home healthcare in Chandigarh</strong> has grown significantly. With an aging population and families seeking quality care without hospital visits, <strong className="text-blue-600">at-home care in Chandigarh Tricity</strong> offers the perfect solution—combining medical expertise with emotional comfort in familiar surroundings.
              </p>
              <p>
                From <strong className="text-blue-600">elder care in Mohali</strong> to <strong className="text-blue-600">nursing services in Chandigarh</strong>, professional caregivers are now available across all sectors of Mohali (Phases 1-11, Aerocity), Chandigarh (Sectors 1-63), Panchkula, Zirakpur, and Kharar.
              </p>
            </div>
          </section>

          {/* What Are Home Care Services */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              What Are Home Care Services in Mohali & Chandigarh?
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong className="text-blue-600">Home care services in Mohali and Chandigarh</strong> include a comprehensive range of medical and non-medical assistance delivered directly to your residence. These services help patients maintain independence while receiving professional healthcare support from <strong className="text-blue-600">trained caregivers in Chandigarh</strong>.
              </p>
              <p>
                <strong>Medical services</strong> available across Mohali and Chandigarh include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-blue-600">Nursing care at home in Mohali & Chandigarh</strong> - medication management, wound care, IV therapy</li>
                <li><strong className="text-blue-600">Elder care services in Chandigarh</strong> - geriatric care, dementia care, Alzheimer&apos;s care</li>
                <li><strong className="text-blue-600">Post-surgical care at home</strong> - recovery monitoring in Mohali and Chandigarh</li>
                <li><strong className="text-blue-600">Physiotherapy at home in Mohali</strong> - rehabilitation and pain management</li>
                <li><strong className="text-blue-600">ICU setup at home in Chandigarh</strong> - ventilator support, critical care</li>
                <li><strong className="text-blue-600">Mother and baby care in Mohali</strong> - postnatal care, infant care</li>
              </ul>
              <p>
                All caregivers are verified, trained, and experienced in providing <strong className="text-blue-600">home medical care in Chandigarh Tricity</strong>.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              Benefits of Choosing Home Care in Mohali & Chandigarh
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-lg text-blue-800 mb-2">🏡 Comfort of Home</h3>
                <p>
                  Receive professional <strong className="text-blue-600">nursing care in Mohali & Chandigarh</strong> while staying in familiar surroundings. Recovery is faster when patients are comfortable at home.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-lg text-green-800 mb-2">💰 Cost-Effective</h3>
                <p>
                  <strong className="text-blue-600">Home care services in Chandigarh</strong> eliminate hospital accommodation costs. Get professional care at affordable rates starting from ₹200/hour.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-lg text-purple-800 mb-2">👨‍⚕️ Personalized Care</h3>
                <p>
                  <strong className="text-blue-600">Certified home nurses in Mohali</strong> provide one-on-one attention tailored to your specific medical needs.
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                <h3 className="font-bold text-lg text-pink-800 mb-2">🕐 24/7 Availability</h3>
                <p>
                  <strong className="text-blue-600">24x7 elder care in Chandigarh</strong> ensures round-the-clock monitoring and immediate medical assistance when needed.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Services Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              Types of Home Care Services Available in Mohali & Chandigarh
            </h2>

            {/* Elderly Care Subsection */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                🧓 Elder Care Services in Mohali & Chandigarh
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-4 pl-4 border-l-4 border-blue-300">
                <p>
                  <strong className="text-blue-600">Senior home care services in Mohali and Chandigarh</strong> provide specialized support for aging adults. Our <strong className="text-blue-600">geriatric care at home</strong> focuses on age-related health conditions, mobility assistance, and daily living support across all areas of Mohali (Phase 1-11) and Chandigarh (all sectors).
                </p>
                <p>
                  For families dealing with memory conditions, we offer expert <strong className="text-blue-600">Alzheimer&apos;s care at home in Chandigarh</strong> and <strong className="text-blue-600">dementia care in Mohali</strong> with trained professionals who understand behavioral management and safety protocols.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal hygiene and grooming assistance</li>
                  <li>Medication management and reminders</li>
                  <li>Companionship and emotional support</li>
                  <li>Meal preparation and feeding assistance</li>
                  <li>Mobility support and fall prevention</li>
                </ul>
              </div>
            </div>

            {/* Medical Services Subsection */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                👩‍⚕️ Nursing and Medical Care in Mohali & Chandigarh
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-4 pl-4 border-l-4 border-green-300">
                <p>
                  Professional <strong className="text-blue-600">nursing care at home in Mohali & Chandigarh</strong> includes trained nurses who perform medical procedures safely at your residence. Our <strong className="text-blue-600">certified home nurses</strong> are available for both short-term and long-term care.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-blue-600">Home injection services in Chandigarh</strong> - IV drips, insulin shots, vaccinations</li>
                  <li><strong className="text-blue-600">Wound dressing at home in Mohali</strong> - post-surgical wound care</li>
                  <li><strong className="text-blue-600">ICU setup at home</strong> - ventilator support, critical care monitoring</li>
                  <li><strong className="text-blue-600">Doctor visits at home</strong> - regular consultations in Mohali & Chandigarh</li>
                  <li><strong className="text-blue-600">Palliative care</strong> - compassionate end-of-life care</li>
                </ul>
              </div>
            </div>

            {/* Specialized Care Subsection */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                🏃 Physiotherapy at Home in Mohali & Chandigarh
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-4 pl-4 border-l-4 border-purple-300">
                <p>
                  <strong className="text-blue-600">Physiotherapy at home in Mohali and Chandigarh</strong> helps patients recover from injuries, surgeries, and chronic pain conditions without traveling to clinics.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-blue-600">Stroke rehabilitation at home in Chandigarh</strong></li>
                  <li><strong className="text-blue-600">Parkinson&apos;s care in Mohali</strong> - movement therapy</li>
                  <li><strong className="text-blue-600">Paralysis patient care</strong> - mobility exercises</li>
                  <li>Post-surgical physiotherapy in Mohali & Chandigarh</li>
                  <li>Sports injury rehabilitation at home</li>
                </ul>
                <p>
                  Our physiotherapists serve all areas including Mohali Phases, Chandigarh sectors, Zirakpur, and Panchkula.
                </p>
              </div>
            </div>

            {/* Mother and Child Care Subsection */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                👶 Mother and Baby Care in Mohali & Chandigarh
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-4 pl-4 border-l-4 border-pink-300">
                <p>
                  <strong className="text-blue-600">Postnatal care at home in Mohali & Chandigarh</strong> provides new mothers with professional support during recovery. Our <strong className="text-blue-600">infant care nurses</strong> ensure proper baby care while educating parents.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Postnatal mother care and recovery monitoring</li>
                  <li><strong className="text-blue-600">Newborn care at home in Chandigarh</strong> - bathing, feeding, sleep training</li>
                  <li>Breastfeeding guidance and lactation support</li>
                  <li>Baby massage and developmental activities</li>
                  <li>Umbilical cord care and vaccination tracking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Choose Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              How to Choose Home Care Services in Mohali & Chandigarh
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                When selecting <strong className="text-blue-600">home care services in Chandigarh and Mohali</strong>, consider these important factors:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">✅ Verified Caregivers</h4>
                  <p className="text-sm">
                    Ensure <strong className="text-blue-600">trained caregivers in Mohali & Chandigarh</strong> have proper certifications, background checks, and experience.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">⭐ Reviews & Ratings</h4>
                  <p className="text-sm">
                    Check testimonials from families in Mohali and Chandigarh who have used the service.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">🩺 Customized Care Plans</h4>
                  <p className="text-sm">
                    <strong className="text-blue-600">Professional nursing services in Chandigarh</strong> should offer personalized care based on patient needs.
                  </p>
                </div>

                <div className="bg-pink-50 p-5 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">🚨 24/7 Emergency Support</h4>
                  <p className="text-sm">
                    Availability of round-the-clock assistance for urgent medical situations in Mohali & Chandigarh.
                  </p>
                </div>

                <div className="bg-yellow-50 p-5 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-2">💰 Transparent Pricing</h4>
                  <p className="text-sm">
                    Look for <strong className="text-blue-600">affordable home care in Chandigarh</strong> with clear pricing—no hidden charges.
                  </p>
                </div>

                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h4 className="font-bold text-indigo-800 mb-2">📍 Local Availability</h4>
                  <p className="text-sm">
                    Choose services that cover your specific area in Mohali (all phases) or Chandigarh (all sectors).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas Section - Important for Local SEO */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              Areas We Serve in Mohali, Chandigarh & Panchkula
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                CareKwik provides <strong className="text-blue-600">home healthcare services across the entire Chandigarh Tricity region</strong>:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-3">📍 Mohali Areas</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Phase 1 to Phase 11</li>
                    <li>• Mohali Aerocity</li>
                    <li>• Sector 76, 77, 78, 79, 80</li>
                    <li>• Kharar</li>
                    <li>• Kurali</li>
                    <li>• Landran</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-3">📍 Chandigarh Sectors</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• All Sectors (1-63)</li>
                    <li>• Sector 17 Market</li>
                    <li>• Sector 22, 34, 35</li>
                    <li>• Industrial Area</li>
                    <li>• IT Park</li>
                    <li>• Manimajra</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-3">📍 Panchkula & Nearby</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• All Panchkula Sectors</li>
                    <li>• Zirakpur</li>
                    <li>• Derabassi</li>
                    <li>• Pinjore</li>
                    <li>• Kalka</li>
                    <li>• Morni Hills</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Costs Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              Home Care Service Costs in Mohali & Chandigarh
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong className="text-blue-600">Affordable home care services in Mohali and Chandigarh</strong> are available with transparent pricing. No hidden charges—direct booking without agents.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-gray-800 mb-4 text-lg">💰 Pricing Overview - Mohali & Chandigarh</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between bg-white p-3 rounded">
                    <span>Hourly Nursing Care:</span>
                    <span className="font-semibold text-blue-600">₹200-500/hour</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded">
                    <span>12-Hour Nursing Shift:</span>
                    <span className="font-semibold text-blue-600">₹1,200-2,500/shift</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded">
                    <span>24-Hour Care (Live-in):</span>
                    <span className="font-semibold text-blue-600">₹15,000-30,000/month</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded">
                    <span>Physiotherapy Session:</span>
                    <span className="font-semibold text-blue-600">₹600-1,000/session</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded">
                    <span>Doctor Home Visit:</span>
                    <span className="font-semibold text-blue-600">₹500-1,500/visit</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded">
                    <span>Elder Care Package:</span>
                    <span className="font-semibold text-blue-600">₹12,000-25,000/month</span>
                  </div>
                </div>
              </div>

              <p>
                <strong className="text-blue-600">Monthly packages for home care in Mohali & Chandigarh</strong> provide better value for long-term care needs. Packages include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Basic nursing care and medication management</li>
                <li>Vital signs monitoring (BP, sugar, temperature)</li>
                <li>Personal hygiene assistance</li>
                <li>Regular caregiver rotation (if needed)</li>
                <li>24/7 emergency support hotline</li>
              </ul>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              What Our Clients Say - Mohali & Chandigarh Reviews
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
                <p className="text-gray-700 italic mb-3">
                  &apos;The <strong className="text-blue-600">elder care service in Mohali</strong> helped my father recover from surgery at home. The nurse was professional, caring, and available 24/7. Highly recommend CareKwik!&apos;
                </p>
                <p className="text-sm text-gray-600 font-semibold">- Mrs. Sharma, Phase 7 Mohali</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 shadow-sm">
                <p className="text-gray-700 italic mb-3">
                  &apos;Excellent <strong className="text-blue-600">physiotherapy at home in Chandigarh</strong>. The therapist came to Sector 22 every day for my knee rehabilitation. Very professional and affordable.&apos;
                </p>
                <p className="text-sm text-gray-600 font-semibold">- Mr. Gupta, Sector 22 Chandigarh</p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500 shadow-sm">
                <p className="text-gray-700 italic mb-3">
                  &apos;The <strong className="text-blue-600">mother and baby care service in Mohali</strong> was a lifesaver! The caregiver helped with everything—baby care, feeding advice, and postnatal recovery. Thank you CareKwik!&apos;
                </p>
                <p className="text-sm text-gray-600 font-semibold">- Young Mother, Phase 11 Mohali</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 shadow-sm">
                <p className="text-gray-700 italic mb-3">
                  &apos;My mother has Parkinson&apos;s and needed <strong className="text-blue-600">specialized care at home in Chandigarh</strong>. The caregiver is trained, patient, and understands her needs perfectly. Best decision we made.&apos;
                </p>
                <p className="text-sm text-gray-600 font-semibold">- Family from Sector 35 Chandigarh</p>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              Frequently Asked Questions - Home Care in Mohali & Chandigarh
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">❓ Are caregivers verified and trained?</h4>
                <p className="text-gray-700">
                  Yes, all <strong className="text-blue-600">caregivers in Mohali and Chandigarh</strong> are thoroughly verified with background checks, police verification, and medical certifications. Our <strong className="text-blue-600">certified home nurses</strong> maintain current licenses and undergo regular training.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">⏱️ How quickly can home care services start in Mohali?</h4>
                <p className="text-gray-700">
                  Most <strong className="text-blue-600">home care services in Mohali and Chandigarh</strong> can begin within 24-48 hours. For urgent needs, we offer same-day caregiver placement in most areas of Tricity.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">🔄 Can I change caregivers if needed?</h4>
                <p className="text-gray-700">
                  Absolutely! CareKwik understands that compatibility matters. If you&apos;re not satisfied with the caregiver, we&apos;ll arrange a replacement at no extra cost in Mohali, Chandigarh, or Panchkula.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">📍 Which areas in Mohali and Chandigarh do you cover?</h4>
                <p className="text-gray-700">
                  We provide <strong className="text-blue-600">home care services across all of Mohali</strong> (Phases 1-11, Aerocity, Kharar), <strong className="text-blue-600">all Chandigarh sectors</strong> (1-63), Panchkula, Zirakpur, Derabassi, and surrounding areas.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">💳 What payment methods do you accept?</h4>
                <p className="text-gray-700">
                  We accept cash, UPI, bank transfers, credit/debit cards, and online payments. Monthly invoices are provided for <strong className="text-blue-600">home care services in Chandigarh</strong>.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">🏥 Do you provide ICU care at home in Mohali?</h4>
                <p className="text-gray-700">
                  Yes, we offer complete <strong className="text-blue-600">ICU setup at home in Mohali and Chandigarh</strong> including ventilator support, critical care nurses, medical equipment, and doctor supervision.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">👩‍⚕️ Can I choose male or female caregivers?</h4>
                <p className="text-gray-700">
                  Yes, you can request <strong className="text-blue-600">female nurses in Mohali</strong> or <strong className="text-blue-600">male caregivers in Chandigarh</strong> based on patient comfort and family preferences.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              Get Started with Home Care in Mohali & Chandigarh Today
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong className="text-blue-600">Professional home care services in Mohali and Chandigarh</strong> offer families a compassionate, cost-effective alternative to hospital care. Whether you need <strong className="text-blue-600">elder care in Chandigarh</strong>, <strong className="text-blue-600">nursing services in Mohali</strong>, or <strong className="text-blue-600">physiotherapy at home</strong>, CareKwik connects you with verified caregivers who deliver quality healthcare in the comfort of your home.
              </p>
              <p>
                From <strong className="text-blue-600">post-surgical care</strong> to <strong className="text-blue-600">ICU setup at home</strong>, from <strong className="text-blue-600">mother-baby care</strong> to <strong className="text-blue-600">specialized dementia care</strong>—our trained professionals serve all areas of Mohali (Phases 1-11), Chandigarh (all sectors), Panchkula, Zirakpur, and beyond.
              </p>
              <p>
                The combination of medical expertise, personalized attention, and familiar surroundings creates the ideal environment for healing and recovery. <strong className="text-blue-600">Rehabilitation at home in Chandigarh</strong> demonstrates how professional healthcare can be delivered effectively outside hospital settings.
              </p>
              
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl shadow-lg text-white text-center mt-8">
                <h3 className="text-2xl font-bold mb-4">📞 Book Home Care Services in Mohali & Chandigarh</h3>
                <p className="mb-6">
                  Direct booking • Verified caregivers • No agent fees • 24/7 support
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <a 
                    href="tel:+917015875541" 
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-md"
                  >
                    Call Now: +91 70158 75541
                  </a>
                  <Link 
                    href="/contact-us" 
                    className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all duration-300 shadow-md"
                  >
                    Book Online
                  </Link>
                </div>
              </div>

              <p className="text-center mt-8 text-lg font-medium text-gray-800">
                🏡 Trusted by 1000+ families in Mohali, Chandigarh & Panchkula
              </p>
            </div>
          </section>
        </article>

        {/* <Testimonials /> */}
      </div>
    </>
  );
}