import extractFullText from "./extractFullText.js";

// grammer stuff
// import prepositions from "./grammer/preposition.json";
// import pronouns from "./grammer/pronoun.json";
import { readFile } from "fs/promises";

// all grammer prepositions
const preposition = JSON.parse(
  await readFile(new URL("./grammer/preposition.json", import.meta.url))
);
const pronouns = JSON.parse(
  await readFile(new URL("./grammer/pronoun.json", import.meta.url))
);
const commonWords = JSON.parse(
  await readFile(new URL("./grammer/common.json"))
)

const extractKeyword = (array) => {
  const keywords = [];

  for (var i in array) {
    const currentItem = array[i].slice();

    // removing all the pronouns and prepositions
    if (
      (preposition && preposition.includes(currentItem)) ||
      (pronouns && pronouns.includes(currentItem))
    )
      continue;

    let repeat = 0;
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
  return keywords;
};

export default generateKeywords;
