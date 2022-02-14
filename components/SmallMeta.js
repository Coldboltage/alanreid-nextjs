import React from "react";
import Image from "next/image";

const SmallMeta = ({ frontmatter, bigger }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const postDate =  new Date(frontmatter.date)
  // console.log(postDate.toLocaleDateString('en-GB', options))

  return (
    <div className={`flex pt-5 ${bigger && "border-t-2 mt-5 items-center"}`}>
      <div>
        {/* Image */}
        <Image src={frontmatter.authorImage} width={bigger ? 45 : 30} height={bigger ? 45 : 30}  alt="authors face" />
      </div>
      <div className={`flex flex-col pl-3 text-xs ${bigger && "gap-1 line-height"}`}>
        {/* Name */}
        <p>{frontmatter.name}</p>
        {/* Small Meta */}
        {frontmatter.date} - 10 min read
      </div>
    </div>
  );
};

export default SmallMeta;
