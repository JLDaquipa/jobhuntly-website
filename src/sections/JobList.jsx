/* eslint-disable react/prop-types */
import { Collapse, List, ListItem, ListItemPrefix, Checkbox, Typography, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { filters } from "../constant";
import JobCard from "../components/JobCard";
import Pagination from "../components/pagination/Pagination";
import { FilterDataAdvanced } from 'filter-data-advanced/dist/FilterDataAdvanced';
import { Link, useSearchParams } from "react-router-dom";

const JobList = ({jobList}) => {
  const [openEmploymentType,setOpenEmploymentType] = useState(true);
  const [openCategories, setOpenCategories] = useState(true);
  const [openJobLevel, setOpenJobLevel] = useState(true);
  const [openSalaryRange, setOpenSalaryRange] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const [currentPageData, setCurrentPageData] = useState([]);
  const [displayedJobData, setDisplayedJobData] = useState(jobList);
  const [isFiltering,setIsFiltering] = useState(false)
  const filter = new FilterDataAdvanced();

  const [openFilter, setOpenFilter] = useState(false);
  const openFilterModal = () => setOpenFilter(true);
  const closeFilterModal = () => setOpenFilter(false);

  useEffect(()=> {
    if(categoryFilter){
      document.getElementById(`${categoryFilter}`).checked = true;
    }
    filterDisplayedJobList();
  },[jobList])

  const filterDisplayedJobList = () => {
    // initial filter group values
    let checkedEmploymentType = [""];
    let checkedCategories = [""];
    let checkedLevel = [""]

    setIsFiltering(true); // apply loading state

    const typeCheckbox = document.querySelectorAll(`input[type=checkbox][name=type]:checked`);
    const categoriesCheckbox = document.querySelectorAll(`input[type=checkbox][name=categories]:checked`);
    const levelCheckbox = document.querySelectorAll(`input[type=checkbox][name=level]:checked`);
    
    // to get an array of all checked checkbox values in their respective filter group to use in our filter function
    if(typeCheckbox.length > 0){
      checkedEmploymentType = getToFilter(typeCheckbox);
    }

    if(categoriesCheckbox.length > 0){
      checkedCategories = getToFilter(categoriesCheckbox);
    }

    if(levelCheckbox.length > 0){
      checkedLevel = getToFilter(levelCheckbox);
    }
    
    // Filter logic: Filter first the whole data with the job type group values then filter the returned filtered data to the next filter group value which is the categories and so on
    const firstFilter = filter.filterByKeyAndMultiValues(jobList,"type",checkedEmploymentType);
    const secFilter = filter.filterByKeyAndMultiValues(firstFilter,"categories",checkedCategories);
    const thirdFilter = filter.filterByKeyAndMultiValues(secFilter,"level",checkedLevel);

    setTimeout(() => { // to stimulate loading state
      setDisplayedJobData(thirdFilter);
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
    <>
      {/* Filter button for small devices */}
      <div className="hidden max-lg:block py-3 border-y-[1px]">
        <div className="w-full flex justify-center items-center">
          <div className="flex gap-2 items-center w-max cursor-pointer" onClick={openFilterModal}>
            <svg className="stroke-neutral-100 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_31852_2578)">
                <path d="M4 6H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 12H18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 18H16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
            </svg>
            <span className="font-medium flex items-center leading-none">More Filters</span>
          </div>
        </div>
      </div>
      {/* SECTION */}
      <section className='py-10 lg:py-16 padding-x'>
        <div className='max-container'>
          <div className="font-epilogue flex max-lg:flex-col justify-between gap-10">
          {/* Filter Col */}
          <div className="flex flex-col w-[230px] gap-10 max-lg:hidden">
            {/* Type of Employment Filter */}
            <div className="w-full">
              <div 
                className="cursor-pointer w-full font-bold flex justify-between items-center" 
                onClick={() => setOpenEmploymentType(!openEmploymentType)}
              >
                <span>Type of Employment</span>
                <i className={`${openEmploymentType ? "ri-arrow-up-s-line":"ri-arrow-down-s-line"} text-2xl`} ></i>
              </div>
              <Collapse open={openEmploymentType}>
                <List className="flex gap-5 p-0 pt-3">
                  {filters.job.employmentType.map((item) => (
                    <ListItem 
                      key={item} 
                      className=" hover:text-neutral-100 p-0 hover:bg-opacity-0 active:bg-opacity-0 focus:bg-opacity-0" 
                      ripple={false}
                    >
                    <label
                      htmlFor={item.toLowerCase()}
                      className="flex items-center w-full cursor-pointer"
                    >
                      <ListItemPrefix>
                        <Checkbox
                          id={item.toLowerCase()}
                          name="type"
                          value={item}
                          onChange={filterDisplayedJobList}
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

            {/* Categories Filter */}
            <div className="w-full">
              <div 
                className="cursor-pointer w-full font-bold flex justify-between items-center" 
                onClick={() => setOpenCategories(!openCategories)}
              >
                <span>Categories</span>
                <i className={`${openCategories ? "ri-arrow-up-s-line":"ri-arrow-down-s-line"} text-2xl`} ></i>
              </div>
              <Collapse open={openCategories}>
                <List className="flex gap-5 p-0 pt-3">
                  {filters.job.categories.map((item) => (
                    <ListItem 
                      key={item} 
                      className=" hover:text-neutral-100 p-0 hover:bg-opacity-0 active:bg-opacity-0 focus:bg-opacity-0" 
                      ripple={false}
                    >
                    <label
                      htmlFor={item.toLowerCase()}
                      className="flex items-center w-full cursor-pointer"
                    >
                      <ListItemPrefix>
                        <Checkbox
                          id={item.toLowerCase()}
                          ripple={false}
                          name="categories"
                          value={item}
                          onChange={filterDisplayedJobList}
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

            {/* Job Level Filter */}
            <div className="w-full">
              <div 
                className="cursor-pointer w-full font-bold flex justify-between items-center" 
                onClick={() => setOpenJobLevel(!openJobLevel)}
              >
                <span>Job Level</span>
                <i className={`${openJobLevel ? "ri-arrow-up-s-line":"ri-arrow-down-s-line"} text-2xl`} ></i>
              </div>
              <Collapse open={openJobLevel}>
                <List className="flex gap-5 p-0 pt-3">
                  {filters.job.jobLevel.map((item) => (
                    <ListItem 
                      key={item} 
                      className=" hover:text-neutral-100 p-0 hover:bg-opacity-0 active:bg-opacity-0 focus:bg-opacity-0" 
                      ripple={false}
                    >
                    <label
                      htmlFor={item.toLowerCase()}
                      className="flex items-center w-full cursor-pointer"
                    >
                      <ListItemPrefix>
                        <Checkbox
                          id={item.toLowerCase()}
                          ripple={false}
                          name="level"
                          value={item}
                          onChange={filterDisplayedJobList}
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

            {/* Salary Range Filter */}
            <div className="w-full">
              <div 
                className="cursor-pointer w-full font-bold flex justify-between items-center" 
                onClick={() => setOpenSalaryRange(!openSalaryRange)}
              >
                <span>Salary Range</span>
                <i className={`${openSalaryRange ? "ri-arrow-up-s-line":"ri-arrow-down-s-line"} text-2xl`} ></i>
              </div>
              <Collapse open={openSalaryRange}>
                <List className="flex gap-5 p-0 pt-3">
                  {filters.job.salaryRange.map((item) => (
                    <ListItem 
                      key={item} 
                      className=" hover:text-neutral-100 p-0 hover:bg-opacity-0 active:bg-opacity-0 focus:bg-opacity-0" 
                      ripple={false}
                    >
                    <label
                      htmlFor={item.toLowerCase()}
                      className="flex items-center w-full cursor-pointer"
                    >
                      <ListItemPrefix>
                        <Checkbox
                          id={item.toLowerCase()}
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

          </div>

          {/* Job List Col */}
          <div className="flex-1">
            <div className="mb-8">
              <h3 className="font-clashDisplay font-semibold text-[2rem]">All Jobs</h3>         
            </div>
            {
              isFiltering 
              ? <Spinner className="h-10 w-10 mx-auto" />
              : displayedJobData.length > 0 
                ? <div className="transition ease-in-out">
                    <div className="grid grid-cols-1 gap-4 mb-8">
                      { 
                        currentPageData.map((job, i) => (
                          <Link to={`../jobs/${job.jobID}`} key={i}>
                            <JobCard 
                              label={true}
                              button={true}
                              progress={true}
                              jobData={job}
                              />
                          </Link>
                        )) 
                      }
                    </div>
                    <div>
                      <Pagination 
                        currentPageData={setCurrentPageData}
                        dataPerPage={6}
                        getData={displayedJobData}
                        navigation={true}
                      />
                    </div>
                  </div>
                : <div className="w-full border py-4"><p className="text-center font-semibold text-neutral-60">No Job Found!</p></div>
            }
          </div>
          </div>
        </div>
      </section>
    </>
      
  )
}

export default JobList