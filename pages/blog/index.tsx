import React from 'react'
import Layout from '../../components/Layout';
import BlogHero from "../../components/BlogHero"
import fs from "fs";
import path from "path";
import ListOfPosts from "../../components/ListOfPosts";
import matter from "gray-matter";
import type { NextPage } from 'next';
import CallToAction from '../../components/CallToAction';
import readingTime from 'reading-time';
import sizeOf from 'image-size';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'


interface BlogInterface {
  posts: [],
  filteredCategories: string[]
}

const Blog = ({posts, filteredCategories}: BlogInterface) => {
  return (
    <Layout>
      <BlogHero name="Blog" categories={filteredCategories}/>
      <ListOfPosts postData={posts} stop={true}/>
      <CallToAction/>
    </Layout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async (context) => {
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
    const imageSize = sizeOf(`public${frontmatter.image}`)

    return {
      slug,
      frontmatter,
      stats,
      imageSize
    };
  });

  const filteredCategories = [...new Set(initialPosts.map(post => post.frontmatter.category))]

  // console.log(context)

  const filterPosts = initialPosts.filter((post, index) => index < 16)
  const posts = filterPosts.sort((post1, post2) => {
    const date1 = new Date(post1.frontmatter.date) 
    const date2 =  new Date(post2.frontmatter.date)
    return date2.getTime() - date1.getTime()
  })  

  

  return {
    props: { posts, filteredCategories },
  };
}

