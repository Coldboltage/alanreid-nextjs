import React from "react";
import Image from "next/image";
import dayjs from "dayjs"

interface frontmatterInterface {
  title: string,
  date: string,
  image: string,
  authorImage: string,
  name: string,
  category: string,
  description: string
}

interface imageSizeInterface {
  width: number,
  height: number
}

interface statsInterface {
  text: string
}

interface SmallMetaInterface {
  frontmatter: frontmatterInterface, 
  bigger?: boolean, 
  stats: statsInterface,
  listpage: boolean
}

const SmallMeta = ({ frontmatter, bigger, stats, listpage }: SmallMetaInterface) => {

  // Using dayjs to format YAML formatted date to UK type date.
  const formattedDate = dayjs(frontmatter.date).format('DD/MM/YYYY');

  return (
    <div className={`flex ${listpage ? "pt-3" : "pt-5"} ${bigger && "border-t-2 mt-5 items-center"}`}>
      <div>
        {/* Image */}
        <Image src={frontmatter.authorImage} width={bigger ? 45 : 30} height={bigger ? 45 : 30} alt="authors face" />
      </div>
      <div className={`flex flex-col pl-3 text-xs ${bigger && "gap-1 line-height"}`}>
        {/* Name */}
        <p>{frontmatter.name}</p>
        {/* Small Meta */}
        {formattedDate} - {stats.text}
      </div>
    </div>
  );
};

export default SmallMeta;
