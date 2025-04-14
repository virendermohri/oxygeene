import Services from "@/components/Services";

// Fake SSR fetch
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

export default async function Home() {
  const { services, caretakers } = await getData();

  return <Services services={services} caretakers={caretakers} />;
}
