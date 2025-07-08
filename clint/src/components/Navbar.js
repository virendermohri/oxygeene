"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegHeart, FaHeart } from "react-icons/fa";
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
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Medical Equipment", href: "/medical-equipment" },
    { name: "Bookings", href: "/history" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
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
            <div className={`${pathname != "/" ? "  " : ""}`}>
              {CSR && user ?
                <div className=" flex gap-5 items-center">
                  <Link href={"/my-account"}>
                    <Image alt="My Account" className="h-10 w-10  rounded-full cursur-pointer" src={"https://res.cloudinary.com/divlt5fqo/image/upload/v1751954811/unnamed_dvjv2x.png"} height={100} width={100} />
                  </Link>
                </div>
                :

                <Link href={"/login"}> <button className="bg-[#607AFB] border rounded-full text-white md:px-5 md:py-2 px-5 py-2 hover:bg-[#212121] font-semibold md:text-lg transition duration-300 cursor-pointer ease-in-out">
                  Login
                </button></Link>
              }
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
        <Link href="/services" className="flex flex-col  items-center gap-2 text-xs mt-1">
          {pathname == "/services" ?

            <FaHeart className={`text-xl text-black`} /> :
            <FaRegHeart className={`text-xl text-gray-500`} />

          }
          {pathname == "/services" ?
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
