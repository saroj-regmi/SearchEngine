import checkRobots from "./checkRobots.js";

const getLinks = async (page) => {
  const links = await page.$$eval("a", (tags) => {
    try {
      return tags.map((tag) => {
        if (checkRobots(tag.href)) return tag.href;
      });
    } catch (e) {
      console.log("cannot process getlinks due to \n" + e.message);
    }
  });

  return links;
};

export default getLinks;
