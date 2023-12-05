/* eslint-disable react/prop-types */
import CategoryLabel from "./CategoryLabel";
import { categoryLabelColor } from "../constant";
import { Progress } from "@material-tailwind/react";
import Button from "./Button";

const JobCard = ({button, icon, label, progress, jobData}) => {
  const {companyName, companyLogo, position, location, type, categories, applied, capacity } = jobData;
  const progressPercentage = (applied / capacity) * 100;

  return (
    <div className="flex flex-col lg:flex-row gap-6 font-epilogue p-6 border bg-white border-neutral-20 cursor-pointer hover:shadow-md transition ease-in-out z-10">
      <img className="object-contain w-12 h-12 lg:w-16 lg:h-16 " src={companyLogo} alt="Company logo"/>
      <div className="flex flex-col gap-2">
        <h5 className='text-lg font-semibold'>{position}</h5>
        <p className='text-neutral-80'>{companyName} • {location}</p>
        <div className='flex items-center gap-2 flex-wrap mt-auto'>
        {
          label && 
          <div className="flex flex-wrap gap-2">
            <div className="border-r-2 pr-2">
              <div className="flex items-center px-[16px] py-1 text-sm font-semibold rounded-full capitalize text-accent-green bg-[#56CDAD1A]">
                <span>{type} Time</span>
              </div>
            </div>
            {
              categories.map( (category, i) => (
                <CategoryLabel
                  key={i}
                  type="outline"
                  caption={category}
                  textColor={categoryLabelColor[`${category}`].textColor}
                  bgColor={categoryLabelColor[`${category}`].bgColor}
                />
              ))
            }
          </div>
        }
      </div>
      </div>
      {
        button && 
        <div className="flex flex-col ml-auto items-center justify-between w-full lg:w-fit gap-4">
          <Button label="Apply" action={()=>{}} style="filled" className="min-md:w-full lg:py-4" />
          {
            progress &&
            <div className="flex w-full flex-col gap-2">
              <Progress value={progressPercentage} variant="filled" size="sm" barProps={{className: "bg-accent-green"}}/>
              <p className="text-neutral-60"><span className="font-semibold text-neutral-100">{applied} applied</span> of {capacity} capacity</p>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default JobCard