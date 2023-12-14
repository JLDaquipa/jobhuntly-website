import { designIcon, salesIcon, marketingIcon, financeIcon, techIcon, engineeringIcon, businessIcon, hrIcon, coffeeIcon, commuterIcon, developmentIcon, giveIcon, healthcareIcon, summitIcon, vacationIcon} from "../assets/icons";
import { blinkistLogo, canvaLogo, classPassLogo, clayLogo, coinbaseLogo, digitalOceanLogo, discordLogo, divvyLogo, dropboxLogo, foundation, goDaddyLogo, harvardLogo, komodoLogo, krakenLogo, mazeLogo, mediaMonksLogo, netlifyLogo, nomadLogo, nubankLogo, numbrsLogo, packerLogo, pentagramLogo, pitchLogo, prooffeedLogo, revolutLogo, robinhoodLogo, sanofiLogo, squareLogo, stakenetLogo, stripeLogo, terraformLogo, truebillLogo, twitterLogo, udacityLogo, universityOfTorontoLogo, webflowLogo, weTransferLogo, wolffOlinsLogo, zendLogo,} from '../assets/images/companies';

export const categories = [
  {
    name: "design",
    icon: designIcon,
  },
  {
    name: "sales",
    icon: salesIcon,
  },
  {
    name: "marketing",
    icon: marketingIcon,
  },
  {
    name: "finance",
    icon: financeIcon,
  },
  {
    name: "technology",
    icon: techIcon,
  },
  {
    name: "engineering",
    icon: engineeringIcon,
  },
  {
    name: "business",
    icon: businessIcon,
  },
  {
    name: "human resource",
    icon: hrIcon,
  },
];

export const perks = [
  {
    name: "Full Healthcare",
    text: "We believe in thriving communities and that starts with our team being happy and healthy.",
    icon: healthcareIcon,
  },
  {
    name: "Unlimited Vacation",
    text: "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
    icon: vacationIcon,
  },
  {
    name: "Skill Development",
    text: "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
    icon: developmentIcon,
  },{
    name: "Team Summits",
    text: "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
    icon: summitIcon,
  },
  {
    name: "Remote Working",
    text: "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
    icon: coffeeIcon,
  },
  {
    name: "Commuter Benefits",
    text: "We’re grateful for all the time and energy each team member puts into getting to work every day.",
    icon: commuterIcon,
  },
  {
    name: "We give back",
    text: "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. ",
    icon: giveIcon,
  },

]

export const filters = {
  job: {
    employmentType: ["Full Time","Part Time", "Remote", "Internship", "Contract"],
    categories: ["Design","Sales","Marketing","Business","Human Resource","Finance","Engineering","Technology"],
    jobLevel: ["Entry Level", "Mid Level","Senior Level","Director","VP or Above"],
    salaryRange: ["$700 - $1000", "$100 - $1500", "$1500 - $2000", "$3000 or above"],
    industry: ["Advertising","Business Service", "Blockchain", "Cloud", "Consumer Tech", "Education", "Fintech", "Gaming", "Food & Beverages", "Healthcare", "Hosting", "Media"],
    companySize: ["1-50", "51-150", "151-250", "250-500", "501-1000","1000 - above"],
  },
  company: {
    industry: ["Advertising", "Business Service", "Blockchain", "Cloud", "Consumer Tech", "Fintech", "Gaming", "Food & Beverage", "Healthcare", "Hosting", "Media"],
    companySize: ["1 - 50", "51 - 150", "151 - 250", "251 - 500", "501 - 1000", "1000 - 999999"],
  }
  
}

export const categoryLabelColor = {
  "marketing": {
    textColor: "#FFB836",
    bgColor: "#EB85331A",
  },
  "design": {
    textColor: "#56CDAD",
    bgColor: "#56CDAD1A",
  },
  "business": {
    textColor: "#4640DE",
    bgColor: "#4640DE1A",
  },
  "technology": {
    textColor: "#FF6550",
    bgColor: "#FF65501A",
  },
  "blockchain": {
    textColor: "#FFB836",
    bgColor: "#EB85331A",
  },
  "payment gateway": {
    textColor: "#4640DE",
    bgColor: "#4640DE1A",
  },
}

export const industryLabelColor = {
  "blockchain": {
    textColor: "#FFB836",
    bgColor: "#EB85331A",
  },
  "payment gateway": {
    textColor: "#4640DE",
    bgColor: "#4640DE1A",
  },
  "business service": {
    textColor: "#56CDAD",
    bgColor: "#56CDAD1A",
  },
  "cloud": {
    textColor: "#26A4FF",
    bgColor: "#26A4FF1A",
  },
  "media": {
    textColor: "#FF6550",
    bgColor: "#FF65501A",
  }
}

export const aboutLinks = [
  {
    name: "Companies",
    url: "#"
  },
  {
    name: "Pricing",
    url: "#"
  },
  {
    name: "Terms",
    url: "#"
  },
  {
    name: "Advice",
    url: "#"
  },
  {
    name: "Privacy Policy",
    url: "#"
  },
];

export const resourceLinks = [
  {
    name: "Help Docs",
    url: "#"
  },
  {
    name: "Guide",
    url: "#"
  },
  {
    name: "Updates",
    url: "#"
  },
  {
    name: "Contact Us",
    url: "#"
  },
]

export const socialLinks = [
  {
    name: "Facebook",
    icon: "ri-facebook-fill",
    url: "#"
  },
  {
    name: "Instagram",
    icon: "ri-instagram-line",
    url: "#"
  },
  {
    name: "Dribbble",
    icon: "ri-dribbble-line",
    url: "#"
  },
  {
    name: "LinkedIn",
    icon: "ri-linkedin-fill",
    url: "#"
  },
  {
    name: "Twitter",
    icon: "ri-twitter-fill",
    url: "#"
  },
]

export const companyList = [
  {
    companyID: 1,
    name: "Nomad",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://nomad.com",
    companyProfile: "Nomad is a software platform for starting and running internet businesses. Millions of businesses rely on Nomad’s software tools to accept payments, expand globally, and manage their businesses online. Nomad has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Nomad is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.",
    profilePic: nomadLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "England", "Japan", "Australia", "China"],
    industry: ["business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/nomad",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/NomadHQ",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/nomad",
      },
    ],
    employeeCount: 4000,
    categories:["marketing", "design"],
    stack:["HTML 5","CSS 3", "JavaScript", "Ruby", "Framer"],
    team:[
      {
        name: "Célestin Gardinier",
        avatar: "",
        role: "CEO & Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Reynaud Colbert",
        avatar: "",
        role: "Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Arienne Lyon",
        avatar: "",
        role: "Managing Director",
        social: ["instagram", "linkedIn"],
      },
    ],
    openJobs:[{jobID:9}],
    perks:[],
  },
  {
    companyID: 2,
    name: "Stripe",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://stripe.com",
    companyProfile: "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.",
    profilePic: stripeLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "England", "Japan", "Australia", "China"],
    industry: ["payment gateway"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/nomad",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/NomadHQ",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/nomad",
      },
    ],
    employeeCount: 300,
    categories:["marketing", "design"],
    stack:["HTML 5","CSS 3", "JavaScript", "Ruby", "Framer"],
    team:[
      {
        name: "Célestin Gardinier",
        avatar: "",
        role: "CEO & Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Reynaud Colbert",
        avatar: "",
        role: "Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Arienne Lyon",
        avatar: "",
        role: "Managing Director",
        social: ["instagram", "linkedIn"],
      },
      
    ],
    openJobs:[{jobID:9}],
    perks:[],
  },
  {
    companyID: 3,
    name: "Square",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://square.com",
    companyProfile: "Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.",
    profilePic: squareLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "England", "Japan", "Australia", "China"],
    industry: ["business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/nomad",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/NomadHQ",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/nomad",
      },
    ],
    employeeCount: 4000,
    categories:["marketing", "design"],
    stack:["HTML 5","CSS 3", "JavaScript", "Ruby", "Framer"],
    team:[
      {
        name: "Célestin Gardinier",
        avatar: "",
        role: "CEO & Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Reynaud Colbert",
        avatar: "",
        role: "Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Arienne Lyon",
        avatar: "",
        role: "Managing Director",
        social: ["instagram", "linkedIn"],
      },
    ],
    openJobs:[{jobID:9}],
    perks:[],
  },
  {
    companyID: 4,
    name: "Revolut",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://revolut.com",
    companyProfile: "Revolut is a financial technology company that offers a range of digital banking services and financial products. Founded in 2015, the London-based company has gained widespread popularity for its innovative approach to banking, providing users with a mobile app that allows them to manage their finances, make international money transfers at competitive exchange rates, and spend money abroad with minimal fees. In addition to traditional banking features, Revolut also offers cryptocurrency trading, budgeting tools, and a variety of other financial services. The platform has rapidly expanded its user base globally and is known for its user-friendly interface and commitment to disrupting traditional banking norms.",
    profilePic: revolutLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "England", "Japan", "Australia", "China"],
    industry: ["payment gateway"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/nomad",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/NomadHQ",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/nomad",
      },
    ],
    employeeCount: 4000,
    categories:["marketing", "design"],
    stack:["HTML 5","CSS 3", "JavaScript", "Ruby", "Framer"],
    team:[
      {
        name: "Célestin Gardinier",
        avatar: "",
        role: "CEO & Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Reynaud Colbert",
        avatar: "",
        role: "Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Arienne Lyon",
        avatar: "",
        role: "Managing Director",
        social: ["instagram", "linkedIn"],
      },
    ],
    openJobs:[{jobID:9}],
    perks:[],
  },
  {
    companyID: 5,
    name: "Dropbox",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://dropbox.com",
    companyProfile: "Dropbox is a cloud-based file hosting and collaboration platform that enables users to store and share files seamlessly across devices. Founded in 2007, Dropbox simplifies file management by allowing users to upload documents, photos, and other content to the cloud, making them accessible from anywhere with an internet connection. The platform also facilitates easy collaboration through shared folders, file syncing, and collaboration tools, making it a popular choice for individuals and businesses alike. Dropbox's user-friendly interface and emphasis on synchronization and collaboration have contributed to its widespread adoption as a reliable and convenient solution for file storage and sharing in both personal and professional settings.",
    profilePic: dropboxLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "England", "Japan", "Australia", "China"],
    industry: ["cloud"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/nomad",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/NomadHQ",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/nomad",
      },
    ],
    employeeCount: 4000,
    categories:["marketing", "design"],
    stack:["HTML 5","CSS 3", "JavaScript", "Ruby", "Framer"],
    team:[
      {
        name: "Célestin Gardinier",
        avatar: "",
        role: "CEO & Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Reynaud Colbert",
        avatar: "",
        role: "Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Arienne Lyon",
        avatar: "",
        role: "Managing Director",
        social: ["instagram", "linkedIn"],
      },
    ],
    openJobs:[{jobID:9}],
    perks:[],
  },
  {
    companyID: 6,
    name: "Pitch",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://pitch.com",
    companyProfile: "Pitch is a collaborative presentation software designed to enhance the process of creating, sharing, and collaborating on presentations. Launched in 2020, the Berlin-based company aims to redefine the way teams work on presentations, offering a platform that combines real-time collaboration, beautiful design, and seamless communication. Pitch allows users to create visually appealing and engaging presentations with a variety of templates and design elements. Its emphasis on collaboration enables team members to work together on presentations in real-time, providing a more dynamic and efficient approach to the creation and refinement of slide decks.",
    profilePic: pitchLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "England", "Japan", "Australia", "China"],
    industry: ["media"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/nomad",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/NomadHQ",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/nomad",
      },
    ],
    employeeCount: 4000,
    categories:["marketing", "design"],
    stack:["HTML 5","CSS 3", "JavaScript", "Ruby", "Framer"],
    team:[
      {
        name: "Célestin Gardinier",
        avatar: "",
        role: "CEO & Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Reynaud Colbert",
        avatar: "",
        role: "Co-Founder",
        social: ["instagram", "linkedIn"],
      },
      {
        name: "Arienne Lyon",
        avatar: "",
        role: "Managing Director",
        social: ["instagram", "linkedIn"],
      },
    ],
    openJobs:[{jobID:9}],
    perks:[],
  },
]

export const jobList = [
  {
    jobID: 1,
    companyName: "Revolut",
    companyLogo: revolutLogo,
    location: "Madrid, Spain",
    position: "Email Marketing",
    level:"entry level",
    type:"full time",
    description:"We are seeking a highly motivated and experienced Email Marketing Specialist to join our dynamic marketing team. As an Email Marketing Specialist, you will be responsible for developing and executing effective email marketing campaigns to engage our target audience, drive customer retention, and contribute to overall business growth. The ideal candidate possesses a strong understanding of email marketing best practices, data analysis, and customer segmentation.",
    categories: ["marketing", "design"],
    applied: 3,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 2,
    companyName: "Dropbox",
    companyLogo: dropboxLogo,
    location: "San Fransisco, US",
    position: "Brand Designer",
    level:"mid level",
    type:"full time",
    description:"We are looking for a talented and creative Brand Designer to join our innovative team. As a Brand Designer, you will play a crucial role in shaping and maintaining the visual identity of our brand across various platforms. The ideal candidate has a strong portfolio showcasing expertise in graphic design, brand development, and a keen understanding of visual storytelling.",
    categories: ["design", "business"],
    applied: 6,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 3,
    companyName: "Pitch",
    companyLogo: pitchLogo,
    location: "Berlin, Germany",
    position: "Email Marketing",
    level:"mid level",
    type:"full time",
    description:"Pitch is looking for a highly motivated and experienced Email Marketing Specialist to join their dynamic marketing team. As an Email Marketing Specialist, you will be responsible for developing and executing effective email marketing campaigns to engage potential target audience, drive customer retention, and contribute to overall business growth",
    categories: ["marketing"],
    applied: 3,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 4,
    companyName: "Blinkist",
    companyLogo: blinkistLogo,
    location: "Granada, Spain",
    position: "Visual Designer",
    level:"entry level",
    type:"remote",
    description:"We are searching for a talented Visual Designer to join our creative team. As a Visual Designer, you will be responsible for translating conceptual ideas into visually appealing and effective design solutions. The ideal candidate possesses a strong understanding of design principles, a keen eye for detail, and the ability to create engaging visuals across various mediums.",
    categories: ["design"],
    applied: 6,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 5,
    companyName: "ClassPass",
    companyLogo: classPassLogo,
    location: "Manchester, UK",
    position: "Product Designer",
    level:"mid level",
    type:"part time",
    description:"We are seeking a highly skilled and creative Product Designer to join our innovative product development team. As a Product Designer, you will play a pivotal role in crafting user-centric and visually compelling experiences for our digital products. The ideal candidate possesses a deep understanding of user-centered design, has a keen eye for aesthetics, and can seamlessly blend form and function.",
    categories: ["marketing", "design"],
    applied: 2,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 6,
    companyName: "Canva",
    companyLogo: canvaLogo,
    location: "Ontario, Canada",
    position: "Lead Designer",
    level:"senior level",
    type:"full time",
    description:"We are seeking a dynamic and experienced Lead Designer to lead our design team in creating innovative and visually stunning solutions. As a Lead Designer, you will play a key role in setting the design direction, mentoring team members, and ensuring the delivery of high-quality, cohesive design across various projects. The ideal candidate has a proven track record of leadership, a deep understanding of design principles, and the ability to inspire and guide a creative team.",
    categories: ["design", "business"],
    applied: 4,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 7,
    companyName: "GoDaddy",
    companyLogo: goDaddyLogo,
    location: "Marseille, France",
    position: "Brand Strategist",
    level:"senior level",
    type:"full time",
    description:"We are seeking a strategic and creative Brand Strategist to join our team and contribute to the development and enhancement of our brand identity. As a Brand Strategist, you will play a crucial role in shaping the overall brand narrative, positioning, and messaging to resonate with our target audience. The ideal candidate has a proven track record in brand strategy, a deep understanding of market trends, and the ability to translate business goals into compelling brand stories.",
    categories: ["marketing"],
    applied: 2,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 8,
    companyName: "Twitter",
    companyLogo: twitterLogo,
    location: "San Diego, US",
    position: "Data Analyst",
    level:"entry level",
    type:"remote",
    description:"We are seeking a detail-oriented and analytical Data Analyst to join our team. As a Data Analyst, you will play a crucial role in collecting, analyzing, and interpreting data to inform business decisions and strategies. The ideal candidate has a strong proficiency in data analysis tools, a keen eye for patterns and trends, and the ability to communicate insights effectively.",
    categories: ["technology"],
    applied: 6,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 9,
    companyName: "Nomad",
    companyLogo: nomadLogo,
    location: "Paris, France",
    position: "Social Media Assistant",
    level:"entry level",
    type:"full time",
    description:"We are looking for a creative and enthusiastic Social Media Assistant to join our marketing team. As a Social Media Assistant, you will play a key role in implementing and managing social media strategies to enhance brand visibility, engage audiences, and drive overall marketing objectives. The ideal candidate is a social media savvy individual with a passion for creating compelling content and fostering meaningful online communities.",
    categories: ["marketing", "design"],
    applied: 5,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 10,
    companyName: "Netlify",
    companyLogo: netlifyLogo,
    location: "Paris, France",
    position: "Social Media Assistant",
    level:"entry level",
    type:"full time",
    description:"We are looking for a creative and enthusiastic Social Media Assistant to join our marketing team. As a Social Media Assistant, you will play a key role in implementing and managing social media strategies to enhance brand visibility, engage audiences, and drive overall marketing objectives. The ideal candidate is a social media savvy individual with a passion for creating compelling content and fostering meaningful online communities.",
    categories: ["marketing", "design"],
    applied: 3,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    companyName: "Dropbox",
    companyLogo: dropboxLogo,
    location: "San Fransisco, USA",
    position: "Brand Designer",
    level:"senior level",
    type:"full time",
    description:"We are looking for a talented and creative Brand Designer to join our innovative team. As a Brand Designer, you will play a crucial role in shaping and maintaining the visual identity of our brand across various platforms. The ideal candidate has a strong portfolio showcasing expertise in graphic design, brand development, and a keen understanding of visual storytelling.",
    categories: ["marketing", "design"],
    applied: 0,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 11,
    companyName: "Maze",
    companyLogo: mazeLogo,
    location: "San Fransisco, USA",
    position: "Brand Designer",
    level:"mid level",
    type:"full time",
    description:"We are looking for a talented and creative Brand Designer to join our innovative team. As a Brand Designer, you will play a crucial role in shaping and maintaining the visual identity of our brand across various platforms. The ideal candidate has a strong portfolio showcasing expertise in graphic design, brand development, and a keen understanding of visual storytelling.",
    categories: ["marketing", "design"],
    applied: 2,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 12,
    companyName: "Terraform",
    companyLogo: terraformLogo,
    location: "Hamburg, Germany",
    position: "Interactive Developer",
    level:"mid level",
    type:"contract",
    description:"We are seeking a highly skilled and creative Interactive Developer to join our dynamic team. As an Interactive Developer, you will play a key role in designing and implementing engaging interactive experiences across various digital platforms. The ideal candidate is passionate about cutting-edge web technologies, user interaction, and creating immersive digital experiences.",
    categories: ["marketing", "design"],
    applied: 3,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 13,
    companyName: "Udacity",
    companyLogo: udacityLogo,
    location: "Hamburg, Germany",
    position: "Interactive Developer",
    level:"senior level",
    type:"full time",
    description:"We are seeking a highly skilled and creative Interactive Developer to join our dynamic team. As an Interactive Developer, you will play a key role in designing and implementing engaging interactive experiences across various digital platforms. The ideal candidate is passionate about cutting-edge web technologies, user interaction, and creating immersive digital experiences.",
    categories: ["marketing", "design"],
    applied: 4,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 14,
    companyName: "Packer",
    companyLogo: packerLogo,
    location: "Lucern, Switzerland",
    position: "HR Manager",
    level:"mid level",
    type:"full time",
    description:"We are looking for an experienced and strategic HR Manager to join our team and lead human resources initiatives that align with our company's goals and values. As the HR Manager, you will play a crucial role in fostering a positive work culture, managing talent acquisition, and implementing HR policies and programs. The ideal candidate has a strong background in human resources, excellent interpersonal skills, and the ability to drive HR strategies that support organizational success.",
    categories: ["marketing", "design"],
    applied: 5,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
  {
    jobID: 15,
    companyName: "Webflow",
    companyLogo: webflowLogo,
    location: "Lucern, Switzerland",
    position: "HR Manager",
    level:"entry level",
    type:"full time",
    description:"We are looking for an experienced and strategic HR Manager to join our team and lead human resources initiatives that align with our company's goals and values. As the HR Manager, you will play a crucial role in fostering a positive work culture, managing talent acquisition, and implementing HR policies and programs. The ideal candidate has a strong background in human resources, excellent interpersonal skills, and the ability to drive HR strategies that support organizational success.",
    categories: ["marketing", "design"],
    applied: 3,
    capacity: 10,
    jobPosted: "2023-09-15", // YYYY-MM-DD
    applyBefore: "2023-10-15",
    responsibilities: ["Community engagement to ensure that is supported and actively represented online","Focus on social media content development and publication","Marketing and strategy support","Stay on top of trends on social media platforms, and suggest content ideas to the team","Engage with online communities"],
    requiredSkills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
    softSkills: ["Fluent in English", "Project Management Skills", "Copy editing skills"],
  },
];