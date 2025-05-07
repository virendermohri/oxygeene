import Image from "next/image";
import React from "react";

// Fetch a single caretaker by ID
async function getCaretakerById(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/caretaker/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Prevent caching
    });

    if (!res.ok) {
      throw new Error("Caretaker fetch failed");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching caretaker:", error);
    return null;
  }
}

export default async function CaretakerProfile({ searchParams }) {
  const id = searchParams?.id;

  if (!id) {
    return <div className="text-center text-red-500 mt-10">❌ Missing caretaker ID in URL.</div>;
  }

  const caretaker = await getCaretakerById(id);
  if (!caretaker) {
    return <div className="text-center text-red-500 mt-10">❌ Caretaker not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto min-h-screen p-6 bg-white rounded-xl md:mt-10">
      {/* Header */}
      <div className="flex gap-6 items-center">
        <Image
          width={100}
          height={100}
          src={caretaker.photo || "/placeholder.jpg"}
          alt="Caretaker"
          className="w-20 h-20 rounded-full object-cover shadow-md"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-800">{caretaker.name}</h2>
            {caretaker.isVerified && (
              <span className="bg-green-100 text-green-700 text-xs p-2 rounded-full">Verified</span>
            )}
          </div>
          <p className="text-gray-600 text-sm mt-1">
            {caretaker.age} yrs • {caretaker.gender} • {caretaker.location}
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold text-gray-800">About</h3>
        <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-700">
          <span>🧠 Exp: {caretaker.experience} yrs</span>
          <span>🎓 {caretaker.qualification}</span>
          <span>🗣️ {caretaker.languages?.join(", ")}</span>
          <span>📍 {caretaker.availability}</span>
        </div>
        <div className="mt-2 text-yellow-500">⭐ {caretaker.rating} / 5</div>
        <p className="text-gray-600 text-sm mt-2">{caretaker.bio}</p>
      </div>

      {/* Certifications */}
      {caretaker.certifications?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Certifications</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
            {caretaker.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Previous Work */}
      {caretaker.previousWork?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Previous Work</h3>
          <ul className="space-y-3 mt-2">
            {caretaker.previousWork.map((work, index) => (
              <li key={index} className="bg-gray-50 p-3 rounded-lg shadow-sm text-sm">
                <strong>{work.title}</strong>: {work.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Reviews */}
      {caretaker.reviews?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Patient Reviews</h3>
          <ul className="space-y-4 mt-2">
            {caretaker.reviews.map((review, index) => (
              <li key={index} className="border p-3 rounded-xl text-sm">
                <div className="font-medium text-gray-800">
                  {review.name} <span className="text-yellow-500">⭐ {review.rating}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer Buttons */}
      <div className="mt-8 flex justify-between items-center">
        <div className="text-xl font-semibold text-blue-600">
          ₹{caretaker.pricePerDay} / day
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm">
            Book Now
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-xl text-sm">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
