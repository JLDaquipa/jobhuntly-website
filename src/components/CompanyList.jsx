import { Collapse, List, ListItem, ListItemPrefix, Checkbox, Typography, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { filters, companyList } from "../constant";
import CompanyCard from "./companyCard";
import Pagination from "./pagination/Pagination";
import{ FilterDataAdvanced } from 'filter-data-advanced/dist/FilterDataAdvanced';
import { Link } from "react-router-dom";

const CompanyList = () => {
  const [openIndustry,setOpenIndustry] = useState(true);
  const [openCompanySize, setOpenCompanySize] = useState(true);

  const [currentPageData, setCurrentPageData] = useState([]);
  const [filteredCompanyData, setFilteredCompanyData] = useState(companyList);
  const [isFiltering,setIsFiltering] = useState(false)
  const filter = new FilterDataAdvanced();

  useEffect(()=> {
    filterCompanyList();
  },[])

  const filterCompanyList = () => {
    // initial filter group values
    let checkedIndustry = [""];
    let checkedCompanySize = [[0,999999]];

    setIsFiltering(true); // apply loading state

    const industryCheckbox = document.querySelectorAll(`input[type=checkbox][name=industry]:checked`);
    const companySizeCheckbox = document.querySelectorAll(`input[type=checkbox][name=companySize]:checked`);
    
    // to get an array of all checked checkbox values in their respective filter group to use in our filter function
    if(industryCheckbox.length > 0){
      checkedIndustry = getToFilter(industryCheckbox);
    }

    if(companySizeCheckbox.length > 0){
      checkedCompanySize = getToFilter(companySizeCheckbox).map(item => item.split(" - "));
    }
    
    // Filter logic: Filter first the whole data with the job type group values then filter the returned filtered data to the next filter group value which is the categories and so on
    const firstFilter = filter.filterByKeyAndMultiValues(companyList,"industry",checkedIndustry);
    const secFilter = filter.filterDataBetweenNumbers(firstFilter,"employeeCount",checkedCompanySize[0][0], checkedCompanySize[checkedCompanySize.length - 1][1]);

    setTimeout(() => { // to stimulate loading state
      setFilteredCompanyData(secFilter);
      setIsFiltering(false);
    },500)
  }

  const getToFilter = (filterCheckbox) => {
    let newArray = []
    filterCheckbox.forEach(item => {
      newArray.push(item.value)
    })
    return newArray;
  }

  return (
      <div className="font-epilogue flex max-lg:flex-col justify-between gap-10">
      {/* Filter Col */}
      <div className="flex flex-col w-[230px] gap-10 max-lg:hidden">
        {/* Industry Filter */}
        <div className="w-full">
          <div 
            className="cursor-pointer w-full font-bold flex justify-between items-center" 
            onClick={() => setOpenIndustry(!openIndustry)}
          >
            <span>Industry</span>
            <i className={`${openIndustry ? "ri-arrow-up-s-line":"ri-arrow-down-s-line"} text-2xl`} ></i>
          </div>
          <Collapse open={openIndustry}>
            <List className="flex gap-5 p-0 pt-3">
              {filters.company.industry.map((item) => (
                <ListItem 
                  key={item} 
                  className=" hover:text-neutral-100 p-0 hover:bg-opacity-0 active:bg-opacity-0 focus:bg-opacity-0" 
                  ripple={false}
                >
                <label
                  htmlFor={item}
                  className="flex items-center w-full cursor-pointer"
                >
                  <ListItemPrefix>
                    <Checkbox
                      id={item}
                      name="industry"
                      value={item}
                      onChange={filterCompanyList}
                      ripple={false}
                      disabled={isFiltering}
                      className="hover:before:opacity-0 p-0 w-5 h-5 rounded-md border-neutral-20 checked:bg-brand-primary checked:border-brand-primary"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography className="text-sm">
                    {item}
                  </Typography>
                </label>
              </ListItem>
              ))}
            </List>
          </Collapse>
        </div>

        {/* Company Size Filter */}
        <div className="w-full">
          <div 
            className="cursor-pointer w-full font-bold flex justify-between items-center" 
            onClick={() => setOpenCompanySize(!openCompanySize)}
          >
            <span>Company Size</span>
            <i className={`${openCompanySize ? "ri-arrow-up-s-line":"ri-arrow-down-s-line"} text-2xl`} ></i>
          </div>
          <Collapse open={openCompanySize}>
            <List className="flex gap-5 p-0 pt-3">
              {filters.company.companySize.map((item) => (
                <ListItem 
                  key={item} 
                  className=" hover:text-neutral-100 p-0 hover:bg-opacity-0 active:bg-opacity-0 focus:bg-opacity-0" 
                  ripple={false}
                >
                <label
                  htmlFor={item}
                  className="flex items-center w-full cursor-pointer"
                >
                  <ListItemPrefix>
                    <Checkbox
                      id={item}
                      ripple={false}
                      name="companySize"
                      value={item}
                      onChange={filterCompanyList}
                      disabled={isFiltering}
                      className="hover:before:opacity-0 p-0 w-5 h-5 rounded-md border-neutral-20 checked:bg-brand-primary checked:border-brand-primary"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography className="text-sm">
                    {item === "1000 - 999999" ? "1000 - above" : item}
                  </Typography>
                </label>
              </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      </div>

      {/* Job List Col */}
      <div className="flex-1">
        <div className="mb-8">
          <h3 className="font-clashDisplay font-semibold text-[2rem]">All Companies</h3>         
        </div>
        {
          isFiltering 
          ? <Spinner className="h-10 w-10 mx-auto" />
          : filteredCompanyData.length > 0 
            ? <div className="transition ease-in-out">
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mb-8">
                  { 
                    currentPageData.map((company) => (
                      <Link to={`${company.companyID}`} key={company.companyID}>
                        <CompanyCard  companyData={company} />
                      </Link>
                    )) 
                  }
                </div>
                <div>
                  <Pagination 
                    currentPageData={setCurrentPageData}
                    dataPerPage={6}
                    getData={filteredCompanyData}
                    navigation={true}
                  />
                </div>
              </div>
            : <div className="w-full border py-4"><p className="text-center font-semibold text-neutral-60">No Company Found!</p></div>
        }
      </div>
      </div>
  )
}

export default CompanyList