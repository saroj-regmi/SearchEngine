import checkRobots from "./checkRobots.js";
import fileterLink from "./filterLinks.js";

const getLinks = async (page) => {
  try {
    const links = await page.$$eval("a", (tags) => {
      return tags.map((tag) => {
        return tag.href;
      });
    });

    // removes the file links
    const filteredLinks = fileterLink(links);

    // gets the links that can be scrapped
    const scrapAbleLinks = await Promise.all(
      filteredLinks.filter(async (link) => {
        return (await checkRobots(link)) && link;
      })
    );

    return scrapAbleLinks;
  } catch (e) {
    console.log("cannot process getlinks due to \n" + e.message);
  }
};

export default getLinks;
