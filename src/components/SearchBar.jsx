import React, { useState } from 'react'

const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [isOpen, setIsOpen] = useState(false);

  const categories = ['All categories', 'Category 1', 'Category 2', 'Category 3'];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };
  return (
    <div className='flex items-center'>
      <div className="flex items-center border border-gray-100 rounded border-r-0 shadow-sm h-[50px]">
        {/* Search Icon */}
        <div className="px-2">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
            ></path>
          </svg>
        </div>

        {/* Search Input */}
        <input
          type="text"
          className="flex-grow px-2 py-1 border-none focus:ring-0 focus:outline-none"
          placeholder="What are you looking for?"
        />

        {/* Divider */}
        <div className="border-l h-6 mx-2"></div>

        {/* Category Dropdown */}
        <div className="relative">
          <button
            className="flex items-center text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              ></path>
            </svg>
            {selectedCategory}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute z-10 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 focus:outline-none"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
         {/* Search Button */}
         <button className="bg-blue-500 text-postbtn ms-3  text-blue-500 border border-t-0 border-b-0 rounded h-full px-8 py-1 ml-2  ">
          Search
        </button>

      </div>
      <div className="flex items-center ml-4 text-gray-700 text-postbtn">
          <svg
            className="w-6 h-6 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2c4.418 0 8 3.582 8 8 0 7.25-8 12-8 12s-8-4.75-8-12c0-4.418 3.582-8 8-8z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 11a2 2 0 100-4 2 2 0 000 4z"
            ></path>
          </svg>
          Ontario
        </div>
    </div>
  )
}

export default SearchBar