// app/icu-at-home/page.tsx
import Image from 'next/image';
import Script from 'next/script';
import BookService from '@/components/bookservice';
import Link from 'next/link';
import { FaHeart, FaHome, FaUsers, FaShieldAlt, FaClock, FaPhone, FaStethoscope, FaAmbulance, FaUserMd } from 'react-icons/fa';
export const metadata = {
    title: "ICU at Home in Chandigarh, Mohali & Panchkula | CareKwik", // 58 characters
    description:
        "Get expert ICU setup at home with ventilator, nurse & monitors in Chandigarh, Mohali & Panchkula. Trusted critical care by CareKwik.", // 157 characters
    keywords: [
        "ICU at home",
        "ICU setup Chandigarh",
        "ICU nurse Mohali",
        "ICU ventilator Panchkula",
        "critical care at home",
        "home ICU services",
        "ICU bed rental",
        "emergency care at home"
    ],
    alternates: {
        canonical: "https://carekwik.com/icu-at-home",
    },
};



export default function ICUatHomePage() {
    return (
        <>
            {/* JSON-LD: LocalBusiness */}
            <Script id="ld-localbusiness-icu" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "CareKwik - ICU at Home",
                    "url": "https://carekwik.com/icu-at-home",
                    "image": "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163948/icu-home-care_carekwik.jpg",
                    "telephone": "+91-8307190216",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chandigarh",
                        "addressRegion": "Chandigarh",
                        "postalCode": "160036",
                        "addressCountry": "IN"
                    },
                    "priceRange": "₹₹₹",
                    "openingHours": "Mo-Su 09:00-20:00",
                    "description": "ICU setup at home with ventilators, patient monitors, ICU nurses. Serving Chandigarh, Mohali, Panchkula, and nearby cities.",
                    "areaServed": ["Chandigarh", "Mohali", "Panchkula", "Zirakpur"]
                })}
            </Script>

            {/* JSON-LD: FAQPage */}
            <Script id="ld-faq-icu" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Is ICU setup safe at home?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide hospital-grade ICU equipment and trained ICU nurses to ensure complete safety."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide a ventilator at home?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we offer BiPAP, CPAP, and full invasive ventilators based on doctor's recommendation."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book only ICU nursing service?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, if you already have equipment, we can provide ICU-trained nurses only."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does ICU at home cost?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Pricing depends on equipment, duration, and nursing hours. Contact us for customized quote."
                            }
                        }
                    ]
                })}
            </Script>

            <div className=" mx-auto md:p-10 md:p-10 p-4">
                {/* Hero Image */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between   ">
                    <Image
                        src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751540954/wmremove-transformed_5_rcxaud.jpg"
                        alt="ICU setup at home"
                        width={480}
                        height={450}
                        className="rounded-2xl   shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <p className="text-xl font-bold mb-4">Book ICU Care at Home</p>
                        <BookService servicename="ICU at Home" />
                    </div>
                </div>


                <h1 className="text-2xl font-bold text-gray-800 mb-4">

                </h1>
                {/* Description */}
                <div className="max-w-6xl mx-auto bg-white  rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="  p-3 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <FaHeart size={40} className="hidden md:block" />
                            <h1 className="md:text-4xl text-2xl font-bold"> ICU Setup at Home </h1>
                        </div>
                        <p className="md:text-xl ">Bringing Hospital-Level Critical Care to Your Doorstep</p>
                    </div>

                    {/* Article Content */}
                    <div className=" p-3 md:p-8 space-y-8">

                        {/* Introduction */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Introduction</h2>

                            <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Definition of ICU at Home</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>ICU at home</strong> represents a revolutionary approach to healthcare delivery, bringing intensive care unit services directly to patients&apos; residences. This innovative model of <strong>home ICU services</strong> transforms the traditional healthcare paradigm by establishing a complete <strong>ICU setup at home</strong>, ensuring patients receive the same level of monitoring and treatment they would receive in a hospital setting.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-green-800 mb-3">Growing Demand</h4>
                                    <p className="text-gray-700">
                                        The demand for <strong>critical care at home</strong> has surged dramatically due to an aging population and frequent hospital overflow situations. Families increasingly seek <strong>ICU care at home services</strong> as a viable alternative that combines medical excellence with emotional comfort.
                                    </p>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Ideal Patient Profiles</h4>
                                    <p className="text-gray-700">
                                        <strong>Home-based ICU care</strong> serves patients recovering from intensive care, those with terminal illnesses requiring palliative support, and individuals with chronic conditions needing continuous monitoring while maintaining their dignity at home.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Objectives */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Objectives</h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                    <FaShieldAlt className="text-blue-600 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Hospital-Level Care</h4>
                                        <p className="text-gray-600">Provide intensive care with <strong>ventilator support at home</strong> and comprehensive monitoring systems.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                    <FaHome className="text-green-600 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Patient Comfort</h4>
                                        <p className="text-gray-600">Ensure <strong>hospital-like care at home</strong> while maintaining family involvement and emotional support.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                    <FaUsers className="text-purple-600 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Minimize Readmissions</h4>
                                        <p className="text-gray-600">Reduce hospital readmissions through continuous <strong>home monitoring for critical patients</strong>.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                    <FaClock className="text-orange-600 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Continuity of Care</h4>
                                        <p className="text-gray-600">Support seamless healthcare transitions with <strong>24/7 ICU care at home</strong> services.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Core Services */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Core Services Offered</h2>

                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold text-blue-800 mb-4">Medical Monitoring and Support</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Continuous vitals monitoring including heart rate, oxygen saturation, and blood pressure</li>
                                        <li>• Professional <strong>home ventilator service</strong> with respiratory support</li>
                                        <li>• Advanced <strong>ICU equipment on rent</strong> including monitors, infusion pumps, and suction machines</li>
                                        <li>• Comprehensive <strong>oxygen support at home</strong> with concentrators and cylinders</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold text-green-800 mb-4">Skilled Nursing Care</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• <strong>ICU trained nurse at home</strong> providing round-the-clock professional care</li>
                                        <li>• Specialized <strong>tracheostomy care at home</strong> with expert attention</li>
                                        <li>• Comprehensive Ryle&apos;s tube and catheter management</li>
                                        <li>• Professional wound and pressure sore management protocols</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold text-purple-800 mb-4">Doctor Supervision</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Regular visits by critical care specialists and intensivists</li>
                                        <li>• Advanced teleconsultation support for immediate medical guidance</li>
                                        <li>• Comprehensive <strong>emergency medical care at home</strong> response protocols</li>
                                        <li>• Continuous medical oversight and treatment adjustments</li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-50 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Medication Management</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Professional intravenous therapy administration at home</li>
                                        <li>• Comprehensive pain and symptom management protocols</li>
                                        <li>• Specialized <strong>ICU palliative care at home</strong> for end-of-life comfort</li>
                                        <li>• Medication scheduling and monitoring systems</li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold text-red-800 mb-4">Rehabilitation & Support Services</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Specialized physiotherapy including respiratory and neurological rehabilitation</li>
                                        <li>• Professional psychological counseling for patients and families</li>
                                        <li>• Customized nutrition and diet planning for optimal recovery</li>
                                        <li>• <strong>Nursing care for bedridden patient</strong> with mobility assistance</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Equipment Provided */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Equipment Provided</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">ICU Bed</h4>
                                    <p className="text-sm text-gray-600"><strong>ICU bed for home use</strong> with fully adjustable features</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">Cardiac Monitors</h4>
                                    <p className="text-sm text-gray-600"><strong>Cardiac monitor at home</strong> for continuous heart monitoring</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">Ventilators</h4>
                                    <p className="text-sm text-gray-600"><strong>BiPAP and CPAP machine at home</strong> for respiratory support</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">Suction Machines</h4>
                                    <p className="text-sm text-gray-600"><strong>Suction machine for home ICU</strong> airway management</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">Oxygen Equipment</h4>
                                    <p className="text-sm text-gray-600">Concentrators and cylinders for continuous oxygen supply</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">Monitoring Systems</h4>
                                    <p className="text-sm text-gray-600">Advanced monitoring equipment for vital signs tracking</p>
                                </div>
                            </div>
                        </section>

                        {/* Patient Eligibility */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Patient Eligibility Criteria</h2>

                            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        Patients who are stable but require continuous ICU-level monitoring and care
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        Individuals recovering from major surgery, trauma, or requiring <strong>post-ICU recovery at home</strong>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        Patients with terminal illnesses needing palliative ICU support and comfort care
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        Families preferring <strong>end-of-life ICU care at home</strong> in familiar surroundings
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        <strong>Home ICU for elderly patients</strong> requiring specialized geriatric intensive care
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Team Structure */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Professional Team Structure</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="font-semibold text-gray-800">ICU-certified nurses with specialized training</span>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        <span className="font-semibold text-gray-800">Intensivists and general physicians</span>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        <span className="font-semibold text-gray-800">Respiratory therapists and specialists</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                                        <span className="font-semibold text-gray-800">Nutritionists and physiotherapists</span>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                        <span className="font-semibold text-gray-800">Emergency medical technicians (EMTs)</span>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                                        <span className="font-semibold text-gray-800"><strong>Critical care nurse at home</strong> coordinators</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Benefits */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Benefits of ICU at Home</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-green-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-800 mb-2">Cost-Effective Solution</h4>
                                        <p className="text-gray-700">Significantly more affordable than traditional hospital ICU stays while maintaining quality care standards.</p>
                                    </div>

                                    <div className="bg-blue-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-800 mb-2">Reduced Infection Risk</h4>
                                        <p className="text-gray-700">Lower exposure to hospital-acquired infections in the comfort of home environment.</p>
                                    </div>

                                    <div className="bg-purple-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-purple-800 mb-2">Emotional Comfort</h4>
                                        <p className="text-gray-700">Provides psychological benefits of being surrounded by loved ones during recovery.</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-yellow-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-yellow-800 mb-2">Family-Centered Care</h4>
                                        <p className="text-gray-700">Enables family participation in care decisions and daily patient interaction.</p>
                                    </div>

                                    <div className="bg-red-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-red-800 mb-2">Personalized Attention</h4>
                                        <p className="text-gray-700">One-on-one care ratio ensures dedicated attention to individual patient needs.</p>
                                    </div>

                                    <div className="bg-gray-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-800 mb-2">Flexible Care Plans</h4>
                                        <p className="text-gray-700"><strong>Intensive home care for senior citizens</strong> tailored to specific requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Safety & Quality */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Safety & Quality Assurance</h2>

                            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Daily comprehensive health records and remote monitoring systems</li>
                                        <li>• Strict hygiene and infection control protocols implementation</li>
                                    </ul>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Emergency escalation protocols with immediate response capabilities</li>
                                        <li>• Regular audits and follow-ups to ensure quality standards</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Packages & Pricing */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Packages & Pricing</h2>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-blue-50 p-6 rounded-lg text-center">
                                    <h4 className="font-semibold text-blue-800 mb-3">Flexible Packages</h4>
                                    <p className="text-gray-700">Hourly, daily, or monthly care packages based on patient requirements</p>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg text-center">
                                    <h4 className="font-semibold text-green-800 mb-3">Equipment Options</h4>
                                    <p className="text-gray-700"><strong>Rent hospital equipment for home</strong> or complete setup solutions</p>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg text-center">
                                    <h4 className="font-semibold text-purple-800 mb-3">Insurance Support</h4>
                                    <p className="text-gray-700">Assistance with insurance claims and coverage options where applicable</p>
                                </div>
                            </div>

                            <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                                <p className="text-center text-gray-700">
                                    For detailed information about <strong>cost of ICU setup at home</strong> and <strong>home ICU package price</strong>, contact our specialists for personalized quotations.
                                </p>
                            </div>
                        </section>

                        {/* Technology Integration */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Technology Integration</h2>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">Health Monitoring Apps</h4>
                                    <p className="text-sm text-gray-600">Advanced mobile applications for real-time health tracking</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">Remote Vitals Tracking</h4>
                                    <p className="text-sm text-gray-600">Continuous monitoring with cloud-based data management</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">Telemedicine Dashboard</h4>
                                    <p className="text-sm text-gray-600">Integrated platform for healthcare provider communication</p>
                                </div>
                            </div>
                        </section>

                        {/* Location Services */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Service Locations</h2>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-4">
                                    Our comprehensive <strong>home healthcare with ICU setup</strong> is available across major cities and regions:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• <strong>ICU at home services in Delhi</strong> with 24/7 availability</li>
                                        <li>• <strong>Home ICU services near me</strong> - Mumbai metropolitan area</li>
                                        <li>• <strong>Critical care at home in Chandigarh</strong> and surrounding regions</li>
                                    </ul>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• <strong>ICU care providers in Bangalore</strong> with advanced facilities</li>
                                        <li>• Expanding coverage to additional cities based on demand</li>
                                        <li>• Customized service delivery for rural and remote areas</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className=" py-8 px-4 rounded-lg  mt-10">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">ICU Setup at Home in Other Cities</h2>
                                <ul className="list-disc list-inside text-blue-700 space-y-2">
                                    <li><Link href="/icu-at-home/chandigarh" className="hover:underline">ICU at Home in Chandigarh</Link></li>
                                    <li><Link href="/icu-at-home/mohali" className="hover:underline">ICU at Home in Mohali</Link></li>
                                    <li><Link href="/icu-at-home/panchkula" className="hover:underline">ICU at Home in Panchkula</Link></li>
                                </ul>
                            </div>
                        </section>
                        {/* Contact & Support */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Contact & Support</h2>

                            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <FaPhone className="mx-auto mb-3 text-blue-600" size={32} />
                                        <h4 className="font-semibold text-gray-800 mb-2">Book Service</h4>
                                        <p className="text-gray-700">Easy booking process to <strong>book ICU at home service</strong> with immediate response</p>
                                    </div>

                                    <div className="text-center">
                                        <FaClock className="mx-auto mb-3 text-green-600" size={32} />
                                        <h4 className="font-semibold text-gray-800 mb-2">24/7 Support</h4>
                                        <p className="text-gray-700">Round-the-clock emergency support line for immediate assistance</p>
                                    </div>

                                    <div className="text-center">
                                        <FaHome className="mx-auto mb-3 text-purple-600" size={32} />
                                        <h4 className="font-semibold text-gray-800 mb-2">Home Assessment</h4>
                                        <p className="text-gray-700">Initial home assessment to determine <strong>affordable ICU setup at home</strong> requirements</p>
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <p className="text-gray-700">
                                        Ready to <strong>hire ICU nurse for home</strong> or need more information about our services? Contact our specialists today for personalized consultation and <strong>care for critical patient at home</strong>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white  p-3 md:p-8 rounded-lg text-center">
                            <h2 className="text-3xl font-bold mb-4">Experience Premium ICU Care at Home</h2>
                            <p className="text-xl mb-6">
                                Transform your healthcare experience with our comprehensive <strong>ICU home care for terminally ill</strong> and recovering patients.
                                We provide the perfect blend of medical excellence and emotional comfort.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link
                                    href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="bg-white cursor-pointer text-blue-800 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300">
                                        Get Free Consultation
                                    </button>
                                </Link>
                                <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300">
                                    View Service Packages
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </>
    );
}
