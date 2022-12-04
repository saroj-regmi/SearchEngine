import { parse } from "node-html-parser";

const root = parse(`<html><head><body> 
hello how are you <h1>this is chor</h1>
</body></head></html>`);

const extractFullText = async (_DOC) => {
  if (_DOC) {
    const _DOC_NO_SCRIPT = _DOC.replace(RegExp(<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>), '')
    const parsedText = parse(_DOC_NO_SCRIPT).rawText;
    console.log(parsedText);
    return parsedText;
  }
};
extractFullText();

export default extractFullText;
