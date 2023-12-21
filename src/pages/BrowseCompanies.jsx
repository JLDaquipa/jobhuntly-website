import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { drawline } from "../assets/images";
import { FilterModal } from "../components/FilterModal";
import CompanyList from "../components/CompanyList";
import { FilterDataAdvanced } from "filter-data-advanced/dist/FilterDataAdvanced";
import { companyList } from "../constant";

const BrowseCompanies = () => {
  const filter = new FilterDataAdvanced();

  const [searchParams, setSearchParams] = useSearchParams();
  const nameFilter = searchParams.get("name") ? searchParams.get("name") : "";
  const locationFilter = searchParams.get("loc") ? searchParams.get("loc") : "";

  const [companySearchInputValue, setCompanySearchInputValue] = useState("");
  const [locationInputValue, setLocationInputValue] = useState("");
  const [filteredCompanyList, setFilteredCompanyList] = useState(companyList);

  const handleCompanyChange = (value) => {
    setCompanySearchInputValue(value)
  }

  const handleLocationChange = (value) => {
    setLocationInputValue(value)
  }

  const handleSubmit = () => {
    // Navigate to job search while passing input values
    setSearchParams({name:companySearchInputValue, loc:locationInputValue})
  }

  useEffect(()=> {
    // filters the array of companies by the name and location key params
    const firstFilter = filter.filterByKeyValue(companyList,"name",nameFilter);
    setFilteredCompanyList(filter.filterByKeyValue(firstFilter,"officeLocations",locationFilter))
  },[searchParams])

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
          <SearchBar
            firstInputValue={companySearchInputValue}
            secInputValue={locationInputValue}
            firstInputChangeHandler={handleCompanyChange}
            secInputChangeHandler={handleLocationChange}
            submit={handleSubmit}
          />
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
          <CompanyList 
            companyList={filteredCompanyList}
          />
        </div>
      </section>
    </section>
  )
}

export default BrowseCompanies