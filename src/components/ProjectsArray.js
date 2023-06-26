const ProjectsArray = [
  {
    image_path: "/images/projects/lto-network.jpg",
    thumbnail_path: "/images/projects/thumbnails/lto-network.jpg",
    tags: ["MongoDB, Express.js, React.js, Node.js"],
    title: "LTO Network Homepage",
    description:
      "LTO Network is one of the largest blockchain technology companies in Europe. In conjunction with JBox Creative, the new homepage for their website, ltonetwork.com, was created using a React.js template, with custom components tailored specifically to the client.",
    projectUrl: "https://ltonetwork.com",
  },
  {
    image_path: "/images/projects/urban-area-info-finder.jpg",
    thumbnail_path: "/images/projects/thumbnails/urban-area-info-finder.jpg",
    tags: ["JavaScript, Google Maps API, Teleport API"],
    title: "Urban Area Info Finder",
    description:
      "This project uses the Google Maps API, React.js, Chart.js API, and Teleport API to show the user an interactive map of the world, revealing statistics when clicking on a city. On page load, Teleport API is called for a list of all cities in its database. For each set of city coordinates returned, a marker is created on the Google Maps map object with an onclick function. When a marker is clicked, a GET request to the Teleport API is triggered, returning and graphing city statistics based on the user's selected preferences.",
    projectUrl: "https://explore-cities.vercel.app/",
    githubUrl: "https://github.com/wamidgette/explore-cities",
  },
  {
    image_path: "/images/projects/gas.jpg",
    thumbnail_path: "/images/projects/thumbnails/gas.jpg",
    tags: ["google apps scripts"],
    title: "Google/NetSuite ERP Integrations",
    description: `I have developed various professional Google Apps Script (GAS) projects, integrating ERP data with Google Drive and automating tasks like ERP data synchronization with Google Sheets, updating Looker Studio dashboards, and mass-generating company PDF documents. These projects use NetSuite's OAuth2.0 authentication and Crypto.js library for encryption. In one project, I synced "unscriptable" NetSuite data with Google Sheets using a NetSuite RESTlet (custom webhook) and GAS script workaround. Another project involved generating PDFs from a Google Doc template using NetSuite ERP records. Old PDFs are archived and NetSuite records are upadated with new PDF URLs through the REST API.`,
    githubUrl: "https://github.com/wamidgette/google-apps-scripts",
  },
  {
    image_path: "/images/projects/word-press.jpg",
    thumbnail_path: "/images/projects/thumbnails/word-press.jpg",
    tags: ["MongoDB, Express.js, React.js, Node.js"],
    title: "Custom WordPress API for Enterprise-Level Company",
    description:
      "Custom API function for property rental company. Client requested a way to automate changes to their website's list of properties daily. Worked with client's property management company to create API endpoint that receives JSON payloads containing all property data on a daily schedule, and parses it into the client's property object data structure in WordPress.",
  },
  {
    image_path: "/images/projects/daredevil-dave.jpg",
    thumbnail_path: "/images/projects/thumbnails/daredevil-dave.jpg",
    tags: ["CSS, JavaScript"],
    title: "Daredevil Dave",
    description:
      "Shoot Daredevil Dave out of the cannon and through the hoop with the spacebar. This game uses CSS animations triggered by JavaScript event listeners and features a score tracker and countdown.",
    projectUrl: "https://wamidgette.github.io/daredevil-dave/",
    githubUrl: "https://github.com/wamidgette/DaredevilDave",
  },
  {
    image_path: "/images/projects/nodejs.jpg",
    thumbnail_path: "/images/projects/thumbnails/nodejs.jpg",
    tags: ["Node.js, Express.js"],
    title: "Node.js API Coding Challenge",
    description:
      "This is a coding challenge I completed using Node and Express. The purpose was to create a queryable API that called upon an external API and rearranged the data returned based on the queries given by the user. Caching is utilized to improve performance.",
    githubUrl: "https://github.com/wamidgette/nodeApiCodingChallenge",
  },
  {
    image_path: "/images/projects/motorcycle-trips.jpg",
    thumbnail_path: "/images/projects/thumbnails/motorcycle-trips.jpg",
    tags: ["MongoDB, Express.js, React.js, Node.js"],
    title: "Motorcycle Trips React App",
    description:
      "This is a full-stack node.js application, and is a work in progress. Motorcycle riders can browse through and sign up for trips with other riders. Admin users can create, update and delete trips, riders, events as they choose. Express.js used to interact with MongoDB database. React.js makes requests to API endpoints on Node.js server to render data.",
    githubUrl: "https://github.com/wamidgette/MotorcycleRidersMERNApp",
  },
];

export default ProjectsArray;
