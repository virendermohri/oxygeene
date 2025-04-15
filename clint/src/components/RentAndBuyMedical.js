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
    priceRange: [100, 10000],
    type: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [openSuggestions, setOpenSuggestions] = useState(false);

  const handleCategoryChange = (e) => {
    setFilters({ priceRange: [100, 10000] });
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };


  const handleTypeChange = (e) => {
    setFilters({ priceRange: [100, 10000] });

    setFilters((prev) => ({ ...prev, type: e.target.value }));
  };

  const filteredProducts = products.filter((product) => {
    const priceInRange =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const matchesCategory = filters.category ? product.category === filters.category : true;
    const matchesType = filters.type ? product.type === filters.type : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return priceInRange && matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Rent & Buy Medical Equipment
        </h2>

        {/* Filter Section */}
        <div className="flex  flex-col  mb-10 md:mb-20 gap-4">
          <div className="flex justify-between  gap-4">

            <div className="relative md:w-1/3 ">
              <input
                type="text"
                value={searchQuery}
                onChange={((e) => {
                  setSearchQuery(e.target.value);
                  setOpenSuggestions(true);
                })}
                placeholder="Search products..."
                className="px-4 py-2 shadow border border-1 rounded w-full "
              />
              {searchQuery && openSuggestions && (
                <div className="absolute bg-white shadow-2xl rounded w-full z-10 max-h-40  overflow-y-auto">
                  {products
                    .filter((product) =>
                      product.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((suggestion) => (
                      <div
                        key={suggestion.id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={(() => {
                          setSearchQuery(suggestion.name);
                          setOpenSuggestions(false);
                        })}
                      >
                        {suggestion.name}
                      </div>
                    ))}
                </div>
              )}
            </div>
            <select
              onChange={handleCategoryChange}
              className="px-4 py-2 border rounded  md:w-1/3 w-[40%]"
              value={filters.category}
            >
              <option value="">All Categories</option>
              <option value="Medical Equipment">Medical Equipment</option>
              <option value="Medical Kit">Medical Kit</option>
              <option value="Medicine">Medicine</option>
            </select>
          </div>
          <div className="flex  items-center justify-between    gap-4  ">
            <select
              onChange={handleTypeChange}
              className="px-4 py-2 border rounded md:w-1/3"
              value={filters.type}
            >
              <option value="">Rent or Buy</option>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>


            <div className="flex  items-center md:w-1/3  ">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-semibold">Price:</label>
                <input
                  type="range"
                  min={200}
                  max={10000}
                  step={100}
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      priceRange: [filters.priceRange[0], parseInt(e.target.value)],
                    }))
                  }
                  className="w-full font-semibold "
                />
                <span>
                  ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Display Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
                  {product.type === "rent"
                    ? `Rent: ₹${product.rentPrice}/day`
                    : `Buy: ₹${product.price}`}
                </p>
                <div className="flex items-center space-x-4">
                  <button
                    className="px-4 py-2 cursor-pointer bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => alert(`Renting ${product.name}`)}
                  >
                    Rent
                  </button>
                  <button
                    className="px-4 cursor-pointer py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => alert(`Buying ${product.name}`)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No products found.</p>
        )}
      </div>

    </div>
  );
};

export default RentAndBuyMedical;
