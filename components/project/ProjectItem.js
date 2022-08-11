import Image from "next/image";
import React from "react";
import Layout from "../Layout";

const ProjectItem = ({ name, link, tagLine, entryStatement, image, project }) => {
  const {skills} = project
  return (
    <div>
      <div className="sm:px-36 container-layout">
        <h2 className="pb-2 text-2xl italic font-semibold ">
          <span className="text-[#26a8ed]">
            <a target={`_blank`} href={link}>
              {name}
            </a>
          </span>
          : {tagLine}
        </h2>
        <p className="text-lg">{entryStatement}</p>
      </div>
      <div className="py-10 sm:max-w-screen-lg sm:px-10 sm:mx-auto">
        <Image src={image}/>
      </div>
      <div className="sm:px-36 container-layout">
        <ul>
          {skills.map((skill) => {
            return (
              <li className="text-lg "><span className=" underline-offset-2 italic font-semibold underline decoration-[#26a8ed]">{`${skill.end}`}</span>{`: ${skill.stack}`}</li>
            )
          })}
        </ul>
        <p className="py-5 text-lg ">{project.conclusion}</p>
        <p className="py-5 text-lg ">{project.next}</p>

      </div>
    </div>
  );
};

export default ProjectItem;
