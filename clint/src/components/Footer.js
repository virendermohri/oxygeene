
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // remove special characters
      .replace(/\s+/g, '-')         // replace spaces with -
      .trim();
  }
  const services = [
    'Elder Care',
    'Mother & Baby Care',
    'Nursing Care',
    'ICU at Home, Critical Care',
    'Physiotherapy',
    'Doctor Consultation',
    'Vaccination',
    'Lab Tests',
    'Counselling',
  ];

  <ul>
    {services.map(service => (
      <li key={service}>
        <Link href={`/services/${slugify(service)}`} className="hover:text-green-600">
          {service}
        </Link>
      </li>
    ))}
  </ul>

  return (
    <footer className="pb-20 text-gray-700  py-10 mt-10">
      
      <div className="max-w-7xl px-6 mx-auto grid md:grid-cols-4 gap-8 text-sm">
        {/* Logo & Tagline */}
        <div>

          <h2 className="text-xl font-bold text-green-700">CareKwik</h2>
          <p className="mt-2 text-gray-600">Caring begins here. Homecare you can trust.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-green-600">Home</Link></li>
            <li><Link href="/medicale-quipment" className="hover:text-green-600">Rent & Buy</Link></li>
            <li><Link href="/history" className="hover:text-green-600">Transactions</Link></li>
            <li><Link href="/about" className="hover:text-green-600">About Us</Link></li>
            <li><Link href="/career" className="hover:text-green-600">Join as Care Taker</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Services</h3>
          <ul className="space-y-2">
            {services.map(service => (
              <li key={service}>
                <Link href={`/services/${slugify(service)}`} className="hover:text-green-600">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Contact</h3>
          <p>Phone: +91-8307190216</p>
          <div className="flex gap-4 mt-4 text-green-700 text-xl">
            <Link href="https://instagram.com/getcarekwik" target='_blank'><FaInstagram /></Link>
            <Link href="https://instagram.com/oxygeene_"><FaFacebookF /></Link>
            <Link href="https://instagram.com/oxygeene_"><FaTwitter /></Link>
            <Link href="https://instagram.com/oxygeene_"><FaLinkedin /></Link>
          </div>
        </div>
      </div>

      <div className="border-t mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CareKwik. All rights reserved.
      </div>
    </footer>
  );
}
