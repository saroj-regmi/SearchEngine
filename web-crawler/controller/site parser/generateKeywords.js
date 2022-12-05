import extractFullText from "./extractFullText.js";

const extractKeyword = (array) => {
  const keywords = [];

  for (var i in array) {
    const currentItem = array[i].slice();
    let repeat = 0;
    console.log(currentItem);
    for (var j in array) {
      if (currentItem === array[j].slice()) repeat++;
      if (repeat > 3) {
        keywords.push(currentItem);
        break;
      }
    }
  }
  return keywords;
};

const generateKeywords = async (page) => {
  const fullText = await extractFullText(await page.content());

  const textArray = fullText.split(" ");
  const keywords = extractKeyword(textArray);
  console.log(keywords);
};

export default generateKeywords;
