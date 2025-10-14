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
  title: "Home Care Services in Chandigarh | Nursing & Elderly Care",
  description: "Book trusted home care in Chandigarh, Mohali & Panchkula. Trained caregivers for Elder Care, ICU, Nursing, Physiotherapy—safe & affordable by CareKwik.",
  keywords: "home care Chandigarh, elder care Mohali, ICU at home, home nurse Panchkula, patient care Chandigarh, physiotherapy at home, nursing services Mohali, CareKwik",
  openGraph: {
    title: "Top Home Care in Chandigarh & Mohali | CareKwik",
    description: "Book verified home care services in Chandigarh & Mohali. CareKwik connects you directly to trained caretakers – no agents, no extra charges.",
    url: "https://carekwik.com",
    type: "website",
    siteName: "CareKwik",
    images: [{
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751259853/og_image_dav7mz.jpg",
      width: 1200,
      height: 630,
      alt: "CareKwik - Home Healthcare Services",
    }]
  },
  alternates: {
    canonical: 'https://carekwik.com',
  },
  robots: "index, follow",
};
export default async function Home() {
  const services = [
    {
      title: "Physiotherapy at home",
      description: "Expert physiotherapy for recorey and pain management.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751465176/wmremove-transformed_4_eemrcj.jpg",

    },
    {
      title: "Elder Care at Home",
      description: "Compassionate care for seniors in the comfort of their home.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1753163918/16-SM1104377_lgfnew.jpg"
    },
    {
      title: "ICU at Home",
      description: "Advanced ICU setup and care at home.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751540954/wmremove-transformed_5_rcxaud.jpg"
    },
    ,
    {
      title: "Nursing Care at Home",
      description: "Skilled nursing care at home for safe recovery.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1753344614/220-SM987818_woof2x.jpg"
    },

    {
      title: "Mother Baby Care at Home",
      description: "Spacialized care for new mothers and infants.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1753210013/220-SM681360_vp9gp2.jpg"
    },
    {
      title: "Lab test at Home",
      description: "Spacialized care for new mothers and infants.",
      image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1753345685/20-SM88262_aahocp.jpg"
    }
  ]
  const slugifyServices = (servicename) => {
    return servicename
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumerics with hyphen
      .replace(/^-+|-+$/g, '')      // remove leading/trailing hyphens
      ;
  };
  return (
    <div className="">
      <div className="  ">


        <Typewriter />
      </div>
      
<DiscountCarousel/>
<HomeCareWomenVideo/>
<MaleFemaleDiscounts/>
<HomeCareForMen/>
      {/* <CaretakerProfile /> */}
      <section className="mt-16 bg-gray-50 py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Explore Our Home heal Services in Chandigarh , Mohali & Panchkula
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Elder Care */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-indigo-600 mb-3">Elder Care at Home</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><Link href="/elder-care-at-home/chandigarh" className="hover:text-indigo-500">Chandigarh</Link></li>
              <li><Link href="/elder-care-at-home/mohali" className="hover:text-indigo-500">Mohali</Link></li>
              <li><Link href="/elder-care-at-home/panchkula" className="hover:text-indigo-500">Panchkula</Link></li>
            </ul>
          </div>

          {/* Physiotherapy */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-green-600 mb-3">Physiotherapy at Home</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><Link href="/physiotherapy-at-home/chandigarh" className="hover:text-green-500">Chandigarh</Link></li>
              <li><Link href="/physiotherapy-at-home/mohali" className="hover:text-green-500">Mohali</Link></li>
              <li><Link href="/physiotherapy-at-home/panchkula" className="hover:text-green-500">Panchkula</Link></li>
            </ul>
          </div>

          {/* Nursing Care */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-600 mb-3">Nursing Care at Home</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><Link href="/nursing-care-at-home/chandigarh" className="hover:text-blue-500">Chandigarh</Link></li>
              <li><Link href="/nursing-care-at-home/mohali" className="hover:text-blue-500">Mohali</Link></li>
              <li><Link href="/nursing-care-at-home/panchkula" className="hover:text-blue-500">Panchkula</Link></li>
            </ul>
          </div>

          {/* Mother & Baby Care */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-pink-600 mb-3">Mother & Baby Care</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><Link href="/mother-baby-care-at-home/chandigarh" className="hover:text-pink-500">Chandigarh</Link></li>
              <li><Link href="/mother-baby-care-at-home/mohali" className="hover:text-pink-500">Mohali</Link></li>
              <li><Link href="/mother-baby-care-at-home/panchkula" className="hover:text-pink-500">Panchkula</Link></li>
            </ul>
          </div>

          {/* ICU at Home */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-red-600 mb-3">ICU Setup at Home</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><Link href="/icu-at-home/chandigarh" className="hover:text-red-500">Chandigarh</Link></li>
              <li><Link href="/icu-at-home/mohali" className="hover:text-red-500">Mohali</Link></li>
              <li><Link href="/icu-at-home/panchkula" className="hover:text-red-500">Panchkula</Link></li>
            </ul>
          </div>

          {/* Lab Tests */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-yellow-600 mb-3">Lab Tests at Home</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><Link href="/lab-test-at-home/chandigarh" className="hover:text-yellow-500">Chandigarh</Link></li>
              <li><Link href="/lab-test-at-home/mohali" className="hover:text-yellow-500">Mohali</Link></li>
              <li><Link href="/lab-test-at-home/panchkula" className="hover:text-yellow-500">Panchkula</Link></li>
            </ul>
          </div>
        </div>
      </section>
    <div className="max-w-6xl mx-auto px-6 py-8 bg-white">
      {/* Main Title - H1 */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
        Home Care Services in Chandigarh: Your Complete Guide to Quality Healthcare at Home
      </h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          Introduction
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            In today&apos;s fast-paced world, families often struggle to provide adequate care for their elderly loved ones or patients recovering from medical procedures. <span className="font-bold text-blue-600">Home care service in Chandigarh</span> has emerged as a practical solution, offering professional healthcare services in the comfort of one&apos;s own home. The concept of <span className="font-bold text-blue-600">home healthcare Chandigarh</span> has gained tremendous popularity as it combines medical expertise with the emotional comfort of familiar surroundings.
          </p>
          <p>
            The demand for <span className="font-bold text-blue-600">Chandigarh home care services</span> has witnessed a significant surge in recent years. This growth can be attributed to the city&apos;s aging population, increased awareness about personalized care, and the preference for maintaining independence while receiving medical attention. As families become more nuclear and children often live in different cities for work, <span className="font-bold text-blue-600">at-home care Chandigarh</span> has become an essential service for ensuring loved ones receive the care they deserve.
          </p>
        </div>
      </section>

      {/* What Are Home Care Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          What Are Home Care Services?
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            <span className="font-bold text-blue-600">Home care services</span> encompass a wide range of medical and non-medical assistance provided to individuals in their homes. These services are designed to help people maintain their independence while receiving necessary care and support. The scope of <span className="font-bold text-blue-600">home medical care Chandigarh</span> extends from basic daily living assistance to complex medical procedures that were traditionally performed only in hospitals.
          </p>
          <p>
            Home care services can be broadly categorized into two types: medical and non-medical care. Medical services include <span className="font-bold text-blue-600">in-home nursing care Chandigarh</span>, medication management, wound care, and post-surgical monitoring. Non-medical services focus on <span className="font-bold text-blue-600">daily living assistance Chandigarh</span>, companionship, housekeeping, and personal care.
          </p>
          <p>
            Examples of services include <span className="font-bold text-blue-600">elder care services Chandigarh</span>, <span className="font-bold text-blue-600">post-surgical care at home Chandigarh</span>, <span className="font-bold text-blue-600">home physiotherapy Chandigarh</span>, professional nursing assistance, <span className="font-bold text-blue-600">companion care Chandigarh</span>, and specialized care for conditions like dementia and Alzheimer&apos;s. These services are delivered by <span className="font-bold text-blue-600">trained caregiver in Chandigarh</span> professionals who understand the unique needs of each patient.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          Benefits of Home Care Services
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            The advantages of choosing <span className="font-bold text-blue-600">home nursing service in Chandigarh</span> over traditional hospital care are numerous and compelling. Personalized care in a familiar environment stands as the primary benefit, allowing patients to recover and receive treatment surrounded by their cherished memories and loved ones.
          </p>
          <p>
            Cost-effectiveness represents another significant advantage of <span className="font-bold text-blue-600">private nursing care Chandigarh</span>. Hospital stays can be expensive, with additional costs for accommodation, meals, and visitor restrictions. Home care eliminates many of these expenses while providing equally professional medical attention through <span className="font-bold text-blue-600">certified home nurse Chandigarh</span> professionals.
          </p>
          <p>
            The emotional and mental comfort that comes with staying at home cannot be overstated. Patients experience reduced anxiety and stress when receiving <span className="font-bold text-blue-600">senior citizen care Chandigarh</span> in their own environment. This comfort often translates to faster recovery times and better overall health outcomes.
          </p>
          <p>
            Flexibility in schedules and routines is another key benefit. Unlike hospitals with rigid visiting hours and meal times, home care allows families to maintain their preferred routines while ensuring continuous medical supervision through <span className="font-bold text-blue-600">24x7 elder care Chandigarh</span> services when needed.
          </p>
        </div>
      </section>

      {/* Types of Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          Types of Home Care Services Offered in Chandigarh
        </h2>

        {/* Elderly Care Subsection */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-left">
            Elderly and Senior Care Services
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-4 border-l-4 border-blue-300">
            <p>
              <span className="font-bold text-blue-600">Senior home care services Chandigarh</span> cater specifically to the unique needs of aging adults. These services include <span className="font-bold text-blue-600">geriatric care at home Chandigarh</span>, which focuses on age-related health conditions and mobility issues. <span className="font-bold text-blue-600">Elderly home nurse Chandigarh</span> professionals are specially trained to handle the complex medical and emotional needs of senior citizens.
            </p>
            <p>
              For families dealing with memory-related conditions, specialized <span className="font-bold text-blue-600">Alzheimer&apos;s care at home Chandigarh</span> and <span className="font-bold text-blue-600">dementia care at home Chandigarh</span> services provide expert assistance. These services include memory stimulation activities, safety monitoring, and behavioral management techniques.
            </p>
            <p>
              <span className="font-bold text-blue-600">Assisted living at home Chandigarh</span> services bridge the gap between complete independence and institutional care, offering <span className="font-bold text-blue-600">daily living assistance for seniors Chandigarh</span> while maintaining their dignity and autonomy.
            </p>
          </div>
        </div>

        {/* Medical Services Subsection */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-left">
            Medical and Nursing Services
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-4 border-l-4 border-green-300">
            <p>
              Professional medical care at home includes services from <span className="font-bold text-blue-600">trained nurse at home Chandigarh</span> who can perform various medical procedures. <span className="font-bold text-blue-600">Home injection service Chandigarh</span> ensures patients receive necessary medications and treatments without frequent hospital visits.
            </p>
            <p>
              Specialized procedures like <span className="font-bold text-blue-600">wound dressing at home Chandigarh</span> and <span className="font-bold text-blue-600">ICU setup at home Chandigarh</span> bring hospital-level care to the patient&apos;s residence. For those requiring extensive medical monitoring, <span className="font-bold text-blue-600">ventilator support at home Chandigarh</span> provides life-sustaining equipment with professional oversight.
            </p>
            <p>
              <span className="font-bold text-blue-600">Doctor visit at home Chandigarh</span> services ensure regular medical consultations without the stress of traveling to clinics. <span className="font-bold text-blue-600">Palliative care at home Chandigarh</span> offers compassionate end-of-life care, focusing on comfort and quality of life.
            </p>
          </div>
        </div>

        {/* Specialized Care Subsection */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-left">
            Specialized Care Services
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-4 border-l-4 border-purple-300">
            <p>
              <span className="font-bold text-blue-600">Stroke rehabilitation at home Chandigarh</span> helps patients regain independence through targeted therapy programs. <span className="font-bold text-blue-600">Parkinson&apos;s care at home Chandigarh</span> addresses the specific needs of patients with movement disorders, while <span className="font-bold text-blue-600">paralysis patient care at home Chandigarh</span> focuses on preventing complications and maintaining quality of life.
            </p>
            <p>
              <span className="font-bold text-blue-600">Bedridden patient care Chandigarh</span> ensures proper positioning, skin care, and hygiene maintenance for immobile patients. <span className="font-bold text-blue-600">Mobility assistance at home Chandigarh</span> helps patients maintain whatever independence is possible while ensuring safety.
            </p>
          </div>
        </div>

        {/* Mother and Child Care Subsection */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-left">
            Mother and Child Care
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-4 border-l-4 border-pink-300">
            <p>
              <span className="font-bold text-blue-600">Postnatal care at home Chandigarh</span> provides new mothers with professional support during the crucial recovery period. <span className="font-bold text-blue-600">Baby care at home Chandigarh</span> and <span className="font-bold text-blue-600">newborn care at home Chandigarh</span> services ensure proper infant care while educating parents about newborn needs.
            </p>
            <p>
              <span className="font-bold text-blue-600">Mother and baby care services Chandigarh</span> offer comprehensive support, including breastfeeding guidance, infant care education, and postpartum recovery assistance through <span className="font-bold text-blue-600">infant care nurse Chandigarh</span> professionals.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          How to Choose the Right Home Care Service in Chandigarh
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Selecting the appropriate <span className="font-bold text-blue-600">caretaker service in Chandigarh</span> requires careful consideration of several factors. The credentials and certifications of caregivers should be your first priority. Ensure that the <span className="font-bold text-blue-600">licensed home care services Chandigarh</span> you choose employ qualified professionals with proper training and background checks.
          </p>
          <p>
            Reviews and testimonials from previous clients provide valuable insights into service quality. Look for <span className="font-bold text-blue-600">trusted home caregiver Chandigarh</span> providers with positive feedback and proven track records in delivering reliable care.
          </p>
          <p>
            The availability of customized care plans is crucial, as every patient&apos;s needs are unique. <span className="font-bold text-blue-600">Verified home care professionals Chandigarh</span> should conduct thorough assessments and develop personalized care strategies.
          </p>
          <p>
            Emergency support and round-the-clock assistance capabilities are essential features. <span className="font-bold text-blue-600">On-demand nursing care Chandigarh</span> services should be available when urgent medical situations arise.
          </p>
          <p>
            Affordability and insurance compatibility ensure that quality care remains accessible. <span className="font-bold text-blue-600">Affordable caregiver services Chandigarh</span> should offer transparent pricing and work with various insurance providers.
          </p>
        </div>
      </section>

      {/* Top Providers Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          Top Home Care Service Providers in Chandigarh
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Several reputable agencies offer <span className="font-bold text-blue-600">best home care agencies in Chandigarh</span> services:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-800 mb-2">Portea Medical</h4>
              <p className="text-sm">
                Provides comprehensive <span className="font-bold text-blue-600">Chandigarh home health providers</span> services, including nursing care, physiotherapy, and diagnostic services at home. Their team offers <span className="font-bold text-blue-600">professional nursing at home Chandigarh</span> with 24/7 support.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 mb-2">HealthCare atHOME</h4>
              <p className="text-sm">
                Specializes in <span className="font-bold text-blue-600">health care at home Chandigarh</span> services, offering everything from basic nursing to complex medical procedures. They provide <span className="font-bold text-blue-600">trained attendants for home care Chandigarh</span> for various medical conditions.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-800 mb-2">Nightingales</h4>
              <p className="text-sm">
                Focuses on <span className="font-bold text-blue-600">home support services Chandigarh</span> with experienced nurses and caregivers. They offer both <span className="font-bold text-blue-600">part-time caregiver Chandigarh</span> and <span className="font-bold text-blue-600">full-time caregiver Chandigarh</span> options.
              </p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
              <h4 className="font-bold text-pink-800 mb-2">Care24</h4>
              <p className="text-sm">
                Provides <span className="font-bold text-blue-600">Chandigarh health care home solutions</span> with specialized services for elderly care and post-operative recovery. Their <span className="font-bold text-blue-600">live-in caretaker Chandigarh</span> services ensure continuous monitoring.
              </p>
            </div>
          </div>
          <p className="mt-4">
            Local providers also offer <span className="font-bold text-blue-600">sector-wise home care Chandigarh</span> services, ensuring community-based care delivery throughout the city.
          </p>
        </div>
      </section>

      {/* Costs Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          Costs and Packages
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            The cost of <span className="font-bold text-blue-600">home wellness services Chandigarh</span> varies depending on the type and duration of care required. <span className="font-bold text-blue-600">Hourly nurse services Chandigarh</span> typically range from ₹200-500 per hour, while <span className="font-bold text-blue-600">full-time caregiver</span> services may cost ₹15,000-30,000 per month.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-3">Pricing Overview:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span>Hourly Services:</span>
                <span className="font-semibold">₹200-500/hour</span>
              </div>
              <div className="flex justify-between">
                <span>Full-time Care:</span>
                <span className="font-semibold">₹15,000-30,000/month</span>
              </div>
              <div className="flex justify-between">
                <span>Doctor Visits:</span>
                <span className="font-semibold">₹500-1,500/visit</span>
              </div>
              <div className="flex justify-between">
                <span>Specialized Care:</span>
                <span className="font-semibold">Premium rates apply</span>
              </div>
            </div>
          </div>
          <p>
            <span className="font-bold text-blue-600">Pay-per-visit</span> options are available for services like <span className="font-bold text-blue-600">doctor visit at home Chandigarh</span> or <span className="font-bold text-blue-600">home injection service Chandigarh</span>, typically costing ₹500-1,500 per visit. Monthly packages often provide better value for ongoing care needs.
          </p>
          <p>
            Packages typically include basic nursing care, medication management, vital sign monitoring, and <span className="font-bold text-blue-600">personal hygiene care at home Chandigarh</span>. Additional services like <span className="font-bold text-blue-600">home physiotherapy Chandigarh</span> or specialized procedures may incur extra charges.
          </p>
          <p>
            <span className="font-bold text-blue-600">Female nurse at home Chandigarh</span> or <span className="font-bold text-blue-600">male nurse for home care Chandigarh</span> preferences may affect pricing, with specialized or gender-specific requests sometimes carrying premium charges.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          Testimonials & Real-Life Experiences
        </h2>
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 italic mb-3">
              &apos;The <span className="font-bold text-blue-600">elderly home nurse Chandigarh</span> service helped my mother recover from hip surgery in familiar surroundings. The personalized attention she received was exceptional.&apos;
            </p>
            <p className="text-sm text-gray-600">- Mrs. Sharma, Sector 22</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <p className="text-gray-700 italic mb-3">
              &apos;The <span className="font-bold text-blue-600">Parkinson&apos;s care at home Chandigarh</span> team understands the unique challenges of the condition. Their support has significantly improved our family&apos;s quality of life.&apos;
            </p>
            <p className="text-sm text-gray-600">- Mr. Gupta</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
            <p className="text-gray-700 italic mb-3">
              &apos;Having professional support during those initial weeks was invaluable. The <span className="font-bold text-blue-600">infant care nurse</span> taught us so much about newborn care.&apos;
            </p>
            <p className="text-sm text-gray-600">- Young Mother, Mohali</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          FAQs About Home Care in Chandigarh
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-3">Are caregivers trained and background-checked?</h4>
            <p className="text-gray-700">
              Yes, reputable <span className="font-bold text-blue-600">home care company Chandigarh</span> providers ensure all staff undergo thorough background checks and professional training. <span className="font-bold text-blue-600">Certified home nurse Chandigarh</span> professionals maintain current licenses and receive ongoing education.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-3">How soon can services be started?</h4>
            <p className="text-gray-700">
              Most <span className="font-bold text-blue-600">near me home care services Chandigarh</span> can begin within 24-48 hours of consultation, depending on the type of care required and availability of specialized staff.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-3">Can I switch caregivers if needed?</h4>
            <p className="text-gray-700">
              Absolutely. Quality <span className="font-bold text-blue-600">Chandigarh city home care providers</span> understand that personality matching is crucial for effective care and allow caregiver changes when necessary.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-3">What areas do you serve?</h4>
            <p className="text-gray-700">
              Services are available throughout the Chandigarh Tricity region, including <span className="font-bold text-blue-600">home care services in Mohali</span>, <span className="font-bold text-blue-600">home nurse in Panchkula</span>, <span className="font-bold text-blue-600">elder care in Zirakpur</span>, and <span className="font-bold text-blue-600">Panchkula elderly care at home</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          Conclusion
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            <span className="font-bold text-blue-600">Home care services</span> represent a smart, compassionate choice for families seeking quality healthcare without compromising comfort and independence. The growth of <span className="font-bold text-blue-600">Chandigarh home care services</span> reflects the community&apos;s recognition of these benefits and the availability of professional, reliable care options.
          </p>
          <p>
            Whether you need <span className="font-bold text-blue-600">senior citizen support Chandigarh</span>, <span className="font-bold text-blue-600">cancer care at home Chandigarh</span>, <span className="font-bold text-blue-600">diabetes care at home Chandigarh</span>, <span className="font-bold text-blue-600">cardiac care at home Chandigarh</span>, or <span className="font-bold text-blue-600">orthopedic patient care Chandigarh</span>, professional home care services provide the expertise and compassion your loved ones deserve.
          </p>
          <p>
            The combination of medical expertise, personalized attention, and familiar surroundings creates an optimal healing environment. <span className="font-bold text-blue-600">Rehabilitation at home Chandigarh</span> services demonstrate how professional care can be delivered effectively outside traditional healthcare settings.
          </p>
          <p>
            We encourage you to consult with a trusted <span className="font-bold text-blue-600">local nurse service Chandigarh</span> provider to discuss your specific needs. Professional <span className="font-bold text-blue-600">home care consultation Chandigarh</span> services can help determine the most appropriate care plan for your situation.
          </p>
          
          {/* Call to Action */}
          
          
          <p className="text-center mt-6 text-lg font-medium text-gray-800">
            Take the first step toward providing your loved ones with the quality care they deserve in the comfort of their own home.
          </p>
        </div>
      </section>
    </div>
      {/* <Testimonials /> */}


    </div>
  );
}