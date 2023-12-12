/* eslint-disable react/prop-types */
import CategoryLabel from "./CategoryLabel";
import { categoryLabelColor } from "../constant";
const CompanyCard = ({companyData}) => {
  const {name, profilePic, companyProfile, categories, openJobs} = companyData
  return (
    <div className="flex flex-col gap-4 font-epilogue p-6 border bg-white border-neutral-20 cursor-pointer hover:shadow-md transition ease-in-out z-10">
      <div className='flex justify-between gap-4'>
        <img className="object-contain w-12 h-12 lg:w-16 lg:h-16 " src={profilePic} alt="Company Profile Picture"/>
        <span className=' bg-neutral-10 py-1 px-3 capitalize text-brand-primary flex items-center justify-center h-max'>
          {openJobs.length} {openJobs.length > 1 ? "jobs":"job"}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h5 className='font-semibold font-clashDisplay text-2xl'>{name}</h5>
        <p className='text-neutral-80 line-clamp-3 break-all'>{companyProfile}</p>
        <div className='flex items-center gap-2 flex-wrap mt-auto'>
          <div className="flex flex-wrap gap-2">
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
      </div>
      </div>
    </div>
  )
}

export default CompanyCard