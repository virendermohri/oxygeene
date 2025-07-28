'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Loading from './../../public/loading.gif';
import "../app/globals.css";
import { IoIosSearch } from "react-icons/io";

const RentAndBuyWithCart = () => {
  const [products, Setprodcuts] = useState([])
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you need
      },
    });
    if (!res.ok) {
      console.log("Failed to fetch data");
    }
    const products = await res.json();
    Setprodcuts(products.products)
    setLoading(false);


  };
  // useEffect(() => {
  //   fetchProducts()
  // }, [])
  const addToCart = (product, mode) => {
    const existing = cart.find(item => item.id === product.id && item.mode === mode);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id && item.mode === mode
          ? { ...item, qty: item.qty + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        ...product,
        mode,
        qty: 1,
        unitPrice: mode === 'rent' ? product.rentPrice : product.price
      }]);
    }
  };

  const updateQty = (id, mode, qty) => {
    if (qty < 1) return;
    setCart(cart.map(item =>
      item.id === id && item.mode === mode ? { ...item, qty } : item
    ));
  };

  const removeItem = (id, mode) => {
    setCart(cart.filter(item => !(item.id === id && item.mode === mode)));
  };

  const total = cart.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);

  // const filteredProducts = products.filter(p =>
  //   (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     p.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
  //   (filterType === 'all' || filterType === 'buy' || filterType === 'rent')
  // );
  const medicalEquipment = [
    {
      productname: "Wheelchairs",
      productimage: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751557623/unnamed_qu8jpt.png",
      description: "Varius types of wheelchairs available for different needs.",
    },
    {
      productname: "Hospital Beds",
      productimage: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751543117/unnamed_zkdqdm.png",
      description: "Adjustable hospital beds for comfort and care.",
    },
    {
      productname: "Oxygen Concentrators",
      productimage: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751557510/unnamed_slwvqd.png",
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
  return (
    <>
      {loading ?
        <div className="flex items-center justify-center border h-screen absolute top-0 left-0 right-0 bottom-0 bg-white z-50">
          <Image src={Loading} alt="Loading" width={50} height={50} className="animate-spin" />
        </div>
        :
        <div className="md:max-w-5xl px-4  w-full mx-auto z-1  md:my-20 my-10">
          <h1 className='text-3xl font-bold mb-10'>Buy or Rent Medical Equipment at Home – Safe & Reliable Devices</h1>
          <div className="w-full relative  mb-10">

            <input type="text" className='bg-gray-100 w-full py-3 px-14  rounded' placeholder='Search for medical equipment' name="" id="" />
            <IoIosSearch className='absolute top-[30%] left-[1%] text-2xl text-gray-500' />
          </div>
          <p className='text-xl font-bold mb-5'>Categories</p>
          <div className="grid md:grid-cols-4 grid-cols-3 md:text-base text-xs items-center mb-10 mt-5 md:gap-5 gap-4">
            <button className='py-2 md:px-5 px-3  cursor-pointer bg-gray-100 rounded-full'>Mobility Aids</button>
            <button className='py-2 md:px-5 px-3  cursor-pointer bg-gray-100 rounded-full'>Respiratory Devices</button>
            <button className='py-2 md:px-5 px-3  cursor-pointer bg-gray-100 rounded-full'>Diagonostic Tools</button>
            <button className='py-2 md:px-5 px-3  cursor-pointer bg-gray-100 rounded-full'>Rehabilitation Equipment</button>
            <button className='py-2 md:px-5 px-3  cursor-pointer bg-gray-100 rounded-full'>Home Safety</button>
            <button className='py-2 md:px-5 px-3  cursor-pointer bg-gray-100 rounded-full'>Personal Care</button>
          </div>
          <p className='text-xl font-bold mb-5'>Featured Porducts</p>
          <div className="grid md:grid-cols-5 grid-cols-3 gap-5 md:gap-10  ">
            {medicalEquipment.map((equipment, index) => {
              return <div className="flex  flex-col gap-2 " key={equipment.productname}>

                <Image src={equipment.productimage} className="w-full object-contain rounded-xl" alt={equipment.productname} width={100} height={100} />
                <p className='md:text-lg md:font-semibold'>{equipment.productname}</p>
                <p className='text-gray-500 hidden md:block'>{equipment.description}</p>
              </div>
            }
            )}
          </div>
          <p className='text-xl font-bold mt-10 mb-10'>Filters</p>
          <div className="flex items-center mb-5 justify-between">
            <p className='font-medium md:text-xl'>Price Range</p>
            <div className="w-1/2 ">
              <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-2">
                Select Price Range: ₹0 – ₹10,000
              </label>
              <input
                type="range"
                id="priceRange"
                name="priceRange"
                min={0}
                max={10000}
                step="100"
                className="w-full  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

          </div>
          <div className="flex md:gap-10 gap-5 itmes-center">
            <button className='px-4 py-2 bg-white border  font-medium rounded-lg  border-1 border-gray-300 cursor-pointer'>Buy</button>
            <button className='px-4 py-2 bg-white border  font-medium rounded-lg  border-1 border-gray-300 cursor-pointer'>Rent</button>
          </div>
          <p className='text-xl font-bold mt-10 mb-10'>Products Listings</p>
          <div className="flex flex-col gap-10">
            {
              medicalEquipment.map((equipment, index) => {
                return <div key={equipment.productname} className="">
                  <div className="flex items-center justify-between  gap-5  p-5 rounded-lg">
                    <Image src={equipment.productimage} className="w-1/4 object-contain rounded-lg shadow" alt={equipment.productname} width={100} height={100} />
                    <div className="flex items-start w-1/2 flex-col gap-2">
                      <p className='md:text-lg md:font-sm'>{equipment.productname}</p>
                      <p className='text-gray-500 text-xs md:text-base'>{equipment.description}</p>
                      <div className="flex items-center gap-5">
                        <button className='px-4 cursor-pointer md:text-base text-xs py-2 bg-gray-100 rounded-full'>View Deatils</button>
                      </div>
                    </div>

                  </div>
                </div>
              })
            }
          </div>
        </div>}
    </>

  );
};

export default RentAndBuyWithCart;
