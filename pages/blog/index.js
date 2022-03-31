import React from 'react'
import Layout from '../../components/Layout';
import BlogHero from "../../components/BlogHero"
import fs from "fs";
import path from "path";
import ListOfPosts from "../../components/ListOfPosts";
import matter from "gray-matter";
import {useRouter} from "next/router"
import CallToAction from '../../components/CallToAction';
import readingTime from 'reading-time';

const Blog = ({posts, filteredCategories:categories}) => {
  return (
    <Layout>
      <BlogHero name="Blog" categories={categories}/>
      <ListOfPosts postData={posts} stop/>
      <CallToAction/>
    </Layout>
  )
}

export default Blog

export async function getStaticProps(context) {
  // Read from a directory and then grab all the posts
  const files = fs.readdirSync(path.join("posts"));
  // Iterate over all the post names and then remove the .mdx
  const initialPosts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);
    const stats = readingTime(content)

    return {
      slug,
      frontmatter,
      stats
    };
  });

  const filteredCategories = [...new Set(initialPosts.map(post => post.frontmatter.category))]

  // console.log(context)

  const filterPosts = initialPosts.filter((post, index) => index < 16)
  const posts = filterPosts.sort((post1, post2) => new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date))  
  

  return {
    props: { posts, filteredCategories },
  };
}

