import Image from "next/image";
import React from "react";

interface skillsInteface {
  end: string,
  stack: string
}

interface projectItemInterface {
  name: string,
  link: string,
  tagLine: string,
  entryStatement: string,
  image: StaticImageData,
  project: {
    skills: skillsInteface[]
    conclusion: string,
    next: string
  }
}

const ProjectItem = ({ name, link, tagLine, entryStatement, image, project }: projectItemInterface) => {
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
        <Image src={image} alt={name}/>
      </div>
      <div className="sm:px-36 container-layout">
        <ul>
          {skills.map((skill, index) => {
            return (
              <li key={index} className="text-lg "><span className=" underline-offset-2 italic font-semibold underline decoration-[#26a8ed]">{`${skill.end}`}</span>{`: ${skill.stack}`}</li>
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
