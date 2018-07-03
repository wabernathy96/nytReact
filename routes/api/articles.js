const router = require("express").Router();

const controller = require("../../controllers/articlesControllers");

// @route       GET api/articles/test
// @desc        Tests articles route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "ARTICLES ROUTE ONLINE" }));

// @route       GET/POST api/articles
// @desc        Tests articles route
// @access      Public
router
  .route("/")
  .get(controller.getAllArticles)
  .post(controller.createArticle);

// @route       GET/POST api/articles/:id
// @desc        Tests articles route
// @access      Public
router
  .route("/:id")
  .get(controller.getArticlebyId)
  .put(controller.updateArticle)
  .delete(controller.removeArticle);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
