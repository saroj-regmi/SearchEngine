import { readFile } from "fs/promises";

// all the file extension
const fileExtension = JSON.parse(
  await readFile(new URL("./fileExtension.json", import.meta.url))
);

const fileterLink = (links) => {
  try {
    const validLinks = links.filter((link) => {
      // checking for the file extension
      let invalidLink = false;

      //   extracting the individual extension and comparing it
      for (var i in fileExtension) {
        if (
          link.includes(fileExtension[i]) ||
          link.includes("javascript:void(0)") ||
          link.includes("javascript:")
        ) {
          invalidLink = true;
          break;
        }
      }

      // if url doesnot contain any file extension then it is valid one
      if (!invalidLink) return link;
    });

    const uniqueLinks = new Array(...new Set([...validLinks]));

    return uniqueLinks;
  } catch (e) {
    console.log("Cannot filter link due to \n" + e.message);
  }
};

export default fileterLink;
