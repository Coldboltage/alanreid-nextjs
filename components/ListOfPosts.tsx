import React from "react";
import { PostItemInterface } from "../types/Post";
import PostItem from "./PostItem";
import SectionTitle from "./SectionTitle";



interface ListOfPostsInterface {
  postData: PostItemInterface[],
  title?: string,
  subTitle?: string,
  showTitle?: boolean,
  stop?: boolean
}

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
            return <PostItem key={index} data={singlePost} index={index} />;
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
