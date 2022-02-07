import React from "react";
import Image from "next/image";
import ProfilePicture from "../assets/images/alan-profile-picture.jpg";

const Hero = () => {
  return (
    <section className="bg-black md:px-20">
      {" "}
      <div className="container flex flex-col px-10 py-10 mx-auto text-center text-white justify-items-center">
        <div className="mx-auto max-w-fit">
          {/* Img */}
          <Image
            src={ProfilePicture}
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="py-5 gi">
          {/* Title */}
          <h2>Hi, I'm Alan Reid</h2>
          {/* Sub Title */}
          <p>I'm a previous SEO who wishes to become a developer</p>
        </div>
        {/* Who am I */}
        <p>
          I like the idea of making great experience for users while building
          fundementally quick sites.
        </p>
      </div>
    </section>
  );
};

export default Hero;
