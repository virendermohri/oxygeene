'use client';
import React, { useState } from 'react';
import { FaFilter, FaShoppingCart, FaRegHeart } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: "Oxygen Cylinder",
    category: "Medical Equipment",
    price: 5000,
    rentPrice: 500,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6ltySej-tFGr5UiHai2nH2T5hZnJPU7ykQ&s",
    description: "Portable oxygen cylinder with regulator and mask.",
    type: "rent",
  },
  {
    id: 2,
    name: "Medical Kit",
    category: "Medical Kit",
    price: 1200,
    rentPrice: 150,
    img: "https://insights.ibx.com/wp-content/uploads/2019/06/first-aid-kit-screenshot.png",
    description: "Comprehensive medical kit with first aid essentials.",
    type: "buy",
  },
  {
    id: 3,
    name: "Blood Pressure Monitor",
    category: "Medical Equipment",
    price: 2000,
    rentPrice: 200,
    img: "https://m.media-amazon.com/images/I/71-qOprKrIL.jpg",
    description: "Automatic digital blood pressure monitor.",
    type: "buy",
  },
  {
    id: 4,
    name: "Pain Relief Medicine",
    category: "Medicine",
    price: 100,
    rentPrice: 20,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-iLxyEZIFKatvRswU01gDl3cNNJJOTVQdA&s",
    description: "Pain relief medicine, effective for headaches and body aches.",
    type: "buy",
  },
];

const RentAndBuyMedical = () => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 10000],
    type: "",
  });

  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handlePriceRangeChange = (e) => {
    const value = e.target.value.split(",");
    setFilters((prev) => ({
      ...prev,
      priceRange: [parseInt(value[0]), parseInt(value[1])],
    }));
  };

  const handleTypeChange = (e) => {
    setFilters((prev) => ({ ...prev, type: e.target.value }));
  };

  const filteredProducts = products.filter((product) => {
    const priceInRange =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const matchesCategory = filters.category ? product.category === filters.category : true;
    const matchesType = filters.type ? product.type === filters.type : true;

    return priceInRange && matchesCategory && matchesType;
  });

  return (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Rent & Buy Medical Equipment</h2>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-between mb-6 gap-4">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0 w-full sm:w-auto">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center w-full sm:w-auto"
              onClick={() => console.log("Filter Menu Opened")}
            >
              <FaFilter className="mr-2" /> Filters
            </button>
            <select
              onChange={handleCategoryChange}
              className="px-4 py-2 border rounded w-full sm:w-auto"
              value={filters.category}
            >
              <option value="">All Categories</option>
              <option value="Medical Equipment">Medical Equipment</option>
              <option value="Medical Kit">Medical Kit</option>
              <option value="Medicine">Medicine</option>
            </select>

            <select
              onChange={handleTypeChange}
              className="px-4 py-2 border rounded w-full sm:w-auto"
              value={filters.type}
            >
              <option value="">Rent or Buy</option>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
          </div>

          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <label className="text-sm">Price Range:</label>
            <input
              type="range"
              min={200}
              max={10000}
              step={100}
              value={filters.priceRange[1]}
              onChange={handlePriceRangeChange}
              className="w-full sm:w-48"
            />
            <span>
              {filters.priceRange[0]} - {filters.priceRange[1]}
            </span>
          </div>
        </div>

        {/* Products Display Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-green-700">
                  {product.type === "rent" ? `Rent: ₹${product.rentPrice}/day` : `Buy: ₹${product.price}`}
                </p>
                <div className="flex items-center space-x-4">
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => alert(`Renting ${product.name}`)}
                  >
                    Rent
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => alert(`Buying ${product.name}`)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentAndBuyMedical;
