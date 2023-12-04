import { Link, NavLink } from "react-router-dom";
import { textLogoBlack } from "../assets/images";
import { hamburger } from "../assets/icons";
import Button from "./Button";

const Nav = () => {

  const nonActiveStyles = {
    display: "flex",
    borderBottom: "3px solid rgba(0, 0, 0, 0)",
    alignItems: "center",
  }

  const activeStyles = {
    color: "#4640DE",
    borderBottom: "3px solid #4640DE",
    display: "flex",
    alignItems: "center",
  }

  return (
    <nav className="max-container min-wide:padding-x flex justify-between items-center max-lg:py-4">

      <div className="flex items-center gap-12 relative">
        <Link to="/">
          <img src={textLogoBlack} alt="Jobhuntly Logo" />
        </Link>
        <ul className="flex gap-4 font-epilogue max-lg:hidden h-[60px]">
          <NavLink 
            to="find"
            style={({isActive}) => isActive ? activeStyles : nonActiveStyles} 
          >
            Find Jobs
          </NavLink>
          <NavLink 
            to="browse"
            style={({isActive}) => isActive ? activeStyles : nonActiveStyles} 
          >
            Browse Companies
          </NavLink>
        </ul>
      </div>

      <div className="flex gap-4 max-lg:hidden">
        <Button label="Login" action={()=>{}}/>
        <div className="border-l-[1px] border-solid border-primary-blue"></div>
        <Button label="Sign Up" action={()=>{}} style="filled"/>
      </div>

      <div className="hidden max-lg:block border-solid border-[1px] rounded-full p-2 border-neutral-20 cursor-pointer">
        <img src={hamburger} />
      </div>
    </nav>
  )
}

export default Nav