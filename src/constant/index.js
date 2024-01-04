import { designIcon, salesIcon, marketingIcon, financeIcon, techIcon, engineeringIcon, businessIcon, hrIcon, coffeeIcon, commuterIcon, developmentIcon, giveIcon, healthcareIcon, summitIcon, vacationIcon} from "../assets/icons";
import { blinkistLogo, canvaLogo, classPassLogo, clayLogo, coinbaseLogo, digitalOceanLogo, discordLogo, divvyLogo, dropboxLogo, foundation, goDaddyLogo, harvardLogo, komodoLogo, krakenLogo, mazeLogo, mediaMonksLogo, netlifyLogo, nomadLogo, nubankLogo, numbrsLogo, packerLogo, pentagramLogo, pitchLogo, prooffeedLogo, revolutLogo, robinhoodLogo, sanofiLogo, squareLogo, stakenetLogo, stripeLogo, terraformLogo, truebillLogo, twitterLogo, udacityLogo, universityOfTorontoLogo, webflowLogo, weTransferLogo, wolffOlinsLogo, zendLogo,} from '../assets/images/companies';
import { css3Logo,framerLogo,html5Logo,javaScriptLogo,mixpanelLogo,rubyLogo, } from "../assets/images/techImages";

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

export const techStack = {
  "HTML 5": {
    image: html5Logo
  },
  "CSS 3": {
    image: css3Logo
  },
  "JavaScript": {
    image: javaScriptLogo
  },
  "Ruby": {
    image: rubyLogo
  },
  "Mixpanel": {
    image: mixpanelLogo
  },
  "Framer": {
    image: framerLogo
  },
}

export const companyList = [
  {
    companyID: 1,
    name: "Nomad",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://nomad.com",
    companyProfile: "Nomad is a software platform for starting and running internet businesses. Millions of businesses rely on Nomad’s software tools to accept payments, expand globally, and manage their businesses online. Nomad has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Nomad is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.",
    profilePic: nomadLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Australia", "China"],
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
    stack:["HTML 5", "CSS 3", "JavaScript", "Ruby", "Mixpanel", "Framer"],
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
  // {
  //   companyID: 2,
  //   name: "Stripe",
  //   founded:"2011-07-31", // YYYY-MM-DD
  //   companyLink:"https://stripe.com",
  //   companyProfile: "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.",
  //   profilePic: stripeLogo,
  //   companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
  //   officeLocations: ["United States", "Japan", "Australia", "China"],
  //   industry: ["payment gateway"],
  //   contact:[
  //     {
  //       name: "twitter",
  //       contactUrl: "twitter.com/stripe",
  //     },
  //     {
  //       name: "facebook",
  //       contactUrl: "facebook.com/stripe",
  //     },
  //     {
  //       name: "linkedIn",
  //       contactUrl: "linkedin.com/company/stripe",
  //     },
  //   ],
  //   employeeCount: 300,
  //   categories:["marketing", "design"],
  //   stack:["HTML 5","CSS 3", "JavaScript", "Ruby", "Framer"],
  //   team:[
  //     {
  //       name: "Célestin Gardinier",
  //       avatar: "",
  //       role: "CEO & Co-Founder",
  //       social: ["instagram", "linkedIn"],
  //     },
  //     {
  //       name: "Reynaud Colbert",
  //       avatar: "",
  //       role: "Co-Founder",
  //       social: ["instagram", "linkedIn"],
  //     },
  //     {
  //       name: "Arienne Lyon",
  //       avatar: "",
  //       role: "Managing Director",
  //       social: ["instagram", "linkedIn"],
  //     },
      
  //   ],
  //   openJobs:[{jobID:9}],
  //   perks:[],
  // },
  {
    companyID: 3,
    name: "Square",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://square.com",
    companyProfile: "Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.",
    profilePic: squareLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/square",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/square",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/square",
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
    openJobs:[],
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
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["payment gateway"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/revolut",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/revolut",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/revolut",
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
    openJobs:[{jobID:1}],
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
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["cloud"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/dropbox",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/dropbox",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/dropbox",
      },
    ],
    employeeCount: 6000,
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
    openJobs:[{jobID:2},{jobID:16}],
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
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["media"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/pitch",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/pitch",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/pitch",
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
    openJobs:[{jobID:3}],
    perks:[],
  },
  {
    companyID: 7,
    name: "Blinkist",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://blinkist.com",
    companyProfile: "Blinkist is a digital platform that offers condensed summaries of non-fiction books, providing users with key insights and takeaways in a format that can be consumed quickly. Launched in 2012, the Berlin-based service aims to cater to individuals seeking to acquire knowledge from a variety of topics without investing the time required to read entire books. Blinkist's library includes summaries, or 'Blinks,' of best-selling non-fiction works, spanning genres such as self-help, business, and technology. The platform is designed to make learning more accessible, allowing users to grasp the main ideas and concepts of a book within a short reading or listening session. Subscribers can choose between reading or listening to the summaries, making it a popular choice for those looking to maximize learning in a time-efficient manner.",
    profilePic: blinkistLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/blinkist",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/blinkist",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/blinkist",
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
    openJobs:[{jobID:4}],
    perks:[],
  },
  {
    companyID: 8,
    name: "ClassPass",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://classpass.com",
    companyProfile: "ClassPass is a subscription-based fitness platform that offers users access to a wide variety of fitness classes and studios. Founded in 2013, this service allows members to explore and attend fitness classes in their local area, ranging from traditional gym workouts and yoga sessions to unique and specialized classes like spinning, pilates, and more. Users can book classes through the ClassPass app, providing flexibility and variety in their fitness routines. ClassPass operates on a credit system, with members receiving a certain number of credits per month that they can use to book classes. The platform has gained popularity for its convenience, enabling users to discover and participate in diverse fitness activities without being tied to a single gym membership.",
    profilePic: classPassLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/classpass",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/classpass",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/classpass",
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
    openJobs:[{jobID:5}],
    perks:[],
  },
  {
    companyID: 9,
    name: "Canva",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://canva.com",
    companyProfile: "Canva is a web-based graphic design platform that enables users to create a wide range of visual content, including presentations, social media graphics, posters, and more, without the need for advanced design skills. Founded in 2012, the platform offers a user-friendly interface with drag-and-drop functionality, making it accessible to individuals and businesses alike. Canva provides a vast library of templates, images, icons, and fonts, allowing users to customize and design professional-looking materials. With both free and premium subscription options, Canva has become a popular tool for anyone looking to produce visually appealing and engaging content for various purposes, from marketing materials to educational resources.",
    profilePic: canvaLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["media", "business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/canva",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/canva",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/canva",
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
    openJobs:[{jobID:6}],
    perks:[],
  },
  {
    companyID: 10,
    name: "GoDaddy",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://godaddy.com",
    companyProfile: "GoDaddy is a well-known American domain registrar and web hosting company. Founded in 1997, GoDaddy has become one of the largest domain registration and hosting providers globally. The company offers a range of services, including domain registration, website hosting, website building tools, and online marketing solutions for individuals and businesses. GoDaddy is recognized for its user-friendly platform that simplifies the process of acquiring domains, setting up websites, and managing online presence. Additionally, the company provides various tools and services to help users establish and grow their online ventures.",
    profilePic: goDaddyLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/godaddy",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/godaddy",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/godaddy",
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
    openJobs:[{jobID:7}],
    perks:[],
  },
  {
    companyID: 11,
    name: "Twitter",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://twitter.com",
    companyProfile: "Twitter is a prominent social media platform founded in 2006, dedicated to fostering real-time conversations and information sharing globally. With millions of active users, our platform enables individuals, businesses, and organizations to communicate through short-form messages known as 'tweets.' Users can share text, photos, videos, and links, engaging in public discussions and following topics of interest through hashtags. Twitter has become a vital channel for breaking news, cultural trends, and social movements, offering a dynamic space for diverse voices to connect and express themselves. As a company, we are committed to facilitating open dialogue, providing a space for users to express thoughts, connect with others, and stay informed about the latest events and trends.",
    profilePic: twitterLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["media"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/twitter",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/twitter",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/twitter",
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
    openJobs:[{jobID:8}],
    perks:[],
  },
  {
    companyID: 12,
    name: "Netlify",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://netlify.com",
    companyProfile: "Netlify is a leading web development and hosting platform that empowers companies and developers to build and deploy modern web applications with ease. Since our founding in 2014, we have been committed to streamlining the web development process by offering an all-in-one platform. Developers can deploy websites directly from their Git repositories, taking advantage of features such as continuous integration, serverless functions, and global content delivery. Our platform is designed to enhance collaboration and speed up development workflows, providing a scalable and efficient solution for projects of all sizes. With a focus on simplicity and innovation, Netlify supports the latest web technologies, making it a preferred choice for those seeking a developer-friendly and cutting-edge solution.",
    profilePic: netlifyLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/netlify",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/netlify",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/netlify",
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
    openJobs:[{jobID:10}],
    perks:[],
  },
  {
    companyID: 13,
    name: "Maze",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://maze.com",
    companyProfile: "Maze is a user testing and usability testing platform that facilitates the design iteration process for digital products. Since its establishment, Maze has been dedicated to helping product teams create better user experiences by offering tools for prototyping, testing, and analyzing user interactions. By leveraging Maze, designers and product managers can turn their designs into interactive prototypes and conduct usability tests with real users. The platform generates valuable insights and analytics, allowing teams to make data-driven decisions and optimize their designs efficiently. Maze aims to streamline the user testing process, ultimately improving the overall user experience of digital products.",
    profilePic: mazeLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/maze",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/maze",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/maze",
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
    openJobs:[{jobID:11}],
    perks:[],
  },
  {
    companyID: 14,
    name: "Terraform",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://terraform.com",
    companyProfile: "Terraform is an open-source infrastructure as code (IaC) tool developed by HashiCorp. It serves as a key component in modern cloud and infrastructure management, enabling users to define and provision infrastructure resources in a declarative configuration language. Terraform supports a wide range of cloud providers, including AWS, Azure, Google Cloud, and more, allowing for a consistent and scalable approach to infrastructure provisioning. By defining infrastructure as code, Terraform provides a collaborative and version-controlled methodology, automating the deployment and management of complex infrastructure setups. Its flexibility, ease of use, and ability to work with multi-cloud environments make Terraform a popular choice among DevOps professionals and organizations embracing cloud technologies.",
    profilePic: terraformLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["cloud", "business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/terraform",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/terraform",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/terraform",
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
    openJobs:[{jobID:12}],
    perks:[],
  },
  {
    companyID: 15,
    name: "Udacity",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://udacity.com",
    companyProfile: "Udacity is a global online education platform focused on providing industry-relevant, technology-driven education. Established in 2012, Udacity collaborates with leading tech companies to offer nanodegree programs and courses in fields such as data science, artificial intelligence, programming, and digital marketing. The platform's unique approach includes project-based learning, mentorship, and real-world applications, designed to equip learners with practical skills and prepare them for careers in rapidly evolving industries. Udacity's emphasis on hands-on experience and collaboration with industry professionals makes it a popular choice for individuals seeking to advance their careers in technology and other high-demand fields.",
    profilePic: udacityLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/udacity",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/udacity",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/udacity",
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
    openJobs:[{jobID:13}],
    perks:[],
  },
  {
    companyID: 16,
    name: "Packer",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://packer.com",
    companyProfile: "Packer is an open-source tool developed by HashiCorp that automates the creation of identical machine images for multiple platforms from a single source configuration. Released in 2013, Packer allows developers and operations teams to define machine images as code, providing a consistent and reproducible process for creating virtual machine and container images. Supporting various providers such as AWS, Azure, Docker, and more, Packer helps streamline the image-building process, ensuring that development, testing, and production environments are aligned. By automating the image creation process, Packer enhances infrastructure as code (IaC) practices, enabling organizations to efficiently manage and deploy standardized machine images across diverse cloud and on-premises environments.",
    profilePic: packerLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["media","business service"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/packer",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/packer",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/packer",
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
    openJobs:[{jobID:14}],
    perks:[],
  },
  {
    companyID: 17,
    name: "Webflow",
    founded:"2011-07-31", // YYYY-MM-DD
    companyLink:"https://packer.com",
    companyProfile: "Webflow, founded in 2013, is a web design and development platform that empowers users to create responsive, visually stunning websites without the need for coding expertise. Catering to both designers and developers, Webflow combines a robust visual editor with powerful design and hosting capabilities. Users can build custom websites, e-commerce stores, and landing pages using a drag-and-drop interface, while also having the flexibility to dive into the underlying code for more advanced customization. With features like CMS (Content Management System) functionality and seamless integrations, Webflow streamlines the web development process, offering a comprehensive solution for those seeking to design and launch professional websites efficiently.",
    profilePic: webflowLogo,
    companyImages: ["stripe-comany-image-1.jpg","stripe-comany-image-2.jpg","stripe-comany-image-3.jpg","stripe-comany-image-4.jpg"],
    officeLocations: ["United States", "Japan", "Australia", "China"],
    industry: ["business service","media"],
    contact:[
      {
        name: "twitter",
        contactUrl: "twitter.com/webflow",
      },
      {
        name: "facebook",
        contactUrl: "facebook.com/webflow",
      },
      {
        name: "linkedIn",
        contactUrl: "linkedin.com/company/webflow",
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
    openJobs:[{jobID:15}],
    perks:[],
  },
]

export const jobList = [
  {
    jobID: 1,
    companyID: 4,
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
    companyID: 5,
    companyName: "Dropbox",
    companyLogo: dropboxLogo,
    location: "San Fransisco, United State",
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
    companyID: 6,
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
    companyID: 7,
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
    companyID: 8,
    companyName: "ClassPass",
    companyLogo: classPassLogo,
    location: "Manchester, United Kingdom",
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
    companyID: 9,
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
    companyID: 10,
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
    companyID: 11,
    companyName: "Twitter",
    companyLogo: twitterLogo,
    location: "San Diego, United State",
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
    companyID: 1,
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
    companyID: 12,
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
    jobID: 11,
    companyID: 13,
    companyName: "Maze",
    companyLogo: mazeLogo,
    location: "San Fransisco, United States",
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
    companyID: 14,
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
    companyID: 15,
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
    companyID: 16,
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
    companyID: 17,
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
  {
    jobID: 16,
    companyID: 5,
    companyName: "Dropbox",
    companyLogo: dropboxLogo,
    location: "San Fransisco, United States",
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
];