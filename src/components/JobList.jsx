import { Collapse, List, ListItem, ListItemPrefix, Checkbox, Typography, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { filters, jobList } from "../constant";
import JobCard from "./JobCard";
import Pagination from "./pagination/Pagination";
import{ FilterDataAdvanced } from 'filter-data-advanced/dist/FilterDataAdvanced';

const JobList = () => {
  const [openEmploymentType,setOpenEmploymentType] = useState(true);
  const [openCategories, setOpenCategories] = useState(true);
  const [openJobLevel, setOpenJobLevel] = useState(true);
  const [openSalaryRange, setOpenSalaryRange] = useState(true);

  const [currentPageData, setCurrentPageData] = useState([]);
  const [filteredJobData, setFilteredJobData] = useState(jobList);
  const [isFiltering,setIsFiltering] = useState(false)
  const filter = new FilterDataAdvanced();

  useEffect(()=> {
    filterJobList();
  },[])

  const filterJobList = () => {
    let checkedEmploymentType = [""];
    let checkedCategories = [""];
    let checkedLevel = [""]

    setIsFiltering(true);

    const typeCheckbox = document.querySelectorAll(`input[type=checkbox][name=type]:checked`);
    const categoriesCheckbox = document.querySelectorAll(`input[type=checkbox][name=categories]:checked`);
    const levelCheckbox = document.querySelectorAll(`input[type=checkbox][name=level]:checked`);
    
    if(typeCheckbox.length > 0){
      checkedEmploymentType = getToFilter(typeCheckbox);
    }

    if(categoriesCheckbox.length > 0){
      checkedCategories = getToFilter(categoriesCheckbox);
    }

    if(levelCheckbox.length > 0){
      checkedLevel = getToFilter(levelCheckbox);
    }
    
    const firstFilter = filter.filterByKeyAndMultiValues(jobList,"type",checkedEmploymentType);
    const secFilter = filter.filterByKeyAndMultiValues(firstFilter,"categories",checkedCategories);
    const thirdFilter = filter.filterByKeyAndMultiValues(secFilter,"level",checkedLevel);

    setTimeout(() => {
      setFilteredJobData(thirdFilter);
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
              {filters.employmentType.map((item) => (
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
                      name="type"
                      value={item}
                      onChange={filterJobList}
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
              {filters.categories.map((item) => (
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
                      name="categories"
                      value={item}
                      onChange={filterJobList}
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
              {filters.jobLevel.map((item) => (
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
                      name="level"
                      value={item}
                      onChange={filterJobList}
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
              {filters.salaryRange.map((item) => (
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
          : filteredJobData.length > 0 
            ? <div className="transition ease-in-out">
                <div className="grid grid-cols-1 gap-4 mb-8">
                  { 
                    currentPageData.map((job, i) => (
                      <JobCard 
                        key={i}
                        label={true}
                        button={true}
                        progress={true}
                        jobData={job}
                      />
                    )) 
                  }
                </div>
                <div>
                  <Pagination 
                    currentPageData={setCurrentPageData}
                    dataPerPage={6}
                    getData={filteredJobData}
                    navigation={true}
                  />
                </div>
              </div>
            : <div className="w-full border py-4"><p className="text-center font-semibold text-neutral-60">No Job Found!</p></div>
        }
      </div>
      </div>
  )
}

export default JobList