import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-white ml-[0px] max-md:ml-0 max-md:w-full text-black w-[100%] py-2 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo and title */}
          <div className="flex items-center flex-grow">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png"
              alt="ChatGPT Logo"
              className="h-6 w-6 mr-2 ml-[200px] max-sm:ml-0 max-md:ml-0"
            />
            <p className="text-[17px] font-semibold text-gray-500">
              ChatGPT Auto
            </p>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-black hover:text-gray-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Replacing nav with the image */}
          
          <div className="  ">
            <img
              src="/nomi khan.jpg" // Path to high-resolution image
              alt="Choudhary Noman"
              className="h-10 w-10  object-cover rounded-full max-md:hidden" // Increased size for HD look
              style={{ imageRendering: "auto", objectFit: "cover" }} // CSS to handle sharp rendering
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden ">
            <div className="flex justify-center">
              <img
                src="/nomi khan.jpg"
                alt="Choudhary Noman"
                className="h-5 w-5 object-cover rounded-full "
                style={{ imageRendering: "auto", objectFit: "cover" }} // Ensuring crisp quality
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
