import getDescription from "./getDescription.js";
import getKeywords from "./getKeywords.js";
import getCoverImage from "./getCoverImage.js";
import getLinks from "./getLinks.js";
const parseSite = async (page) => {
  //
  //
  //
  // @params page
  // contains the page info scrapped by the puppeteer
  //
  //

  const link = await page.url();

  // contains all the links from the page
  const links = getLinks(page);

  // getting the site title
  const title = await page.$eval("title", (tag) => {
    return tag.innerText;
  });

  // scrapps the description from the page
  const description = await getDescription(page);

  // gets all the keywords from the site
  const keywords = await getKeywords(page);

  // gets the cover image
  const coverImage = await getCoverImage(page);

  return {
    title: title, // main title of the page
    link: link, // this will store the actual link of the site
    coverImage: coverImage, // the cover image of that will be showed when it is queried
    links: links, // contains all the other links that can reused to scrapp more information and then update the database.
    Description: description, // contains a short description of the site that is queried
    keywords: keywords, // contains all the words or keywords that best describe the site
  };
};

export default parseSite;
