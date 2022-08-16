// const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
// const pageLinks = require("../constants/pageLinks");
const readingTime = require("reading-time");
const sizeOf = require("image-size");
const matter = require("gray-matter");

jest.useRealTimers();
jest.setTimeout(60000);
describe("Test Blog Pages and Page work", () => {
  let files, posts;
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
    }
  });
  afterAll(() => console.log("Complete"));
});
