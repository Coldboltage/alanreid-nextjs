import styles from "../styles/PostItem.module.css";
import Image from "next/image";
import SmallMeta from "./SmallMeta";
import Link from "next/link";
import { PostItemInterface } from "../types/Post";

const PostItem = ({ index, slug, frontmatter, imageSize, stats, listPage }: PostItemInterface) => {

  const spanSetup = (value: number) => {

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
      default:
        return ""
    }
  };

  const test = spanSetup(index);

  // const itemClasses = cx({
  //   "min-h-fit": true,
  //   big: test === "big",
  //   small: test === "small",
  //   medium: test === "medium",
  // });


  return (
    <div className={`${styles[test]} min-h-fit border-b-2 pb-3 border-sky-900`}>
      {/* <img src={LaptopImage} alt="test"></img> */}
      <div className={`${styles.imageContainer}`}>
        <Link href={`/${slug}`} passHref>
          <Image
            src={frontmatter.image}
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
