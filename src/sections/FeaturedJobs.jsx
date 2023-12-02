import { jobList } from "../constant";
import FeaturedJobCard from "../components/featuredJobCard";

const FeaturedJobs = () => {
  return (
    <div className="max-container pb-10 max-lg:pt-10 lg:pb-16 flex flex-col relative gap-6 lg:gap-0">
      <h3 className="font-clashDisplay text-[32px] lg:text-4xl  font-semibold text-neutral-100 lg:mb-12">
        Featured <span className="text-accent-blue"> jobs</span>
      </h3>
      <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 max-lg:overflow-x-auto no-scrollbar">
        { jobList.map((job, i) => <FeaturedJobCard key={i} jobData={job}/>) }
      </div>
      <div className="flex gap-4 text-epilogue text-brand-primary font-semibold cursor-pointer lg:absolute lg:top-8 lg:right-0">
        <span>Show all jobs</span>
        <i className="ri-arrow-right-line"></i>
      </div>
    </div>
  )
}

export default FeaturedJobs