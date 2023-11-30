import Button from "../components/Button";
import { companyDashboardImg } from "../assets/images";

const CTA = () => {
  return (
    <div className="max-container flex flex-col items-center gap-4 bg-brand-primary text-white py-20 px-4 cut-top-left-bottom-right lg:flex-row lg:justify-between lg:px-16 relative">
      <div className="flex flex-col gap-4 max-lg:items-center">
        <h3 className="text-[32px] font-semibold font-clashDisplay max-lg:text-center">Start posting jobs today</h3>
        <p className="font-epilogue font-medium">Start posting jobs for only $10.</p>
        <Button label="Sign Up For Free" action={()=>{}}/>
      </div>
      
      <img className="lg:mb-[-80px]" src={companyDashboardImg} alt="Company Dashboard" />
    </div>
  )
}

export default CTA