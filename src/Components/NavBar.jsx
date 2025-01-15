import React, { useState, useEffect } from 'react';
import sidebar from '../assets/navbar/sidebar.svg';
import wsidebar from '../assets/navbar/wsidebar.svg';
import search from '../assets/navbar/search.svg';
import wsearch from '../assets/navbar/wsearch.svg';
import menu from '../assets/navbar/menu.svg';
import wmenu from '../assets/navbar/wmenu.svg';
import night from '../assets/navbar/night.svg';
import day from '../assets/navbar/day.svg';
import logo from '../assets/navbar/logo.png';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import ToDo from './ToDo';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme === 'true';
  });
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const handleToggleTheme = () => setIsDarkMode((prev) => !prev);

  const handleToggleLeft = () => setIsLeftOpen((prev) => !prev);

  const handleToggleRight = () => setIsRightOpen((prev) => !prev);

  return (
    <div className={`${isDarkMode ? 'text-white bg-darkBg' : 'bg-white text-black'} min-h-screen text-sm h-full flex flex-col`}>
      <nav className="h-12 flex  items-center justify-between px-12">
        <div className="flex items-center space-x-6">
          <div onClick={handleToggleLeft} className="cursor-pointer">
            <img src={isDarkMode ? wsidebar : sidebar} alt="sidebar" />
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center space-x-6">
          <img src={isDarkMode ? wsearch : search} alt="search" />
          <div onClick={handleToggleRight} className="cursor-pointer">
            <img src={isDarkMode ? wmenu : menu} alt="menu" />
          </div>
          <div onClick={handleToggleTheme} className="cursor-pointer">
            <img src={isDarkMode ? day : night} alt="theme toggle" className="w-6 h-6" />
          </div>
        </div>
      </nav>

      <div className="flex flex-grow px-12 mt-4 justify-center ">
        {/* Left Sidebar */}
        {isLeftOpen && (
          <div className={`w-[340px] md:w-[280px]  mt-28 px-4 ${isDarkMode ? 'bg-darkash' : 'bg-ash'} ${isRightOpen ? 'hidden  md:flex' : 'bg-ash'}   mr-6`}>
            <LeftSideBar isDark={isDarkMode} />
          </div>
        )}

        {/* Main Content */}
        <div className={`flex-grow ${isLeftOpen ? 'hidden md:flex ' : ''}  ${isRightOpen ? 'hidden md:flex ' : ''}`}>
          <ToDo isDark={isDarkMode} />
        </div>

        {/* Right Sidebar */}
        {isRightOpen && (
          <div className={`w-[340px] pl-4 ${isDarkMode ? 'bg-darkash' : 'bg-ash'}  `}>
            <RightSideBar isDark={isDarkMode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
