import React from "react";
import { ListOfPostsInterface } from "../types/Post";
import PostItem from "./PostItem";
import SectionTitle from "./SectionTitle";


const ListOfPosts = ({ postData, title, subTitle, showTitle }: ListOfPostsInterface) => {
  return (
    // <section className={`bg-[#191B1F] py-20 ${postData.length < 3 && "h-[70vh] sm:h-[60vh]"}`}>
    <section
      className={`bg-[#191B1F] py-20`}
    >
      <div className="max-w-screen-lg px-5 mx-auto text-white sm:px-10 xl:px-0">
        {showTitle && <SectionTitle title={title} subTitle={subTitle} />}

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-6 auto-rows-auto">
          {postData.map((singlePost, index) => {
            
            // console.log(singlePost)
            // return <PostItem key={index} {...singlePost} index={index} />;
            return <PostItem key={index} post={singlePost}  index={index}/>;

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
