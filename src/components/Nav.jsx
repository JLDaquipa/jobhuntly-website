import { Link, NavLink } from "react-router-dom";
import { textLogoBlack } from "../assets/images";
import { hamburger } from "../assets/icons";
import Button from "./Button";
import React, { useEffect, useState } from "react";
import { Drawer } from "@material-tailwind/react";
import MenuBar from "./MenuBar";

const Nav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const activeStyles = {
    color: "#4640DE",
    borderBottom: "4px solid #4640DE",
  }

  useEffect(()=>{
    document.body.style.overflowY = openDrawer ? "hidden" : "scroll"
  },[openDrawer])

  return (
    <React.Fragment>
      <nav className="max-container min-wide:padding-x flex justify-between items-center py-4">
        <div className="flex items-center gap-12 relative">
          <Link to="/">
            <img src={textLogoBlack} alt="Jobhuntly Logo" />
          </Link>
          <div className="lg:flex gap-4 font-epilogue hidden h-[60px]">
            <NavLink 
              to="jobs"
              style={({isActive}) => isActive ? activeStyles : null}
              className="flex items-center font-medium text-neutral-80 border-b-4 border-[rgba(0,0,0,0)] hover:text-neutral-100 transition-all ease-in-out" 
            >
              Find Jobs
            </NavLink>
            <NavLink 
              to="companies"
              style={({isActive}) => isActive ? activeStyles : null}
              className="flex items-center font-medium text-neutral-80 border-b-4 border-[rgba(0,0,0,0)] hover:text-neutral-100 transition-all ease-in-out"  
            >
              Browse Companies
            </NavLink>
          </div>
        </div>

        <div className="lg:flex gap-4 hidden">
          <Button label="Login" action={()=>{}}/>
          <div className="border-l-[1px] border-solid border-primary-blue"></div>
          <Button label="Sign Up" action={()=>{}} style="filled"/>
        </div>

        <div 
          className="lg:hidden block border-solid border-[1px] rounded-full p-2 border-neutral-20 cursor-pointer" 
          onClick={() => setOpenDrawer(true)}
        >
          <img src={hamburger} />
        </div>

        <Drawer 
          open={openDrawer} 
          onClose={() => setOpenDrawer(false)} 
          placement="right" 
          className="p-4 lg:hidden"
        >
          <MenuBar close={() => setOpenDrawer(false)}/>
        </Drawer>
      </nav>
    </React.Fragment>
  )
}

export default Nav