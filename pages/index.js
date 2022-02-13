import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import matter from "gray-matter";
import ListOfPosts from "../components/ListOfPosts";
import OtherDevelopers from "../components/OtherDevelopers";
import Books from "../components/Books";
import CallToAction from "../components/CallToAction";

export default function Home({ indexPosts }) {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero/>
      <ListOfPosts showTitle={true} postData={indexPosts} title={"Some Blog Posts"} subTitle={"Here's a couple of things I wrote about"}/>
      <OtherDevelopers/>
      <Books title={`Books I'd recommend`} subtitle={`Strong fundamentals make everyday coding easier`}/>
      <CallToAction/>
      {/* <WhyFollow/> */}
        
    </Layout>
  );
}

export async function getStaticProps() {
  // Read from a directory and then grab all the posts
  const files = fs.readdirSync(path.join("posts"));
  // Iterate over all the post names and then remove the .mdx
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);


    return {
      slug,
      frontmatter,
    };
  });
  const filterPosts = posts.filter((post, index) => index < 6)
  const indexPosts = filterPosts.sort((post1, post2) => new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date))  

  return {
    props: { indexPosts },
  };
}
