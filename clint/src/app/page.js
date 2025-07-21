import Typewriter from "@/components/Typewriter";
import "./globals.css";
import Services from "@/components/Services";
import CaretakerProfile from "@/components/CaretakerProfile";
import Testimonials from "@/components/Testimonials";


export const metadata = {
  title: "Home Care Services in Chandigarh & Mohali | Book Trusted Caretakers - CareKwik",
  description: "Get trusted home care services in Chandigarh and Mohali with CareKwik. Book verified caretakers for Elder Care, ICU at Home, Baby Care & Physiotherapy. Safe, reliable & affordable.",
  keywords: "home care in chandigarh, home care mohali, elder care chandigarh, elder care mohali, icu at home chandigarh, icu at home mohali, physiotherapy at home chandigarh, home nurse mohali, patient care mohali, baby care mohali, elderly care chandigarh, home attendant chandigarh, caretaker in mohali, home visit nurse chandigarh, nursing service mohali, 24x7 home care mohali, medical equipment chandigarh, wheelchair rental mohali, oxygen cylinder mohali, mohali health care, chandigarh patient care, home health services chandigarh, carekwik chandigarh mohali",
  openGraph: {
    title: "Top Home Care in Chandigarh & Mohali | CareKwik",
    description: "Book verified home care services in Chandigarh & Mohali. CareKwik connects you directly to trained caretakers – no agents, no extra charges.",
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
 
  return (
    <div className="">
      <div className="  ">

        <Typewriter />
      </div>
        <Services/>

      <CaretakerProfile />
     
      <Testimonials />
    </div>
  );
}
