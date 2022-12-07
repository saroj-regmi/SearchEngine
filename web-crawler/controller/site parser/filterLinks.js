import { readFile } from "fs/promises";

// all the file extension
const fileExtension = JSON.parse(
  await readFile(new URL("./fileExtension.json", import.meta.url))
);

const fileterLink = (links) => {
  try {
    return links.filter((link) => {
      // checking for the file extension
      let containsExt = false;

      //   extracting the individual extension and comparing it
      for (var i in fileExtension) {
        if (link.includes(fileExtension[i])) {
          containsExt = true;
          break;
        }
      }

      // if url doesnot contain any file extension then it is valid one
      if (!containsExt) return link;
    });
  } catch (e) {
    console.log("Cannot filter link due to \n" + e.message);
  }
};

export default fileterLink;
