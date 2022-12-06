import checkRobots from "./checkRobots";

const getLinks = async (page) => {
  const links = await page.$$eval("a", (tags) => {
    return tags.map((tag) => {
      if (checkRobots(tag.href)) return tag.href;
    });
  });

  return links;
};
