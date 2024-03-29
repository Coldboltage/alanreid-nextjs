import React from "react";
import { FaHome, FaTwitter, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { DeveloperSocials } from "../types/Post";

const DeveloperSocials = ({ socials }: DeveloperSocials) => {
  return (
    <div className="flex items-center gap-2 text-sm lg:gap-4">
      {socials.homepage && <a href={socials.homepage}>
        <FaHome />
      </a>}
      {socials.github && <a href={socials.github}>
        <FaGithubSquare />
      </a>}
      {socials.linkedin && <a href={socials.linkedin}>
        <FaLinkedin />
      </a>}
      {socials.twitter && <a href={socials.twitter}>
        <FaTwitter />
      </a>}
    </div>
  );
};

export default DeveloperSocials;
