import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import AboutImage from "../assets/images/profile-picture-northern-ireland.jpg";

const About = () => {
  return (
    <Layout>
      <div className="bg-[#191B1F] text-white pb-10">
        {/* Title */}
        <div>
          <h1 className="max-w-screen-lg py-10 sm:py-16 px-5 md:px-36 mx-auto text-3xl sm:text-5xl font-semibold underline-offset-4 underline decoration-[#26a8ed]">
            About
          </h1>
        </div>
        {/* Picture */}
        <div className="sm:max-w-screen-lg sm:px-10 sm:mx-auto">
          <Image src={AboutImage}></Image>
          <p className="text-center text-xs italic underline underline-offset-2 decoration-orange-500">
            Giants Cosway - Northern Ireland
          </p>
        </div>
        {/* Information */}
        <div className="max-w-screen-lg py-10 px-5 md:px-36 mx-auto text-lg">
          <p className="leading-8">
            I'm Alan Reid, a developer from Bangor, Northern Ireland and I'm
            aiming to become as good of a developer as one can be.
          </p>
          <p className="pt-7 leading-8">
            It's been something that I've wanted to do for the last couple of
            years, to commit to become a developer. I took the plunge to full
            invest myself into web developement in 2021, learning Javascript and
            then React. I enjoyed using GatsbyJS but I've since moved onto
            NextJS.
          </p>
          <p className="pt-7 leading-8">
            Previously, I was an SEO of 10 years. I enjoyed SEO purely because
            it filled my excitment for competition. Since 2003 to 2021, I have
            activately competed either as a player or a manager in different
            titles, playing as one of the best or working with some of the best.
            Later on, the challenge to work with underdogs was far more
            interesting. SEO felt competitive as I was working against companies
            with budgets I'd laugh of the concept of working with.
          </p>
          <p className="pt-7 leading-8">
            My interest now is to become an Web Developer and also become better
            as a dancer. You'll hear more about my development here but abit of
            dancing here and there. This website will be the home for all things
            Alan Reid, and my web development progression.
          </p>
          <p className="pt-7 leading-8">
            There will be sections of this site to allow you to know how I'm
            doing and I hope to update it as soon as something new comes up
            which I feel is worth it. This will be my portfolio site for a
            longtime to come and I do not intend to make a new one, again.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
