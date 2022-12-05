 
import generateKeywords from "./generateKeywords.js";

const parseSite = async (page) => {
  //
  //
  //
  // @params page
  // contains the page info scrapped by the puppeteer
  //
  //

  // contains all the links from the page
  // const links = await page.$$eval("a", (tags) => {
  //   return tags.map((tag) => tag.href);
  // });

  // getting the site title
  // const title = await page.$eval("title", (tag) => {
  //   return tag.innerText;
  // });

  //getting the sites entire doc
  const keywords = await generateKeywords(page);

  // scrapps the description from the page
  // const description = (await page.$("meta[name='description']"))
  //   ? await page.$eval("meta[name='description']", (meta) => {
  //       return meta.name;
  //     })
  //   : false;

  // gets all the keywords from the site
  // const keywords = (await page.$("meta[name='keywords']"))
  //   ? await page.$eval("meta[name='keywords']", (meta) => {
  //       return meta.content;
  //     })
  //   : false;

  // gets the cover image
  // const coverImage = (await page.$("meta[property='og:image']"))
  //   ? await page.$eval("meta[property='og:image']", (meta) => {
  //       return meta.content;
  //     })
  //   : false;

  return {
    title: "", // main title of the page
    link: "", // this will store the actual link of the site
    coverImage: {}, // the cover image of that will be showed when it is queried
    allText: "", // contains all the site text information
    links: [], // contains all the other links that can reused to scrapp more information and then update the database.
    Description: "", // contains a short description of the site that is queried
    tags: [], // contains all the words or keywords that best describe the site
  };
};

export default parseSite;
