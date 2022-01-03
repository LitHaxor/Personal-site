import { FC } from "react";
import { Experience } from "../type";
import { MdWork } from "react-icons/md";

interface IExperience {
  experience: Experience;
}
const ExperienceComp: FC<IExperience> = ({ experience }) => {
  return (
    <div className="mx-6 my-4 flex">
      <MdWork className="inline-block w-8 h-12 mr-4 text-green-600" />
      <div>
        <a className="text-xl font-bold" href={experience.companyURL}>
          {" "}
          {experience.company}
        </a>
        <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {experience.title} •{" "}
          <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {experience.startedDate}-{experience.endingDate}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ExperienceComp;
