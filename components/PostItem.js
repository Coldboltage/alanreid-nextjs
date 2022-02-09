import React, { useState, useRef } from "react";
import * as styles from "../styles/PostItem.module.css";
import Image from "next/image";
import cx from "classnames";
import SmallMeta from "./SmallMeta";

const PostItem = ({ data, index }) => {
  const parentDiv = useRef(null);

  const { frontmatter } = data;

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
    <div
      className={`${styles[test]} min-h-fit border-b-2 pb-3 border-sky-900`}
    >
      {/* <img src={LaptopImage} alt="test"></img> */}
      <div className={styles.imageContainer}>
        <Image
          src={data.frontmatter.image}
          width={16}
          height={9}
          layout="responsive"
          alt=""
        />
      </div>
      <div className={`${styles.meta} p-5 `}>
        <p className={styles.category}>{frontmatter.category}</p>
        <h2 className={styles.title}>{frontmatter.title}</h2>{" "}
        <p className={`py-2 text-sm italic text-slate-400 ${test === "big" && "lg:hidden"}`}>
          {frontmatter.description}
        </p>
        <SmallMeta frontmatter={frontmatter} />
      </div>
    </div>
  );
};

export default PostItem;
