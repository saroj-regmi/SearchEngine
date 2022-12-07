const getCoverImage = async (page) => {
  try {
    return (await page.$("meta[property='og:image']"))
      ? await page.$eval("meta[property='og:image']", (meta) => {
          return meta.content;
        })
      : (await page.$('property="twitter:image"'))
      ? await page.$eval('property="twitter:image"', (meta) => {
          return meta.content;
        })
      : "";
  } catch (e) {
    console.log("cannot process getCoverImage due to :\n" + e.message);
  }
};

export default getCoverImage;
