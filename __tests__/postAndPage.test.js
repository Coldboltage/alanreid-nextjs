const puppeteer = require("puppeteer")
const fs = require("fs") 
const path = require("path")
import pageLinks from "../constants/pageLinks"


jest.useRealTimers();
jest.setTimeout(30000)  
describe('Test Blog Pages and Page work', () => {
  let browser, page, files, posts
  beforeAll(async () => {
    // Get all the posts.
     files = fs.readdirSync(path.join(__dirname, "..", "posts"));
     posts = files.map((filename) => {
       return filename.replace(".mdx", "");
    })
  });

  beforeEach(async () => {
    browser = await puppeteer.launch({headless: true})
    page = await browser.newPage()
  });

  it("Should load every blog post", async () => {
    for await (let post of posts) {
      await page.goto(`http://localhost:3000/${post}`)
      const finalResponse = await page.waitForResponse(async response => {
        return await response.ok()
      });
      const answer = finalResponse.ok()
      await expect(answer).toBe(true)
    }
  })

  it("Should open every page assigned", async () => {
    for await (let links of pageLinks) {
      await page.goto(links.href)
      const finalResponse = await page.waitForResponse(async response => {
        return await response.ok()
      });
      const answer = finalResponse.ok()
      await expect(answer).toBe(true)
    }
  })

  afterEach(async () => await browser.close());

  afterAll(async () => await browser.close())
});