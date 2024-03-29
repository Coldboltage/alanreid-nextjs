import fs from "fs";
import path from "path";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import matter from "gray-matter";
import ListOfPosts from "../components/ListOfPosts";
import OtherDevelopers from "../components/OtherDevelopers";
import Books from "../components/Books";
import CallToAction from "../components/CallToAction";
import readingTime from 'reading-time';
import sizeOf from "image-size"
import type { NextPage } from 'next';
import { PostItemInterface } from "../types/Post";

interface HomeInterface {
  indexPosts: PostItemInterface[]
}

const Home = ({ indexPosts }: HomeInterface) => {
  return (
    <Layout>
      <Head>
        <title>{`Alan Reid's Blog`}</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Alan Reid's Blog" />
        <meta name="description" content="A developers blog about their progress and how their getting better at becoming a Javascript Fullstack Developer" />

        {/* <!-- Open Graph / Facebook --/> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alanreid.dev" />
        <meta property="og:title" content="Alan Reid's Blog" />
        <meta property="og:description" content="A developers blog about their progress and how their getting better at becoming a Javascript Fullstack Developer" />
        <meta property="og:image" content="https://alanreid.dev/assets/alan-profile-picture.jpg" />

        {/* <!-- Twitter --/> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alanreid.dev" />
        <meta property="twitter:title" content="Alan Reid's Blog" />
        <meta property="twitter:description" content="A developers blog about their progress and how their getting better at becoming a Javascript Fullstack Developer" />
        <meta property="twitter:image" content="https://alanreid.dev/assets/alan-profile-picture.jpg" />
      </Head>
      {/* Hero Section */}
      <Hero />
      <ListOfPosts showTitle={true} postData={indexPosts} title={"Some Blog Posts"} subTitle={"Here's a couple of things I wrote about"} />
      <OtherDevelopers />
      <Books title={`Books I'd recommend`} subtitle={`Strong fundamentals make everyday coding easier`} />
      <CallToAction />
      {/* <WhyFollow/> */}

    </Layout>
  );
}

export default Home

export async function getStaticProps() {
  // Read from a directory and then grab all the posts names
  console.log(__dirname)
  const files = fs.readdirSync(path.join(__dirname, "..", "..", "..", "posts"));
  // Iterate over all the post names and then remove the .mdx
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);
    // Reading time information
    const stats = readingTime(content)
    const listPage = true
    // Info for size of image.
    const imageSize = sizeOf(`public${frontmatter.image}`)

    return {
      slug,
      frontmatter,
      content,
      stats,
      listPage,
      imageSize
    };
  });
  const sortedPosts = posts.sort((post1, post2) => {
    const date1 = new Date(post1.frontmatter.date)
    const date2 = new Date(post2.frontmatter.date)
    return date2.getTime() - date1.getTime()
  })
  const indexPosts = sortedPosts.filter((post, index) => index < 6)
  // const indexPosts = filterPosts.sort((post1, post2) => new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date))

  return {
    props: { indexPosts },
  };
}
