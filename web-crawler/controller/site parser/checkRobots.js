import robotsParser from "robots-txt-parser";
const robots = robotsParser();

const checkRobots = async (url) => {
  try {
    await robots.useRobotsFor(url);
    if (await robots.canCrawl(url)) {
      return url;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default checkRobots;
