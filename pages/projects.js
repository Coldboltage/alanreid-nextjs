import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import CallToAction from "../components/CallToAction";
import ProjectItem from "../components/project/ProjectItem"
import {skyscannerPlus} from "../constants/projects"

// Images
import SkyscannerHomeOne from "../public/assets/projects-images/skyscannerplus-home.png"

const Project = () => {
  return (
    <Layout>
      <div className="bg-[#191B1F] text-white pb-10">
        <div className="">
          {/* Title */}
          <div className="flex flex-col gap-2 pt-10 pb-10 mx-auto sm:px-36 container-layout sm:gap-4 sm:pt-16 ">
            <h1 className="text-3xl sm:text-5xl font-semibold underline-offset-4 underline decoration-[#26a8ed]">
              Projects
            </h1>
            <h2 className="text-xl sm:text-2xl">My own personal projects I've worked on</h2>
          </div>
          <ProjectItem name="Skyscanner Plus" link="https://skyscannerplus.com" tagLine="It's Skyscanner but cheaper" entryStatement="Skyscanner Plus operates as a toolset which works on top of Skyscanner. Skyscanner does all of the work while I leverage Skyscanner to do more than it already does." image={SkyscannerHomeOne} project={skyscannerPlus}/>
        </div>
      </div>
      <CallToAction />
    </Layout>
  );
};

export default Project;
