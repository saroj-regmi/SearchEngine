import extractFullText from "./extractFullText.js";

// grammer stuff
import { readFile } from "fs/promises";

// prepositions, pronouns articles and common verbs

const grammer = JSON.parse(
  await readFile(new URL("./grammer/grammer.json", import.meta.url))
);

const extractKeyword = (array) => {
  const keywords = [];

  for (var i in array) {
    const currentItem = array[i].slice();

    // removing all the pronouns and prepositions
    if (grammer && grammer.includes(currentItem)) continue;

    // removing words shorter than lenght three
    if (currentItem.length < 2) continue;

    // checking it the word being checked already exists in the keywords or not

    if (keywords.includes(currentItem)) continue;

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

  return keywords;
};

export default generateKeywords;
