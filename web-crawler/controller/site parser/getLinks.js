import checkRobots from "./checkRobots.js";

const getLinks = async (page) => {
  try {
    const links = await page.$$eval("a", (tags) => {
      return tags.map((tag) => {
        return tag.href;
      });
    });

    const scrapAbleLinks = await Promise.all(
      links.map(async (link) => {
        return await checkRobots(link);
      })
    );

    return scrapAbleLinks;
  } catch (e) {
    console.log("cannot process getlinks due to \n" + e.message);
  }
};

export default getLinks;
