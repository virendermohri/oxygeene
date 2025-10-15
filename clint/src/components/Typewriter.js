import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const OxyTagline = () => {
  const Service_images = [
    {
      route_url: "Elder Care at Home",
      title: "Elder Care",
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1759132874/vecteezy_disabled-old-woman-in-wheelchair-with-young-man-for-care-job_41329969_mstpwx.png"
    },
    {
      route_url: "Nursing Care at Home",
      title: "Nursing Care",
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1759139883/a-nurse-is-tending-to-a-patient-in-a-hospital-bed-png_f8fute.webp"
    },
    {
      route_url: "ICU at Home",
      title: "Post-Surgical Care",
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1759907737/a-nurse-is-helping-a-patient-with-a-leg-png_a6ea5b.webp"
    },
    {
      route_url: "Physiotherapy at Home",
      title: "Physiotherapy",
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1759132869/caregiver-assisting-senior-woman-with-gentle-support-in-a-compassionate-environment-png_h8kcyc.webp"
    },
    {
      route_url: "Mother Baby Care at Home",
      title: "Mother & Baby Care",
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1759132925/vecteezy_mother-holding-sweet-baby-young-mom-hugs-her-baby-with-love_68681949_qgfelw.png"
    },
    {
      route_url: "ICU at Home",
      title: "ICU Care",
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1759142494/patient-in-hospital-png_rii89z.webp"
    },

  ]
  const services = [
     {
      route_url: "Physiotherapy at Home",
      title: "Physiotherapy",
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1759132869/caregiver-assisting-senior-woman-with-gentle-support-in-a-compassionate-environment-png_h8kcyc.webp"
    },
    {
      route_url: "Mother Baby Care at Home",
      title: "Mother & Baby Care",
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1759132925/vecteezy_mother-holding-sweet-baby-young-mom-hugs-her-baby-with-love_68681949_qgfelw.png"
    },
    {
      route_url: "ICU at Home",
      title: "ICU Care",
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1759142494/patient-in-hospital-png_rii89z.webp"
    },
  ]
  const long_images = [{
    route_url: "Nursing Care at Home",
    title: "Vaccination",
    url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1759142540/doctor-applying-vaccine-of-patient-free-png_x8gwum.webp"
  },
  {
    route_url: "Medical Equipment",
    title: "Medical Equipment",
    url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1759132937/health-and-medicine-3d-icon-png_vlgw3o.webp"
  },]
  const slugifyServices = (servicename) => {
    return servicename
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumerics with hyphen
      .replace(/^-+|-+$/g, '')      // remove leading/trailing hyphens
      ;
  };
  async function getDiscountData() {
    // Example: fetch from API or DB
    return {
      title: "🎉 October Health Check-up Offer",
      discount: "30% OFF",
      message: "Stay healthy this fall — book your check-up today!",
    };
  }
  return (


    <div className="flex  py-5 max-w-7xl m-auto md:mt-5 ">
      <div className="flex justify-between gap-10 md:gap-20  w-full">
        <div className="flex-col ">
          <div className="relative md:hidden flex-shrink-0 w-[90%] mx-auto  md:w-auto h-56 rounded overflow-hidden shadow-md snap-start group">
            {/* Background Image */}
            <Image
              src={"https://res.cloudinary.com/divlt5fqo/image/upload/v1760164141/ankle-3135710_1280_arbvty.jpg"}
              alt={"Physiotherapy at Home"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Overlay */}
            <div className="absolute top-10 w-full text-white h-56 p-4 bg-gradient-to-t from-black/60 via-black/60 to-transparent">
              <h3 className="text-xl font-black ">Physiotherapy at Home in mohali </h3>
              <p className="text-lg font-medium text-white">
                Only ₹600/session
              </p>
              <Link
                href={"/physiotherapy-at-home"}
                className="inline-block mt-2 text-sm bg-white text-black  px-4 py-1.5 rounded font-semibold hover:bg-emerald-50 transition-all"
              >
                Book Now
              </Link>
            </div>
          </div>
          <p className='text-4xl font-semibold mb-5 md:block hidden md:w-[70%]'>Home services at your doorstep</p>
          <div className="w-full static z-10 md:border-1 border-gray-300 p-6 -gray-300 rounded-xl ">
            <p className='text-gray-500 text-xl mb-5 md:mb-10 font-semibold '>What are looking for ?</p>
            <div className="grid  grid-rows-2 grid-cols-3 gap-3 md:gap-5">

              {Service_images.map((item, index) =>
                <Link href={slugifyServices(item.route_url)} className="hover:underline underline-offset-8 flex cursor-pointer flex-col items-center" key={index}>
                  <div className="">
                    <div className="flex  items-center md:w-30 md:h-20 justify-center bg-gray-100 rounded p-3">
                      <Image src={item.url} width={40} height={40} alt={item.title} className='w-auto h-auto ' />
                    </div>
                  </div>
                  <p className='text-center text-gray-700 mt-2 mb-2 text-sm  '>{item.title}</p>
                </Link>
              )}


            </div>
            
            <div className="flex mt-5 justify-between  ">
              <div className="grid w-full grid-rows-1 grid-cols-2 gap-10 ">

                {long_images.map((item, index) =>
                  <Link href={slugifyServices(item.route_url)} className="hover:underline underline-offset-8 w-full cursor-pointer" key={index}>
                    <div className="w-full">
                      <div className="flex w-full  items-center md:h-20 justify-center bg-gray-100 rounded p-3">
                        <Image src={item.url} width={40} height={40} alt={item.title} className='w-auto h-auto ' />
                      </div>
                    </div>
                    <p className='text-gray-700 text-center mt-2 mb-2 text-sm '>{item.title}</p>
                  </Link>
                )}
              </div>

            </div>

          </div>
        </div>
        <div className="md:grid grid-cols-4 hidden grid-rows-4 w-[50%] gap-1">
          {/* Big image on the left */}
          <div className="relative  col-span-2 row-span-4">
            <Image
              src="https://res.cloudinary.com/divlt5fqo/image/upload/v1759157985/120-SM823684_imgoui.jpg"
              alt="Elder Care"
              fill
              className="object-cover rounded-tl-xl border rounded-bl-xl"
            />
          </div>

          {/* Top-right image */}
          <div className="relative col-span-2 row-span-2">
            <Image
              src="https://res.cloudinary.com/divlt5fqo/image/upload/v1759319367/2-SM1085993_t3htyq.jpg"
              alt="Nursing Care"
              fill
              className="object-cover rounded-tr-xl"
            />
          </div>

          {/* Bottom-right image 1 */}
          <div className="relative col-span-1 row-span-2">
            <Image
              src="https://res.cloudinary.com/divlt5fqo/image/upload/v1759289339/120-SM987346_suo5gb.jpg"
              alt="Physiotherapy"
              fill
              className="object-cover "
            />
          </div>

          {/* Bottom-right image 2 */}
          <div className="relative col-span-1 row-span-2">
            <Image
              src="https://res.cloudinary.com/divlt5fqo/image/upload/v1759289264/220-SM713522_mzq71p.jpg"
              alt="ICU Care"
              fill
              className="object-cover rounded-br-xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default OxyTagline;
