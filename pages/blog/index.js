import React from 'react'
import Layout from '../../components/Layout';
import BlogHero from "../../components/BlogHero"
import fs from "fs";
import path from "path";
import ListOfPosts from "../../components/ListOfPosts";
import matter from "gray-matter";
import {useRouter} from "next/router"
import CallToAction from '../../components/CallToAction';

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

  const filteredCategories = [...new Set(posts.map(post => post.frontmatter.category))]

  // console.log(context)
  

  return {
    props: { posts, filteredCategories },
  };
}

