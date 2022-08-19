import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import pageLinks from "../constants/pageLinks";

jest.useRealTimers();
jest.setTimeout(60000);

describe("Test Blog Pages and Page work", () => {
  let browser: any, page: any, files: string[], posts: string[];
  beforeAll(async () => {
    // Get all the posts.
    files = fs.readdirSync(path.join(__dirname, "..", "posts"));
    posts = files.map((filename) => {
      return filename.replace(".mdx", "");
    });
  });

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: [`--no-sandbox`, `--disable-setuid-sandbox`],
    });
    page = await browser.newPage();
  });

  it("Should load every blog post", async () => {
    for await (let post of posts) {
      // console.log(post);
      const response = await page.goto(`http://localhost:3000/${post}`);
      // console.log("Page Loaded");
      const answer = await response.ok();
      // const finalResponse = await page.waitForResponse(async response => {
      //   return await response.ok()
      // });
      // const answer = finalResponse.ok()
      expect(answer).toBe(true);
    }
  });

  it("Should open every page assigned", async () => {
    for await (let links of pageLinks) {
      // console.log(links.href);
      const response = await page.goto(links.href);
      // console.log("Page Loaded");
      const answer = await response.ok();
      // const finalResponse = await page.waitForResponse(async response => {
      //   return await response.ok()
      // });
      // const answer = finalResponse.ok()
      expect(answer).toBe(true);
    }
  });

  afterEach(async () => await browser.close());
});
