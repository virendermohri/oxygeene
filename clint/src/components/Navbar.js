"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegHeart, FaHeart, FaChevronDown,FaPhoneAlt } from "react-icons/fa";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { PiShoppingBagFill } from "react-icons/pi";
import {RiUser3Fill, RiUser3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
 
  return (
    <nav className="">
      <div className={`bg-transparent md:border md:border-1 border-gray-200 flex justify-center   items-center`}>
        <div className={`flex  items-center w-7xl px-5 py-3 justify-between `}>
          <div>

            <Link href="/">
              <p className="text-2xl md:font-bold font-bold text-[#003049]">CareKwik</p>
            </Link>

          </div>
          <div className="flex justify-between gap-10  items-center ">
            
            <div className="hidden  md:block">
              <ul className="flex space-x-10">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-700">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={""}>


              <a
                href="tel:+917015875541" 
                className="  bg-blue-600 text-white px-4 py-3 rounded flex items-center gap-2 hover:bg-blue-700 transition "
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
