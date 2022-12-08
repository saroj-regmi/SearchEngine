import mongoose from "mongoose";

const connectToDb = () => {
  mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, (error) => {
    console.log(
      error
        ? "error while connecting to the data base: " + error.message
        : "Connected to database successful"
    );
  });
};
export default connectToDb;
