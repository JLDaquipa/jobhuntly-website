import { Breadcrumbs } from "@material-tailwind/react";
import { companyList } from "../constant";
import { fireIcon,groupIcon,locationBlueIcon,industryIcon } from "../assets/icons";
import Button from "../components/Button";

const CompanyDetails = () => {
  const company = companyList.find((company) => company.companyID === 1);

  return (
    <section className="font-epilogue">
      <div className='padding-x bg-neutral-0 lg:pt-[3.75rem]'>
        <div className='max-container py-10'>
          <Breadcrumbs className="bg-transparent mb-4 lg:mb-10 p-0">
            <a href="#" className="opacity-60">
              Home
            </a>
            <a href="#" className="opacity-60">
              {company.name}
            </a>
          </Breadcrumbs>
          {/* ---------------- */}
          <div className="flex flex-col xl:flex-row lg:gap-6">
            <img className="object-contain w-24 md:w-44" src={company.profilePic} alt="Company logo"/>
            <div className="">
              <div className="flex items-center gap-3">
                <h2 className="font-clashDisplay font-semibold text-4xl">{company.name}</h2>
                <span className="border border-brand-primary text-brand-primary py-1 px-3">
                  {company.openJobs.length} jobs
                </span>
              </div>
              <span className="mt-3 text-brand-primary font-semibold">{company.companyLink}</span>
              <div className="flex flex-col items-start lg:flex-row flex-wrap gap-4 lg:gap-12 mt-6">
                {/* Founded */}
                <div className="flex gap-4 items-center justify-center">
                  <div className="flex justify-center items-center w-10">
                    <img src={fireIcon} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-80">Founded</p>
                    <p className="font-semibold">{new Date(company.founded).toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"})}</p>
                  </div>
                </div>
                {/* Employees */}
                <div className="flex gap-4 items-center justify-center">
                  <div className="flex justify-center items-center w-10">
                    <img src={groupIcon} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-80">Employees</p>
                    <p className="font-semibold">{company.employeeCount}+</p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex gap-4 items-center justify-center">
                  <div className="flex justify-center items-center w-10">
                    <img src={locationBlueIcon} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-80">Location</p>
                    <p className="font-semibold">{company.officeLocations.length} countries</p>
                  </div>
                </div>
                {/* Industry */}
                <div className="flex gap-4 items-center justify-center">
                  <div className="flex justify-center items-center w-10">
                    <img src={industryIcon} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-80">Industry</p>
                    <p className="font-semibold capitalize">{company.industry[0]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------- */}
        </div>
      </div>
    </section>
  )
}

export default CompanyDetails