"use client"
import React, { useEffect,useState } from 'react'

const page = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const status = 'allbookings'; // or 'pending', 'successful', 'canceled' based on your requirement
    const fetchBookings = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookservice/${status}`);
            if (!res.ok) throw new Error("Failed to fetch bookings");

            const data = await res.json();
            setBookings(data.bookings);
        } catch (err) {
            console.error("Error fetching bookings:", err);
            alert("Failed to fetch bookings. Please try again later.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {

        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user.role !== 'admin') {
                window.location.href = '/';
                
                
            }
            fetchBookings();
        }
        else {
            window.location.href = '/login';
            return null;
        }
    }, [])
    return (
        <div className='max-w-5xl mx-auto px-4 py-8'>
            <h1 className='text-xl mb-10'>Management</h1>
            <div className="flex gap-10 items-center">
                <button className='px-4 py-2 border border-1 border-gray-200 rounded'>All</button>
                <button className='px-4 py-2 border border-1 border-gray-200 rounded'>Pending</button>
                <button className='px-4 py-2 border border-1 border-gray-200 rounded'>Successfull</button>
                <button className='px-4 py-2 border border-1 border-gray-200 rounded'>Canceled</button>
            </div>
            {loading && <div className="text-center mt-20">Loading...</div>}
            {!loading && <table className="min-w-full mt-20 bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className=" text-gray-700 text-left">
                    <tr>
                        <th className="py-3 px-4 border-b">#</th>
                        <th className="py-3 px-4 border-b">Service</th>
                        <th className="py-3 px-4 border-b">Location</th>
                        <th className="py-3 px-4 border-b">Schedule</th>
                        <th className="py-3 px-4 border-b">Caretaker</th>
                        <th className="py-3 px-4 border-b">Status</th>
                        <th className="py-3 px-4 border-b">Phone</th>
                        <th className="py-3 px-4 border-b">price</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-800">
                    {bookings.map((booking, index) => (
                        <tr
                            key={booking._id}
                            className="hover:bg-gray-50 transition-colors"
                        >
                            <td className="py-2 px-4 border-b">{index + 1}</td>
                            <td className="py-2 px-4 border-b">{booking.phone}</td>
                            <td className="py-2 px-4 border-b">{booking.location}</td>
                            <td className="py-2 px-4 border-b">{booking.schedule}</td>
                            <td className="py-2 px-4 border-b">{booking.caretakerType}</td>
                            <td className="py-2 px-4 border-b capitalize">
                                <span
                                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${booking.status === "successful"
                                        ? "bg-green-100 text-green-700"
                                        : booking.status === "canceled"
                                            ? "bg-red-100 text-red-600"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {booking.status}
                                </span>
                            </td>
                            {/* <td className="py-2 px-4 border-b">₹{booking.price || "-"}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    )
}

export default page
