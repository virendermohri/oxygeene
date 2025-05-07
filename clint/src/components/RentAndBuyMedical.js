'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from "react-icons/io";
import Loading from './../../public/loading.gif';
import "../app/globals.css";
const RentAndBuyWithCart = () => {
  const [products, Setprodcuts] = useState([])
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(true);
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
  useEffect(() => {
    fetchProducts()
  }, [])
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

  const filteredProducts = products.filter(p =>
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (filterType === 'all' || filterType === 'buy' || filterType === 'rent')
  );

  return (
    <>
      {loading ?
        <div className="flex items-center justify-center border h-screen absolute top-0 left-0 right-0 bottom-0 bg-white z-50">
          <Image src={Loading} alt="Loading" width={50} height={50} className="animate-spin" />
        </div>
        :
        <div className="px-4 py-8 max-w-7xl mx-auto mt-10 relative">
          {/* Your original top bar design */}
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-green-700 mt-5">Rent & Buy Medical</h2>
            </div>
            <div className=" flex flex-wrap md:justify-end justify-center items-center gap-3">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 w-[70%] md:w-auto rounded-md shadow-sm focus:outline-none"
              />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 hidden md:block py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              >
                <option value="all">All</option>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
              <button
                onClick={() => setShowCart(!showCart)}
                className="flex items-center  top-0 right-10 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
              >
                <FaShoppingCart className="mr-2" />
                <p className='hidden md:block'>Cart</p>({cart.length})
              </button>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 md:hidden block py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none"
              >
                <option value="all">All</option>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 overflow-auto z-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.length === 0 && (
              <div className="col-span-1 sm:col-span-2 md:col-span-3 text-center p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter.</p>
              </div>
            )}

            {filteredProducts.map((product) => (
              <div key={product._id} className="bg-white   p-6 rounded-lg shadow-md">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between mb-2">
                  <span className="text-green-700 font-medium">Rent: ₹{product.rentPrice}/day</span>
                  <span className="text-blue-700 font-medium">Buy: ₹{product.price}</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => addToCart(product, 'rent')}
                    className="flex-1 bg-green-600 text-white py-1 rounded hover:bg-green-700"
                  >
                    Rent
                  </button>
                  <button
                    onClick={() => addToCart(product, 'buy')}
                    className="flex-1 bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Panel */}
          {showCart && (
            <div className="fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-2xl p-6 z-50 overflow-y-auto">
              <div className=" mb-4 flex  justify-between items-center ">

                <h3 className="text-xl font-bold text-gray-800">Your Cart</h3>
                <IoIosCloseCircleOutline className='text-2xl cursor-pointer' onClick={(() => { setShowCart(false) })} />
              </div>
              {cart.length === 0 ? (
                <p className="text-gray-500">Cart is empty.</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.mode}`} className="mb-4 border-b pb-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{item.name} ({item.mode})</p>
                          <p className="text-sm text-gray-600">₹{item.unitPrice} x {item.qty}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.mode)}
                          className="cursor-pointer text-red-600 hover:text-red-800"
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <div className="flex mt-2 space-x-2">
                        <button
                          onClick={() => updateQty(item.id, item.mode, item.qty - 1)}
                          className="px-2 cursor-pointer py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span className="px-2">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.mode, item.qty + 1)}
                          className="px-2 cursor-pointer py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 font-semibold text-lg text-right">
                    Total: ₹{total}
                  </div>
                  <button className="mt-6 w-full cursor-pointer bg-green-600 text-white py-2 rounded hover:bg-green-700">
                    Proceed to Checkout
                  </button>
                </>
              )}
            </div>
          )}
        </div>}
    </>

  );
};

export default RentAndBuyWithCart;
