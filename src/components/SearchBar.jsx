/* eslint-disable react/prop-types */
import { search, location } from "../assets/icons";
import { Select, Option, Input } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import Button from './Button';

const SearchBar = ({label="Search", width="full"}) => {
  const { countries } = useCountries();

  if(width === "full"){
    width = "lg:w-full";
  }
  else if(width === "fit"){
    width = "w-fit max-lg:w-full";  
  }

  return (
    <div className={`flex justify-between items-center gap-4 max-md:gap-3 p-4 lg:6 bg-white shadow-lg ${width} flex-col lg:flex-row`}>
      <div className="px-1 flex flex-1 md:mr-4 max-lg:w-full">
        <img className="mr-4" src={search} alt="" />
        <div className="w-full">
          <Input 
          variant="standard" 
          label="Job title or keyword" 
          className="input w-full"
          labelProps={{
            className: "text-neutral-60"
          }}
        />
        </div>
      </div>
      <div className="px-1 flex flex-1 md:mr-4 max-lg:w-full">
        <img className="mr-4" src={location} alt="" />
        <div className="w-full">
          <Select 
          variant="standard" 
          className="input w-full" 
          label="Location"
          lockScroll
          labelProps={{
            className: "text-neutral-60"
          }}
          menuProps={{
            className:"h-[150px]",
          }}
          animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
          }}
          >
            {
              countries.sort((a,b) => {
                let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
              }).map(({name}) => (
                <Option key={name}>{name}</Option>
              ))
            }
          </Select>
        </div>
      </div>
      <Button label={label} style="filled" />
    </div>
  )
}

export default SearchBar