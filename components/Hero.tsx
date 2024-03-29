import React from "react";
import Image from "next/image";
import ProfilePicture from "../assets/images/alan-profile-picture.jpg";

const Hero = () => {
  return (
    <section className="bg-black sm:px-10 md:px-20">
      <div className="px-5 py-10 mx-auto text-center text-white sm:px-0 sm:py-16 containe0r-layout justify-items-center">
        {<div className="mx-auto max-w-fit">
          {/* Img */}
          <Image
            src={ProfilePicture}
            width={150}
            height={150}
            className="rounded-full"
            alt="Alan Reid's face"
          />
        </div>}
        <div className="py-5">
          <div className="flex flex-col gap-3 sm:gap-0">
            {/* Title */}
            <h2 className="pb-2 text-3xl sm:text-4xl">
              {`Hi, I'm `}
              <span className="underline underline-offset-2 decoration-[#26a8ed]">
                {`Alan Reid`}
              </span>
            </h2>
            {/* Sub Title */}
            <p className="text-xl italic text-slate-400">
              {`I'm a Javascript Full Stack Developer, previously an SEO of 10 years`}
            </p>
          </div>
        </div>
        {/* Who am I */}
        <p className="leading-8 md:px-20 lg:px-60 2xl:px-[26rem] text-slate-300">
          {`I like the idea of making great experience for users while building
          fundementally quick sites. I enjoy using both `}
          <span className="font-semibold text-[#26a8ed]">{`Next`}</span>{" "}
          {`and`}
          <span className=" font-semibold  text-[#26a8ed]">{` Gatsby `}</span>
          {`while using`} <span className="font-semibold text-[#26a8ed]">{`Node/Express`}</span>{" "}
          {`and`}
          <span className=" font-semibold  text-[#26a8ed]">{` Puppeteer `}</span>{`for backend work.`}
        </p>
      </div>
    </section>
  );
};

export default Hero;
