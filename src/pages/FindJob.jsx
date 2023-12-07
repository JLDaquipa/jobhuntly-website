import { drawline } from '../assets/images';
import SearchBar from '../components/SearchBar';
import { Button } from "@material-tailwind/react";
import JobList from '../components/JobList';
import { FilterModal } from "../components/FilterModal";

const FindJob = () => {
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
          <SearchBar />
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
          <JobList />
        </div>
      </section>
    </section>
  )
}

export default FindJob