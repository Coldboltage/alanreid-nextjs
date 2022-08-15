const puppeteer = require("puppeteer")
const fs = require("fs") 
const path = require("path") 

jest.useRealTimers();
jest.setTimeout(30000)  
describe('Google', () => {
  
  let browser, page, files, posts, slug
  beforeAll(async () => {
    // Get all the posts.
     files = fs.readdirSync(path.join(__dirname, "..", "posts"));
     posts = files.map((filename) => {
       return filename.replace(".mdx", "");
    })

    browser = await puppeteer.launch({headless: false})
    page = await browser.newPage()
  });

  it("Should Load Google", async () => {
    await page.goto('https://google.com');
  })

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
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

  afterAll(async () => await browser.close())
});