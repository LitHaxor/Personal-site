import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { Experience, Project, Service } from "./type";
import { AiOutlineApi } from "react-icons/ai";
import { School } from "./type";

export const experices: Experience[] = [
  {
    Icon: FaServer,
    title: "Software Engineer",
    startedDate: "May 2020",
    endingDate: "Present",
    company: "Cookspace LTD",
    companyURL: "https://getchatout.com",
    stacks: [
      "react",
      "docker",
      "express",
      "mongoDB",
      "node",
      "nextjs",
      "nestjs",
    ],
    designation: "Backend",
    experiences: [""],
  },
];

export const services: Service[] = [
  {
    title: "Frontend Development",
    about: "Built complex frontend apps using React, Nextjs, Redux library.",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Developer",
    about:
      "Managing backend, database, APIs using ExpressJS and ASP.NET(learning)",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about:
      "Building fast scaleable API that serves everywhere using NEXTJS, Express ",
    Icon: AiOutlineApi,
  },
  {
    title: "API Development",
    about:
      "Building fast scaleable API that serves everywhere using NEXTJS, Express ",
    Icon: AiOutlineApi,
  },
];

export const schools: School[] = [
  {
    name: "American Internation University-Bangladesh",
    degree: "Bsc In CSE",
    graduation: "Classes of 2024",
  },
  {
    name: "Dr Mahbubur Rahman Mollah College",
    degree: "Science",
    graduation: "HSC 2019",
  },
  {
    name: "Motijheel Goverment Boys High School",
    degree: "Science",
    graduation: "SSC 2017",
  },
];

export const projects: Project[] = [
  {
    name: "CGPA Calculator BD",
    description: "This app used to calculate CGPA of universites in Bangladesh",
    image_path: "/img/cgpa_calc.png",
    deployed_url: "https://www.getcgpa.lithaxor.tech/",
    github_url: "https://github.com/LitHaxor/CGPA-Calculator-Bangladesh",
    categories: ["react"],
    key_techs: ["react", "chartJS", "Bootstrap"],
  },
  {
    name: "Cricket Tracker Beta",
    description:
      "Track realtime activiteis of cricket game. It was created to understand redux state",
    image_path: "/img/crcketTracker.png",
    deployed_url: "https://www.getcgpa.lithaxor.tech/",
    github_url: "https://github.com/LitHaxor/CricketTracker",
    categories: ["react"],
    key_techs: ["react", "redux", "Bootstrap"],
  },
  {
    name: "Chatout Backend",
    description:
      "Chatout is CRM app that connectes messenger and instagram chats, send delivery from the app using delivery api.",
    deployed_url: "https://getchatout.com",
    github_url: "",
    categories: ["node", "nestjs", "express"],
    image_path: "/img/chatoutWeb.png",
    key_techs: [
      "nodejs",
      "firebase",
      "jwt",
      "docker",
      "express",
      "aws",
      "websocket",
      "facebook API",
      "pathao API",
      "redex API",
    ],
  },
  {
    name: "Chatout Webshop",
    description:
      "Chatout webshop is like instagram shop but it connects with chatout public api like shopify and creates dynamically webshop from mobile inventory.",
    deployed_url: "https://getchatout.com/brandtest",
    github_url: "",
    categories: ["node", "nestjs", "react", "nextjs"],
    image_path: "/img/chatoutShop.png",
    key_techs: [
      "react",
      "firebase",
      "jwt",
      "docker",
      "express",
      "aws",
      "websocket",
      "facebook API",
      "pathao API",
      "redex API",
    ],
  },
  {
    name: "Seven Tech Ecommerce",
    description:
      "Seven tech is a electronic reseller at multiplan. This is a full stack project created using nextjs(react.js) and nestjs(express)",
    deployed_url: "https://seven-tech-chakra.vercel.app",
    github_url: "",
    categories: ["node", "nestjs", "react", "nextjs"],
    image_path: "/img/seventech.png",
    key_techs: [
      "react",
      "firebase",
      "jwt",
      "docker",
      "express",
      "aws",
      "websocket",
      "facebook API",
      "pathao API",
      "redex API",
    ],
  },
  {
    name: "Hisab Nikash",
    description: "Hisab nikash is a app that used to track CRM.",
    deployed_url: "https://getchatout.com/brandtest",
    github_url: "",
    categories: ["node", "nestjs", "react", "nextjs"],
    image_path: "/img/hisabNikash.png",
    key_techs: [
      "react",
      "firebase",
      "jwt",
      "docker",
      "express",
      "aws",
      "websocket",
      "facebook API",
      "pathao API",
      "redex API",
    ],
  },
];
