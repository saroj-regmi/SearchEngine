import { parse } from "node-html-parser";

const extractFullText = async (_DOC) => {
  if (_DOC) {
    const regx =
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<style((.|\n|\r)*?)<\/style>|<(...)(\s[^>]*)?\/>/gm;

    // filtering the scripts and the styles and self closing tags
    let filteredContent = _DOC.replaceAll(regx, "");

    const parsedText = parse(filteredContent).rawText;

    // removing the blank lines
    const strippedText = parsedText.split("\n").join("");
    console.log(strippedText);
    return strippedText;
  }
};
extractFullText();

export default extractFullText;
