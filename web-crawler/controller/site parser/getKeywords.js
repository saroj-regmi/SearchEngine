import generateKeywords from "./generateKeywords.js";

const getKeywords = async (page) => {
  return (await page.$("meta[name='keywords']"))
    ? await page.$eval("meta[name='keywords']", (meta) => {
        return meta.content;
      })
    : await generateKeywords(page);
};

export default getKeywords;
