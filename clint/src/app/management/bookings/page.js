"use client"
import React, { use, useEffect, useState } from 'react'

const Page = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState('allbookings'); // default status
    const [selectedRow, setSelectedRow] = useState(null);
    const [complaints, setComplaints] = useState([])
    const [bookingdata, setBookingData] = useState(true)
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
    const fetchComplaints = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/complaint/all`);
            const data = await res.json();
            setComplaints(data);
            if (data.length == 0) {
                setBookingData(false)
            }
        } catch (err) {
            console.error("Error fetching complaints:", err);
            alert("Failed to fetch complaints. Please try again later.");
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
    useEffect(() => {

        fetchBookings()
    }, [status])
    const handleStatusChange = async (bookingId, newStatus) => {
        try {
            console.log(newStatus)
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookservice/bookings/${bookingId}/status`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (res.ok) {
                const updated = await res.json();
                // Optionally: refetch bookings or update state
                setBookings(prev =>
                    prev.map(b => (b._id === bookingId ? { ...b, status: newStatus } : b))
                );
                setSelectedRow(null); // close dropdown
            } else {
                console.error("Failed to update status");
            }
        } catch (err) {
            console.error(err);
        }
    };
    const handleComplaintStatusChange = async (complaintId, newStatus) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/complaint/${complaintId}/status`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (res.ok) {
                const updated = await res.json();
                // Optionally: refetch complaints or update state
                setComplaints(prev =>
                    prev.map(c => (c._id === complaintId ? { ...c, status: newStatus } : c))
                );
                setSelectedRow(null); // close dropdown
            } else {
                console.error("Failed to update complaint status");
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div className='max-w-7xl h-screen mx-auto px-4 py-8'>
            <h1 className='text-2xl mb-10'>Management</h1>
            <div className="flex gap-10 items-center">
                <button onClick={(() => {
                    setBookingData(true)
                    setStatus("allbookings/")
                })} className='px-4 py-2 border border-1 cursor-pointer border-gray-200 rounded'>All</button>
                <button onClick={(() => {
                    setBookingData(true)
                    setStatus("allbookings/pending")
                })} className='px-4 py-2 border border-1 cursor-pointer border-gray-200 rounded'>Pending</button>
                <button onClick={(() => {
                    setBookingData(true)
                    setStatus("allbookings/successful")
                })} className='px-4 py-2 border border-1 cursor-pointer border-gray-200 rounded'>Successfull</button>
                <button onClick={(() => {
                    setBookingData(true)
                    setStatus("allbookings/canceled")
                })} className='px-4 py-2 border border-1 cursor-pointer border-gray-200 rounded'>Canceled</button>
                <button onClick={(() => {
                    setBookingData(false)
                    fetchComplaints()
                })} className='px-4 py-2 border border-1 cursor-pointer border-gray-200 rounded'>Complaints</button>
            </div>
            {loading && <div className="text-center mt-20">Loading...</div>}
            {bookings.length == 0 && !loading && bookingdata && <div className="text-center mt-20">Not found</div>}
            {!loading && !bookings.length == 0 && bookingdata && <table className="min-w-full mt-20 bg-white border border-gray-200  rounded-lg overflow-hidden">
                <thead className=" text-gray-700 text-left">
                    <tr>
                        <th className="py-3 px-4 border-b">#</th>
                        <th className="py-3 px-4 border-b">Service</th>
                        <th className="py-3 px-4 border-b">Location</th>
                        <th className="py-3 px-4 border-b">Duration</th>
                        <th className="py-3 px-4 border-b">Schedule</th>
                        <th className="py-3 px-4 border-b">Caretaker</th>
                        <th className="py-3 px-4 border-b">Status</th>
                        <th className="py-3 px-4 border-b">Phone</th>
                        <th className="py-3 px-4 border-b">price</th>
                        <th className="py-3 px-4 border-b">Referral</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-800">
                    {bookings.map((booking, index) => (
                        <tr
                            key={booking._id}
                            className="hover:bg-gray-50 transition-colors"
                        >
                            <td className="py-2 px-4 border-b">{index + 1}</td>
                            <td className="py-2 px-4 border-b">{booking.serviceName}</td>
                            <td className="py-2 px-4 border-b">{booking.location}</td>
                            <td className="py-2 px-4 border-b">{booking.duration}</td>
                            <td className="py-2 px-4 border-b">{new Date(booking.schedule).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}</td>
                            <td className="py-2 px-4 border-b">{booking.caretakerType}</td>
                            <td className="py-2 px-4 border-b capitalize relative">
                                {selectedRow === booking._id ? (
                                    <select
                                        className="text-sm border px-2 py-1 rounded w-full"
                                        value={booking.status}
                                        onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                                        onBlur={() => setSelectedRow(null)}
                                        autoFocus
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="successful">Successful</option>
                                        <option value="canceled">Canceled</option>
                                    </select>
                                ) : (
                                    <span
                                        onClick={() => setSelectedRow(booking._id)}
                                        className={`inline-block px-2 py-1 rounded text-xs font-medium cursor-pointer ${booking.status === "successful"
                                            ? "bg-green-100 text-green-700"
                                            : booking.status === "canceled"
                                                ? "bg-red-100 text-red-600"
                                                : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {booking.status}
                                    </span>
                                )}
                            </td>

                            <td className='py-2 px-4 border-b'>{booking.phone}</td>
                            <td className="py-2 px-4 border-b">₹{booking.price.max}-₹{booking.price.min}</td>
                            <td className="py-2 px-4 border-b">{booking.referenceid === "" ? "NA" : booking.referenceid}</td>
                        </tr>

                    ))}
                </tbody>
            </table>}
            {complaints.length == 0 && !loading && !bookingdata && <div className="text-center mt-20">Not found</div>}
            {!loading && !complaints.length == 0 && !bookingdata && <table className="min-w-full mt-20 bg-white border border-gray-200  rounded-lg overflow-hidden">
                <thead className="text-gray-700 text-left">
                    <tr>
                        <th className="py-3 px-4 border-b">#</th>
                        <th className="py-3 px-4 border-b">Complaint ID</th>
                        <th className="py-3 px-4 border-b">Subject</th>
                        <th className="py-3 px-4 border-b">Message</th>
                        <th className="py-3 px-4 border-b">Date</th>
                        {/* <th className="py-3 px-4 border-b">Response</th> */}
                        <th className="py-3 px-4 border-b">Status</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-800">
                    {complaints.map((complaint, index) => (
                        <tr key={complaint._id} className="hover:bg-gray-50 transition-colors">
                            <td className="py-2 px-4 border-b">{index + 1}</td>
                            <td className="py-2 px-4 border-b">{complaint.userId}</td>
                            <td className="py-2 px-4 border-b">{complaint.subject}</td>
                            <td className="py-2 px-4 border-b ">{complaint.complaintText}</td>
                            <td className="py-2 px-4 border-b">
                                {new Date(complaint.createdAt).toLocaleDateString('en-IN', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric',
                                })}
                            </td>
                            {/* <td className="py-2 px-4 border-b truncate ">{complaint.responseText?complaint.responseText:"No"}</td> */}
                            <td className="py-2 px-4 border-b capitalize">
                                {selectedRow === complaint._id ? (
                                    <select
                                        className="text-sm border px-2 py-1 rounded w-full"
                                        value={complaint.status}
                                        onChange={(e) => handleComplaintStatusChange(complaint._id, e.target.value)}
                                        onBlur={() => setSelectedRow(null)}
                                        autoFocus
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="resolved">resolved</option>
                                        <option value="canceled">Canceled</option>
                                    </select>
                                ) : (
                                    <span
                                        onClick={() => setSelectedRow(complaint._id)}
                                        className={`inline-block px-2 py-1 rounded text-xs font-medium cursor-pointer ${complaint.status === "resolved"
                                            ? "bg-green-100 text-green-700"
                                            : complaint.status === "canceled"
                                                ? "bg-red-100 text-red-600"
                                                : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {complaint.status}
                                    </span>
                                )}

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }

        </div>
    )
}

export default Page
