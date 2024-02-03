import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import postman from "../public/postman.svg"
import coinbase from "../public/cb.png"
import gw from "../public/gw.jpeg"
import dorak from "../public/dorak.jpg"
import tnc from "../public/tnc.png"
import ct from "../public/cleartrip.jpg"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech IT",
    location: "Sri Krishna College of Technology, Coimbatore",
    description:
      "IT engineer graduate with a passion for innovation and problem-solving. Ready to make a mark in the tech world!",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Product Engineer Intern",
    location: "Codingmart Technologies, Coimbatore",
    description:
      "I Worked and Trained as a full stack developer for 1 years in various different technologies",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Product Engineer",
    location: "Codingmart Technologies, Coimbatore",
    description:
      "I'm now a full-stack developer working as a full Time. My stack includes React, Next.js, Node js, TypeScript, Tailwind, Prisma, MongoDB, Ruby and Ruby on Rails",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Coinbase Clone",
    description:
      "Coinbase clone on 3rdweb: Decentralized, smart contracts, blockchain, user-friendly finance.",
    tags: ["React", "Next.js", "Third Web", "Styled Components", "Progressive Web App (PWA)", "Metamask"],
    imageUrl: coinbase,
  },
  {
    title: "Ecommerce Rest Api",
    description:
      "Elevate your eCommerce game with our sleek REST API, ensuring user-friendly interactions and robust security for ultimate client satisfaction.",
    tags: ["Node Js", "Express Js", "Redis", "Mongo DB", "Postman"],
    imageUrl: postman,
  },
  {
    title: "WhatsApp 2.0",
    description:
      "WhatsApp 2.0: Unify Gmail and messaging for a seamless, secure, and efficient user experience.",
    tags: ["React", "Next.js", "Styled Components", "Material UI", "Firebase"],
    imageUrl: gw,
  },
] as const;

export const personalProjectsData = [
  {
    title: "Dorak Tours",
    description:
      "Dorak: Crafting exceptional experiences in travel and tourism.",
    tags: ["React", "Next.js", "Bootrap", "Node","Fastify", "MySql", "Elastic Search", "Azure"],
    imageUrl: dorak,
  },
  {
    title: "Cleartrip",
    description:
      "Cleartrip Rails Developer: Streamlining travel experiences for effortless and efficient online management.",
    tags: ["Ruby", "Ruby on Rails", "Redis", "PWA", "jquery"],
    imageUrl: ct,
  },
  {
    title: "Tailor and Circus",
    description:
      "Clothing E-commerce Software Developer: Engineered seamless solutions for a stylish online shopping experience.",
    tags: ["Ruby", "Ruby on Rails", "Redis", "PWA", "jquery", "MySql", "Sidekiq", "AWS"],
    imageUrl: tnc,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootrap",
  "Styled Components",
  "Prisma",
  "MongoDB",
  "Redux",
  // "GraphQL",
  // "Apollo",
  "Express",
  "MySql",
  "Framer Motion",
] as const;
