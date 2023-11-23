import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpenTwo, setDropdownOpenTwo] = useState(false);
  const [dropdownOpenOne, setDropdownOpenOne] = useState(false);
  const [dropdownOpenThree, setDropdownOpenThree] = useState(false);


  
//   const { user, handleLogOut } = useContext(Context);

  //   const userName = user?.displayName;
//   const userPhoto = user?.photoURL;
  
const user = true
const userName = 'Sharif Rayhan Nafi'
const userPhoto = 'https://unsplash.com/photos/yellow-and-gray-robot-toy-1DjbGRDh7-E'

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const toggleDropdownOne = () => {
    setDropdownOpenOne(!dropdownOpenOne);
  };

  const toggleDropdownTwo = () => {
    setDropdownOpenTwo(!dropdownOpenTwo);
  };

  // const toggleDropdownThree = () => {
  //   setDropdownOpenThree(!dropdownOpenThree);
  // };

  return (
    <nav className={`fixed w-full bg-transparent px-4 text-white py-3 transition-all duration-300 ease-in-out`}>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between mx-11">
        
    <div className='flex items-center gap-3'>
          {/* Drawer Trigger */}
          <div className="">
          <img className="h-5 cursor-pointer" onClick={toggleDrawer} src="https://i.ibb.co/G3ypY5m/menu-white.png" alt="" />
        </div>

        {/* Drawer Content */}
        {drawerOpen && (
          <div className="fixed top-0 left-0 w-[20%] h-full bg-black bg-opacity-80 z-50">
            <div className="flex justify-end p-4">
              <button onClick={closeDrawer}>
                <img className="h-8" src="https://i.ibb.co/SmWHDf9/remove.png" alt="" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/" onClick={closeDrawer} className='text-white mb-1'>Home</Link>
              <Link to="/services" onClick={closeDrawer} className='text-white'>Items</Link>
              {/* Add more menu items with onClick handlers */}
              {user && (
                <>
                <h1 className=' text-yellow-300 mt-1'>Admin Dashboard</h1>
                  <Link to="/MyServices" className="block px-4 py-2 text-sm hover:bg-[#EF5C2B]">Manage items</Link>
                  <Link to="/AddServices" className="block px-4 py-2 text-sm hover:bg-[#EF5C2B]">Add Items</Link>
                  <Link to="/MySchedules" className="block px-4 py-2 text-sm hover:bg-[#EF5C2B]">Reservations</Link>
                </>
              )}
            </div>
          </div>
        )}


        {/* Company Logo */}
        <div className="">
          <img className="h-8 w-18" src="https://i.ibb.co/frn7dFd/white.png" alt="" />
        </div>
    </div>

        {/* Three main components for users */}
        <div className="flex gap-6 relative">
          <Link to="/" className='hover:text-[#e27f5a] text-white'>Home</Link>
          <Link to="/services" className='hover:text-[#e27f5a] text-white'>Menu</Link>
          <Link to="/services" className='hover:text-[#e27f5a] text-white'>About</Link>
          <Link to="/services" className='hover:text-[#e27f5a] text-white'>Contact</Link>
        </div>

        {/* Login/Logout and user information */}
        <div className="flex items-center gap-3">
          {true && (
            <div className="relative" onClick={toggleDropdownTwo}>
              <img className="w-5 h-5 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full" src="https://unsplash.com/photos/yellow-and-gray-robot-toy-1DjbGRDh7-E" alt="" />
              {/* Dropdown Content */}
              {dropdownOpenTwo && (
                <div className="absolute w-[130px] z-10 top-full mt-1 py-2 bg-white text-gray-800 shadow-md rounded-lg">
                  <h1 className="block px-4 py-2 text-sm">Sharif Rayhan Nafi</h1>
                  <button
                    // onClick={handleLogOut}
                    className="block px-4 py-2 text-sm hover:bg-[#EF5C2B]"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}

          {!true && (
            <Link to="/Login">
              <button className="py-1 md:py-3 lg:py-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md hover:bg-gradient-to-r from-[#06beb6] to-[#48b1bf] text-[#162028]">
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
