import React from "react";
import SectionTitle from "./SectionTitle";
import InfoCard from "./InfoCard";



const OtherDevelopers = () => {
  return (
    <section className="bg-[#191B1F] py-8 sm:py-8">
      <div className="max-w-screen-lg px-10 mx-auto text-white sm:px-10 lg:px-5">
        <SectionTitle
          title={"Developers Worth Knowing"}
          subTitle={"These are the guys I talk to the most on this journey"}
        />
        {/*  */}
        <div className="flex flex-col grid-cols-3 gap-7 sm:px-20 md:px-0 md:grid">
          {/* Person One */}
          <InfoCard
            image={"/assets/alan-profile-picture.jpg"}
            name={"Alan Reid"}
            title={"Full stack Developer and SEO"}
            description={"I decided that it was worth becoming a programmer the moment I realised that I could work from anywhere. Being an SEO, I wanted to make faster sites so GatsbyJS was my jam"}
            socials={{twitter: "https://twitter.com/itscoldbolt", linkedin: "https://alanreid.dev", github: "https://github.com/Coldboltage", homepage: "https://alanreid.dev"}}
          />
          <InfoCard
            image={"/assets/phil-headshot.jpg"}
            name={"Phil Collins"}
            title={"Software Engineer II for PEAK6, Evil Genuises"}
            description={
              "After working half of his life as a Chef, Phil got into crpytocurrency and from that point, wanted to get more involved with the techologies behind it."}
              socials={{twitter: "https://twitter.com/pcollinsTech/", linkedin: "https://www.linkedin.com/in/phil-collins-40a0b0139/", github: "https://github.com/pcollinsTech", homepage: " https://www.pcollins.tech/"}}
          />
          <InfoCard
            image={"/assets/leo-headshot.jpg"}
            name={"Leo Pillar"}
            title={"ReactJS, NextJS Web Developer"}
            description={"Leo's path has taken a few changes over the years - from doing 3 years I.C.T in college, to the last 12 years being a Commercial Diver. His passion and interest in web development has led him back to being a Front-end Developer.."}
            socials={{twitter: "https://twitter.com/leopillar", linkedin: "https://www.linkedin.com/in/leo-pillar-0298b051/", github: "https://github.com/lpillar1990", homepage: " https://leopillar.netlify.app/"}}
          />
        </div>
      </div>
    </section>
  );
};

export default OtherDevelopers;
