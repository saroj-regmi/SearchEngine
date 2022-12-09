import { linksModel } from "../config/model";

// fetches all the Links
export const getAllLinks = async (req, res) => {
  try {
    const allLinks = await linksModel.find(); // finds all the links

    if (!allLinks || allLinks.length === 0)
      return res.status(404).json({
        msg: "No links were found",
      });

    return res.status(200).json({
      msg: "Fetching all links sucessfull",
      data: allLinks,
    });
  } catch (e) {
    return res.status(500).json({
      msg: "Error occured in the server while getting all the Links",
    });
  }
};

// get all the unparsed or unscrapped links
export const getUnscrappedLinks = async (req, res) => {
  try {
  } catch (e) {
    return res.status(500).json({
      msg: "Error occured in the server while getting all the unparsed links",
    });
  }
};

// modify one link from unparsed to parsed
export const updateOneLink = async (req, res) => {
  try {
  } catch (e) {
    return res.status(500).json({
      msg: "Error occured in the server while updating the site",
    });
  }
};

// deleting all the Links
export const deleteAllLinks = async (req, res) => {
  try {
  } catch (e) {
    return res.status(500).json({
      msg: "Error occured in the server while deleting all the Links",
    });
  }
};
