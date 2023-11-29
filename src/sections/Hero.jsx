import { drawline,heroImage } from "../assets/images";
import SearchBar from "../components/SearchBar";

const Hero = () => {
  return (
    <div className="max-container padding-x flex pt-40 pb-24 max-md:py-4 relative">
      <div className="z-20 w-full flex flex-col">
        <h1 className="text-6xl max-md:text-4xl font-clashDisplay font-semibold">
          <span>Discover</span> <br /> <span>more than</span><br />
          <span className="text-accent-blue"> 5000+ Jobs</span>
          <img src={drawline} width={455} className="mt-2"/>
        </h1>
        <p className="font-epilogue text-5 text-neutral-80 text-opacity-70 leading-8 my-5 lg:w-[40%]">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
        <SearchBar />
        <p className="text-neutral-100 mt-4">Popular : UI Designer, UX Researcher, Android, Admin</p>
      </div>
      <div>
        <img className="absolute bottom-0 right-[7rem] z-10 max-lg:hidden" src={heroImage} alt="Hero Image" width={500}/>
      </div>
      
      <div className="w-2/3 bg-hero bg-cover h-full absolute right-0 top-0 z-1">
      </div>
    </div>
  )
}

export default Hero