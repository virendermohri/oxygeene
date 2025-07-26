import Typewriter from "@/components/Typewriter";
import "./globals.css";
import Services from "@/components/Services";
import CaretakerProfile from "@/components/CaretakerProfile";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Home Care Services in Chandigarh & Mohali | CareKwik",
  description: "CareKwik offers expert home healthcare services in Chandigarh, Mohali & Panchkula. Book trained caregivers for Elder Care, ICU at Home, Baby Care, Nursing, Physiotherapy & more—safe, verified, and affordable solutions for your loved ones.",

  keywords: "home care in chandigarh, home care mohali, elder care chandigarh, elder care mohali, icu at home chandigarh, icu at home mohali, physiotherapy at home chandigarh, home nurse mohali, patient care mohali, baby care mohali, elderly care chandigarh, home attendant chandigarh, caretaker in mohali, home visit nurse chandigarh, nursing service mohali, 24x7 home care mohali, medical equipment chandigarh, wheelchair rental mohali, oxygen cylinder mohali, mohali health care, chandigarh patient care, home health services chandigarh, carekwik chandigarh mohali",
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
      {/* <Services/> */}
      <div id='services' className="  px-4 md:mb-20 md:h-screen md:h-auto md:max-w-5xl  w-full mx-auto  py-8  ">
        <div className="flex flex-col">
          <p className='font-bold text-2xl mb-10'>Our Home Care Services</p>

          <div className="grid md:grid-cols-3  grid-cols-2 justify-center md:gap-10 gap-6 ">
            {services.map((item, index) => {
              return <Link href={`/${slugifyServices(item.title)}`} className="flex cursor-pointer flex-col gap-2 " key={item.title}>
                <Image src={item.image_url} className='w-full rounded-xl shadow' width={100} height={100} alt={item.title} />
                <p className='md:font-semibold   text-gray-800 md:text-lg '>{item.title}</p>
                <p className='text-gray-600 md:block hidden text-sm'>{item.description}</p>
              </Link>
            })}
          </div>
        </div>
      </div>

      <CaretakerProfile />
      <section className="mt-16 bg-gray-50 py-10 px-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Explore Our Home care Services in Chandigarh , Mohali & Panchkula
        </h1>

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
              <li><Link href="/mother-baby-care/chandigarh" className="hover:text-pink-500">Chandigarh</Link></li>
              <li><Link href="/mother-baby-care/mohali" className="hover:text-pink-500">Mohali</Link></li>
              <li><Link href="/mother-baby-care/panchkula" className="hover:text-pink-500">Panchkula</Link></li>
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
      <div className="max-w-6xl mx-auto py-5 md:py-10">
        <h2 className="text-2xl font-bold py-2 md:py-5">Trusted Home Care Services in Chandigarh & Mohali</h2>
        <p className="text-gray-700">At CareKwik, we specialize in providing compassionate and professional home care services tailored to your family&apos;s needs. Whether you&apos;re seeking elder care at home, ICU setup at home, mother & baby care, or physiotherapy services, our trained caretakers and nurses deliver quality care right at your doorstep. Serving areas like Chandigarh, Mohali, and Panchkula, we ensure comfort, safety, and timely medical support for your loved ones. With 24/7 availability, verified staff, and personalized care plans, CareKwik is your trusted choice for home nursing, post-surgery care, and chronic illness support. Book reliable caregivers today and experience the peace of mind that comes with expert care at home.</p>
      </div>
      <Testimonials />


    </div>
  );
}
