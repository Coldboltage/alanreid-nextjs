import React from "react";
import Image from "next/image";
import ProfilePicture from "../assets/images/alan-profile-picture.jpg";

const Hero = () => {
  return (
    <section className="bg-black md:px-20">
      <div className="flex flex-col max-w-screen-lg px-10 py-10 mx-auto text-center text-white justify-items-center">
        <div className="mx-auto max-w-fit">
          {/* Img */}
          <Image
            src={ProfilePicture}
            width={150}
            height={150}
            className="rounded-full"
            alt="Alan Reid's face"
          />
        </div>
        <div className="py-5">
          {/* Title */}
          <h2 className="pb-2 text-4xl">
            {`Hi, I'm`}
            <span className="underline underline-offset-2 decoration-[#26a8ed]">
              {`Alan Reid`}
            </span>
          </h2>
          {/* Sub Title */}
          <p className="text-xl italic text-slate-400">
           {` I'm a previous SEO who wishes to become a developer`}
          </p>
        </div>
        {/* Who am I */}
        <p className="leading-8 px-44 text-slate-300">
          {`I like the idea of making great experience for users while building
          fundementally quick sites. I enjoy using both`}
          <span className="font-semibold text-[#26a8ed]">{`NextJS`}</span> {`and`}
          <span className=" font-semibold  text-[#26a8ed]">{`GatsbyJS`}</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
