import { categories } from "../constant";
import JobCategory from "../components/JobCategory";

const Category = () => {
  return (
    <div className="pb-10 lg:pt-20 flex flex-col">
      <h2 className="font-clashDisplay text-neutral-100 text-4xl font-semibold mb-12">
        Explore by 
        <span className="text-accent-blue"> category</span>
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8">
        {
          categories.map(({name, icon}) => (
            <JobCategory name={name} icon={icon} key={name}/>
          ))
        }
      </div>
    </div>
  )
}

export default Category