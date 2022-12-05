import extractFullText from "./extractFullText.js";

const getDescription = async (page) => {
  const customDescription = (
    await extractFullText(await page.content())
  ).substring(0, 50);

  return (await page.$("meta[name='description']"))
    ? await page.$eval("meta[name='description']", (meta) => {
        return meta.name;
      })
    : (await page.$("property='twitter:description'"))
    ? await page.$eval("property='twitter:description'", (meta) => {
        return meta.name;
      })
    : customDescription;
};

export default getDescription;
