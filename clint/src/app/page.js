import Typewriter from "@/components/Typewriter";
import "./globals.css";
import Services from "@/components/Services";
import CaretakerProfile from "@/components/CaretakerProfile";
import RentalEquipment from "@/components/RentalEquipment";
import Testimonials from "@/components/Testimonials";

import React, { Suspense } from "react";
import Showcase from "@/components/Showcase";
async function getData() {
  const services = [
    { name: "Elder Care", icon: "FaUserShield" },
    { name: "Mother & Baby Care", icon: "FaBaby" },
    { name: "Nursing Care", icon: "FaUserNurse" },
    { name: "Physiotherapy", icon: "FaDumbbell" },
    { name: "Doctor Consultation", icon: "FaStethoscope" },
    { name: "Critical Care", icon: "FaHeartbeat" },
    { name: "Vaccination", icon: "FaSyringe" },
    { name: "Lab Tests", icon: "FaVial" },
    { name: "Counselling", icon: "FaHeadset" },
  ];


  const caretakers = [
    { name: "John", service: "Nursing Care" },
    { name: "Asha", service: "Elder Care" },
    { name: "Maya", service: "Physiotherapy" },
    { name: "Arun", service: "Mother & Baby Care" },
    { name: "Dr. Kapoor", service: "Doctor Consultation" },
  ];

  return { services, caretakers };
}
export const metadata = {
  title: "Home Healthcare Services | Trained Caretakers at Your Doorstep | CareKwik",
  description: "Find verified nurses, elder care, physiotherapists, and home caretakers near you. CareKwik delivers professional healthcare services instantly at your home across India.",
  keywords: "Home healthcare services, nurse at home, elder care India, physiotherapy services, CareKwik caretakers, healthcare at home, best homecare India, trusted homecare services, book caretaker online, post surgery care at home, home nursing services, physiotherapy at home, doctor consultation at home, vaccination services, lab tests at home, counselling services home care near me, icu care at home, critical care services, home healthcare solutions, trained nurses near me, physiotherapists near me, elder care services, home healthcare providers",
  openGraph: {
    title: "Best Home Healthcare Services in India | CareKwik",
    description: "Need home healthcare? Hire trained nurses, caretakers, and physiotherapists easily with CareKwik. Trusted by families across India for safe, affordable care.",
    url: "https://carekwik.com",
    type: "website",
    siteName: "CareKwik",
    images: [{
      url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751259853/og_image_dav7mz.jpg",
      width: 1200,
      height: 630,
      alt:"CareKwik - Home Healthcare Services",
    }]
  },
  robots: "index, follow",
};
export default async function Home() {
  const { services, caretakers } = await getData();
  return (
    <div className="">
      <div className="  ">

        <Typewriter />
      </div>
      <Suspense fallback={<div>Loading Services...</div>}>
        <Services/>

      </Suspense>
      <CaretakerProfile />
      <Showcase />
      <RentalEquipment />
      <Testimonials />
    </div>
  );
}
