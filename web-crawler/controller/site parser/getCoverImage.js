const getCoverImage = async (page) => {
  return (await page.$("meta[property='og:image']"))
    ? await page.$eval("meta[property='og:image']", (meta) => {
        return meta.content;
      })
    : (await page.$('property="twitter:image"'))
    ? await page.$eval('property="twitter:image"', (meta) => {
        return meta.content;
      })
    : "";
};

export default getCoverImage;
