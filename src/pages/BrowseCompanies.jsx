import SearchBar from "../components/SearchBar";
import { drawline } from "../assets/images";
import { FilterModal } from "../components/FilterModal";
import CompanyList from "../components/CompanyList";

const BrowseCompanies = () => {
  return (
    <section className='font-epilogue'>
      <div className='padding-x bg-neutral-0 py-10 lg:pt-36 lg:pb-16'>
        <div className='max-container'>
          <h2 className="font-clashDisplay font-semibold text-[2.375rem] sm:text-4xl text-center mb-4">
            Browse your <span className="text-accent-blue w-min inline-block whitespace-nowrap">
              dream companies
              <img className="w-full" src={drawline}/>
            </span>
          </h2>
          <p className='sm:text-lg text-neutral-80 text-center mb-6'>Find the dream companies you dream work for</p>
          <SearchBar />
          <p className="text-neutral-100 mt-4">
            Popular : Twitter, Microsoft, Apple, Facebook
          </p>
        </div>
      </div>
      <div className="hidden max-lg:block py-3 border-y-[1px]">
        <FilterModal />
      </div>
      <section className='py-10 lg:py-16 padding-x'>
        <div className='max-container'>
          <CompanyList />
        </div>
      </section>
    </section>
  )
}

export default BrowseCompanies