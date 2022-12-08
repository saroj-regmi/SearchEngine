import startScrapping from "./bot controllers/scrapper";

import { updateSite } from "./db controllers/_site.js";
import { updateLinks } from "./db controllers/_links.js";

const scrapperBot = async () => {
  const starting_url = "https://hashnode.com/";

  const scrappedData = await startScrapping(starting_url);

  //   updates the db with the new scrapped site
  updateSite(scrappedData);

  //   updating the links to scrap
  updateLinks();
};

export default scrapperBot;
