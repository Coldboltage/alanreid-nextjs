// const puppeteer = require("puppeteer");
import fs from  "fs";
import path from "path";
// const pageLinks = require("../constants/pageLinks");
import readingTime from "reading-time";
import sizeOf from "image-size";
import matter from "gray-matter";

jest.useRealTimers();
jest.setTimeout(60000);

describe("Test Blog Pages and Page work", () => {
  let files, posts:any[];
  beforeAll(async () => {
    // Get all the posts.
    files = fs.readdirSync(path.join(__dirname, "..", "posts"));
    posts = files.map((filename) => {
      const slug = filename.replace(".mdx", "");

      const markdownWithMeta = fs.readFileSync(
        path.join("posts", filename),
        "utf-8"
      );

      const { data: frontmatter, content } = matter(markdownWithMeta);
      // Reading time information
      const stats = readingTime(content);
      const listPage = true;
      // Info for size of image.
      const imageSize = sizeOf(`public${frontmatter.image}`);

      return {
        slug,
        frontmatter,
        content,
        stats,
        listPage,
        imageSize,
      };
    });
  });
  it("Should test all posts for valid frontmatter", async () => {
    for await (let post of posts) {
      const { title, date, image, authorImage, name, category, description } =
        post.frontmatter;
      expect(typeof title).toBe("string")
      expect(typeof date).toBe("string")
      expect(typeof image).toBe("string")
      expect(typeof authorImage).toBe("string")
      expect(typeof name).toBe("string")
      expect(typeof category).toBe("string")
      expect(typeof description).toBe("string")
    }
  });

  it("Should check where posts have micro, if it's less than 201 words", () => {
    const microPosts = posts.filter((post) => post.frontmatter.micro)
  })
  afterAll(() => console.log("Complete"));
});
