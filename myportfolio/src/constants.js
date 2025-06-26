// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
//import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
//import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
//import gsapLogo from './assets/tech_logo/gsap.png';
//import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
//import javaLogo from './assets/tech_logo/java.png';
//import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import RenderLogo from './assets/tech_logo/render.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
//import postgreLogo from './assets/tech_logo/postgre.png';
//import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
//import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      //{ name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      //{ name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      //{ name: 'GSAP', logo: gsapLogo },
      //{ name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      //{ name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      //{ name: 'Java', logo: javaLogo },
      //{ name: 'Python', logo: pythonLogo },
      //{ name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Render', logo: RenderLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2023 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "DSA Lead",
      company: "Coders and Developer Club",
      date: "July 2023 - March 2025",
      desc: "Helped and gave suggestions to junior about Competitive Programming. explained problems related to various concepts like array, string, stack,linked-list,queue,tree etc. .",
      skills: [
        "C",
        "C++",
        //"Competetive programming",
        "DSA",
        //"HTML",
        //"CSS",
        //"SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "NSS Member",
      company: "MMMUT",
      date: "September 2022 - Present",
      desc: "NSS team member for social work.",
      skills: [
        "Leadership and Team Management",
        "Event Planning and Coordination",
        "Public Speaking and Communication",
        "Social Awareness and Civic Responsibility",
        "Time and Task Management",
        //"Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bsaLogo,
      school: "Madan Mohan Malaviya University of Technology",
      date: "Sept 2022 - July 2026",
      grade: "7.05 CGPA",
      desc: " I'm a dedicated B.Tech 3rd year student pursuing Computer Science and Engineering at Madan Mohan Malaviya University of Technology, Gorakhpur.",
      degree: "Computer Science & Engineering - CSE",
    },
    /*{
      id: 1,
      img: bsaLogo,
      school: "BSA College, Mathura",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },*/
    {
      id: 2,
      img: vpsLogo,
      school: "G R Academy PO-Madhopur S.K.N",
      date: "Apr 2021 - March 2022",
      grade: "84%",
      desc: "I completed my class 12 education from G R Academy PO-Madhopur S.K.N, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "G R Academy PO-Madhopur S.K.N",
      date: "Apr 2019 - March 2020",
      grade: "83%",
      desc: "I completed my class 10 education from G R Academy PO-Madhopur S.K.N, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Job Portal",
      description:
        " A Job Portal is a web application that connects job seekers and employers, allowing users to search, apply, and post job listings. It's a great project to practice full-stack development, authentication, and database management.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/hariom40/JobPortal",
      webapp: "https://jobportal-9ymu.onrender.com/",
    },
    {
      id: 1,
      title: "Netflix Clone",
      description:
        "A Netflix Clone is a web application that replicates Netflix’s UI and functionality, often built using React.js, Node.js, Firebase, or TMDB API. It's a great project for learning frontend development, API integration, and authentication..",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/hariom40/netflixclone",
      webapp: "https://joyful-otter-c0f459.netlify.app",
    },
    {
      id: 2,
      title: "Iphone Calculator",
      description:
        "Hii Friends, I made a calculator look like iphone calculator using simple Programming language html , css and javascript.",
      image: movierecLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/hariom40/Iphone-calculator",
      webapp: "https://incomparable-salmiakki-896bc1.netlify.app/",
    },
    {
      id: 3,
      title: "Hospital Management Webapp",
      description:
        "A robust MERN-based system for hospitals. Features authentication & authorization, working with multiple json web tokens, dual frontends (user and admin), and scalable architecture. Explore and contribute! 🏥🚀",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation","HTML", "CSS", "JavaScript"],
      github: "https://github.com/hariom40/hospital-site",
      webapp: "https://hospitalmanagementfront.netlify.app",
    },
    {
      id: 4,
      title: "Twitter-Clone",
      description:
        "A full-stack social media app inspired by Twitter, built using React for the frontend and [your backend stack, e.g., Node.js/Express/Firebase]. Features include user authentication, tweet posting, likes, retweets, and a real-time feed.",
      image: taskremLogo,
      tags: ["JavaScript", "React JS", "Node.js", "HTML", "CSS"],
      github: "https://github.com/hariom40/twitter-clone",
      webapp: "https://twitter-clone-kohl-chi.vercel.app/",
    },
    {
      id: 5,
      title: "Currency-Converter",
      description:
        "A simple and responsive Currency Converter web application built with React that fetches real-time exchange rates using a public Currency Exchange API. The app allows users to convert between multiple currencies quickly and accurately..",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/hariom40/Currency-Converter",
      webapp: "https://prismatic-pika-2911d4.netlify.app/",
    },
    {
      id: 6,
      title: "Tour-blog",
      description:
        "A full-stack web application for booking high-end villas in scenic mountain and coastal regions. This project allows users to browse, book, and manage luxury villa rentals, while also enabling hosts to list and manage their premium properties.",
      image: cmLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/hariom40/tourblog",
      webapp: "https://tourblog-jqgy.vercel.app/",
    },
    {
      id: 7,
      title: "Event-management",
      description:
        "A King’s is a modern full-stack web application built to simplify and streamline the process of managing, organizing, and booking events. It provides a user-friendly platform for both organizers and attendees, enabling smooth event communication and coordination.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "CSS", "Vite","Axios","Nodejs"],
      github: "https://github.com/hariom40/event-manegement",
      webapp: "https://event-manegement-nu.vercel.app",
    },
    {
      id: 8,
      title: "Auction-platform",
      description:
        "An advanced web-based Auction Platform where users can list products, place bids, and compete in real-time to win items. Built with a modern tech stack to provide a seamless and responsive user experience for both buyers and sellers.",
      image: removebgLogo,
      tags: ["React JS", "Nodejs","Expressjs","Tailwindcss","JWT", "HTML", "CSS", "Javascript"],
      github: "https://github.com/hariom40/auction-platform",
      webapp: "https://peaceful-shortbread-cd7e1c.netlify.app",
    },
  ];  