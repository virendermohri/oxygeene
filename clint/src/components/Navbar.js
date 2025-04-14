"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoHomeSharp, IoNotificationsCircle } from "react-icons/io5";
import { MdOutlineShoppingCart, MdOutlineMedicalServices, MdMedicalServices, MdShoppingCart } from "react-icons/md";
import { RiAccountCircleLine, RiAccountCircleFill } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";
import { useEffect, useState } from "react";
export default function Navbar() {
  const pathname = usePathname();
  const [CSR,SetCSR] = useState(false)
  const [user, setUser] = useState(null)
  useEffect(() => {
    SetCSR(true)
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Rent & Buy", href: "/medicale-quipment" },
    { name: "Services", href: "/services" },
    { name: "Transactions", href: "/transactions" },
  ];
  return (
    <nav>
      <div className={` ${pathname == "/services" ? " mb-10  " : ""}bg-white shadow top-0 md:px-10 md:py-7 px-3 py-5 flex justify-between items-center`}>
        <div className="flex gap-20 items-center w-full justify-around">
          <div>
            <Link href="/">
              <p className="md:text-3xl text-2xl md:font-semibold font-bold font-mono">Oxygeene</p>
            </Link>
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
          <div>
            {CSR && user ?
              <Link href={"/login"}> <button className="bg-black text-white md:px-7 md:py-3 px-5 py-3 hover:bg-[#212121] font-semibold md:text-lg transition duration-300 cursor-pointer ease-in-out">
                Login
              </button></Link> :
              <Link href={"/login"}> <IoNotificationsCircle className="text-4xl cursor-pointer" /></Link>}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="absolute fixed bottom-0 shadow-xl bg-gray-100 md:hidden w-full py-7 px-5 block">
        <div className="flex items-center justify-around gap-5">
          <Link href="/">
            {pathname === "/" ? <IoHomeSharp className="text-3xl" /> : <IoHomeOutline className="text-3xl" />}
          </Link>
          <Link href="/medicale-quipment">
            {pathname === "/medicale-quipment" ? <MdShoppingCart className="text-3xl" /> : <MdOutlineShoppingCart className="text-3xl" />}
          </Link>
          <Link href="/services">
            {pathname === "/services" ? <MdMedicalServices className="text-3xl" /> : <MdOutlineMedicalServices className="text-3xl" />}
          </Link>
          <Link href="/transactions">
            <BsClockHistory className="text-3xl" />
          </Link>
          <Link href="/my-account">
            {pathname === "/my-account" ? <RiAccountCircleFill className="text-3xl" /> : <RiAccountCircleLine className="text-3xl" />}
          </Link>
        </div>
      </div>
    </nav>
  );
}
