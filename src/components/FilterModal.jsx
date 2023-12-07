import React, {useState} from "react";
import {  List, ListItem, ListItemPrefix, Checkbox, Typography } from "@material-tailwind/react";
import { filters } from "../constant";
import Button from "./Button";
 
export function FilterModal() {
  const [open, setOpen] = useState(true);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center w-max cursor-pointer" onClick={openDrawer}>
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
      {
        open &&
        <>
          <div className="absolute inset-0 w-full h-full p-8 z-[9995] bg-black bg-opacity-60 backdrop-blur-sm"></div>
          <div className="w-full bg-transparent fixed top-0 z-[9999] p-8">
              <div className="w-full flex justify-between items-center bg-white p-8">
                <h5 className="font-clashDisplay font-semibold text-2xl">More Filters</h5>
                <div className="cursor-pointer" onClick={closeDrawer}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.15164 5.15162C5.37667 4.92666 5.68184 4.80028 6.00004 4.80028C6.31823 4.80028 6.6234 4.92666 6.84844 5.15162L12 10.3032L17.1516 5.15162C17.2623 5.03701 17.3947 4.94559 17.5412 4.8827C17.6876 4.81981 17.845 4.78671 18.0044 4.78532C18.1637 4.78394 18.3217 4.8143 18.4692 4.87464C18.6167 4.93497 18.7506 5.02408 18.8633 5.13675C18.976 5.24942 19.0651 5.3834 19.1254 5.53088C19.1858 5.67836 19.2161 5.83637 19.2147 5.99571C19.2134 6.15504 19.1802 6.3125 19.1174 6.45891C19.0545 6.60531 18.963 6.73773 18.8484 6.84842L13.6968 12L18.8484 17.1516C19.067 17.3779 19.188 17.6811 19.1852 17.9957C19.1825 18.3103 19.0563 18.6113 18.8338 18.8338C18.6113 19.0563 18.3104 19.1825 17.9957 19.1852C17.6811 19.188 17.378 19.067 17.1516 18.8484L12 13.6968L6.84844 18.8484C6.62211 19.067 6.31899 19.188 6.00435 19.1852C5.68972 19.1825 5.38874 19.0563 5.16625 18.8338C4.94376 18.6113 4.81756 18.3103 4.81483 17.9957C4.81209 17.6811 4.93305 17.3779 5.15164 17.1516L10.3032 12L5.15164 6.84842C4.92667 6.62339 4.80029 6.31822 4.80029 6.00002C4.80029 5.68183 4.92667 5.37666 5.15164 5.15162Z" fill="#25324B"/>
                  </svg>
                </div>
              </div>
              <div className="bg-white shadow-2xl shadow-blue-gray-900/10 top-0 h-[calc(100vh-157px)] overflow-y-scroll px-8 no-scrollbar flex flex-col gap-6 pb-8">
                {/* Type of Employment Filter */}
                <div className="w-full">
                  <div className="w-full font-bold flex justify-between items-center"
                  >
                    <span>Type of Employment</span>
                  </div>
                  <div>
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
                  </div>
                </div>

                {/* Categories Filter */}
                <div className="w-full">
                  <div className="cursor-pointer w-full font-bold flex justify-between items-center">
                    <span>Categories</span>
                  </div>
                  <div>
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
                  </div>
                </div>

                {/* Job Level Filter */}
                <div className="w-full">
                  <div className="cursor-pointer w-full font-bold flex justify-between items-center" >
                    <span>Job Level</span>
                  </div>
                  <div>
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
                  </div>
                </div>

                {/* Salary Range Filter */}
                <div className="w-full">
                  <div 
                    className="cursor-pointer w-full font-bold flex justify-between items-center" >
                    <span>Salary Range</span>
                  </div>
                  <div>
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
                  </div>
                </div>
                
                <Button label="Apply" style="filled" action={()=>{}}/>
              </div>
            </div>
        </>
      }

    </React.Fragment>
  );
}