import { FC } from "react";
import { School } from "../type";

import { FaUniversity } from "react-icons/fa";
const Schools: FC<School> = ({ degree, graduation, name }) => {
  return (
    <div className="mx-6 my-4 flex">
      <FaUniversity className="inline-block w-8 h-12 mr-4 text-green-600" />
      <div>
        <h3 className="text-xl font-bold"> {name}</h3>
        <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {degree} •{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {graduation}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Schools;
