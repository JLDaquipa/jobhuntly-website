import { categories } from "../constant";
import JobCategory from "../components/JobCategory";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="max-container max-lg:pb-10 pb-0 pt-20 max-lg:pt-0 flex flex-col relative max-lg:gap-6 gap-0">
      <h2 className="font-clashDisplay text-neutral-100 max-lg:text-[32px] max-lg:text-center text-4xl font-semibold mb-12">
        Explore by 
        <span className="text-accent-blue"> category</span>
      </h2>
      <div className="grid max-lg:grid-cols-1 max-lg:gap-4 grid-cols-4 gap-8">
        {
          categories.map(({name, icon}) => (
            <Link to={`jobs?category=${name}`} key={name}>
              <JobCategory name={name} icon={icon} />
            </Link>
          ))
        }
      </div>
      <div className="flex gap-4 text-epilogue text-brand-primary font-semibold cursor-pointer absolute top-28 right-0 max-lg:static">
        <Link to={"jobs"}>Show all jobs</Link>
        <i className="ri-arrow-right-line"></i>
      </div>
    </div>
  )
}

export default Category