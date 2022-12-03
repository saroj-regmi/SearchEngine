import puppeteer from "puppeteer";
import parseSite from "./site parser/siteParser";

const startScrapping = async (startingPoint) => {
  //   creating brower instance
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  try {
    await page.goto(startingPoint);

    parseSite(page);

    // closing the browser
    browser.close();
    return scrappedData;
  } catch (e) {
    console.log("I am in the top level catch section " + e.message);

    // closing the browser
    browser.close();
  }
};

export default startScrapping;
