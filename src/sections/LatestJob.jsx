import { jobList } from "../constant";
import JobCard from "../components/JobCard";

const LatestJob = () => {
  return (
    <div className="max-container pb-10 max-lg:pt-10 lg:py-16 flex flex-col relative gap-6 lg:gap-0">
      <h3 className="font-clashDisplay text-[32px] lg:text-4xl  font-semibold text-neutral-100 lg:mb-12">
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