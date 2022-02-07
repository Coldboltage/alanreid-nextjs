import React from "react";
import Image from "next/image";
import ProfilePicture from "../assets/images/alan-profile-picture.jpg";

const Hero = () => {
  return (
    <div className="bg-black flex flex-col text-white justify-items-center py-10 px-10 text-center">
      <div className="max-w-fit	mx-auto">
        {/* Img */}
        <Image
          src={ProfilePicture}
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div className="gi py-5">
        {/* Title */}
        <h2>Hi, I'm Alan Reid</h2>
        {/* Sub Title */}
        <p>I'm a previous SEO who wishes to become a developer</p>
      </div>
      {/* Who am I */}
      <p>
        I like the idea of making great experience for users while building fundementally quick sites. 
      </p>
    </div>
  );
};

export default Hero;
