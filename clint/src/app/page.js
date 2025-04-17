import Typewriter from "@/components/Typewriter";
import "./globals.css";
import Services from "@/components/Services";
import CaretakerProfile from "@/components/CaretakerProfile";
import RentalEquipment from "@/components/RentalEquipment";
import Testimonials from "@/components/Testimonials";

async function getData() {
  const res= await fetch("http://localhost:5000/api/service", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Add any other headers you need
    },
  });
  if (!res.ok) {
    console.log("Failed to fetch data");
  }
  const data = await res.json();


  const caretakers = [
    { name: "John", service: "Nursing Care" },
    { name: "Asha", service: "Elder Care" },
    { name: "Maya", service: "Physiotherapy" },
    { name: "Arun", service: "Mother & Baby Care" },
    { name: "Dr. Kapoor", service: "Doctor Consultation" },
  ];

  return { data, caretakers };
}
export default async function Home () {
  const { data, caretakers } = await getData();  
  return (
    <div className="bg-white">
      <div className="h-38  ">
        
    <Typewriter />
      </div>
   <Services services={data} caretakers={caretakers} />;
    <CaretakerProfile/>
    <RentalEquipment/>
    <Testimonials/>
    </div>
  );
}
