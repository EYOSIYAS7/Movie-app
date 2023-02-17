const mongoose = require("mongoose");

// Schema is a function to create orderSchema which is an object that controls the structure of the docs
const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    title: {
      type: "string",
    },
    name: {
      type: "string",
    },
    rating: {
      type: "string",
    },
    imgPath: {
      type: "string",
    },
  },
  {
    timestamps: true,
  }
);
const list = mongoose.model("list", listSchema);

module.exports = list;
