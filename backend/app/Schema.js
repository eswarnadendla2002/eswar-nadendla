const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    name: { type: String,required:true},
    email: { type: String ,required:true},
    phone: { type: Number ,required:true},
    company: { type: String ,required:true},
    message:{type:String,required:true}
  },
  {
    collection: "collection",
  }
);

module.exports = mongoose.model("collection", Schema);

