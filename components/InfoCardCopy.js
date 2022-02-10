import React from "react";
import Image from "next/image";
import DeveloperSocials from "./DeveloperSocials";

const InfoCardCopy = ({ image, name, title, description, socials, width, height }) => {
  return (
    <div className="bg-neutral-800">
      {/* Image and container */}
      <div>
        <Image src={image} width={width} height={height} layout="responsive" alt={`${name}'s face`}/>
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
      </div>
    </div>
  );
};

export default InfoCardCopy;
