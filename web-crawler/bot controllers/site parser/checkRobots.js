import robotsParser from "robots-parser";
const robots = robotsParser();

const checkRobots = async (url) => {
  try {
    if (await robots.isAllowed(url)) {
      return url;
    } else {
      return false;
    }
  } catch (error) {
    console.log(
      "error occured while checking for crawling permission " + error.message
    );
    return false;
  }
};

export default checkRobots;
