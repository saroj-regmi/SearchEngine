// import dotenv from "dotenv";

// // configuring the enviroment file
// dotenv.config({});

// the popular sites that are scrapped first.
// const popularSites = require("./popularsites.json");

// for scrapping the web
const puppeteer = require("puppeteer");
const codeStripper = require("./controller/_stripCode.js");
const startScrapping = async () => {
  let scrappedData = {
    title: "",
    link: "", // this will store the actual link of the site
    coverImage: {}, // the cover image of that will be showed when it is queried
    allText: "", // contains all the site text information
    links: [], // contains all the other links that can reused to scrapp more information and then update the database.
    Description: "", // contains a short description of the site that is queried
    tags: [], // contains all the words or keywords that best describe the site
  };

  //   creating brower instance

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  const currentLink = "https://commons.wikimedia.org/wiki/Main_Page";
  try {
    await page.goto(currentLink);

    // contains all the links from the page
    const links = await page.$$eval("a", (tags) => {
      return tags.map((tag) => tag.href);
    });
    // getting the site title
    const title = await page.$eval("title", (tag) => {
      return tag.innerText;
    });

    //getting the sites entire doc
    const _DOC = await page.content();

    // contains the entire text of the site as a plain text.
    const textContent = codeStripper(_DOC);

    // scrapps the description from the page
    const description = (await page.$("meta[name='description']"))
      ? await page.$eval("meta[name='description']", (meta) => {
          return meta.name;
        })
      : false;

    // gets all the keywords from the site
    const keywords = (await page.$("meta[name='keywords']"))
      ? await page.$eval("meta[name='keywords']", (meta) => {
          return meta.content;
        })
      : false;

    // gets the cover image
    const coverImage = (await page.$("meta[property='og:image']"))
      ? await page.$eval("meta[property='og:image']", (meta) => {
          return meta.content;
        })
      : false;

    // setting the scrapped data
    // scrappedData.title = title; // setting the title
    // scrappedData.links = links; // all the links found in the sites
    // scrappedData.link = currentLink; // sets the page's current link
    // scrappedData.coverImage = coverImage; // setting the site's image

    console.log({
      description,
      keywords,
      coverImage,
    });

    // closing the browser
    browser.close();
    return scrappedData;
  } catch (e) {
    console.log("I am in the top level catch section" + e.message);

    // closing the browser
    browser.close();
  }
};

startScrapping();
