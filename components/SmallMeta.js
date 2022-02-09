import React from "react";
import Image from "next/image";
import moment from "moment"

const SmallMeta = ({ frontmatter }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const postDate =  new Date(frontmatter.date)
  // console.log(postDate.toLocaleDateString('en-GB', options))

  return (
    <div className="flex pt-5">
      <div className="">
        {/* Image */}
        <Image src={`${frontmatter.authorImage} `} width={30} height={30} />
      </div>
      <div className="flex flex-col pl-3 text-xs">
        {/* Name */}
        <p>{frontmatter.name}</p>
        {/* Small Meta */}
        {frontmatter.date} - 10 min read
      </div>
    </div>
  );
};

export default SmallMeta;
