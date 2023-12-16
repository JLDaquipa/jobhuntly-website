import { Breadcrumbs } from "@material-tailwind/react";
import { companyList } from "../constant";
import { fireIcon,groupIcon,locationBlueIcon,industryIcon } from "../assets/icons";
import PerksAndBenefits from "../components/PerksAndBenefits";
import { techStack } from "../constant";
import { useCountries } from "use-react-countries";
import { Link, useParams } from "react-router-dom";

const CompanyDetails = () => {
  const { countries } = useCountries();
  const params = useParams()
  const company = companyList.find((company) => company.companyID == params.companyID);

  return (
    <section className="font-epilogue">
      <div className='padding-x bg-neutral-0 lg:pt-[3.75rem]'>
        <div className='max-container py-10'>
          <Breadcrumbs className="bg-transparent mb-4 lg:mb-10 p-0">
            <Link to="../" className="opacity-60">
              Home
            </Link>
            <Link to={`../companies/${company.companyID}`} className="opacity-60">
              {company.name}
            </Link>
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
      <div className="padding-x">
        <div className="max-container">
          <div className="flex flex-col gap-12 py-[4.5rem] w-full lg:flex-row">
            {/* First Col */}
            <div className="flex flex-1 flex-col gap-10">
              {/* Company Profile */}
              <div>
                <h3 className="font-clashDisplay font-semibold text-2xl md:text-[2rem] mb-4">Company Profile</h3>
                <p className="text-neutral-80">{company.companyProfile}</p>
              </div>
              {/* Contact */}
              <div>
                <h3 className="font-clashDisplay font-semibold text-2xl md:text-[2rem] mb-4">Contact</h3>
                <div className="flex flex-wrap gap-4">
                  {
                    company.contact.map((item, i) => (
                      <a href="#" target="_blank" key={i} className="flex items-center gap-2 border border-brand-primary text-brand-primary font-medium p-2 cursor-pointer">
                        <span>{item.contactUrl}</span>
                      </a>
                    ))
                  }
                </div>
              </div>
              {/* Company Images */}
              <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full">
                <img src={`/src/assets/images/companyImages/${company.companyImages[0]}`} alt="company image" className="col-span-2 row-span-3 object-cover h-full rounded-md max-md:row-span-2 max-md:col-span-3"/>
                <img src={`/src/assets/images/companyImages/${company.companyImages[1]}`} alt="company image" className=" object-cover h-full rounded-md"/>
                <img src={`/src/assets/images/companyImages/${company.companyImages[2]}`} alt="company image" className=" object-cover h-full rounded-md"/>
                <img src={`/src/assets/images/companyImages/${company.companyImages[3]}`} alt="company image" className=" object-cover h-full rounded-md"/>
              </div>
            </div>
            {/* Second Col */}
            <div className="lg:w-1/3 flex flex-col">
              {/* Tech Stack */}
              <div className="">
                <h3 className="font-clashDisplay font-semibold text-2xl md:text-[2rem] mb-4">Tech Stack</h3>
                <p className="text-neutral-80 mb-4">Learn about the technology and tools that {company.name} uses. </p>
                <div className="flex flex-wrap mb-4">
                  {
                    company.stack.map(item => (
                      <div key={item} className="flex flex-col gap-3 items-center p-3">
                        <img src={techStack[`${item}`].image} width={74} height={74} alt="Tech Logo" />
                        <span className="">{item}</span>
                      </div>
                    ))
                  }
                </div>
                <span className="font-semibold text-brand-primary cursor-pointer my-8">
                  View tech stack <i className="ri-arrow-right-line"></i>
                </span>
              </div>

              <hr className="border-2 mt-4 mb-10" />

              {/* Office Location */}
              <div>
                <h3 className="font-clashDisplay font-semibold text-2xl md:text-[2rem] mb-6">Office Location</h3>
                <p className="text-neutral-80 mb-6">{company
                .name} offices spread across {company.officeLocations.length} countries</p>
                <div className="flex flex-col gap-4 mb-6">
                  {
                    company.officeLocations.map(location => {
                      const {name, flags} = countries.find((country) => country.name == location)
                      return (
                        <div key={location} className="flex gap-4">
                          <img src={flags.svg} alt="Flag image" width={40} height={30}/>
                          <span className="font-semibold">{name}</span>
                        </div>
                      )
                    })
                  }
                </div>
                <span className="font-semibold text-brand-primary cursor-pointer">
                  View countries <i className="ri-arrow-right-line"></i>
                </span>
              </div>
              
              <hr className="border-2 mt-6 mb-10" />
            </div>
          </div>

          <hr className="border-2" />

          <div className="py-[4.5rem]">
            <PerksAndBenefits />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyDetails