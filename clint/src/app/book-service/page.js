import { redirect } from 'next/navigation';

const services = {
  "Elder Care": { durations: ["Daily","Weekly", "Monthly"], price: { Daily: 800,Weekly: 5000, Monthly: 15000 } },
  "Nursing Care": { durations: ["Daily", "Monthly"], price: { Daily: 800, Monthly: 20000 } },
  "Physiotherapy": { durations: ["Session"], price: { Session: 1200 } },
  "Doctor Consultation": { durations: ["30 mins"], price: { "30 mins": 500 } },
  "Mother & Baby Care": { durations: ["Weekly", "Monthly"], price: { Weekly: 6000, Monthly: 18000 } },
};

export default function BookService({ searchParams }) {
  console.log(searchParams.service);
  const serviceParam = searchParams?.service || '';
  const serviceKey = Object.keys(services).find(
    key => key.toLowerCase() === serviceParam.toLowerCase()
  );

  const selectedService = serviceKey
    ? { name: serviceKey, ...services[serviceKey] }
    : null;

  if (!selectedService) {
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        Invalid service selected.
      </div>
    );
  }

  return (
    <div className="max-w-3xl m-auto p-6 bg-white  md:h-screen mt-10 rounded">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        Book {selectedService.name}
      </h1>

      <form method="POST" action="/book-service/submit">
        <input type="hidden" name="serviceName" value={selectedService.name} />

        <div className="mb-4">
          <label className="block font-medium mb-1">Full Name:</label>
          <input type="text" name="name" required className="w-full border p-2 rounded" />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Select Duration:</label>
          <select name="duration" required className="w-full border p-2 rounded">
            {selectedService.durations.map((d) => (
              <option key={d} value={d}>
                {d} - ₹{selectedService.price[d]}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Schedule Date & Time:</label>
          <input type="datetime-local" name="schedule" required className="w-full border p-2 rounded" />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Payment Method:</label>
          <select name="paymentMethod" required className="w-full border p-2 rounded">
            <option value="online">Online</option>
            <option value="cash">Cash on Service</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
