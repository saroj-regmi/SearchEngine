import extractFullText from "./extractFullText.js";

const getDescription = async (page) => {
  try {
    const customDescription = (
      await extractFullText(await page.content())
    ).substring(0, 50);

    return (await page.$("meta[name='description']"))
      ? await page.$eval("meta[name='description']", (meta) => {
          return meta.content;
        })
      : (await page.$("property='twitter:description'"))
      ? await page.$eval("property='twitter:description'", (meta) => {
          return meta.content;
        })
      : customDescription;
  } catch (e) {
    console.log("Cannot process get description due to \n" + e.message);
  }
};

export default getDescription;
