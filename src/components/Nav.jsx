import { textLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="max-container padding-x flex justify-between items-center">

      <div className="flex items-center py-3 gap-12">
        <img src={textLogo} alt="Jobhuntly Logo" />
        <ul className="flex gap-4 font-epilogue max-md:hidden">
          <li className="cursor-pointer">Find Jobs</li>
          <li className="cursor-pointer">Browse Companies</li>
        </ul>
      </div>

      <div className="flex gap-4 max-md:hidden">
        <Button label="Login" action={()=>{}}/>
        <div className="border-l-[1px] border-solid border-primary-blue"></div>
        <Button label="Sign Up" action={()=>{}} style="filled"/>
      </div>

      <div className="hidden max-md:block border-solid border-[1px] rounded-full p-2 border-neutral-20 cursor-pointer">
        <img src={hamburger} />
      </div>
    </nav>
  )
}

export default Nav