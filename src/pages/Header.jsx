import { FiMoon } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export const HeaderPage = () => {
  return (
    <>
      <header className="flex justify-around items-center pt-4 lg:px-10">
        <div className="div">
          <h1 className="text-2xl textGradient font-bold">Portfolio</h1>
        </div>
        <nav className="flex gap-4 text-md font-semibold ">
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
        <FiMoon />
      </header>
    </>
  );
};
