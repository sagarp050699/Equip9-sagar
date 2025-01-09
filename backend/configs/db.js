const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://sagarp050699:Pass@12345@cluster0.ogp6d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  
);

module.exports = {
  connection,
};
