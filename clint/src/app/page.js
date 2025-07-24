import Typewriter from "@/components/Typewriter";
import "./globals.css";
import Services from "@/components/Services";
import CaretakerProfile from "@/components/CaretakerProfile";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Home Care Services in Chandigarh & Mohali | Book Trusted Caretakers - CareKwik",
  description: "Get trusted home care services in Chandigarh and Mohali with CareKwik. Book verified caretakers for Elder Care, ICU at Home, Baby Care & Physiotherapy. Safe, reliable & affordable.",
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
      title: "Lab tests at Home",
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
          <h1 className='font-bold text-2xl mb-10'>Our Home Care Services</h1>

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

      <Testimonials />
    </div>
  );
}
