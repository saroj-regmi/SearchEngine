import generateKeywords from "./generateKeywords.js";

const getKeywords = async (page) => {
  try {
    return (await page.$("meta[name='keywords']"))
      ? await page.$eval("meta[name='keywords']", (meta) => {
          return meta.content;
        })
      : await generateKeywords(page);
  } catch (e) {
    console.log("Cannot process get keywords due to :" + e.message);
  }
};

export default getKeywords;
