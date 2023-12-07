/* eslint-disable react/prop-types */
import { categoryIcons } from "./CategoryIcons";

const JobCategory = ({name}) => {


  return (
    <div className="flex items-center flex-col max-lg:flex-row flex-1 gap-8 cursor-pointer border border-solid border-neutral-20 p-8 stroke-brand-primary transition ease-in-out hover:stroke-white hover:bg-brand-primary hover:text-white">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {categoryIcons[`${name}`]}
      </svg>
      <div className="flex flex-col gap-[12px] w-full">
        <h3 className="font-epilogue font-semibold text-2xl capitalize">{name}</h3>
        <div className="flex justify-between items-center gap-4 w-full">
          <span className="font-epilogue text-lg">235 jobs available</span>
          <i className="ri-arrow-right-line text-xl"></i>
        </div>
      </div>
    </div>
  )
}

export default JobCategory