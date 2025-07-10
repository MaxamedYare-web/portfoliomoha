import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const HeaderPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isClickMenu,setIsClickMenu] = useState(false)

  // Toggle dark mode

  return (
    <>
      <header className="flex justify-around items-center pt-4 lg:px-10">
        <div className="div">
          <h1 className="text-2xl textGradient font-bold">Portfolio</h1>
        </div>
        {/* desk top  */}
        <nav className="hidden lg:flex gap-4 text-md font-semibold ">
          <NavLink className="hover:text-blue-500 duration-500">Home</NavLink>
          <NavLink className="hover:text-blue-500 duration-500">About</NavLink>
          <NavLink className="hover:text-blue-500 duration-500">Skills</NavLink>
          <NavLink className="hover:text-blue-500 duration-500">
            Projects
          </NavLink>
          <NavLink className="hover:text-blue-500 duration-500">
            Service
          </NavLink>
          <NavLink className="hover:text-blue-500 duration-500">Blog</NavLink>
          <NavLink className="hover:text-blue-500 duration-500">Resume</NavLink>
          <NavLink className="hover:text-blue-500 duration-500">
            Contact
          </NavLink>
          <NavLink className="hover:text-blue-500 duration-500">Admin</NavLink>
        </nav>
      <div className='absolute z-10 bg-amber-300 w-screen mt-5'>
          {/* mobile menu */}
        <nav className={`absolute p-5 flex flex-col duration-2000 ease-in-out ${isClickMenu ? "w-[100%] opacity-100" :"w-[0%] opacity-1"}
          justify-center bg-white top-[15%] mt-5 right-0  lg:hidden gap-4 text-md font-semibold `}>
          <NavLink className="hover:text-blue-500 duration-500">Home</NavLink>
          <NavLink className="hover:text-blue-500 duration-500">About</NavLink>
          <NavLink className="hover:text-blue-500 duration-500">Skills</NavLink>
          <NavLink className="hover:text-blue-500 duration-500">
            Projects
          </NavLink>
          <NavLink className="hover:text-blue-500 duration-500">
            Service
          </NavLink>
          <NavLink className="hover:text-blue-500 duration-500">Blog</NavLink>
          <NavLink className="hover:text-blue-500 duration-500">Resume</NavLink>
          <NavLink className="hover:text-blue-500 duration-500">
            Contact
          </NavLink>
          <NavLink className="hover:text-blue-500 duration-500">Admin</NavLink>
        </nav>
      </div>
        {darkMode ? (
          <button
            className="text-2xl text-gray-700 dark:text-gray-700"
            onClick={() => setDarkMode(!darkMode)}
          >
            <FiMoon />
          </button>
        ) : (
          <button
            className="text-2xl text-gray-700 dark:text-gray-700"
            onClick={() => setDarkMode(!darkMode)}
          >
            <FiSun />
          </button>
        )}
       <div className='text-4xl lg:hidden'>
         {
            isClickMenu ? (<IoCloseCircleOutline  onClick={()=>setIsClickMenu(false)}/>
            ) :
             ( <FaBars  onClick={()=>setIsClickMenu(true)} />)
        }
       </div>
        
      </header>
    </>
  );
};
