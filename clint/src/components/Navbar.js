"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegHeart, FaHeart, FaChevronDown,FaPhoneAlt } from "react-icons/fa";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { PiShoppingBagFill } from "react-icons/pi";
import { IoNotificationsCircle } from "react-icons/io5";
import { RiAccountCircleLine, RiUser3Fill, RiUser3Line, RiAccountCircleFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const router = useRouter();
  const [CSR, SetCSR] = useState(false)
  const [user, setUser] = useState(null)
  useEffect(() => {
    SetCSR(true)
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])
  const navItems = [
    { name: "Medical Equipment", href: "/medical-equipment" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact-us" },
  ];
  const [open, setOpen] = useState(false);

  const services = [
    { title: 'Elder Care at Home', path: '/elder-care-at-home' },
    { title: 'Physiotherapy at Home', path: '/physiotherapy-at-home' },
    { title: 'Mother Baby Care at Home', path: '/mother-baby-care-at-home' },
    { title: 'Nursing Care at Home', path: '/nursing-care-at-home' },
    { title: 'ICU at Home', path: '/icu-at-home' },
    { title: 'Lab Test at Home', path: '/lab-test-at-home' },
  ];
  return (
    <nav className="">
      <div className={` bg-white  shadow py-3 flex justify-between   items-center`}>
        <div className={`flex gap-20 items-center w-full md:justify-around justify-between px-5 `}>
          <div>

            <Link href="/">
              <p className="  text-2xl md:font-bold font-bold ">CareKwik</p>
            </Link>

          </div>
          <div className="flex justify-between gap-10  items-center ">
            <div className="relative group hidden md:block">
              <button
                onClick={() => setOpen(!open)}
                className="flex cursor-pointer items-center gap-1 text-gray-800 hover:text-blue-600 font-medium"
              >
                Our Services <FaChevronDown size={18} />
              </button>

              <div
                className={`absolute z-50 top-10 left-0 w-64 bg-white  rounded-lg shadow-lg transition-all duration-200 ease-in-out ${open ? 'block' : 'hidden'
                  } group-hover:block`}
              >
                <ul className="p-4 space-y-2">
                  {services.map((service) => (
                    <li key={service.title}>
                      <Link
                        href={service.path}
                        className="block text-gray-700 hover:text-blue-600 hover:underline"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden  md:block">
              <ul className="flex space-x-10">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className=" font-semibold  hover:text-[#607AFB]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={""}>


              <a
                href="tel:+919876543210" // Replace with your number
                className=" bg-blue-600 text-white px-4 py-3 rounded-full shadow flex items-center gap-2 hover:bg-blue-700 transition "
              >
                <FaPhoneAlt size={16} />
                <span className="md:text-base text-sm">Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="fixed bottom-0 font-medium left-0 bg-white right-0 z-50  text-white shadow-inner  md:hidden flex justify-around  p-3 border-t-1 border-gray-200">
        <Link href="/" className="flex flex-col  items-center gap-2 text-xs mt-1">
          {pathname == "/" ?

            <AiFillHome className={`text-xl text-black`} /> :
            <AiOutlineHome className={`text-xl text-gray-500`} />

          }
          {pathname == "/" ?
            <p className="text-black">Home</p> :
            <p className="text-gray-500 font-medium">Home</p>
          }
        </Link>
        <Link href="/#services" className="flex flex-col  items-center gap-2 text-xs mt-1">
          {pathname == "/#services" ?

            <FaHeart className={`text-xl text-black`} /> :
            <FaRegHeart className={`text-xl text-gray-500`} />

          }
          {pathname == "/#services" ?
            <p className="text-black">Services</p> :
            <p className="text-gray-500 font-medium">Services</p>
          }
        </Link>
        <Link href="/medical-equipment" className="flex flex-col  items-center gap-2 text-xs mt-1">
          {pathname == "/medical-equipment" ?

            <PiShoppingBagFill className={`text-xl text-black`} /> :
            <CgShoppingBag className={`text-xl text-gray-500`} />

          }
          {pathname == "/medical-equipment" ?
            <p className="text-black">Equipment</p> :
            <p className="text-gray-500 font-medium">Equipment</p>
          }
        </Link>

        <Link href="/my-account" className="flex flex-col  items-center gap-2 text-xs mt-1">
          {pathname == "/my-account" ?

            <RiUser3Fill className={`text-xl text-black`} /> :
            <RiUser3Line className={`text-xl text-gray-500`} />

          }
          {pathname == "/my-account" ?
            <p className="text-black">My Account</p> :
            <p className="text-gray-500 font-medium">My Account</p>
          }
        </Link>


      </div>
    </nav>
  );
}
