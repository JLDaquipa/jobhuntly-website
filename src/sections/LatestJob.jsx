import { jobList } from "../constant";
import JobCard from "../components/JobCard";

const LatestJob = () => {
  return (
    <div className="max-container pb-10 max-lg:pt-10 lg:py-16 flex flex-col relative max-lg:gap-6 gap-0">
      <h3 className="font-clashDisplay max-lg:text-[32px] text-4xl  font-semibold text-neutral-100 mb-12 max-lg:mb-0">
        Latest <span className="text-accent-blue"> jobs open</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-lg:overflow-x-auto no-scrollbar">
        { 
          jobList.map((job, i) => (
            <JobCard 
              key={i}
              label={true}
              jobData={job}
            />
          )) 
        }
      </div>
    </div>
  )
}

export default LatestJob