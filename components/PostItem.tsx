import styles from "../styles/PostItem.module.css";
import Image from "next/image";
import cx from "classnames";
import SmallMeta from "./SmallMeta";
import Link from "next/link";

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

interface StatsInterface {
  text: string
}


interface dataInterface {
  slug: string,
  content: string,
  stats: StatsInterface,
  listPage: boolean,
  imageSize: imageSizeInterface,
  frontmatter: frontmatterInterface
}

interface PostItemInterface {
  data: dataInterface,
  index: number,

}

const PostItem = ({ data, index, data: { stats, listPage, imageSize, frontmatter } }: PostItemInterface) => {

  const spanSetup = (value) => {
    // console.log(value)
    switch (value) {
      case 0:
      case 6:
      case 12:
      case 15:
        return "big";
      case 1:
      case 2:
      case 3:
      case 10:
      case 11:
      case 13:
      case 14:
        return "small";
      case 4:
      case 5:
      case 7:
      case 8:
      case 9:
        return "medium";
    }
  };

  const test = spanSetup(index);

  const itemClasses = cx({
    "min-h-fit": true,
    big: test === "big",
    small: test === "small",
    medium: test === "medium",
  });


  return (
    <div className={`${styles[test]} min-h-fit border-b-2 pb-3 border-sky-900`}>
      {/* <img src={LaptopImage} alt="test"></img> */}
      <div className={`${styles.imageContainer}`}>
        <Link href={`/${data.slug}`} passHref>
          <Image
            src={data.frontmatter.image}
            width={test === "big" ? imageSize.width / imageSize.height : 2}
            height={1}
            layout="responsive"
            alt=""
            className="cursor-pointer"
            priority
          />
        </Link>
      </div>
      <div className={`${styles.meta} py-5 flex flex-col `}>

        <p className={styles.category}>{frontmatter.category}</p>
        <h2 className={styles.title}>{frontmatter.title}</h2>{" "}
        <p
          className={`py-2 text-sm italic text-slate-400 ${test === "big" && "lg:hidden"
            }`}
        >
          {frontmatter.description}
        </p>
        <SmallMeta frontmatter={frontmatter} stats={stats} listpage={listPage} />
      </div>
    </div>
  );
};

export default PostItem;
