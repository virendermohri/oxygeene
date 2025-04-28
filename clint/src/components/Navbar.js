"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoHomeSharp, IoNotificationsCircle } from "react-icons/io5";
import { MdOutlineShoppingCart, MdOutlineMedicalServices, MdMedicalServices, MdShoppingCart } from "react-icons/md";
import { RiAccountCircleLine, RiAccountCircleFill } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
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
    { name: "Rent & Buy", href: "/medicale-quipment" },
    { name: "Services", href: "/services" },
    { name: "Transactions", href: "/history" },
  ];
  return (
    <nav>
      <div className={`  bg-white ${pathname == "/" ? " shadow " : ""} top-0 md:px-10 md:py-7 px-3 py-5 flex justify-between items-center`}>
        <div className={`flex gap-20 items-center w-full ${pathname == "/" ? " justify-around " : ""}`}>
          <div>
            {isHome ?
              <Link href="/">
                <p className="md:text-3xl text-[#074369] text-2xl md:font-semibold font-bold font-mono">CareKwik</p>
              </Link>
              :
              <button
                onClick={() => router.back()}
                className="flex items-center  gap-3 text-xl font-semibold text-gray-700 hover:text-green-500">
                <IoIosArrowBack />Back
              </button>
            }
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xl font-semibold text-gray-700 hover:text-green-500">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${pathname != "/" ? " hidden " : ""}`}>
            {CSR && user ?
              <div className=" flex gap-5 items-center">
                <Link href={"/history"}> <IoNotificationsCircle className="text-4xl cursor-pointer" /></Link>
                <Link className="hidden md:block" href="/my-account">
                  {pathname === "/my-account" ? <div className="flex gap-5 text-white bg-black  border cursor-pointer px-5 py-3"> <RiAccountCircleFill className="text-3xl " /> <p>My Account</p></div> : <div className="flex gap-5 border cursor-pointer px-5 py-3"><RiAccountCircleLine className="text-3xl" /><p>My Account</p></div>}
                </Link>

              </div>
              :
              <Link href={"/login"}> <button className="bg-black text-white md:px-7 md:py-3 px-5 py-3 hover:bg-[#212121] font-semibold md:text-lg transition duration-300 cursor-pointer ease-in-out">
                Login
              </button></Link>
            }
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="absolute z-10 fixed bottom-0 shadow-xl  bg-gray-100 md:hidden w-full py-6 rounded-full shadow-xl px-5 block">
        <div className="flex items-center justify-around gap-5">
          <Link href="/">
            {pathname === "/" ? <IoHomeSharp className="text-3xl  text-gray-500" /> : <IoHomeOutline className="text-3xl text-gray-500" />}
          </Link>
          <Link href="/medicale-quipment">
            {pathname === "/medicale-quipment" ? <MdShoppingCart className="text-3xl text-gray-500" /> : <MdOutlineShoppingCart className="text-3xl  text-gray-500" />}
          </Link>
          <Link href="/services/">
            {pathname === "/services" ? <MdMedicalServices className="text-3xl text-gray-500" /> : <MdOutlineMedicalServices className="text-3xl  text-gray-500" />}
          </Link>
          <Link href="/history">
            <BsClockHistory className="text-3xl text-gray-500" />
          </Link>
          <Link href="/my-account">
            {pathname === "/my-account" ? <RiAccountCircleFill className="text-3xl text-gray-500" /> : <RiAccountCircleLine className="text-3xl  text-gray-500" />}
          </Link>
        </div>
      </div>
    </nav>
  );
}
