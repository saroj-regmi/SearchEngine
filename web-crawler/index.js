import connectToDb from "./config/connectToDb.js";

// starts the scrapping
import scrapperBot from "./scrapperBot.js";

connectToDb();

scrapperBot();
