// import dotenv from "dotenv";

// // configuring the enviroment file
// dotenv.config({});

// the popular sites that are scrapped first.
const popularSites = require("./popularsites.json");

// for scrapping the web
const puppeteer = require("puppeteer");

const startScrapping = async () => {
  let scrappedData = {
    link: "", // this will store the actual link of the site
    coverImage: "", // the cover image of that will be showed when it is queried
    allText: "", // contains all the site text information
    links: [], // contains all the other links that can reused to scrapp more information and then update the database.
    Description: "", // contains a short description of the site that is queried
    tags: [], // contains all the words or keywords that best describe the site
  };

  //   creating brower instance

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  try {
    await page.goto("https://commons.wikimedia.org/wiki/Main_Page");

    const links = await page.$$eval("a", (tags) => {
      return tags.map((tag) => tag.href);
    });

    console.log(links);

    page.close();

    browser.close();

    return scrappedData;
  } catch (e) {
    console.log(e.message);
  }
};

startScrapping();
