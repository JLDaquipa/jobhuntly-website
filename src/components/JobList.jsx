import { Collapse, List, ListItem, ListItemPrefix, Checkbox, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { filters, jobList } from "../constant";
import JobCard from "./JobCard";
import Pagination from "./pagination/Pagination";

const JobList = () => {
  const [openEmploymentType,setOpenEmploymentType] = useState(true);
  const [openCategories, setOpenCategories] = useState(true);
  const [openJobLevel, setOpenJobLevel] = useState(true);
  const [openSalaryRange, setOpenSalaryRange] = useState(true);
  const [currentPageData, setCurrentPageData] = useState([]);

  return (
    <div className="font-epilogue flex justify-between gap-10">

      {/* Filter Col */}
      <div className="flex flex-col w-[230px] gap-10">
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
                      ripple={false}
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
        <div>
          <div className="grid grid-cols-1 gap-4 py-8">
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
              getData={jobList}
              navigation={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobList