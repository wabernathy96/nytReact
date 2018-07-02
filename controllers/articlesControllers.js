const Article = require("../models/Article");

module.exports = {
  getAllArticles: (req, res) => {
    Article.find({})
      .sort({ date: -1 })
      .then(articleData => res.json(articleData))
      .catch(err => res.status(404).json(err));
  },
  getArticlebyId: (req, res) => {
    Article.findById(req.params.id)
      .then(articleData => res.json(articleData))
      .catch(err => res.status(404).json(err));
  },
  createArticle: (req, res) => {
    Article.create(req.body)
      .then(articleData => res.json(articleData))
      .catch(err => res.status(404).json(err));
  },
  updateArticle: (req, res) => {
    Article.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(articleData => res.json(articleData))
      .catch(err => res.status(404).json(err));
  },
  removeArticle: (req, res) => {
    Article.findOneAndRemove({ _id: req.params.id })
      .then(articleData => res.json(articleData))
      .catch(err => res.status(404).json(err));
  }
};
