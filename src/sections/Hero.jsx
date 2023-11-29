import { drawline } from "../assets/images";

const Hero = () => {
  return (
    <div className="max-container padding-x pt-40 pb-24 max-md:py-4">
      <h1 className="text-6xl max-md:text-4xl font-clashDisplay font-semibold">
        Discover <br /> more than 
        <span className="text-accent-blue block"> 5000+ Jobs</span>
        <img src={drawline} width={455} />
      </h1>
    </div>
  )
}

export default Hero