import React from "react";
import Layout from "../../../components/Layout";
import BlogHero from "../../../components/BlogHero";
import fs from "fs";
import path from "path";
import ListOfPosts from "../../../components/ListOfPosts";
import matter from "gray-matter";
import { useRouter } from "next/router";
import CallToAction from "../../../components/CallToAction";
import readingTime from 'reading-time';
import sizeOf from 'image-size';
import { CategoryInterface } from "../../../types/Post";


const Category = ({ posts, categoryName: { categoryName } }: CategoryInterface) => {
  const router = useRouter();
  const name =
    categoryName.charAt(0).toUpperCase() +
    categoryName.slice(1);
  return (
    <Layout>
      <BlogHero name={name} />
      <ListOfPosts postData={posts} stop />
      <CallToAction noTitle={false} />
    </Layout>
  );
};

export default Category;

export async function getStaticProps(context: {params: {categoryName: string}}) {
  // Read from a directory and then grab all the posts
  const files = fs.readdirSync(path.join("posts"));
  // Iterate over all the post names and then remove the .mdx
  const beforeFiltered = files.map((filename) => {
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


  const posts = beforeFiltered
    .filter(
      (post) =>
        context.params.categoryName.toLowerCase() ===
        post.frontmatter.category.toLowerCase()
    )
    .sort(
      (post1, post2) => {
        const date1 = new Date(post2.frontmatter.date)
        const date2 = new Date(post1.frontmatter.date)
        return date2.getTime() - date1.getTime()
      }

    );
  const categoryName = context.params

  return {
    props: { posts, categoryName },
  };
}

export async function getStaticPaths() {
  // console.log("loading");
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

  const filteredCategories = [
    ...new Set(posts.map((post) => post.frontmatter.category)),
  ];
  const paths = filteredCategories.map((category) => ({
    params: { categoryName: category.toLowerCase() },
  }));
  // console.log(paths);

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
