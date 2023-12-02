import { textLogoWhite } from "../assets/images";
import { aboutLinks, resourceLinks, socialLinks } from "../constant";
import Button from "../components/Button";

const Footer = () => {
  return (
    <div className="max-container flex flex-1 flex-wrap justify-between max-lg:flex-col gap-7 lg:gap-20 font-epilogue text-neutral-20">
      <div className="flex flex-col items-start sm:max-w-sm">
        <img className="mb-8" src={textLogoWhite} alt="Jobhuntly Logo" />
        <p className="text-lg">Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
      </div>
      <div className="flex gap-20">
        <div>
          <h5 className="font-semibold text-lg text-neutral-0 mb-5">About</h5>
          <ul className="flex flex-col gap-4">
            {
              aboutLinks.map(link => (
                <li key={link.name} className="hover:text-neutral-0 cursor-pointer whitespace-nowrap">
                  {link.name}
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-lg text-neutral-0 mb-5">Resources</h5>
          <ul className="flex flex-col gap-4">
            {
              resourceLinks.map(link => (
                <li key={link.name} className="hover:text-neutral-0 cursor-pointer">
                  {link.name}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:max-w-sm">
        <h5 className="font-semibold text-lg text-neutral-0 mb-2">Get job notifications</h5>
        <p className="text-lg mb-4">The latest job news, articles, sent to your inbox weekly.</p>
        <div className="flex flex-col lg:flex-row gap-2">
            <input className="py-3 px-4 text-base outline-none text-neutral-100" type="text" placeholder="Email Address" />
            <Button label="Subscribe" action={() => {}} style="filled" />
        </div>
      </div>
      <div className="w-full flex justify-between items-center max-md:flex-col gap-6 font-medium text-neutral-60 border-t-[1px] border-neutral-60 pt-10">
        <p className="text-lg">2021 @ JobHuntly. All rights reserved.</p>
        <div className="flex items-start gap-6">
            {
              socialLinks.map(social => (
                <div className="flex items-center justify-center w-11 h-11 self-start rounded-full text-lg text-white bg-neutral-100 opacity-80 cursor-pointer" key={social.name}>
                  <i className={`object-fill ${social.icon}`} ></i>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Footer