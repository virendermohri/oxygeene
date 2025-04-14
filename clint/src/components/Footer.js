
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-xl font-bold text-green-700">Oxygeene</h2>
          <p className="mt-2 text-gray-600">Caring begins here. Homecare you can trust.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-green-600">Home</Link></li>
            <li><Link href="/medicale-quipment" className="hover:text-green-600">Rent & Buy</Link></li>
            <li><Link href="/transactions" className="hover:text-green-600">Transactions</Link></li>
            <li><Link href="/about" className="hover:text-green-600">About Us</Link></li>
            <li><Link href="/career" className="hover:text-green-600">Join as Care Taker</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/services?service=elder care" className="hover:text-green-600">Elder Care</Link></li>
            <li><Link href="/services?service=Mother & Baby Care" className="hover:text-green-600">Mother & Baby Care</Link></li>
            <li><Link href="/services?service=nursing care" className="hover:text-green-600">Nursing Care</Link></li>
            <li><Link href="/services?service=Critical Care" className="hover:text-green-600">ICU at Home, Critical Care</Link></li>
            <li><Link href="/services?service=physiotherapy" className="hover:text-green-600">Physiotherapy</Link></li>
            <li><Link href="/services?service=Doctor Consultation" className="hover:text-green-600">Doctor Consultation</Link></li>
            <li><Link href="/services?service=Vaccination" className="hover:text-green-600">Vaccination</Link></li>
            <li><Link href="/services?service=Lab Tests" className="hover:text-green-600">Lab Tests</Link></li>
            <li><Link href="/services?service=Counselling" className="hover:text-green-600">Counselling</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Contact</h3>
          <p>Email: oxygeene1@gmail.com</p>
          <p>Phone: +91-8307190216</p>
          <div className="flex gap-4 mt-4 text-green-700 text-xl">
            <Link href="https://instagram.com/oxygeene_" target='_blank'><FaInstagram /></Link>
            <Link href="https://instagram.com/oxygeene_"><FaFacebookF /></Link>
            <Link href="https://instagram.com/oxygeene_"><FaTwitter /></Link>
            <Link href="https://instagram.com/oxygeene_"><FaLinkedin /></Link>
          </div>
        </div>
      </div>

      <div className="border-t mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Oxygeene. All rights reserved.
      </div>
    </footer>
  );
}
