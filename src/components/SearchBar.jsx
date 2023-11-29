import { search, location } from "../assets/icons";
import Button from './Button';

const SearchBar = () => {
  return (
    <div className="flex items-center p-4 bg-white shadow-lg w-fit">
      <div className="px-1 flex mr-4">
        <img className="mr-4" src={search} alt="" />
        <div className="py-3 border-b-[1px]">
          <input type="text" placeholder="Job title or keyword" className="input"/>
        </div>
      </div>
      <div className="px-1 flex mr-4">
        <img className="mr-4" src={location} alt="" />
        <div className="py-3 border-b-[1px]">
          <input type="text" placeholder="Location" className="input"/>
        </div>
      </div>
      <Button label="Search my job" style="filled" />
    </div>
  )
}

export default SearchBar