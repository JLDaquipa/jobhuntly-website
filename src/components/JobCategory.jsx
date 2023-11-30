/* eslint-disable react/prop-types */
import { categoryIcons } from "./CategoryIcons"

const JobCategory = ({name}) => {


  return (
    <div className="flex lg:flex-col gap-8 border border-solid border-neutral-20 p-8">
      <svg className="stroke-brand-primary" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {categoryIcons[`${name}`]}
      </svg>
      <div className="flex flex-col gap-[12px]">
        <h3 className="font-epilogue font-semibold text-2xl capitalize">{name}</h3>
        <div className="flex justify-between items-center gap-4">
          <span className="font-epilogue text-lg">235 jobs available</span>
          <svg className="stroke-brand-primary" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Stroke 1" d="M16.75 7.72559L1.75 7.72559" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Stroke 3" d="M10.7002 1.70124L16.7502 7.72524L10.7002 13.7502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            
          </svg>
        </div>
      </div>
    </div>
  )
}

export default JobCategory