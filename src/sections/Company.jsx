import { 
  vodafoneLogo, 
  intelLogo,
  teslaLogo,
  amdLogo,
  talkitLogo
} from "../assets/images";

const Company = () => {
  return (
    <div className="max-container padding-x lg:py-12 py-10">
      <p className="font-epilogue text-lg text-neutral-40 mb-8">Companies we helped grow</p>
      <div className="flex justify-between gap-8 flex-wrap">
        <img src={vodafoneLogo} alt="Vodafone Logo" />
        <img src={intelLogo} alt="Intel Logo" />
        <img src={teslaLogo} alt="Tesla Logo" />
        <img src={amdLogo} alt="AMD Logo" />
        <img src={talkitLogo} alt="Talkit Logo" />
      </div>
    </div>
  )
}

export default Company