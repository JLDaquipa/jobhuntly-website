import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { drawline } from '../assets/images';
import SearchBar from '../components/SearchBar';
import JobList from '../components/JobList';
import { FilterModal } from "../components/FilterModal";
import { FilterDataAdvanced } from 'filter-data-advanced/dist/FilterDataAdvanced';
import { jobList } from '../constant';

const FindJob = () => {
  const filter = new FilterDataAdvanced();

  // get searchParams if params are present else return empty string to filter all jobs
  const [searchParams, setSearchParams] = useSearchParams();
  const jobFilter = searchParams.get("job") ? searchParams.get("job") : "";
  const locFilter = searchParams.get("loc") ? searchParams.get("loc") : "";

  const [jobSearchInputValue, setJobSearchInputValue] = useState(jobFilter);
  const [locationInputValue, setLocationInputValue] = useState(locFilter);
  const [filteredJobList, setFilteredJobList] = useState(jobList); // filtered data to be pass to joblist component for display

  // Handles job key word input 
  const handleJobChange = (value) => {
    setJobSearchInputValue(value);
  }

  // Handles location input 
  const handleLocationChange = (value) => {
    setLocationInputValue(value);
  }

  const handleSubmit = () => {
    // Navigate to job search while passing input values
    setSearchParams({job:jobSearchInputValue, loc:locationInputValue})
  }
  
  useEffect(()=> {
    // filters the array of jobs by the position and location key params
    const firstFilter = filter.filterByKeyValue(jobList,"position",jobFilter);
    setFilteredJobList(filter.filterByKeyValue(firstFilter,"location",locFilter))
  },[searchParams])

  return (
    <section className='font-epilogue'>
      <div className='padding-x bg-neutral-0 py-10 lg:pt-36 lg:pb-16'>
        <div className='max-container'>
          <h2 className="font-clashDisplay font-semibold text-4xl text-center mb-4">
            Find your <span className="text-accent-blue w-min inline-block whitespace-nowrap">
              dream job
              <img className="w-full" src={drawline}/>
            </span>
          </h2>
          <p className='text-lg text-neutral-80 text-center mb-6'>Find your next career at companies like HubSpot, Nike, and Dropbox</p>
          <SearchBar
            firstInputValue={jobSearchInputValue}
            secInputValue={locationInputValue}
            firstInputChangeHandler={handleJobChange}
            secInputChangeHandler={handleLocationChange}
            submit={handleSubmit}
          />
          <p className="text-neutral-100 mt-4">
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
      </div>
      <div className="hidden max-lg:block py-3 border-y-[1px]">
        <FilterModal />
      </div>
      <section className='py-10 lg:py-16 padding-x'>
        <div className='max-container'>
          <JobList jobList={filteredJobList} />
        </div>
      </section>
    </section>
  )
}

export default FindJob