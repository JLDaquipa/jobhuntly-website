import { Breadcrumbs } from "@material-tailwind/react";
import JobCard from "../components/JobCard";
import { jobList } from "../constant";
import { companyList } from "../constant";
import { Progress } from "@material-tailwind/react";
import CategoryLabel from "../components/CategoryLabel";
import { categoryLabelColor } from "../constant";
import PerksAndBenefits from "../components/PerksAndBenefits";

const JobDetails = () => {
  const job = jobList.find((job) => job.jobID === 1);
  const company = companyList.find((company) => company.openJobs.some((i) => i.jobID === 9));
  console.log(company.profilePic)
  const progressPercentage = (job.applied / job.capacity) * 100;

  return (
    <section className="font-epilogue">

      <div className='padding-x bg-neutral-0 pt-[3.75rem]'>
        <div className='max-container py-10'>
          <Breadcrumbs className="bg-transparent mb-10 p-0">
            <a href="#" className="opacity-60">
              Home
            </a>
            <a href="#" className="opacity-60">
              Company
            </a>
            <a href="#">Job ID</a>
          </Breadcrumbs>
          <JobCard
            large={true} 
            jobData={job}
            button={true} 
          />
        </div>
      </div>

      <div className="padding-x w-full">
        <div className="max-container">
          <div className="flex flex-col gap-12 py-[4.5rem] w-full lg:flex-row">
            {/* First Col */}
            <div className="flex flex-1 flex-col gap-10">
              {/* Description */}
              <div>
                <h3 className="font-clashDisplay font-semibold text-2xl md:text-[2rem] mb-4">Description</h3>
                <p className="text-neutral-80">{job.description}</p>
              </div>
              {/* Responsibilities */}
              <div>
                <h3 className="font-clashDisplay font-semibold text-2xl md:text-[2rem] mb-4">Responsibilities</h3>
                <div className="flex flex-col gap-2">
                  {
                    job.responsibilities.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <i className="ri-checkbox-circle-line text-accent-green text-2xl"></i>
                        <span>{item}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
              {/* Nice to have */}
              <div>
                <h3 className="font-clashDisplay font-semibold text-2xl md:text-[2rem] mb-4">Nice-To-Have</h3>
                <div className="flex flex-col gap-2">
                  {
                    job.softSkills.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <i className="ri-checkbox-circle-line text-accent-green text-2xl"></i>
                        <span>{item}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            {/* Second Col */}
            <div className="lg:w-1/3 flex flex-col">
              <div className="flex flex-col gap-6">
                <h3 className="font-clashDisplay font-semibold text-2xl md:text-[2rem] mb-4">About this role</h3>
                <div className="flex w-full p-4 flex-col gap-2 bg-neutral-10">
                  <p className="text-neutral-60"><span className="font-semibold text-neutral-100">{job.applied} applied</span> of {job.capacity} capacity</p>
                  <Progress value={progressPercentage} variant="filled" size="sm" barProps={{className: "bg-accent-green"}}/>
                </div>
                <div className="w-full flex justify-between">
                  <span>Apply Before</span>
                  <span className="font-semibold">
                    {job.applyBefore}
                  </span>
                </div>
                <div className="w-full flex justify-between">
                  <span>Job Posted On</span>
                  <span className="font-semibold">
                    {job.jobPosted}
                  </span>
                </div>
                <div className="w-full flex justify-between">
                  <span>Job Type</span>
                  <span className="font-semibold capitalize">
                    {job.type}
                  </span>
                </div>
                {/* <div className="w-full flex justify-between">
                  <span>Salary</span>
                  <span className="font-semibold">
                    {jobData.applyBefore}
                  </span>
                </div> */}
              </div>
              <hr className="border-2 my-10" />
              <div>
                <h3 className="font-clashDisplay font-semibold text-2xl md:text-[2rem] mb-6">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {
                    job.categories.map( (category, i) => (
                      <CategoryLabel
                        key={i}
                        type="filled"
                        caption={category}
                        textColor={categoryLabelColor[`${category}`].textColor}
                        bgColor={categoryLabelColor[`${category}`].bgColor}
                      />
                    ))
                  }
                </div>
              </div>
              <hr className="border-2 my-10" />
              <div>
                <h3 className="font-clashDisplay font-semibold text-2xl md:text-[2rem] mb-6">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {
                    job.requiredSkills.map((skill,i) => (
                      <div key={i} className="text-brand-primary px-3 py-1 bg-neutral-10">
                        <p>{skill}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <hr className="border-2" />

          <div className="py-[4.5rem]">
            <PerksAndBenefits />
          </div>

          <hr className="border-2" />

          <div className="flex justify-between items-center gap-8 py-[4.5rem] flex-col lg:flex-row">
            <div className="flex flex-col gap-8 lg:w-[600px] max-w-full">
              <div className="flex gap-6 items-center">
                <img src={company.profilePic} alt="Company Logo" />
                <div>
                  <h3 className="text-neutral-100 font-clashDisplay font-semibold text-[2rem]">{company.name}</h3>
                  <span className="text-brand-primary font-semibold cursor-pointer">Read more about {company.name} <i className="ri-arrow-right-line"></i></span>
                </div>
              </div>
              <p className="line-clamp-3 text-neutral-80">{company.companyProfile}</p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 max-md:grid-cols-2 gap-3 lg:max-w-[500px] w-full">
                <img src={`/src/assets/images/companyImages/${company.companyImages[0]}`} alt="company image" className="col-span-2 row-span-2 object-cover h-full rounded-md max-md:col-span-1"/>
                <img src={`/src/assets/images/companyImages/${company.companyImages[1]}`} alt="company image" className=" object-cover h-full rounded-md"/>
                <img src={`/src/assets/images/companyImages/${company.companyImages[2]}`} alt="company image" className=" object-cover h-full rounded-md"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobDetails