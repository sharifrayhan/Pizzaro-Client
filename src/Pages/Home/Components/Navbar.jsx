// NavBar.js

import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [dropdownOpen, setDropdownOpen] = useState(false); 
//   const { user, handleLogOut } = useContext(Context);

//   const userName = user?.displayName;
//   const userPhoto = user?.photoURL;
  
  const user = true
  const userName = 'Sharif Rayhan Nafi'
  const userPhoto = 'https://unsplash.com/photos/yellow-and-gray-robot-toy-1DjbGRDh7-E'


  const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav
      className={`fixed w-full bg-black ${scroll ? 'bg-opacity-50' : 'bg-opacity-75'} text-white p-4 transition-all duration-300 ease-in-out`}
    >
<div className="flex flex-col md:flex-row lg:flex-row items-center justify-between mx-11">
            {/* Logo shown on small devices */}
            <div className="block md:hidden lg:hidden">
                <img className="h-12" src="https://i.ibb.co/frn7dFd/white.png" alt="" />
            </div>

            <div className="md:w-[58%]  lg:w-[53%] flex items-center justify-between">
                {/* Three main components for  users */}
                <div className="flex   gap-3 relative">
                    <Link to="/" className='hover:text-[#e27f5a]'>Home</Link>
                    <Link to="/services"  className='hover:text-[#e27f5a]'>Services</Link>

                    {user && (
                    <div className="relative" onClick={toggleDropdown}>
                        <p className="cursor-pointer hover:text-[#e27f5a]">Dashboard</p>
                        {/* Dropdown Content */}
                        {dropdownOpen && (
                            <div className="absolute w-[130px] z-10 top-full mt-1 py-2 bg-white text-gray-800 shadow-md rounded-lg">
                                <Link to="/MyServices" className="block px-4 py-2 text-sm hover:bg-[#EF5C2B]">My Services</Link>
                                <Link to="/AddServices" className="block px-4 py-2 text-sm hover:bg-[#EF5C2B]">Add Services</Link>
                                <Link to="/MySchedules" className="block px-4 py-2 text-sm hover:bg-[#EF5C2B]">My Schedules</Link>
                            </div>
                        )}
                    </div>)}
                </div>

                {/* Company Logo */}
                <div className="hidden md:block lg:block">
                    <img className="h-8 w-18" src="https://i.ibb.co/frn7dFd/white.png" alt="" />
                </div>
            </div>

            {/* Login/Logout and user information */}
            <div className="flex gap-3">
            {user && userName && userPhoto && (
            <div className=" md:flex lg:flex items-center gap-2 px-1 hidden lg:px-3 p-1 rounded-md">
              <img
                className=" w-5 h-5 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full "
                src={userPhoto}
                alt=""
              />
              <h1 className="text-[#162028] text-sm">{userName}</h1>
            </div>
          )}
            {user ? (
              <button
                // onClick={handleLogOut}
                className="py-1 md:py-3 lg:py-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md hover:bg-gradient-to-r from-[#06beb6]  to-[#48b1bf] text-[#162028]"
              >
                Log Out
              </button>
            ) : (
              <Link to="/Login">
                <button className="py-1 md:py-3 lg:py-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md hover:bg-gradient-to-r from-[#06beb6]  to-[#48b1bf] text-[#162028]">
                  Log In
                </button>
              </Link>
            )}
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
