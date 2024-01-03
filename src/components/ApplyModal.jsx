/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Spinner } from "@material-tailwind/react";
 
export function ApplyModal({close, jobData}) {
  const {companyName, companyLogo, position, location, type} = jobData;
  const [onApply,setOnApply] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setOnApply(true)
    setTimeout(()=> {
      close()
      setOnApply(false)
    },3000)
  }

  return (
    <React.Fragment>
          <div className="absolute inset-0 w-full h-full p-8 z-[9995] bg-black bg-opacity-60 backdrop-blur-sm"></div>
          <div className="w-full h-screen bg-transparent fixed top-0 z-[9999] lg:p-8 ">
            <div className="max-w-[40.25rem] h-full mx-auto p-8 bg-white shadow-2xl shadow-blue-gray-900/10">
              {/* Close Button */}
              <div className="w-full flex justify-end items-center">
                <div className="cursor-pointer" onClick={close}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.15164 5.15162C5.37667 4.92666 5.68184 4.80028 6.00004 4.80028C6.31823 4.80028 6.6234 4.92666 6.84844 5.15162L12 10.3032L17.1516 5.15162C17.2623 5.03701 17.3947 4.94559 17.5412 4.8827C17.6876 4.81981 17.845 4.78671 18.0044 4.78532C18.1637 4.78394 18.3217 4.8143 18.4692 4.87464C18.6167 4.93497 18.7506 5.02408 18.8633 5.13675C18.976 5.24942 19.0651 5.3834 19.1254 5.53088C19.1858 5.67836 19.2161 5.83637 19.2147 5.99571C19.2134 6.15504 19.1802 6.3125 19.1174 6.45891C19.0545 6.60531 18.963 6.73773 18.8484 6.84842L13.6968 12L18.8484 17.1516C19.067 17.3779 19.188 17.6811 19.1852 17.9957C19.1825 18.3103 19.0563 18.6113 18.8338 18.8338C18.6113 19.0563 18.3104 19.1825 17.9957 19.1852C17.6811 19.188 17.378 19.067 17.1516 18.8484L12 13.6968L6.84844 18.8484C6.62211 19.067 6.31899 19.188 6.00435 19.1852C5.68972 19.1825 5.38874 19.0563 5.16625 18.8338C4.94376 18.6113 4.81756 18.3103 4.81483 17.9957C4.81209 17.6811 4.93305 17.3779 5.15164 17.1516L10.3032 12L5.15164 6.84842C4.92667 6.62339 4.80029 6.31822 4.80029 6.00002C4.80029 5.68183 4.92667 5.37666 5.15164 5.15162Z" fill="#25324B"/>
                  </svg>
                </div>
              </div>
              {/* Content */}
              <form className="h-full lg:h-[calc(100vh-157px)] overflow-y-scroll no-scrollbar flex flex-col gap-6" onSubmit={(e)=>handleSubmit(e)}>
              
              <div className="flex flex-col items-center">
                <img src={companyLogo} alt="Company Logo" width={80} height={80} />
                <h3 className="font-clashDisplay font-semibold text-[2rem] text-center text-neutral-100">{position}</h3>
                <p className="font-epilogue text-neutral-80 text-center capitalize">{companyName} • {location} • {type}</p>
              </div>

              <hr className="border-1" />
              
              <div>
                <h4 className="font-clashDisplay font-semibold text-2xl text-neutral-100">Submit your application</h4>
                <p className="font-epilogue text-sm text-neutral-80">The following is required and will only be shared with Nomad</p>
              </div>

              <div className="flex flex-col">
                <label htmlFor="fullName" className="font-epilogue font-semibold text-neutral-100">Full name</label>
                <input 
                  type="text" 
                  placeholder="Enter your fullname" 
                  id="fullName" 
                  name="fullName"
                  required
                  className="font-epilogue py-3 px-4 border-[1px] border-neutral-20 outline-neutral-60"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-epilogue font-semibold text-neutral-100">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  id="email" 
                  name="email"
                  required
                  className="font-epilogue py-3 px-4 border-[1px] border-neutral-20 outline-neutral-60"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-epilogue font-semibold text-neutral-100">Phone number</label>
                <input 
                  type="number" 
                  placeholder="Enter your phone number" 
                  id="phone" 
                  name="phone"
                  required
                  className="font-epilogue py-3 px-4 border-[1px] border-neutral-20 outline-neutral-60"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="prevJob" className="font-epilogue font-semibold text-neutral-100">Current of previous job title</label>
                <input 
                  type="text" 
                  placeholder="What’s your current or previous job title?" 
                  id="prevJob" 
                  name="prevJob"
                  required
                  className="font-epilogue py-3 px-4 border-[1px] border-neutral-20 outline-neutral-60"
                />
              </div>

              <hr className="border-1" />

              <h4 className="font-clashDisplay font-semibold text-2xl text-neutral-100">LINKS</h4>

              <div className="flex flex-col">
                <label htmlFor="linkedIn" className="font-epilogue font-semibold text-neutral-100">LinkedIn URL</label>
                <input 
                  type="text" 
                  placeholder="Enter your LinkedIn URL" 
                  id="linkedIn" 
                  name="linkedIn"
                  className="font-epilogue py-3 px-4 border-[1px] border-neutral-20 outline-neutral-60"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="portfolio" className="font-epilogue font-semibold text-neutral-100">Portfolio URL</label>
                <input 
                  type="text" 
                  placeholder="Enter your portfolio URL" 
                  id="portfolio" 
                  name="portfolio"
                  className="font-epilogue py-3 px-4 border-[1px] border-neutral-20 outline-neutral-60"
                />
              </div>

              <hr className="border-1" />

              <div className="flex flex-col">
                <label htmlFor="additionalInfo" className="font-epilogue font-semibold text-neutral-100">Additional information</label>
                <textarea 
                  type="text" 
                  placeholder="Add a cover letter or anything else you want to share" 
                  id="additionalInfo" 
                  name="additionalInfo"
                  className="font-epilogue py-3 px-4 border-[1px] border-neutral-20 outline-neutral-60 h-40"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="resume" className="font-epilogue font-semibold mb-2">Attach your resume</label>
                <input 
                  type="file"
                  accept="application/pdf"
                  id="resume" 
                  name="resume"
                  className="font-epilogue py-3 px-4 border-[1px] border-neutral-20 outline-neutral-60"
                />
              </div>

              <hr className="border-1" />

              <button
                type="submit"
                className="px-6 py-3 font-bold cursor-pointer font-epilogue bg-brand-primary text-white hover:bg-[#3f3ac8] w-full rounded-sm transition-all ease-in-out flex justify-center items-center"
                disabled={onApply}
              >
                {onApply ? <Spinner className="text-white"/> : "Submit Application"}
              </button>

              <p className="text-neutral-80">By sending the request you can confirm that you accept our <span className="text-brand-primary">Terms of Service</span> and <span className="text-brand-primary">Privacy Policy</span></p>

              </form>
            </div>
          </div>
    </React.Fragment>
  );
}