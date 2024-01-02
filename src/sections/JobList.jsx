/* eslint-disable react/prop-types */
import { Collapse, List, ListItem, ListItemPrefix, Checkbox, Typography, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { filters } from "../constant";
import JobCard from "../components/JobCard";
import Pagination from "../components/pagination/Pagination";
import { FilterDataAdvanced } from 'filter-data-advanced/dist/FilterDataAdvanced';
import { Link, useSearchParams } from "react-router-dom";
import useWindowDimensions from "../utils/useWindowDimensions"

const JobList = ({jobList}) => {
  const {width} = useWindowDimensions();
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
      <div className="max-lg:block hidden py-3 border-y-[1px]">
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
            {
              openFilter && width <= 1024 &&
              <div className="absolute inset-0 w-full h-full p-8 z-[9995] bg-[#0D0B41] bg-opacity-60 backdrop-blur-sm"></div>
            }
            <div className={width > 1024 ? "w-[230px]" : `w-full bg-transparent fixed inset-1 z-[9999] p-8 ${!openFilter ? "hidden" : ""}`}>
                {
                  // Filter Button for small devices
                  width <= 1024 &&
                  <div className="w-full flex justify-between items-center bg-white p-8">
                    <h5 className="font-clashDisplay font-semibold text-2xl">More Filters</h5>
                    <div className="cursor-pointer" onClick={closeFilterModal}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.15164 5.15162C5.37667 4.92666 5.68184 4.80028 6.00004 4.80028C6.31823 4.80028 6.6234 4.92666 6.84844 5.15162L12 10.3032L17.1516 5.15162C17.2623 5.03701 17.3947 4.94559 17.5412 4.8827C17.6876 4.81981 17.845 4.78671 18.0044 4.78532C18.1637 4.78394 18.3217 4.8143 18.4692 4.87464C18.6167 4.93497 18.7506 5.02408 18.8633 5.13675C18.976 5.24942 19.0651 5.3834 19.1254 5.53088C19.1858 5.67836 19.2161 5.83637 19.2147 5.99571C19.2134 6.15504 19.1802 6.3125 19.1174 6.45891C19.0545 6.60531 18.963 6.73773 18.8484 6.84842L13.6968 12L18.8484 17.1516C19.067 17.3779 19.188 17.6811 19.1852 17.9957C19.1825 18.3103 19.0563 18.6113 18.8338 18.8338C18.6113 19.0563 18.3104 19.1825 17.9957 19.1852C17.6811 19.188 17.378 19.067 17.1516 18.8484L12 13.6968L6.84844 18.8484C6.62211 19.067 6.31899 19.188 6.00435 19.1852C5.68972 19.1825 5.38874 19.0563 5.16625 18.8338C4.94376 18.6113 4.81756 18.3103 4.81483 17.9957C4.81209 17.6811 4.93305 17.3779 5.15164 17.1516L10.3032 12L5.15164 6.84842C4.92667 6.62339 4.80029 6.31822 4.80029 6.00002C4.80029 5.68183 4.92667 5.37666 5.15164 5.15162Z" fill="#25324B"/>
                      </svg>
                    </div>
                  </div>
                }
              {/* Filters */}
              <div className={width > 1024 ? "flex flex-col w-full gap-10" : "bg-white shadow-2xl shadow-blue-gray-900/10 top-0 h-[calc(100vh-157px)] overflow-y-scroll px-8 no-scrollbar flex flex-col md:grid md:grid-cols-2 gap-6 pb-8"}>
                {/* Type of Employment Filter */}
                <div className="w-full md:w-fit">
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
                <div className="w-full md:w-fit">
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
                <div className="w-full md:w-fit">
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
                <div className="w-full md:w-fit">
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