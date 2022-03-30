import React from "react";
import Image from "next/image";
import dayjs from "dayjs"

const SmallMeta = ({ frontmatter, bigger }) => {

  // Using dayjs to format YAML formatted date to UK type date.
  const formattedDate = dayjs(frontmatter.date).format('DD/MM/YYYY');
  
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
        {formattedDate} - 10 min read
      </div>
    </div>
  );
};

export default SmallMeta;
