import { FunctionComponent } from "react";
import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Experience {
  Icon: IconType;
  title: string;
  startedDate: string;
  endingDate: string | "present";
  designation: string;
  company: string;
  companyURL: string;
  experiences: string[];
  stacks: Category[];
}
export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface School {
  name: string;
  degree: string;
  graduation: string;
}

export interface Project {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  categories: Category[];
  key_techs: string[];
}

export type Category =
  | "react"
  | "node"
  | "express"
  | "nextjs"
  | "postgres"
  | "mongoDB"
  | "firebase"
  | "docker"
  | "express"
  | "nestjs";
