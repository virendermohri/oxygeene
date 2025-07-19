'use client';
import React, { useEffect, useState } from 'react';
import "../app/globals.css";
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
const CaretakerProfile = () => {
    const doctors = [
        {
            name: "Dr. Ethan Walker",
            role: 'Cardiologist | Available: Mon-Fri | Rating: 4.8',
            image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751541686/unnamed_tqoo8o.png"
        },
        {
            name: "Dr. Olivia Hayes",
            role: 'Pediatrician | Available: Tue-Sat | Rating: 4.9',
            image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751541718/unnamed_ieldlh.png"
        },
        {
            name: "Dr. Naah Bennett",
            role: 'Dermatologist | Available: Mon-Tue | Rating: 4.7',
            image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751541735/unnamed_xgbzpn.png"
        },
    ]
    const caretakersdoc = [
        {
            name: "Sanchi Sharma",
            role: "Specialty: Elder Care | Availability: Full-time | Rating: 4.7",
            photo: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751541955/unnamed_kcnkxz.png"
        },
        {
            name: "Rohit ",
            role: "Specialty: General Care | Availability: Full-time | Rating: 4.5",
            photo: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751541969/unnamed_q0wpxh.png"
        },
        {
            name: "Priya ",
            role: "Specialty: Mother & Baby Care | Availability: Full-time | Rating: 4.7",
            photo: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751541978/unnamed_fvslsa.png"
        },
    ]
    const medicalEquipment = [
        {
            productname: "Wheelchairs",
            productimage: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751543102/unnamed_zkghog.png",
            description: "Varius types of wheelchairs available for different needs.",
        },
        {
            productname: "Hospital Beds",
            productimage: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751543117/unnamed_zkdqdm.png",
            description: "Adjustable hospital beds for comfort and care.",
        },
        {
            productname: "Oxygen Concentrators",
            productimage: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751543143/unnamed_fpb8kj.png",
            description: "Portable oxygen concentrators for respiratory support.",
        },
        {
            productname: "Blood Pressure Monitors",
            productimage: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751543145/unnamed_ytjfus.png",
            description: "Accurate blood pressure monitoring devices.",
        },
        {
            productname: "Nebulizers",
            productimage: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751543167/unnamed_e6bwvf.png",
            description: "Nebulizers for respiratory therapy.",
        },
        {
            productname: "Walkers",
            productimage: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751543171/unnamed_vi4ysk.png",
            description: "Walkers for mobility assistance.",
        },

    ]
    const [caretakers, setCaretaker] = useState(null);
    // useEffect(() => {
    //     getdata()
    // }, [])
    // const getdata = async () => {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/caretaker`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     if (!res.ok) {
    //         throw new Error("Failed to fetch caretaker data");
    //     }
    //     const caretakerData = await res.json();
    //     setCaretaker(caretakerData)
    // }
    return (
        <>

           
            <div className="md:max-w-5xl  w-full mx-auto px-4  py-8">
                <div className="flex flex-col ">
                    <h1 className='font-bold text-2xl mb-10'>Find Doctors & Caretakes</h1>
                    <div className="w-full relative ">

                        <input type="text" className='bg-gray-100 w-full py-3 px-14  rounded' placeholder='Search for doctors or caretakers' name="" id="" />
                        <IoIosSearch className='absolute top-[30%] left-[1%] text-2xl text-gray-500' />
                    </div>
                    <div className="grid md:grid-cols-8 grid-cols-3 items-center mb-10 mt-5 gap-5">
                        <button className='py-2 px-3 md:px-5 cursor-pointer bg-gray-100 rounded-full'>Spaciality</button>
                        <button className='py-2 px-3 md:px-5 cursor-pointer bg-gray-100 rounded-full'>Location</button>
                        <button className='py-2 px-3 md:px-5 cursor-pointer bg-gray-100 rounded-full'>Availability</button>
                        <button className='py-2 px-3 md:px-5 cursor-pointer bg-gray-100 rounded-full'>Rating</button>
                    </div>
                    <h1 className='font-semibold text-2xl mb-10'>Featured Doctors</h1>
                    <div className="grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-10  ">
                        {doctors.map((doc, index) => {
                            return <div className="flex  flex-col gap-2 " key={doc.name}>
                                <Image src={doc.image_url} className="w-full object-contain rounded-xl" alt={doc.name} width={100} height={100} />
                                <p className=''>{doc.name}</p>
                                <p className='text-gray-500 text-xs md:text-base'>{doc.role}</p>
                            </div>
                        })}

                    </div>
                    <h1 className='font-semibold mt-10 text-2xl mb-10'>Featured Caretakers</h1>
                    <div className="grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-10 ">
                        {caretakersdoc.map((doc, index) => {
                            return <div className="flex  flex-col gap-2 " key={doc.name}>
                                <Image src={doc.photo} className="w-full object-contain rounded-xl" alt={doc.name} width={100} height={100} />
                                <p>{doc.name}</p>
                                <p className='text-gray-500 md:text-base text-xs'>{doc.role}</p>
                            </div>
                        })}

                    </div>
                    <div className="mt-10">

                        <h1 className='font-bold text-2xl mb-10'>Medical Equipment</h1>
                        <div className="w-full relative ">

                            <input type="text" className='bg-gray-100 w-full py-3 px-14  rounded' placeholder='Search for medical equipment' name="" id="" />
                            <IoIosSearch className='absolute top-[30%] left-[1%] text-2xl text-gray-500' />
                        </div>
                        <div className="grid md:grid-cols-8 grid-cols-3 mb-10 mt-5 gap-5">
                            <button className='py-2 px-3 md:px-5 cursor-pointer bg-gray-100 rounded-full'>Category</button>
                            <button className='py-2 px-3 md:px-5 cursor-pointer bg-gray-100 rounded-full'>Brand</button>
                            <button className='py-2 px-3 md:px-5 cursor-pointer bg-gray-100 rounded-full'>Price</button>
                            <button className='py-2 px-3 md:px-5 cursor-pointer bg-gray-100 rounded-full'>Availability</button>
                        </div>
                        <div className="grid md:grid-cols-5 grid-cols-2 gap-5 md:gap-10  ">
                            {medicalEquipment.map((equipment, index) => {
                                return <div className="flex  flex-col gap-2  " key={equipment.productname}>

                                    <Image src={equipment.productimage} className="w-full object-contain rounded-xl" alt={equipment.productname} width={100} height={100} />
                                    <p className='md:text-lg  md:font-semibold'>{equipment.productname}</p>
                                    <p className='text-gray-500 md:bloxk hidden'>{equipment.description}</p>
                                </div>
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CaretakerProfile;
