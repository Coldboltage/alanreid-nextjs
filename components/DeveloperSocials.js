import React from "react";
import { FaHome, FaTwitter, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const DeveloperSocials = ({ socials }) => {
  console.log(socials);
  return (
    <div className="flex items-center gap-2 text-sm lg:gap-4">
      <a href={socials.homepage}>
        <FaHome />
      </a>
      <a href={socials.gibhub}>
        <FaGithubSquare />
      </a>
      <a href={socials.linkedin}>
        <FaLinkedin />
      </a>
      <a href={socials.twitter}>
        <FaTwitter />
      </a>
    </div>
  );
};

export default DeveloperSocials;
