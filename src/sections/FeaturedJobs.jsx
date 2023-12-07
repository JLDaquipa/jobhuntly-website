import { jobList } from "../constant";
import FeaturedJobCard from "../components/featuredJobCard";

const FeaturedJobs = () => {
  return (
    <div className="max-container pb-10 max-lg:pt-10 lg:pb-16 flex flex-col relative max-lg:gap-6 gap-0">
      <h3 className="font-clashDisplay max-lg:text-[32px] text-4xl font-semibold text-neutral-100 mb-12 max-lg:mb-0">
        Featured <span className="text-accent-blue"> jobs</span>
      </h3>
      <div className=" grid grid-cols-4 gap-6 max-lg:flex max-lg:gap-4 max-lg:overflow-x-auto no-scrollbar">
        { jobList.map((job, i) => <FeaturedJobCard key={i} jobData={job}/>) }
      </div>
      <div className="flex gap-4 text-epilogue text-brand-primary font-semibold cursor-pointer absolute top-8 right-0 max-lg:static">
        <span>Show all jobs</span>
        <i className="ri-arrow-right-line"></i>
      </div>
    </div>
  )
}

export default FeaturedJobs