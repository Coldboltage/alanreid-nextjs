import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import skills from "../constants/skills";
import CallToAction from "../components/CallToAction";
import type { NextPage } from 'next';


const CV: NextPage = () => {
  return (
    <Layout>
      <div className="bg-[#191B1F] text-white pb-10">
        <div className="sm:px-36">
          {/* Title */}
          <div className="container-layout sm:px-36 flex flex-col gap-2 pt-10 mx-auto sm:gap-4 sm:pt-16 ">
            <h1 className="text-3xl sm:text-5xl font-semibold underline-offset-4 underline decoration-[#26a8ed]">
              CV
            </h1>
            <h2 className="text-xl sm:text-2xl">Fullstack Developer and SEO</h2>
          </div>
          {/* Picture */}
          {/* Information */}
          <div className="container-layout sm:px-36 py-10 text-lg">
            <p className="text-base leading-8">
              {`I build solutions for businesses which meet the highest of SEO standards. This is achieved using Gatsby or Next for the frontend. For backend work, I love using Node and Express with Puppeteer.`}
            </p>
          </div>
          <div className="container-layout sm:px-36 pb-10 text-lg">
            <h2 className="pb-5 text-xl font-bold sm:text-2xl">
              My Javascript Programming Stack
            </h2>
            <div className="flex flex-col gap-2 pt-5 text-sm">
              {skills.map((skill) => (
                <div key={skill.name} className="flex gap-4 border-b-[1px] pb-2 items-center">
                  <Image src={skill.icon} width={40} height={40} alt={`${skill.name}'s icon`} />
                  <p><span className="italic font-bold">{skill.name}</span>{` ${skill.description}`}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="container-layout sm:px-36  pb-5 text-base">
            {` With 10 years of SEO experience, I'm able to shape marketing departments and help them to become more SEO aware. `}
          </p>
          <div className="container-layout sm:px-36 pb-10 text-lg">
            <h2 className="pb-5 text-xl font-bold sm:text-2xl">
              Courses I've taken
            </h2>
          </div>
        </div>
      </div>
      <CallToAction />
    </Layout>
  );
};

export default CV;
