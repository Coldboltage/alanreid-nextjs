import React from "react";
import PostItem from "./PostItem";
import SectionTitle from "./SectionTitle";

const ListOfPosts = ({ postData }) => {
  return (
    <section className="bg-[#191B1F] py-10">
      <div className="max-w-screen-lg px-10 mx-auto text-white sm:px-0">
        <SectionTitle title={"Some Blog Posts"} subTitle={"Here's a couple of things I wrote about"}/>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-6 auto-rows-auto">
          {postData.map((singlePost, index) => {
            return (
              <PostItem key={index} data={singlePost} index={index}/>
            )
            // Each post comes in
            // Determine via index what className it'll get
            // Result of switch function based upon index

          })}
          {/* 1 big one */}
          {/* 3 small ones */}
          {/* 2 medium ones */}

          {/* Big ones should be able to break down if needs be */}
        </div>
      </div>
    </section>
  );
};

export default ListOfPosts;
