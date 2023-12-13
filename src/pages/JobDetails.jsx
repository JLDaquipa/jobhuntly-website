import { Breadcrumbs } from "@material-tailwind/react";
import JobCard from "../components/JobCard";
import { jobList } from "../constant";
import { Progress } from "@material-tailwind/react";
import CategoryLabel from "../components/CategoryLabel";
import { categoryLabelColor } from "../constant";
import PerksAndBenefits from "../components/PerksAndBenefits";

const JobDetails = () => {
  const jobData = jobList.find((job) => job.jobID === 1);
  const progressPercentage = (jobData.applied / jobData.capacity) * 100;

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
          <JobCard jobData={jobData} button={true} />
        </div>
      </div>

      <div className="flex gap-12 padding-x py-[4.5rem] w-full">
        {/* First Col */}
        <div className="max-container flex flex-1 flex-col gap-10">
          {/* Description */}
          <div>
            <h3 className="font-clashDisplay font-semibold text-[2rem] mb-4">Description</h3>
            <p className="text-neutral-80">{jobData.description}</p>
          </div>
          {/* Responsibilities */}
          <div>
            <h3 className="font-clashDisplay font-semibold text-[2rem] mb-4">Responsibilities</h3>
            <div className="flex flex-col gap-2">
              {
                jobData.responsibilities.map((item, i) => (
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
            <h3 className="font-clashDisplay font-semibold text-[2rem] mb-4">Nice-To-Have</h3>
            <div className="flex flex-col gap-2">
              {
                jobData.softSkills.map((item, i) => (
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
        <div className="w-1/3 flex flex-col">
          <div className="flex flex-col gap-6">
            <h3 className="font-clashDisplay font-semibold text-[2rem] mb-4">About this role</h3>
            <div className="flex w-full p-4 flex-col gap-2 bg-neutral-10">
              <p className="text-neutral-60"><span className="font-semibold text-neutral-100">{jobData.applied} applied</span> of {jobData.capacity} capacity</p>
              <Progress value={progressPercentage} variant="filled" size="sm" barProps={{className: "bg-accent-green"}}/>
            </div>
            <div className="w-full flex justify-between">
              <span>Apply Before</span>
              <span className="font-semibold">
                {jobData.applyBefore}
              </span>
            </div>
            <div className="w-full flex justify-between">
              <span>Job Posted On</span>
              <span className="font-semibold">
                {jobData.jobPosted}
              </span>
            </div>
            <div className="w-full flex justify-between">
              <span>Job Type</span>
              <span className="font-semibold capitalize">
                {jobData.type}
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
            <h3 className="font-clashDisplay font-semibold text-[2rem] mb-6">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {
                jobData.categories.map( (category, i) => (
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
            <h3 className="font-clashDisplay font-semibold text-[2rem] mb-6">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {
                jobData.requiredSkills.map((skill,i) => (
                  <div key={i} className="text-brand-primary px-3 py-1 bg-neutral-10">
                    <p>{skill}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="padding-x">
        <hr className="border-2" />
      </div>
      <div className="padding-x py-[4.5rem]">
        <PerksAndBenefits />
      </div>

    </section>
  )
}

export default JobDetails