import { Link, NavLink } from "react-router-dom";
import { textLogoBlack } from "../assets/images";
import { hamburger } from "../assets/icons";
import Button from "./Button";
import React, { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import MenuBar from "./MenuBar";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const activeStyles = {
    color: "#4640DE",
    borderBottom: "4px solid #4640DE",
  }

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <nav className="max-container min-wide:padding-x flex justify-between items-center py-4">
        <div className="flex items-center gap-12 relative">
          <Link to="/">
            <img src={textLogoBlack} alt="Jobhuntly Logo" />
          </Link>
          <div className="flex gap-4 font-epilogue max-md:hidden h-[60px]">
            <NavLink 
              to="jobs"
              style={({isActive}) => isActive ? activeStyles : null}
              className="flex items-center font-medium text-neutral-80 border-b-4 border-[rgba(0,0,0,0)] transition-all ease-in-out" 
            >
              Find Jobs
            </NavLink>
            <NavLink 
              to="companies"
              style={({isActive}) => isActive ? activeStyles : null}
              className="flex items-center font-medium text-neutral-80 border-b-4 border-[rgba(0,0,0,0)] transition-all ease-in-out"  
            >
              Browse Companies
            </NavLink>
          </div>
        </div>

        <div className="flex gap-4 max-md:hidden">
          <Button label="Login" action={()=>{}}/>
          <div className="border-l-[1px] border-solid border-primary-blue"></div>
          <Button label="Sign Up" action={()=>{}} style="filled"/>
        </div>

        <div className="hidden max-md:block border-solid border-[1px] rounded-full p-2 border-neutral-20 cursor-pointer" onClick={openDrawer}>
          <img src={hamburger} />
        </div>

        <Drawer open={open} onClose={closeDrawer} placement="right" className="p-4">
          <MenuBar close={closeDrawer}/>
        </Drawer>
      </nav>
    </React.Fragment>
  )
}

export default Nav