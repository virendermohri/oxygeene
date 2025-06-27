"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFire, FaSearch, FaClipboardList,FaBriefcaseMedical, FaHeart, FaRegUserCircle,FaHistory ,FaUserCircle} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSell,MdSell } from "react-icons/md";
import { LuClipboardList ,LuBriefcaseMedical} from "react-icons/lu";
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
      {/* <div className="absolute z-10 fixed bottom-0 shadow-xl  bg-white border-t-1  border-gray-200 md:hidden w-full py-6  shadow-xl px-5 block">
        <div className="flex items-center justify-around gap-5">
          <Link href="/">
            {pathname === "/" ? <IoHomeSharp className="text-3xl  text-gray-700" /> : <IoHomeOutline className="text-3xl text-gray-500" />}
          </Link>
          <Link href="/medicale-quipment">
            {pathname === "/medicale-quipment" ? <MdShoppingCart className="text-3xl text-gray-700" /> : <MdOutlineShoppingCart className="text-3xl  text-gray-500" />}
          </Link>
          <Link href="/services/">
            {pathname === "/services" ? <MdMedicalServices className="text-3xl text-gray-700" /> : <MdOutlineMedicalServices className="text-3xl  text-gray-500" />}
          </Link>
          <Link href="/history">
          {pathname === "/history" ? <BsClockHistory className="text-3xl text-gray-700" /> : <BsClockHistory className="text-3xl  text-gray-500" />}

          </Link>
          <Link href="/my-account">
            {pathname === "/my-account" ? <RiAccountCircleFill className="text-3xl text-gray-700" /> : <RiAccountCircleLine className="text-3xl  text-gray-500" />}
          </Link>
        </div>
      </div> */}
      <div className="fixed bottom-0 left-0 bg-white right-0 z-50  text-white shadow-inner  md:hidden flex justify-around py-2 border-t-1border-gray-700">
                <Link href="/" className="flex flex-col  items-center gap-2 text-xs mt-1">
                    {pathname == "/" ?

                        <AiFillHome className={`text-xl text-black`} /> :
                        <AiOutlineHome className={`text-xl text-gray-500`} />

                    }
                    {pathname == "/" ?
                        <p className="text-black">Home</p> :
                        <p className="text-gray-500">Home</p>
                    }
                </Link>
                <Link href="/medicale-quipment" className="flex flex-col  items-center gap-2 text-xs mt-1">
                    {pathname == "/medicale-quipment" ?

                        <FaBriefcaseMedical className={`text-xl text-black`} /> :
                        <LuBriefcaseMedical className={`text-xl text-gray-500`} />

                    }
                    {pathname == "/medicale-quipment" ?
                        <p className="text-black">Equipment</p> :
                        <p className="text-gray-500">Equipment</p>
                    }
                </Link>
                <Link href="/services" className="flex flex-col  items-center gap-2 text-xs mt-1">
                    {pathname == "/services" ?

                        <FaClipboardList className={`text-xl text-black`} /> :
                        <LuClipboardList className={`text-xl text-gray-500`} />

                    }
                    {pathname == "/services" ?
                        <p className="text-black">Services</p> :
                        <p className="text-gray-500">Services</p>
                    }
                </Link>
                <Link href="/history" className="flex flex-col  items-center gap-2 text-xs mt-1">
                    {pathname == "/history" ?

                        <FaHistory className={`text-xl text-black`} /> :
                        <FaHistory className={`text-xl text-gray-500`} />

                    }
                    {pathname == "/history" ?
                        <p className="text-black">History</p> :
                        <p className="text-gray-500">History</p>
                    }
                </Link>
                <Link href="/my-account" className="flex flex-col  items-center gap-2 text-xs mt-1">
                    {pathname == "/my-account" ?

                        <FaUserCircle className={`text-xl text-black`} /> :
                        <FaRegUserCircle className={`text-xl text-gray-500`} />

                    }
                    {pathname == "/my-account" ?
                        <p className="text-black">My Account</p> :
                        <p className="text-gray-500">My Account</p>
                    }
                </Link>
                

            </div>
    </nav>
  );
}
