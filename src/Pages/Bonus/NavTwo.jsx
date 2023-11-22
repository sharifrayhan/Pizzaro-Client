import { useState, useEffect } from 'react';

const NavTwo = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    buyBusiness: false,
    buyFranchise: false,
    sellBusiness: false,
    businessBrokers: false,
    franchisors: false,
    businessWanted: false,
    myBusiness: false,
  });

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [dropdown]: !prevDropdowns[dropdown],
    }));
  };

  return (
    <nav
      className={` w-full bg-gradient-to-r ${
        scrolled ? 'from-white to-purple-700' : 'from-purple-700 to-purple-700'
      } text-white px-10 py-3 z-50`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Business Logo */}
        <div className="text-xl font-bold">
          Business Post
        </div>

        {/* Navbar Links */}
        <div className="space-x-6 text-white">
          <div className="group relative">
            <button
              className="flex items-center focus:outline-none text-white hover:text-purple-500"
              onClick={() => toggleDropdown('buyBusiness')}
            >
              <span>Buy a Business</span>
              <svg
                className={`w-4 h-4 ml-1 transition duration-300 ${
                  dropdowns.buyBusiness ? 'transform rotate-180' : ''
                }`}
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
                />
              </svg>
            </button>

            {/* Dropdown Content */}
            {dropdowns.buyBusiness && (
              <div className="absolute mt-2 space-y-2 bg-white text-purple-700 border border-purple-700 rounded-md p-2">
                <a href="#">Search for Business</a>
              </div>
            )}
          </div>
          
          {/* Add similar code for other menu items */}
          
        </div>

        {/* My Business Button */}
        <div className="group relative">
          <button
            className="flex items-center focus:outline-none"
            onClick={() => toggleDropdown('myBusiness')}
          >
            <span>My Business</span>
            <svg
              className={`w-4 h-4 ml-2 transition duration-300 ${
                dropdowns.myBusiness ? 'transform rotate-180' : ''
              }`}
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
              />
            </svg>
          </button>

          {/* Dropdown for My Business */}
          {dropdowns.myBusiness && (
            <div className="absolute right-0 mt-2 space-y-2 bg-white text-purple-700 border border-purple-700 rounded-md p-2">
              <a href="#">Post a Free Ad</a>
              <a href="#">Manage Ads</a>
              <a href="#">My Watchlist</a>
              <a href="#">Profile Setting</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavTwo;
