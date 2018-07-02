const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  url: {
    type: String
  },
  img: {
    type: String
  }
});

const Article = mongoose.model("article", ArticleSchema);

module.exports = Article;
