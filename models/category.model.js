const mongoose = require("mongoose");

const category = mongoose.model(
  "category",
  mongoose.Schema({
    categoryName: {
      type: String,
      require: true,
      unique: true,
    },
    categoryDescription: {
      type: String,
      required: false,
    },
    categoryImage: {
      type: String,
    },
  })
);

module.exports = {
  category,
};
