// fetches all the Links
export const getAllLinks = async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({
      msg: "Error occured in the server while getting all the Links",
    });
  }
};

// get all the unparsed or unscrapped links
export const getUnscrappedLinks = async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({
      msg: "Error occured in the server while getting all the unparsed links",
    });
  }
};

// modify one link from unparsed to parsed
export const updateOneLink = async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({
      msg: "Error occured in the server while updating the site",
    });
  }
};

// deleting all the Links
export const deleteAllLinks = async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({
      msg: "Error occured in the server while deleting all the Links",
    });
  }
};
