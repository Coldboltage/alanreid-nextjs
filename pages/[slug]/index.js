import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import CallToAction from "../../components/CallToAction";
import SmallMeta from "../../components/SmallMeta";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import sizeOf from "image-size"


const Post = ({ frontmatter, content, slug, imageSize }) => {
  console.log(imageSize)
  return (
    <Layout>
      <Head>
        <title></title>
        <meta name="title" content={frontmatter.title} />
        <meta name="description" content={frontmatter.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://alanreid.dev/${slug}`} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:image" content={`https://alanreid.dev${frontmatter.image}`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://alanreid.dev/${slug}`} />
        <meta property="twitter:title" content={frontmatter.title} />
        <meta property="twitter:description" content={frontmatter.description} />
        <meta property="twitter:image" content={`https://alanreid.dev${frontmatter.image}`} />
      </Head>
      <div className="bg-[#191B1F] text-white pb-10">
        <div className="max-w-screen-lg py-10 mx-auto sm:px-5">
          {/* Title Hero */}
          <div className="flex flex-col px-5 pb-10 sm:pt-5 sm:py-16 sm:px-20 md:px-40">
            {/* Top Section */}
            <div className="">
              {" "}
              {/* Meta category */}
              <p className={`underline-offset-4 text-[#26a8ed]`}>
                {frontmatter.category.toUpperCase()}
              </p>
              {/* Title */}
              <h1 className="text-3xl font-semibold sm:leading-tight sm:text-5xl ">
                {frontmatter.title}
              </h1>
            </div>
            {/* Bottom Section */}
            <div>
              <SmallMeta frontmatter={frontmatter} bigger={true} />
            </div>
          </div>
          {/* Picture */}
          <div className="sm:max-w-screen-lg sm:px-10 sm:mx-auto">
            <Image
              src={frontmatter.image}
              width={imageSize.width}
              height={imageSize.height}
              layout="responsive"
              alt="causeway"
            ></Image>
            {frontmatter.figure && (
              <p className="text-xs italic text-center underline underline-offset-2 decoration-orange-500">
                {frontmatter.figure}
              </p>
            )}
          </div>
          <div>
            <ReactMarkdown className="px-6 pt-10 text-lg prose max-w-none dark:prose-invert prose-p:leading-8 sm:20 lg:px-36 sm:px-20 markdown">
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <CallToAction />
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  
  const imageSize = sizeOf(`public${frontmatter.image}`)
  console.log(imageSize.width)
  console.log(imageSize.height)

  return {
    props: { frontmatter, content, slug, imageSize },
  };
}
