/* eslint-disable react/prop-types */
import { search, location } from "../assets/icons";
import Button from './Button';

const SearchBar = ({label="Search", width="full"}) => {
  return (
    <div className={`flex justify-between items-center gap-4 max-md:gap-3 p-4 lg:6 bg-white shadow-lg md:w-${width} max-md:flex-col`}>
      <div className="px-1 flex flex-1 md:mr-4 max-md:w-full">
        <img className="mr-4" src={search} alt="" />
        <div className="py-3 border-b-[1px] w-full">
          <input type="text" placeholder="Job title or keyword" className="input w-full"/>
        </div>
      </div>
      <div className="px-1 flex flex-1 md:mr-4 max-md:w-full">
        <img className="mr-4" src={location} alt="" />
        <div className="py-3 border-b-[1px] w-full">
          <input type="text" placeholder="Location" className="input w-full"/>
        </div>
      </div>
      <Button label={label} style="filled" />
    </div>
  )
}

export default SearchBar