const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: STRING,
    required: true
  },
  summary: {
    type: STRING,
    required: true
  },
  url: {
    type: STRING
  },
  img: {
    type: STRING
  }
});

const Article = mongoose.model("article", ArticleSchema);

module.exports = Article;
