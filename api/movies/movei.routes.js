const express = require("express");
const router = express.Router();
const uplaoder = require("../../middlewares/uploader");

const {
  movieCreate,
  movieGet,
  fetchMovie,
  movieUpdate,
  movieDelete,
} = require("./movie.controller");

router.param("moveiId", async (req, res, next, moveiId) => {
  try {
    const foundMovie = await fetchMovie(moveiId);
    if (!foundMovie) return next({ status: 404, message: "post not found" });
    req.movie = foundMovie;
    next();
  } catch (error) {
    return next(error);
  }
});

router.post("/", uplaoder.single("posterImage"), movieCreate);
router.get("/", movieGet);
router.put("/:moveiId", movieUpdate);
router.delete("/:moveiId", movieDelete);

module.exports = router;
