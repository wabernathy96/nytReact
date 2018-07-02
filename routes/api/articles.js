const router = require("express").Router();

const controller = require("../../controllers/articlesControllers");

// @route       GET api/articles/tests
// @desc        Tests articles route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "ARTICLES ROUTE ONLINE" }));

router
  .route("/")
  .get(controller.getAllArticles)
  .post(controller.createArticle);

router
  .route("/:id")
  .get(controller.getArticlebyId)
  .put(controller.updateArticle)
  .delete(controller.removeArticle);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
