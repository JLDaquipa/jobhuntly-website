import { categories } from "../constant";
import JobCategory from "../components/JobCategory";

const Category = () => {
  return (
    <div className="max-container pb-10 lg:pb-0 lg:pt-20 flex flex-col relative gap-6 lg:gap-0">
      <h2 className="font-clashDisplay text-neutral-100 text-[32px] max-lg:text-center lg:text-4xl font-semibold lg:mb-12">
        Explore by 
        <span className="text-accent-blue"> category</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
        {
          categories.map(({name, icon}) => (
            <JobCategory name={name} icon={icon} key={name}/>
          ))
        }
      </div>
      <div className="flex gap-4 text-epilogue text-brand-primary font-semibold cursor-pointer lg:absolute lg:top-28 lg:right-0">
        <span>Show all jobs</span>
        <i className="ri-arrow-right-line"></i>
      </div>
    </div>
  )
}

export default Category