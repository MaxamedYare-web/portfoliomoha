import { FiMoon } from "react-icons/fi"
import { NavLink } from "react-router-dom"


export const HeaderPage = ()=>{
return(<>

<header className="flex justify-between items-center pt-4 lg:px-30">
    <div className="div">
        <h1 className="text-4xl ">Portfolio</h1>
    </div>
    <nav className="flex gap-4 text-2xl">
    <NavLink>Home</NavLink>
    <NavLink>About</NavLink>
    <NavLink>Skills</NavLink>
    <NavLink>Projects</NavLink>
    <NavLink>Service</NavLink>
    <NavLink>Blog</NavLink>
    <NavLink>Resume</NavLink>
    <NavLink>Contact</NavLink>
    <NavLink>Admin</NavLink>
    </nav>
    <FiMoon />
</header>

</>)
}