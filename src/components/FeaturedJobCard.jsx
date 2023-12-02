/* eslint-disable react/prop-types */
import CategoryLabel from "./CategoryLabel";
import { categoryLabelColor } from "../constant";

const FeaturedJobCard = ({jobData}) => {
  const {companyName, companyLogo, position, location, type, description, categories } = jobData;

  return (
    <div className='max-w-[286px] max-lg:min-w-[286px] flex flex-col gap-4 font-epilogue p-6 border border-neutral-20 cursor-pointer hover:shadow-xl transition ease-in-out'>
      <div className='flex justify-between gap-4'>
        <img src={companyLogo} alt="Company logo" width={48} height={48}/>
        <span className='border border-solid border-brand-primary py-1 px-3 capitalize text-brand-primary flex items-center h-max'>{type} time</span>
      </div>
      <div>
        <h5 className='text-lg font-semibold '>{position}</h5>
        <p className='text-neutral-80 mb-4'>{companyName} • {location}</p>
        <p className='text-neutral-60 line-clamp-2'>{description}</p>
      </div>
      <div className='flex gap-2 flex-wrap'>
        {categories.map( (category, i) => (
          <CategoryLabel
            key={i}
            type="filled"
            caption={category}
            textColor={categoryLabelColor[`${category}`].textColor}
            bgColor={categoryLabelColor[`${category}`].bgColor}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedJobCard;