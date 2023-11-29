import { search, location } from "../assets/icons";
import Button from './Button';

const SearchBar = () => {
  return (
    <div className="flex items-center gap-4 max-md:gap-3 p-4 bg-white shadow-lg md:w-fit max-md:flex-col">
      <div className="px-1 flex md:mr-4 max-md:w-full">
        <img className="mr-4" src={search} alt="" />
        <div className="py-3 border-b-[1px] w-full">
          <input type="text" placeholder="Job title or keyword" className="input"/>
        </div>
      </div>
      <div className="px-1 flex md:mr-4 max-md:w-full">
        <img className="mr-4" src={location} alt="" />
        <div className="py-3 border-b-[1px] w-full">
          <input type="text" placeholder="Location" className="input"/>
        </div>
      </div>
      <Button label="Search my job" style="filled" />
    </div>
  )
}

export default SearchBar