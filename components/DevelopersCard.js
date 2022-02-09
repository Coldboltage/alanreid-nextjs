import React from "react";
import Image from "next/image";
import DeveloperSocials from "./DeveloperSocials";

const DevelopersCard = ({ image, name, title, description, socials }) => {
  return (
    <div className="bg-neutral-800">
      {/* Image and container */}
      <div>
        <Image src={image} width={10} height={9} layout="responsive" />
      </div>
      {/* Information and container */}
      <div className="flex flex-col content-between gap-1 p-4 h-max">
        {/* Name */}
        <span className="flex justify-between ">
          <h3 className="text-base">{name}</h3>{" "}
          <DeveloperSocials socials={socials} />
        </span>
        {/* Title */}
        <p className="pb-4 text-sm text-[#26a8ed]">{title}</p>
        {/* Description */}
        <p className="text-base">{description}</p>
        {/* Socials */}
      </div>
    </div>
  );
};

export default DevelopersCard;
