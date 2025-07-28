
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
export default function Footer() {

  return (
    <footer className="md:max-w-4xl  w-full mx-auto md:px-4 px-2 mb-14 md:mb-1  py-8 ">
      <div className="flex gap-5 flex-wrap  md:mb-10 mb-4 items-center md:justify-between justify-center ">
        <Link href={"/about"} className=" font-medium text-gray-500 hover:text-blue-600">
          About Us
        </Link>
        <Link href={"/contact-us"} className=" font-medium text-gray-500 hover:text-blue-600">
          Contact Us
        </Link>
        <Link  href={"/privacy-policy"} className=" font-medium text-gray-500 hover:text-blue-600">
          privacy
        </Link>
        <Link href={"/terms"} className=" font-medium text-gray-500 hover:text-blue-600">
          Terms of Service
        </Link>
      </div>
      <div className="flex items-center justify-center  ">
        <Link href="https://www.instagram.com/getcarekwik/" target="_blank" className="mx-2 text-gray-500 hover:text-blue-600">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://www.facebook.com/carekwik" target="_blank" className="mx-2 text-gray-500 hover:text-blue-600">
          <FaFacebookF size={24} />
        </Link>
        {/* <Link href="https://twitter.com/carekwik" target="_blank" className="mx-2 text-gray-500 hover:text-blue-600">
          <FaTwitter size={24} />
        </Link> */}
        {/* <Link href="https://www.linkedin.com/company/carekwik" target="_blank" className="mx-2 text-gray-500 hover:text-blue-600">
          <FaLinkedin size={24} />
        </Link> */}
      </div>

      <div className=" pt-4 text-center  text-gray-500 md:mt-5">
        © {new Date().getFullYear()} CareKwik. All rights reserved.
      </div>
    </footer>
  );
}
