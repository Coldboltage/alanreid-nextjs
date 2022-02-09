import React from "react";
import SectionTitle from "./SectionTitle";
import DeveloperCard from "./DevelopersCard";

// Title - Developers worth knowing
// Sub Title - These are the guys I talk to most while on this journey

// Gscience inspirations, three faces
// Div for the image
// Picture Section
// Content Section

const OtherDevelopers = () => {
  return (
    <section className="bg-[#191B1F] py-10">
      <div className="max-w-screen-lg px-10 mx-auto text-white sm:px-10">
        <SectionTitle
          title={"Developers Worth Knowing"}
          subTitle={"These are the guys I talk to the most on this journey"}
        />
        {/*  */}
        <div className="flex flex-col grid-cols-3 gap-7 md:grid">
          {/* Person One */}
          <DeveloperCard
            image={"/assets/alan-profile-picture.jpg"}
            name={"Alan Reid"}
            title={"ReactJS, NextJS Web Developer and SEO"}
            description={"I decided that it was worth becoming a programmer the moment I realised that I could work from anywhere. Being an SEO, I wanted to make faster sites so GatsbyJS was my jam"}
            socials={{twitter: "https://twitter.com/itscoldbolt", linkedin: "https://alanreid.dev", gibhub: "https://github.com/Coldboltage", homepage: "https://alanreid.dev"}}
          />
          <DeveloperCard
            image={"/assets/phil-headshot.jpg"}
            name={"Phil Collins"}
            title={"Software Engineer II for PEAK6, Evil Genuises"}
            description={
              "After working half of his life as a Chef, Phil got into crpytocurrency and from that point, wanted to get more involved with the techologies behind it."}
              socials={{twitter: "https://twitter.com/pcollinsTech/", linkedin: "https://www.linkedin.com/in/phil-collins-40a0b0139/", gibhub: "https://github.com/pcollinsTech", homepage: " https://www.pcollins.tech/"}}
          />
          <DeveloperCard
            image={"/assets/leo-headshot.jpg"}
            name={"Leo Pillar"}
            title={"ReactJS, NextJS Web Developer"}
            description={"Engineer SOAP waterfall package manager open source chmod blog middleware Ruby little Bobby Tables view-model time-to-interactive directed acyclic graph coding."}
            socials={{twitter: "https://twitter.com/leopillar", linkedin: "https://www.linkedin.com/in/leo-pillar-0298b051/", gibhub: "https://github.com/lpillar1990", homepage: " https://leopillar.netlify.app/"}}
          />
        </div>
      </div>
    </section>
  );
};

export default OtherDevelopers;