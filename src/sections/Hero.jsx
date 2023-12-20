import { useState } from "react";
import { drawline,heroImage } from "../assets/images";
import SearchBar from "../components/SearchBar";

const Hero = () => {
  const [jobSearchInputValue, setJobSearchInputValue] = useState("");
  const [locationInputValue, setLocationInputValue] = useState("");

  const handleJobChange = (value) => {
    setJobSearchInputValue(value)
  }

  const handleLocationChange = (value) => {
    setLocationInputValue(value)
  }

  const handleSubmit = () => {
    // Navigate to job search while passing input values
  }

  return (
    <div className="max-container flex pt-40 pb-24 max-md:py-4 relative">
      <div className="z-20 w-full flex flex-col">
        <h1 className="text-6xl max-md:text-4xl font-clashDisplay font-semibold">
          <span>Discover</span> <br />
          <span>more than</span><br />
          <span className="text-accent-blue"> 5000+ Jobs</span>
          <img src={drawline} width={455} className="mt-2"/>
        </h1>
        <p className="font-epilogue text-xl text-neutral-80 text-opacity-70 leading-8 my-5 lg:w-[45%]">
          Great platform for the job seeker that searching for new career heights and passionate about startups.
        </p>
        <SearchBar 
          label="Search my job" 
          width="fit"
          firstInputValue={jobSearchInputValue}
          secInputValue={locationInputValue}
          firstInputChangeHandler={handleJobChange}
          secInputChangeHandler={handleLocationChange}
          submit={handleSubmit}
        />
        <p className="text-neutral-100 mt-4">
          Popular : UI Designer, UX Researcher, Android, Admin
        </p>
      </div>
      <div>
        <img 
          className="absolute bottom-0 right-0 z-10 max-lg:hidden" 
          src={heroImage} 
          alt="Hero Image" 
          width={500}
        />
      </div>
      
      
    </div>
  )
}

export default Hero