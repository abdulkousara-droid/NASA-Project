const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://NASA-Api:GmYnxwmmCLaPs66j@cluster0.daa6dgh.mongodb.net/nasa";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
